import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { cropGuides } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Crop Fertilizer Schedules — Stage-by-Stage Nutrition Guides',
  description:
    'Crop-specific fertilizer schedules from Green Gujarat Natural Fertilizer — sugarcane, cotton, wheat and more. Stage-wise NPK, micronutrient and water-soluble fertigation plans for Indian conditions.',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Crop Fertilizer Schedules · GGNF',
    description:
      'Stage-by-stage nutrition plans for Indian crops — sugarcane, cotton, wheat and more.',
    url: 'https://greengujaratnaturalfertilizer.in/guides/',
    type: 'website',
  },
};

export default function GuidesIndexPage() {
  return (
    <>
      <section className="container-x pt-16 pb-10 md:pt-24 md:pb-16">
        <p className="text-xs uppercase tracking-[0.22em] text-forest-700">
          Crop Guides
        </p>
        <h1 className="mt-3 font-display text-5xl leading-tight text-forest-900 md:text-7xl">
          Schedules that work.
        </h1>
        <p className="mt-6 max-w-2xl text-forest-800/75 md:text-lg">
          Stage-by-stage fertilizer plans for Indian conditions — base dose,
          top-dress timings, fertigation programmes and the micronutrient
          corrections that protect yield at the critical windows.
        </p>
      </section>

      <div className="rule" />

      <section className="container-x py-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cropGuides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}/`}
            className="group flex flex-col overflow-hidden rounded-3xl border border-forest-200/60 bg-cream-50 transition hover:-translate-y-1 hover:border-forest-500 hover:shadow-soft"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={g.cover}
                alt={`${g.crop} fertilizer schedule`}
                fill
                sizes="(min-width: 1024px) 33vw, 90vw"
                className="object-cover transition duration-500 group-hover:scale-[1.05]"
              />
              <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-forest-900/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cream-50 backdrop-blur">
                {g.crop}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="text-[10px] uppercase tracking-widest text-forest-600">
                {g.season} · {g.growthDuration}
              </p>
              <h2 className="font-display text-xl leading-snug text-forest-900">
                {g.title.replace(' — Complete Nutrition Plan', '').replace(' — Boll-by-Boll Nutrition Plan', '').replace(' — Field Nutrition Plan for North & Central India', '')}
              </h2>
              <p className="text-sm text-forest-800/75">{g.excerpt}</p>
              <p className="mt-2 text-xs text-forest-700/80">
                Regions: {g.regions.slice(0, 3).join(', ')}
                {g.regions.length > 3 ? ' +' : ''}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-medium text-forest-700 transition group-hover:text-forest-900">
                Open schedule <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
