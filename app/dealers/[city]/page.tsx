import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { dealers, getDealer } from '@/lib/dealers';
import { products, company } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

const SITE_URL = 'https://greengujaratnaturalfertilizer.in';

export function generateStaticParams() {
  return dealers.map((d) => ({ city: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const d = getDealer(params.city);
  if (!d) return {};
  const url = `${SITE_URL}/dealers/${d.slug}/`;
  return {
    title: d.title,
    description: d.description,
    keywords: d.keywords,
    alternates: { canonical: `/dealers/${d.slug}` },
    openGraph: {
      title: d.title,
      description: d.description,
      url,
      siteName: 'Green Gujarat Natural Fertilizer',
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: d.title,
      description: d.description,
    },
  };
}

export default function DealerCityPage({
  params,
}: {
  params: { city: string };
}) {
  const d = getDealer(params.city);
  if (!d) notFound();
  const url = `${SITE_URL}/dealers/${d.slug}/`;

  const recommended = d.recommendedProducts
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}#localbusiness`,
    name: `${company.name} — ${d.city}`,
    description: d.description,
    url,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    telephone: '+91-9009169444',
    email: company.email,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${d.city}, ${d.state}`,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: d.city,
      addressRegion: d.state,
      addressCountry: 'IN',
    },
    ...(d.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: d.geo.lat,
        longitude: d.geo.lng,
      },
    }),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Dealers',
        item: `${SITE_URL}/dealers/`,
      },
      { '@type': 'ListItem', position: 3, name: d.city, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="container-x pt-10 pb-6">
        <nav aria-label="Breadcrumb" className="text-xs text-forest-800/60">
          <Link href="/" className="hover:text-forest-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/dealers" className="hover:text-forest-900">Dealers</Link>
          <span className="mx-2">/</span>
          <span className="text-forest-900/80">{d.city}</span>
        </nav>
      </section>

      <header className="container-x pb-16">
        <p className="text-xs uppercase tracking-[0.22em] text-forest-700">
          {d.state}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-forest-900 md:text-6xl">
          Fertilizer supplier in {d.city}.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-forest-800/75">{d.intro}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="tel:+919009169444" className="btn btn-primary">
            Call +91-90091 69444
          </a>
          <Link href="/contact" className="btn btn-ghost">
            Apply for dealership
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {d.cropsCovered.map((c) => (
            <span
              key={c}
              className="rounded-full border border-forest-200/70 bg-cream-50 px-3 py-1 text-xs text-forest-800"
            >
              {c}
            </span>
          ))}
        </div>
      </header>

      <section className="bg-forest-900 py-20 text-cream-50">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.22em] text-cream-100/60">
            Local field conditions
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            What we see in {d.servingRegion.split(',')[0]} fields.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {d.localChallenges.map((ch, i) => (
              <div
                key={i}
                className="rounded-2xl border border-cream-100/15 bg-forest-800/40 p-6"
              >
                <p className="font-display text-2xl text-cream-100/50">
                  0{i + 1}
                </p>
                <h3 className="mt-4 font-display text-xl">{ch.title}</h3>
                <p className="mt-3 text-sm text-cream-100/80 leading-relaxed">
                  {ch.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {recommended.length > 0 && (
        <section className="container-x py-20">
          <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
            Recommended for {d.city} conditions
          </h2>
          <p className="mt-3 max-w-2xl text-forest-800/75">
            Based on the local soils, water quality and dominant crops, these
            are the products our dealers in {d.city} move most.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recommended.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-cream-100/60 border-y border-forest-200/60 py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 max-w-3xl space-y-6">
            {d.faqs.map((f) => (
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

      <section className="container-x py-20">
        <div className="rounded-3xl bg-forest-50/60 border border-forest-200/60 p-10 text-center md:p-14">
          <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
            Become a GGNF dealer in {d.city}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-forest-800/75">
            Competitive trade margins, dealer kits, transparent on-pack pricing
            and technical support for your customers. Reach out — we&apos;ll
            share the dealer enquiry form.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:+919009169444" className="btn btn-primary">
              Call to apply
            </a>
            <a
              href={`mailto:${company.email}?subject=Dealer%20enquiry%20%E2%80%94%20${encodeURIComponent(d.city)}`}
              className="btn btn-ghost"
            >
              Email enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
