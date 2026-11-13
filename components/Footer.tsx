import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { INITIAL_SETTINGS } from '../lib/data/siteSettings';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const settings = INITIAL_SETTINGS;

  return (
    <footer className="relative bg-[#08090C] border-t border-white/10 text-cinema-300 pt-16 pb-12 overflow-hidden">
      {/* Top Glossy Sheen Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

      {/* Subtle Ambient Backlights */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[400px] h-[300px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column (Frosted Glass Container) */}
          <div className="lg:col-span-2 space-y-5 p-7 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl">
            <Logo size="lg" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-xs text-gold-light font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span>Partner of <strong className="text-white font-semibold">MADSOULS PRODUCTION LLC</strong></span>
            </div>
            <p className="text-sm text-cinema-300 max-w-sm leading-relaxed">
              Europe&apos;s trusted overseas Indian film distribution and exhibition partner. Connecting visionary Indian cinema with European audiences through premier theatrical distribution.
            </p>
            <div className="flex flex-col space-y-3 pt-2 text-sm">
              <a
                href={`https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-cinema-200 hover:text-gold transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-gold">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                </div>
                <span>{settings.phone} (Direct / WhatsApp)</span>
              </a>
              <a
                href={`mailto:${settings.email}`}
                className="inline-flex items-center gap-2.5 text-cinema-200 hover:text-gold transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-gold">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                </div>
                <span>{settings.email}</span>
              </a>
              <div className="inline-flex items-start gap-2.5 text-cinema-400">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-gold/80 mt-0.5">
                  <MapPin className="w-4 h-4 text-gold/80 flex-shrink-0" />
                </div>
                <span className="text-xs pt-1.5">{settings.headquarters}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold border-l-2 border-gold pl-2.5 font-mono">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-cinema-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cinema-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-cinema-400 hover:text-white transition-colors">
                  Movies &amp; Slate
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-cinema-400 hover:text-white transition-colors">
                  Exhibition Portfolio
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-cinema-400 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cinema-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Exhibitors */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold border-l-2 border-gold pl-2.5 font-mono">
              For Exhibitors
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/partner" className="text-gold hover:text-gold-light font-medium inline-flex items-center gap-1">
                  <span>Exhibition Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/movies?status=Now+Showing" className="text-cinema-400 hover:text-white transition-colors">
                  Now Showing Titles
                </Link>
              </li>
              <li>
                <Link href="/movies?status=Upcoming" className="text-cinema-400 hover:text-white transition-colors">
                  Upcoming Theatrical Slate
                </Link>
              </li>
              <li>
                <Link href="/partner#terms" className="text-cinema-400 hover:text-white transition-colors">
                  Commercial &amp; KDM Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Standards & Compliance */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold border-l-2 border-gold pl-2.5 font-mono">
              Standards &amp; Trust
            </h3>
            <ul className="space-y-2.5 text-xs text-cinema-400">
              <li className="flex items-center gap-1.5 text-cinema-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Certified DCI 2K / 4K Packages</span>
              </li>
              <li className="flex items-center gap-1.5 text-cinema-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Encrypted KDM Dispatch Protocol</span>
              </li>
              <li className="flex items-center gap-1.5 text-cinema-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Transparent Box-Office Audits</span>
              </li>
              <li className="pt-2 text-[11px] text-cinema-400 font-mono">
                *Claims marked pending archival company record confirmation.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Frosted Glass Ribbon) */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cinema-400 font-sans">
          <div>
            &copy; {currentYear} Alagu Production. Overseas Indian Movie Distribution &amp; Exhibition. All rights reserved.
          </div>

          {/* Developer Attribution with Interactive Hover Badge */}
          <div className="flex items-center gap-1.5 text-xs text-cinema-400">
            <span>Developed by</span>
            <a
              href="https://www.linsinfotech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/dev inline-flex items-center gap-1 text-cinema-200 hover:text-gold font-medium transition-all hover:underline underline-offset-4"
              title="www.linsinfotech.in"
            >
              <span className="font-semibold text-white group-hover/dev:text-gold transition-colors">
                Lin&apos;s Infotech Company Ltd.
              </span>
              <span className="inline-block transition-transform duration-200 group-hover/dev:translate-x-0.5 group-hover/dev:-translate-y-0.5 text-gold text-[10px]">
                ↗
              </span>
              {/* Floating Hover Tooltip showing www.linsinfotech.in */}
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/dev:opacity-100 transition-all duration-200 px-2.5 py-1 rounded-md bg-black/95 text-[11px] font-mono font-medium text-gold border border-gold/40 shadow-xl whitespace-nowrap z-30">
                www.linsinfotech.in
              </span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Distribution
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
