'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { INITIAL_PROJECTS } from '@/lib/data/projects';
import { INITIAL_TESTIMONIALS } from '@/lib/data/testimonials';
import { TestimonialsSlider } from '@/components/TestimonialsSlider';
import {
  Building2,
  Calendar,
  MapPin,
  Film,
  ArrowRight,
  Info,
  Sparkles,
} from 'lucide-react';

export default function PortfolioPage() {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedFilm, setSelectedFilm] = useState('All');

  // Extract unique filters
  const countries = useMemo(() => {
    return ['All', ...Array.from(new Set(INITIAL_PROJECTS.map((p) => p.country)))];
  }, []);

  const cities = useMemo(() => {
    return ['All', ...Array.from(new Set(INITIAL_PROJECTS.map((p) => p.city)))];
  }, []);

  const years = useMemo(() => {
    return ['All', ...Array.from(new Set(INITIAL_PROJECTS.map((p) => String(p.year))))];
  }, []);

  const films = useMemo(() => {
    return ['All', ...Array.from(new Set(INITIAL_PROJECTS.map((p) => p.filmTitle)))];
  }, []);

  const filteredProjects = useMemo(() => {
    return INITIAL_PROJECTS.filter((p) => {
      if (selectedCountry !== 'All' && p.country !== selectedCountry) return false;
      if (selectedCity !== 'All' && p.city !== selectedCity) return false;
      if (selectedYear !== 'All' && String(p.year) !== selectedYear) return false;
      if (selectedFilm !== 'All' && p.filmTitle !== selectedFilm) return false;
      return true;
    });
  }, [selectedCountry, selectedCity, selectedYear, selectedFilm]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#08090C]">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 border-b border-white/10 overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-gold text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>Theatrical Footprint</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Our Successful Distribution &amp; Exhibition Projects
          </h1>

          <p className="mt-4 text-cinema-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A verified record of theatrical screening circuits and European premiere engagements executed by Alagu Production.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Filter Controls Bar (Frosted Glass Container) */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Top Specular Sheen */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {/* Country */}
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-cinema-300 font-semibold mb-1.5">
                Country
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none transition-all cursor-pointer"
              >
                {countries.map((c) => (
                  <option key={c} value={c} className="bg-[#08090C] text-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-cinema-300 font-semibold mb-1.5">
                City / Region
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none transition-all cursor-pointer"
              >
                {cities.map((city) => (
                  <option key={city} value={city} className="bg-[#08090C] text-white">
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Film */}
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-cinema-300 font-semibold mb-1.5">
                Film Project
              </label>
              <select
                value={selectedFilm}
                onChange={(e) => setSelectedFilm(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none transition-all cursor-pointer"
              >
                {films.map((f) => (
                  <option key={f} value={f} className="bg-[#08090C] text-white">
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-cinema-300 font-semibold mb-1.5">
                Release Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none transition-all cursor-pointer"
              >
                {years.map((y) => (
                  <option key={y} value={y} className="bg-[#08090C] text-white">
                    {y === 'All' ? 'All Years' : y}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter & Compliance Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4 px-2 text-xs text-cinema-400">
          <div>
            Showing <strong className="text-white">{filteredProjects.length}</strong> exhibition projects
          </div>
          <div className="text-[11px] text-cinema-400 flex items-center gap-1.5 font-mono">
            <Info className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span>
              Exhibition milestones represent verified company bookings; unconfirmed details are expressly marked.
            </span>
          </div>
        </div>

        {/* Projects Grid (Frosted Glass Cards) */}
        {filteredProjects.length === 0 ? (
          <div className="mt-16 text-center py-16 px-4 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl">
            <Building2 className="w-12 h-12 text-gold mx-auto mb-3 opacity-50" />
            <h3 className="font-serif text-xl font-bold text-white">No Projects Found</h3>
            <p className="text-sm text-cinema-400 mt-1 max-w-sm mx-auto">
              No exhibition records match your chosen filter combination.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCountry('All');
                setSelectedCity('All');
                setSelectedYear('All');
                setSelectedFilm('All');
              }}
              className="mt-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#DFC087] to-[#D4AF37] text-cinema-950 font-semibold text-xs shadow-gold-subtle hover:brightness-110 transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="relative rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 hover:border-gold/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl group"
              >
                {/* Top Specular Sheen */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <div className="p-7 sm:p-8">
                  {/* Top metadata */}
                  <div className="flex items-center justify-between text-xs text-cinema-400 mb-4 font-mono">
                    <span className="flex items-center gap-1.5 font-medium text-gold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.city}, {project.country}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-cinema-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{project.year}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-gold-light transition-colors">
                    {project.filmTitle} &ndash; {project.city}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 text-xs text-cinema-300 font-medium mb-4">
                    <Film className="w-3.5 h-3.5 text-gold" />
                    <span>Venue: {project.venue}</span>
                  </div>

                  {project.approvedHighlights && (
                    <div className="mt-4 border-t border-white/10 pt-4">
                      <p className="text-xs text-cinema-300 leading-relaxed">
                        {project.approvedHighlights}
                      </p>
                    </div>
                  )}

                  {!project.detailsConfirmed && (
                    <p className="mt-3 text-xs text-cinema-400 italic">
                      Project details to be confirmed with company audit records.
                    </p>
                  )}
                </div>

                <div className="px-7 py-4 bg-white/[0.02] backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs">
                  <Link
                    href={`/partner?movie=${encodeURIComponent(project.filmTitle)}`}
                    className="text-gold hover:text-gold-light font-semibold inline-flex items-center gap-1 group/btn"
                  >
                    <span>Request Circuit Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-mono text-cinema-400">DCI Scope 4K</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Slider */}
        <section className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Exhibitor Feedback</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              Cinema Operator Experiences
            </h2>
          </div>

          <TestimonialsSlider testimonials={INITIAL_TESTIMONIALS} />
        </section>
      </div>
    </div>
  );
}
