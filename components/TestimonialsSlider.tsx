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
      <div className="rounded-lg bg-cinema-900 border border-white/10 p-8 text-center text-cinema-400">
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
    <div className="relative rounded-lg bg-cinema-900 border border-white/10 p-6 sm:p-8 shadow-card-clean overflow-hidden">
      {/* Background quote mark */}
      <div className="absolute top-4 right-6 text-gold/5 pointer-events-none">
        <Quote className="w-28 h-28" />
      </div>

      {/* Header status bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Quote className="w-4 h-4 text-gold" />
          <span className="text-[11px] uppercase tracking-wider text-gold font-semibold font-sans">
            Partner Cinema Feedback &amp; Verification
          </span>
        </div>

        {/* CMS Audit Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-sans bg-amber-950/60 text-amber-300 border border-amber-500/30">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
          <span>{current.isApproved ? 'Approved for Publication' : 'Pending Formal Written Approval'}</span>
        </div>
      </div>

      {/* Quote Display */}
      <div className="relative z-10 py-3 min-h-[120px] flex flex-col justify-center">
        <blockquote className="font-serif text-lg sm:text-xl text-cinema-100 italic leading-relaxed">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-white text-sm sm:text-base">
              {current.author}
            </div>
            <div className="text-xs text-cinema-400">
              {current.role} &bull; <span className="text-cinema-300">{current.organization}</span> ({current.city}, {current.country})
            </div>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-cinema-400 mr-2 font-sans">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 rounded bg-cinema-950 hover:bg-white/[0.05] border border-white/10 text-cinema-300 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2 rounded bg-cinema-950 hover:bg-white/[0.05] border border-white/10 text-cinema-300 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Audit Footnote */}
      <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-cinema-500 font-sans">
        Per editorial standards, exhibition reviews and quotes are marked pending confirmation until signed theatrical release affidavits are uploaded to the CMS repository.
      </div>
    </div>
  );
}
