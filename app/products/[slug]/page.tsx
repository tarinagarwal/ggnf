import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  categories,
  company,
  getProduct,
  products,
  relatedProducts,
} from '@/lib/data';
import { getProductFaqs } from '@/lib/product-faqs';
import { ProductCard } from '@/components/ProductCard';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const SITE_URL = 'https://greengujaratnaturalfertilizer.in';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProduct(params.slug);
  if (!p) return {};
  const category = categories.find((c) => c.slug === p.category);
  const title = `${p.name} — ${p.subtitle}`;
  const description = `${p.name}: ${p.subtitle}. Grade ${p.grade}. ${p.benefits} Pack size ${p.packaging}.`;
  const url = `${SITE_URL}/products/${p.slug}/`;
  const imageUrl = `${SITE_URL}${p.image}`;
  return {
    title,
    description,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: {
      title: `${p.name} · ${p.brand}`,
      description,
      url,
      siteName: 'Green Gujarat Natural Fertilizer',
      images: [{ url: imageUrl, width: 1200, height: 1500, alt: `${p.name} — ${p.subtitle}` }],
      type: 'article',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${p.name} · ${p.brand}`,
      description,
      images: [imageUrl],
    },
    other: category ? { 'product:category': category.name } : undefined,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = relatedProducts(product.slug, 4);
  const category = categories.find((c) => c.slug === product.category);
  const url = `${SITE_URL}/products/${product.slug}/`;
  const imageUrl = `${SITE_URL}${product.image}`;
  const sku = `GGNF-${String(product.id).padStart(3, '0')}`;
  const faqs = getProductFaqs(product.slug);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name: product.name,
    sku,
    mpn: sku,
    brand: { '@type': 'Brand', name: product.brand },
    description: product.benefits,
    image: [imageUrl],
    url,
    category: category?.name,
    additionalProperty: product.composition.map((c) => ({
      '@type': 'PropertyValue',
      name: c.label,
      value: c.value,
    })),
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'IN',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products/` },
      ...(category
        ? [
            {
              '@type': 'ListItem',
              position: 3,
              name: category.name,
              item: `${SITE_URL}/categories/${category.slug}/`,
            },
            { '@type': 'ListItem', position: 4, name: product.name, item: url },
          ]
        : [{ '@type': 'ListItem', position: 3, name: product.name, item: url }]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            }),
          }}
        />
      )}

      <section className="container-x pt-10 pb-6">
        <nav aria-label="Breadcrumb" className="text-xs text-forest-800/60">
          <Link href="/" className="hover:text-forest-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-forest-900">Products</Link>
          {category && (
            <>
              <span className="mx-2">/</span>
              <Link href={`/categories/${category.slug}`} className="hover:text-forest-900">
                {category.name}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-forest-900/80">{product.name}</span>
        </nav>
      </section>

      <section className="container-x pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-cream-100 to-cream-50 border border-forest-200/60">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.subtitle}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  priority
                  className="object-cover"
                />
              </div>
              <span className="absolute left-6 top-6 z-10 inline-flex items-center rounded-full bg-forest-900/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cream-50 backdrop-blur">
                {product.type}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <p className="text-xs uppercase tracking-[0.22em] text-forest-700">
              {product.brand} · {category?.name}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-forest-900 md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-forest-800/75">{product.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-forest-900 px-4 py-2 text-xs text-cream-50">
                {product.grade}
              </span>
              <span className="rounded-full border border-forest-200/70 px-4 py-2 text-xs text-forest-900">
                Pack: {product.packaging}
              </span>
              <span className="rounded-full border border-forest-200/70 px-4 py-2 text-xs text-forest-900">
                {product.type}
              </span>
            </div>

            <div className="mt-10 space-y-8">
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-forest-700">
                  Benefits
                </h2>
                <p className="mt-3 text-forest-800/85 leading-relaxed">
                  {product.benefits}
                </p>
              </div>

              {product.dose && (
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-forest-700">
                    Dose
                  </h2>
                  <p className="mt-3 text-forest-800/85">{product.dose}</p>
                </div>
              )}

              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-forest-700">
                  Composition
                </h2>
                <div className="mt-4 overflow-hidden rounded-2xl border border-forest-200/70">
                  <table className="w-full">
                    <tbody>
                      {product.composition.map((c, i) => (
                        <tr
                          key={i}
                          className={
                            i % 2 === 0 ? 'bg-cream-50' : 'bg-cream-100/60'
                          }
                        >
                          <td className="px-5 py-3 text-sm text-forest-800">
                            {c.label}
                          </td>
                          <td className="px-5 py-3 text-right text-sm font-medium text-forest-900">
                            {c.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-forest-700">
                  Recommended for
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {company.cropsCovered.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-forest-50 px-3 py-1 text-xs text-forest-800 border border-forest-200/70"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <a href={`tel:${company.phone}`} className="btn btn-primary">
                Call to order
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="bg-cream-100/60 border-y border-forest-200/60 py-20">
          <div className="container-x">
            <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 max-w-2xl text-forest-800/75">
              Practical answers from our technical team on application,
              compatibility and field use of {product.name}.
            </p>
            <dl className="mt-10 max-w-3xl space-y-5">
              {faqs.map((f) => (
                <div
                  key={f.question}
                  className="rounded-2xl border border-forest-200/70 bg-cream-50 p-6"
                >
                  <dt className="font-display text-lg text-forest-900">
                    {f.question}
                  </dt>
                  <dd className="mt-3 text-forest-800/85 leading-relaxed">
                    {f.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-forest-50/40 border-y border-forest-200/60 py-20">
          <div className="container-x">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
                You might also need
              </h2>
              {category && (
                <Link
                  href={`/categories/${category.slug}`}
                  className="text-sm font-medium text-forest-700 hover:text-forest-900"
                >
                  All {category.name.toLowerCase()} →
                </Link>
              )}
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
