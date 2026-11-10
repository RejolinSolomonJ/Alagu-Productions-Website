import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { EuropeanMapVisual } from '@/components/EuropeanMapVisual';
import { CredibilityStats } from '@/components/CredibilityStats';
import {
  Globe,
  Target,
  Users,
  ShieldCheck,
  ArrowRight,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Alagu Production',
  description:
    'Alagu Production is an overseas Indian movie distribution and exhibition company based in Europe, connecting Indian cinema with international audiences through strategic theatrical partnerships.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Corporate Profile &amp; Theatrical Vision</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Dedicated to Bringing the Best of Indian Cinema to European Audiences
          </h1>

          <p className="mt-5 text-cinema-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Bridging creators, studios, and international exhibitors through seamless theatrical distribution, certified DCI standards, and high-impact regional screenings.
          </p>
        </div>
      </section>

      {/* Main Narrative & Prescribed Copy */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-cinema-900 border border-white/10 p-8 sm:p-12 relative shadow-card-clean">
            <div className="space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6 border-l-2 border-gold pl-4">
                Our Story &amp; Purpose
              </h2>

              {/* Exact Copy required by User */}
              <p className="text-base sm:text-lg text-cinema-200 leading-relaxed font-normal">
                Alagu Production is an overseas Indian movie distribution and exhibition company based in Europe, dedicated to bringing the best of Indian cinema to audiences worldwide. With experience across 16+ projects<sup className="text-gold font-bold">*</sup> and a portfolio of successful projects, we focus on connecting Indian films with international audiences through strategic distribution and theatrical exhibition.
              </p>

              <p className="text-base sm:text-lg text-cinema-200 leading-relaxed font-normal">
                Our mission is to make Indian cinema accessible to audiences across different cities and countries by building strong partnerships with cinema exhibitors and theatre operators.
              </p>
            </div>

            {/* Internal CMS / Audit Footnote */}
            <div className="mt-8 pt-6 border-t border-white/10 text-xs font-sans text-cinema-400 flex items-start gap-2 bg-black/40 p-3.5 rounded border border-white/5">
              <Info className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-gold">Internal CMS Compliance Note:</strong> Confirm &ldquo;16+ projects&rdquo; claim with company records before print publishing.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Block */}
      <section className="py-16 bg-cinema-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-lg bg-cinema-950 border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Our Mission</h3>
              <p className="text-sm text-cinema-300 leading-relaxed">
                To expand the theatrical horizon of Indian cinema across European territory by delivering premiere day-and-date theatrical releases, upholding rigorous DCI digital cinema standards, and supporting local exhibitors.
              </p>
            </div>

            <div className="p-7 rounded-lg bg-cinema-950 border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Exhibitor-First Approach</h3>
              <p className="text-sm text-cinema-300 leading-relaxed">
                We view cinema owners not merely as venues, but as vital co-hosts. Our transparent terms, prompt KDM management, and promotional assistance empower operators to maximize screen profitability.
              </p>
            </div>

            <div className="p-7 rounded-lg bg-cinema-950 border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">DCI &amp; Operational Rigor</h3>
              <p className="text-sm text-cinema-300 leading-relaxed">
                Every title is delivered in certified 2K / 4K Scope formats with Dolby Atmos &amp; 5.1/7.1 sound mastering, paired with encrypted Key Delivery Messages (KDM) timed precisely for zero opening-night downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* European Network Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold font-sans">
              Pan-European Theatrical Reach
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Active Theatrical Circuits Across Europe
            </h2>
            <p className="text-cinema-400 text-sm mt-2">
              From historic independent screens to premier commercial multiplexes across the United Kingdom, Germany, France, Nordics, and Eastern Europe.
            </p>
          </div>

          <EuropeanMapVisual />
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-cinema-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CredibilityStats />
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-cinema-950 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Ready to Exhibit Indian Blockbusters in Your City?
          </h2>
          <p className="text-cinema-300 text-base max-w-2xl mx-auto leading-relaxed">
            Connect with our European theatrical booking desk to explore upcoming film availability, screen allocation, and terms.
          </p>
          <div className="pt-2">
            <Link
              href="/partner"
              className="inline-flex items-center gap-2 px-7 py-3 rounded font-semibold text-sm text-cinema-950 bg-gold hover:bg-gold-light transition-colors"
            >
              <span>Become an Exhibition Partner</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
