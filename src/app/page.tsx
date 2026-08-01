import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PillarsSection from '@/components/PillarsSection';
import CounsellingBooking from '@/components/CounsellingBooking';
import WorkshopsSection from '@/components/WorkshopsSection';
import MediaSection from '@/components/MediaSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import { fetchNotionBlogPosts } from '@/lib/notion';

// This runs at build time (Node.js environment) for static export.
// It calls the Notion API directly — no HTTP needed, no /api/blog route.
export default async function Home() {
  const posts = await fetchNotionBlogPosts();

  return (
    <main className="min-h-screen flex flex-col selection:bg-[#1e3d32] selection:text-white">
      <Header />
      <Hero />
      <AboutSection />
      <PillarsSection />
      <CounsellingBooking />
      <WorkshopsSection />
      <MediaSection />
      <BlogSection initialPosts={posts} />
      <Footer />
    </main>
  );
}
