import { SiteSettings } from '../types';

export const INITIAL_SETTINGS: SiteSettings = {
  companyName: 'Alagu Production',
  tagline: 'Overseas Indian Movie Distribution & Theatrical Exhibition',
  phone: '+995 504 88 79 72',
  whatsapp: '+995504887972',
  email: 'alaguproduction@gmail.com',
  headquarters: 'Europe (Operational across UK, Germany, France, Benelux, Nordics, Switzerland, Poland & Georgia)',
  europeanPresence: [
    'United Kingdom',
    'Germany',
    'France',
    'Netherlands',
    'Switzerland',
    'Ireland',
    'Poland',
    'Georgia',
    'Sweden',
    'Norway',
  ],
  projectsCountClaim: '16+ Projects',
  projectsCountConfirmed: false, // Internal note: Confirm '16+ projects' claim with company records before publishing
  socials: {
    instagram: '',
    facebook: '',
    twitter: '',
    youtube: '',
    linkedin: '',
  },
};

