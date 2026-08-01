import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import { FALLBACK_BLOG_POSTS, BlogPost } from '@/lib/notion';

// Required for Next.js static export (output: 'export')
// This route will be pre-rendered to /api/blog.json at build time
export const dynamic = 'force-static';

/** Typed shape of a Notion page result from notion.search() */
type NotionPageResult = {
  id: string;
  url: string;
  created_time: string;
  cover: { external?: { url: string }; file?: { url: string } } | null;
  properties: {
    Name?:        { title: Array<{ plain_text: string }> };
    Title?:       { title: Array<{ plain_text: string }> };
    Description?: { rich_text: Array<{ plain_text: string }> };
    Excerpt?:     { rich_text: Array<{ plain_text: string }> };
    Summary?:     { rich_text: Array<{ plain_text: string }> };
    Author?: {
      type: 'people' | 'rich_text';
      people?:     Array<{ name: string }>;
      rich_text?:  Array<{ plain_text: string }>;
    };
    Tags?:      { multi_select: Array<{ name: string }> };
    ImageURLs?: { rich_text?: Array<{ plain_text: string }>; url?: string };
  };
};

export async function GET() {
  const apiKey = process.env.NOTION_API_KEY;

  if (!apiKey) {
    console.warn('NOTION_API_KEY is not defined in env, serving fallback posts');
    return NextResponse.json({ posts: FALLBACK_BLOG_POSTS.slice(0, 9), source: 'fallback' });
  }

  try {
    const notion = new Client({ auth: apiKey });

    // Search pages accessible to the integration
    const searchRes = await notion.search({
      filter: { property: 'object', value: 'page' },
      sort: { direction: 'descending', timestamp: 'last_edited_time' },
    });

    if (!searchRes || !searchRes.results || searchRes.results.length === 0) {
      return NextResponse.json({ posts: FALLBACK_BLOG_POSTS.slice(0, 9), source: 'fallback' });
    }

    const posts: BlogPost[] = (searchRes.results as unknown as NotionPageResult[])
      .filter((page) => page.properties?.Name?.title && page.properties.Name.title.length > 0)
      .map((page, index) => {
        const props = page.properties || {};
        
        // Title
        const titleText = (props.Name?.title?.[0]?.plain_text || props.Title?.title?.[0]?.plain_text || 'Untitled Article').trim();
        
        // Summary / Excerpt
        const excerptText = props.Description?.rich_text?.[0]?.plain_text || 
                            props.Excerpt?.rich_text?.[0]?.plain_text || 
                            props.Summary?.rich_text?.[0]?.plain_text || 
                            'Read full article on Notion...';
        
        // Author
        let authorText = 'Thernika R';
        if (props.Author) {
          if (props.Author.type === 'people' && (props.Author.people?.length ?? 0) > 0) {
            authorText = props.Author.people![0].name || 'Thernika R';
          } else if (props.Author.type === 'rich_text' && (props.Author.rich_text?.length ?? 0) > 0) {
            authorText = props.Author.rich_text![0].plain_text || 'Thernika R';
          }
        }

        // Tags
        const tagsList = props.Tags?.multi_select?.map((t: { name: string }) => t.name) || ['Wellbeing'];
        
        // Thumbnail Image
        let cover = null;
        if (page.cover) {
          cover = page.cover.external?.url || page.cover.file?.url;
        }
        if (!cover && props.ImageURLs) {
          cover = props.ImageURLs.rich_text?.[0]?.plain_text || props.ImageURLs.url;
        }
        if (!cover) {
          cover = FALLBACK_BLOG_POSTS[index % FALLBACK_BLOG_POSTS.length].coverImage;
        }

        // Notion URL
        const pageUrl = page.url || `https://notion.so/${page.id.replace(/-/g, '')}`;

        // Created Date
        const createdDate = page.created_time
          ? new Date(page.created_time).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          : 'Recent';

        return {
          id: page.id,
          title: titleText,
          excerpt: excerptText,
          date: createdDate,
          readTime: '4 min read',
          category: tagsList[0] || 'Wellbeing',
          author: authorText,
          tags: tagsList,
          coverImage: cover,
          notionUrl: pageUrl,
        };
      })
      // Filter out generic placeholder "Blog Post" page
      .filter((post) => post.title.toLowerCase() !== 'blog post' && post.title !== 'Untitled Article')
      // Render top 9 most recent articles
      .slice(0, 9);

    return NextResponse.json({
      posts: posts.length > 0 ? posts : FALLBACK_BLOG_POSTS.slice(0, 9),
      source: 'notion_api',
    });
  } catch (err) {
    console.error('Error querying Notion API route:', err);
    return NextResponse.json({ posts: FALLBACK_BLOG_POSTS.slice(0, 9), source: 'fallback_error' });
  }
}
