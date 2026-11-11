import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { WhyChooseUsGrid } from '@/components/WhyChooseUsGrid';
import { CredibilityStats } from '@/components/CredibilityStats';
import { Sliders, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Choose Us | Alagu Production',
  description:
    'Discover why European cinema exhibitors, theatre owners, and multiplex operators choose Alagu Production as their premier Indian movie distribution partner.',
};

export default function WhyChooseUsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#08090C]">
      {/* Hero Banner */}
      <section className="relative py-16 sm:py-20 border-b border-white/10 overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-gold text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sliders className="w-3.5 h-3.5" />
            <span>Exhibition Excellence</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Why Partner With Alagu Production?
          </h1>

          <p className="mt-4 text-cinema-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our five core operational pillars combine international studio access, precision logistics, and localized marketing to ensure packed screenings and maximum box-office returns.
          </p>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhyChooseUsGrid />
        </div>
      </section>

      {/* Credibility Stats */}
      <section className="py-16 sm:py-20 bg-[#08090C] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Measurable Performance</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mt-2">
              Distribution &amp; Exhibition Footprint
            </h2>
          </div>
          <CredibilityStats />
        </div>
      </section>

      {/* Theatrical Standards Banner (Frosted Glass Container) */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden group hover:border-gold/30 transition-all duration-300">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

            <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center mx-auto text-gold shadow-sm">
              <ShieldCheck className="w-7 h-7 text-gold" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Direct Cinema Partnership Model
            </h3>

            <p className="text-cinema-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              We operate on transparent terms, prompt KDM management, and direct studio liaisons. Join our growing European exhibitor circuit today.
            </p>

            <div className="pt-2">
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-cinema-950 bg-gradient-to-r from-[#DFC087] via-[#D4AF37] to-[#B89230] hover:brightness-110 shadow-gold-subtle transition-all"
              >
                <span>Initiate Exhibitor Partnership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
