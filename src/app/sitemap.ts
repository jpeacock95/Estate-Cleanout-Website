import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { serviceAreas } from "@/lib/service-areas-data";
import { resources } from "@/lib/resources-data";
import { pricingPages } from "@/lib/pricing-data";
import { allComboPages } from "@/lib/combo-data";
import { itemGuides } from "@/lib/item-guides-data";

const SITE_URL = "https://www.steelcitycleanouts.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/service-areas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/how-to-get-rid-of`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const areaPages: MetadataRoute.Sitemap = serviceAreas.map((a) => ({
    url: `${SITE_URL}/service-areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const resourcePages: MetadataRoute.Sitemap = resources.map((r) => ({
    url: `${SITE_URL}/resources/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // The /pricing hub and its 15 detail pages were missing from the sitemap
  // entirely until 2026-09-13, despite /pricing being the second-best click
  // page on the site and /pricing/estate-cleanout ranking at position 4.
  const pricingDetailPages: MetadataRoute.Sitemap = pricingPages.map((pp) => ({
    url: `${SITE_URL}/pricing/${pp.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const itemGuidePages: MetadataRoute.Sitemap = itemGuides.map((g) => ({
    url: `${SITE_URL}/how-to-get-rid-of/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const comboPages: MetadataRoute.Sitemap = allComboPages().map((c) => ({
    url: `${SITE_URL}/services/${c.service.slug}/in/${c.area.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...areaPages,
    ...pricingDetailPages,
    ...resourcePages,
    ...itemGuidePages,
    ...comboPages,
  ];
}
