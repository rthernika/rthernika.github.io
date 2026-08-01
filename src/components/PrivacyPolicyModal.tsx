'use client';

import React, { useEffect } from 'react';
import { X, Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-white">Privacy Policy</h2>
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
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 flex items-start gap-3">
            <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-medium">
              At <strong>Purnam Counselling</strong>, your privacy and client confidentiality are our highest priorities. All psychological sessions, personal details, and communication are treated with strict confidentiality.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-2">
            <h3 className="text-base font-semibold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              1. Information We Collect
            </h3>
            <p>
              When you book a session or interact with Purnam Counselling, we may collect the following information:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-emerald-600 dark:marker:text-emerald-400">
              <li><strong>Personal Details:</strong> Your full name, email address, phone number, and location.</li>
              <li><strong>Booking Information:</strong> Session appointments, preferred time slots, and consultation preferences scheduled through Cal.id.</li>
              <li><strong>Voluntary Intake Details:</strong> Any background information, concerns, or goals you share during pre-session forms or consultations.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-2">
            <h3 className="text-base font-semibold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              2. Client Confidentiality & Psychological Ethics
            </h3>
            <p>
              Thernika R (M.Sc Applied Psychology, Internationally Certified Perinatal Mental Health & Student Parent Counsellor) operates under strict ethical guidelines for psychological practice:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-emerald-600 dark:marker:text-emerald-400">
              <li>All discussion topics, personal history, and session notes are strictly confidential.</li>
              <li>Information is never disclosed to family members, employers, or third parties without your explicit consent.</li>
              <li><strong>Legal & Emergency Exceptions:</strong> Confidentiality may only be breached if mandated by law or if there is imminent risk of harm to yourself or others.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-2">
            <h3 className="text-base font-semibold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              3. How Your Information Is Used
            </h3>
            <p>We use the collected information solely to:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-emerald-600 dark:marker:text-emerald-400">
              <li>Schedule, manage, and facilitate online or offline counselling sessions and workshops.</li>
              <li>Send appointment confirmations, reminders, and essential follow-up communications.</li>
              <li>Provide tailored psychological support and resource materials.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-2">
            <h3 className="text-base font-semibold font-serif text-stone-900 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              4. Data Protection & Third-Party Tools
            </h3>
            <p>
              We implement secure data storage and communication practices. Booking schedules are handled via Cal.id, which maintains robust encryption standards. We do not sell, rent, or trade your personal information to marketing agencies or commercial entities under any circumstances.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-2 pt-2 border-t border-stone-200 dark:border-emerald-800/30">
            <h3 className="text-base font-semibold font-serif text-stone-900 dark:text-emerald-300">
              5. Contact Us Regarding Your Privacy
            </h3>
            <p>
              If you have questions about this Privacy Policy or wish to request data updates, please contact:
            </p>
            <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-[#0d1c15] text-xs sm:text-sm font-mono text-stone-700 dark:text-stone-300 space-y-1">
              <p><strong>Purnam Counselling</strong></p>
              <p>Psychologist: Thernika R</p>
              <p>Email: <a href="mailto:thernika.purnam@gmail.com" className="text-emerald-600 dark:text-emerald-400 hover:underline">thernika.purnam@gmail.com</a></p>
              <p>Phone: <a href="tel:+919750714144" className="text-emerald-600 dark:text-emerald-400 hover:underline">+91-9750714144</a></p>
              <p>Location: Coimbatore, Tamil Nadu, India</p>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-stone-200 dark:border-emerald-800/30 bg-stone-50 dark:bg-[#0c1a14] shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-sm cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
