import type { Metadata } from 'next';
import Link from 'next/link';
import { categories, products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Product Categories — NPK, Micronutrients, Sulphur & Organic Lines',
  description:
    'Explore all seven fertilizer categories from Green Gujarat Natural Fertilizer — water-soluble NPK, secondary nutrients, potassium, sulphur, micronutrients, chelated micros and organic specialty.',
  alternates: { canonical: '/categories' },
  openGraph: {
    title: 'Product Categories · Green Gujarat Natural Fertilizer',
    description:
      'Seven focused fertilizer categories covering the full crop-nutrition cycle.',
    url: 'https://greengujaratnaturalfertilizer.in/categories/',
    type: 'website',
  },
};

export default function CategoriesPage() {
  return (
    <>
      <section className="container-x pt-16 pb-10 md:pt-24 md:pb-16">
        <p className="text-xs uppercase tracking-[0.22em] text-forest-700">Browse</p>
        <h1 className="mt-3 font-display text-5xl leading-tight text-forest-900 md:text-7xl">
          Product categories.
        </h1>
        <p className="mt-5 max-w-2xl text-forest-800/75 md:text-lg">
          Seven focused categories covering the full crop-nutrition cycle —
          from seed to harvest.
        </p>
      </section>

      <div className="rule" />

      <section className="container-x py-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => {
          const count = products.filter((p) => p.category === c.slug).length;
          const sample = products.find((p) => p.category === c.slug);
          return (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-forest-200/60 bg-cream-50 p-8 transition hover:-translate-y-1 hover:border-forest-500 hover:shadow-soft"
            >
              <div className="flex items-start justify-between">
                <p className="text-[10px] uppercase tracking-[0.22em] text-forest-700">
                  Category
                </p>
                <span className="font-display text-3xl text-forest-300">
                  {String(count).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl leading-tight text-forest-900">
                {c.name}
              </h3>
              <p className="mt-3 text-sm text-forest-800/70">{c.description}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest-700 transition group-hover:text-forest-900">
                Explore {sample ? `· starting with ${sample.brand}` : ''} <span aria-hidden>→</span>
              </span>
            </Link>
          );
        })}
      </section>
    </>
  );
}
