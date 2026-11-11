import React from 'react';
import Link from 'next/link';
import { CinematicHero } from '@/components/CinematicHero';
import { CurvedTheatricalShowcase } from '@/components/CurvedTheatricalShowcase';
import { CredibilityStats } from '@/components/CredibilityStats';
import { ModernContactSection } from '@/components/ModernContactSection';
import { getMovies } from '@/lib/store/cms-store';
import {
  Globe2,
  ShieldCheck,
  Film,
  Users2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage() {
  const movies = getMovies();

  return (
    <div className="flex flex-col min-h-screen bg-[#08090C]">
      {/* Hero Section */}
      <CinematicHero />

      {/* Credibility Stats Strip (Bento Pill Layout in Luxury Theme) */}
      <section className="py-14 sm:py-16 bg-[#08090C] border-y border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[320px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <CredibilityStats />
        </div>
      </section>

      {/* 3D Curved Theatrical Slate Showcase */}
      <section className="py-20 sm:py-24 bg-[#08090C] overflow-hidden border-b border-white/10">
        <CurvedTheatricalShowcase movies={movies} />
      </section>

      {/* Corporate Profile / About Section (Executive Luxury & Fully Aligned) */}
      <section className="py-20 sm:py-28 bg-[#08090C] border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Backlights */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[350px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase font-sans inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Corporate Profile &amp; Mission</span>
            </span>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Connecting Indian Cinema With European Audiences
            </h2>

            <p className="mt-4 text-cinema-300 text-sm sm:text-base leading-relaxed">
              Bridging premier Indian production studios with European cinema operators through certified DCI mastering, encrypted KDM dispatch, and dedicated exhibition support.
            </p>
          </div>

          {/* Symmetrical 2-Column Luxury Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Card: Corporate Narrative & Mission */}
            <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 sm:p-10 md:p-12 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-gold/30 transition-all duration-300">
              {/* Subtle Top Metallic Highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono font-medium text-cinema-300">
                    <Globe2 className="w-3.5 h-3.5 text-gold" />
                    <span>European Distribution Desk</span>
                  </span>

                  <span className="text-[10px] uppercase font-mono tracking-wider text-cinema-400">
                    Tbilisi &bull; London &bull; Chennai
                  </span>
                </div>

                <div className="space-y-4 pt-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                    Strategic Distribution &amp; Premier Theatrical Exhibition
                  </h3>

                  <p className="text-cinema-200 text-sm sm:text-base leading-relaxed">
                    Alagu Production is an overseas Indian movie distribution and exhibition company based in Europe, dedicated to bringing the best of Indian cinema to audiences worldwide. With experience across 16+ projects<sup className="text-gold font-bold">*</sup> and a portfolio of successful projects, we focus on connecting Indian films with international audiences through strategic distribution and theatrical exhibition.
                  </p>

                  <p className="text-cinema-300 text-sm sm:text-base leading-relaxed">
                    Our mission is to make Indian cinema accessible to audiences across different cities and countries by building strong partnerships with cinema exhibitors and theatre operators.
                  </p>
                </div>
              </div>

              {/* Bottom Actions & Preserved Footnote */}
              <div className="relative z-10 pt-8 mt-8 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-cinema-950 bg-gradient-to-r from-[#DFC087] via-[#D4AF37] to-[#B89230] hover:brightness-110 shadow-gold-subtle transition-all duration-200 group/btn"
                  >
                    <span>Read Full Company Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/partner"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-white/[0.05] hover:bg-white/[0.10] border border-white/15 transition-colors"
                  >
                    <span>Exhibition Partnerships</span>
                  </Link>
                </div>

                <div className="text-[11px] text-cinema-400 font-sans flex items-center gap-1.5 pt-1">
                  <span className="text-gold font-bold">*</span>
                  <span>
                    Internal Note: &ldquo;16+ projects&rdquo; claim marked pending final archival record confirmation with company audit.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Card: Operational Capabilities & Technical Rigor */}
            <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 sm:p-10 md:p-12 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-gold/30 transition-all duration-300">
              {/* Subtle Top Metallic Highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-[11px] font-mono font-medium text-gold-light">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                    <span>Operational Capabilities</span>
                  </span>

                  <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>DCI Compliant</span>
                  </span>
                </div>

                <div className="space-y-4 pt-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                    Turnkey Exhibition Support for Cinema Operators
                  </h3>

                  {/* 3 Structured Feature Blocks */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0 text-gold shadow-sm mt-0.5">
                        <ShieldCheck className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white tracking-tight font-sans">
                          Punctual KDM Management
                        </h4>
                        <p className="text-xs text-cinema-300 mt-1 leading-relaxed">
                          Server-locked security keys validated 24&ndash;48 hours ahead of opening night to eliminate premiere technical delays.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0 text-gold shadow-sm mt-0.5">
                        <Film className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white tracking-tight font-sans">
                          Multilingual Day-and-Date Slate
                        </h4>
                        <p className="text-xs text-cinema-300 mt-1 leading-relaxed">
                          Simultaneous access to major tentpole releases in Tamil, Telugu, Hindi, and Malayalam with certified 2K/4K mastering.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0 text-gold shadow-sm mt-0.5">
                        <Users2 className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white tracking-tight font-sans">
                          Targeted Diaspora Marketing
                        </h4>
                        <p className="text-xs text-cinema-300 mt-1 leading-relaxed">
                          Grassroots European community mobilization, social media buzz, and localized promotions driving high opening-weekend occupancy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-cinema-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24/7 Screening Tech Hotline</span>
                </div>
                <div className="flex items-center gap-2 text-cinema-300">
                  <span>DCI 4K Scope</span>
                  <span>&bull;</span>
                  <span>Dolby Atmos</span>
                  <span>&bull;</span>
                  <span>CRU &amp; Cloud DCP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Glassmorphic Contact Section */}
      <ModernContactSection />
    </div>
  );
}
