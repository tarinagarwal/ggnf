import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Field-Tested Notes on Crop Nutrition & Soil Health',
  description:
    'Practical articles from Green Gujarat Natural Fertilizer on water-soluble NPK, chelated micronutrients, phosphogypsum and soil-conditioning techniques for Indian farms.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'GGNF Blog — Crop Nutrition & Soil Health',
    description:
      'Educational articles on fertilizer selection, application schedules and soil reclamation.',
    url: 'https://greengujaratnaturalfertilizer.in/blog/',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <>
      <section className="container-x pt-16 pb-10 md:pt-24 md:pb-16">
        <p className="text-xs uppercase tracking-[0.22em] text-forest-700">Blog</p>
        <h1 className="mt-3 font-display text-5xl leading-tight text-forest-900 md:text-7xl">
          Field-tested notes.
        </h1>
        <p className="mt-6 max-w-2xl text-forest-800/75 md:text-lg">
          Practical articles on fertilizer choice, application schedules, soil
          reclamation and the small calls that decide whether a season ends
          well — written for farmers and dealers across India.
        </p>
      </section>

      <div className="rule" />

      <section className="container-x py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}/`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-forest-200/60 bg-cream-50 transition hover:-translate-y-1 hover:border-forest-500 hover:shadow-soft"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-forest-900/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cream-50 backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-[10px] uppercase tracking-widest text-forest-600">
                  {new Date(p.publishedAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}{' '}
                  · {p.readingMinutes} min read
                </p>
                <h2 className="font-display text-xl leading-snug text-forest-900">
                  {p.title}
                </h2>
                <p className="text-sm text-forest-800/75">{p.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-medium text-forest-700 transition group-hover:text-forest-900">
                  Read article <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
