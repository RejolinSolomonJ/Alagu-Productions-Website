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
    <div className="relative w-full rounded-lg bg-cinema-900 border border-white/10 p-6 sm:p-8 overflow-hidden shadow-card-clean">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Title & header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold mb-2 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Theatrical Network</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            European Distribution &amp; Exhibition Corridors
          </h3>
          <p className="text-sm text-cinema-400 mt-1 max-w-xl">
            Direct coordination with European multiplex chains and cultural exhibition centers, enabling simultaneous multi-territory theatrical premieres.
          </p>
        </div>

        <div className="flex items-center gap-2.5 text-xs text-cinema-300 bg-cinema-950 px-3.5 py-2 rounded border border-white/10">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <span>Synchronized Multi-City DCI Delivery</span>
        </div>
      </div>

      {/* Stylized Vector Map Canvas */}
      <div className="relative w-full aspect-[16/9] min-h-[340px] max-h-[500px] rounded bg-cinema-950 border border-white/10 p-4 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#101522_1px,transparent_1px),linear-gradient(to_bottom,#101522_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

        {/* SVG connection lines between London and other hubs */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C89D3C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C89D3C" stopOpacity="0.1" />
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
              className="opacity-40"
            />
          ))}
        </svg>

        {/* Hub points */}
        {HUBS.map((hub) => (
          <div
            key={hub.name}
            style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
          >
            <div className="relative flex items-center justify-center">
              <span
                className={`w-3 h-3 rounded-full ${
                  hub.highlight ? 'bg-gold animate-pulse' : 'bg-cinema-400'
                } border-2 border-cinema-950 shadow-md`}
              />
              {hub.highlight && (
                <span className="absolute -inset-1 rounded-full bg-gold/30 animate-ping" />
              )}
            </div>

            {/* Tooltip / Label */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              <span className="text-[10px] font-mono bg-cinema-900/90 text-white px-1.5 py-0.5 rounded border border-white/10 shadow">
                {hub.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
