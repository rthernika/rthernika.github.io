'use client';

import React from 'react';
import { Video, Sparkles, ExternalLink } from 'lucide-react';

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
      title: 'The Healing Corner by Purnam',
      handle: 'LinkedIn Newsletter',
      desc: 'Regular published articles, reflective essays, and deep-dive psychological insights on perinatal wellbeing, parenting, and emotional resilience.',
      linkText: 'Read & Subscribe on LinkedIn',
      url: 'https://www.linkedin.com/newsletters/7430605949259751424/',
      isLinkedin: true,
      color: 'bg-blue-50 dark:bg-blue-950/40 text-[#0a66c2] dark:text-blue-400 border-blue-200 dark:border-blue-800/40',
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
            Social Media & Newsletter
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            Connecting with thousands of mothers, students, and families through educational video content, psychological reels, and newsletter publications.
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
                      ) : card.isLinkedin ? (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
