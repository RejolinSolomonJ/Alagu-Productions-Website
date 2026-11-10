import React from 'react';

interface FilmStripProps {
  className?: string;
  variant?: 'top' | 'bottom' | 'divider';
}

export function FilmStripPerforation({ className = '', variant = 'divider' }: FilmStripProps) {
  return (
    <div
      className={`w-full overflow-hidden select-none bg-cinema-950 border-y border-cinema-800/80 py-1.5 flex items-center justify-center relative ${className}`}
      aria-hidden="true"
    >
      {/* Repeating film sprocket perforations */}
      <div className="flex items-center gap-3 opacity-60 w-[120%] -ml-[10%]">
        {Array.from({ length: 48 }).map((_, i) => (
          <div
            key={i}
            className="w-3.5 h-2 rounded-[2px] bg-cinema-900 border border-gold/40 flex-shrink-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"
          />
        ))}
      </div>
    </div>
  );
}

