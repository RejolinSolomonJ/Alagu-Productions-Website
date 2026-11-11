'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, Loader2, Sparkles } from 'lucide-react';

const COUNTRIES = [
  { code: 'GB', name: 'United Kingdom', dial: '+44' },
  { code: 'DE', name: 'Germany', dial: '+49' },
  { code: 'FR', name: 'France', dial: '+33' },
  { code: 'NL', name: 'Netherlands', dial: '+31' },
  { code: 'CH', name: 'Switzerland', dial: '+41' },
  { code: 'IE', name: 'Ireland', dial: '+353' },
  { code: 'PL', name: 'Poland', dial: '+48' },
  { code: 'SE', name: 'Sweden', dial: '+46' },
  { code: 'NO', name: 'Norway', dial: '+47' },
  { code: 'DK', name: 'Denmark', dial: '+45' },
  { code: 'FI', name: 'Finland', dial: '+358' },
  { code: 'IT', name: 'Italy', dial: '+39' },
  { code: 'ES', name: 'Spain', dial: '+34' },
  { code: 'AT', name: 'Austria', dial: '+43' },
  { code: 'BE', name: 'Belgium', dial: '+32' },
  { code: 'GE', name: 'Georgia', dial: '+995' },
  { code: 'OTHER', name: 'Other Territory', dial: '+1' },
];

interface FormErrors {
  country?: string;
  city?: string;
  cinemaName?: string;
  contactName?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
  consent?: string;
}

interface PartnerEnquiryFormProps {
  prefilledFilm?: string;
  className?: string;
}

