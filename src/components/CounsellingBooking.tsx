'use client';

import React from 'react';
import { Calendar, Video, Clock, ShieldCheck, CheckCircle2, Heart, GraduationCap, Sparkles, ArrowRight, Users } from 'lucide-react';

export default function CounsellingBooking() {
  const counsellingCards = [
    {
      title: 'Student & Parent Counselling',
      icon: GraduationCap,
      color: 'bg-emerald-100/80 dark:bg-emerald-900/40 text-[#1e3d32] dark:text-emerald-300',
      badgeColor: 'bg-emerald-50 dark:bg-emerald-950/40 text-[#1e3d32] dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40',
      desc: 'Designed for students navigating academic pressure, exam anxiety, or peer conflicts, as well as parents seeking guidance & mediation for healthy family communication.',
      features: [
        '45-Minute Confidential Video Session',
        'Student-Parent & Peer Conflict Resolution',
        'Personalized Emotional Coping Plan',
      ],
    },
    {
      title: 'Perinatal & Maternal Wellbeing',
      icon: Heart,
      color: 'bg-amber-100/80 dark:bg-amber-900/40 text-[#d97706] dark:text-amber-300',
      badgeColor: 'bg-amber-50 dark:bg-amber-950/40 text-[#d97706] dark:text-amber-300 border-amber-200 dark:border-amber-800/40',
      desc: 'Dedicated psychological guidance during antenatal pregnancy, childbirth fear reduction, labor preparation, and postnatal emotional recovery.',
      features: [
        '45-Minute One-on-One Perinatal Session',
        'Childbirth Anxiety & Fear Processing',
        'Postnatal Recovery & Partner Guidance',
      ],
    },
    {
      title: 'General Counselling & Guidance',
      icon: Users,
      color: 'bg-blue-100/80 dark:bg-blue-900/40 text-[#0a66c2] dark:text-blue-300',
      badgeColor: 'bg-blue-50 dark:bg-blue-950/40 text-[#0a66c2] dark:text-blue-300 border-blue-200 dark:border-blue-800/40',
      desc: 'A safe, empathetic space for individuals facing relationship difficulties, personal stress, self-esteem challenges, and general psychological guidance.',
      features: [
        '45-Minute Confidential Video Session',
        'Relationship & Interpersonal Counseling',
        'Stress Management & Personal Growth',
      ],
    },
  ];

  return (
    <section id="counselling" className="py-20 bg-stone-100/60 dark:bg-[#0d1a15] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#1e3d32]/10 dark:bg-emerald-400/10 text-[#1e3d32] dark:text-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            <Calendar className="w-4 h-4 text-[#d97706] dark:text-amber-400" />
            <span>Direct Cal.id Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3d32] dark:text-emerald-200 font-serif">
            Schedule a 1-on-1 Counselling Session
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            Choose your focus area below to book a 45-minute confidential 1-on-1 video consultation with Thernika R. All sessions, scheduling, and payments are processed via Cal.id.
          </p>
        </div>

        {/* Focus Areas Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {counsellingCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-[#13241e] rounded-3xl p-8 border border-stone-200 dark:border-emerald-800/40 shadow-sm space-y-6 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3.5 rounded-2xl ${card.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 dark:text-white font-serif leading-snug">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {card.desc}
                  </p>

                  <ul className="space-y-2.5 text-xs text-stone-700 dark:text-stone-300">
                    {card.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#3d7a64] dark:text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
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
              Booking and payment are completed seamlessly on Cal.id. Choose a time slot that suits your convenience, receive instant Google Calendar confirmation, and connect for your 45-minute 1-on-1 session.
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
              <span>Book appointment</span>
              <ArrowRight className="w-4 h-4 text-[#1e3d32]" />
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Encrypted & Private
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" /> 45-Min Session Duration
            </span>
            <span className="flex items-center gap-1.5">
              <Video className="w-4 h-4 text-emerald-400" /> Integrated Video Consultation Link
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
