import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PillarsSection from '@/components/PillarsSection';
import CounsellingBooking from '@/components/CounsellingBooking';
import WorkshopsSection from '@/components/WorkshopsSection';
import MediaSection from '@/components/MediaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-[#1e3d32] selection:text-white">
      <Header />
      <Hero />
      <AboutSection />
      <PillarsSection />
      <CounsellingBooking />
      <WorkshopsSection />
      <MediaSection />
      <Footer />
    </main>
  );
}
