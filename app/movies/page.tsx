'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { INITIAL_MOVIES } from '@/lib/data/movies';
import { MovieCard } from '@/components/MovieCard';
import { MovieStatus } from '@/lib/types';
import { Film, Search, ArrowRight, Sparkles } from 'lucide-react';

const STATUS_TABS: Array<'All' | MovieStatus> = [
  'All',
  'Now Showing',
  'Upcoming',
  'Previously Distributed',
];

export default function MoviesPage() {
  const [selectedStatus, setSelectedStatus] = useState<'All' | MovieStatus>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');

  // Extract all unique languages
  const allLanguages = useMemo(() => {
    const set = new Set<string>();
    INITIAL_MOVIES.forEach((m) => m.languages.forEach((l) => set.add(l)));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredMovies = useMemo(() => {
    return INITIAL_MOVIES.filter((movie) => {
      // Status filter
      if (selectedStatus !== 'All' && movie.status !== selectedStatus) {
        return false;
      }
      // Language filter
      if (selectedLanguage !== 'All' && !movie.languages.includes(selectedLanguage)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = movie.title.toLowerCase().includes(q);
        const matchesDirector = movie.director?.toLowerCase().includes(q);
        const matchesCast = movie.cast?.some((c) => c.toLowerCase().includes(q));
        const matchesGenre = movie.genres.some((g) => g.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDirector && !matchesCast && !matchesGenre) {
          return false;
        }
      }
      return true;
    });
  }, [selectedStatus, selectedLanguage, searchQuery]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#08090C]">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 border-b border-white/10 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-gold text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Film className="w-3.5 h-3.5" />
            <span>Theatrical Catalogue &bull; 16 Titles</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Theatrical Slate &amp; Exhibition Rights
          </h1>

          <p className="mt-4 text-cinema-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Curated catalogue of high-demand Indian feature films available for theatrical booking and exhibition across the United Kingdom and continental Europe.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar (Frosted Glass Container) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 sm:p-5 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Top Specular Sheen */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          {/* Status Tabs (Frosted Glass Pills) */}
          <div className="flex flex-wrap items-center gap-2 relative z-10">
            {STATUS_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedStatus(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedStatus === tab
                    ? 'bg-gradient-to-r from-[#DFC087] via-[#D4AF37] to-[#B89230] text-cinema-950 shadow-gold-subtle'
                    : 'bg-white/[0.04] text-cinema-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search & Language Dropdown */}
          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10">
            {/* Language filter */}
            <div className="relative w-full sm:w-auto">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:outline-none cursor-pointer"
                aria-label="Filter by language"
              >
                {allLanguages.map((lang) => (
                  <option key={lang} value={lang} className="bg-[#08090C] text-white">
                    {lang === 'All' ? 'All Languages' : lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Search box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-cinema-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search film, cast, director..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:outline-none placeholder:text-cinema-400 shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* Results Counter & Compliance Note */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4 px-2 text-xs text-cinema-400">
          <div>
            Showing <strong className="text-white">{filteredMovies.length}</strong> theatrical titles
            {selectedStatus !== 'All' && ` in "${selectedStatus}"`}
            {selectedLanguage !== 'All' && ` (${selectedLanguage})`}
          </div>
          <div className="text-[11px] text-cinema-400 font-mono">
            DCI 2K/4K compliant &bull; Encrypted KDM keys delivered per server certificates
          </div>
        </div>

        {/* Movie Cards Grid */}
        {filteredMovies.length === 0 ? (
          <div className="mt-16 text-center py-16 px-4 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl">
            <Film className="w-12 h-12 text-gold mx-auto mb-3 opacity-50" />
            <h3 className="font-sans text-xl font-bold text-white tracking-tight">No Films Found</h3>
            <p className="text-sm text-cinema-400 mt-1 max-w-sm mx-auto">
              No titles match your current search or filter criteria. Try clearing filters or searching for another keyword.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedStatus('All');
                setSelectedLanguage('All');
                setSearchQuery('');
              }}
              className="mt-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#DFC087] to-[#D4AF37] text-cinema-950 font-semibold text-xs shadow-gold-subtle hover:brightness-110 transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}

        {/* Partner CTA Band (Frosted Glass Container) */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Screen These Titles in Your Theatre
            </h3>
            <p className="text-cinema-300 text-sm sm:text-base leading-relaxed">
              Contact our theatrical acquisitions desk to verify territory availability, DCI delivery timelines, and box-office terms for your territory.
            </p>
            <div className="pt-3">
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-cinema-950 bg-gradient-to-r from-[#DFC087] via-[#D4AF37] to-[#B89230] hover:brightness-110 shadow-gold-subtle transition-all"
              >
                <span>Request Booking Terms</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
