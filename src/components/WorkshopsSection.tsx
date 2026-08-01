'use client';

import React from 'react';
import { Building2, Users2, CalendarCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function WorkshopsSection() {
  const workshops = [
    {
      title: 'Emotional Intelligence & Personality Assessment',
      target: 'Students, Faculty & Corporate Teams',
      desc: 'Interactive modules evaluating psychological strengths, stress tolerance, personality profiles, and interpersonal empathy.',
    },
    {
      title: 'Brain Changes During Pregnancy, Labor & Nutrition',
      target: 'Hospitals, Fertility Clinics & Pregnant Couples',
      desc: 'Science-backed guidance on neurological adaptations during gestation, labor anxiety management, and postnatal mental health.',
    },
    {
      title: 'Organizational Behavior & Conflict Mediation',
      target: 'Educational Institutions & Department Heads',
      desc: 'Structured conflict resolution models for student-teacher friction, peer mediation, and positive institutional culture.',
    },
  ];

  const partners = [
    'NGP College',
    'PSGR Krishnammal College for Women',
    'Vellalar Institute of Arts and Science',
    'Iswarya Fertility Hospital',
    'Coimbatore Medical College Hospital',
    'Gaura Foundation',
    'Primary Health Care Centres',
  ];

  return (
    <section id="workshops" className="py-20 bg-[#fcfbfa] dark:bg-[#0d1a15] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#1e3d32]/10 dark:bg-emerald-400/10 text-[#1e3d32] dark:text-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            <Building2 className="w-4 h-4 text-[#d97706] dark:text-amber-400" />
            <span>Institutional Consulting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3d32] dark:text-emerald-200 font-serif">
            Workshops & Institutional Programs
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            Custom-designed interactive workshops for colleges, healthcare institutions, and communities across Tamil Nadu.
          </p>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {workshops.map((w, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-8 space-y-4 flex flex-col justify-between border border-stone-200 dark:border-emerald-800/40"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-[#d97706] dark:text-amber-300 uppercase tracking-wider bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-700/40">
                  {w.target}
                </span>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white font-serif leading-snug">
                  {w.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {w.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-emerald-800/40 flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                  <CalendarCheck className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Interactive Sessions
                </span>
                <a href="#contact" className="text-[#d97706] dark:text-amber-400 font-bold hover:underline">
                  Request Proposal →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Institutional Partners Banner */}
        <div className="bg-[#1e3d32] dark:bg-[#13241e] text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-serif">
              Featured Institutional Partners & Healthcare Collaborators
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm">
              Thernika R has conducted workshops and mental health programs across leading educational trusts, hospitals, and non-profits.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-sm hover:bg-white/20 transition-colors"
              >
                ✨ {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
