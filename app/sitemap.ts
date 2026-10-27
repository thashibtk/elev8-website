import type { MetadataRoute } from 'next';
import { services } from '@/data/services';

const SITE_URL = 'https://elev8fitnessclub.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about-us`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/portfolio`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/faqs`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...pages, ...servicePages];
}
