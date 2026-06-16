import data from '@/content.json';

export type Composition = { label: string; value: string };

export type ProductType = 'water-soluble' | 'organic' | 'pesticides';

export const productTypes: { value: ProductType; label: string; description: string }[] = [
  { value: 'water-soluble', label: 'Water Soluble', description: 'NPK, secondary nutrients, chelates and sulphate fertilizers' },
  { value: 'organic', label: 'Organic Fertilizer', description: 'Sampurna organic manures and Super Gold soil conditioners' },
  { value: 'pesticides', label: 'Pesticides', description: 'Insecticides, fungicides and herbicides' },
];

export type Product = {
  id: number;
  slug: string;
  name: string;
  brand: string;
  productType: ProductType;
  category: string;
  image: string;
  subtitle: string;
  grade: string;
  type: string;
  packaging: string;
  composition: Composition[];
  dose?: string;
  benefits: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Company = {
  name: string;
  shortName: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  usage: string;
  cropsCovered: string[];
};

export type Content = {
  company: Company;
  categories: Category[];
  products: Product[];
};

const content = data as Content;

export const company = content.company;
export const categories = content.categories;
export const products = content.products;

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function productsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function relatedProducts(slug: string, limit = 4): Product[] {
  const current = getProduct(slug);
  if (!current) return [];
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}
