import { MetadataRoute } from 'next';
import { INITIAL_MOVIES } from '@/lib/data/movies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alaguproduction.com';

  const staticPages = [
    '',
    '/about',
    '/movies',
    '/portfolio',
    '/why-choose-us',
    '/partner',
    '/contact',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/partner' ? 0.9 : 0.8,
  }));

  const moviePages = INITIAL_MOVIES.map((movie) => ({
    url: `${baseUrl}/movies/${movie.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...moviePages];
}

