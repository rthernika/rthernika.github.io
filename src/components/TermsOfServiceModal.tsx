'use client';

import React, { useEffect } from 'react';
import { X, FileText, AlertTriangle, CalendarCheck, ShieldAlert, BookOpen, Scale } from 'lucide-react';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#11221b] text-stone-800 dark:text-stone-100 rounded-2xl shadow-2xl border border-stone-200 dark:border-emerald-800/40 my-8 overflow-hidden z-10 flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200 dark:border-emerald-800/30 bg-stone-50 dark:bg-[#0c1a14] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-white">Terms of Service</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">Purnam Counselling • Thernika R</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-emerald-900/30 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
          
          {/* Strict No Refund Highlight Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700/60 flex items-start gap-3.5 shadow-sm">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-amber-900 dark:text-amber-200 text-sm uppercase tracking-wider">
                Strict No-Refund Policy Notice
              </h4>
              <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 font-medium leading-normal">
                Once a booking or appointment has been made and confirmed (via Cal.id or payment), <strong>all fees are strictly non-refundable</strong>. Please review your availability carefully prior to completing any session booking.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="space-y-2">
            <h3 className="text-base font-semibold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              1. Services Offered
            </h3>
            <p>
              Purnam Counselling, led by <strong>Thernika R</strong> (M.Sc Applied Psychology, MBA in HRM, B.E in CSE), provides professional psychological guidance, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-emerald-600 dark:marker:text-emerald-400">
              <li><strong>1-on-1 Psychological Counselling:</strong> Online and offline individual support for emotional well-being, stress, and personal growth.</li>
              <li><strong>Perinatal Mental Health Support:</strong> Specialist support for expectant and postnatal mothers, labor preparation, and maternal mental health.</li>
              <li><strong>Student & Parent Counselling:</strong> Emotional support, academic guidance, and student-parent conflict resolution.</li>
              <li><strong>Institutional & Corporate Workshops:</strong> Interactive mental health awareness programs and seminars.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-2">
            <h3 className="text-base font-semibold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2">
              <CalendarCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              2. Booking, Payment & Rescheduling Terms
            </h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-600 dark:marker:text-emerald-400">
              <li><strong>Booking Confirmation:</strong> Session appointments are secured upon scheduling via Cal.id and receiving confirmation.</li>
              <li><strong>No Refund Clause:</strong> Payments made for individual sessions or workshops are non-refundable once booked. No exceptions or partial refunds will be provided for cancellations initiated by the client.</li>
              <li><strong>Rescheduling Policy:</strong> If you need to reschedule a confirmed session, you must notify us at least <strong>24 hours in advance</strong>. Rescheduling requests made with less than 24 hours notice may be treated as a missed session and forfeited.</li>
              <li><strong>Punctuality:</strong> Sessions begin promptly at the scheduled time. Arriving late will shorten the remaining duration of your session without extensions.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-2">
            <h3 className="text-base font-semibold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              3. Emergency & Crisis Disclaimer
            </h3>
            <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 text-stone-700 dark:text-stone-300 text-xs sm:text-sm space-y-2">
              <p>
                <strong>Important Medical & Emergency Notice:</strong> Psychological counselling sessions are non-diagnostic and do not constitute emergency psychiatric, medical, or inpatient care.
              </p>
              <p>
                If you or someone you know is experiencing a life-threatening mental health emergency, self-harm crisis, or immediate medical distress, please contact emergency medical services or reach out to official helpline services:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-xs">
                <li><strong>Tele-MANAS (India National Mental Health Helpline):</strong> 14416 / 1800-891-4416</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-2">
            <h3 className="text-base font-semibold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              4. Code of Conduct & Client Mutual Respect
            </h3>
            <p>
              Both client and counsellor agree to maintain an environment of mutual respect, safety, and constructive engagement. Purnam Counselling reserves the right to terminate a session or service agreement immediately if a client exhibits abusive, harassing, or illegal behavior.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-2 border-t border-stone-200 dark:border-emerald-800/30 pt-4">
            <h3 className="text-base font-semibold font-serif text-stone-900 dark:text-emerald-300">
              5. Intellectual Property & Governing Law
            </h3>
            <p>
              All workshop content, site branding, presentation slides, and original literature provided by Purnam Counselling remain the intellectual property of Thernika R. These terms are governed by the laws of India, under the jurisdiction of courts in Coimbatore, Tamil Nadu.
            </p>
            <div className="pt-2 text-xs text-stone-500 dark:text-stone-400">
              <p>For inquiries regarding these terms, contact us at <a href="mailto:thernika.purnam@gmail.com" className="text-emerald-600 dark:text-emerald-400 hover:underline">thernika.purnam@gmail.com</a> or <a href="tel:+919750714144" className="text-emerald-600 dark:text-emerald-400 hover:underline">+91-9750714144</a>.</p>
            </div>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-stone-200 dark:border-emerald-800/30 bg-stone-50 dark:bg-[#0c1a14] shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm transition-colors shadow-sm cursor-pointer"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
}
