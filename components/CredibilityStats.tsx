'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Film, Globe, Building2, ShieldCheck, Info } from 'lucide-react';

interface StatItem {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  footnote?: boolean;
}

const STATS: StatItem[] = [
  {
    icon: Film,
    value: 16,
    suffix: '+',
    label: 'Theatrical Projects',
    sublabel: 'European distribution & exhibition track record',
    footnote: true,
  },
  {
    icon: Globe,
    value: 10,
    suffix: '+',
    label: 'European Territories',
    sublabel: 'Active circuits in UK, Germany, France, Nordics & beyond',
  },
  {
    icon: Building2,
    value: 45,
    suffix: '+',
    label: 'Exhibitor Partners',
    sublabel: 'Multiplex chains & independent partner screens',
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: '%',
    label: 'DCI Compliance',
    sublabel: 'Direct 2K/4K KDM key and secure DCP distribution',
  },
];

export function CredibilityStats() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          STATS.forEach((stat, i) => {
            const duration = 1400;
            const steps = 25;
            const stepTime = duration / steps;
            let current = 0;
            const increment = stat.value / steps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
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
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className="w-full relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-lg bg-cinema-900 border border-white/10 hover:border-gold/40 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold">
                  <Icon className="w-4 h-4" />
                </div>
                {stat.footnote && (
                  <span
                    className="inline-flex items-center gap-1 text-[10px] text-cinema-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5 font-sans"
                    title="Claim subject to formal company record reconciliation"
                  >
                    <Info className="w-3 h-3 text-gold" />
                    <span>Audit Pending</span>
                  </span>
                )}
              </div>

              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-baseline gap-0.5 font-sans">
                <span>{counts[idx]}</span>
                <span className="text-gold text-2xl font-semibold">{stat.suffix}</span>
              </div>

              <h3 className="font-semibold text-white text-sm sm:text-base mt-2">
                {stat.label}
                {stat.footnote && <sup className="text-gold ml-0.5">*</sup>}
              </h3>

              <p className="text-xs text-cinema-400 mt-1 leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          );
        })}
      </div>

      {/* Internal CMS / Audit Footnote */}
      <div className="mt-4 text-[11px] text-cinema-500 font-sans flex items-center gap-1.5">
        <span className="text-gold">*</span>
        <span>
          Internal Note: &ldquo;16+ projects&rdquo; claim marked pending final archival record confirmation with company audit before print publishing.
        </span>
      </div>
    </div>
  );
}
