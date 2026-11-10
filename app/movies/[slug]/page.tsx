import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { INITIAL_MOVIES } from '@/lib/data/movies';
import { getMovieBySlug } from '@/lib/store/cms-store';
import {
  Film,
  Globe2,
  ArrowLeft,
  Volume2,
  Layers,
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return INITIAL_MOVIES.map((movie) => ({
    slug: movie.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movie = getMovieBySlug(params.slug) || INITIAL_MOVIES.find((m) => m.slug === params.slug);
  if (!movie) {
    return { title: 'Movie Not Found | Alagu Production' };
  }

  return {
    title: `${movie.title} | Overseas Theatrical Distribution | Alagu Production`,
    description: movie.synopsis,
    openGraph: {
      title: `${movie.title} - Theatrical Release in Europe | Alagu Production`,
      description: movie.synopsis,
      type: 'video.movie',
    },
  };
}

export default function MovieDetailPage({ params }: Props) {
  const movie = getMovieBySlug(params.slug) || INITIAL_MOVIES.find((m) => m.slug === params.slug);

  if (!movie) {
    notFound();
  }

  // Schema.org Movie structured data
  const jsonLdMovie = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: movie.title,
    description: movie.synopsis,
    inLanguage: movie.languages,
    genre: movie.genres,
    datePublished: `${movie.releaseYear}`,
    director: movie.director ? { '@type': 'Person', name: movie.director } : undefined,
    productionCompany: {
      '@type': 'Organization',
      name: 'Alagu Production',
    },
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-cinema-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMovie) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/movies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cinema-400 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Theatrical Slate</span>
          </Link>
        </div>

        {/* Movie Hero Banner Card */}
        <div className="rounded-lg bg-cinema-900 border border-white/10 overflow-hidden shadow-card-clean relative">
          {/* Backdrop gradient glow */}
          <div className={`absolute inset-0 bg-gradient-to-r ${movie.bannerGradient} opacity-20 pointer-events-none`} />

          <div className="relative z-10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Poster Presentation */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <div className="aspect-[2/3] rounded-lg overflow-hidden bg-cinema-950 border border-white/15 relative flex flex-col justify-between p-6 shadow-2xl">
                {movie.posterUrl ? (
                  <>
                    <Image
                      src={movie.posterUrl}
                      alt={movie.title}
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />
                  </>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${movie.bannerGradient}`} />
                )}

                {/* Top strip */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-gold uppercase tracking-widest border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1 backdrop-blur-md px-2 py-0.5 rounded bg-black/60">
                    <Film className="w-3.5 h-3.5" />
                    <span>ALAGU THEATRICAL</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-gold/40 text-white font-bold">
                    {movie.status}
                  </span>
                </div>

                {/* Center Title Display (if no poster image, show prominent fallback) */}
                {!movie.posterUrl && (
                  <div className="relative z-10 my-auto text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mx-auto mb-4">
                      <Film className="w-8 h-8" />
                    </div>
                    <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-wide leading-tight">
                      {movie.title}
                    </h1>
                    {movie.director && (
                      <p className="text-xs uppercase tracking-widest text-cinema-300 mt-2 font-mono">
                        Directed by {movie.director}
                      </p>
                    )}
                  </div>
                )}

                {/* Bottom Notice */}
                <div className="relative z-10 mt-auto pt-4 text-center space-y-1">
                  <div className="text-[10px] text-cinema-200 font-mono tracking-wider bg-black/70 backdrop-blur-md py-1.5 px-3 rounded border border-white/15">
                    Official Theatrical Presentation One-Sheet
                  </div>
                  <div className="text-[10px] text-cinema-400 font-sans">
                    DCI Mastering &amp; KDM Delivery Guaranteed
                  </div>
                </div>
              </div>
            </div>

            {/* Right Theatrical Specs & Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-gold text-cinema-950">
                  {movie.status}
                </span>
                <span className="px-3 py-1 rounded text-xs font-mono font-semibold bg-cinema-800 text-cinema-200 border border-cinema-700">
                  {movie.releaseYear}
                </span>
                {movie.genres.map((g) => (
                  <span
                    key={g}
                    className="px-3 py-1 rounded text-xs font-medium bg-cinema-850 text-cinema-300 border border-cinema-750"
                  >
                    {g}
                  </span>
                ))}
              </div>

              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  {movie.title}
                </h2>
                <p className="text-xs text-gold uppercase tracking-widest mt-1 font-semibold font-mono">
                  {movie.releaseDate || 'European Theatrical Circuit'}
                </p>
              </div>

              {/* Synopsis */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-wider text-cinema-400 font-semibold font-mono">
                  Theatrical Synopsis
                </h3>
                <p className="text-sm sm:text-base text-cinema-200 leading-relaxed font-light">
                  {movie.synopsis}
                </p>
              </div>

              {/* Cast & Crew Info */}
              {(movie.director || (movie.cast && movie.cast.length > 0)) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {movie.director && (
                    <div className="p-3.5 rounded bg-cinema-950 border border-cinema-800">
                      <span className="text-[11px] uppercase tracking-wider text-cinema-400 block font-mono">Director</span>
                      <span className="text-sm font-semibold text-white">{movie.director}</span>
                    </div>
                  )}
                  {movie.cast && movie.cast.length > 0 && (
                    <div className="p-3.5 rounded bg-cinema-950 border border-cinema-800">
                      <span className="text-[11px] uppercase tracking-wider text-cinema-400 block font-mono">Principal Cast</span>
                      <span className="text-sm font-semibold text-white">{movie.cast.join(', ')}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Languages & Territories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded bg-cinema-950 border border-cinema-800">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold font-semibold mb-2 font-mono">
                    <Globe2 className="w-4 h-4" />
                    <span>Languages Available</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {movie.languages.map((l) => (
                      <span
                        key={l}
                        className="px-2.5 py-1 rounded bg-cinema-850 text-cinema-200 text-xs font-medium"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded bg-cinema-950 border border-cinema-800">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold font-semibold mb-2 font-mono">
                    <Layers className="w-4 h-4" />
                    <span>Territories Licensed</span>
                  </div>
                  <p className="text-xs text-cinema-300 leading-relaxed">
                    {movie.territories.join(', ')}
                  </p>
                </div>
              </div>

              {/* DCI & Audio Specs Card */}
              <div className="p-4 rounded bg-cinema-950 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-gold font-semibold text-xs font-mono uppercase">
                  <Volume2 className="w-4 h-4" />
                  <span>DCI Technical Delivery Specifications</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono text-cinema-300">
                  <div className="p-2 rounded bg-cinema-900 border border-white/5">
                    <span className="text-cinema-500 block text-[9px]">FORMAT</span>
                    <span>DCI 4K / 2K Scope</span>
                  </div>
                  <div className="p-2 rounded bg-cinema-900 border border-white/5">
                    <span className="text-cinema-500 block text-[9px]">AUDIO</span>
                    <span>Dolby Atmos &bull; 7.1 / 5.1</span>
                  </div>
                  <div className="p-2 rounded bg-cinema-900 border border-white/5 col-span-2 sm:col-span-1">
                    <span className="text-cinema-500 block text-[9px]">KDM ENCRYPTION</span>
                    <span className="text-emerald-400">Direct Server Lock</span>
                  </div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={`/partner?movie=${encodeURIComponent(movie.title)}`}
                  className="px-6 py-3 rounded text-sm font-semibold text-cinema-950 bg-gold hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
                >
                  <Film className="w-4 h-4" />
                  <span>Enquire About Exhibiting &ldquo;{movie.title}&rdquo;</span>
                </Link>

                <a
                  href={`https://wa.me/995504887972?text=Hello%20Alagu%20Production,%20we%20want%20to%20enquire%20about%20theatrical%20booking%20for%20${encodeURIComponent(movie.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded text-sm font-medium text-cinema-200 hover:text-white bg-cinema-950 hover:bg-white/[0.05] border border-white/10 text-center transition-colors"
                >
                  WhatsApp Booking Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