export function PartnerEnquiryForm({ prefilledFilm = '', className = '' }: PartnerEnquiryFormProps) {
  const [country, setCountry] = useState('United Kingdom');
  const [city, setCity] = useState('');
  const [cinemaName, setCinemaName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phoneCountryCode, setPhoneCountryCode] = useState('+44');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFilm, setSelectedFilm] = useState(prefilledFilm);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [hpAddress, setHpAddress] = useState('');

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledFilm) {
      setSelectedFilm(prefilledFilm);
    }
  }, [prefilledFilm]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setCountry(selected);
    const found = COUNTRIES.find((c) => c.name === selected);
    if (found) {
      setPhoneCountryCode(found.dial);
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!country.trim()) newErrors.country = 'Country is required';
    if (!city.trim()) newErrors.city = 'City is required';
    if (!cinemaName.trim()) newErrors.cinemaName = 'Cinema / Theatre name is required';
    if (!contactName.trim()) newErrors.contactName = 'Contact person name is required';

    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d[\d\s\-()]{5,}$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!message.trim()) {
      newErrors.message = 'Please provide details of your screening requirements';
    }

    if (!consent) {
      newErrors.consent = 'You must agree before submitting';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (hpAddress) {
      setSubmitStatus('success');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          country,
          city,
          cinemaName,
          contactName,
          phoneCountryCode,
          phoneNumber,
          email,
          selectedFilm,
          message,
          consent,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to submit enquiry.');
      }

      setSubmitStatus('success');
      setCity('');
      setCinemaName('');
      setContactName('');
      setPhoneNumber('');
      setEmail('');
      setSelectedFilm('');
      setMessage('');
      setConsent(false);
      setErrors({});
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'An error occurred while submitting.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`relative w-full max-w-3xl mx-auto rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden group hover:border-gold/30 transition-all duration-300 ${className}`}>
      {/* Top Specular Sheen */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="mb-8 relative z-10">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase font-mono tracking-widest text-gold font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Exhibition Partnerships</span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Interested in Exhibiting Indian Films in Your City?
        </h2>
        <p className="text-cinema-300 text-sm sm:text-base mt-3 leading-relaxed">
          Are you a cinema owner, theatre operator or exhibition partner interested in screening Indian movies in your city or country? Partner with Alagu Production to bring the latest Indian movies to your audience.
        </p>

        {/* Quick action buttons (Frosted Glass Pills) */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/995504887972"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-cinema-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp: +995 504 88 79 72</span>
          </a>

          <a
            href="mailto:alaguproduction@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-cinema-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.10] border border-white/15 transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4 text-gold" />
            <span>alaguproduction@gmail.com</span>
          </a>
        </div>
      </div>

      {submitStatus === 'success' ? (
        <div className="py-12 px-6 text-center space-y-4 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-emerald-500/30 shadow-2xl relative z-10">
          <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight">Enquiry Received</h3>
          <p className="text-cinema-300 text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{contactName}</strong>. Our European distribution team will review your requirements for <strong className="text-white">{cinemaName}</strong> and reply within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setSubmitStatus('idle')}
            className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors"
          >
            Submit another enquiry &rarr;
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10" noValidate>
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              value={hpAddress}
              onChange={(e) => setHpAddress(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="country" className="block text-xs font-medium text-cinema-300 mb-1.5 font-sans">
                Country / Territory <span className="text-gold">*</span>
              </label>
              <select
                id="country"
                value={country}
                onChange={handleCountryChange}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none transition-all"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.name} className="bg-[#08090C] text-white">
                    {c.name} ({c.dial})
                  </option>
                ))}
              </select>
              {errors.country && <p className="text-xs text-rose-400 mt-1">{errors.country}</p>}
            </div>

            <div>
              <label htmlFor="city" className="block text-xs font-medium text-cinema-300 mb-1.5 font-sans">
                City <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="city"
                placeholder="e.g. London, Frankfurt, Paris"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none placeholder:text-cinema-400 transition-all shadow-inner"
              />
              {errors.city && <p className="text-xs text-rose-400 mt-1">{errors.city}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cinemaName" className="block text-xs font-medium text-cinema-300 mb-1.5 font-sans">
                Cinema / Theatre Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="cinemaName"
                placeholder="e.g. Odeon Covent Garden"
                value={cinemaName}
                onChange={(e) => setCinemaName(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none placeholder:text-cinema-400 transition-all shadow-inner"
              />
              {errors.cinemaName && <p className="text-xs text-rose-400 mt-1">{errors.cinemaName}</p>}
            </div>

            <div>
              <label htmlFor="contactName" className="block text-xs font-medium text-cinema-300 mb-1.5 font-sans">
                Contact Person Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="contactName"
                placeholder="Full name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none placeholder:text-cinema-400 transition-all shadow-inner"
              />
              {errors.contactName && <p className="text-xs text-rose-400 mt-1">{errors.contactName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-cinema-300 mb-1.5 font-sans">
                Email Address <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="programmer@cinema.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none placeholder:text-cinema-400 transition-all shadow-inner"
              />
              {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-xs font-medium text-cinema-300 mb-1.5 font-sans">
                Phone / WhatsApp <span className="text-gold">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  aria-label="Dial code"
                  value={phoneCountryCode}
                  onChange={(e) => setPhoneCountryCode(e.target.value)}
                  className="w-20 px-3 py-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm text-center focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none transition-all shadow-inner"
                />
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none placeholder:text-cinema-400 transition-all shadow-inner"
                />
              </div>
              {errors.phoneNumber && <p className="text-xs text-rose-400 mt-1">{errors.phoneNumber}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="selectedFilm" className="block text-xs font-medium text-cinema-300 mb-1.5 font-sans">
              Film of Interest (Optional)
            </label>
            <input
              type="text"
              id="selectedFilm"
              placeholder="e.g. Jailer 2, Thug Life, or General Upcoming Slate"
              value={selectedFilm}
              onChange={(e) => setSelectedFilm(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none placeholder:text-cinema-400 transition-all shadow-inner"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-cinema-300 mb-1.5 font-sans">
              Screening Requirements &amp; Dates <span className="text-gold">*</span>
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Target screening dates, number of shows, screen capacity..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:border-gold/60 focus:bg-white/[0.08] focus:outline-none placeholder:text-cinema-400 transition-all resize-none shadow-inner"
            />
            {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
          </div>

          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 text-gold focus:ring-gold"
              />
              <span className="text-xs text-cinema-400 leading-relaxed">
                I agree to the{' '}
                <Link href="/privacy-policy" className="text-gold underline hover:text-gold-light">
                  Privacy Policy
                </Link>{' '}
                and consent to Alagu Production contacting me regarding theatrical distribution.
              </span>
            </label>
            {errors.consent && <p className="text-xs text-rose-400 mt-1">{errors.consent}</p>}
          </div>

          {submitStatus === 'error' && (
            <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-8 rounded-2xl font-bold text-cinema-950 bg-gradient-to-r from-[#DFC087] via-[#D4AF37] to-[#B89230] hover:brightness-110 shadow-[0_10px_30px_rgba(212,175,55,0.28)] transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-cinema-950" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Exhibition Enquiry</span>
                <Send className="w-4 h-4 text-cinema-950" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
