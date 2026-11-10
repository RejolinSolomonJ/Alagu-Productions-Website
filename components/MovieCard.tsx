'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '../lib/types';
import { Globe2, Calendar } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  priority?: boolean;
}

export function MovieCard({ movie }: MovieCardProps) {
  const statusStyles = {
    'Now Showing': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'Upcoming': 'bg-gold/10 text-gold-light border-gold/20',
    'Previously Distributed': 'bg-cinema-800 text-cinema-400 border-cinema-700',
  };

  return (
    <div className="group relative flex flex-col h-full rounded-lg bg-cinema-900 border border-cinema-800 hover:border-cinema-700 transition-all duration-200 overflow-hidden shadow-card-clean">
      {/* 2:3 Aspect Ratio Card */}
      <Link
        href={`/movies/${movie.slug}`}
        className="relative block w-full aspect-[2/3] overflow-hidden bg-cinema-950 focus:outline-none"
        aria-label={`View details for ${movie.title}`}
      >
        {movie.posterUrl ? (
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${movie.bannerGradient} transition-transform duration-500 group-hover:scale-102`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none" />

        {/* Top Header Strip: Status badge + Year */}
        <div className="absolute top-0 inset-x-0 p-3 flex items-center justify-between z-10">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide border ${
              statusStyles[movie.status]
            }`}
          >
            {movie.status}
          </span>

          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/60 text-cinema-400 border border-white/5">
            {movie.releaseYear}
          </span>
        </div>

        {/* Center Title */}
        <div className="relative h-full flex flex-col justify-center items-center text-center p-4 z-10">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-gold-light transition-colors">
            {movie.title}
          </h3>

          {movie.director && (
            <p className="text-[11px] text-cinema-400 mt-1 font-normal">
              Dir. {movie.director}
            </p>
          )}

          <div className="flex flex-wrap gap-1 justify-center mt-3">
            {movie.languages.slice(0, 3).map((lang) => (
              <span
                key={lang}
                className="px-1.5 py-0.5 rounded bg-black/60 text-cinema-300 text-[10px] border border-white/5"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Subtle Hover Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 z-20">
          <p className="text-xs text-cinema-300 line-clamp-3 leading-relaxed mb-3">
            {movie.synopsis}
          </p>
          <span className="text-xs font-medium text-gold flex items-center justify-between">
            <span>View Theatrical Slate</span>
            <span>&rarr;</span>
          </span>
        </div>
      </Link>

      {/* Info Strip */}
      <div className="p-3.5 flex flex-col justify-between flex-grow bg-cinema-900 border-t border-cinema-800/80">
        <div>
          <div className="flex items-center justify-between text-[11px] text-cinema-400 mb-1">
            <span className="flex items-center gap-1">
              <Globe2 className="w-3 h-3 text-gold" />
              <span className="truncate max-w-[130px]">{movie.territories[0] || 'Europe'}</span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-cinema-500" />
              <span>{movie.releaseYear}</span>
            </span>
          </div>

          <Link
            href={`/movies/${movie.slug}`}
            className="font-serif font-bold text-white text-base hover:text-gold transition-colors line-clamp-1"
          >
            {movie.title}
          </Link>
        </div>

        <div className="mt-3 pt-2.5 border-t border-cinema-800 flex items-center justify-between text-xs">
          <Link
            href={`/partner?movie=${encodeURIComponent(movie.title)}`}
            className="text-gold hover:text-gold-light font-medium"
          >
            Enquire
          </Link>
          <Link
            href={`/movies/${movie.slug}`}
            className="text-cinema-400 hover:text-cinema-200 text-[11px]"
          >
            Specs &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
