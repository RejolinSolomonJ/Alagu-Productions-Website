import fs from 'fs';
import path from 'path';
import { Movie, ExhibitionProject, PartnerEnquiry, Testimonial, SiteSettings } from '../types';
import { INITIAL_MOVIES } from '../data/movies';
import { INITIAL_PROJECTS } from '../data/projects';
import { INITIAL_TESTIMONIALS } from '../data/testimonials';
import { INITIAL_SETTINGS } from '../data/siteSettings';

interface CMSDatabase {
  movies: Movie[];
  projects: ExhibitionProject[];
  testimonials: Testimonial[];
  enquiries: PartnerEnquiry[];
  settings: SiteSettings;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'cms-state.json');

// Initialize database file if it does not exist
function getInitialData(): CMSDatabase {
  return {
    movies: INITIAL_MOVIES,
    projects: INITIAL_PROJECTS,
    testimonials: INITIAL_TESTIMONIALS,
    enquiries: [
      {
        id: 'enq-sample-1',
        createdAt: new Date().toISOString(),
        country: 'United Kingdom',
        city: 'Birmingham',
        cinemaName: 'Midlands Crown Multiplex',
        contactName: 'Liam Davies',
        phoneCountryCode: '+44',
        phoneNumber: '7911123456',
        email: 'screenings@midlandscrown.co.uk',
        message: 'Interested in booking Jailer 2 and Thug Life for our prime weekend slots in screens 1 & 3.',
        selectedFilm: 'Jailer 2',
        status: 'In Discussion',
        consent: true,
      },
    ],
    settings: INITIAL_SETTINGS,
  };
}

export function readCMS(): CMSDatabase {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      const initial = getInitialData();
      fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2), 'utf-8');
      return initial;
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error reading CMS database, using defaults:', error);
    return getInitialData();
  }
}

export function writeCMS(data: CMSDatabase): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing to CMS database:', error);
  }
}

// Helper methods
export function getMovies(): Movie[] {
  return readCMS().movies.filter((m) => m.published);
}

export function getAllMoviesAdmin(): Movie[] {
  return readCMS().movies;
}

export function getMovieBySlug(slug: string): Movie | undefined {
  return readCMS().movies.find((m) => m.slug === slug);
}

export function getProjects(): ExhibitionProject[] {
  return readCMS().projects;
}

export function getTestimonials(): Testimonial[] {
  return readCMS().testimonials.filter((t) => t.isApproved);
}

export function getAllTestimonialsAdmin(): Testimonial[] {
  return readCMS().testimonials;
}

export function getSiteSettings(): SiteSettings {
  return readCMS().settings;
}

export function getEnquiries(): PartnerEnquiry[] {
  return readCMS().enquiries;
}

export function saveEnquiry(enquiry: Omit<PartnerEnquiry, 'id' | 'createdAt' | 'status'>): PartnerEnquiry {
  const cms = readCMS();
  const newEnquiry: PartnerEnquiry = {
    ...enquiry,
    id: `enq-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    createdAt: new Date().toISOString(),
    status: 'New',
  };
  cms.enquiries.unshift(newEnquiry);
  writeCMS(cms);
  return newEnquiry;
}

