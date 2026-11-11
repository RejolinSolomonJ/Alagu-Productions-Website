'use client';

import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';

interface CityHub {
  name: string;
  country: string;
  x: number;
  y: number;
  highlight?: boolean;
}

const HUBS: CityHub[] = [
  { name: 'London', country: 'United Kingdom', x: 28, y: 44, highlight: true },
  { name: 'Paris', country: 'France', x: 34, y: 55, highlight: true },
  { name: 'Frankfurt', country: 'Germany', x: 48, y: 48, highlight: true },
  { name: 'Berlin', country: 'Germany', x: 55, y: 38, highlight: true },
  { name: 'Amsterdam', country: 'Netherlands', x: 40, y: 41, highlight: true },
  { name: 'Zurich', country: 'Switzerland', x: 47, y: 62 },
  { name: 'Dublin', country: 'Ireland', x: 19, y: 39 },
  { name: 'Warsaw', country: 'Poland', x: 68, y: 39 },
  { name: 'Stockholm', country: 'Sweden', x: 62, y: 22 },
  { name: 'Oslo', country: 'Norway', x: 50, y: 20 },
  { name: 'Rome', country: 'Italy', x: 53, y: 76 },
  { name: 'Tbilisi', country: 'Georgia', x: 88, y: 65, highlight: true },
];

export function EuropeanMapVisual() {
  return (
    <div className="relative w-full rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 sm:p-10 overflow-hidden shadow-2xl group hover:border-gold/30 transition-all duration-300">
      {/* Top Glossy Sheen Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title & header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold font-semibold mb-2 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Theatrical Network</span>
          </div>
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            European Distribution &amp; Exhibition Corridors
          </h3>
          <p className="text-sm text-cinema-300 mt-1 max-w-xl leading-relaxed">
            Direct coordination with European multiplex chains and cultural exhibition centers, enabling simultaneous multi-territory theatrical premieres.
          </p>
        </div>

        <div className="flex items-center gap-2.5 text-xs text-cinema-300 bg-white/[0.04] backdrop-blur-md px-4 py-2 rounded-full border border-white/10 font-mono shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>Synchronized Multi-City DCI Delivery</span>
        </div>
      </div>

      {/* Stylized Vector Map Canvas (Frosted Glass Container) */}
      <div className="relative w-full aspect-[16/9] min-h-[340px] max-h-[500px] rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-4 overflow-hidden shadow-inner">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

        {/* SVG connection lines between London and other hubs */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFC087" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {HUBS.filter((h) => h.name !== 'London').map((hub, i) => (
            <line
              key={i}
              x1={`${HUBS[0].x}%`}
              y1={`${HUBS[0].y}%`}
              x2={`${hub.x}%`}
              y2={`${hub.y}%`}
              stroke="url(#beamGrad)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-45"
            />
          ))}
        </svg>

        {/* City Nodes (Frosted Glass Pills) */}
        {HUBS.map((hub) => (
          <div
            key={hub.name}
            style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/node cursor-pointer z-10"
          >
            <div className="relative flex items-center justify-center">
              {hub.highlight && (
                <span className="absolute w-6 h-6 rounded-full bg-gold/30 animate-ping pointer-events-none" />
              )}
              <div
                className={`w-3.5 h-3.5 rounded-full border-2 transition-transform duration-200 group-hover/node:scale-125 ${
                  hub.highlight
                    ? 'bg-gold border-white shadow-[0_0_12px_rgba(212,175,55,0.7)]'
                    : 'bg-cinema-400 border-black/50'
                }`}
              />
            </div>

            <div className="mt-1 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-sans text-cinema-200 whitespace-nowrap shadow-sm group-hover/node:border-gold/50 group-hover/node:text-white transition-colors">
              {hub.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
