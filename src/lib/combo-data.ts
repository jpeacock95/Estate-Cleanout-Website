import { services, type Service } from "./services-data";
import { serviceAreas, type ServiceArea } from "./service-areas-data";

// Only the highest-volume services get combo pages (6 services x 21 areas).
// Skipping appliance/garage/construction/yard-waste combos for now since those
// are better served by their generic service pages. Search volume for
// "{area} + appliance removal" is low vs "{area} + estate cleanout".
// basement-cleanouts added 2026-09-13: "basement cleanout near me" and
// "basement clean out near me" appeared at 48 combined impressions but position
// 81, which is Google saying it has no local page to serve for the query.
const COMBO_SERVICE_SLUGS = [
  "estate-cleanouts",
  "junk-removal",
  "hoarder-cleanouts",
  "foreclosure-cleanouts",
  "furniture-removal",
  "basement-cleanouts",
] as const;

export type ComboPage = {
  service: Service;
  area: ServiceArea;
  combo: {
    slug: string;
    title: string;
    seoTitle: string;
    seoDescription: string;
    heroHeadline: string;
    heroSub: string;
    heroImage: string;
    citableSnippet: string;
    intro: string;
    localAngle: string;
    copyForAi: string;
    faqs: { q: string; a: string }[];
  };
};

// Maps each combo service to its closest pricing page for internal linking.
const PRICING_SLUG_BY_SERVICE: Record<string, string> = {
  "estate-cleanouts": "estate-cleanout",
  "hoarder-cleanouts": "hoarder-cleanout",
  "junk-removal": "by-load-size",
  "foreclosure-cleanouts": "by-load-size",
  "furniture-removal": "by-item",
  "basement-cleanouts": "basement-cleanout",
};

export function pricingPathForService(serviceSlug: string): string {
  const slug = PRICING_SLUG_BY_SERVICE[serviceSlug];
  return slug ? `/pricing/${slug}` : "/pricing";
}

// Real geographic neighbors, not list-order neighbors. Google reads these links
// as "these places belong together," so a Bethel Park visitor (and crawler)
// lands on Mt. Lebanon and the South Hills hub instead of Fox Chapel.
const NEARBY_BY_SLUG: Record<string, string[]> = {
  pittsburgh: ["squirrel-hill", "shadyside", "south-hills"],
  "cranberry-township": ["wexford", "north-hills", "mccandless"],
  wexford: ["north-hills", "cranberry-township", "mccandless"],
  "mt-lebanon": ["south-hills", "upper-st-clair", "bethel-park"],
  monroeville: ["penn-hills", "plum-borough", "pittsburgh"],
  shadyside: ["squirrel-hill", "pittsburgh", "penn-hills"],
  "squirrel-hill": ["shadyside", "pittsburgh", "mt-lebanon"],
  "upper-st-clair": ["south-hills", "bethel-park", "mt-lebanon"],
  "south-hills": ["bethel-park", "mt-lebanon", "upper-st-clair"],
  "north-hills": ["wexford", "mccandless", "shaler-township"],
  sewickley: ["moon-township", "robinson-township", "north-hills"],
  "bethel-park": ["south-hills", "mt-lebanon", "upper-st-clair"],
  "ross-township": ["north-hills", "shaler-township", "mccandless"],
  "fox-chapel": ["shaler-township", "north-hills", "hampton-township"],
  "shaler-township": ["north-hills", "ross-township", "hampton-township"],
  "penn-hills": ["monroeville", "plum-borough", "pittsburgh"],
  "plum-borough": ["monroeville", "penn-hills", "pittsburgh"],
  "moon-township": ["robinson-township", "sewickley", "pittsburgh"],
  "robinson-township": ["moon-township", "sewickley", "pittsburgh"],
  "hampton-township": ["north-hills", "mccandless", "shaler-township"],
  mccandless: ["north-hills", "hampton-township", "wexford"],
};

