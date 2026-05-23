import Link from 'next/link';
import Image from 'next/image';
import { BlogSection } from '@/lib/blog';
import { products } from '@/lib/data';

export function BlogSections({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="prose-ggnf">
      {sections.map((s, i) => {
        switch (s.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="mt-12 font-display text-3xl text-forest-900 md:text-4xl"
              >
                {s.text}
              </h2>
            );
          case 'h3':
            return (
              <h3
                key={i}
                className="mt-10 font-display text-2xl text-forest-900"
              >
                {s.text}
              </h3>
            );
          case 'p':
            return (
              <p
                key={i}
                className="mt-5 text-forest-800/85 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: s.html }}
              />
            );
          case 'ul':
            return (
              <ul
                key={i}
                className="mt-5 list-disc space-y-2 pl-6 text-forest-800/85 marker:text-forest-500"
              >
                {s.items.map((it, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol
                key={i}
                className="mt-5 list-decimal space-y-2 pl-6 text-forest-800/85 marker:text-forest-700 marker:font-medium"
              >
                {s.items.map((it, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ol>
            );
          case 'callout':
            return (
              <aside
                key={i}
                className="mt-8 rounded-2xl border border-forest-200/70 bg-forest-50/60 p-6"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-forest-700">
                  {s.title}
                </p>
                <p className="mt-3 text-forest-800/90 leading-relaxed">{s.body}</p>
              </aside>
            );
          case 'table':
            return (
              <div
                key={i}
                className="mt-8 overflow-x-auto rounded-2xl border border-forest-200/70"
              >
                <table className="w-full text-sm">
                  <thead className="bg-forest-50">
                    <tr>
                      {s.headers.map((h, j) => (
                        <th
                          key={j}
                          className="px-4 py-3 text-left font-medium text-forest-900"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.rows.map((row, j) => (
                      <tr
                        key={j}
                        className={
                          j % 2 === 0 ? 'bg-cream-50' : 'bg-cream-100/60'
                        }
                      >
                        {row.map((c, k) => (
                          <td
                            key={k}
                            className="border-t border-forest-200/40 px-4 py-3 align-top text-forest-800/85"
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'productRef': {
            const items = s.slugs
              .map((slug) => products.find((p) => p.slug === slug))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));
            if (items.length === 0) return null;
            return (
              <div key={i} className="mt-10 rounded-3xl bg-forest-900 p-8 text-cream-50">
                {s.intro && (
                  <p className="text-cream-100/80 leading-relaxed">{s.intro}</p>
                )}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {items.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}/`}
                      className="group flex items-center gap-4 rounded-2xl border border-cream-100/15 bg-forest-800/40 p-4 transition hover:border-cream-50/40 hover:bg-forest-800/70"
                    >
                      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-cream-50">
                        <Image
                          src={p.image}
                          alt={`${p.name} — ${p.subtitle}`}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-cream-100/60">
                          {p.brand}
                        </span>
                        <span className="font-display text-lg leading-tight text-cream-50">
                          {p.name}
                        </span>
                        <span className="text-xs text-cream-100/70">{p.grade}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}
