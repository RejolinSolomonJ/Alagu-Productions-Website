import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  metadataBase: new URL('https://alaguproduction.com'),
  title: {
    default: 'Alagu Production | Overseas Indian Film Distribution & Theatrical Exhibition',
    template: '%s | Alagu Production',
  },
  description:
    'Alagu Production is Europe’s trusted overseas Indian film distribution and theatrical exhibition partner. Connecting major Indian cinema blockbusters to European cinema chains.',
  keywords: [
    'Indian movie distribution Europe',
    'Overseas Tamil cinema distribution',
    'Telugu movie distributor UK Germany France',
    'Indian film exhibition partner Europe',
    'Alagu Production',
    'Theatrical booking Indian movies',
    'DCI DCP KDM Indian films Europe',
  ],
  authors: [{ name: 'Alagu Production' }],
  creator: 'Alagu Production',
  publisher: 'Alagu Production',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://alaguproduction.com',
    title: 'Alagu Production | Overseas Indian Film Distribution & Theatrical Exhibition',
    description:
      'Premier theatrical distribution partner for Indian cinema across Europe. Partner with us for cinema bookings.',
    siteName: 'Alagu Production',
    images: [
      {
        url: '/logo.png',
        width: 682,
        height: 497,
        alt: 'Alagu Production Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alagu Production | Overseas Indian Film Distribution',
    description: 'Connecting Indian cinema with European audiences and theatre exhibitors.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'MovieDistributor',
    name: 'Alagu Production',
    alternateName: 'Alagu Productions Europe',
    url: 'https://alaguproduction.com',
    logo: 'https://alaguproduction.com/logo.png',
    description:
      'Overseas Indian movie distribution and exhibition company based in Europe, dedicated to bringing the best of Indian cinema to audiences worldwide.',
    email: 'alaguproduction@gmail.com',
    telephone: '+995 504 88 79 72',
    areaServed: [
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
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="bg-cinema-950 text-cinema-300 min-h-screen flex flex-col font-sans antialiased selection:bg-gold selection:text-cinema-950">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-gold text-cinema-950 font-semibold rounded shadow-md"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
