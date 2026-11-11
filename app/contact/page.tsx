import React from 'react';
import type { Metadata } from 'next';
import { ModernContactSection } from '@/components/ModernContactSection';
import { MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Alagu Production',
  description:
    'Contact Alagu Production for European Indian film distribution, theatre bookings, and cinema exhibition inquiries.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#08090C] flex flex-col justify-center">
      {/* Header Banner */}
      <section className="relative py-14 sm:py-16 border-b border-white/10 text-center overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-gold text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Distribution Liaison</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Contact Alagu Production
          </h1>

          <p className="mt-4 text-cinema-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get in touch with our theatrical distribution desk for screening enquiries, KDM coordination, or international co-distribution across Europe.
          </p>
        </div>
      </section>

      {/* Modern Glassmorphic Contact Section */}
      <div className="flex-grow flex items-center">
        <ModernContactSection />
      </div>
    </div>
  );
}
