import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/site-config';

const routes = [
  '',
  '/about',
  '/contact',
  '/support',
  '/faq',
  '/privacy',
  '/data-policy',
  '/data-deletion',
  '/invite',
  '/terms/riders',
  '/terms/drivers',
  '/terms/company',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('terms') ? 0.6 : 0.8,
  }));
}
