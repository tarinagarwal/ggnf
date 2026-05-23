import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cropGuides, getCropGuide } from '@/lib/guides';
import { BlogSections } from '@/components/BlogSections';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

const SITE_URL = 'https://greengujaratnaturalfertilizer.in';

export function generateStaticParams() {
  return cropGuides.map((g) => ({ crop: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { crop: string };
}): Metadata {
  const g = getCropGuide(params.crop);
  if (!g) return {};
  const url = `${SITE_URL}/guides/${g.slug}/`;
  const cover = `${SITE_URL}${g.cover}`;
  return {
    title: g.title,
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: {
      title: g.title,
      description: g.description,
      url,
      siteName: 'Green Gujarat Natural Fertilizer',
      type: 'article',
      locale: 'en_IN',
      images: [{ url: cover, width: 1200, height: 630, alt: g.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: g.title,
      description: g.description,
      images: [cover],
    },
  };
}

export default function CropGuidePage({ params }: { params: { crop: string } }) {
  const g = getCropGuide(params.crop);
  if (!g) notFound();
  const url = `${SITE_URL}/guides/${g.slug}/`;
  const cover = `${SITE_URL}${g.cover}`;
  const related = g.relatedProductSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: g.title,
    description: g.description,
    image: [cover],
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'en-IN',
    about: g.crop,
    keywords: g.keywords.join(', '),
    audience: {
      '@type': 'Audience',
      audienceType: 'Farmers and agri-retailers',
      geographicArea: { '@type': 'Country', name: 'India' },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Crop Guides', item: `${SITE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: g.crop, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article>
        <header className="container-x pt-10 pb-10">
          <nav aria-label="Breadcrumb" className="text-xs text-forest-800/60">
            <Link href="/" className="hover:text-forest-900">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-forest-900">Crop Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-forest-900/80">{g.crop}</span>
          </nav>

          <p className="mt-8 text-[10px] uppercase tracking-[0.22em] text-forest-700">
            {g.crop} · {g.season} · {g.growthDuration}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-forest-900 md:text-6xl">
            {g.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-forest-800/75">{g.excerpt}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {g.regions.map((r) => (
              <span
                key={r}
                className="rounded-full border border-forest-200/70 bg-cream-50 px-3 py-1 text-xs text-forest-800"
              >
                {r}
              </span>
            ))}
          </div>
        </header>

        <div className="container-x">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-cream-100">
            <Image
              src={g.cover}
              alt={`${g.crop} — ${g.title}`}
              fill
              priority
              sizes="(min-width: 1280px) 1100px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="container-x py-16">
          <div className="mx-auto max-w-3xl">
            <BlogSections sections={g.sections} />
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="bg-forest-50/40 border-y border-forest-200/60 py-20">
          <div className="container-x">
            <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
              Products used in this schedule
            </h2>
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
