export interface YouTubeShort {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface InstagramPost {
  id: string;
  title: string;
  link: string;
  imageUrl: string;
}

export interface LinkedInArticle {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
}

export interface SocialFeedsData {
  youtubeShorts: YouTubeShort[];
  instagramPosts: InstagramPost[];
  linkedinArticles: LinkedInArticle[];
  updatedAt?: string;
}

const YOUTUBE_SHEET_CSV =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQoNjvU07JkwD6lLkXV8Rr1AXwotmxvPVqEbSsjE3SwJmLdiVc7DQudOBjsFKvz7j1nx3fvOOdD2Hg2/pub?output=csv&gid=0';
const INSTAGRAM_SHEET_CSV =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQoNjvU07JkwD6lLkXV8Rr1AXwotmxvPVqEbSsjE3SwJmLdiVc7DQudOBjsFKvz7j1nx3fvOOdD2Hg2/pub?output=csv&gid=1611474361';
const LINKEDIN_NEWSLETTER_URL =
  'https://www.linkedin.com/newsletters/7430605949259751424/';

const DEFAULT_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept-Language': 'en-US,en;q=0.9',
};

async function fetchText(url: string, timeoutMs = 8000): Promise<string> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  const isBrowser = typeof window !== 'undefined';

  try {
    const fetchOptions: RequestInit = {
      signal: controller.signal,
    };

    if (isBrowser) {
      fetchOptions.cache = 'no-store';
    } else {
      fetchOptions.headers = DEFAULT_HEADERS;
      (fetchOptions as Record<string, unknown>).next = { revalidate: 60 };
    }

    let finalUrl = url;
    if (url.includes('docs.google.com/spreadsheets')) {
      const sep = url.includes('?') ? '&' : '?';
      finalUrl = `${url}${sep}_t=${Date.now()}`;
    }

    const res = await fetch(finalUrl, fetchOptions);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} for ${finalUrl}`);
    }
    return await res.text();
  } finally {
    clearTimeout(timeoutId);
  }
}

function parseCSVRows(csvText: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
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
      if (currentRow.some((f) => f.length > 0)) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentField = '';
    } else {
      currentField += c;
    }
  }

  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    if (currentRow.some((f) => f.length > 0)) {
      rows.push(currentRow);
    }
  }

  return rows;
}

/**
 * 1. Retrieve YouTube Shorts metadata from Google Sheet GID 0
 * Uses YouTube oEmbed API to fetch actual titles & thumbnails
 */
export async function getYouTubeShortsFromSheet(): Promise<YouTubeShort[]> {
  try {
    const csv = await fetchText(YOUTUBE_SHEET_CSV);
    const lines = csv.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const urls = lines.filter((line) => line.includes('youtube.com/shorts/'));

    const shorts = await Promise.all(
      urls.map(async (url, index) => {
        const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
        if (!match) return null;
        const videoId = match[1];
        let title = `YouTube Short #${index + 1}`;
        let thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

        try {
          const oembedRaw = await fetchText(
            `https://www.youtube.com/oembed?url=https://www.youtube.com/shorts/${videoId}&format=json`,
            5000
          );
          const oembed = JSON.parse(oembedRaw);
          if (oembed.title) {
            title = oembed.title;
          }
          if (oembed.thumbnail_url) {
            thumbnailUrl = oembed.thumbnail_url;
          }
        } catch {
          // Fall back to default thumbnail and generic title
        }

        return {
          id: videoId,
          title,
          url: `https://www.youtube.com/shorts/${videoId}`,
          thumbnailUrl,
        };
      })
    );

    return shorts.filter((s): s is YouTubeShort => s !== null);
  } catch (err) {
    console.error('Error fetching YouTube Shorts from Google Sheet:', err);
    return [];
  }
}

/**
 * 2. Retrieve Instagram Posts & Reels metadata from Google Sheet GID 1611474361
 * Automatically parses urls, title, and image_urls columns from Sheet CSV
 */
