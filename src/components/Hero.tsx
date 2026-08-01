'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Award, HeartHandshake, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-100 h-100 bg-amber-100/40 dark:bg-amber-900/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#1e3d32]/10 dark:bg-emerald-400/10 text-[#1e3d32] dark:text-emerald-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-[#1e3d32]/20 dark:border-emerald-500/20">
              <Sparkles className="w-4 h-4 text-[#d97706] dark:text-amber-400" />
              <span>Compassionate Psychological Support</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e3d32] dark:text-emerald-200 font-serif leading-[1.15] tracking-tight">
              Where <span className="gradient-text">Compassionate Service</span> Meets Transformative Guidance
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 font-normal leading-relaxed max-w-2xl">
              Professional psychological counselling and institutional workshops tailored for students, mothers, and educational environments by <strong className="text-stone-900 dark:text-white font-semibold">Thernika R</strong>.
            </p>

            {/* Badges Grid */}
            <div className="pt-2 pb-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="badge-shine p-3 rounded-xl flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#1e3d32] dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-stone-800 dark:text-stone-100 leading-snug">
                  Certified Student Parent Counsellor
                </span>
              </div>
              <div className="badge-shine p-3 rounded-xl flex items-start gap-2.5">
                <HeartHandshake className="w-5 h-5 text-[#3d7a64] dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-stone-800 dark:text-stone-100 leading-snug">
                  Certified Perinatal Mental Health Counsellor
                </span>
              </div>
              <div className="badge-shine p-3 rounded-xl flex items-start gap-2.5">
                <Award className="w-5 h-5 text-[#d97706] dark:text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-stone-800 dark:text-stone-100 leading-snug">
                  IMA Award Winner (Maternal Care)
                </span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#counselling"
                className="inline-flex items-center justify-center gap-3 bg-[#1e3d32] hover:bg-[#2c5949] text-white text-base font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-[#d97706]" />
                <span>Book 1-on-1 Session</span>
              </a>
              <a
                href="#workshops"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-[#1a3028] hover:bg-stone-50 dark:hover:bg-[#234237] text-[#1e3d32] dark:text-emerald-300 text-base font-semibold px-6 py-3.5 rounded-full border border-stone-300 dark:border-emerald-700/50 transition-all hover:border-[#1e3d32]/40 dark:hover:border-emerald-500/50 shadow-sm"
              >
                <span>Explore Workshops</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-stone-500 dark:text-stone-400 pt-3">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Confidential 1-on-1 Video Sessions
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Seamless Booking & Payment via Cal.id
              </span>
            </div>
          </div>

          {/* Right Column: Profile Image & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-emerald-800/50 bg-stone-100 dark:bg-[#13241e]">
              <Image
                src="/Resources/ThernikaProfile.jpg"
                alt="Thernika R - Psychologist & Perinatal Mental Health Specialist"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1e3d32]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-nav border border-white/40 dark:border-emerald-700/30 shadow-lg">
                <p className="font-serif font-bold text-lg text-[#1e3d32] dark:text-emerald-300">Thernika R</p>
                <p className="text-xs text-stone-700 dark:text-stone-300 font-medium">M.Sc Applied Psychology | MBA | B.E CSE</p>
                <div className="mt-2 flex items-center justify-between text-xs font-semibold text-[#3d7a64] dark:text-emerald-400">
                  <span>✨ 8+ Years Healing & Guidance</span>
                  <span className="text-[#d97706] dark:text-amber-400">Coimbatore, TN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
