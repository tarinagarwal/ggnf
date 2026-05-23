import type { Metadata } from 'next';
import { ProductsClient } from './products-client';
import { categories, products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'All Products — Water-Soluble NPK, Chelated Micronutrients & Organic Fertilizers',
  description:
    'Browse all 24 imported fertilizer products from Green Gujarat Natural Fertilizer — water-soluble NPK grades, EDTA chelated micronutrients, sulphur, organic manures and soil conditioners.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'All Products · Green Gujarat Natural Fertilizer',
    description:
      'Complete catalogue of 24 imported fertilizers across 7 categories.',
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
          24 imports and specialty fertilizers across seven categories. Filter
          by category or search by name.
        </p>
      </section>

      <div className="rule" />
      <ProductsClient products={products} categories={categories} />
    </>
  );
}
