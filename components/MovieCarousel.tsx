'use client';

import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Movie } from '../lib/types';
import { MovieCard } from './MovieCard';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface MovieCarouselProps {
  movies: Movie[];
}

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  // Configure Autoplay plugin: stops on hover/interaction
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
    },
    [autoplayPlugin]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
      autoplay.stop();
      setIsPlaying(false);
    } else {
      autoplay.play();
      setIsPlaying(true);
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scrollPrev();
    } else if (e.key === 'ArrowRight') {
      scrollNext();
    }
  };

  return (
    <section
      className="relative w-full"
      aria-roledescription="carousel"
      aria-label="Featured Theatrical Movies Carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Theatrical Slate Preview
          </span>
          <span className="text-xs text-cinema-400">
            ({movies.length} Films Ready for European Exhibition)
          </span>
        </div>

        {/* Carousel Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleAutoplay}
            className="p-2 rounded bg-cinema-900 text-cinema-400 hover:text-white border border-white/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            aria-label={isPlaying ? 'Pause auto-sliding' : 'Resume auto-sliding'}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            onClick={scrollPrev}
            className="p-2 rounded bg-cinema-900 border border-white/10 text-white hover:border-gold hover:text-gold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            className="p-2 rounded bg-cinema-900 border border-white/10 text-white hover:border-gold hover:text-gold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Embla Viewport */}
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex -ml-4 py-2">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4 min-w-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${movies.length}: ${movie.title}`}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-8" aria-label="Carousel pagination">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full h-1.5 ${
              index === selectedIndex ? 'w-8 bg-gold' : 'w-2 bg-cinema-700 hover:bg-cinema-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selectedIndex}
          />
        ))}
      </div>
    </section>
  );
}
