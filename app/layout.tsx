import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { company } from '@/lib/data';
import './globals.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_VERIFICATION;

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const SITE_URL = 'https://greengujaratnaturalfertilizer.in';
const SITE_NAME = 'Green Gujarat Natural Fertilizer';
const DEFAULT_TITLE =
  'Green Gujarat Natural Fertilizer — Imported Water-Soluble, Chelated & Organic Fertilizers';
const DEFAULT_DESCRIPTION =
  'Green Gujarat Natural Fertilizer (GGNF) imports and markets premium water-soluble NPK, chelated micronutrients, sulphur, organic manures and soil conditioners from Ahmedabad, Gujarat.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s · Green Gujarat Natural Fertilizer',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: '/' },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Green Gujarat Natural Fertilizer — Imported Water-Soluble, Chelated & Organic Fertilizers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  category: 'Agriculture',
  manifest: '/manifest.webmanifest',
  verification: {
    ...(GSC_VERIFICATION && { google: GSC_VERIFICATION }),
    ...(BING_VERIFICATION && { other: { 'msvalidate.01': BING_VERIFICATION } }),
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1f3a2b',
  colorScheme: 'light',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'GGNF',
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo.jpg`,
  image: `${SITE_URL}/og-image.jpg`,
  description: DEFAULT_DESCRIPTION,
  telephone: '+91-9009169444',
  email: company.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12, Bileshwar Industrial Estate-2, Opp. G.V.V.M., Kathwada Road, Odhav',
    addressLocality: 'Ahmedabad',
    postalCode: '382415',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0360,
    longitude: 72.6640,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Gujarat' },
    { '@type': 'AdministrativeArea', name: 'Madhya Pradesh' },
    { '@type': 'AdministrativeArea', name: 'Maharashtra' },
    { '@type': 'Country', name: 'India' },
  ],
  knowsAbout: [
    'Water-soluble NPK fertilizers',
    'Chelated micronutrients',
    'Sulphur fertilizers',
    'Organic manure',
    'Soil conditioners',
    'Phosphogypsum',
    'Crop nutrition',
  ],
  sameAs: [],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  inLanguage: 'en-IN',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${display.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans text-forest-900 antialiased">
        <Nav />
        <main className="pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <GoogleAnalytics measurementId={GA_ID} />
      </body>
    </html>
  );
}
