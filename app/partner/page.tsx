'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PartnerEnquiryForm } from '@/components/PartnerEnquiryForm';
import {
  Film,
  Phone,
  Mail,
  CheckCircle2,
} from 'lucide-react';

function PartnerContent() {
  const searchParams = useSearchParams();
  const prefilledFilm = searchParams.get('movie') || '';

  return (
    <div className="pt-24 pb-20 min-h-screen bg-cinema-950">
      {/* Header Banner */}
      <section className="relative py-14 border-b border-white/10 bg-cinema-900/60 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>Exhibition Partnership Programme</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Partner With Alagu Production
          </h1>

          <p className="mt-4 text-cinema-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Expand your theatre programming with Indian cinema blockbusters. We offer verified DCI DCP delivery, prompt KDM encryption, and dedicated grassroots diaspora marketing.
          </p>
        </div>
      </section>

      {/* Main Section with Partner Enquiry Form and Exhibitor Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Benefits & Direct Contacts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-lg bg-cinema-900 border border-white/10 shadow-card-clean space-y-6">
                <h2 className="font-serif text-2xl font-bold text-white border-l-2 border-gold pl-3">
                  Exhibitor Partnership Benefits
                </h2>

                <ul className="space-y-4 text-sm text-cinema-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Day-and-Date Synchronization:</strong>
                      Simultaneous premiere screenings aligned with domestic Indian theatrical dates.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">DCI 2K &amp; 4K Security:</strong>
                      Certified digital cinema packages compatible with all Barco, Christie, and Sony projection servers.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Grassroots Premiere Push:</strong>
                      Targeted promotional coordination with local university Indian societies and cultural diaspora hubs.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">24/7 Screening Night Support:</strong>
                      Dedicated operations hotline for projectionists to guarantee flawless opening shows.
                    </div>
                  </li>
                </ul>

                {/* Direct Booking Desk */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cinema-400 block">
                    Immediate Theatrical Inquiries
                  </span>

                  <a
                    href="https://wa.me/995504887972?text=Hello%20Alagu%20Production,%20we%20want%20to%20discuss%20theatrical%20booking%20rights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded bg-cinema-950 border border-white/10 hover:border-gold/40 flex items-center justify-between text-xs text-white transition-colors group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-gold" />
                      <span>WhatsApp: +995 504 88 79 72</span>
                    </span>
                    <span className="text-[11px] text-emerald-400">Online &rarr;</span>
                  </a>

                  <a
                    href="mailto:alaguproduction@gmail.com"
                    className="p-3.5 rounded bg-cinema-950 border border-white/10 hover:border-gold/40 flex items-center justify-between text-xs text-white transition-colors group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-gold" />
                      <span>alaguproduction@gmail.com</span>
                    </span>
                    <span className="text-[11px] text-cinema-400">Email &rarr;</span>
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
