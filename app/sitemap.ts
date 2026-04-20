import type { MetadataRoute } from 'next';
import { products, categories } from '@/lib/data';

const base = 'https://greengujaratnf.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/products', '/categories', '/about', '/contact'].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/categories/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
