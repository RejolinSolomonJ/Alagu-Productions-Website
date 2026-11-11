import React from 'react';
import Link from 'next/link';
import { CinematicHero } from '@/components/CinematicHero';
import { CurvedTheatricalShowcase } from '@/components/CurvedTheatricalShowcase';
import { CredibilityStats } from '@/components/CredibilityStats';
import { ModernContactSection } from '@/components/ModernContactSection';
import { getMovies, getProjects } from '@/lib/store/cms-store';
import { CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const movies = getMovies();
  const projects = getProjects().slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <CinematicHero />

      {/* Credibility Stats Strip (Modern Bento Pill Layout) */}
      <section className="py-14 sm:py-16 bg-[#07080f] border-y border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <CredibilityStats />
        </div>
      </section>

      {/* 3D Curved Theatrical Slate Showcase (Exact Match to User Reference Design) */}
      <section className="py-20 sm:py-24 bg-cinema-950 overflow-hidden border-b border-white/10">
        <CurvedTheatricalShowcase movies={movies} />
      </section>

      {/* Corporate Profile / About Section */}
      <section className="py-20 bg-cinema-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] uppercase tracking-wider text-gold font-semibold font-sans">
                Corporate Profile
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Connecting Indian Cinema With European Audiences
              </h2>

              <p className="text-cinema-300 text-sm sm:text-base leading-relaxed">
                Alagu Production is an overseas Indian movie distribution and exhibition company based in Europe, dedicated to bringing the best of Indian cinema to audiences worldwide. With experience across 16+ projects<sup className="text-gold">*</sup> and a portfolio of successful projects, we focus on connecting Indian films with international audiences through strategic distribution and theatrical exhibition.
              </p>

              <p className="text-cinema-400 text-sm leading-relaxed">
                Our mission is to make Indian cinema accessible to audiences across different cities and countries by building strong partnerships with cinema exhibitors and theatre operators.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="px-5 py-2.5 rounded text-xs sm:text-sm font-semibold text-cinema-950 bg-gold hover:bg-gold-light transition-colors"
                >
                  Read About Us
                </Link>

                <Link
                  href="/partner"
                  className="px-5 py-2.5 rounded text-xs sm:text-sm font-medium text-cinema-300 hover:text-white border border-white/10 hover:bg-white/[0.04] transition-colors"
                >
                  Exhibition Partnerships
                </Link>
              </div>

              <div className="text-[11px] text-cinema-500 font-sans">
                *Note: &ldquo;16+ projects&rdquo; claim marked pending final archival record confirmation with company audit.
              </div>
            </div>

            {/* Right Operational Card */}
            <div className="lg:col-span-5">
              <div className="rounded-lg bg-cinema-950 border border-white/10 p-6 space-y-4 shadow-card-clean">
                <h3 className="font-serif text-lg font-bold text-white">
                  Operational Capabilities
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm text-cinema-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Punctual KDM Management:</strong> Validated ahead of opening night to eliminate technical delays.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Multilingual Titles:</strong> Simultaneous access to major releases in Tamil, Telugu, Hindi, and Malayalam.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Regional Marketing:</strong> Diaspora community outreach driving opening weekend screen occupancy.
                    </span>
                  </li>
                </ul>
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
