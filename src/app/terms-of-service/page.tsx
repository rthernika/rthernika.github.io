'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, FileText, AlertTriangle, CalendarCheck, ShieldAlert, BookOpen, Scale } from 'lucide-react';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] dark:bg-[#091410] text-stone-800 dark:text-stone-100 flex flex-col selection:bg-[#1e3d32] selection:text-white transition-colors duration-300">
      {/* Subpage Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-[#0d1c15]/90 backdrop-blur-md border-b border-stone-200 dark:border-emerald-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#d97706]/80 bg-[#1e3d32] p-1 flex items-center justify-center">
              <Image src="/favicon.png" alt="Purnam Logo" width={40} height={40} className="object-contain" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-stone-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Purnam Counselling
              </span>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Psychologist Thernika R</p>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-600 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 bg-stone-100 dark:bg-emerald-950/60 px-4 py-2 rounded-full transition-all border border-stone-200 dark:border-emerald-800/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Legal Content Container */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full">
        <div className="bg-white dark:bg-[#11221b] rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-200 dark:border-emerald-800/30 space-y-8">
          
          {/* Hero Banner */}
          <div className="flex items-center gap-4 pb-6 border-b border-stone-200 dark:border-emerald-800/30">
            <div className="p-3.5 rounded-2xl bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 dark:text-white">Terms of Service</h1>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">Effective Date: August 2026 • Purnam Counselling</p>
            </div>
          </div>

          {/* Strict No Refund Highlight Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700/60 flex items-start gap-4 shadow-sm">
            <AlertTriangle className="w-7 h-7 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h3 className="font-bold text-amber-900 dark:text-amber-200 text-base uppercase tracking-wider">
                Strict No-Refund Policy Notice
              </h3>
              <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 font-medium leading-relaxed">
                Once a booking or appointment has been made and confirmed (via Cal.id or payment), <strong>all fees are strictly non-refundable</strong>. Please review your availability carefully prior to completing any session booking.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-300">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                1. Services Offered
              </h2>
              <p>
                Purnam Counselling, led by <strong>Thernika R</strong> (M.Sc Applied Psychology, MBA in HRM, B.E in CSE), provides professional psychological guidance, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-600 dark:marker:text-emerald-400">
                <li><strong>1-on-1 Psychological Counselling:</strong> Online and offline individual support for emotional well-being, stress, and personal growth.</li>
                <li><strong>Perinatal Mental Health Support:</strong> Specialist support for expectant and postnatal mothers, labor preparation, and maternal mental health.</li>
                <li><strong>Student & Parent Counselling:</strong> Emotional support, academic guidance, and student-parent conflict resolution.</li>
                <li><strong>Institutional & Corporate Workshops:</strong> Interactive mental health awareness programs and seminars.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2.5">
                <CalendarCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                2. Booking, Payment & Rescheduling Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2.5 marker:text-emerald-600 dark:marker:text-emerald-400">
                <li><strong>Booking Confirmation:</strong> Session appointments are secured upon scheduling via Cal.id and receiving confirmation.</li>
                <li><strong>No Refund Clause:</strong> Payments made for individual sessions or workshops are non-refundable once booked. No exceptions or partial refunds will be provided for cancellations initiated by the client.</li>
                <li><strong>Rescheduling Policy:</strong> If you need to reschedule a confirmed session, you must notify us at least <strong>24 hours in advance</strong>. Rescheduling requests made with less than 24 hours notice may be treated as a missed session and forfeited.</li>
                <li><strong>Punctuality:</strong> Sessions begin promptly at the scheduled time. Arriving late will shorten the remaining duration of your session without extensions.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2.5">
                <ShieldAlert className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                3. Emergency & Crisis Disclaimer
              </h2>
              <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 text-stone-700 dark:text-stone-300 text-xs sm:text-sm space-y-2.5">
                <p>
                  <strong>Important Medical & Emergency Notice:</strong> Psychological counselling sessions are non-diagnostic and do not constitute emergency psychiatric, medical, or inpatient care.
                </p>
                <p>
                  If you or someone you know is experiencing a life-threatening mental health emergency, self-harm crisis, or immediate medical distress, please contact emergency medical services or reach out to official helpline services:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>Tele-MANAS (India National Mental Health Helpline):</strong> 14416 / 1800-891-4416</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2.5">
                <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                4. Code of Conduct & Client Mutual Respect
              </h2>
              <p>
                Both client and counsellor agree to maintain an environment of mutual respect, safety, and constructive engagement. Purnam Counselling reserves the right to terminate a session or service agreement immediately if a client exhibits abusive, harassing, or illegal behavior.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 border-t border-stone-200 dark:border-emerald-800/30 pt-6">
              <h2 className="text-lg font-bold font-serif text-stone-900 dark:text-emerald-300">
                5. Intellectual Property & Governing Law
              </h2>
              <p>
                All workshop content, site branding, presentation slides, and original literature provided by Purnam Counselling remain the intellectual property of Thernika R. These terms are governed by the laws of India, under the jurisdiction of courts in Coimbatore, Tamil Nadu.
              </p>
              <div className="pt-2 text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                <p>For inquiries regarding these terms, contact us at <a href="mailto:thernika.purnam@gmail.com" className="text-emerald-600 dark:text-emerald-400 hover:underline">thernika.purnam@gmail.com</a> or <a href="tel:+919750714144" className="text-emerald-600 dark:text-emerald-400 hover:underline">+91-9750714144</a>.</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
