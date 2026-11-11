'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/Logo';
import { Movie, ExhibitionProject, PartnerEnquiry, Testimonial, SiteSettings } from '@/lib/types';
import {
  Lock,
  Film,
  Building2,
  MessageSquare,
  Quote,
  Settings,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Check,
  Download,
  BookOpen,
  LogOut,
  Sparkles,
  Phone,
  Mail,
  ShieldAlert,
  AlertCircle,
  ExternalLink,
  MapPin,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [userRole, setUserRole] = useState<'Admin' | 'Editor'>('Admin');
  const [authError, setAuthError] = useState('');

  // Active tab in admin
  const [activeTab, setActiveTab] = useState<'enquiries' | 'movies' | 'projects' | 'testimonials'>('enquiries');

  // Data states
  const [enquiries, setEnquiries] = useState<PartnerEnquiry[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [projects, setProjects] = useState<ExhibitionProject[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);

  // New movie modal state
  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false);
  const [newMovieTitle, setNewMovieTitle] = useState('');
  const [newMovieStatus, setNewMovieStatus] = useState<'Now Showing' | 'Upcoming' | 'Previously Distributed'>('Upcoming');
  const [newMovieLanguages, setNewMovieLanguages] = useState('Tamil, Telugu');
  const [newMovieSynopsis, setNewMovieSynopsis] = useState('');

  // Simple PIN authentication for local CMS security
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinCode === 'alagu2025' || pinCode === 'admin') {
      setIsAuthenticated(true);
      setUserRole(pinCode === 'alagu2025' ? 'Admin' : 'Editor');
      setAuthError('');
      loadData();
    } else {
      setAuthError('Invalid Security Access PIN. Use default pin "alagu2025" or "admin".');
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [resEnq, resMov, resProj, resTest] = await Promise.all([
        fetch('/api/admin/enquiries').then((r) => r.json()),
        fetch('/api/admin/movies').then((r) => r.json()),
        fetch('/api/admin/projects').then((r) => r.json()),
        fetch('/api/admin/testimonials').then((r) => r.json()),
      ]);

      if (resEnq.enquiries) setEnquiries(resEnq.enquiries);
      if (resMov.movies) setMovies(resMov.movies);
      if (resProj.projects) setProjects(resProj.projects);
      if (resTest.testimonials) setTestimonials(resTest.testimonials);
    } catch (err) {
      console.error('Failed to load CMS data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateEnquiryStatus = async (id: string, status: PartnerEnquiry['status']) => {
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status } : e))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleTestimonial = async (id: string, isApproved: boolean) => {
    try {
      const res = await fetch('/api/admin/testimonials', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, isApproved }),
      });
      if (res.ok) {
        setTestimonials((prev) =>
          prev.map((t) => (t.id === id ? { ...t, isApproved } : t))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleMoviePublish = async (movie: Movie) => {
    try {
      const updated = { ...movie, published: !movie.published };
      const res = await fetch('/api/admin/movies', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
      if (res.ok) {
        setMovies((prev) =>
          prev.map((m) => (m.id === movie.id ? updated : m))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteMovie = async (id: string) => {
    if (!confirm('Are you sure you want to remove this movie from the website?')) return;
    try {
      const res = await fetch('/api/admin/movies', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setMovies((prev) => prev.filter((m) => m.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateMovie = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMovieTitle.trim()) return;

    try {
      const res = await fetch('/api/admin/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newMovieTitle,
          status: newMovieStatus,
          languages: newMovieLanguages.split(',').map((l) => l.trim()),
          synopsis: newMovieSynopsis,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setMovies((prev) => [data.movie, ...prev]);
        setIsAddMovieModalOpen(false);
        setNewMovieTitle('');
        setNewMovieSynopsis('');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const exportEnquiriesCSV = () => {
    const headers = ['ID', 'Date', 'Country', 'City', 'Cinema', 'Contact', 'Phone', 'Email', 'Film', 'Status', 'Message'];
    const rows = enquiries.map((e) => [
      e.id,
      e.createdAt,
      `"${e.country}"`,
      `"${e.city}"`,
      `"${e.cinemaName}"`,
      `"${e.contactName}"`,
      `"${e.phoneCountryCode} ${e.phoneNumber}"`,
      `"${e.email}"`,
      `"${e.selectedFilm || ''}"`,
      e.status,
      `"${(e.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `alagu_exhibition_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center px-4 bg-cinema-950">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-cinema-900 border border-cinema-750 shadow-2xl space-y-6 text-center">
          <div className="flex justify-center mb-2">
            <Image
              src="/logo.png"
              alt="Alagu Production"
              width={80}
              height={80}
              priority
              className="w-20 h-auto object-contain filter drop-shadow-[0_2px_14px_rgba(212,175,55,0.4)]"
            />
          </div>

          <div className="space-y-1.5">
            <h1 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              CMS Admin Portal
            </h1>
            <p className="text-xs text-cinema-400">
              Alagu Production &bull; Secure Theatrical Operations Desk
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs uppercase tracking-wider text-cinema-300 font-semibold mb-2">
                Staff Access PIN / Password
              </label>
              <input
                type="password"
                placeholder="Enter access PIN"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-cinema-800 border border-cinema-700 text-white text-sm focus:border-gold focus:outline-none placeholder:text-cinema-500"
              />
              <div className="mt-2 p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] text-cinema-400 flex items-center justify-between font-mono">
                <span>Default PIN:</span>
                <span className="text-gold font-bold">alagu2025 (Admin)</span>
              </div>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl font-bold text-cinema-950 bg-gradient-to-r from-gold via-amber-300 to-gold-400 hover:from-gold-300 hover:to-amber-400 transition-all shadow-gold-sm"
            >
              Sign In to Management Desk
            </button>
          </form>

          <div className="pt-2 border-t border-cinema-800">
            <Link href="/" className="text-xs text-cinema-400 hover:text-gold transition-colors inline-flex items-center gap-1">
              &larr; Return to Public Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-cinema-950 text-cinema-100">
      {/* Top Admin Bar */}
      <header className="border-b border-cinema-800 bg-cinema-900/90 sticky top-16 z-30 px-4 sm:px-8 py-3.5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30">
              Role: {userRole}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/guide"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cinema-800 hover:bg-cinema-700 text-cinema-200 border border-cinema-700 flex items-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-gold" />
              <span>Handover Guide</span>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cinema-800 hover:bg-cinema-700 text-cinema-200 border border-cinema-700 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Live Site</span>
            </Link>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-rose-300 hover:bg-rose-950/40 border border-rose-800/40 flex items-center gap-1 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-cinema-800 pb-4">
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'enquiries'
                ? 'bg-gold text-cinema-950 shadow-gold-sm font-bold'
                : 'bg-cinema-850 text-cinema-300 hover:text-white hover:bg-cinema-800'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Exhibitor Enquiries</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-cinema-950 text-gold font-mono font-bold">
              {enquiries.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('movies')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'movies'
                ? 'bg-gold text-cinema-950 shadow-gold-sm font-bold'
                : 'bg-cinema-850 text-cinema-300 hover:text-white hover:bg-cinema-800'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Movies &amp; Slate</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-cinema-950 text-gold font-mono font-bold">
              {movies.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'projects'
                ? 'bg-gold text-cinema-950 shadow-gold-sm font-bold'
                : 'bg-cinema-850 text-cinema-300 hover:text-white hover:bg-cinema-800'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Portfolio Projects</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'testimonials'
                ? 'bg-gold text-cinema-950 shadow-gold-sm font-bold'
                : 'bg-cinema-850 text-cinema-300 hover:text-white hover:bg-cinema-800'
            }`}
          >
            <Quote className="w-4 h-4" />
            <span>Testimonial Approvals</span>
          </button>
        </div>

        {/* =========================================================================
            TAB 1: ENQUIRIES INBOX
           ========================================================================= */}
        {activeTab === 'enquiries' && (
          <div className="mt-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-sans text-2xl font-extrabold text-white tracking-tight">
                  Exhibition &amp; Theatrical Booking Enquiries
                </h2>
                <p className="text-xs text-cinema-400 mt-1">
                  Submissions received from European cinema owners and theatre operators.
                </p>
              </div>

              <button
                type="button"
                onClick={exportEnquiriesCSV}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-cinema-850 hover:bg-cinema-800 text-gold border border-gold/30 flex items-center gap-2 shadow-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export as CSV</span>
              </button>
            </div>

            <div className="space-y-4">
              {enquiries.length === 0 ? (
                <div className="p-12 text-center rounded-2xl bg-cinema-900 border border-cinema-800 text-cinema-400">
                  No enquiries logged yet.
                </div>
              ) : (
                enquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-6 rounded-2xl bg-cinema-900 border border-cinema-750 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-gold/30 transition-colors shadow-lg"
                  >
                    <div className="space-y-2.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-sans font-bold text-lg text-white">
                          {enq.cinemaName}
                        </span>
                        <span className="text-xs text-gold font-medium bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/20">
                          {enq.city}, {enq.country}
                        </span>
                        <span className="font-mono text-[10px] text-cinema-400 ml-auto sm:ml-0">
                          {new Date(enq.createdAt).toLocaleDateString()} at{' '}
                          {new Date(enq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      <div className="text-xs text-cinema-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 py-1">
                        <div><strong className="text-white">Contact:</strong> {enq.contactName}</div>
                        <div><strong className="text-white">Email:</strong> {enq.email}</div>
                        <div><strong className="text-white">Phone:</strong> {enq.phoneCountryCode} {enq.phoneNumber}</div>
                        <div><strong className="text-white">Film:</strong> {enq.selectedFilm || 'Full Upcoming Slate'}</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-cinema-950 border border-cinema-800 text-xs text-cinema-200 leading-relaxed font-light">
                        &ldquo;{enq.message}&rdquo;
                      </div>
                    </div>

                    {/* Actions & Status Dropdown */}
                    <div className="flex flex-col gap-2 min-w-[180px] lg:border-l lg:border-cinema-800 lg:pl-6">
                      <label className="text-[10px] uppercase font-semibold text-cinema-400">
                        Status Flow:
                      </label>
                      <select
                        value={enq.status}
                        onChange={(e) => handleUpdateEnquiryStatus(enq.id, e.target.value as any)}
                        className="px-3 py-2 rounded-xl bg-cinema-800 border border-cinema-700 text-xs text-white focus:border-gold focus:outline-none"
                      >
                        <option value="New">New</option>
                        <option value="In Discussion">In Discussion</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Archived">Archived</option>
                      </select>

                      <a
                        href={`https://wa.me/${enq.phoneNumber.replace(/\D/g, '')}?text=Hello%20${encodeURIComponent(enq.contactName)},%20this%20is%20Alagu%20Production%20European%20Distribution%20desk%20regarding%20your%20theatre%20inquiry%20for%20${encodeURIComponent(enq.cinemaName)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 px-3 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-semibold text-center transition-colors"
                      >
                        Reply on WhatsApp
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: MOVIES & SLATE MANAGEMENT
           ========================================================================= */}
        {activeTab === 'movies' && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-sans text-2xl font-extrabold text-white tracking-tight">
                  Movies Catalogue ({movies.length} Titles)
                </h2>
                <p className="text-xs text-cinema-400 mt-1">
                  Manage distribution titles, publish status, languages, and theatrical specs.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsAddMovieModalOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-gold text-cinema-950 hover:bg-gold-300 flex items-center gap-1.5 shadow-gold-sm transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Movie</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="p-5 rounded-2xl bg-cinema-900 border border-cinema-750 flex flex-col justify-between space-y-4 hover:border-gold/30 transition-colors shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cinema-950 border border-cinema-750 text-gold">
                        {movie.status}
                      </span>
                      <span className="text-xs font-mono text-cinema-400">{movie.releaseYear}</span>
                    </div>

                    <h3 className="font-sans text-xl font-bold text-white tracking-tight">{movie.title}</h3>
                    <p className="text-xs text-cinema-400 mt-1">
                      Languages: {movie.languages.join(', ')}
                    </p>
                    <p className="text-xs text-cinema-300 mt-2 line-clamp-2 leading-relaxed">
                      {movie.synopsis}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-cinema-800 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleToggleMoviePublish(movie)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        movie.published
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-cinema-800 text-cinema-400 border border-cinema-700'
                      }`}
                    >
                      {movie.published ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                      <span>{movie.published ? 'Live on Site' : 'Hidden'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDeleteMovie(movie.id)}
                      className="p-1.5 text-cinema-400 hover:text-rose-400 transition-colors"
                      title="Delete movie"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: PORTFOLIO PROJECTS
           ========================================================================= */}
        {activeTab === 'projects' && (
          <div className="mt-8 space-y-6">
            <div>
              <h2 className="font-sans text-2xl font-extrabold text-white tracking-tight">
                Exhibition Projects ({projects.length})
              </h2>
              <p className="text-xs text-cinema-400 mt-1">
                Verified theatrical screening circuits across European cities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.map((p) => (
                <div key={p.id} className="p-6 rounded-2xl bg-cinema-900 border border-cinema-750 space-y-3 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-bold text-lg text-white">{p.filmTitle}</span>
                    <span className="text-xs text-gold font-mono bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                      {p.country}
                    </span>
                  </div>
                  <div className="text-xs text-cinema-400">
                    City: {p.city} &bull; Year: {p.year} &bull; Venue: {p.venue}
                  </div>
                  <p className="text-xs text-cinema-300 leading-relaxed bg-cinema-950 p-3 rounded-xl border border-cinema-800">
                    {p.approvedHighlights}
                  </p>
                  <div className="text-[11px] font-mono flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{p.detailsConfirmed ? 'Verified Circuit Record' : 'Details To Be Confirmed'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: TESTIMONIAL APPROVALS
           ========================================================================= */}
        {activeTab === 'testimonials' && (
          <div className="mt-8 space-y-6">
            <div>
              <h2 className="font-sans text-2xl font-extrabold text-white tracking-tight">
                Partner Testimonial Compliance
              </h2>
              <p className="text-xs text-cinema-400 mt-1">
                Toggle approval state. Only testimonials toggled to &ldquo;Approved&rdquo; will render on public pages.
              </p>
            </div>

            <div className="space-y-4">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="p-6 rounded-2xl bg-cinema-900 border border-cinema-750 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-md"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-base">{t.author}</span>
                      <span className="text-xs text-cinema-400">({t.organization}, {t.city})</span>
                    </div>
                    <blockquote className="text-sm text-cinema-200 italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <p className="text-xs text-amber-300 font-mono">
                      Audit Note: {t.note || 'None'}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleToggleTestimonial(t.id, !t.isApproved)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors flex-shrink-0 ${
                      t.isApproved
                        ? 'bg-emerald-500 text-cinema-950 font-bold shadow-sm'
                        : 'bg-cinema-800 text-cinema-300 hover:text-white border border-cinema-700'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>{t.isApproved ? 'Approved for Public Site' : 'Pending Formal Approval'}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Movie Modal */}
      {isAddMovieModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-cinema-900 border border-cinema-700 shadow-2xl space-y-5">
            <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight">Add Theatrical Movie</h3>

            <form onSubmit={handleCreateMovie} className="space-y-4 text-xs">
              <div>
                <label className="block uppercase tracking-wider text-cinema-300 font-semibold mb-1.5">
                  Movie Title <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Leo 2, Kanguva 2"
                  value={newMovieTitle}
                  onChange={(e) => setNewMovieTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cinema-800 border border-cinema-700 text-white text-sm focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-cinema-300 font-semibold mb-1.5">
                  Theatrical Status
                </label>
                <select
                  value={newMovieStatus}
                  onChange={(e) => setNewMovieStatus(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl bg-cinema-800 border border-cinema-700 text-white text-sm focus:border-gold focus:outline-none"
                >
                  <option value="Upcoming">Upcoming</option>
                  <option value="Now Showing">Now Showing</option>
                  <option value="Previously Distributed">Previously Distributed</option>
                </select>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-cinema-300 font-semibold mb-1.5">
                  Languages (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="Tamil, Telugu, Hindi, Malayalam"
                  value={newMovieLanguages}
                  onChange={(e) => setNewMovieLanguages(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cinema-800 border border-cinema-700 text-white text-sm focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-cinema-300 font-semibold mb-1.5">
                  Synopsis
                </label>
                <textarea
                  rows={3}
                  placeholder="Official theatrical release synopsis..."
                  value={newMovieSynopsis}
                  onChange={(e) => setNewMovieSynopsis(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cinema-800 border border-cinema-700 text-white text-sm focus:border-gold focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddMovieModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-cinema-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl font-bold text-cinema-950 bg-gold hover:bg-gold-300 shadow-gold-sm transition-colors"
                >
                  Save Movie to Slate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
