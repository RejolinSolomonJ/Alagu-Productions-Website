import { Testimonial } from '../types';

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'European Multiplex Operator',
    role: 'Programming Director',
    organization: 'Independent Cinema Network',
    city: 'London',
    country: 'United Kingdom',
    quote: 'Testimonial pending approval from partner management. Alagu Production ensures professional DCI DCP delivery and punctual KDM key generation.',
    isApproved: false,
    note: 'Pending formal written marketing clearance from operator.',
  },
  {
    id: 'test-2',
    author: 'Regional Theatre Manager',
    role: 'Operations Lead',
    organization: 'Continental Exhibition Partner',
    city: 'Frankfurt',
    country: 'Germany',
    quote: 'Testimonial pending approval. Strong audience turnout and reliable liaison for multilingual Indian premiere events.',
    isApproved: false,
    note: 'Internal clearance requested for exhibition portfolio release.',
  },
  {
    id: 'test-3',
    author: 'Independent Film Programmer',
    role: 'Senior Curator',
    organization: 'Cultural Screen Venues',
    city: 'Paris',
    country: 'France',
    quote: 'Testimonial pending approval. Seamless coordination for localized subtitling and promotional materials.',
    isApproved: false,
    note: 'Verification in progress.',
  },
];

