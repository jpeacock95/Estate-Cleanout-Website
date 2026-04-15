# Steel City Cleanouts Project Status

**Live URL:** https://www.steelcitycleanouts.com
**Last updated:** 2026-04-15
**Current phase:** Phase 5 in progress — Programmatic SEO Pattern B (Pricing hub) shipped, Patterns A/C/D/E pending

## Where we left off

Phase 5 kicked off 2026-04-15. Ran the Boring Marketer 4-step programmatic SEO workflow (DataForSEO + real SERPs + gap analysis), then shipped Pattern B (Pricing hub) the same session.

### Phase 5.1 delivered (2026-04-15)

1. **Programmatic SEO workflow run** at `research/programmatic-seo/2026-04-15/`
   - 578 unique keywords pulled from DataForSEO for seeds "estate cleanout" + "junk removal"
   - Real top-10 SERPs pulled for 5 priority keywords. Steel City ranks in zero of them.
   - Top 3 content gaps identified: pricing transparency, competitor comparisons, PA-specific legal content
   - Full 49-page strategy across 5 programmatic patterns (B Pricing, C Compare, A Item removal, D Situations, E PA resources)
   - Demo hot tub removal page written end-to-end

2. **Pattern B shipped: Pricing hub (16 URLs live in the build)**
   - `/pricing/` hub with CollectionPage schema
   - 15 child pages under `/pricing/[slug]/`
   - Categories: by-load-size (5), by-service (5), comparison (3), core (1), surcharges (1)
   - Every page has real dollar figures (from industry research, Jordan to validate against real jobs), structured pricing table, what's-included, factors, notes, example job, FAQs, and AggregateOffer + FAQPage JSON-LD
   - Total site pages: 138 to 159

3. **Nav updated**: PRICING link added between SERVICES and SERVICE AREA in `site-config.ts`

4. **Build verified**: npm run typecheck + npm run build both clean. Zero em-dashes, zero en-dashes.

### Phase 5 still to do

- **Pattern A**: Item-specific removal pages (12 pages). Needs real Pittsburgh pricing per item from Jordan's last-90-day jobs.
- **Pattern C**: Competitor comparison pages (8 pages: 1 hub + 7 competitors). Needs competitor public pricing verified.
- **Pattern D**: Situation pages (8 pages).
- **Pattern E**: PA-specific resource pages (5 pages).
- **Push + deploy + re-index**: Current session is committed locally but not pushed to origin. When pushed, submit the 16 new URLs via `google_api.py indexing submit`.
- **Validate real pricing against Jordan's actual jobs**: Pricing numbers in `src/lib/pricing-data.ts` are industry-sourced placeholders. Jordan should audit against last-90-day real invoices before these pages accumulate ranking signal.

### Phase 4 delivered

Phase 4 shipped 2026-04-14. Full GEO audit, content deepening, expansion, and new service types.

### Phase 4 delivered

1. **GEO audit report** at `research/geo-audit-2026-04-14/GEO-AUDIT-REPORT.md`
   - Overall score: 51/100 (Poor, Foundation Strong)
   - Technical GEO: 92/100 (near perfect)
   - Brand Authority: 15/100 (off-site, Jordan's work)
   - Content E-E-A-T: 45/100 (About page + credentials gap)
   - Citability: 70/100 (service pages now have citable snippets)
   - Schema: 68/100 (upgraded to 80+ after Phase 4.1)
   - Platform: 10/100 (off-site)

2. **Schema and GEO infrastructure upgrades**
   - Homepage LocalBusiness: added geo, openingHoursSpecification, priceRange, streetAddress, @id, logo, foundingDate, hasOfferCatalog
   - Sitewide Organization schema injected in `layout.tsx`
   - Area pages: LocalBusiness now carries OpeningHoursSpecification + priceRange + @id
   - Service pages: AggregateOffer with numeric lowPrice/highPrice
   - Combo pages: full provider block with hours and address
   - Citable snippets marked `data-speakable=true`

3. **llms.txt expanded**
   - New Quick Facts section with 12 extractable facts
   - Legal name, founding year, donation partners, typical pricing

4. **Service pages deepened** (10 services)
   - Every service now has: citableSnippet, typicalJob, whyUs, quickFacts, priceLow/priceHigh, 5 to 6 FAQs
   - Services: estate-cleanouts, junk-removal, appliance-removal, furniture-removal, garage-cleanouts, hoarder-cleanouts, foreclosure-cleanouts, eviction-cleanouts, construction-debris, yard-waste-removal

5. **Area pages deepened** (11 areas)
   - Every area now has: whyHere, quickFacts, expanded intro, expanded localDetails, 4 to 5 FAQs
   - Areas: pittsburgh, cranberry-township, wexford, mt-lebanon, monroeville, shadyside, squirrel-hill, upper-st-clair, sewickley, bethel-park, ross-township

6. **8 new Pittsburgh suburbs added** (+40 combo pages)
   - fox-chapel, shaler-township, penn-hills, plum-borough, moon-township, robinson-township, hampton-township, mccandless

7. **3 new service types added** (no new combo pages by design)
   - storage-unit-cleanouts
   - commercial-cleanouts
   - bereavement-cleanouts (grief-context variant of estate cleanouts)

### Total page count
86 to 138 static pages. Breakdown:
- 1 homepage
- 6 static pages (services index, areas index, about, reviews, contact, + resources index via sitemap)
- 13 service pages (10 original + 3 new)
- 19 area pages (11 original + 8 new)
- 95 combo pages (5 combo services × 19 areas, up from 55)
- 4 resource pages

### Voice compliance
Zero em dashes, zero en dashes. Verified via `rg "[—–]" src/` before commit.

### Known next steps (not yet done tonight)

- **Playwright QA** on new pages at desktop 1440×900 and mobile 390×844
- **Sitemap resubmission** via google_api.py once Vercel deploy confirms
- **Re-indexing** of top 10 new URLs (homepage, 3 new services, 8 new areas)
- **Search Console query pull** 2 to 3 weeks from now to plan first blog post
- **GBP setup** (Jordan) — biggest off-site lever for score improvement
- **First 5 reviews** (Jordan)
- **About page rewrite** with named owner, photo, insurance carrier, credentials

## Architecture

Data-driven. Content lives in `src/lib/*-data.ts`. Templates in `src/components/`. All 138 pages are static and render at build time.

**Data files:**
- `src/lib/services-data.ts` — 13 services
- `src/lib/service-areas-data.ts` — 19 areas
- `src/lib/combo-data.ts` — combo page generator (5 service slugs × 19 areas = 95)
- `src/lib/resources-data.ts` — 4 resource pages
- `src/lib/site-config.ts` — brand, NAP, hours, geo, address, sameAs array
- `src/lib/analytics.ts` — trackEvent wrapper for GA4 + Clarity

**Templates:**
- `src/components/service-page-template.tsx`
- `src/components/area-page-template.tsx`
- `src/components/combo-page-template.tsx`
- `src/components/resource-page-template.tsx`

**Shared primitives:**
- `src/components/page-hero.tsx`, `page-faq.tsx`, `page-cta.tsx`, `breadcrumbs.tsx`, `tracked-link.tsx`, `contact-form.tsx`

## Voice rules
Zero em dashes. Zero en dashes. Heavy contractions. Short sentences. Specific numbers. No corporate jargon. No hashtags. Reference `Content-Automation_Machine/voice/jordan_real_voice_profile.md` if in doubt.
