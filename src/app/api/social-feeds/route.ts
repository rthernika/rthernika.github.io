import { NextResponse } from 'next/server';
import { getAllSocialFeeds } from '@/lib/googleSheetFeeds';

export const revalidate = 3600; // Revalidate cache every hour

export async function GET() {
  try {
    const feeds = await getAllSocialFeeds();
    return NextResponse.json(feeds, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('API Error fetching social feeds:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social feeds' },
      { status: 500 }
    );
  }
}
