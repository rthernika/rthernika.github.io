'use client';

import React from 'react';
import { Video, Users, Sparkles, ExternalLink } from 'lucide-react';

export default function MediaSection() {
  const mediaCards = [
    {
      title: 'YouTube Channel',
      handle: '@thernika.purnam',
      desc: 'Weekly deep-dive video episodes covering perinatal mental health, understanding pregnancy brain shifts, and student emotional wellbeing.',
      linkText: 'Subscribe on YouTube',
      url: 'https://youtube.com/@thernika.purnam',
      icon: Video,
      color: 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800/40',
    },
    {
      title: 'Instagram Insights',
      handle: '@thernika.purnam',
      desc: 'Daily reels, mental health infographics, parenting tips, and interactive Q&A sessions designed for quick psychological empowerment.',
      linkText: 'Follow on Instagram',
      url: 'https://instagram.com/thernika.purnam',
      isInstagram: true,
      color: 'bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800/40',
    },
    {
      title: 'Maternal Wellbeing Group',
      handle: 'Community Circle',
      desc: 'A safe, compassionate peer-support space for expectant and postnatal mothers to share experiences, ask questions, and receive professional guidance.',
      linkText: 'Join Mothers Circle',
      url: '#counselling',
      icon: Users,
      color: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40',
    },
  ];

  return (
    <section id="media" className="py-20 bg-stone-50 dark:bg-[#0f211a] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#1e3d32]/10 dark:bg-emerald-400/10 text-[#1e3d32] dark:text-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-[#d97706] dark:text-amber-400" />
            <span>Community & Content</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3d32] dark:text-emerald-200 font-serif">
            Media & Maternal Wellbeing Community
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            Connecting with thousands of mothers, students, and families through educational video content, psychological reels, and supportive community circles.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="glass-card glass-card-hover rounded-3xl p-8 space-y-6 flex flex-col justify-between border border-stone-200 dark:border-emerald-800/40"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl border ${card.color}`}>
                      {card.isInstagram ? (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      ) : Icon ? (
                        <Icon className="w-6 h-6" />
                      ) : null}
                    </div>
                    <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-[#192e27] px-3 py-1 rounded-full">
                      {card.handle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 dark:text-white font-serif">{card.title}</h3>
                  <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed">{card.desc}</p>
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-emerald-800/40">
                  <a
                    href={card.url}
                    target={card.url.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1e3d32] dark:text-emerald-300 hover:text-[#d97706] dark:hover:text-amber-300 transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
