/* eslint-disable */
const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Node.js)' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return resolve(fetchUrl(res.headers.location));
        }
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
      })
      .on('error', (err) => reject(err));
  });
}

async function updateFeeds() {
  const outputDir = path.join(__dirname, '../public/data');
  const outputPath = path.join(outputDir, 'social-feeds.json');
  let existingData = null;

  if (fs.existsSync(outputPath)) {
    try {
      existingData = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
    } catch (e) {
      existingData = null;
    }
  }

  console.log('Fetching YouTube native RSS feed...');

  let youtubeShorts = (existingData && Array.isArray(existingData.youtubeShorts) && existingData.youtubeShorts.length > 0)
    ? existingData.youtubeShorts
    : [];

  try {
    const ytXml = await fetchUrl('https://www.youtube.com/feeds/videos.xml?channel_id=UCOTjeFfsoXwgHEjNy5Kizbw');
    const entryMatches = ytXml.match(/<entry>[\s\S]*?<\/entry>/g) || [];

    const fetchedYt = entryMatches
      .slice(0, 4)
      .map((entry, idx) => {
        const idMatch = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
        const titleMatch = entry.match(/<title>([^<]+)<\/title>/);
        const videoId = idMatch ? idMatch[1] : '';
        const title = titleMatch ? titleMatch[1].replace(/#\w+/g, '').replace(/Shorts/gi, '').trim() : '';

        if (!videoId) return null;

        return {
          id: videoId,
          title: title || `YouTube Short #${idx + 1}`,
          url: `https://www.youtube.com/shorts/${videoId}`,
          thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        };
      })
      .filter(Boolean);

    if (fetchedYt.length > 0) {
      youtubeShorts = fetchedYt;
      console.log(`Successfully fetched ${fetchedYt.length} YouTube Shorts from native feed!`);
    }
  } catch (err) {
    console.warn('Could not fetch dynamic YouTube RSS feed, using cached baseline:', err.message);
  }

  let instagramPosts = (existingData && Array.isArray(existingData.instagramPosts) && existingData.instagramPosts.length > 0)
    ? existingData.instagramPosts
    : [];

  try {
    console.log('Fetching Instagram feed from Behold...');
    const igRaw = await fetchUrl('https://feeds.behold.so/LrbLq2O4qmCkpMrslcFU');
    const igData = JSON.parse(igRaw);

    const postsList = Array.isArray(igData) ? igData : (igData && Array.isArray(igData.posts) ? igData.posts : []);

    if (postsList.length > 0) {
      const fetchedIg = postsList
        .slice(0, 4)
        .map((post, idx) => {
          let rawCaption = post.prunedCaption || post.caption || '';
          let title = rawCaption ? rawCaption.split('\n')[0].replace(/#\w+/g, '').trim() : '';

          const imageUrl =
            post.sizes?.medium?.mediaUrl ||
            post.sizes?.large?.mediaUrl ||
            post.sizes?.small?.mediaUrl ||
            post.thumbnailUrl ||
            post.mediaUrl ||
            '';

          if (!imageUrl) return null;

          return {
            id: String(post.id || idx + 1),
            title: title || `Instagram Post #${idx + 1}`,
            link: post.permalink || `https://www.instagram.com/p/${post.id}`,
            imageUrl: imageUrl,
          };
        })
        .filter(Boolean);

      if (fetchedIg.length > 0) {
        instagramPosts = fetchedIg;
        console.log(`Successfully fetched ${fetchedIg.length} Instagram posts from Behold!`);
      }
    }
  } catch (err) {
    console.warn('Could not fetch dynamic Instagram feed from Behold, using baseline:', err.message);
  }

  let linkedinArticles = (existingData && Array.isArray(existingData.linkedinArticles) && existingData.linkedinArticles.length > 0)
    ? existingData.linkedinArticles
    : [];

  try {
    const liHtml = await fetchUrl('https://www.linkedin.com/newsletters/7430605949259751424/');
    const pulseRegex = /href="(https:\/\/www\.linkedin\.com\/pulse\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    const fetchedLi = [];
    const seenUrls = new Set();
    let match;
    while ((match = pulseRegex.exec(liHtml)) !== null) {
      const url = match[1];
      let title = match[2].replace(/<[^>]+>/g, '').trim();
      if (title && !title.toLowerCase().includes('report') && !seenUrls.has(url)) {
        seenUrls.add(url);

        let imageUrl = '';

        try {
          const articleHtml = await fetchUrl(url);
          const ogMatch =
            articleHtml.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i) ||
            articleHtml.match(/<meta\s+content="([^"]+)"\s+property="og:image"/i);
          if (ogMatch && ogMatch[1]) {
            imageUrl = ogMatch[1].replace(/&amp;/g, '&');
          }
        } catch (e) {
          // Keep default cover image
        }

        fetchedLi.push({
          id: String(fetchedLi.length + 1),
          title: title,
          url: url,
          imageUrl: imageUrl,
        });
      }
    }
    if (fetchedLi.length > 0) {
      linkedinArticles = fetchedLi;
      console.log(`Successfully fetched ${fetchedLi.length} LinkedIn articles from newsletter!`);
    }
  } catch (err) {
    console.warn('Could not fetch dynamic LinkedIn newsletter feed, using baseline:', err.message);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let hasContentChanged = true;

  if (existingData) {
    try {
      const isYtSame = JSON.stringify(existingData.youtubeShorts) === JSON.stringify(youtubeShorts);
      const isIgSame = JSON.stringify(existingData.instagramPosts) === JSON.stringify(instagramPosts);
      const isLiSame = JSON.stringify(existingData.linkedinArticles) === JSON.stringify(linkedinArticles);

      if (isYtSame && isIgSame && isLiSame) {
        hasContentChanged = false;
      }
    } catch (e) {
      hasContentChanged = true;
    }
  }

  if (!hasContentChanged) {
    console.log('No changes detected in social feed content. Skipping file write.');
    return;
  }

  const payload = {
    updatedAt: new Date().toISOString(),
    youtubeShorts,
    instagramPosts,
    linkedinArticles,
  };

  fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2));
  console.log(`Saved updated social feeds to ${outputPath}`);
}

updateFeeds();
