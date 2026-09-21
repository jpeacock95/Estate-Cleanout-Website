import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { serviceAreas } from "@/lib/service-areas-data";
import { resources } from "@/lib/resources-data";
import { pricingPages } from "@/lib/pricing-data";
import { allComboPages } from "@/lib/combo-data";
import { itemGuides } from "@/lib/item-guides-data";
import { asDate, newerOf, pageDate } from "@/lib/page-dates";

const SITE_URL = "https://www.steelcitycleanouts.com";

// lastModified comes from each page's own updatedAt, not from the build clock.
// Until 2026-09-20 every URL was stamped with `new Date()`, which told Google
// that all 205 pages changed on every deploy. A sitemap that claims everything
// changed every week teaches Google to ignore its lastmod, so the handful of
// pages that really did change lose the signal that would have got them
// recrawled.
//
// changeFrequency and priority are kept for completeness, but Google has said
// publicly that it ignores both. lastmod is the field that does the work, which
// is why it is the one that has to be honest.

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: pageDate("/"), changeFrequency: "weekly", priority: 1.0 },
    {
      url: `${SITE_URL}/services`,
      lastModified: pageDate("/services"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/service-areas`,
      lastModified: pageDate("/service-areas"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: pageDate("/about"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: pageDate("/contact"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: pageDate("/pricing"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/how-to-get-rid-of`,
      lastModified: pageDate("/how-to-get-rid-of"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: asDate(s.updatedAt),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const areaPages: MetadataRoute.Sitemap = serviceAreas.map((a) => ({
    url: `${SITE_URL}/service-areas/${a.slug}`,
    lastModified: asDate(a.updatedAt),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const resourcePages: MetadataRoute.Sitemap = resources.map((r) => ({
    url: `${SITE_URL}/resources/${r.slug}`,
    lastModified: asDate(r.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // The /pricing hub and its 15 detail pages were missing from the sitemap
  // entirely until 2026-09-13, despite /pricing being the second-best click
  // page on the site and /pricing/estate-cleanout ranking at position 4.
  const pricingDetailPages: MetadataRoute.Sitemap = pricingPages.map((pp) => ({
    url: `${SITE_URL}/pricing/${pp.slug}`,
    lastModified: asDate(pp.updatedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const itemGuidePages: MetadataRoute.Sitemap = itemGuides.map((g) => ({
    url: `${SITE_URL}/how-to-get-rid-of/${g.slug}`,
    lastModified: asDate(g.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // A combo page is generated from one service and one area, so it changed
  // whichever of those two changed most recently.
  const comboPages: MetadataRoute.Sitemap = allComboPages().map((c) => ({
    url: `${SITE_URL}/services/${c.service.slug}/in/${c.area.slug}`,
    lastModified: newerOf(c.service.updatedAt, c.area.updatedAt),
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
