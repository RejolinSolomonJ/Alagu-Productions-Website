'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Film, Globe, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CredibilityStatsProps {
  className?: string;
}

export function CredibilityStats({ className = '' }: CredibilityStatsProps) {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const TARGETS = [16, 10, 45, 100];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          TARGETS.forEach((target, i) => {
            const duration = 1400;
            const steps = 30;
            const stepTime = duration / steps;
            let current = 0;
            const increment = target / steps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[i] = Math.floor(current);
                return next;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className={`w-full relative z-10 ${className}`}>
      {/* 4-Card Bento Grid with Modern Glassmorphism */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
        
        {/* Card 1: Neutral Frosted Glass Obsidian Card */}
        <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between min-h-[320px] shadow-2xl hover:border-gold/40 transition-all duration-300 group overflow-hidden">
          {/* Top Specular Sheen & Ambient Glow */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-36 h-36 bg-gold/5 rounded-full blur-2xl pointer-events-none group-hover:bg-gold/10 transition-all" />

          {/* Top Row: Icon Squircle + Audit Badge */}
          <div className="flex items-center justify-between relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gold group-hover:border-gold/40 group-hover:scale-105 transition-all shadow-sm">
              <Film className="w-5 h-5 text-gold" />
            </div>

            <span
              className="inline-flex items-center gap-1.5 text-[10px] text-gold-light bg-gold/10 px-2.5 py-1 rounded-full border border-gold/25 font-mono font-medium tracking-wide"
              title="Claim subject to formal company record reconciliation"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span>Audit Pending</span>
            </span>
          </div>

          {/* Metric & Description */}
          <div className="relative z-10 mt-6 space-y-1.5">
            <span className="text-[11px] font-semibold text-cinema-400 uppercase tracking-widest block font-sans">
              Theatrical Portfolio
            </span>

            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline font-sans">
              <span>{counts[0]}</span>
              <span className="text-gold text-3xl font-semibold ml-0.5">+</span>
              <sup className="text-gold text-lg ml-0.5 font-normal">*</sup>
            </div>

            <p className="text-xs sm:text-sm text-cinema-300 leading-relaxed pt-1">
              Pan-European theatrical distribution &amp; premier exhibition track record.
            </p>
          </div>
        </div>

        {/* Card 2: THE LUXURY CHAMPAGNE GOLD HIGHLIGHT CARD (With Frosted Glass Sheen) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#E6CA70] via-[#D4AF37] to-[#B38D22] text-[#0A0B0E] p-6 sm:p-7 flex flex-col justify-between min-h-[320px] shadow-[0_15px_40px_rgba(212,175,55,0.3)] border border-[#F5DF9E]/60 transition-all duration-300 group hover:scale-[1.01] overflow-hidden">
          {/* Subtle glossy sheen line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-white/40 pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/25 rounded-full blur-2xl pointer-events-none" />

          {/* Top Row: Dark Squircle Icon + Scope Pill */}
          <div className="flex items-center justify-between relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#0A0B0E]/15 border border-[#0A0B0E]/15 flex items-center justify-center text-[#0A0B0E] group-hover:scale-105 transition-all shadow-sm">
              <Globe className="w-5 h-5 text-[#0A0B0E]" />
            </div>

            <span className="text-[10px] font-bold text-[#0A0B0E] bg-[#0A0B0E]/12 px-2.5 py-1 rounded-full border border-[#0A0B0E]/15 uppercase tracking-wider font-mono">
              Pan-Europe
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 mt-6 space-y-2">
            <span className="text-[11px] font-bold text-[#0A0B0E]/80 uppercase tracking-widest block font-sans">
              Territories Covered
            </span>

            <div className="text-4xl sm:text-5xl font-black text-[#0A0B0E] tracking-tight flex items-baseline font-sans">
              <span>{counts[1]}</span>
              <span className="text-3xl font-extrabold ml-0.5 text-[#0A0B0E]">+</span>
            </div>

            <p className="text-xs sm:text-sm text-[#0A0B0E]/85 font-medium leading-relaxed">
              Active screening circuits in UK, Germany, France, Nordics, Benelux &amp; beyond.
            </p>

            {/* Bottom Typographic Territory Chips */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {['UK', 'Germany', 'France', 'Benelux', '+6 more'].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0A0B0E]/15 text-[#0A0B0E] border border-[#0A0B0E]/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: CINEMA ARCHITECTURE PHOTO CARD WITH FROSTED GLASS BADGE */}
        <div className="relative rounded-3xl overflow-hidden min-h-[320px] border border-white/15 shadow-2xl group hover:border-gold/50 transition-all duration-300 flex flex-col justify-between bg-[#08090C]">
          {/* Cinema Auditorium Photo */}
          <Image
            src="/stats/multiplex-screens.jpg"
            alt="European Multiplex Circuit"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Subtle Top Gradient for Header Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 pointer-events-none" />

          {/* Top Pill on Photo (Frosted Glass) */}
          <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl text-[10px] font-semibold text-white border border-white/20 uppercase tracking-wider font-mono shadow-md">
              <Building2 className="w-3.5 h-3.5 text-gold" />
              <span>Multiplex Circuit</span>
            </span>
          </div>

          {/* Overlapping Floating Frosted Glass Badge Box */}
          <div className="relative z-10 m-4 sm:m-5 p-4 rounded-2xl bg-[#08090C]/80 backdrop-blur-2xl border border-gold/40 shadow-2xl space-y-1 group-hover:border-gold transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline font-sans">
              <span>{counts[2]}</span>
              <span className="text-gold text-2xl font-bold ml-0.5">+</span>
            </div>

            <span className="text-xs font-bold text-white uppercase tracking-wider block font-sans">
              Exhibitor Partners
            </span>

            <p className="text-[11px] text-cinema-300 leading-snug">
              Multiplex chains &amp; independent screens across Europe.
            </p>
          </div>
        </div>

        {/* Card 4: Technical Compliance Frosted Glass Obsidian Card */}
        <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between min-h-[320px] shadow-2xl hover:border-gold/40 transition-all duration-300 group overflow-hidden">
          {/* Top Specular Sheen & Ambient Glow */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-all" />

          {/* Top Row: Icon Squircle + Verified Status */}
          <div className="flex items-center justify-between relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gold group-hover:border-gold/40 group-hover:scale-105 transition-all shadow-sm">
              <ShieldCheck className="w-5 h-5 text-gold" />
            </div>

            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25 font-mono">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Verified DCI</span>
            </span>
          </div>

          {/* Metric & Description */}
          <div className="relative z-10 mt-6 space-y-1.5">
            <span className="text-[11px] font-semibold text-cinema-400 uppercase tracking-widest block font-sans">
              Technical Standards
            </span>

            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline font-sans">
              <span>{counts[3]}</span>
              <span className="text-gold text-3xl font-semibold ml-0.5">%</span>
            </div>

            <p className="text-xs sm:text-sm text-cinema-300 leading-relaxed pt-1">
              Direct 2K/4K KDM key dispatch and tamper-proof DCP distribution.
            </p>
          </div>
        </div>

      </div>

      {/* Internal CMS / Audit Footnote */}
      <div className="mt-4 px-1 text-[11px] text-cinema-400 font-sans flex items-center gap-1.5">
        <span className="text-gold font-bold">*</span>
        <span>
          Internal Note: &ldquo;16+ projects&rdquo; claim marked pending final archival record confirmation with company audit before print publishing.
        </span>
      </div>
    </div>
  );
}
