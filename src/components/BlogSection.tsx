'use client';

import React from 'react';
import Image from 'next/image';
import { Clock, User, ExternalLink } from 'lucide-react';
import { BlogPost } from '@/lib/notion';

interface BlogSectionProps {
  initialPosts: BlogPost[];
}

export default function BlogSection({ initialPosts }: BlogSectionProps) {
  const posts = initialPosts;

  const handleOpenNotion = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-[#13241e] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3d32] dark:text-emerald-200 font-serif">
            Purnam Blog &amp; Insights
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            Real articles, summaries, and guides fetched directly from your Notion CMS database. Click any article card to read the full post on Notion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => handleOpenNotion(post.notionUrl)}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-stone-200 dark:border-emerald-800/40 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Real Thumbnail Image */}
                <div className="relative w-full h-48 bg-stone-200 dark:bg-stone-800 overflow-hidden">
                  <Image
                    src={post.coverImage || 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80'}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1e3d32] dark:bg-emerald-900/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {post.category}
                  </div>
                </div>

                {/* Real Title & Summary */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 dark:text-white font-serif leading-snug group-hover:text-[#1e3d32] dark:group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-stone-600 dark:text-stone-300 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Real Author & Read on Notion Link */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-stone-100 dark:border-emerald-800/40">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#3d7a64] dark:text-emerald-400">
                  <User className="w-3.5 h-3.5" />
                  <span>{post.author}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#d97706] dark:text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Read on Notion</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
