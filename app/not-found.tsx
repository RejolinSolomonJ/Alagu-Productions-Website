import React from 'react';
import Link from 'next/link';
import { Film, Clapperboard, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 min-h-[85vh] flex items-center justify-center px-4 bg-cinema-950 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mx-auto shadow-gold-sm">
          <Clapperboard className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
            Scene 404 &bull; Take 1 &bull; Cut!
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-white">
            Reel Not Found
          </h1>
          <p className="text-sm text-cinema-300 leading-relaxed max-w-sm mx-auto">
            The theatrical scene or movie distribution link you requested isn&apos;t currently on our European exhibition slate.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-cinema-950 bg-gold hover:bg-gold-300 shadow-gold-sm flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Studio Home</span>
          </Link>

          <Link
            href="/movies"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-cinema-200 hover:text-white bg-cinema-850 hover:bg-cinema-800 border border-cinema-700 flex items-center justify-center gap-2"
          >
            <Film className="w-4 h-4 text-gold" />
            <span>Browse Theatrical Slate</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

