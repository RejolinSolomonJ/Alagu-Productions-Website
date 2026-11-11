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
  badgeText = 'Overseas Indian Film Distribution & Theatrical Exhibition',
  headline,
  subtext = 'Europe’s dedicated distribution partner connecting premier Indian cinema blockbusters to leading multiplexes, independent theatre operators, and diaspora audiences.',
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
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center pt-28 sm:pt-32 pb-20 overflow-hidden bg-cinema-950"
      aria-label="Hero Section"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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

      {/* Modern, Balanced Dark Scrim: Deep enough for clean text contrast without muddying video */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/75 via-cinema-950/50 to-cinema-950 pointer-events-none" />

      {/* Subtle edge vignette */}
      <div className="absolute inset-0 z-10 [background:radial-gradient(ellipse_at_center,transparent_45%,rgba(5,6,8,0.7)_85%,#050608_100%)] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center">
        {/* Subtitle Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cinema-900/90 border border-white/10 text-cinema-300 text-xs font-medium tracking-wide mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
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

        {/* Key Metrics / Format Box */}
        <div className="mt-6 sm:mt-8 w-full max-w-2xl">
          <ClapperboardBanner />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            href={primaryCtaHref}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-cinema-950 bg-gradient-to-r from-[#DFC087] via-[#D4AF37] to-[#B89230] hover:brightness-110 shadow-gold-subtle active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <Film className="w-4 h-4 text-cinema-950" />
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4 text-cinema-950" />
          </Link>

          <Link
            href={secondaryCtaHref}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-medium text-cinema-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-gold/30 transition-all flex items-center justify-center gap-2"
          >
            <PlayCircle className="w-4 h-4 text-gold" />
            <span>{secondaryCtaText}</span>
          </Link>
        </div>

        {/* Technical Standard Badges */}
        <div className="mt-8 pt-6 border-t border-cinema-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-cinema-400 font-mono">
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

      {/* Video Pause/Play Control */}
      <button
        type="button"
        onClick={togglePlay}
        className="absolute bottom-6 right-6 z-20 p-2 rounded-md bg-cinema-950/80 hover:bg-cinema-900 text-cinema-400 hover:text-cinema-200 border border-cinema-800 transition-colors text-xs flex items-center gap-1.5"
        aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        <span className="hidden sm:inline text-[11px] font-mono">
          {isPlaying ? 'Pause Video' : 'Play Video'}
        </span>
      </button>

      {/* Scroll Down Chevron */}
      <button
        type="button"
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-cinema-500 hover:text-cinema-300 transition-colors p-2"
        aria-label="Scroll down to movies"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
