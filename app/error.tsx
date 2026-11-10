'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Film, AlertTriangle, RefreshCw } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Theatrical App Error:', error);
  }, [error]);

  return (
    <div className="pt-32 pb-24 min-h-[85vh] flex items-center justify-center px-4 bg-cinema-950 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/15 border border-rose-500/40 flex items-center justify-center text-rose-400 mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-gold">
            Technical Projection Glitch
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Projection Interrupted
          </h1>
          <p className="text-xs sm:text-sm text-cinema-300 leading-relaxed max-w-sm mx-auto">
            Our distribution stream encountered a temporary playback error. Please try reloading or return to the main lobby.
          </p>
        </div>

        <div className="pt-2 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-cinema-950 bg-gold hover:bg-gold-300 flex items-center gap-2 shadow-gold-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reload Reel</span>
          </button>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-full text-xs font-semibold text-cinema-300 hover:text-white border border-cinema-700 bg-cinema-850"
          >
            Lobby Home
          </Link>
        </div>
      </div>
    </div>
  );
}

