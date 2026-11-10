'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2, Globe2 } from 'lucide-react';
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
    <section className={`relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}>
      {/* Ambient background glows matching reference */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-purple-700/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Section Labels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-4 px-2">
          <div>
            <span className="text-xs sm:text-sm font-medium text-cinema-300/80 tracking-wide">
              Contact Info Section
            </span>
          </div>
          <div className="hidden lg:block">
            <span className="text-xs sm:text-sm font-medium text-cinema-300/80 tracking-wide">
              Contact Form
            </span>
          </div>
        </div>

        {/* 2-Card Glassmorphic Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Card 1: Contact Info */}
          <div className="relative rounded-3xl bg-[#121324]/70 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:border-white/20">
            {/* Specular Diagonal Light Streak (as seen in user screenshot) */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 rotate-45 rounded-3xl blur-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-500/15 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Get in Touch
              </h2>

              <p className="mt-4 text-cinema-300 text-sm sm:text-base leading-relaxed">
                We&apos;re here to discuss your theatrical distribution, KDM booking, or cinema partnerships and bring Indian cinema to life with premium sound & projection across European screens.
              </p>

              {/* Direct Info Items with Icons */}
              <div className="mt-8 sm:mt-10 space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-4 text-cinema-200 hover:text-white group/item transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 text-cinema-300 group-hover/item:text-gold group-hover/item:border-gold/30 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base font-medium break-all">
                    {settings.email}
                  </span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 text-cinema-200">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 text-cinema-300 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-sm sm:text-base font-medium">
                    <span>European Theatrical Distribution HQ</span>
                    <span className="block text-xs text-cinema-400 mt-0.5">
                      Operational in UK, Germany, France, Nordics, Switzerland, Poland & Georgia
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
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 text-cinema-300 group-hover/item:text-emerald-400 group-hover/item:border-emerald-500/30 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-medium block">
                      {settings.phone}
                    </span>
                    <span className="text-xs text-emerald-400 font-normal">
                      Available on WhatsApp & Phone
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Bottom Status / Guarantee */}
            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center gap-2 text-xs text-cinema-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct studio liaison • 24/7 DCI KDM dispatch desk</span>
            </div>
          </div>

          {/* Card 2: Contact Form */}
          <div className="relative rounded-3xl bg-[#121324]/70 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:border-white/20">
            {/* Specular Diagonal Light Streak */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rotate-45 rounded-3xl blur-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-500/15 to-transparent pointer-events-none" />

            <div className="relative z-10 mb-2 lg:hidden">
              <span className="text-xs sm:text-sm font-medium text-cinema-300/80 tracking-wide">
                Contact Form
              </span>
            </div>

            {submitStatus === 'success' ? (
              <div className="relative z-10 my-auto py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-cinema-300 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Our distribution liaison team will review your enquiry and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5 flex flex-col h-full justify-between">
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
                      className="w-full rounded-2xl bg-[#1e2038]/70 border border-white/10 focus:border-purple-400/80 focus:bg-[#232644]/90 px-5 py-3.5 text-sm sm:text-base text-white placeholder-cinema-400/80 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all shadow-inner"
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
                      className="w-full rounded-2xl bg-[#1e2038]/70 border border-white/10 focus:border-purple-400/80 focus:bg-[#232644]/90 px-5 py-3.5 pr-11 text-sm sm:text-base text-white placeholder-cinema-400/80 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all shadow-inner"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cinema-400/80 pointer-events-none">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Cinema / Circuit / Website */}
                  <div>
                    <label htmlFor="contact-website" className="sr-only">
                      Your Cinema Circuit or Website
                    </label>
                    <input
                      id="contact-website"
                      type="text"
                      value={websiteOrVenue}
                      onChange={(e) => setWebsiteOrVenue(e.target.value)}
                      placeholder="Your Cinema / Circuit / Website (Optional)"
                      className="w-full rounded-2xl bg-[#1e2038]/70 border border-white/10 focus:border-purple-400/80 focus:bg-[#232644]/90 px-5 py-3.5 text-sm sm:text-base text-white placeholder-cinema-400/80 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all shadow-inner"
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
                      className="w-full rounded-2xl bg-[#1e2038]/70 border border-white/10 focus:border-purple-400/80 focus:bg-[#232644]/90 p-5 text-sm sm:text-base text-white placeholder-cinema-400/80 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all resize-none shadow-inner"
                    />
                  </div>

                  {errorMessage && (
                    <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-4 py-2.5 rounded-xl">
                      {errorMessage}
                    </div>
                  )}
                </div>

                {/* Submit Button (Vibrant Pill gradient matching screenshot) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[200px] rounded-full py-4 px-8 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#6e56ff] via-[#855bf8] to-[#f43f8e] shadow-[0_10px_30px_rgba(133,91,248,0.4)] hover:shadow-[0_15px_35px_rgba(244,63,142,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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
