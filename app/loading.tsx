import React from 'react';
import { Film } from 'lucide-react';

export default function Loading() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center bg-cinema-950 text-center">
      <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold animate-spin shadow-gold-sm">
        <Film className="w-7 h-7" />
      </div>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-gold animate-pulse">
        Buffering Theatrical Stream...
      </p>
    </div>
  );
}

