import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Green Gujarat Natural Fertilizer',
    short_name: 'GGNF',
    description:
      'Imported water-soluble NPK, chelated micronutrients, sulphur and organic fertilizers from Ahmedabad, Gujarat.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbf6ea',
    theme_color: '#1f3a2b',
    lang: 'en-IN',
    categories: ['business', 'shopping', 'agriculture'],
    icons: [
      {
        src: '/icon.jpg',
        sizes: '64x64',
        type: 'image/jpeg',
      },
      {
        src: '/apple-icon.jpg',
        sizes: '180x180',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: '/brand/logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'maskable',
      },
    ],
  };
}
