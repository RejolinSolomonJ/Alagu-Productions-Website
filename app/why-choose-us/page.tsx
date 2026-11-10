import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { WhyChooseUsGrid } from '@/components/WhyChooseUsGrid';
import { CredibilityStats } from '@/components/CredibilityStats';
import { Sliders, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Choose Us | Alagu Production',
  description:
    'Discover why European cinema exhibitors, theatre owners, and multiplex operators choose Alagu Production as their premier Indian movie distribution partner.',
};

export default function WhyChooseUsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-cinema-950">
      {/* Hero Banner */}
      <section className="relative py-16 border-b border-white/10 bg-cinema-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Exhibition Excellence</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto">
            Why Partner With Alagu Production?
          </h1>

          <p className="mt-4 text-cinema-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our five core operational pillars combine international studio access, precision logistics, and localized marketing to ensure packed screenings and maximum box-office returns.
          </p>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhyChooseUsGrid />
        </div>
      </section>

      {/* Credibility Stats */}
      <section className="py-16 bg-cinema-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold font-sans">
              Measurable Performance
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Distribution &amp; Exhibition Footprint
            </h2>
          </div>
          <CredibilityStats />
        </div>
      </section>

      {/* Theatrical Standards Banner */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-cinema-900 border border-white/10 p-8 sm:p-12 text-center space-y-6 shadow-card-clean">
            <div className="w-12 h-12 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              End-to-End European Exhibition Standards
            </h3>

            <p className="text-cinema-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              From day-and-date premiere coordination and censorship certifications to localized diaspora outreach, we provide complete turnkey support for European cinema circuits.
            </p>

            <div className="pt-2">
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-cinema-950 bg-gold hover:bg-gold-light transition-colors"
              >
                <span>Become an Exhibition Partner</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
