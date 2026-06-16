import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { company, categories } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About GGNF — Fertilizer Importer & Marketer in Ahmedabad, Gujarat',
  description:
    'Green Gujarat Natural Fertilizer (GGNF) imports, packs and markets premium water-soluble NPK, chelated micronutrients, sulphur, organic manures and soil conditioners from Odhav, Ahmedabad — across three brands: Fertisol, Sampurna and Super Gold.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About GGNF — Fertilizer Importer in Ahmedabad, Gujarat',
    description:
      'Importer and marketer of Fertisol, Sampurna and Super Gold fertilizers since day one.',
    url: 'https://greengujaratnaturalfertilizer.in/about/',
    type: 'website',
  },
};

const pillars = [
  {
    n: '01',
    title: 'Sourced globally',
    body: 'Every Fertisol pack is imported to specification — we do not cut corners on purity or solubility.',
  },
  {
    n: '02',
    title: 'Packed in Ahmedabad',
    body: 'Packing and marketing out of our Bileshwar Industrial Estate facility in Odhav, Ahmedabad, Gujarat.',
  },
  {
    n: '03',
    title: 'Chelated technology',
    body: 'EDTA-chelated micronutrients and SC formulations for superior absorption and field performance.',
  },
  {
    n: '04',
    title: 'Farmer-first',
    body: 'Fair pricing (GST inclusive), clear composition tables, and on-pack dose guidance in Hindi and English.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-x pt-16 pb-16 md:pt-24 md:pb-24">
        <p className="text-xs uppercase tracking-[0.22em] text-forest-700">About</p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl leading-[1.05] text-forest-900 md:text-7xl">
          A complete nutrition house for the Indian farmer.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-forest-800/75">
          Green Gujarat Natural Fertilizer (GGNF) imports, markets and packs
          a focused range of high-performance fertilizers from our facility in
          Ahmedabad, Gujarat. Three brands — <strong>Fertisol</strong>,{' '}
          <strong>Sampurna</strong> and <strong>Super Gold</strong> — together
          cover every stage of crop growth.
        </p>
      </section>

      <section className="bg-forest-900 text-cream-50 py-24">
        <div className="container-x grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Our promise
            </h2>
            <p className="mt-6 text-cream-100/80 leading-relaxed">
              We import only what we&apos;d put on our own field. Every bag
              carries transparent composition, batch number, date of import,
              and an inclusive MRP — no surprises for the dealer, and no
              surprises for the farmer.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-6 py-3 text-sm hover:bg-cream-50 hover:text-forest-900 transition"
            >
              Browse the full range <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 gap-px bg-cream-100/10 rounded-2xl overflow-hidden sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.n} className="h-full bg-forest-900 p-8">
                <p className="font-display text-3xl text-cream-100/50">{p.n}</p>
                <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-cream-100/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl leading-tight text-forest-900 md:text-4xl">
              Three brands. One mission.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4">
            <div className="rounded-2xl border border-forest-200/70 p-6">
              <p className="text-[10px] uppercase tracking-widest text-forest-600">Brand 01</p>
              <h3 className="mt-2 font-display text-2xl text-forest-900">Fertisol</h3>
              <p className="mt-2 text-sm text-forest-800/75">
                Our flagship imported line — 22 variants across water-soluble
                NPK, secondary nutrients, chelated micros, sulphur and specialty
                formulations.
              </p>
            </div>
            <div className="rounded-2xl border border-forest-200/70 p-6">
              <p className="text-[10px] uppercase tracking-widest text-forest-600">Brand 02</p>
              <h3 className="mt-2 font-display text-2xl text-forest-900">Sampurna</h3>
              <p className="mt-2 text-sm text-forest-800/75">
                Organic manure for holistic soil health — balanced NPK with 14%
                total organic carbon for long-term fertility.
              </p>
            </div>
            <div className="rounded-2xl border border-forest-200/70 p-6">
              <p className="text-[10px] uppercase tracking-widest text-forest-600">Brand 03</p>
              <h3 className="mt-2 font-display text-2xl text-forest-900">Super Gold</h3>
              <p className="mt-2 text-sm text-forest-800/75">
                Phosphogypsum soil conditioner for saline and alkaline fields —
                calcium, sulphur, magnesium and phosphorus in one bag.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream-100 border border-forest-200/60">
              <Image
                src="/brand/image.png"
                alt="Hemant Saraswat — Madhya Pradesh Head, Green Gujarat Natural Fertilizer"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-forest-700">
              Regional leadership
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-forest-900 md:text-5xl">
              On the ground, wherever you are.
            </h2>
            <p className="mt-6 max-w-xl text-forest-800/75">
              Our regional heads work directly with dealers and farmers — from
              soil-test interpretation to scheduling fertigation programmes for
              the season ahead. Every district served, every call answered.
            </p>

            <div className="mt-10 max-w-md rounded-3xl border border-forest-200/70 bg-cream-50 p-6">
              <p className="text-[10px] uppercase tracking-widest text-forest-600">
                Madhya Pradesh head
              </p>
              <h3 className="mt-2 font-display text-2xl text-forest-900">
                Hemant Saraswat
              </h3>
              <p className="mt-2 text-sm text-forest-800/75">
                Regional lead for Indore, Dewas, Ujjain and the Malwa region.
              </p>
              <a
                href="tel:+919009079786"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest-700 transition hover:text-forest-900"
              >
                +91 90090 79786 <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100/60 border-y border-forest-200/60 py-16">
        <div className="container-x grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-forest-600">Registered office</p>
            <p className="mt-3 font-medium text-forest-900">{company.name}</p>
            <p className="mt-1 text-sm text-forest-800/75">{company.address}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-forest-600">Customer care</p>
            <a href={`tel:${company.phone}`} className="mt-3 block font-medium text-forest-900 hover:underline">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="mt-1 block text-sm text-forest-800/75 hover:underline break-all">
              {company.email}
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-forest-600">Usage</p>
            <p className="mt-3 font-medium text-forest-900">{company.usage}</p>
            <p className="mt-1 text-sm text-forest-800/75">
              Every product is clearly labelled with safety instructions in Hindi and English.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
