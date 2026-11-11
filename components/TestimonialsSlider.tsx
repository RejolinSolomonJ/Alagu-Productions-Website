'use client';

import React, { useState } from 'react';
import { Testimonial } from '../lib/types';
import { Quote, ChevronLeft, ChevronRight, ShieldAlert, Info } from 'lucide-react';

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 text-center text-cinema-400 shadow-2xl">
        <Info className="w-8 h-8 mx-auto mb-2 text-gold opacity-60" />
        <p className="font-serif text-lg text-white">Exhibitor Testimonials</p>
        <p className="text-xs mt-1">
          Partner feedback submissions are currently undergoing compliance review in the CMS.
        </p>
      </div>
    );
  }

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 sm:p-10 shadow-2xl overflow-hidden group hover:border-gold/30 transition-all duration-300">
      {/* Top Glossy Sheen Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Background quote mark */}
      <div className="absolute top-4 right-6 text-gold/5 pointer-events-none">
        <Quote className="w-28 h-28" />
      </div>

      {/* Header status bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2">
          <Quote className="w-4 h-4 text-gold" />
          <span className="text-[11px] uppercase tracking-widest text-gold font-semibold font-sans">
            Partner Cinema Feedback &amp; Verification
          </span>
        </div>

        {/* CMS Audit Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono bg-gold/10 text-gold-light border border-gold/25">
          <ShieldAlert className="w-3.5 h-3.5 text-gold" />
          <span>{current.isApproved ? 'Approved for Publication' : 'Pending Formal Written Approval'}</span>
        </div>
      </div>

      {/* Quote Display */}
      <div className="relative z-10 py-3 min-h-[120px] flex flex-col justify-center">
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-white italic leading-relaxed">
          &ldquo;{current.quote}&rdquo;
        </p>
      </div>

      {/* Author and Navigation */}
      <div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
        <div>
          <h4 className="font-serif text-base font-bold text-white">
            {current.author}
          </h4>
          <p className="text-xs text-cinema-400 font-sans">
            {current.role} &bull; <span className="text-cinema-300">{current.cinemaName}</span> ({current.location})
          </p>
        </div>

        {/* Controls (Frosted Glass Buttons) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md text-white border border-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-cinema-400 px-1">
            {currentIndex + 1} / {testimonials.length}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md text-white border border-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
