#!/usr/bin/env node
/**
 * Pre-fetches Instagram post/reel thumbnail images at BUILD TIME and writes
 * them into public/instagram/<shortcode>.jpg.
 *
 * Why this exists: the site is deployed as a static export to GitHub Pages
 * (next.config.ts has `output: 'export'`), which means there is no server
 * running at request time. A previous implementation tried to proxy
 * Instagram's CDN through a Next.js Route Handler
 * (src/app/api/instagram-image/route.ts), but dynamic route handlers that
 * read per-request search params are not supported by `next build` with
 * `output: 'export'` — that route is silently dropped from the exported
 * `out/` folder, so every request to /api/instagram-image 404s on the
 * deployed site and the Instagram thumbnails break.
 *
 * The fix: resolve each shortcode's image to a real file at build time
 * (when we still have a Node/network environment, e.g. in GitHub Actions)
 * and ship it as a static asset. Components then reference
 * `/instagram/<shortcode>.jpg` directly — a plain static file that GitHub
 * Pages can serve with no server involved.
 *
 * This script is wired up as an npm "prebuild" hook (see package.json), so
 * it runs automatically before every `next build` / `npm run build`.
 *
 * It is intentionally best-effort: if Instagram can't be reached (e.g. no
 * network, rate limited, changed markup) it logs a warning and leaves any
 * previously-fetched image in place rather than failing the whole build.
 */

import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'instagram');

const INSTAGRAM_SHEET_CSV =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQoNjvU07JkwD6lLkXV8Rr1AXwotmxvPVqEbSsjE3SwJmLdiVc7DQudOBjsFKvz7j1nx3fvOOdD2Hg2/pub?output=csv&gid=1611474361';

// Fallback list — kept in sync with the hardcoded INITIAL_INSTAGRAM_POSTS in
// src/components/MediaSection.tsx, so thumbnails still work even if the
// Google Sheet is unreachable at build time.
const FALLBACK_SHORTCODES = ['DbYBQEDJvHp', 'C-VFF56SuIV', 'DZ7pc7cpFTO', 'DVQzPHFkz0w'];

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function parseCSVRows(csvText) {
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const c = csvText[i];
    const next = csvText[i + 1];

    if (c === '"') {
      if (inQuotes && next === '"') {
        currentField += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      currentRow.push(currentField.trim());
      currentField = '';
    } else if ((c === '\n' || (c === '\r' && next === '\n')) && !inQuotes) {
      if (c === '\r') i++;
      currentRow.push(currentField.trim());
      if (currentRow.some((f) => f.length > 0)) rows.push(currentRow);
      currentRow = [];
      currentField = '';
    } else {
      currentField += c;
    }
  }
  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    if (currentRow.some((f) => f.length > 0)) rows.push(currentRow);
  }
  return rows;
}

async function getShortcodesFromSheet() {
  try {
    const res = await fetch(`${INSTAGRAM_SHEET_CSV}&_t=${Date.now()}`, {
      headers: { 'User-Agent': UA },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const csv = await res.text();
    const rows = parseCSVRows(csv).slice(1); // skip header
    const codes = rows
      .map((row) => {
        const url = row[0] || '';
        const match = url.match(/\/(p|reel|reels)\/([a-zA-Z0-9_-]+)/i);
        return match ? match[2] : null;
      })
      .filter(Boolean);
    return codes.length > 0 ? codes : null;
  } catch (err) {
    console.warn(`[fetch-instagram-images] Could not read Google Sheet, using fallback list: ${err.message}`);
    return null;
  }
}

async function fetchInstagramImage(shortcode) {
  const mediaEndpoint = `https://www.instagram.com/p/${shortcode}/media/?size=l`;

  const res1 = await fetch(mediaEndpoint, {
    redirect: 'manual',
    headers: {
      'User-Agent': UA,
      Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    },
  });

  const cdnUrl = res1.headers.get('location');
  if (!cdnUrl) throw new Error('No redirect location returned by Instagram');

  const imgRes = await fetch(cdnUrl, {
    headers: {
      'User-Agent': UA,
      Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    },
  });
  if (!imgRes.ok) throw new Error(`CDN fetch failed with HTTP ${imgRes.status}`);

  return Buffer.from(await imgRes.arrayBuffer());
}

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const shortcodes = (await getShortcodesFromSheet()) ?? FALLBACK_SHORTCODES;
  console.log(`[fetch-instagram-images] Fetching ${shortcodes.length} Instagram thumbnail(s)...`);

  let succeeded = 0;
  let failed = 0;

  for (const code of shortcodes) {
    const destPath = path.join(OUT_DIR, `${code}.jpg`);
    try {
      const buffer = await fetchInstagramImage(code);
      await writeFile(destPath, buffer);
      succeeded++;
      console.log(`[fetch-instagram-images]  ✓ ${code}`);
    } catch (err) {
      failed++;
      const hadExisting = await fileExists(destPath);
      console.warn(
        `[fetch-instagram-images]  ✗ ${code}: ${err.message}${
          hadExisting ? ' (keeping previously cached image)' : ' (no cached image available — thumbnail will 404)'
        }`
      );
    }
  }

  console.log(`[fetch-instagram-images] Done. ${succeeded} succeeded, ${failed} failed.`);
  // Never fail the build over Instagram being unreachable — worst case the
  // site ships with stale/missing thumbnails, which is far better than a
  // broken deploy.
}

main().catch((err) => {
  console.error('[fetch-instagram-images] Unexpected error:', err);
});
