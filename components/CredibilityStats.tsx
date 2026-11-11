'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Film, Globe, Building2, ShieldCheck, Info } from 'lucide-react';

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
            const duration = 1500;
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
      {/* 4-Box Modern Bento Layout Matching User Reference Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
        
        {/* Box 1: Theatrical Projects (Obsidian Glass Bento Card) */}
        <div className="relative rounded-[28px] bg-[#0e101a]/85 backdrop-blur-xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between min-h-[310px] shadow-xl hover:-translate-y-1 hover:border-gold/40 transition-all duration-300 group overflow-hidden">
          {/* Subtle Ambient Top Glow */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none group-hover:bg-gold/20 transition-all" />

          {/* Top Row: Icon + Audit Badge */}
          <div className="flex items-center justify-between relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gold group-hover:scale-105 group-hover:border-gold/30 transition-all shadow-sm">
              <Film className="w-5 h-5" />
            </div>

            <span
              className="inline-flex items-center gap-1 text-[10px] text-gold-light bg-gold/15 px-2.5 py-1 rounded-full border border-gold/30 font-mono font-medium shadow-sm"
              title="Claim subject to formal company record reconciliation"
            >
              <Info className="w-3 h-3 text-gold" />
              <span>Audit Pending</span>
            </span>
          </div>

          {/* Middle & Bottom Content */}
          <div className="relative z-10 mt-6 space-y-2">
            <span className="text-[11px] font-semibold text-cinema-400 uppercase tracking-widest block font-sans">
              Theatrical Portfolio
            </span>

            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline font-sans">
              <span>{counts[0]}</span>
              <span className="text-gold text-3xl font-semibold ml-0.5">+</span>
              <sup className="text-gold text-lg ml-0.5">*</sup>
            </div>

            <p className="text-xs sm:text-sm text-cinema-300 leading-relaxed pt-1">
              Pan-European theatrical distribution &amp; premiere exhibition track record.
            </p>
          </div>
        </div>

        {/* Box 2: European Territories (Vibrant Signature Gold Accent Card) */}
        <div className="relative rounded-[28px] bg-gradient-to-br from-[#D4AF37] via-[#C89D3C] to-[#AA7E24] p-6 sm:p-7 flex flex-col justify-between min-h-[310px] shadow-[0_15px_35px_rgba(200,157,60,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(200,157,60,0.45)] transition-all duration-300 group overflow-hidden">
          {/* Top Subtle Specular Sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/20 pointer-events-none" />

          {/* Top Icon Badge */}
          <div className="flex items-center justify-between relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-cinema-950/20 border border-cinema-950/20 flex items-center justify-center text-cinema-950 group-hover:scale-105 transition-all shadow-sm">
              <Globe className="w-5 h-5 text-cinema-950" />
            </div>

            <span className="text-[10px] font-bold text-cinema-950/80 bg-cinema-950/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
              Pan-Europe
            </span>
          </div>

          {/* Middle & Bottom Content */}
          <div className="relative z-10 mt-5 space-y-2">
            <span className="text-[11px] font-bold text-cinema-950/80 uppercase tracking-widest block font-sans">
              Territories Covered
            </span>

            <div className="text-4xl sm:text-5xl font-black text-cinema-950 tracking-tight font-sans">
              <span>{counts[1]}</span>
              <span className="text-3xl font-bold ml-0.5">+</span>
            </div>

            <p className="text-xs sm:text-sm text-cinema-950/90 font-medium leading-relaxed">
              Active screening circuits in UK, Germany, France, Nordics, Benelux &amp; Georgia.
            </p>

            {/* Circuit Country Avatar Badges matching user reference */}
            <div className="pt-2 flex items-center -space-x-2">
              <span
                className="w-7 h-7 rounded-full bg-cinema-950 text-white text-[10px] font-bold flex items-center justify-center border-2 border-amber-300 shadow-sm"
                title="United Kingdom"
              >
                🇬🇧
              </span>
              <span
                className="w-7 h-7 rounded-full bg-cinema-950 text-white text-[10px] font-bold flex items-center justify-center border-2 border-amber-300 shadow-sm"
                title="Germany"
              >
                🇩🇪
              </span>
              <span
                className="w-7 h-7 rounded-full bg-cinema-950 text-white text-[10px] font-bold flex items-center justify-center border-2 border-amber-300 shadow-sm"
                title="France"
              >
                🇫🇷
              </span>
              <span
                className="w-7 h-7 rounded-full bg-cinema-950 text-white text-[10px] font-bold flex items-center justify-center border-2 border-amber-300 shadow-sm"
                title="Netherlands"
              >
                🇳🇱
              </span>
              <span className="h-7 px-2 rounded-full bg-cinema-950 text-gold-light text-[10px] font-bold flex items-center justify-center border-2 border-amber-300 shadow-sm">
                +6 more
              </span>
            </div>
          </div>
        </div>

        {/* Box 3: Exhibitor Partners (Photo Card with Overlapping Floating Badge) */}
        <div className="relative rounded-[28px] overflow-hidden min-h-[310px] border border-white/15 shadow-xl group hover:-translate-y-1 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between">
          {/* Full-Bleed Modern Cinema Architecture Image */}
          <Image
            src="/stats/multiplex-screens.jpg"
            alt="European Multiplex Circuit"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30 pointer-events-none" />

          {/* Top Pill on Image */}
          <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white border border-white/20 uppercase tracking-wider font-mono">
              <Building2 className="w-3.5 h-3.5 text-gold" />
              <span>Multiplex Network</span>
            </span>
          </div>

          {/* Overlapping Floating Stat Badge Card (matching the blue box in user screenshot) */}
          <div className="relative z-10 m-4 sm:m-5 p-4 rounded-2xl bg-[#090b14]/90 backdrop-blur-xl border border-gold/40 shadow-2xl space-y-1 group-hover:border-gold transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline font-sans">
              <span>{counts[2]}</span>
              <span className="text-gold text-2xl font-bold ml-0.5">+</span>
            </div>

            <span className="text-xs font-bold text-gold-light uppercase tracking-wider block font-sans">
              Exhibitor Partners
            </span>

            <p className="text-[11px] text-cinema-300 leading-snug">
              Multiplex circuits &amp; independent screens.
            </p>
          </div>
        </div>

        {/* Box 4: DCI Compliance (Obsidian Glass Bento Card) */}
        <div className="relative rounded-[28px] bg-[#0e101a]/85 backdrop-blur-xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between min-h-[310px] shadow-xl hover:-translate-y-1 hover:border-gold/40 transition-all duration-300 group overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

          {/* Top Icon Badge */}
          <div className="flex items-center justify-between relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-400/30 transition-all shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/30 font-mono">
              Verified DCI
            </span>
          </div>

          {/* Middle & Bottom Content */}
          <div className="relative z-10 mt-6 space-y-2">
            <span className="text-[11px] font-semibold text-cinema-400 uppercase tracking-widest block font-sans">
              Technical Standards
            </span>

            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline font-sans">
              <span>{counts[3]}</span>
              <span className="text-emerald-400 text-3xl font-bold ml-0.5">%</span>
            </div>

            <p className="text-xs sm:text-sm text-cinema-300 leading-relaxed pt-1">
              Direct 2K/4K KDM key dispatch and tamper-proof DCP distribution.
            </p>
          </div>
        </div>

      </div>

      {/* Internal CMS / Audit Footnote */}
      <div className="mt-4 px-2 text-[11px] text-cinema-400 font-sans flex items-center gap-1.5">
        <span className="text-gold font-bold">*</span>
        <span>
          Internal Note: &ldquo;16+ projects&rdquo; claim marked pending final archival record confirmation with company audit before print publishing.
        </span>
      </div>
    </div>
  );
}
