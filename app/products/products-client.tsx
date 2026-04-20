'use client';

import { useMemo, useState } from 'react';
import { Category, Product } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

export function ProductsClient({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const [active, setActive] = useState<string>('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = active === 'all' || p.category === active;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.grade.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [active, query, products]);

  return (
    <section className="container-x py-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActive('all')}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === 'all'
                ? 'border-forest-900 bg-forest-900 text-cream-50'
                : 'border-forest-200/70 text-forest-900 hover:border-forest-500'
            }`}
          >
            All ({products.length})
          </button>
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.slug).length;
            const on = active === c.slug;
            return (
              <button
                key={c.slug}
                onClick={() => setActive(c.slug)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  on
                    ? 'border-forest-900 bg-forest-900 text-cream-50'
                    : 'border-forest-200/70 text-forest-900 hover:border-forest-500'
                }`}
              >
                {c.name} ({count})
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-72">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, grades…"
            className="w-full rounded-full border border-forest-200/70 bg-cream-50 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-forest-800/40 focus:border-forest-500"
          />
          <svg
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-800/50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <p className="mt-6 text-sm text-forest-800/60">
        Showing {filtered.length} of {products.length} products
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-20 rounded-2xl border border-dashed border-forest-300/70 p-12 text-center">
          <p className="font-display text-2xl text-forest-900">No products match.</p>
          <p className="mt-2 text-sm text-forest-800/60">
            Try a different category or clear your search.
          </p>
        </div>
      )}
    </section>
  );
}
