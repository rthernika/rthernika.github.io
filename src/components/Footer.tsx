'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Calendar, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer id="contact" className="bg-[#1a352b] dark:bg-[#091410] text-white pt-20 pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#3d7a64]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & High-Contrast Logo Badge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-[#d97706]/80 bg-[#1e3d32] p-1.5 shadow-lg flex items-center justify-center ring-2 ring-emerald-500/20">
                <Image
                  src="/favicon.png"
                  alt="Purnam Counselling Logo"
                  width={52}
                  height={52}
                  className="object-contain filter drop-shadow-sm"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif tracking-tight text-white">Purnam Counselling</h3>
                <p className="text-xs text-emerald-300 font-medium">Thernika R • M.Sc Applied Psychology | MBA | B.E</p>
              </div>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed max-w-md">
              Where compassionate psychological service meets transformative guidance. Empowering students, expectant mothers, and institutions across Coimbatore and worldwide.
            </p>

            {/* Official Social Media Logos & Theme Switcher */}
            <div className="flex items-center gap-4 pt-2">
              {/* Official YouTube Icon */}
              <a
                href="https://youtube.com/@thernika.purnam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-sm"
                aria-label="Official YouTube Channel"
                title="YouTube (@thernika.purnam)"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Official Instagram Icon */}
              <a
                href="https://instagram.com/thernika.purnam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-linear-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-sm"
                aria-label="Official Instagram Handle"
                title="Instagram (@thernika.purnam)"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Official LinkedIn Icon */}
              <a
                href="https://linkedin.com/in/rthernika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0a66c2] flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-sm"
                aria-label="Official LinkedIn Profile"
                title="LinkedIn (in/rthernika)"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Footer Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600/80 flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-sm"
                aria-label="Toggle Theme"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-emerald-200" />}
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold font-serif text-emerald-300">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Thernika R</a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-white transition-colors">Specialized Pillars</a>
              </li>
              <li>
                <a href="#counselling" className="hover:text-white transition-colors">1-on-1 Counselling</a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-white transition-colors">Workshops & Institutional</a>
              </li>
              <li>
                <a href="#media" className="hover:text-white transition-colors">Media & Community</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-amber-400 font-semibold text-amber-300 transition-colors">Purnam Blog (Notion)</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Booking */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-base font-bold font-serif text-emerald-300">Direct Contact & Booking</h4>
            
            <div className="space-y-3 text-sm text-stone-200">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d97706] shrink-0" />
                <a href="mailto:thernika.purnam@gmail.com" className="hover:underline">thernika.purnam@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d97706] shrink-0" />
                <a href="tel:+919750714144" className="hover:underline">+91-9750714144</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#d97706] shrink-0" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://cal.id/thernika"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-full shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book via cal.id/thernika</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Purnam Counselling. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span className="text-emerald-400">Powered by Cal.id & Notion CMS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
