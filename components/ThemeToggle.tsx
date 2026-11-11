'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2 rounded-full bg-white/[0.05] dark:bg-white/[0.05] light:bg-black/[0.05] hover:bg-white/[0.12] dark:hover:bg-white/[0.12] border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-xl transition-all duration-300 text-cinema-300 dark:text-cinema-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-black focus:outline-none focus:ring-2 focus:ring-gold/50 shadow-sm ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 text-gold hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-slate-800 hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
}
