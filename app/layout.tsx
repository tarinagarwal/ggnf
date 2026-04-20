import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import './globals.css';

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

export const metadata: Metadata = {
  title: {
    default: 'Green Gujarat Natural Fertilizer — Imported Water-Soluble, Chelated & Organic Fertilizers',
    template: '%s · Green Gujarat Natural Fertilizer',
  },
  description:
    'Green Gujarat Natural Fertilizer (GGNF) imports and markets premium water-soluble NPK, chelated micronutrients, sulphur, organic manures and soil conditioners from Ratlam, M.P.',
  keywords: [
    'Green Gujarat Natural Fertilizer',
    'GGNF',
    'water soluble NPK',
    'chelated micronutrients',
    'Fertisol',
    'Sampurna organic manure',
    'Super Gold phosphogypsum',
    'Ratlam fertilizer',
    'imported fertilizer India',
  ],
  metadataBase: new URL('https://greengujaratnf.com'),
  openGraph: {
    title: 'Green Gujarat Natural Fertilizer',
    description:
      'Premium imported water-soluble NPK, chelated micronutrients and organic fertilizers from GGNF, Ratlam.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans text-forest-900 antialiased">
        <Nav />
        <main className="pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
