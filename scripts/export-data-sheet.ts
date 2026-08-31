// Exports the Steel City Cleanouts PSEO inventory as a data sheet CSV
// matching seo-playbook/templates/data-sheet-template.csv columns.
// Run: npx -y tsx scripts/export-data-sheet.ts
import { writeFileSync } from "node:fs";
import { allComboPages } from "../src/lib/combo-data";
import { pricingPages } from "../src/lib/pricing-data";
import { resources } from "../src/lib/resources-data";

const OUT =
  process.env.DATA_SHEET_OUT ??
  "C:/Users/Jorda/Projects/seo-playbook/properties/steel-city-cleanouts-data-sheet.csv";

const HEADER = [
  "slug","variable_1","variable_2","page_title","meta_title","meta_description",
  "key_stat_1","key_stat_2","key_stat_3","local_context",
  "faq_1","faq_2","faq_3","copy_for_ai",
  "internal_link_1","internal_link_2","internal_link_3","status","launch_batch",
];

function esc(v: string | undefined): string {
  const s = (v ?? "").replace(/\r?\n/g, " ").trim();
  if (s.includes(",") || s.includes('"')) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

const rows: string[][] = [];

for (const c of allComboPages()) {
  const { service, area, combo } = c;
  const qf = service.quickFacts ?? [];
  rows.push([
    `/services/${service.slug}/in/${area.slug}`,
    service.shortName,
    area.fullName,
    combo.title,
    combo.seoTitle,
    combo.seoDescription,
    qf[0] ? `${qf[0].label}: ${qf[0].value}` : service.pricingAnchor,
    qf[1] ? `${qf[1].label}: ${qf[1].value}` : "",
    qf[2] ? `${qf[2].label}: ${qf[2].value}` : "",
    combo.localAngle,
    combo.faqs[0]?.q ?? "",
    combo.faqs[1]?.q ?? "",
    combo.faqs[2]?.q ?? "",
    combo.copyForAi,
    `/services/${service.slug}`,
    `/service-areas/${area.slug}`,
    "/pricing",
    "live",
    "phase4",
  ]);
}

for (const p of pricingPages) {
  rows.push([
    `/pricing/${p.slug}`,
    "pricing",
    p.category,
    p.name,
    p.seoTitle,
    p.seoDescription,
    p.rows[0] ? `${p.rows[0].label}: ${p.rows[0].price}` : p.pricingAnchor,
    p.rows[1] ? `${p.rows[1].label}: ${p.rows[1].price}` : "",
    p.rows[2] ? `${p.rows[2].label}: ${p.rows[2].price}` : "",
    p.intro,
    p.faqs[0]?.q ?? "",
    p.faqs[1]?.q ?? "",
    p.faqs[2]?.q ?? "",
    p.citableSnippet,
    "/pricing",
    p.relatedSlugs?.[0] ? `/pricing/${p.relatedSlugs[0]}` : "/services",
    p.relatedSlugs?.[1] ? `/pricing/${p.relatedSlugs[1]}` : "/contact",
    "live",
    "phase5.1",
  ]);
}

for (const r of resources as unknown as { slug: string; seoTitle?: string; seoDescription?: string; name?: string; title?: string }[]) {
  rows.push([
    `/resources/${r.slug}`,
    "resource",
    "PA / Pittsburgh",
    r.title ?? r.name ?? r.slug,
    r.seoTitle ?? "",
    r.seoDescription ?? "",
    "", "", "", "",
    "", "", "", "",
    "/services", "/pricing", "/contact",
    "live",
    "phase4",
  ]);
}

// Planned patterns from research/programmatic-seo/2026-04-15/strategy.md
const planned: Array<[string, string, string, string]> = [
  ...["hot-tub","piano","pool","mattress","refrigerator","couch","tire","tv","treadmill","washer-dryer","water-heater","shed"]
    .map((i) => [`/services/item-removal/${i}`, "item removal", i, "A"] as [string,string,string,string]),
  ...["pittsburgh-junk-removal-companies","steel-city-vs-1-800-got-junk","steel-city-vs-junk-king","steel-city-vs-loadup","steel-city-vs-college-hunks","steel-city-vs-gi-haul","steel-city-vs-junkluggers","steel-city-vs-two-men-junk-truck"]
    .map((c) => [`/compare/${c}`, "comparison", c, "C"] as [string,string,string,string]),
  ...["after-losing-a-parent","downsizing-to-smaller-home","selling-parents-house","moving-out-of-state","divorce-move-out","senior-moving-to-assisted-living","prepping-for-estate-sale","after-probate-closes"]
    .map((s) => [`/situations/${s}`, "situation", s, "D"] as [string,string,string,string]),
  ...["pa-probate-timeline","pennsylvania-estate-executor-checklist","allegheny-county-hoarding-task-force","pittsburgh-donation-pickup-guide","pittsburgh-transfer-stations"]
    .map((t) => [`/resources/${t}`, "PA resource", t, "E"] as [string,string,string,string]),
  // Regional area pages surfaced by the weekly loop (2026-08-31): "junk removal north hills" had no matching page.
  ...["north-hills"]
    .map((a) => [`/service-areas/${a}`, "area", a, "area-regional"] as [string,string,string,string]),
];

for (const [slug, v1, v2, pattern] of planned) {
  rows.push([slug, v1, v2, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "planned", `pattern-${pattern}`]);
}

const csv = [HEADER, ...rows].map((r) => r.map(esc).join(",")).join("\n") + "\n";
writeFileSync(OUT, csv, "utf8");
console.log(`Wrote ${rows.length} rows to ${OUT}`);