export async function getInstagramPostsFromSheet(): Promise<InstagramPost[]> {
  try {
    const csv = await fetchText(INSTAGRAM_SHEET_CSV);
    const rows = parseCSVRows(csv);

    if (rows.length < 2) return [];

    const posts = rows.slice(1).map((row, idx) => {
      const postUrl = row[0] || '';
      const rawTitle = row[1] || '';
      const imageUrl = row[2] || '';

      let title = rawTitle.split('\n')[0].replace(/#\w+/g, '').trim();
      if (!title && rawTitle) {
        title = rawTitle.replace(/#\w+/g, '').trim();
      }
      if (title.length > 90) {
        title = title.substring(0, 90).trim() + '...';
      }

      const shortcodeMatch = postUrl.match(/\/(p|reel)\/([a-zA-Z0-9_-]+)/);
      const shortcode = shortcodeMatch ? shortcodeMatch[2] : String(idx + 1);

      return {
        id: shortcode,
        title: title || `Instagram Post #${idx + 1}`,
        link: postUrl,
        imageUrl: imageUrl,
      };
    });

    return posts.filter((p) => p.link && p.link.includes('instagram.com') && p.imageUrl);
  } catch (err) {
    console.error('Error fetching Instagram Posts from Google Sheet:', err);
    return [];
  }
}

/**
 * 3. Retrieve LinkedIn Newsletter articles dynamically
 * Visits LinkedIn Newsletter page, extracts articles & cover images
 */
export async function getLinkedInArticles(): Promise<LinkedInArticle[]> {
  try {
    const liHtml = await fetchText(LINKEDIN_NEWSLETTER_URL);
    const pulseRegex =
      /href="(https:\/\/www\.linkedin\.com\/pulse\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    const articles: LinkedInArticle[] = [];
    const seenUrls = new Set<string>();
    let match: RegExpExecArray | null;

    const defaultCover =
      'https://media.licdn.com/dms/image/v2/D4D12AQFGuJRH5Dre4A/article-cover_image-shrink_600_2000/B4DZ_EyMmrJwAM-/0/1785712921231?e=2147483647&v=beta&t=Xytbavr_ZvCyP_KjkMqObl1foM_YOAaCbHs-m6QjQIk';

    while ((match = pulseRegex.exec(liHtml)) !== null) {
      const url = match[1];
      const title = match[2].replace(/<[^>]+>/g, '').trim();

      if (title && !title.toLowerCase().includes('report') && !seenUrls.has(url)) {
        seenUrls.add(url);
        let imageUrl = defaultCover;

        try {
          const articleHtml = await fetchText(url, 5000);
          const ogMatch =
            articleHtml.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i) ||
            articleHtml.match(/<meta\s+content="([^"]+)"\s+property="og:image"/i);
          if (ogMatch && ogMatch[1]) {
            imageUrl = ogMatch[1].replace(/&amp;/g, '&');
          }
        } catch {
          // Keep default cover image
        }

        articles.push({
          id: String(articles.length + 1),
          title,
          url,
          imageUrl,
        });
      }
    }

    return articles;
  } catch (err) {
    console.error('Error fetching LinkedIn Newsletter articles:', err);
    return [];
  }
}

/**
 * Fetch all social feeds concurrently
 */
export async function getAllSocialFeeds(): Promise<SocialFeedsData> {
  const [ytResult, igResult, liResult] = await Promise.allSettled([
    getYouTubeShortsFromSheet(),
    getInstagramPostsFromSheet(),
    getLinkedInArticles(),
  ]);

  return {
    youtubeShorts: ytResult.status === 'fulfilled' ? ytResult.value : [],
    instagramPosts: igResult.status === 'fulfilled' ? igResult.value : [],
    linkedinArticles: liResult.status === 'fulfilled' ? liResult.value : [],
    updatedAt: new Date().toISOString(),
  };
}
