'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Film, Globe, Building2, ShieldCheck } from 'lucide-react';

interface StatCardData {
  badge: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  footnote?: boolean;
  bgColor: string;
  textColor: string;
  badgeBorder: string;
  image: string;
  imageAlt: string;
  arrowPosition: 'top' | 'bottom';
  href: string;
}

const STAT_CARDS: StatCardData[] = [
  {
    badge: 'Audit Pending',
    value: 16,
    suffix: '+',
    label: 'Theatrical Projects*',
    sublabel: 'European distribution & exhibition track record',
    footnote: true,
    bgColor: 'bg-[#b7ef95]', // Pastel Mint/Lime Green
    textColor: 'text-zinc-950',
    badgeBorder: 'border-zinc-900/20 bg-white/30 text-zinc-900',
    image: '/stats/premiere-crowd.jpg',
    imageAlt: 'Theatrical Premiere Audience',
    arrowPosition: 'top',
    href: '/portfolio',
  },
  {
    badge: 'Pan-European',
    value: 10,
    suffix: '+',
    label: 'European Territories',
    sublabel: 'Active circuits in UK, Germany, France, Nordics & beyond',
    bgColor: 'bg-[#ffa069]', // Warm Coral/Orange
    textColor: 'text-zinc-950',
    badgeBorder: 'border-zinc-900/20 bg-white/30 text-zinc-900',
    image: '/stats/european-theatres.jpg',
    imageAlt: 'European Theatres Marquee',
    arrowPosition: 'bottom',
    href: '/why-choose-us',
  },
  {
    badge: 'Multiplex Network',
    value: 45,
    suffix: '+',
    label: 'Exhibitor Partners',
    sublabel: 'Multiplex chains & independent partner screens',
    bgColor: 'bg-[#b5d3f8]', // Soft Powder Blue
    textColor: 'text-zinc-950',
    badgeBorder: 'border-zinc-900/20 bg-white/30 text-zinc-900',
    image: '/stats/multiplex-screens.jpg',
    imageAlt: 'Multiplex Auditoriums',
    arrowPosition: 'top',
    href: '/partner',
  },
  {
    badge: '100% Certified',
    value: 100,
    suffix: '%',
    label: 'DCI Compliance',
    sublabel: 'Direct 2K/4K KDM key and secure DCP distribution',
    bgColor: 'bg-[#d8c7ff]', // Soft Lilac/Periwinkle
    textColor: 'text-zinc-950',
    badgeBorder: 'border-zinc-900/20 bg-white/30 text-zinc-900',
    image: '/stats/dci-projector.jpg',
    imageAlt: 'DCI 4K Digital Projection',
    arrowPosition: 'bottom',
    href: '/about',
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
          STAT_CARDS.forEach((stat, i) => {
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
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-[32px] sm:rounded-[44px] bg-[#fafafa] text-zinc-900 p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden font-sans border border-white/20 select-none"
    >
      {/* Decorative Abstract Wireframe Curve (matching reference screenshot) */}
      <svg
        className="absolute top-0 right-10 w-[380px] h-[340px] text-lime-400/35 pointer-events-none hidden md:block"
        viewBox="0 0 400 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M320 0C320 180 80 80 180 260C250 380 380 220 380 60"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M260 -40C260 140 140 160 220 320"
          stroke="#fed7aa"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Top Header Section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-12">
        {/* Left Column: Dark circular badge + description */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="w-10 h-10 rounded-full bg-[#1b2b23] text-[#a6e686] flex items-center justify-center mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 fill-current" />
          </div>
          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-sm">
            At Alagu Production, we deliver Indian blockbuster cinema across Europe&apos;s leading theatre circuits, providing certified DCI DCP mastering, server-locked KDM keys, and grassroots diaspora promotional campaigns.
          </p>
        </div>

        {/* Right Column: Giant Display Heading */}
        <div className="lg:col-span-7 lg:text-left">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.08]">
            Scale of European <br className="hidden sm:inline" />
            Exhibition
          </h2>
        </div>
      </div>

      {/* Horizontal Cards Showcase (Matching the Pastel/Pill Cards in Reference) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
        {STAT_CARDS.map((stat, idx) => {
          return (
            <Link
              key={idx}
              href={stat.href}
              className={`${stat.bgColor} ${stat.textColor} rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Asymmetric Inner Layout: Left Stats, Right Rounded Photo Cutout */}
              <div className="flex items-start justify-between gap-3 h-full">
                {/* Left Side: Badge, Big Number, Title, Subtitle, Arrow Button */}
                <div className="flex flex-col justify-between h-full z-10 flex-grow pr-1">
                  {/* Top Element */}
                  {stat.arrowPosition === 'top' ? (
                    <div className="mb-4">
                      <div className="w-10 h-10 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-zinc-950 group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold border ${stat.badgeBorder}`}
                      >
                        {stat.badge}
                      </span>
                    </div>
                  )}

                  {/* Center / Stat Value */}
                  <div className="my-auto py-2">
                    <div className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight font-sans flex items-baseline">
                      <span>{counts[idx]}</span>
                      <span className="text-2xl font-bold ml-0.5">{stat.suffix}</span>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-zinc-950 mt-1 leading-snug">
                      {stat.label}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-zinc-700 mt-1.5 leading-relaxed font-normal">
                      {stat.sublabel}
                    </p>
                  </div>

                  {/* Bottom Element */}
                  {stat.arrowPosition === 'bottom' ? (
                    <div className="mt-4 pt-1">
                      <div className="w-10 h-10 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-zinc-950 group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 pt-1">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold border ${stat.badgeBorder}`}
                      >
                        {stat.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Side: Rounded Photo Cutout (as in reference image) */}
                <div className="w-[100px] sm:w-[110px] md:w-[120px] aspect-[3/4] rounded-2xl overflow-hidden relative flex-shrink-0 shadow-sm border-2 border-white/40 my-auto">
                  <Image
                    src={stat.image}
                    alt={stat.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="120px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Modern Horizontal Progress Slider Bar (matching the bottom of reference screenshot) */}
      <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center space-y-3">
        <div className="w-36 h-1.5 bg-zinc-200 rounded-full overflow-hidden relative">
          <div className="w-14 h-full bg-[#1b2b23] rounded-full transition-all duration-500 hover:w-20" />
        </div>

        {/* Audit Footnote */}
        <p className="text-[11px] text-zinc-500 font-sans text-center max-w-xl">
          *Internal Audit Note: &ldquo;16+ projects&rdquo; claim marked pending final archival record confirmation with company audit before print publishing.
        </p>
      </div>
    </div>
  );
}
