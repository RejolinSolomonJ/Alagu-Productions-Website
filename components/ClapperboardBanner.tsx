import React from 'react';
import { Sparkles } from 'lucide-react';

export function ClapperboardBanner() {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-3.5 sm:p-4 shadow-2xl relative overflow-hidden select-none group hover:border-gold/30 transition-all duration-300">
      {/* Top Glossy Specular Reflection Sheen */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* Grid of Glass Information Capsules */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left relative z-10">
        <div className="p-3 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors">
          <span className="text-[10px] uppercase font-mono tracking-wider text-cinema-400 block mb-0.5">
            Organization
          </span>
          <span className="font-semibold text-white text-xs sm:text-sm">Alagu Production</span>
        </div>

        <div className="p-3 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-colors">
          <span className="text-[10px] uppercase font-mono tracking-wider text-gold block mb-0.5 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-gold" />
            <span>Strategic Partner</span>
          </span>
          <span className="font-semibold text-gold-light text-xs sm:text-sm truncate block" title="MADSOULS PRODUCTION LLC">
            MADSOULS PRODUCTION LLC
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors">
          <span className="text-[10px] uppercase font-mono tracking-wider text-cinema-400 block mb-0.5">
            Territory
          </span>
          <span className="font-semibold text-white text-xs sm:text-sm">Europe &amp; UK</span>
        </div>

        <div className="p-3 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors">
          <span className="text-[10px] uppercase font-mono tracking-wider text-cinema-400 block mb-0.5">
            Mastering
          </span>
          <span className="font-semibold text-white text-xs sm:text-sm">DCI 4K &bull; Atmos</span>
        </div>
      </div>
    </div>
  );
}
