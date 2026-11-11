'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { INITIAL_SETTINGS } from '@/lib/data/siteSettings';

interface ModernContactSectionProps {
  prefilledFilm?: string;
  className?: string;
}

export function ModernContactSection({
  prefilledFilm = '',
  className = '',
}: ModernContactSectionProps) {
  const settings = INITIAL_SETTINGS;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [websiteOrVenue, setWebsiteOrVenue] = useState(
    prefilledFilm ? `Film Enquiry: ${prefilledFilm}` : ''
  );
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          country: 'European Territory',
          city: 'Direct Enquiry',
          cinemaName: websiteOrVenue || 'General Distribution Inquiry',
          contactName: name,
          phoneCountryCode: '+',
          phoneNumber: 'Provided via email',
          email,
          selectedFilm: prefilledFilm,
          message,
          consent: true,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send message.');
      }

      setSubmitStatus('success');
      setName('');
      setEmail('');
      setWebsiteOrVenue('');
      setMessage('');
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please reach out via WhatsApp or email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#08090C] ${className}`}>
      {/* Subtle Warm Luxury Ambient Backlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[550px] h-[450px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Section Labels (Exact match to reference labels) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-4 px-2">
          <div>
            <span className="text-xs font-semibold text-cinema-400 uppercase tracking-widest font-mono">
              Contact Info Section
            </span>
          </div>
          <div className="hidden lg:block">
            <span className="text-xs font-semibold text-cinema-400 uppercase tracking-widest font-mono">
              Contact Form
            </span>
          </div>
        </div>

        {/* 2-Card Glassmorphic Luxury Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Card 1: Contact Info (Frosted Glassmorphic Card) */}
          <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 sm:p-10 md:p-12 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-gold/30 transition-all duration-300">
            {/* Top Glossy Corner Sheen (matching reference reflection) */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10">
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Get in Touch
              </h2>

              <p className="mt-4 text-cinema-300 text-sm sm:text-base leading-relaxed">
                Connect with our European theatrical distribution desk for screening bookings, KDM coordination, or international co-distribution across continental circuits.
              </p>

              {/* Direct Info Items with Styled Icon Blocks */}
              <div className="mt-8 sm:mt-10 space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-4 text-cinema-200 hover:text-white group/item transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-gold group-hover/item:border-gold/40 group-hover/item:scale-105 transition-all shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-cinema-400 font-mono block">
                      Official Inquiries
                    </span>
                    <span className="text-sm sm:text-base font-medium break-all text-white">
                      {settings.email}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 text-cinema-200">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-gold mt-0.5 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-cinema-400 font-mono block">
                      Operations Hub
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white block">
                      European Distribution Headquarters
                    </span>
                    <span className="text-xs text-cinema-400 block mt-0.5 leading-relaxed">
                      Active in UK, Germany, France, Nordics, Switzerland, Poland &amp; Georgia
                    </span>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <a
                  href={`https://wa.me/${settings.whatsapp.replace(/\D/g, '')}?text=Hello%20Alagu%20Production,%20we%20have%20an%20exhibition%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-cinema-200 hover:text-white group/item transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-gold group-hover/item:border-emerald-500/40 group-hover/item:text-emerald-400 group-hover/item:scale-105 transition-all shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-cinema-400 font-mono block">
                      Direct WhatsApp &amp; Phone
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white block">
                      {settings.phone}
                    </span>
                    <span className="text-xs text-emerald-400 font-normal">
                      Available for instant booking enquiries
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Bottom Status Guarantee */}
            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-cinema-400 font-mono">
              <div className="flex items-center gap-2 text-cinema-300">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span>Partner of <strong className="text-white font-semibold">MADSOULS PRODUCTION LLC</strong></span>
              </div>
              <span className="text-[11px] text-cinema-400">24/7 DCI KDM dispatch</span>
            </div>
          </div>

          {/* Card 2: Contact Form (Frosted Glassmorphic Card) */}
          <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 sm:p-10 md:p-12 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-gold/30 transition-all duration-300">
            {/* Top Glossy Corner Sheen */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10 mb-2 lg:hidden">
              <span className="text-xs font-semibold text-cinema-400 uppercase tracking-widest font-mono">
                Contact Form
              </span>
            </div>

            {submitStatus === 'success' ? (
              <div className="relative z-10 my-auto py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/30 text-gold flex items-center justify-center mx-auto shadow-gold-subtle">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight">
                  Message Dispatched
                </h3>
                <p className="text-cinema-300 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Our European distribution team will review your requirements and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4 px-6 py-2 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  {/* Your Name */}
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name*"
                      className="w-full rounded-2xl bg-white/[0.05] border border-white/10 focus:border-gold/60 focus:bg-white/[0.08] px-4 py-3.5 text-sm sm:text-base text-white placeholder-cinema-400 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all shadow-inner"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <label htmlFor="contact-email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address*"
                      className="w-full rounded-2xl bg-white/[0.05] border border-white/10 focus:border-gold/60 focus:bg-white/[0.08] px-4 py-3.5 pr-10 text-sm sm:text-base text-white placeholder-cinema-400 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all shadow-inner"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cinema-400 pointer-events-none">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Cinema / Circuit / Website */}
                  <div>
                    <label htmlFor="contact-website" className="sr-only">
                      Your Website or Circuit
                    </label>
                    <input
                      id="contact-website"
                      type="text"
                      value={websiteOrVenue}
                      onChange={(e) => setWebsiteOrVenue(e.target.value)}
                      placeholder="Your Website / Cinema Circuit (Optional)"
                      className="w-full rounded-2xl bg-white/[0.05] border border-white/10 focus:border-gold/60 focus:bg-white/[0.08] px-4 py-3.5 text-sm sm:text-base text-white placeholder-cinema-400 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all shadow-inner"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="sr-only">
                      Write your message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message..."
                      className="w-full rounded-2xl bg-white/[0.05] border border-white/10 focus:border-gold/60 focus:bg-white/[0.08] p-4 text-sm sm:text-base text-white placeholder-cinema-400 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all resize-none shadow-inner"
                    />
                  </div>

                  {errorMessage && (
                    <div className="text-xs text-rose-300 bg-rose-500/10 border border-rose-500/20 px-3.5 py-2 rounded-xl">
                      {errorMessage}
                    </div>
                  )}
                </div>

                {/* Submit Button: Sleek Luxury Champagne Gold (Exact match to reference Send Message pill) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl py-4 px-8 text-sm font-bold text-cinema-950 bg-gradient-to-r from-[#DFC087] via-[#D4AF37] to-[#B89230] hover:brightness-110 shadow-[0_10px_30px_rgba(212,175,55,0.28)] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-cinema-950" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-cinema-950" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
