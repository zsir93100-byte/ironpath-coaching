'use client';

import { useState } from 'react';
import { Dumbbell, Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#transformations', label: 'Results' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#booking', label: 'Book Now' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
  }

  return (
    <header className="sticky top-0 z-50 border-b border-iron-200/60 bg-white/80 backdrop-blur-xl dark:border-iron-800/60 dark:bg-iron-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#hero" className="flex items-center gap-2 text-xl font-bold text-iron-950 dark:text-iron-50">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-forge-500 text-white">
            <Dumbbell className="h-5 w-5" />
          </span>
          <span>IronPath</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-iron-600 transition hover:bg-iron-100 hover:text-iron-900 dark:text-iron-400 dark:hover:bg-iron-900 dark:hover:text-iron-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-iron-500 transition hover:bg-iron-100 dark:text-iron-400 dark:hover:bg-iron-900"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href="#booking"
            className="hidden rounded-lg bg-forge-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forge-600 lg:inline-flex"
          >
            Free Consultation
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-iron-600 lg:hidden dark:text-iron-300"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={cn('overflow-hidden transition-all duration-300 lg:hidden', open ? 'max-h-[30rem]' : 'max-h-0')}>
        <nav className="flex flex-col gap-1 border-t border-iron-200/60 px-6 py-4 dark:border-iron-800/60">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-iron-600 hover:bg-iron-100 dark:text-iron-400 dark:hover:bg-iron-900">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
