import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, ShieldCheck, FileText, ArrowRight, Lock } from 'lucide-react';
import { INITIAL_SETTINGS } from '../lib/data/siteSettings';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const settings = INITIAL_SETTINGS;

  return (
    <footer className="relative bg-cinema-950 border-t border-white/10 text-cinema-300 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-cinema-400 max-w-sm leading-relaxed mt-4">
              Europe&apos;s trusted overseas Indian film distribution and exhibition partner. Connecting visionary Indian cinema with European audiences through premier theatrical distribution.
            </p>
            <div className="flex flex-col space-y-2.5 pt-2 text-sm">
              <a
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-cinema-200 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{settings.phone} (Direct / WhatsApp)</span>
              </a>
              <a
                href={`mailto:${settings.email}`}
                className="inline-flex items-center gap-2.5 text-cinema-200 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{settings.email}</span>
              </a>
              <div className="inline-flex items-start gap-2.5 text-cinema-400">
                <MapPin className="w-4 h-4 text-gold/80 flex-shrink-0 mt-0.5" />
                <span className="text-xs">{settings.headquarters}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold border-l-2 border-gold pl-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/movies" className="hover:text-gold transition-colors">
                  Movies &amp; Slate
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gold transition-colors">
                  Exhibition Portfolio
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-gold transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Exhibitors */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold border-l-2 border-gold pl-2">
              For Exhibitors
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/partner" className="text-gold hover:underline font-medium inline-flex items-center gap-1">
                  <span>Exhibition Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/movies?status=Now+Showing" className="hover:text-gold transition-colors">
                  Now Showing Titles
                </Link>
              </li>
              <li>
                <Link href="/movies?status=Upcoming" className="hover:text-gold transition-colors">
                  Upcoming Theatrical Slate
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gold transition-colors">
                  Past Circuits &amp; Cities
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${settings.whatsapp}?text=Hello%20Alagu%20Production,%20we%20are%20interested%20in%20exhibition%20rights`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Direct WhatsApp Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Territories & Compliance */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold border-l-2 border-gold pl-2">
              European Network
            </h3>
            <p className="text-xs text-cinema-400 leading-relaxed">
              Serving cinema exhibitors across United Kingdom, Germany, France, Benelux, Nordics, Switzerland, Poland, Ireland &amp; Georgia.
            </p>
            <div className="p-3 rounded bg-cinema-900 border border-white/10 text-[11px] text-cinema-300 space-y-1">
              <div className="font-semibold text-gold">DCI Compliant 2K / 4K</div>
              <div className="text-cinema-400">Dolby Atmos &amp; 5.1 / 7.1 delivery via secure satellite &amp; broadband KDM.</div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cinema-400">
          <div>
            &copy; {currentYear} Alagu Production. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors inline-flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </Link>
            <Link
              href="/admin"
              className="text-cinema-400 hover:text-gold transition-colors inline-flex items-center gap-1 opacity-70 hover:opacity-100"
            >
              <Lock className="w-3 h-3" />
              <span>CMS Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
