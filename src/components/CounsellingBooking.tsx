'use client';

import React from 'react';
import { Calendar, Video, Clock, ShieldCheck, CheckCircle2, Heart, GraduationCap, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

export default function CounsellingBooking() {
  return (
    <section id="counselling" className="py-20 bg-stone-100/60 dark:bg-[#0d1a15] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#1e3d32]/10 dark:bg-emerald-400/10 text-[#1e3d32] dark:text-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            <Calendar className="w-4 h-4 text-[#d97706] dark:text-amber-400" />
            <span>Direct Cal.id Integration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3d32] dark:text-emerald-200 font-serif">
            Schedule a 1-on-1 Counselling Session
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            Select your specialized track below to book a secure, confidential 1-on-1 video consultation with Thernika R. Payments & scheduling are processed directly via Cal.id.
          </p>
        </div>

        {/* Tracks Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Track A */}
          <div className="bg-white dark:bg-[#13241e] rounded-3xl p-8 border border-emerald-200 dark:border-emerald-800/40 shadow-sm space-y-6 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-100/80 dark:bg-emerald-900/40 text-[#1e3d32] dark:text-emerald-300 rounded-2xl">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#d97706] dark:text-amber-400 tracking-wider uppercase">Track A</span>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white font-serif">Student & Parent Counselling</h3>
                </div>
              </div>
              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
                Designed for students experiencing academic anxiety, emotional burnout, or peer conflict, as well as parents seeking mediation for healthy home communication.
              </p>
              <ul className="space-y-2.5 text-xs text-stone-700 dark:text-stone-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> 45-Minute Confidential Video Session
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Student-Parent Conflict Resolution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Personalized Emotional Coping Plan
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-stone-100 dark:border-emerald-800/40">
              <a
                href="https://cal.id/thernika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1e3d32] dark:bg-emerald-700 hover:bg-[#2c5949] text-white text-sm font-semibold py-3 px-6 rounded-full shadow transition-all group"
              >
                <span>Book Track A on Cal.id</span>
                <ExternalLink className="w-4 h-4 text-[#d97706] dark:text-amber-300 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Track B */}
          <div className="bg-white dark:bg-[#13241e] rounded-3xl p-8 border border-amber-200 dark:border-amber-900/40 shadow-sm space-y-6 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-100/80 dark:bg-amber-900/40 text-[#d97706] dark:text-amber-300 rounded-2xl">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#d97706] dark:text-amber-400 tracking-wider uppercase">Track B</span>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white font-serif">Perinatal & Maternal Wellbeing</h3>
                </div>
              </div>
              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
                Dedicated psychological guidance during antenatal pregnancy, childbirth fear reduction, labor preparation, and postnatal mental recovery.
              </p>
              <ul className="space-y-2.5 text-xs text-stone-700 dark:text-stone-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> 45-Minute One-on-One Perinatal Session
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Childbirth Anxiety & Fear Processing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Postnatal Recovery & Partner Guidance
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-stone-100 dark:border-emerald-800/40">
              <a
                href="https://cal.id/thernika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white text-sm font-semibold py-3 px-6 rounded-full shadow transition-all group"
              >
                <span>Book Track B on Cal.id</span>
                <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Cal.id Integration Highlight Box */}
        <div className="bg-linear-to-br from-[#1e3d32] to-[#2c5949] dark:from-[#132821] dark:to-[#1c382e] text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full border border-amber-400/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Instant Online Booking & Secure Payment</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              Booking and payment are completed seamlessly on Cal.id. Choose a time slot that suits your convenience, receive instant Google Calendar confirmation, and connect for your 1-on-1 session.
            </p>
          </div>

          <div>
            <a
              href="https://cal.id/thernika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#1e3d32] hover:bg-amber-50 text-base font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-[#d97706]" />
              <span>Book your appointment at Cal.id</span>
              <ArrowRight className="w-4 h-4 text-[#1e3d32]" />
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Encrypted & Private
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" /> Real-time Slot Availability
            </span>
            <span className="flex items-center gap-1.5">
              <Video className="w-4 h-4 text-emerald-400" /> Integrated Google Meet / Video Link
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
