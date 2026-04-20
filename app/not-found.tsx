import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-forest-700">404</p>
      <h1 className="mt-4 font-display text-5xl text-forest-900 md:text-7xl">
        Page not found.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-forest-800/70">
        The page you&apos;re looking for doesn&apos;t exist. Try our product
        catalogue instead.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">Go home</Link>
        <Link href="/products" className="btn btn-ghost">Browse products</Link>
      </div>
    </section>
  );
}
