'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PartnerEnquiryForm } from '@/components/PartnerEnquiryForm';
import {
  Film,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

function PartnerContent() {
  const searchParams = useSearchParams();
  const prefilledFilm = searchParams.get('movie') || '';

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#08090C]">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 border-b border-white/10 text-center overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-gold text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Film className="w-3.5 h-3.5" />
            <span>Exhibition Partnership Programme</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Partner With Alagu Production
          </h1>

          <p className="mt-4 text-cinema-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Expand your theatre programming with Indian cinema blockbusters. We offer verified DCI DCP delivery, prompt KDM encryption, and dedicated grassroots diaspora marketing.
          </p>
        </div>
      </section>

      {/* Main Section with Partner Enquiry Form and Exhibitor Benefits */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Benefits & Direct Contacts (Frosted Glass Container) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl space-y-6 relative overflow-hidden group hover:border-gold/30 transition-all duration-300">
                {/* Top Specular Sheen */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <div className="flex items-center gap-2 text-gold text-xs uppercase font-mono tracking-widest font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Exhibitor Value Proposition</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Exhibitor Partnership Benefits
                </h2>

                <ul className="space-y-4 text-sm text-cinema-300">
                  <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-sans">Day-and-Date Synchronization:</strong>
                      Simultaneous premiere screenings aligned with domestic Indian theatrical dates.
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-sans">DCI 2K &amp; 4K Security:</strong>
                      Certified digital cinema packages compatible with all Barco, Christie, and Sony projection servers.
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-sans">Grassroots Premiere Push:</strong>
                      Targeted promotional coordination with local university Indian societies and cultural diaspora hubs.
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-sans">24/7 Screening Night Support:</strong>
                      Dedicated operations hotline for projectionists to guarantee flawless opening shows.
                    </div>
                  </li>
                </ul>

                {/* Direct Booking Desk */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cinema-400 block font-mono">
                    Immediate Theatrical Inquiries
                  </span>

                  <a
                    href="https://wa.me/995504887972?text=Hello%20Alagu%20Production,%20we%20want%20to%20discuss%20theatrical%20booking%20rights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-gold/40 flex items-center justify-between text-xs sm:text-sm text-white transition-all group shadow-sm"
                  >
                    <span className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span>WhatsApp: +995 504 88 79 72</span>
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono">Direct &rarr;</span>
                  </a>

                  <a
                    href="mailto:alaguproduction@gmail.com"
                    className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-gold/40 flex items-center justify-between text-xs sm:text-sm text-white transition-all group shadow-sm"
                  >
                    <span className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span>alaguproduction@gmail.com</span>
                    </span>
                    <span className="text-[11px] text-cinema-400 font-mono">Email &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Partner Enquiry Form */}
            <div className="lg:col-span-7">
              <PartnerEnquiryForm prefilledFilm={prefilledFilm} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PartnerPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-cinema-400 pt-28">
          Loading partner portal...
        </div>
      }
    >
      <PartnerContent />
    </Suspense>
  );
}
