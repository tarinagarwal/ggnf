import type { Metadata } from 'next';
import { ProductsClient } from './products-client';
import { categories, products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'All Products — Water-Soluble NPK, Chelated Micronutrients & Organic Fertilizers',
  description:
    'Browse our complete catalogue from Green Gujarat Natural Fertilizer — water-soluble NPK grades, EDTA chelated micronutrients, sulphur, organic manures, soil conditioners and crop-protection products.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'All Products · Green Gujarat Natural Fertilizer',
    description:
      'Complete catalogue of fertilizers and crop-protection products across 8 categories.',
    url: 'https://greengujaratnaturalfertilizer.in/products/',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="container-x pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="text-xs uppercase tracking-[0.22em] text-forest-700">Catalogue</p>
        <h1 className="mt-3 font-display text-5xl leading-tight text-forest-900 md:text-7xl">
          All products.
        </h1>
        <p className="mt-5 max-w-2xl text-forest-800/75 md:text-lg">
          {products.length} imports and specialty products across {categories.length} categories. Filter
          by category or search by name.
        </p>
      </section>

      <div className="rule" />
      <ProductsClient products={products} categories={categories} />
    </>
  );
}
