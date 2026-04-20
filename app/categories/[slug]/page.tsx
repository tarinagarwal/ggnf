import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  categories,
  getCategory,
  productsByCategory,
} from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCategory(params.slug);
  if (!c) return {};
  return {
    title: c.name,
    description: c.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();
  const items = productsByCategory(category.slug);

  return (
    <>
      <section className="container-x pt-12 pb-10">
        <nav className="text-xs text-forest-800/60">
          <Link href="/" className="hover:text-forest-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/categories" className="hover:text-forest-900">Categories</Link>
          <span className="mx-2">/</span>
          <span className="text-forest-900/80">{category.name}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.22em] text-forest-700">
              Category
            </p>
            <h1 className="mt-3 font-display text-5xl leading-tight text-forest-900 md:text-7xl">
              {category.name}
            </h1>
            <p className="mt-5 max-w-2xl text-forest-800/75 md:text-lg">
              {category.description}
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end md:items-end">
            <div className="rounded-2xl border border-forest-200/70 bg-cream-50 px-6 py-5">
              <p className="text-xs uppercase tracking-widest text-forest-700/70">
                Products in this line
              </p>
              <p className="mt-2 font-display text-4xl text-forest-900">
                {items.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      <section className="container-x py-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </section>
    </>
  );
}
