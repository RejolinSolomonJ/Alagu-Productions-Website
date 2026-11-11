'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/lib/types';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Globe2,
  Pause,
  Play,
  Film,
} from 'lucide-react';

interface CurvedTheatricalShowcaseProps {
  movies: Movie[];
}

const WORKFLOW_STEPS = [
  {
    step: '#01',
    title: 'Strategy & Acquisition',
    desc: 'Direct studio partnerships and pan-European territorial rights negotiation.',
  },
  {
    step: '#02',
    title: 'DCI 4K Mastering',
    desc: 'Certified DCI digital cinema packages, Dolby Atmos, and localized subtitling.',
  },
  {
    step: '#03',
    title: 'Encrypted KDM Dispatch',
    desc: 'Server-locked security keys delivered 24-48 hours before theatrical premiere.',
  },
  {
    step: '#04',
    title: 'Exhibition & Settlement',
    desc: 'Grassroots diaspora marketing, 24/7 technical hotline, and box-office accounting.',
  },
];

export function CurvedTheatricalShowcase({ movies }: CurvedTheatricalShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = movies.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay loop
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, nextSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  // Compute layout for visible cards around activeIndex: offsets -3, -2, -1, 0, 1, 2, 3
  const visibleOffsets = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Curved Theatrical Slate Showcase"
    >
      {/* 1. Centered Header Section (Exact Match to User Reference Design) */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-8 sm:mb-12">
        <span className="text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase font-sans inline-block mb-2">
          Theatrical Catalogue
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Current &amp; Upcoming Theatrical Slate
        </h2>

        <p className="mt-3 text-cinema-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
          Explore high-demand Indian feature films available for theatrical booking and screening across European cinema circuits.
        </p>

        {/* Pill CTA button with circular arrow icon (Exact match to reference "See more Projects ->") */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/movies"
            className="group inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm"
          >
            <span>Explore All 16 Titles</span>
            <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#DFC087] to-[#D4AF37] text-cinema-950 flex items-center justify-center transform group-hover:translate-x-0.5 transition-transform duration-150">
              <ArrowRight className="w-3.5 h-3.5 font-bold" />
            </span>
          </Link>
        </div>
      </div>

      {/* 2. The 3D Curved Perspective Panoramic Arc */}
      <div
        className="relative w-full py-8 sm:py-12 overflow-hidden flex items-center justify-center [perspective:1400px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle Ambient Backlight Glow behind the arc */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[360px] bg-gold/10 rounded-full blur-[110px] pointer-events-none" />

        {/* Carousel Track Container */}
        <div className="relative w-full max-w-7xl h-[390px] sm:h-[470px] md:h-[530px] flex items-center justify-center [transform-style:preserve-3d]">
          {visibleOffsets.map((offset) => {
            // Circular wrap index
            const movieIndex = (activeIndex + offset + total * 10) % total;
            const movie = movies[movieIndex];
            const isCenter = offset === 0;

            // Geometry for Concave Cylindrical Arc (matching reference image perspective):
            // Outer cards rotate inwards toward viewer in a curved 3D panoramic amphitheater
            const rotY = offset * 11.5; // -34.5deg to +34.5deg
            const transX = offset * 180; // card spacing
            const transZ = -Math.abs(offset) * 38; // outer cards sink into curved cylinder arc
            const transY = Math.pow(Math.abs(offset), 1.6) * -4; // subtle parabolic rise at edges
            const scale = 1 - Math.abs(offset) * 0.05; // center is largest
            const opacity = 1 - Math.abs(offset) * 0.15; // soft depth fade on extreme wings

            const posterSrc = movie.posterUrl || `/posters/${movie.slug}.jpg`;

            return (
              <div
                key={`${movie.id}-${offset}`}
                onClick={() => setActiveIndex(movieIndex)}
                style={{
                  transform: `translateX(${transX}px) translateY(${transY}px) translateZ(${transZ}px) rotateY(${rotY}deg) scale(${scale})`,
                  zIndex: 20 - Math.abs(offset),
                  opacity: Math.max(0.35, opacity),
                }}
                className={`absolute w-[210px] sm:w-[260px] md:w-[305px] aspect-[2/3] rounded-2xl cursor-pointer transition-all duration-500 ease-out select-none group ${
                  isCenter
                    ? 'ring-2 ring-gold/90 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.35)] scale-100'
                    : 'shadow-[0_15px_35px_rgba(0,0,0,0.75)] hover:opacity-100 hover:scale-[1.02]'
                }`}
              >
                {/* Movie Card Poster Presentation */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-cinema-950 border border-white/20 flex flex-col justify-between shadow-2xl">
                  {/* Thematic Movie Poster Background */}
                  <Image
                    src={posterSrc}
                    alt={movie.title}
                    fill
                    unoptimized
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 210px, (max-width: 768px) 260px, 305px"
                    priority={Math.abs(offset) <= 1}
                  />

                  {/* Top Subtle Scrim for Badge Readability */}
                  <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/85 via-black/35 to-transparent pointer-events-none" />

                  {/* Bottom Vignette for Caption */}
                  <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

                  {/* Top Bar: Status Badge + Year */}
                  <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between text-[11px] font-sans">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md border ${
                        movie.status === 'Now Showing'
                          ? 'bg-emerald-500/35 text-emerald-300 border-emerald-400/60 shadow-[0_0_12px_rgba(16,185,129,0.35)]'
                          : 'bg-gold/35 text-gold-light border-gold/60 shadow-[0_0_12px_rgba(212,175,55,0.35)]'
                      }`}
                    >
                      {movie.status}
                    </span>

                    <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-cinema-300 border border-white/20 font-mono text-[10px]">
                      {movie.releaseYear}
                    </span>
                  </div>

                  {/* Bottom Card Footer: Movie Title, Territory & Slate Link */}
                  <div className="relative z-10 p-4 sm:p-5 pt-0 space-y-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {movie.languages.slice(0, 3).map((lang) => (
                        <span
                          key={lang}
                          className="px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-cinema-200 text-[10px] border border-white/20 font-sans"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-tight group-hover:text-gold-light transition-colors drop-shadow-md">
                      {movie.title}
                    </h3>

                    <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-cinema-300 flex items-center gap-1 truncate max-w-[140px]">
                        <Globe2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="truncate">{movie.territories[0] || 'Europe'}</span>
                      </span>

                      <Link
                        href={`/movies/${movie.slug}`}
                        className="inline-flex items-center gap-1 font-semibold text-gold hover:text-gold-light transition-colors text-xs px-2.5 py-1 rounded-md bg-black/60 hover:bg-gold/20 border border-gold/40 backdrop-blur-md"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Slate</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-cinema-900/90 hover:bg-cinema-850 text-white border border-white/15 shadow-xl transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Previous movie"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-cinema-900/90 hover:bg-cinema-850 text-white border border-white/15 shadow-xl transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Next movie"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Index Progress Dots & Autoplay Toggle */}
      <div className="flex items-center justify-center gap-3 mt-4 mb-12 sm:mb-16">
        <button
          type="button"
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="p-1.5 rounded-full bg-cinema-900 border border-white/10 text-cinema-400 hover:text-white transition-colors"
          title={isAutoPlay ? 'Pause auto-rotation' : 'Play auto-rotation'}
          aria-label={isAutoPlay ? 'Pause auto-rotation' : 'Play auto-rotation'}
        >
          {isAutoPlay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>

        <div className="flex items-center gap-1.5">
          {movies.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                idx === activeIndex ? 'w-7 bg-gold' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <span className="text-[11px] font-mono text-cinema-400 ml-1">
          {activeIndex + 1} / {total}
        </span>
      </div>

      {/* 3. Bottom 4-Column Step Highlights (Exact Match to Reference Image #01, #02, #03, #04) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
          {WORKFLOW_STEPS.map((step) => (
            <div key={step.step} className="space-y-1.5 group">
              <span className="text-xs sm:text-sm font-bold text-gold font-sans block tracking-wide">
                {step.step}
              </span>
              <h4 className="font-semibold text-white text-sm sm:text-base tracking-tight font-sans">
                {step.title}
              </h4>
              <p className="text-xs text-cinema-400 leading-relaxed font-sans">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
