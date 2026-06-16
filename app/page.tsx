import Image from 'next/image';
import Link from 'next/link';
import { categories, company, products } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import { getRecentBlogPosts } from '@/lib/blog';
import { cropGuides } from '@/lib/guides';

const featuredSlugs = [
  'fertisol-npk-19-19-19',
  'sampurna-organic-base',
  'ggnf-azotix',
];

const featured = featuredSlugs
  .map((s) => products.find((p) => p.slug === s))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const values = [
  {
    title: 'Imported quality',
    body: 'Every pack sourced to international standards — 100% water-soluble, chloride-free where it matters.',
  },
  {
    title: 'Chelated technology',
    body: 'EDTA-chelated micronutrients with superior absorption and rain-fast properties.',
  },
  {
    title: 'Full nutrition spectrum',
    body: '31 products across NPK, secondary nutrients, chelated micros, sulphur, organic and crop-protection lines.',
  },
  {
    title: 'Farmer-first pricing',
    body: 'Direct import, marketing and packing — fair MRP with GST inclusive on every bag.',
  },
];

export default function HomePage() {
  const recentPosts = getRecentBlogPosts(3);
  const recentGuides = cropGuides.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200" />
        <div className="absolute inset-0 bg-grain opacity-40 mix-blend-multiply" aria-hidden />

        <div className="container-x relative grid grid-cols-1 gap-10 pt-20 pb-24 lg:grid-cols-12 lg:gap-16 lg:pt-28 lg:pb-40">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal>
              <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-forest-700">
                <span className="h-px w-10 bg-forest-700" />
                Since day one · Ahmedabad, Gujarat
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-forest-950 md:text-7xl lg:text-[88px]">
                Nutrition that
                <br />
                <span className="italic text-forest-700">the earth</span> trusts.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-forest-800/80 md:text-lg">
                Green Gujarat Natural Fertilizer imports and markets a complete
                range of water-soluble NPK, chelated micronutrients, sulphur,
                organic manures and soil conditioners — engineered for Indian
                farms.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/products" className="btn btn-primary">
                  Explore products <span aria-hidden>→</span>
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Become a dealer
                </Link>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-forest-200/60 pt-8 max-w-xl">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-forest-700/70">Products</dt>
                  <dd className="mt-1 font-display text-3xl text-forest-900">{products.length}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-forest-700/70">Categories</dt>
                  <dd className="mt-1 font-display text-3xl text-forest-900">{categories.length}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-forest-700/70">Crops served</dt>
                  <dd className="mt-1 font-display text-3xl text-forest-900">{company.cropsCovered.length}+</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5 relative">
            <Reveal delay={150}>
              <div className="relative mx-auto aspect-[3/4] max-w-md">
                <div className="absolute inset-0 rounded-[2rem] bg-forest-800" />
                <div className="absolute inset-2 overflow-hidden rounded-[1.75rem] bg-cream-100">
                  <Image
                    src="/products/fertisol-npk-19-19-19.jpg"
                    alt="Fertisol NPK 19:19:19 — 100% water-soluble balanced NPK fertilizer pack"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-2xl bg-cream-50 p-5 shadow-deep border border-forest-200/60">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-forest-600">Featured</p>
                  <p className="mt-1 font-display text-lg leading-tight text-forest-900">
                    Fertisol NPK 19:19:19
                  </p>
                  <p className="mt-1 text-xs text-forest-800/70">
                    Balanced · 100% water-soluble
                  </p>
                </div>
                <div className="absolute -top-5 -right-5 rounded-full bg-cream-50 px-5 py-2 text-xs font-medium text-forest-900 shadow-soft border border-forest-200/60">
                  Imported
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CROP MARQUEE */}
      <section className="border-y border-forest-200/60 bg-forest-50/40 py-6 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...company.cropsCovered, ...company.cropsCovered].map((c, i) => (
            <span
              key={i}
              className="font-display text-2xl text-forest-700/60 md:text-3xl"
            >
              {c} <span className="text-forest-300 mx-6">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="container-x py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-forest-700">A full range</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-forest-900 md:text-5xl">
                Every nutrient your field needs.
              </h2>
              <p className="mt-6 text-forest-800/75">
                From high-analysis water-soluble NPK to chelated micros and
                organic conditioners — GGNF brings the full spectrum in one
                trusted catalogue.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <Link
                  href={`/categories/${c.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-forest-200/60 bg-cream-50 p-6 transition hover:-translate-y-1 hover:border-forest-500 hover:shadow-soft"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-forest-600">
                      Category
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-forest-900">
                      {c.name}
                    </h3>
                    <p className="mt-3 text-sm text-forest-800/70">{c.description}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest-700 transition group-hover:text-forest-900">
                    View products <span aria-hidden>→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-forest-900 text-cream-50 py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cream-100/60">
                Signature line-up
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                Featured products.
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-6 py-3 text-sm font-medium hover:bg-cream-50 hover:text-forest-900 transition"
            >
              View all {products.length} products <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  href={`/products/${p.slug}`}
                  className="group relative block overflow-hidden rounded-2xl bg-cream-50 text-forest-900 transition hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 90vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 px-6 py-5">
                    <p className="text-[10px] uppercase tracking-widest text-forest-600">
                      {p.brand}
                    </p>
                    <h3 className="font-display text-xl">{p.name}</h3>
                    <p className="text-sm text-forest-800/70">{p.grade}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-x py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-forest-700">Why GGNF</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-forest-900 md:text-5xl">
                Built for the people who feed India.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 gap-px bg-forest-200/60 rounded-2xl overflow-hidden sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full bg-cream-50 p-8">
                  <p className="font-display text-2xl text-forest-900">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-xl text-forest-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-forest-800/75">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CROP GUIDES */}
      <section className="container-x py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-forest-700">
              Crop schedules
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-forest-900 md:text-5xl">
              Stage-by-stage nutrition plans.
            </h2>
            <p className="mt-4 max-w-2xl text-forest-800/75">
              Field-tested fertilizer schedules for India&apos;s major crops —
              base dose, top-dress timings, fertigation programmes and
              micronutrient corrections.
            </p>
          </div>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 rounded-full border border-forest-200/70 px-6 py-3 text-sm font-medium text-forest-700 transition hover:bg-forest-50"
          >
            All crop guides <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recentGuides.map((g) => (
            <Reveal key={g.slug}>
              <Link
                href={`/guides/${g.slug}/`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest-200/60 bg-cream-50 transition hover:-translate-y-1 hover:border-forest-500 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={g.cover}
                    alt={`${g.crop} fertilizer schedule`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-forest-900/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cream-50 backdrop-blur">
                    {g.crop}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="text-[10px] uppercase tracking-widest text-forest-600">
                    {g.season} · {g.growthDuration}
                  </p>
                  <h3 className="font-display text-xl leading-snug text-forest-900">
                    {g.crop} fertilizer schedule
                  </h3>
                  <p className="text-sm text-forest-800/70">{g.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LATEST BLOG */}
      {recentPosts.length > 0 && (
        <section className="bg-forest-50/40 border-y border-forest-200/60 py-24 md:py-32">
          <div className="container-x">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-forest-700">
                  From the blog
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-forest-900 md:text-5xl">
                  Field-tested notes.
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-medium text-forest-700 hover:text-forest-900"
              >
                All articles →
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((p) => (
                <Reveal key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}/`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest-200/60 bg-cream-50 transition hover:-translate-y-1 hover:border-forest-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={p.cover}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 90vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-6">
                      <p className="text-[10px] uppercase tracking-widest text-forest-600">
                        {p.category} · {p.readingMinutes} min
                      </p>
                      <h3 className="font-display text-lg leading-snug text-forest-900">
                        {p.title}
                      </h3>
                      <p className="text-sm text-forest-800/70">{p.excerpt}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REGIONAL LEADERSHIP */}
      <section className="container-x py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.22em] text-forest-700">
              Regional leadership
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-forest-900 md:text-5xl">
              People who answer the phone.
            </h2>
            <p className="mt-6 max-w-xl text-forest-800/75">
              Behind every bag of Fertisol is a regional head working alongside
              dealers and farmers — translating soil tests into schedules,
              walking the field at flowering, picking up the call at 7 PM.
            </p>

            <div className="mt-10 rounded-2xl border border-forest-200/70 bg-cream-50 p-6">
              <p className="text-[10px] uppercase tracking-widest text-forest-600">
                Madhya Pradesh head
              </p>
              <h3 className="mt-2 font-display text-2xl text-forest-900">
                Hemant Saraswat
              </h3>
              <p className="mt-2 text-sm text-forest-800/75">
                Indore · Dewas · Ujjain · Malwa region
              </p>
              <a
                href="tel:+919009079786"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest-700 transition hover:text-forest-900"
              >
                +91 90090 79786 <span aria-hidden>↗</span>
              </a>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest-700 transition hover:text-forest-900"
            >
              Meet the team <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream-100 border border-forest-200/60 max-w-md mx-auto">
                <Image
                  src="/brand/image.png"
                  alt="Hemant Saraswat — Madhya Pradesh Head, Green Gujarat Natural Fertilizer"
                  fill
                  sizes="(min-width: 768px) 50vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24 pt-24">
        <div className="relative overflow-hidden rounded-3xl bg-forest-800 px-8 py-20 text-center md:py-28">
          <div className="absolute inset-0 bg-grain opacity-30" aria-hidden />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-cream-50 md:text-6xl">
              Ready to stock GGNF on your shelf?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream-100/80">
              Call us, send a message, or visit our facility in Ahmedabad — we
              respond within one working day.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`tel:${company.phone}`} className="btn bg-cream-50 text-forest-900 hover:bg-cream-100">
                {company.phone}
              </a>
              <Link href="/contact" className="btn border border-cream-100/30 text-cream-50 hover:bg-cream-50 hover:text-forest-900">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
