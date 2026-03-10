import type { MetadataRoute } from 'next';

const baseUrl = 'https://mhtbilisim.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['tr', 'en'];
  const pages = ['', '/hizmetler', '/hakkimizda', '/iletisim'];
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: now,
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page === '/hizmetler' ? 0.9 : 0.8,
        alternates: {
          languages: {
            tr: `${baseUrl}/tr${page}`,
            en: `${baseUrl}/en${page}`,
          },
        },
      });
    }
  }

  return entries;
}
