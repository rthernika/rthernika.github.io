import { Client } from '@notionhq/client';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
  coverImage?: string;
  notionUrl?: string;
}

const notionApiKey = process.env.NOTION_API_KEY;

const notion = notionApiKey ? new Client({ auth: notionApiKey }) : null;

interface NotionPageObject {
  id: string;
  url?: string;
  created_time?: string;
  parent?: {
    type?: string;
  };
  cover?: {
    external?: { url?: string };
    file?: { url?: string };
  };
  properties?: Record<string, {
    title?: Array<{ plain_text?: string }>;
    rich_text?: Array<{ plain_text?: string }>;
    type?: string;
    people?: Array<{ name?: string }>;
    multi_select?: Array<{ name?: string }>;
  }>;
}

export const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'perinatal-mental-health-guide',
    title: 'Navigating Perinatal & Maternal Wellbeing: A Guide for Expectant Mothers',
    excerpt: 'Understanding the neurobiological and emotional transformations during pregnancy, childbirth, and the postpartum transition.',
    date: 'July 28, 2026',
    readTime: '5 min read',
    category: 'Maternal Wellbeing',
    author: 'Thernika R',
    tags: ['Perinatal Care', 'Postpartum', 'Maternal Health', 'Emotional Wellbeing'],
    coverImage: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80',
    notionUrl: 'https://notion.so'
  },
  {
    id: 'student-emotional-resilience',
    title: 'Building Emotional Intelligence & Resilience in Academic Settings',
    excerpt: 'Strategies for students, parents, and educators to resolve conflict, handle exam anxiety, and foster healthy peer relationships.',
    date: 'July 20, 2026',
    readTime: '4 min read',
    category: 'Student & Parent Counselling',
    author: 'Thernika R',
    tags: ['Student Counselling', 'Emotional Intelligence', 'Parenting', 'Mediation'],
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    notionUrl: 'https://notion.so'
  },
  {
    id: 'mindful-parenting-practices',
    title: 'Mindful Parenting: Cultivating Emotional Harmony at Home',
    excerpt: 'How parents can develop self-compassion, active listening, and conflict mediation to support children through crucial developmental milestones.',
    date: 'July 12, 2026',
    readTime: '6 min read',
    category: 'Parenting & Family',
    author: 'Thernika R',
    tags: ['Mindfulness', 'Parenting', 'Child Psychology', 'Family Wellness'],
    coverImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    notionUrl: 'https://notion.so'
  }
];

export async function fetchNotionBlogPosts(): Promise<BlogPost[]> {
  if (!notion) {
    return FALLBACK_BLOG_POSTS;
  }

  try {
    const searchRes = await notion.search({
      filter: { property: 'object', value: 'page' },
    });

    const rawResults = (searchRes?.results || []) as unknown as NotionPageObject[];

    if (!rawResults || rawResults.length === 0) {
      return FALLBACK_BLOG_POSTS;
    }

    const filteredResults = rawResults.filter((page: NotionPageObject) => {
      if (!page.properties) return false;

      // Exclude workspace root pages or database container pages
      if (page.parent?.type === 'workspace') return false;

      const props = page.properties;
      const titleText =
        props.Name?.title?.[0]?.plain_text ||
        props.Title?.title?.[0]?.plain_text ||
        '';

      const cleanTitle = titleText.trim().toLowerCase();
      // Exclude empty titles or generic database titles like "blog post" or "blog posts"
      if (!cleanTitle || cleanTitle === 'blog post' || cleanTitle === 'blog posts' || cleanTitle === 'untitled article') {
        return false;
      }

      return true;
    });

    // Sort by created_time descending (newest first)
    filteredResults.sort((a, b) => {
      const timeA = a.created_time ? new Date(a.created_time).getTime() : 0;
      const timeB = b.created_time ? new Date(b.created_time).getTime() : 0;
      return timeB - timeA;
    });

    const posts: BlogPost[] = filteredResults
      .slice(0, 9)
      .map((page: NotionPageObject, index: number) => {
        const props = page.properties || {};
        const titleText = props.Name?.title?.[0]?.plain_text || props.Title?.title?.[0]?.plain_text || 'Untitled Article';
        const excerptText = props.Description?.rich_text?.[0]?.plain_text || props.Excerpt?.rich_text?.[0]?.plain_text || 'Read full article on Notion...';
        
        let authorText = 'Thernika R';
        if (props.Author) {
          if (props.Author.type === 'people' && props.Author.people && props.Author.people.length > 0) {
            authorText = props.Author.people[0].name || 'Thernika R';
          } else if (props.Author.type === 'rich_text' && props.Author.rich_text && props.Author.rich_text.length > 0) {
            authorText = props.Author.rich_text[0].plain_text || 'Thernika R';
          }
        }

        const tagsList = props.Tags?.multi_select?.map((t) => t.name).filter((name): name is string => Boolean(name)) || ['Psychology', 'Wellbeing'];
        const cover = page.cover?.external?.url || page.cover?.file?.url || FALLBACK_BLOG_POSTS[index % 3].coverImage;
        const pageUrl = page.url || `https://notion.so/${page.id.replace(/-/g, '')}`;

        const createdDate = page.created_time
          ? new Date(page.created_time).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          : 'Recent';

        return {
          id: page.id,
          title: titleText,
          excerpt: excerptText,
          date: createdDate,
          readTime: '4 min read',
          category: tagsList[0] || 'Mental Health',
          author: authorText,
          tags: tagsList,
          coverImage: cover,
          notionUrl: pageUrl,
        };
      });

    return posts.length > 0 ? posts : FALLBACK_BLOG_POSTS;
  } catch (error) {
    console.warn('Notion API query error, using fallback posts:', error);
    return FALLBACK_BLOG_POSTS;
  }
}
