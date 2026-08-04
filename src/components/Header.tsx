'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Calendar, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface NavLink {
  name: string;
  href: string;
  highlight?: boolean;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: '1-on-1 Counselling', href: '/#counselling' },
    { name: 'Workshops', href: '/#workshops' },
    { name: 'Media', href: '/#media' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name - High Contrast Badge in Light & Dark mode */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#d97706]/70 bg-[#1e3d32] p-1.5 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-[#d97706] ring-2 ring-[#1e3d32]/20">
              <Image
                src="/favicon.png"
                alt="Purnam Counselling Logo"
                fill
                className="object-contain p-0.5 filter drop-shadow-sm"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1e3d32] dark:text-emerald-300 font-serif">
                Purnam Counselling
              </span>
              <span className="text-xs font-semibold text-[#3d7a64] dark:text-emerald-400/90 tracking-wide">
                Thernika R • Psychologist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#1e3d32] dark:hover:text-emerald-300 ${
                  link.highlight
                    ? 'text-[#d97706] dark:text-amber-400 font-semibold bg-[#d97706]/10 dark:bg-amber-400/10 px-3 py-1 rounded-full hover:bg-[#d97706]/20'
                    : 'text-stone-700 dark:text-stone-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Theme Switcher & Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dark/Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-stone-100 dark:bg-[#1a3028] text-stone-700 dark:text-amber-400 hover:bg-stone-200 dark:hover:bg-[#234237] transition-all border border-stone-200 dark:border-emerald-800/40 shadow-sm flex items-center justify-center"
              aria-label="Toggle dark and light theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 animate-in spin-in-90 duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-[#1e3d32] animate-in spin-in-90 duration-300" />
              )}
            </button>

            {/* Book Session CTA */}
            <a
              href="https://cal.id/thernika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1e3d32] dark:bg-emerald-700 hover:bg-[#2c5949] dark:hover:bg-emerald-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-[#d97706] dark:text-amber-300" />
              <span>Book Session</span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger Menu */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-stone-100 dark:bg-[#1a3028] text-stone-700 dark:text-amber-400 hover:bg-stone-200 transition-all border border-stone-200 dark:border-emerald-800/40"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-[#1e3d32]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 dark:text-stone-200 hover:text-[#1e3d32] hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-nav border-b border-stone-200 dark:border-emerald-800/40 px-4 pt-4 pb-6 mt-3 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  link.highlight
                    ? 'bg-[#d97706]/10 text-[#d97706] dark:text-amber-400 font-semibold'
                    : 'text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-[#1a3028]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2 border-t border-stone-200 dark:border-emerald-800/40 mt-1 flex flex-col gap-2">
              <a
                href="https://cal.id/thernika"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1e3d32] dark:bg-emerald-700 text-white text-base font-medium py-3 rounded-full shadow-md"
              >
                <Calendar className="w-5 h-5 text-[#d97706] dark:text-amber-300" />
                <span>Book 1-on-1 Session</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
