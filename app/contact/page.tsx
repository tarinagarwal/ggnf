import type { Metadata } from 'next';
import { company } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact Green Gujarat Natural Fertilizer in Ratlam, M.P. Call ${company.phone} or email ${company.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="container-x pt-16 pb-10 md:pt-24 md:pb-16">
        <p className="text-xs uppercase tracking-[0.22em] text-forest-700">Contact</p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl leading-[1.05] text-forest-900 md:text-7xl">
          Let&apos;s talk crop nutrition.
        </h1>
        <p className="mt-6 max-w-2xl text-forest-800/75 md:text-lg">
          Whether you are a farmer, dealer or distributor — we&apos;d love to
          hear from you. Reach us any of these ways.
        </p>
      </section>

      <section className="container-x pb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
        <a
          href={`tel:${company.phone}`}
          className="group rounded-3xl border border-forest-200/70 bg-cream-50 p-8 transition hover:-translate-y-1 hover:border-forest-500 hover:shadow-soft"
        >
          <p className="text-[10px] uppercase tracking-widest text-forest-600">Call</p>
          <p className="mt-6 font-display text-3xl text-forest-900">
            {company.phone}
          </p>
          <p className="mt-2 text-sm text-forest-800/70">
            Customer care · Mon–Sat · 9am to 7pm IST
          </p>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest-700 transition group-hover:text-forest-900">
            Call now <span aria-hidden>→</span>
          </span>
        </a>

        <a
          href={`mailto:${company.email}`}
          className="group rounded-3xl border border-forest-200/70 bg-cream-50 p-8 transition hover:-translate-y-1 hover:border-forest-500 hover:shadow-soft"
        >
          <p className="text-[10px] uppercase tracking-widest text-forest-600">Email</p>
          <p className="mt-6 font-display text-2xl text-forest-900 break-all">
            {company.email}
          </p>
          <p className="mt-2 text-sm text-forest-800/70">
            For dealership, bulk orders and technical queries.
          </p>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest-700 transition group-hover:text-forest-900">
            Send email <span aria-hidden>→</span>
          </span>
        </a>

        <div className="rounded-3xl border border-forest-200/70 bg-forest-900 p-8 text-cream-50">
          <p className="text-[10px] uppercase tracking-widest text-cream-100/60">Visit</p>
          <p className="mt-6 font-display text-2xl leading-tight">
            {company.name}
          </p>
          <p className="mt-3 text-sm text-cream-100/75 leading-relaxed">
            {company.address}
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Krishi+Upaj+Mandi+Namli+Ratlam"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-5 py-2 text-sm hover:bg-cream-50 hover:text-forest-900 transition"
          >
            Open in Maps <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="overflow-hidden rounded-3xl border border-forest-200/70 bg-cream-50">
          <iframe
            title="GGNF location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=75.02%2C23.30%2C75.14%2C23.38&amp;layer=mapnik&amp;marker=23.3441%2C75.0760"
            className="block h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>

      <section className="container-x pb-32">
        <div className="rounded-3xl bg-forest-50/60 border border-forest-200/60 p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-forest-900">
            Become a GGNF dealer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-forest-800/75">
            We partner with dealers across Madhya Pradesh, Gujarat, Maharashtra
            and beyond. Reach out — we&apos;ll share our dealer kit and price
            list.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${company.phone}`} className="btn btn-primary">Call to apply</a>
            <a href={`mailto:${company.email}?subject=Dealer%20enquiry`} className="btn btn-ghost">
              Email enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
