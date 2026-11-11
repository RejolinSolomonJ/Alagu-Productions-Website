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
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Alagu Production',
  description:
    'Alagu Production is an overseas Indian movie distribution and exhibition company based in Europe, connecting Indian cinema with international audiences through strategic theatrical partnerships.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-[#08090C] min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-white/10">
        {/* Subtle Ambient Backlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gold text-xs font-semibold uppercase tracking-wider mb-5">
            <Globe className="w-3.5 h-3.5" />
            <span>Corporate Profile &bull; Partner of MADSOULS PRODUCTION LLC</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Dedicated to Bringing the Best of Indian Cinema to European Audiences
          </h1>

          <p className="mt-5 text-cinema-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Bridging creators, studios, and international exhibitors through seamless theatrical distribution, certified DCI standards, and high-impact regional screenings.
          </p>
        </div>
      </section>

      {/* Main Narrative & Prescribed Copy */}
      <section className="py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden">
            {/* Top Sheen */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest font-sans">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Our Story &amp; Purpose</span>
              </div>

              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Pioneering Strategic Indian Film Exhibition Across Europe
              </h2>

              {/* Exact Copy required by User */}
              <p className="text-base sm:text-lg text-cinema-200 leading-relaxed font-normal">
                Alagu Production is an overseas Indian movie distribution and exhibition company based in Europe and an official partner of <strong className="text-white font-semibold">MADSOULS PRODUCTION LLC</strong>, dedicated to bringing the best of Indian cinema to audiences worldwide. With experience across 16+ projects<sup className="text-gold font-bold">*</sup> and a portfolio of successful projects, we focus on connecting Indian films with international audiences through strategic distribution and theatrical exhibition.
              </p>

              <p className="text-base sm:text-lg text-cinema-200 leading-relaxed font-normal">
                Our mission is to make Indian cinema accessible to audiences across different cities and countries by building strong partnerships with cinema exhibitors and theatre operators.
              </p>
            </div>

            {/* Internal CMS / Audit Footnote */}
            <div className="mt-8 pt-6 border-t border-white/10 text-xs font-sans text-cinema-400 flex items-start gap-2.5 bg-black/40 p-4 rounded-xl border border-white/5 relative z-10">
              <Info className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-gold">Internal CMS Compliance Note:</strong> Confirm &ldquo;16+ projects&rdquo; claim with company records before print publishing.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento Grid */}
      <section className="py-16 sm:py-20 bg-[#08090C] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 space-y-4 flex flex-col justify-between hover:border-gold/30 transition-all shadow-xl group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold group-hover:scale-105 transition-all shadow-sm">
                  <Target className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">Our Mission</h3>
                <p className="text-sm text-cinema-300 leading-relaxed">
                  To expand the theatrical horizon of Indian cinema across European territory by delivering premiere day-and-date theatrical releases, upholding rigorous DCI digital cinema standards, and supporting local exhibitors.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-cinema-400">
                Pan-European Reach
              </div>
            </div>

            {/* Exhibitor-First */}
            <div className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 space-y-4 flex flex-col justify-between hover:border-gold/30 transition-all shadow-xl group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold group-hover:scale-105 transition-all shadow-sm">
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">Exhibitor-First Approach</h3>
                <p className="text-sm text-cinema-300 leading-relaxed">
                  We view cinema owners not merely as venues, but as vital co-hosts. Our transparent terms, prompt KDM management, and promotional assistance empower operators to maximize screen profitability.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-cinema-400">
                Transparent Terms
              </div>
            </div>

            {/* DCI Rigor */}
            <div className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 space-y-4 flex flex-col justify-between hover:border-gold/30 transition-all shadow-xl group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold group-hover:scale-105 transition-all shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">DCI &amp; Operational Rigor</h3>
                <p className="text-sm text-cinema-300 leading-relaxed">
                  Every title is delivered in certified 2K / 4K Scope formats with Dolby Atmos &amp; 5.1/7.1 sound mastering, paired with encrypted Key Delivery Messages (KDM) timed precisely for zero opening-night downtime.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-cinema-400">
                DCI 4K &bull; Dolby Atmos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* European Network Map */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase font-sans inline-block mb-2">
              Pan-European Theatrical Reach
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Active Theatrical Circuits Across Europe
            </h2>
            <p className="text-cinema-300 text-sm sm:text-base mt-3 leading-relaxed">
              From historic independent screens to premier commercial multiplexes across the United Kingdom, Germany, France, Nordics, and Eastern Europe.
            </p>
          </div>

          <EuropeanMapVisual />
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 sm:py-20 bg-[#08090C] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CredibilityStats />
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-[#08090C] border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Exhibit Indian Blockbusters in Your City?
          </h2>
          <p className="text-cinema-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Connect with our European theatrical booking desk to explore upcoming film availability, screen allocation, and terms.
          </p>
          <div className="pt-3">
            <Link
              href="/partner"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm text-cinema-950 bg-gradient-to-r from-[#DFC087] via-[#D4AF37] to-[#B89230] hover:brightness-110 shadow-gold-subtle transition-all duration-200"
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
