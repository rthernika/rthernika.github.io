'use client';

import React, { useState, useEffect } from 'react';
import { Video, Sparkles, ExternalLink, Play, BookOpen } from 'lucide-react';
import { getYouTubeShortsFromSheet, getInstagramPostsFromSheet } from '@/lib/googleSheetFeeds';

interface RssPost {
  id: string;
  title: string;
  link: string;
  imageUrl: string;
}

interface YouTubeShort {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface LinkedInArticle {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
}

const INITIAL_INSTAGRAM_POSTS: RssPost[] = [
  {
    id: '1',
    title: 'Three things to teach your child🌸',
    link: 'https://www.instagram.com/reel/DbYBQEDJvHp/',
    imageUrl:
      'https://scontent-cph2-1.cdninstagram.com/v/t51.82787-15/759384042_18581153047067426_2077064107607264342_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=Mzk1MTkxNDE3NDkyMzYwMDM2MTE4NTgxMTUzMDQ4MDY3NDI2.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjcyMC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=6-mR2EdmPa0Q7kNvwGmxKLt&_nc_oc=AdokkdM5uCsqta3wvBRQURMlKW1H4rmG1WduGcpA9sZ0jWeRdeq0pDCHuppPS63poP4&_nc_zt=23&_nc_ht=scontent-cph2-1.cdninstagram.com&_nc_gid=l2LmRGu6WcV89TUGhz36Fg&_nc_ss=7c689&oh=00_AQFg36oCOjmhn8XzqlOWRc6e39vYh_l54_bELBcU6XPVTQ&oe=6A73BBE4',
  },
  {
    id: '2',
    title: 'Debunking Breastfeeding Myths with A Toddler Thing',
    link: 'https://www.instagram.com/reel/C-VFF56SuIV/',
    imageUrl:
      'https://scontent-cph2-1.cdninstagram.com/v/t51.82787-15/755870260_18580292644067426_464278745766578888_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=100&ig_cache_key=Mzk0OTczNTQyODY4NjgwMzI0Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMzA3Mi5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=6ThwYE1ZJ_oQ7kNvwFNG0hw&_nc_oc=AdolB2pXwBjgNGnmtcW4PqCxAFh6SK0KXjLheC4i-JtzFlQkg1iuAMsXAZOBXBqBIio&_nc_zt=23&_nc_ht=scontent-cph2-1.cdninstagram.com&_nc_gid=l2LmRGu6WcV89TUGhz36Fg&_nc_ss=7c689&oh=00_AQEKyePv4ga8Ovi-349rEjVSYct3sQ5eLzstCj8ZCS5lVQ&oe=6A73E2E8',
  },
  {
    id: '3',
    title: 'Cultivating a Non-Judgmental Mindset',
    link: 'https://www.instagram.com/p/DZ7pc7cpFTO/',
    imageUrl:
      'https://scontent-cph2-1.cdninstagram.com/v/t51.82787-15/753225000_18579350671067426_5161904364014136964_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=Mzk0NzI0NzQ4NDk1MjM4ZG5OTE4NTc5MzUwNjY4MDY3NDI2.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjcyMC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=o8iWeAWZXyAQ7kNvwEgXYui&_nc_oc=AdqJaWhKmEy59i4hHoG_wN08kIc3En13gB9BYhUNVKiAnQHMmWGvTansPtfvZ2idUkU&_nc_zt=23&_nc_ht=scontent-cph2-1.cdninstagram.com&_nc_gid=l2LmRGu6WcV89TUGhz36Fg&_nc_ss=7c689&oh=00_AQE-O0eEotbBEekl4rBNwgro-SOrN52VeAEXwqTQUJ9MmA&oe=6A73E0C2',
  },
  {
    id: '4',
    title: 'Toddler Tantrums & Mindful Parenting Hacks',
    link: 'https://www.instagram.com/reel/DVQzPHFkz0w/',
    imageUrl:
      'https://scontent-cph2-1.cdninstagram.com/v/t51.82787-15/742103548_18575781745067426_4766865731777493039_n.jpg?stp=dst-jpg_e35_p1080x1080_sh2.08_tt6&_nc_cat=104&ig_cache_key=MzkzODIwMTE5OTk1MTkwOTM0MDE4NTc1NzgxNzM5MDY3NDI2.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjEyOTAuc2RyLnZpZGVvX2RlZmF1bHRfY292ZXJfZnJhbWUuQzMifQ%3D%3D&_nc_ohc=a-GZpzhg5qsQ7kNvwHCpAFl&_nc_oc=Adq9uvSuren-U_YYC8uLy1iy0dz4U6Aa7S55Cajw7p1eZDz_rps9YvKJ3n8IWxfxvyM&_nc_zt=23&_nc_ht=scontent-cph2-1.cdninstagram.com&_nc_gid=l2LmRGu6WcV89TUGhz36Fg&_nc_ss=7c689&oh=00_AQF9kNrWh9Zl-Wh1pOkTW5iH3BYLSvyFtbFUlNzUAI9wcA&oe=6A73E015',
  },
];

const INITIAL_YOUTUBE_SHORTS: YouTubeShort[] = [
  {
    id: 'SPy8raWENrU',
    title: 'Understanding Child Psychology & Emotional Needs',
    url: 'https://www.youtube.com/shorts/SPy8raWENrU',
    thumbnailUrl: 'https://i.ytimg.com/vi/SPy8raWENrU/hqdefault.jpg',
  },
  {
    id: 'y-vzSV8XKtY',
    title: 'Managing Academic Stress for Students',
    url: 'https://www.youtube.com/shorts/y-vzSV8XKtY',
    thumbnailUrl: 'https://i.ytimg.com/vi/y-vzSV8XKtY/hqdefault.jpg',
  },
  {
    id: 'A1CK14KIkvI',
    title: 'Perinatal Mental Health Essentials',
    url: 'https://www.youtube.com/shorts/A1CK14KIkvI',
    thumbnailUrl: 'https://i.ytimg.com/vi/A1CK14KIkvI/hqdefault.jpg',
  },
  {
    id: 'ftA4tneSous',
    title: 'Effective Parent-Child Communication Tips',
    url: 'https://www.youtube.com/shorts/ftA4tneSous',
    thumbnailUrl: 'https://i.ytimg.com/vi/ftA4tneSous/hqdefault.jpg',
  },
];

const INITIAL_LINKEDIN_ARTICLES: LinkedInArticle[] = [
  {
    id: '1',
    title: 'Why Multitasking Is Secretly Ruining Your Productivity (And Your Brain)',
    url: 'https://www.linkedin.com/pulse/why-multitasking-secretly-ruining-your-productivity-brain-rajendran-txqzf',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D4D12AQFGuJRH5Dre4A/article-cover_image-shrink_600_2000/B4DZ_EyMmrJwAM-/0/1785712921231?e=2147483647&v=beta&t=Xytbavr_ZvCyP_KjkMqObl1foM_YOAaCbHs-m6QjQIk',
  },
];

export default function MediaSection() {
  const [instagramPosts, setInstagramPosts] = useState<RssPost[]>(INITIAL_INSTAGRAM_POSTS);
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>(INITIAL_YOUTUBE_SHORTS);
  const [linkedinArticles, setLinkedinArticles] = useState<LinkedInArticle[]>(INITIAL_LINKEDIN_ARTICLES);

  useEffect(() => {
    async function loadSocialFeeds() {
      // 1. Direct client-side fetch from Google Sheets (prioritized for real-time updates on page load)
      try {
        const [shortsResult, postsResult] = await Promise.allSettled([
          getYouTubeShortsFromSheet(),
          getInstagramPostsFromSheet(),
        ]);
        if (shortsResult.status === 'fulfilled' && shortsResult.value.length > 0) {
          setYoutubeShorts(shortsResult.value);
        }
        if (postsResult.status === 'fulfilled' && postsResult.value.length > 0) {
          setInstagramPosts(postsResult.value);
        }
      } catch (e) {
        console.warn('Error fetching live Google Sheet feeds:', e);
      }

      // 2. Fetch LinkedIn articles and fallback feeds from /api/social-feeds
      try {
        const res = await fetch('/api/social-feeds');
        if (res.ok) {
          const data = await res.json();
          if (data.linkedinArticles && data.linkedinArticles.length > 0) {
            setLinkedinArticles(data.linkedinArticles);
          }
          if (data.youtubeShorts && data.youtubeShorts.length > 0) {
            setYoutubeShorts((prev) => (prev.length > 0 ? prev : data.youtubeShorts));
          }
          if (data.instagramPosts && data.instagramPosts.length > 0) {
            setInstagramPosts((prev) => (prev.length > 0 ? prev : data.instagramPosts));
          }
        }
      } catch {
        // Ignored
      }
    }
    loadSocialFeeds();
  }, []);

  const mediaCards = [
    {
      title: 'YouTube Channel',
      handle: '@thernika.purnam',
      linkText: 'Subscribe to our YouTube Channel',
      url: 'https://youtube.com/@thernika.purnam',
      icon: Video,
      isYoutube: true,
      color: 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800/40',
    },
    {
      title: 'Instagram Insights',
      handle: '@thernika.purnam',
      linkText: 'Follow on Instagram',
      url: 'https://instagram.com/thernika.purnam',
      isInstagram: true,
      color: 'bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800/40',
    },
    {
      title: 'The Healing Corner',
      handle: 'LinkedIn Newsletter',
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
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-2xl border transition-all duration-300 hover:scale-110 ${card.color}`}
                      title={card.linkText}
                    >
                      {card.isYoutube ? (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      ) : card.isInstagram ? (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      ) : card.isLinkedin ? (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      ) : Icon ? (
                        <Icon className="w-6 h-6" />
                      ) : null}
                    </a>
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-[#192e27] hover:bg-stone-200 dark:hover:bg-[#234237] hover:text-stone-800 dark:hover:text-stone-200 px-3 py-1 rounded-full transition-all"
                      title={card.linkText}
                    >
                      {card.handle}
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 dark:text-white font-serif">{card.title}</h3>

                  {card.isYoutube ? (
                    /* YouTube Shorts Grid */
                    <div className="space-y-3 pt-1">
                      <div className="grid grid-cols-2 gap-2.5">
                        {youtubeShorts.map((short) => (
                          <a
                            key={short.id}
                            href={short.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200/80 dark:border-emerald-800/40 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.03]"
                            title={short.title}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={short.thumbnailUrl}
                              alt={short.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-2 text-white">
                              <div className="self-end p-1 rounded-full bg-red-600/90 text-white shadow-sm">
                                <Play className="w-3 h-3 fill-current" />
                              </div>
                              <p className="text-[10px] font-medium line-clamp-2 leading-tight drop-shadow-sm">
                                {short.title}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : card.isInstagram ? (
                    /* Instagram RSS Thumbnails Grid */
                    <div className="space-y-3 pt-1">
                      <div className="grid grid-cols-2 gap-2.5">
                        {instagramPosts.map((post) => (
                          <a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200/80 dark:border-emerald-800/40 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.03]"
                            title={post.title}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={post.imageUrl}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 text-white">
                              <p className="text-[10px] font-medium line-clamp-2 leading-tight drop-shadow-sm">
                                {post.title}
                              </p>
                              <div className="absolute top-2 right-2 p-1 rounded-full bg-pink-600/90 text-white shadow-sm">
                                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : card.isLinkedin ? (
                    /* LinkedIn Articles List */
                    <div className="space-y-3 pt-1">

                      <div className="space-y-2">
                        {linkedinArticles.map((article) => (
                          <a
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 p-2.5 rounded-2xl bg-stone-100/80 dark:bg-stone-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-stone-200/60 dark:border-emerald-800/30 transition-all duration-200 shadow-xs hover:shadow-md"
                          >
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-stone-200 border border-stone-300/50 dark:border-stone-700">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={article.imageUrl}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-stone-800 dark:text-stone-100 group-hover:text-[#0a66c2] dark:group-hover:text-blue-300 transition-colors line-clamp-2 leading-snug">
                                {article.title}
                              </p>
                              <div className="flex items-center gap-1 mt-1 text-[10px] text-stone-500 dark:text-stone-400">
                                <BookOpen className="w-3 h-3 text-[#0a66c2]" />
                                <span>Article</span>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
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
