'use client';

import React from 'react';
import { Award, GraduationCap, Briefcase, Globe, CheckCircle, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const qualifications = [
    { degree: 'M.Sc Applied Psychology', institution: 'Bharathiar University', focus: 'Clinical & Counselling Psychology' },
    { degree: 'MBA in HRM', institution: 'Jansons School of Business', focus: 'Organizational Behavior & Grievance Handling' },
    { degree: 'B.E Computer Science', institution: 'Anna University', focus: 'Technical Logic & Analytical Problem Solving' },
  ];

  const milestones = [
    {
      title: 'Psychologist (Self-Employed)',
      org: 'Purnam Counselling',
      period: 'March 2024 - Present',
      desc: 'Conducting 1-on-1 online & offline counseling, offering emotional support to expectant mothers during labor & childbirth, and facilitating institutional workshops.',
    },
    {
      title: 'Student Counsellor',
      org: 'Hindustan Educational Trust',
      period: 'June 2026 - Present',
      desc: 'Providing social-emotional support and mediating student-teacher and student-parent conflicts for constructive resolution.',
    },
    {
      title: 'Pregnancy Counsellor',
      org: 'Gaura Foundation',
      period: 'Sept 2020 - Present',
      desc: 'Conducted weekly online sessions on Perinatal Mental Health, brain changes during pregnancy, labor, breastfeeding, emotional intelligence & nutrition. Built a dedicated community for pre- & post-natal wellbeing.',
    },
    {
      title: 'Student Counsellor & Assistant Professor',
      org: 'Vellalar Educational Trust',
      period: 'March 2016 - March 2024',
      desc: 'Counselled students on academic & personal issues, handled faculty selection & admissions, and lectured on Personality Assessment and Organizational Behavior.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#13241e] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#1e3d32]/10 dark:bg-emerald-400/10 text-[#1e3d32] dark:text-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-[#1e3d32]/20 dark:border-emerald-500/20">
            <Sparkles className="w-4 h-4 text-[#d97706] dark:text-amber-400" />
            <span>About The Practitioner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3d32] dark:text-emerald-200 font-serif">
            Meet Thernika R
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            Bridging psychological science, maternal health expertise, and institutional governance to empower individuals and academic communities.
          </p>
        </div>

        {/* Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {qualifications.map((q, i) => (
            <div key={i} className="glass-card glass-card-hover p-6 rounded-3xl space-y-4 border border-stone-200 dark:border-emerald-800/40">
              <div className="w-12 h-12 rounded-2xl bg-[#1e3d32]/10 dark:bg-emerald-500/20 text-[#1e3d32] dark:text-emerald-300 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white font-serif">{q.degree}</h3>
                <p className="text-xs font-semibold text-[#3d7a64] dark:text-emerald-400">{q.institution}</p>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-emerald-900/50 pt-3">
                Specialized in {q.focus}.
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Card: IMA Award Recognition */}
        <div className="bg-linear-to-r from-[#1e3d32] via-[#2c5949] to-[#1e3d32] text-white rounded-3xl p-8 sm:p-10 shadow-xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#d97706]/20 text-[#d97706] text-xs font-bold px-3 py-1 rounded-full border border-[#d97706]/30">
                <Award className="w-4 h-4 text-amber-300" />
                <span className="text-amber-200">IMA Coimbatore Recognition (2022)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif">
                IMA Award: &quot;Best Contribution for Pregnant Mothers&quot;
              </h3>
              <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
                Awarded by the Indian Medical Association (Coimbatore) in 2022 for outstanding dedication and clinical counseling in perinatal mental health, labor preparation, and emotional support for expectant mothers.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center space-y-2">
                <span className="text-4xl">🏆</span>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-300">IMA Excellence Award</p>
                <p className="text-xs text-stone-200">Best Contribution for Pregnant Mothers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Core Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Milestones Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#1e3d32] dark:text-emerald-300 font-serif flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#d97706]" />
              Professional Career & Milestones
            </h3>

            <div className="space-y-4 border-l-2 border-[#3d7a64]/30 dark:border-emerald-700/50 pl-6 ml-2">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative space-y-1">
                  <div className="absolute -left-7.75 top-1.5 w-3.5 h-3.5 rounded-full bg-[#1e3d32] dark:bg-emerald-400 border-2 border-white dark:border-[#13241e]" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-stone-900 dark:text-white">{m.title}</h4>
                    <span className="text-xs font-semibold bg-stone-100 dark:bg-[#1e382d] text-stone-600 dark:text-emerald-300 px-2.5 py-0.5 rounded-full">{m.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-[#3d7a64] dark:text-emerald-400">{m.org}</p>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Core Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#1e3d32] dark:text-emerald-300 font-serif flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#d97706]" />
              Languages & Facilitation Strengths
            </h3>

            <div className="bg-stone-50 dark:bg-[#182c24] rounded-3xl p-6 border border-stone-200 dark:border-emerald-800/40 space-y-6">
              <div>
                <p className="text-xs font-bold text-[#1e3d32] dark:text-emerald-300 uppercase tracking-wider mb-3">Languages Spoken</p>
                <div className="flex flex-wrap gap-2">
                  {['English (Fluent)', 'Tamil (Native)', 'German (Basic)'].map((lang) => (
                    <span key={lang} className="bg-white dark:bg-[#203a30] text-stone-800 dark:text-stone-100 text-xs font-semibold px-4 py-2 rounded-full border border-stone-200 dark:border-emerald-700/40 shadow-sm">
                      🗣️ {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-[#1e3d32] dark:text-emerald-300 uppercase tracking-wider mb-3">Core Clinical & Facilitation Skills</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-200">
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Individual & Group Counselling</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Perinatal & Postnatal Support</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Conflict Mediation</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Public Speaking & Workshops</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Personality Assessment</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400" /> Grievance Handling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
