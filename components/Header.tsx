'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
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
            ? 'bg-[#08090C]/80 backdrop-blur-2xl py-3 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
            : 'bg-[#08090C]/40 backdrop-blur-xl py-4 sm:py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Logo size={isScrolled ? 'sm' : 'md'} showTagline={!isScrolled} />
            </div>

            {/* Desktop Navigation (Frosted Glass Capsule Bar) */}
            <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-inner" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-1.5 text-xs xl:text-sm font-medium tracking-normal transition-all duration-200 relative rounded-full ${
                      isActive
                        ? 'text-white font-semibold bg-white/[0.10] border border-white/15 shadow-sm'
                        : 'text-cinema-300 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons: Theme Toggle + Partner CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Theme Toggle Button */}
              <ThemeToggle />

              {/* Partner CTA Button: Brushed Champagne Gold */}
              <div className="hidden sm:flex items-center">
                <Link
                  href="/partner"
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs xl:text-sm font-semibold text-cinema-950 bg-gradient-to-r from-[#DFC087] via-[#D4AF37] to-[#B89230] hover:brightness-110 shadow-gold-subtle active:scale-[0.98] transition-all duration-200"
                >
                  <span>Partner With Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden items-center">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-xl text-cinema-300 hover:text-white bg-white/[0.05] border border-white/10 backdrop-blur-md transition-colors"
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (Frosted Glassmorphic Overlay) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/70 backdrop-blur-2xl pt-24 pb-8 px-6 flex flex-col justify-between"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <nav className="space-y-2 mt-4" onClick={(e) => e.stopPropagation()}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-5 py-3 rounded-2xl text-base font-medium transition-all ${
                    isActive
                      ? 'text-white bg-white/[0.12] border border-white/15 font-semibold shadow-inner'
                      : 'text-cinema-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-xs uppercase font-mono tracking-wider text-cinema-400">Appearance</span>
              <ThemeToggle />
            </div>

            <Link
              href="/partner"
              className="w-full py-3.5 px-6 rounded-2xl text-center text-sm font-semibold text-cinema-950 bg-gradient-to-r from-[#DFC087] via-[#D4AF37] to-[#B89230] hover:brightness-110 shadow-gold-subtle flex items-center justify-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-xs font-mono text-cinema-400">
              European Indian Film Distribution Desk
            </div>
          </div>
        </div>
      )}
    </>
  );
}
