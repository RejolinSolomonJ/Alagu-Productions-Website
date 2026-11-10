'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Users, Award, MapPin, Sliders, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const PILLARS = [
  {
    icon: Globe,
    title: 'International Distribution',
    short: 'Pan-European Footprint',
    description:
      'Seamless distribution network reaching key European cinematic circuits across the UK, Germany, France, Netherlands, Nordics, Switzerland, Poland, and Georgia.',
    points: [
      'Simultaneous multi-country theatrical day-and-date premieres',
      'Direct coordination with European cultural censors & local ratings bodies',
      'Optimised logistics for DCP shipment and encrypted KDM delivery',
    ],
  },
  {
    icon: Users,
    title: 'Exhibitor Partnerships',
    short: 'Multiplex & Arthouse Relations',
    description:
      'Direct, transparent relationships with major international multiplex chains and cherished independent single-screen theatres.',
    points: [
      'Fair, performance-aligned theatrical terms & revenue reporting',
      'Flexible programming options: prime weekend shows & targeted cultural runs',
      'Continuous dedicated exhibitor support from trailer release to final show',
    ],
  },
  {
    icon: Award,
    title: 'Industry Experience',
    short: '16+ Projects Track Record*',
    description:
      'Deep specialized knowledge in the overseas theatrical landscape with hands-on execution across more than 16 Indian movie releases.',
    points: [
      'Extensive experience managing high-pressure commercial blockbuster releases',
      'Handling diverse multilingual titles (Tamil, Telugu, Hindi, Malayalam)',
      'Internal audit note: *16+ projects claim subject to company archival confirmation',
    ],
    highlightNote: '*Claim pending formal record confirmation',
  },
  {
    icon: MapPin,
    title: 'Local Market Connections',
    short: 'Grassroots Community Engagement',
    description:
      'Deep engagement with local Indian diaspora associations, student unions, and community leaders across European metropolitan cities.',
    points: [
      'Targeted regional promotional campaigns tailored to local demographics',
      'Celebration-style premiere events driving high opening weekend occupancy',
      'Multi-channel outreach across regional social channels and community groups',
    ],
  },
  {
    icon: Sliders,
    title: 'Professional Coordination',
    short: 'End-to-End Operational Excellence',
    description:
      'Precision management from the studio master to the cinema projector lamp: censorship clearance, KDM generation, and transparent box-office accounting.',
    points: [
      'Rigorous DCI 2K/4K mastering check with Dolby Atmos / 7.1 surround',
      '24/7 technical hotline for projectionists on premiere nights',
      'Timely box-office tracking, audit reports, and settlement procedures',
    ],
  },
];

export function WhyChooseUsGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isSpan = idx === 4;
          return (
            <div
              key={idx}
              className={`rounded-lg bg-cinema-900 border border-white/10 p-6 sm:p-7 hover:border-gold/40 transition-colors duration-200 flex flex-col justify-between ${
                isSpan ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-sans text-xs text-cinema-400 px-2 py-0.5 rounded bg-black/40 border border-white/5">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-[11px] uppercase tracking-wider text-gold font-semibold mb-1">
                  {pillar.short}
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                {pillar.highlightNote && (
                  <span className="inline-block text-[10px] text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded mt-1 font-sans">
                    {pillar.highlightNote}
                  </span>
                )}

                <p className="text-sm text-cinema-300 mt-3 leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs text-cinema-300">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/partner"
                  className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1"
                >
                  <span>Discuss Partnership</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-cinema-400">European Circuits</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
