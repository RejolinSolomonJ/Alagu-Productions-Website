import { Testimonial } from '../types';

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Theatrical Circuit Lead',
    role: 'Programming Director',
    organization: 'Cavea Cinema Network',
    city: 'Tbilisi',
    country: 'Georgia',
    quote: 'Testimonial pending approval from partner management. Alagu Production ensures professional DCI DCP delivery and punctual KDM key generation.',
    isApproved: false,
    note: 'Pending formal written marketing clearance from operator.',
  },
  {
    id: 'test-2',
    author: 'Multiplex Operations Manager',
    role: 'Operations Lead',
    organization: 'SM & Ayala Cinema Circuit',
    city: 'Manila',
    country: 'Philippines',
    quote: 'Testimonial pending approval. Strong audience turnout and reliable liaison for multilingual Indian premiere events.',
    isApproved: false,
    note: 'Internal clearance requested for exhibition portfolio release.',
  },
  {
    id: 'test-3',
    author: 'Central Asia Film Programmer',
    role: 'Senior Curator',
    organization: 'Kinopark Theatres',
    city: 'Almaty',
    country: 'Kazakhstan',
    quote: 'Testimonial pending approval. Seamless coordination for localized subtitling and promotional materials.',
    isApproved: false,
    note: 'Verification in progress.',
  },
];