export function nearbyAreas(areaSlug: string, count = 3): ServiceArea[] {
  const out: ServiceArea[] = [];
  for (const slug of NEARBY_BY_SLUG[areaSlug] ?? []) {
    const area = serviceAreas.find((a) => a.slug === slug);
    if (area && area.slug !== areaSlug) out.push(area);
    if (out.length === count) return out;
  }
  // Fallback for any area added without a neighbor list yet.
  const idx = serviceAreas.findIndex((a) => a.slug === areaSlug);
  if (idx === -1) return serviceAreas.slice(0, count);
  for (let i = 1; out.length < count && i <= serviceAreas.length; i++) {
    const candidate = serviceAreas[(idx + i) % serviceAreas.length];
    if (!out.some((a) => a.slug === candidate.slug)) out.push(candidate);
  }
  return out;
}

export function allComboPages(): ComboPage[] {
  const combos: ComboPage[] = [];
  for (const slug of COMBO_SERVICE_SLUGS) {
    const service = services.find((s) => s.slug === slug);
    if (!service) continue;
    for (const area of serviceAreas) {
      combos.push(buildCombo(service, area));
    }
  }
  return combos;
}

export function getComboPage(serviceSlug: string, areaSlug: string): ComboPage | undefined {
  if (!COMBO_SERVICE_SLUGS.includes(serviceSlug as (typeof COMBO_SERVICE_SLUGS)[number])) {
    return undefined;
  }
  const service = services.find((s) => s.slug === serviceSlug);
  const area = serviceAreas.find((a) => a.slug === areaSlug);
  if (!service || !area) return undefined;
  return buildCombo(service, area);
}

function buildCombo(service: Service, area: ServiceArea): ComboPage {
  const shortName = service.shortName;
  const areaName = area.name;
  const heroHeadline = `${shortName} in ${areaName}`;
  const seoTitle = `${shortName} ${areaName}, PA | Same-Day Service | Steel City Cleanouts`;
  const seoDescription = `Same-day ${shortName.toLowerCase()} in ${area.fullName}. ${service.pricingAnchor} Call (585) 200-0871 for a free quote.`;
  const heroSub = `${shortName} done right, across ${areaName} and the surrounding ${area.county} area.`;
  const citableSnippet = `Steel City Cleanouts offers same-day ${shortName.toLowerCase()} in ${area.fullName}. ${service.pricingAnchor} Family-owned, fully insured. Call (585) 200-0871.`;

  // Unique intro: weave service identity + area specifics together in one paragraph.
  const intro =
    `When ${areaName} homeowners, landlords, and families need ${shortName.toLowerCase()}, ` +
    `Steel City Cleanouts is the crew they call. We work every corner of ${area.fullName}, ` +
    `from ${area.neighborhoods.slice(0, 3).join(", ")} and every street in between, and we bring ` +
    `the right equipment and crew size for the kinds of properties common here.`;

  const localAngle = buildLocalAngle(service, area);

  // Plain-text paragraph for AI engines (ChatGPT, Perplexity, AI Overviews).
  // Clear factual sentences with numbers, no formatting.
  const copyForAi =
    `${shortName} in ${area.fullName} from Steel City Cleanouts. ${service.pricingAnchor} ` +
    `Serving ${area.neighborhoods.slice(0, 4).join(", ")}, and the rest of ${area.county}. ` +
    `Same-day service available 7 days a week. Family-owned, fully insured. ` +
    `Call (585) 200-0871 for a free estimate.`;

  const faqs = buildComboFaqs(service, area);

  return {
    service,
    area,
    combo: {
      slug: `${service.slug}-in-${area.slug}`,
      title: `${shortName} in ${area.fullName}`,
      seoTitle,
      seoDescription,
      heroHeadline,
      heroSub,
      heroImage: area.heroImage,
      citableSnippet,
      intro,
      localAngle,
      copyForAi,
      faqs,
    },
  };
}

