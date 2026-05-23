import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  categories,
  getCategory,
  productsByCategory,
} from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

const SITE_URL = 'https://greengujaratnaturalfertilizer.in';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCategory(params.slug);
  if (!c) return {};
  const count = productsByCategory(c.slug).length;
  const title = `${c.name} — ${count} Imported Variants`;
  const description = `${c.description} Browse ${count} ${c.name.toLowerCase()} from Green Gujarat Natural Fertilizer, Ahmedabad.`;
  const url = `${SITE_URL}/categories/${c.slug}/`;
  return {
    title,
    description,
    alternates: { canonical: `/categories/${c.slug}` },
    openGraph: {
      title: `${c.name} · GGNF`,
      description,
      url,
      siteName: 'Green Gujarat Natural Fertilizer',
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${c.name} · GGNF`,
      description,
    },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();
  const items = productsByCategory(category.slug);
  const url = `${SITE_URL}/categories/${category.slug}/`;

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    name: category.name,
    description: category.description,
    url,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/products/${p.slug}/`,
        name: p.name,
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Categories', item: `${SITE_URL}/categories/` },
      { '@type': 'ListItem', position: 3, name: category.name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="container-x pt-12 pb-10">
        <nav aria-label="Breadcrumb" className="text-xs text-forest-800/60">
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
