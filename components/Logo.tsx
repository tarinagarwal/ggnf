import Link from 'next/link';
import Image from 'next/image';

export function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const isLight = variant === 'light';
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Green Gujarat Natural Fertilizer — Home"
    >
      <span className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl ring-1 ring-forest-200/70">
        <Image
          src="/brand/logo.jpg"
          alt="Green Gujarat Natural Fertilizer (GGNF) — fertilizer importer in Ahmedabad, Gujarat"
          width={96}
          height={96}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      <span
        className={`hidden sm:flex flex-col leading-none ${
          isLight ? 'text-cream-50' : 'text-forest-900'
        }`}
      >
        <span className="font-display text-lg tracking-wide">Green Gujarat</span>
        <span className="text-[10px] uppercase tracking-[0.22em] opacity-70">
          Natural Fertilizer
        </span>
      </span>
    </Link>
  );
}
