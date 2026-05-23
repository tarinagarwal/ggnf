import type { Metadata } from 'next';
import Link from 'next/link';
import { dealers } from '@/lib/dealers';

export const metadata: Metadata = {
  title: 'Fertilizer Dealers Across India — GGNF Local Suppliers',
  description:
    'Green Gujarat Natural Fertilizer supplies imported water-soluble NPK, chelated micronutrients and soil conditioners across Gujarat, Madhya Pradesh and Maharashtra. Find your nearest dealer or apply for a dealership.',
  alternates: { canonical: '/dealers' },
  openGraph: {
    title: 'GGNF Dealers Across India',
    description:
      'Fertilizer dealers and suppliers across Gujarat, MP and Maharashtra.',
    url: 'https://greengujaratnaturalfertilizer.in/dealers/',
    type: 'website',
  },
};

export default function DealersIndexPage() {
  return (
    <>
      <section className="container-x pt-16 pb-10 md:pt-24 md:pb-16">
        <p className="text-xs uppercase tracking-[0.22em] text-forest-700">Dealers</p>
        <h1 className="mt-3 font-display text-5xl leading-tight text-forest-900 md:text-7xl">
          Find your nearest supplier.
        </h1>
        <p className="mt-6 max-w-2xl text-forest-800/75 md:text-lg">
          We supply imported fertilizers, chelated micronutrients and soil
          conditioners across India — direct dispatch from Ahmedabad to dealer
          networks in Gujarat, Madhya Pradesh, Maharashtra and beyond.
        </p>
      </section>

      <div className="rule" />

      <section className="container-x py-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dealers.map((d) => (
          <Link
            key={d.slug}
            href={`/dealers/${d.slug}/`}
            className="group flex flex-col rounded-3xl border border-forest-200/60 bg-cream-50 p-8 transition hover:-translate-y-1 hover:border-forest-500 hover:shadow-soft"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-forest-700">
              {d.state}
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest-900">
              {d.city}
            </h2>
            <p className="mt-3 text-sm text-forest-800/75">{d.servingRegion}</p>
            <p className="mt-5 text-xs text-forest-700/80">
              Key crops: {d.cropsCovered.slice(0, 5).join(', ')}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest-700 transition group-hover:text-forest-900">
              View dealer info <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl bg-forest-900 px-8 py-16 text-center text-cream-50 md:py-20">
          <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            Don&apos;t see your city?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream-100/80">
            We&apos;re actively expanding our dealer network. Call us — we can
            either route you to the nearest authorised dealer, or set you up
            with a fresh dealership in your area.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+919009169444"
              className="btn bg-cream-50 text-forest-900 hover:bg-cream-100"
            >
              +91-90091 69444
            </a>
            <Link
              href="/contact"
              className="btn border border-cream-100/30 text-cream-50 hover:bg-cream-50 hover:text-forest-900"
            >
              Become a dealer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
