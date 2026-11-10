'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Movies', href: '/movies' },
  { label: 'Exhibition Portfolio', href: '/portfolio' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cinema-950/95 backdrop-blur-md py-3 border-b border-cinema-800/80 shadow-lg shadow-black/50'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Logo size={isScrolled ? 'sm' : 'md'} showTagline={!isScrolled} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium tracking-normal transition-colors relative rounded-md ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-cinema-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right CTA */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/partner"
                className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold text-cinema-950 bg-gold hover:bg-gold-light transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-cinema-300 hover:text-white hover:bg-cinema-900 border border-cinema-800 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-cinema-950/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-cinema-500 font-semibold mb-2 px-3">
              Navigation
            </span>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-cinema-900 text-gold font-semibold'
                      : 'text-cinema-300 hover:text-white hover:bg-cinema-900/50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-cinema-800 space-y-3">
            <Link
              href="/partner"
              className="w-full py-3 px-4 rounded-md text-center font-semibold text-xs sm:text-sm text-cinema-950 bg-gold hover:bg-gold-light flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Become an Exhibition Partner</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="text-center text-xs text-cinema-400 pt-2">
              European Theatrical Operations: +995 504 88 79 72
            </div>
          </div>
        </div>
      )}
    </>
  );
}
