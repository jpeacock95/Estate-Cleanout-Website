import { services, type Service } from "./services-data";
import { serviceAreas, type ServiceArea } from "./service-areas-data";

// Only the top 5 highest-volume services get combo pages (55 total combos).
// Skipping appliance/furniture/garage/construction/yard-waste combos for now
// since those are better served by their generic service pages. Search volume
// for "{area} + appliance removal" is low vs "{area} + estate cleanout".
const COMBO_SERVICE_SLUGS = [
  "estate-cleanouts",
  "junk-removal",
  "hoarder-cleanouts",
  "foreclosure-cleanouts",
  "furniture-removal",
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
    faqs: { q: string; a: string }[];
  };
};

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
  };

  const framing = serviceSpecific[service.slug] ?? `Our ${area.name} work covers every property type.`;

  return `${framing} ${area.localDetails}`;
}

function buildComboFaqs(service: Service, area: ServiceArea): { q: string; a: string }[] {
  // Pick 2 service FAQs + 1 area FAQ + 1 combo-specific FAQ.
  const serviceFaqs = service.faqs.slice(0, 2);
  const areaFaqs = area.faqs.slice(0, 1);

  const comboSpecific = {
    q: `How much does ${service.shortName.toLowerCase()} cost in ${area.name}?`,
    a:
      `${service.pricingAnchor} Pricing in ${area.name} lines up with our standard ` +
      `rates. We don't charge more because of zip code. Free estimates either over the phone ` +
      `or on-site.`,
  };

  return [...serviceFaqs, ...areaFaqs, comboSpecific];
}

export function comboServiceSlugs(): readonly string[] {
  return COMBO_SERVICE_SLUGS;
}
