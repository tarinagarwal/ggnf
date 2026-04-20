import Link from 'next/link';
import { Logo } from './Logo';
import { categories, company } from '@/lib/data';

export function Footer() {
  return (
    <footer className="relative mt-32 bg-forest-900 text-cream-100">
      <div className="container-x py-20">
        <div className="flex flex-col gap-4">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Grow with nature.<br />
              <span className="text-forest-200">Harvest with confidence.</span>
            </h2>
          </div>
          <div className="mt-6 h-px w-full bg-cream-100/20" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 text-sm leading-relaxed text-cream-100/75 max-w-sm">
              Importer and marketer of water-soluble NPK fertilizers, chelated
              micronutrients, sulphur, organic manures and soil conditioners —
              serving Indian farmers since day one from Ahmedabad, Gujarat.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.22em] text-cream-100/55">
              Products
            </h3>
            <ul className="mt-5 space-y-2 text-sm">
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/categories/${c.slug}`}
                    className="text-cream-100/80 hover:text-cream-50 transition"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-cream-100/80 hover:text-cream-50 transition">
                  All products →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-cream-100/55">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/85">
              <li>{company.address}</li>
              <li>
                <a href={`tel:${company.phone}`} className="hover:text-cream-50">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-cream-50 break-all">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream-100/15 pt-6 text-xs text-cream-100/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Green Gujarat Natural Fertilizer. All rights reserved.</p>
          <p>For Agriculture Use Only · Made in India · Imported & Packed in Ahmedabad, Gujarat</p>
        </div>
      </div>
    </footer>
  );
}
