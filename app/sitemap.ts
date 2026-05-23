import type { MetadataRoute } from 'next';
import { products, categories } from '@/lib/data';
import { blogPosts } from '@/lib/blog';
import { cropGuides } from '@/lib/guides';
import { dealers } from '@/lib/dealers';

const base = 'https://greengujaratnaturalfertilizer.in';
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/products/',
    '/categories/',
    '/blog/',
    '/guides/',
    '/dealers/',
    '/about/',
    '/contact/',
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: p === '/' ? 1 : 0.8,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/categories/${c.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: new Date(p.updatedAt || p.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const guideRoutes = cropGuides.map((g) => ({
    url: `${base}/guides/${g.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const dealerRoutes = dealers.map((d) => ({
    url: `${base}/dealers/${d.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...blogRoutes,
    ...guideRoutes,
    ...dealerRoutes,
  ];
}
