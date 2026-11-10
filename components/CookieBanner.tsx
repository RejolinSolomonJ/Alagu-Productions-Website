'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    const consent = localStorage.getItem('alagu_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('alagu_cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('alagu_cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-5 rounded-2xl bg-cinema-900/95 border border-cinema-700 backdrop-blur-xl shadow-2xl text-cinema-200 animate-in fade-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-gold/10 text-gold flex-shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1 text-xs space-y-2">
          <h4 className="font-semibold text-white text-sm">
            Privacy &amp; Analytics Consent
          </h4>
          <p className="text-cinema-300 leading-relaxed">
            We use privacy-compliant telemetry to measure cinema operator enquiries and optimize theatrical logistics. No personal data is sold.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-2 rounded-lg bg-gold text-cinema-950 font-bold hover:bg-gold-300 transition-colors shadow-sm"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="px-4 py-2 rounded-lg bg-cinema-800 text-cinema-300 hover:text-white hover:bg-cinema-700 transition-colors"
            >
              Essential Only
            </button>
            <Link
              href="/privacy-policy"
              className="ml-auto text-[11px] text-cinema-400 hover:text-gold underline"
            >
              Details
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={handleDecline}
          className="text-cinema-400 hover:text-white p-1"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

