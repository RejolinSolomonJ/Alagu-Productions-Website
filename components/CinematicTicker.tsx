'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Film, Clapperboard } from 'lucide-react';

export function CinematicTicker() {
  const items = [
    'NOW SCREENING: GOOD BAD UGLY',
    'NOW SCREENING: PEDDI',
    'NOW SCREENING: KARUPPU',
    'UPCOMING THEATRICAL: JAILER 2',
    'UPCOMING THEATRICAL: THUG LIFE',
    'UPCOMING THEATRICAL: THE RAJASAAB',
    'UPCOMING THEATRICAL: PATRIOT',
    'DCI 4K DIGITAL CINEMA MASTERING',
    'DOLBY ATMOS 7.1 AUDIO COMPLIANCE',
    'DIRECT KDM KEY GENERATION',
    'UNITED KINGDOM • GERMANY • FRANCE • BENELUX • NORDICS • GEORGIA',
  ];

  return (
    <div
      className="w-full bg-gradient-to-r from-cinema-950 via-gold-950/40 to-cinema-950 border-y border-gold/25 py-2 overflow-hidden select-none"
      role="marquee"
      aria-label="Current Theatrical Status and Movie Slate"
    >
      <div className="flex items-center gap-8 whitespace-nowrap animate-[shimmer_25s_linear_infinite] hover:[animation-play-state:paused] text-xs font-mono font-bold tracking-widest text-gold-300">
        {[...items, ...items].map((text, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
            <span className="drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">{text}</span>
            <span className="text-cinema-600 ml-4 font-normal">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

