import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export function Logo({ className = '', size = 'md', showTagline = false }: LogoProps) {
  const sizeMap = {
    sm: { imgH: 'h-8 sm:h-9', width: 36, height: 36, textClass: 'text-sm tracking-wider' },
    md: { imgH: 'h-10 sm:h-11', width: 44, height: 44, textClass: 'text-base sm:text-lg tracking-wider' },
    lg: { imgH: 'h-14 sm:h-16', width: 64, height: 64, textClass: 'text-xl tracking-wider' },
    xl: { imgH: 'h-20', width: 80, height: 80, textClass: 'text-2xl tracking-wider' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-lg transition-opacity hover:opacity-90 select-none ${className}`}
      aria-label="Alagu Production Home"
    >
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Alagu Production Logo"
          width={currentSize.width}
          height={currentSize.height}
          priority
          className={`${currentSize.imgH} w-auto object-contain filter drop-shadow-[0_1px_6px_rgba(200,157,60,0.35)]`}
        />
      </div>

      <div className="flex flex-col justify-center text-left">
        <span
          className={`font-serif font-bold uppercase text-white leading-tight ${currentSize.textClass}`}
        >
          ALAGU <span className="text-gold font-normal">PRODUCTION</span>
        </span>
        {showTagline && (
          <span className="text-[9px] uppercase tracking-[0.22em] text-cinema-400 font-sans font-medium leading-none mt-0.5">
            Overseas Distribution &amp; Exhibition
          </span>
        )}
      </div>
    </Link>
  );
}