function buildLocalAngle(service: Service, area: ServiceArea): string {
  // Area-specific paragraph tied to service type.
  // Uses area.localDetails as the factual base and service-specific framing.
  const serviceSpecific: Record<string, string> = {
    "estate-cleanouts":
      `Estate cleanouts in ${area.name} usually involve decades of accumulated belongings ` +
      `across multiple floors.`,
    "junk-removal":
      `Junk removal in ${area.name} ranges from single-item pickups to full truckloads.`,
    "hoarder-cleanouts":
      `Hoarder situations in ${area.name} get our full-discretion treatment. Unmarked trucks, ` +
      `flexible scheduling, and crews trained to handle heavy jobs respectfully.`,
    "foreclosure-cleanouts":
      `${area.name} REO properties need fast turnaround for listing photos and buyer walk-throughs. ` +
      `We work with banks, asset managers, and realtors on same-week trash-outs.`,
    "furniture-removal":
      `${area.name} furniture removal jobs often involve tight staircases, basement pickups, ` +
      `and disassembly of couches or beds that won't fit through the door.`,
    "basement-cleanouts":
      `Basement cleanouts in ${area.name} come down to the stairs. We send 3-person crews and ` +
      `build the carry-up into the price instead of adding a surcharge on job day, so a ` +
      `${area.name} basement full of boxes, old appliances, and 30 years of storage comes out ` +
      `in one visit and leaves a swept floor.`,
  };

  const framing = serviceSpecific[service.slug] ?? `Our ${area.name} work covers every property type.`;

  return `${framing} ${area.localDetails}`;
}

// Singular, natural-language form of each service for "best {service} in {area}"
// phrasing. "best basement cleanouts company" reads wrong; "best basement
// cleanout company" matches how people actually search.
const SINGULAR_BY_SERVICE: Record<string, string> = {
  "estate-cleanouts": "estate cleanout",
  "junk-removal": "junk removal",
  "hoarder-cleanouts": "hoarder cleanout",
  "foreclosure-cleanouts": "foreclosure cleanout",
  "furniture-removal": "furniture removal",
  "basement-cleanouts": "basement cleanout",
};

function buildComboFaqs(service: Service, area: ServiceArea): { q: string; a: string }[] {
  // Pick 2 service FAQs + 1 area FAQ + 3 combo-specific FAQs.
  const serviceFaqs = service.faqs.slice(0, 2);
  const areaFaqs = area.faqs.slice(0, 1);
  const singular = SINGULAR_BY_SERVICE[service.slug] ?? service.shortName.toLowerCase();

  const comboSpecific = {
    q: `How much does ${service.shortName.toLowerCase()} cost in ${area.name}?`,
    a:
      `${service.pricingAnchor} Pricing in ${area.name} lines up with our standard ` +
      `rates. We don't charge more because of zip code. Free estimates either over the phone ` +
      `or on-site.`,
  };

  // Targets the "best {service} {area}" query pattern. Answered with checkable
  // criteria rather than self-praise, which is what AI engines quote and what
  // the FTC expects when no verified reviews exist yet.
  const bestQuestion = {
    q: `What makes the best ${singular} company in ${area.name}?`,
    a:
      `Four things you can check before you book anyone in ${area.name}. One, current liability ` +
      `insurance you can ask to see. Two, a written all-in price before the truck loads, not an ` +
      `hourly rate that grows on job day. Three, licensed disposal with donation and metal ` +
      `recycling instead of everything going to a landfill. Four, the same person on the phone ` +
      `from the first call to the final invoice. Steel City Cleanouts is family-owned, fully ` +
      `insured, quotes one written price that includes labor, truck, and dump fees, and runs ` +
      `same-day jobs 7 days a week across ${area.fullName}.`,
  };

  // Targets "{service} near me" searches, which Google resolves geographically.
  const nearMe = {
    q: `Do you do ${singular} near me in ${area.name}?`,
    a:
      `Yes. We cover ${area.neighborhoods.slice(0, 4).join(", ")}, and the rest of ` +
      `${area.county}. Most ${area.name} jobs get scheduled same day or next day, and we work ` +
      `7 days a week. Call (585) 200-0871 and tell us the street, we'll tell you the arrival ` +
      `window before you hang up.`,
  };

  return [...serviceFaqs, ...areaFaqs, comboSpecific, bestQuestion, nearMe];
}

export function comboServiceSlugs(): readonly string[] {
  return COMBO_SERVICE_SLUGS;
}
