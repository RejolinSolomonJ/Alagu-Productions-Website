import { NextRequest, NextResponse } from 'next/server';
import { readCMS, writeCMS } from '@/lib/store/cms-store';
import { Movie } from '@/lib/types';

export async function GET() {
  const cms = readCMS();
  return NextResponse.json({ movies: cms.movies });
}

export async function POST(req: NextRequest) {
  try {
    const movieData: Partial<Movie> = await req.json();
    const cms = readCMS();

    const newMovie: Movie = {
      id: `m-${Date.now()}`,
      slug: (movieData.title || 'untitled').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      title: movieData.title || 'New Movie',
      status: movieData.status || 'Upcoming',
      releaseYear: movieData.releaseYear || new Date().getFullYear(),
      releaseDate: movieData.releaseDate || 'TBA',
      languages: movieData.languages || ['Tamil'],
      genres: movieData.genres || ['Action'],
      territories: movieData.territories || ['Pan-European Theatrical'],
      synopsis: movieData.synopsis || 'Synopsis pending theatrical release announcement.',
      director: movieData.director || '',
      cast: movieData.cast || [],
      bannerGradient: 'from-amber-950 via-zinc-950 to-neutral-950',
      accentColor: '#D4AF37',
      featured: Boolean(movieData.featured),
      published: true,
      kdmFormat: 'DCI 2K/4K • Dolby 5.1/7.1',
    };

    cms.movies.unshift(newMovie);
    writeCMS(cms);

    return NextResponse.json({ success: true, movie: newMovie }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const updatedMovie: Movie = await req.json();
    const cms = readCMS();

    const index = cms.movies.findIndex((m) => m.id === updatedMovie.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
    }

    cms.movies[index] = { ...cms.movies[index], ...updatedMovie };
    writeCMS(cms);

    return NextResponse.json({ success: true, movie: cms.movies[index] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const cms = readCMS();

    cms.movies = cms.movies.filter((m) => m.id !== id);
    writeCMS(cms);

    return NextResponse.json({ success: true, id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

