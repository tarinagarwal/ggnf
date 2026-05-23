import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost, getRecentBlogPosts } from '@/lib/blog';
import { BlogSections } from '@/components/BlogSections';

const SITE_URL = 'https://greengujaratnaturalfertilizer.in';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const cover = `${SITE_URL}${post.cover}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: 'Green Gujarat Natural Fertilizer',
      type: 'article',
      locale: 'en_IN',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: ['Green Gujarat Natural Fertilizer'],
      images: [
        {
          url: cover,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [cover],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const cover = `${SITE_URL}${post.cover}`;
  const recent = getRecentBlogPosts(3, post.slug);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    image: [cover],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'en-IN',
    articleSection: post.category,
    keywords: post.keywords.join(', '),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
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
            <Link href="/" className="hover:text-forest-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-forest-900">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest-900/80">{post.category}</span>
          </nav>

          <p className="mt-8 text-[10px] uppercase tracking-[0.22em] text-forest-700">
            {post.category} ·{' '}
            {new Date(post.publishedAt).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
            · {post.readingMinutes} min read
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-forest-900 md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-forest-800/75">
            {post.excerpt}
          </p>
        </header>

        <div className="container-x">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-cream-100">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 1280px) 1100px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="container-x py-16">
          <div className="mx-auto max-w-3xl">
            <BlogSections sections={post.sections} />
          </div>
        </section>
      </article>

      {recent.length > 0 && (
        <section className="bg-forest-50/40 border-y border-forest-200/60 py-20">
          <div className="container-x">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
                Keep reading
              </h2>
              <Link
                href="/blog"
                className="text-sm font-medium text-forest-700 hover:text-forest-900"
              >
                All articles →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-forest-200/60 bg-cream-50 transition hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <p className="text-[10px] uppercase tracking-widest text-forest-600">
                      {p.category} · {p.readingMinutes} min
                    </p>
                    <h3 className="font-display text-lg leading-snug text-forest-900">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
