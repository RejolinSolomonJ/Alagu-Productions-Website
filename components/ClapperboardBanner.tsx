import React from 'react';

export function ClapperboardBanner() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg bg-cinema-900/90 border border-cinema-800 p-3 sm:p-4 shadow-card-clean backdrop-blur-md select-none">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
        <div className="p-2.5 rounded bg-cinema-950/70 border border-cinema-800/80">
          <span className="text-[10px] uppercase font-mono tracking-wider text-cinema-500 block">
            Organization
          </span>
          <span className="font-semibold text-white text-xs sm:text-sm">Alagu Production</span>
        </div>

        <div className="p-2.5 rounded bg-cinema-950/70 border border-cinema-800/80">
          <span className="text-[10px] uppercase font-mono tracking-wider text-cinema-500 block">
            Territory
          </span>
          <span className="font-semibold text-white text-xs sm:text-sm">Europe &amp; UK</span>
        </div>

        <div className="p-2.5 rounded bg-cinema-950/70 border border-cinema-800/80">
          <span className="text-[10px] uppercase font-mono tracking-wider text-cinema-500 block">
            Mastering
          </span>
          <span className="font-semibold text-white text-xs sm:text-sm">DCI 4K &bull; Dolby Atmos</span>
        </div>

        <div className="p-2.5 rounded bg-cinema-950/70 border border-cinema-800/80">
          <span className="text-[10px] uppercase font-mono tracking-wider text-cinema-500 block">
            Season
          </span>
          <span className="font-semibold text-gold text-xs sm:text-sm">2025 &ndash; 2026 Slate</span>
        </div>
      </div>
    </div>
  );
}
