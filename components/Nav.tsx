'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/guides', label: 'Crop Guides' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/85 backdrop-blur-md border-b border-forest-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-forest-900/80 transition hover:text-forest-900"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary text-sm">
            Get in touch
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest-900/20"
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-forest-200/60 bg-cream-50">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-forest-900"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
