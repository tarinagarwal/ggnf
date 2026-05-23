import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/data';

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-forest-200/60 bg-cream-50 transition hover:-translate-y-1 hover:border-forest-400 hover:shadow-soft"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.subtitle}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.05]"
          priority={priority}
        />
        <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-forest-900/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cream-50 backdrop-blur">
          {product.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[10px] uppercase tracking-[0.18em] text-forest-600">
          {product.brand}
        </p>
        <h3 className="font-display text-xl leading-snug text-forest-900">
          {product.name}
        </h3>
        <p className="text-sm text-forest-800/70">{product.subtitle}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-xs font-medium text-forest-700">
            {product.grade}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-forest-900 opacity-70 transition group-hover:opacity-100">
            View <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
