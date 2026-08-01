'use client';

import React from 'react';
import { Award, GraduationCap, Briefcase, Globe, CheckCircle, Sparkles, ShieldCheck, ExternalLink } from 'lucide-react';

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

        {/* Honors & Professional Awards Grid */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#d97706]" />
            <h3 className="text-xl font-bold text-[#1e3d32] dark:text-emerald-200 font-serif">
              Honors & Professional Awards
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Award 1: SingaPenne 2025 */}
            <div className="bg-linear-to-r from-[#1e3d32] via-[#2c5949] to-[#1e3d32] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-[#d97706]/30 text-amber-200 text-xs font-bold px-3 py-1 rounded-full border border-[#d97706]/40">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>Kathir Institutions Recognition (2025)</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold font-serif">
                  Kathir&apos;s &quot;SingaPenne 2025&quot; Award
                </h4>
                <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                  Honored with the prestigious Kathir&apos;s SingaPenne 2025 Award celebrating inspiring women leaders for exceptional dedication, psychological counselling, and empowering maternal &amp; student wellbeing.
                </p>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <span>🏆 SingaPenne 2025 Awardee</span>
                </div>
                <a
                  href="https://www.instagram.com/p/DG7sWNaBLOe/?img_index=5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-200 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-full border border-white/20"
                >
                  <span>View Post</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Award 2: IMA Award 2022 */}
            <div className="bg-linear-to-r from-[#1e3d32] via-[#2c5949] to-[#1e3d32] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-[#d97706]/30 text-amber-200 text-xs font-bold px-3 py-1 rounded-full border border-[#d97706]/40">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>IMA Coimbatore Recognition (2022)</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold font-serif">
                  IMA Award: &quot;Best Contribution for Pregnant Mothers&quot;
                </h4>
                <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                  Awarded by the Indian Medical Association (Coimbatore) in 2022 for outstanding dedication and clinical counseling in perinatal mental health, labor preparation, and emotional support for expectant mothers.
                </p>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <span>🏆 IMA Excellence Award</span>
                </div>
                <span className="text-xs text-stone-300 font-medium">Indian Medical Association</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education vs Skills & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Professional Career & Education */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-[#1e3d32] dark:text-emerald-300 font-serif flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#d97706]" />
              Professional Career & Education
            </h3>

            {/* Work Experience Timeline */}
            <div className="space-y-4">
              <p className="text-xs font-bold text-[#1e3d32] dark:text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#3d7a64]" />
                Work Experience
              </p>

              <div className="space-y-4 border-l-2 border-[#3d7a64]/30 dark:border-emerald-700/50 pl-6 ml-2">
                {milestones.map((m, idx) => (
                  <div key={idx} className="relative space-y-1">
                    <div className="absolute -left-7.75 top-1.5 w-3.5 h-3.5 rounded-full bg-[#1e3d32] dark:bg-emerald-400 border-2 border-white dark:border-[#13241e]" />
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">{m.title}</h4>
                      <span className="text-[11px] font-semibold bg-stone-100 dark:bg-[#1e382d] text-stone-600 dark:text-emerald-300 px-2.5 py-0.5 rounded-full shrink-0">{m.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-[#3d7a64] dark:text-emerald-400">{m.org}</p>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Education Timeline */}
            <div className="space-y-4 pt-2">
              <p className="text-xs font-bold text-[#1e3d32] dark:text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#3d7a64]" />
                Academic Degrees & Qualifications
              </p>

              <div className="space-y-4 border-l-2 border-[#3d7a64]/30 dark:border-emerald-700/50 pl-6 ml-2">
                {/* M.Sc */}
                <div className="relative space-y-1">
                  <div className="absolute -left-7.75 top-1.5 w-3.5 h-3.5 rounded-full bg-[#d97706] dark:bg-amber-400 border-2 border-white dark:border-[#13241e]" />
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">M.Sc in Applied Psychology</h4>
                    <span className="text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 px-2.5 py-0.5 rounded-full shrink-0">Graduated April 2018</span>
                  </div>
                  <p className="text-xs font-semibold text-[#3d7a64] dark:text-emerald-400">Bharathiar University</p>
                  <p className="text-xs text-stone-600 dark:text-stone-300">Specialized in Clinical & Counselling Psychology.</p>
                </div>

                {/* MBA */}
                <div className="relative space-y-1">
                  <div className="absolute -left-7.75 top-1.5 w-3.5 h-3.5 rounded-full bg-[#d97706] dark:bg-amber-400 border-2 border-white dark:border-[#13241e]" />
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">MBA in Human Resource Management (HRM)</h4>
                    <span className="text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 px-2.5 py-0.5 rounded-full shrink-0">Graduated April 2015</span>
                  </div>
                  <p className="text-xs font-semibold text-[#3d7a64] dark:text-emerald-400">Jansons School of Business</p>
                  <p className="text-xs text-stone-600 dark:text-stone-300">Focused on Organizational Behavior, Grievance Handling & Human Capital.</p>
                </div>

                {/* B.E */}
                <div className="relative space-y-1">
                  <div className="absolute -left-7.75 top-1.5 w-3.5 h-3.5 rounded-full bg-[#d97706] dark:bg-amber-400 border-2 border-white dark:border-[#13241e]" />
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">B.E in Computer Science & Engineering</h4>
                    <span className="text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 px-2.5 py-0.5 rounded-full shrink-0">Graduated April 2013</span>
                  </div>
                  <p className="text-xs font-semibold text-[#3d7a64] dark:text-emerald-400">Anna University</p>
                  <p className="text-xs text-stone-600 dark:text-stone-300">Technical Logic & Analytical Problem Solving foundation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills, Certifications & Languages */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#1e3d32] dark:text-emerald-300 font-serif flex items-center gap-2">
              <Award className="w-5 h-5 text-[#d97706]" />
              Skills & Certifications
            </h3>

            {/* Core Clinical & Facilitation Skills */}
            <div className="bg-stone-50 dark:bg-[#182c24] rounded-3xl p-6 border border-stone-200 dark:border-emerald-800/40 space-y-4">
              <p className="text-xs font-bold text-[#1e3d32] dark:text-emerald-300 uppercase tracking-wider">
                Core Clinical & Facilitation Skills
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700 dark:text-stone-200">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400 shrink-0" /> Individual & Group Counselling</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400 shrink-0" /> Perinatal & Postnatal Support</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400 shrink-0" /> Conflict Mediation</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400 shrink-0" /> Public Speaking & Workshops</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400 shrink-0" /> Personality Assessment</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400 shrink-0" /> Grievance Handling</span>
              </div>
            </div>

            {/* Licenses & Certifications */}
            <div className="bg-stone-50 dark:bg-[#182c24] rounded-3xl p-6 border border-stone-200 dark:border-emerald-800/40 space-y-5">
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-emerald-800/40 pb-3">
                <p className="text-xs font-bold text-[#1e3d32] dark:text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d97706]" />
                  Licenses & Certifications
                </p>
                <span className="text-[10px] font-bold bg-[#1e3d32]/10 dark:bg-emerald-400/10 text-[#1e3d32] dark:text-emerald-300 px-2.5 py-0.5 rounded-full">
                  Accredited
                </span>
              </div>

              <div className="space-y-4">
                {/* Certification 1 */}
                <div className="space-y-2 p-4 rounded-2xl bg-white dark:bg-[#203a30] border border-stone-200/80 dark:border-emerald-700/30">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 dark:text-white">Child & Parent Counsellor</h4>
                      <p className="text-xs font-semibold text-[#3d7a64] dark:text-emerald-300">nhca.in (National Health Care Academy)</p>
                    </div>
                    <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400 shrink-0 bg-stone-100 dark:bg-[#182c24] px-2 py-0.5 rounded-full">Issued Sep 2024</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300">
                    Master Class School Child & Parent Counsellor – Accredited Diploma Programme
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1.5 text-[11px]">
                    <span className="bg-stone-100 dark:bg-[#182c24] text-stone-700 dark:text-stone-200 px-2.5 py-0.5 rounded-md font-mono border border-stone-200 dark:border-emerald-700/40">
                      Credential ID: 77408845541
                    </span>
                    <span className="text-[#3d7a64] dark:text-emerald-300 font-medium">
                      Counseling Psychology • Student Counseling
                    </span>
                  </div>
                </div>

                {/* Certification 2 */}
                <div className="space-y-2 p-4 rounded-2xl bg-white dark:bg-[#203a30] border border-stone-200/80 dark:border-emerald-700/30">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 dark:text-white">Perinatal Mental Health Certification (PMH-C)</h4>
                      <p className="text-xs font-semibold text-[#3d7a64] dark:text-emerald-300">NHS England</p>
                    </div>
                    <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400 shrink-0 bg-stone-100 dark:bg-[#182c24] px-2 py-0.5 rounded-full">Issued Jan 2025</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300">
                    eIntegrity Perinatal Mental Health Programme
                  </p>
                </div>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="bg-stone-50 dark:bg-[#182c24] rounded-3xl p-6 border border-stone-200 dark:border-emerald-800/40 space-y-3">
              <p className="text-xs font-bold text-[#1e3d32] dark:text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#d97706]" />
                Languages Spoken
              </p>
              <div className="flex flex-wrap gap-2">
                {['English (Fluent)', 'Tamil (Native)', 'German (Basic)'].map((lang) => (
                  <span key={lang} className="bg-white dark:bg-[#203a30] text-stone-800 dark:text-stone-100 text-xs font-semibold px-4 py-2 rounded-full border border-stone-200 dark:border-emerald-700/40 shadow-sm">
                    🗣️ {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
