'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Film, PlayCircle, ArrowRight, Play, Pause, ChevronDown } from 'lucide-react';
import { ClapperboardBanner } from '@/components/ClapperboardBanner';
import { HERO_VIDEO_CONFIG } from '@/lib/hero-config';

interface CinematicHeroProps {
  videoSrc?: string;
  posterSrc?: string;
  badgeText?: string;
  headline?: React.ReactNode;
  subtext?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function CinematicHero({
  videoSrc = HERO_VIDEO_CONFIG.videoSrc,
  posterSrc = HERO_VIDEO_CONFIG.posterSrc,
  badgeText = 'Overseas Indian Film Distribution • Partner of MADSOULS PRODUCTION LLC',
  headline,
  subtext = 'Europe’s dedicated distribution partner connecting premier Indian cinema blockbusters to leading multiplexes, independent theatre operators, and diaspora audiences in strategic partnership with MADSOULS PRODUCTION LLC.',
  primaryCtaText = 'Become an Exhibition Partner',
  primaryCtaHref = '/partner',
  secondaryCtaText = 'Explore Theatrical Slate',
  secondaryCtaHref = '/movies',
}: CinematicHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    video.play().catch(() => {});

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const scrollToNext = () => {
    if (containerRef.current) {
      const nextY = containerRef.current.offsetTop + containerRef.current.offsetHeight - 40;
      window.scrollTo({ top: nextY, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="hero-section relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center pt-28 sm:pt-32 pb-20 overflow-hidden bg-[#08090C] transition-colors duration-300"
      aria-label="Hero Section"
    >
      {/* Background Video Layer */}
      <div className="hero-media absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-500">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          className="w-full h-full object-cover object-center"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Modern, Balanced Scrim Layer */}
      <div className="hero-scrim-layer absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-[#08090C]/65 to-[#08090C] pointer-events-none transition-all duration-300" />

      {/* Edge vignette */}
      <div className="hero-vignette-layer absolute inset-0 z-10 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(8,9,12,0.85)_80%,#08090C_100%)] pointer-events-none transition-all duration-300" />

      {/* Ambient Color Orb behind Hero */}
      <div className="hero-ambient-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gold/10 rounded-full blur-[140px] pointer-events-none z-10 transition-colors duration-300" />

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center">
        {/* Subtitle Pill Badge (Frosted Glass) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/15 text-cinema-200 text-xs font-medium tracking-wide mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-wider">{badgeText}</span>
        </div>

        {/* Clean, Majestic Headings */}
        <div className="max-w-4xl mx-auto">
          {headline ? (
            headline
          ) : (
            <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              Bringing the Best of{' '}
              <span className="font-serif italic font-normal text-gold">Indian Cinema</span>{' '}
              to Audiences Worldwide
            </h1>
          )}
        </div>

        {/* Clean, Readable Body Subtext */}
        <p className="mt-5 sm:mt-6 text-cinema-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          {subtext}
        </p>

        {/* Key Metrics / Format Box (Frosted Glass Clapperboard) */}
        <div className="mt-6 sm:mt-8 w-full max-w-3xl">
          <ClapperboardBanner />
        </div>

        {/* Action Buttons (Frosted Glass & Brushed Gold Pills) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            href={primaryCtaHref}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold text-cinema-950 bg-gradient-to-r from-[#DFC087] via-[#D4AF37] to-[#B89230] hover:brightness-110 shadow-gold-subtle active:scale-[0.99] transition-all flex items-center justify-center gap-2 group/cta"
          >
            <Film className="w-4 h-4 text-cinema-950" />
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4 text-cinema-950 transform group-hover/cta:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href={secondaryCtaHref}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-medium text-cinema-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/15 hover:border-gold/40 shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <PlayCircle className="w-4 h-4 text-gold" />
            <span>{secondaryCtaText}</span>
          </Link>
        </div>

        {/* Technical Standard Badges (Frosted Glass Ribbon) */}
        <div className="mt-8 px-6 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-cinema-300 font-mono shadow-sm">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            DCI 2K &amp; 4K Scope
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Dolby Atmos &bull; 7.1 Surround
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cinema-400" />
            Encrypted KDM Dispatch
          </span>
        </div>
      </div>

      {/* Video Pause/Play Control (Frosted Glass) */}
      <button
        type="button"
        onClick={togglePlay}
        className="absolute bottom-6 right-6 z-20 p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.10] backdrop-blur-xl text-cinema-300 hover:text-white border border-white/15 transition-all text-xs flex items-center gap-1.5 shadow-lg"
        aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        <span className="hidden sm:inline text-[11px] font-mono pr-1">
          {isPlaying ? 'Pause Video' : 'Play Video'}
        </span>
      </button>

      {/* Scroll Down Chevron */}
      <button
        type="button"
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-cinema-400 hover:text-white transition-colors p-2"
        aria-label="Scroll down to movies"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
