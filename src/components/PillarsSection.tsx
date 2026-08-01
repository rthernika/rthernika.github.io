'use client';

import React from 'react';
import { GraduationCap, Heart, Users, ArrowUpRight, Sparkles } from 'lucide-react';

export default function PillarsSection() {
  const pillars = [
    {
      id: 'student',
      title: 'Student Social-Emotional Counselling & Mediation',
      subtitle: 'Academic Stress, Parent-Child Dialogue & Resolution',
      badge: 'Academic & Youth',
      icon: GraduationCap,
      description:
        'Dedicated emotional support and structured conflict mediation for students, resolving academic anxiety, peer friction, and student-parent misunderstandings.',
      focusAreas: [
        'Academic Stress Relief',
        'Student-Parent Mediation',
        'Behavioral Adjustment',
        'Crisis Intervention',
      ],
      linkText: 'Book Session for Academic & Youth',
    },
    {
      id: 'maternal',
      title: 'Perinatal, Antenatal & Postnatal Mental Health',
      subtitle: 'Maternal Wellbeing, Birth Prep & Emotional Care',
      badge: 'Maternal Wellbeing',
      icon: Heart,
      description:
        'Specialized support through every stage of motherhood—from pregnancy brain changes and childbirth fears to postnatal recovery and infant bonding.',
      focusAreas: [
        'Labor Fear Reduction',
        'Postnatal Recovery',
        'Parent-Infant Bonding',
        'Partner Support',
      ],
      linkText: 'Book Session for Maternal Wellbeing',
    },
    {
      id: 'institutional',
      title: 'Faculty Training & Institutional Grievance Handling',
      subtitle: 'Personality Assessment & Organizational Behavior',
      badge: 'Institutional Excellence',
      icon: Users,
      description:
        'Expert faculty workshops, student-teacher conflict resolution, personality evaluations, and confidential institutional grievance handling.',
      focusAreas: [
        'Personality Assessment',
        'Faculty Workshops',
        'Grievance Mediation',
        'Organizational Climate',
      ],
      linkText: 'Book Session for Institutional Excellence',
    },
  ];

  return (
    <section id="pillars" className="py-20 bg-stone-100/60 dark:bg-[#0d1a15] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#1e3d32]/10 dark:bg-emerald-400/10 text-[#1e3d32] dark:text-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-[#1e3d32]/20 dark:border-emerald-500/20">
            <Sparkles className="w-4 h-4 text-[#d97706] dark:text-amber-400" />
            <span>Specialized Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3d32] dark:text-emerald-200 font-serif">
            Three Core Pillars of Practice
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            Tailored psychological intervention designed to foster resilience, emotional harmony, and growth across key life stages.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group border border-stone-200 dark:border-emerald-800/40"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#1e3d32]/10 dark:bg-emerald-500/20 text-[#1e3d32] dark:text-emerald-300 flex items-center justify-center group-hover:bg-[#1e3d32] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase bg-[#d97706]/10 text-[#d97706] dark:text-amber-300 px-3 py-1 rounded-full border border-[#d97706]/20">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 dark:text-white font-serif leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#3d7a64] dark:text-emerald-400 mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-400 mb-2">
                      Key Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="bg-stone-100 dark:bg-[#182d24] text-stone-700 dark:text-stone-200 text-[11px] font-medium px-2.5 py-1 rounded-lg border border-stone-200 dark:border-emerald-800/30"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-emerald-800/30">
                  <a
                    href="#counselling"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3d32] dark:text-emerald-300 hover:text-[#d97706] dark:hover:text-amber-300 transition-colors group/link"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
