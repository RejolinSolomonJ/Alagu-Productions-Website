export type MovieStatus = 'Now Showing' | 'Upcoming' | 'Previously Distributed';

export interface Movie {
  id: string;
  slug: string;
  title: string;
  originalTitle?: string;
  status: MovieStatus;
  releaseYear: number;
  releaseDate?: string;
  languages: string[];
  genres: string[];
  territories: string[];
  synopsis: string;
  director?: string;
  cast?: string[];
  bannerGradient: string;
  accentColor: string;
  featured?: boolean;
  published: boolean;
  kdmFormat?: string; // e.g. "DCI Compliant 2K/4K, Dolby Atmos"
  posterUrl?: string; // optional user uploaded poster, falls back to cinematic placeholder
}

export interface ExhibitionProject {
  id: string;
  slug: string;
  filmTitle: string;
  country: string;
  countryCode: string; // e.g. "GB", "DE", "FR"
  city: string;
  venue: string;
  year: number;
  dateString: string;
  approvedHighlights: string;
  status: 'Completed' | 'Current' | 'Scheduled';
  detailsConfirmed: boolean;
  accentGradient: string;
}

export interface PartnerEnquiry {
  id: string;
  createdAt: string;
  country: string;
  city: string;
  cinemaName: string;
  contactName: string;
  phoneCountryCode: string;
  phoneNumber: string;
  email: string;
  message: string;
  selectedFilm?: string;
  status: 'New' | 'In Discussion' | 'Confirmed' | 'Archived';
  consent: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  organization: string;
  city: string;
  country: string;
  quote: string;
  isApproved: boolean; // CMS toggle: only approved testimonials render
  note?: string;
}

export interface SiteSettings {
  companyName: string;
  strategicPartner?: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  headquarters: string;
  europeanPresence: string[];
  projectsCountClaim: string;
  projectsCountConfirmed: boolean;
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
}

