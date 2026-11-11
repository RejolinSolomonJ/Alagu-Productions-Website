'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '../lib/types';
import { Globe2, Calendar, ArrowRight } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  priority?: boolean;
}

export function MovieCard({ movie }: MovieCardProps) {
  const statusStyles = {
    'Now Showing': 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40 backdrop-blur-md',
    'Upcoming': 'bg-gold/20 text-gold-light border-gold/40 backdrop-blur-md',
    'Previously Distributed': 'bg-black/60 text-cinema-400 border-white/10 backdrop-blur-md',
  };

  const posterSrc = movie.posterUrl || `/posters/${movie.slug}.jpg`;

  return (
    <div className="group relative flex flex-col h-full rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 hover:border-gold/40 transition-all duration-300 overflow-hidden shadow-2xl hover:scale-[1.01]">
      {/* Top Glossy Sheen */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />

      {/* 2:3 Aspect Ratio Poster Presentation */}
      <Link
        href={`/movies/${movie.slug}`}
        className="relative block w-full aspect-[2/3] overflow-hidden bg-[#08090C] focus:outline-none"
        aria-label={`View details for ${movie.title}`}
      >
        <Image
          src={posterSrc}
          alt={movie.title}
          fill
          unoptimized
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Cinematic Scrims */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none" />

        {/* Top Header Strip: Status badge + Year (Frosted Glass Pills) */}
        <div className="absolute top-0 inset-x-0 p-3.5 flex items-center justify-between z-10">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase border shadow-sm ${
              statusStyles[movie.status]
            }`}
          >
            {movie.status}
          </span>

          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-cinema-300 border border-white/15">
            {movie.releaseYear}
          </span>
        </div>

        {/* Hover Reveal Details (Frosted Glass Overlay) */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-20">
          <p className="text-xs text-cinema-200 line-clamp-3 leading-relaxed mb-3 font-normal">
            {movie.synopsis}
          </p>
          <span className="text-xs font-semibold text-gold flex items-center justify-between pt-2 border-t border-white/15">
            <span>View Theatrical Slate</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>

      {/* Info Strip (Frosted Glass Bottom Bar) */}
      <div className="p-4 flex flex-col justify-between flex-grow bg-white/[0.02] backdrop-blur-xl border-t border-white/10">
        <div>
          <div className="flex items-center justify-between text-[11px] text-cinema-400 mb-1.5 font-mono">
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-3 h-3 text-gold" />
              <span className="truncate max-w-[130px]">{movie.territories[0] || 'Europe'}</span>
            </span>
            <span className="text-cinema-400">{movie.genres[0]}</span>
          </div>

          <h3 className="font-serif text-lg font-bold text-white tracking-tight leading-snug group-hover:text-gold-light transition-colors">
            {movie.title}
          </h3>

          {movie.director && (
            <p className="text-xs text-cinema-400 mt-0.5 font-normal">
              Dir. {movie.director}
            </p>
          )}

          <div className="flex flex-wrap gap-1 mt-2.5">
            {movie.languages.slice(0, 3).map((lang) => (
              <span
                key={lang}
                className="px-2 py-0.5 rounded-full bg-white/[0.05] backdrop-blur-sm text-cinema-300 text-[10px] border border-white/10"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
