/**
 * Cinematic Hero Video Configuration
 *
 * NOTE FOR CLIENT / STAFF:
 * Replace HERO_VIDEO_URL with your licensed or owned 1080p MP4/WebM background video footage.
 * Supported: Local path (/videos/...) or external CDN (Cloudinary, AWS S3, BunnyCDN, etc.).
 * Recommended specs:
 * - 1080p (1920x1080) max, under 4 MB
 * - 8 to 15 seconds seamless loop
 * - Muted (no audio stream)
 * - 24 fps cinematic cadence
 */

export const HERO_VIDEO_CONFIG = {
  // Primary MP4 video source (defaulting to uploaded projector beam footage)
  videoSrc: process.env.NEXT_PUBLIC_HERO_VIDEO_URL || '/videos/hero-cinematic.mp4',

  // Optional WebM source for modern browser compression efficiency
  videoWebmSrc: process.env.NEXT_PUBLIC_HERO_VIDEO_WEBM_URL || '',

  // Fallback poster image (instant LCP while video hydrates or for reduced-motion / data-saver mode)
  posterSrc: process.env.NEXT_PUBLIC_HERO_POSTER_URL || '/videos/hero-poster.jpg',

  // Fallback gradient CSS class if video fails or is unsupported
  fallbackGradient: 'from-cinema-950 via-cinema-900 to-black',
};

