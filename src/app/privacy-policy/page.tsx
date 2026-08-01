'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
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
            <div className="p-3.5 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 dark:text-white">Privacy Policy</h1>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">Effective Date: August 2026 • Purnam Counselling</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/50 flex items-start gap-3.5">
            <Lock className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-medium">
              At <strong>Purnam Counselling</strong>, your privacy and client confidentiality are our highest priorities. All psychological sessions, personal details, and communication are treated with strict confidentiality.
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-300">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2.5">
                <Eye className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                1. Information We Collect
              </h2>
              <p>
                When you book a session or interact with Purnam Counselling, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-600 dark:marker:text-emerald-400">
                <li><strong>Personal Details:</strong> Your full name, email address, phone number, and location.</li>
                <li><strong>Booking Information:</strong> Session appointments, preferred time slots, and consultation preferences scheduled through Cal.id.</li>
                <li><strong>Voluntary Intake Details:</strong> Any background information, concerns, or goals you share during pre-session forms or consultations.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                2. Client Confidentiality & Psychological Ethics
              </h2>
              <p>
                Thernika R (M.Sc Applied Psychology, Internationally Certified Perinatal Mental Health & Student Parent Counsellor) operates under strict ethical guidelines for psychological practice:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-600 dark:marker:text-emerald-400">
                <li>All discussion topics, personal history, and session notes are strictly confidential.</li>
                <li>Information is never disclosed to family members, employers, or third parties without your explicit consent.</li>
                <li><strong>Legal & Emergency Exceptions:</strong> Confidentiality may only be breached if mandated by law or if there is imminent risk of harm to yourself or others.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                3. How Your Information Is Used
              </h2>
              <p>We use the collected information solely to:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-600 dark:marker:text-emerald-400">
                <li>Schedule, manage, and facilitate online or offline counselling sessions and workshops.</li>
                <li>Send appointment confirmations, reminders, and essential follow-up communications.</li>
                <li>Provide tailored psychological support and resource materials.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                4. Data Protection & Third-Party Tools
              </h2>
              <p>
                We implement secure data storage and communication practices. Booking schedules are handled via Cal.id, which maintains robust encryption standards. We do not sell, rent, or trade your personal information to marketing agencies or commercial entities under any circumstances.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pt-4 border-t border-stone-200 dark:border-emerald-800/30">
              <h2 className="text-lg font-bold font-serif text-stone-900 dark:text-emerald-300">
                5. Contact Us Regarding Your Privacy
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to request data updates, please contact:
              </p>
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#0d1c15] border border-stone-200 dark:border-emerald-800/40 text-xs sm:text-sm font-mono text-stone-700 dark:text-stone-300 space-y-1.5">
                <p><strong>Purnam Counselling</strong></p>
                <p>Psychologist: Thernika R</p>
                <p>Email: <a href="mailto:thernika.purnam@gmail.com" className="text-emerald-600 dark:text-emerald-400 hover:underline">thernika.purnam@gmail.com</a></p>
                <p>Phone: <a href="tel:+919750714144" className="text-emerald-600 dark:text-emerald-400 hover:underline">+91-9750714144</a></p>
                <p>Location: Coimbatore, Tamil Nadu, India</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
