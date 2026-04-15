# Steel City Cleanouts — Programmatic SEO Strategy

**Date:** 2026-04-15
**Seeds:** `estate cleanout`, `junk removal`
**Scope:** Net-new pages on top of the existing 138-page inventory
**Proposed additions:** 49 new pages across 5 programmatic patterns
**Current live URL:** https://www.steelcitycleanouts.com

---

## Strategy summary

Steel City Cleanouts has the technical foundation most local operators lack. Phase 1–4 already shipped 13 service pages, 19 area pages, 95 service × area combo pages, and full GEO schema. The site has a 92/100 technical GEO score and zero em-dash voice violations. That foundation is the floor, not the ceiling.

The gap analysis found three content holes that nobody in the Pittsburgh SERP is filling:

1. **Transparent pricing** — every local operator hides prices behind a quote form
2. **Competitor comparisons** — not a single operator has built a structured comparison page
3. **Pennsylvania-specific legal / process content** — zero operators touch PA probate

This strategy turns those three holes into 49 new programmatic pages. Expected steady-state organic traffic at 12 months: **~2,100–3,800 monthly visitors** from patterns not currently captured (conservative, based on long-tail capture rates of 15–25% for pages targeting ≥100 monthly search queries).

Zero thin content risk: every page has unique value levers (real dollar figures, first-party job data, PA-specific citations, or side-by-side comparisons). No template-with-city-swap shortcuts.

---

## Playbook selection and rationale

Mapped to the 12 playbooks from the programmatic-seo skill:

| Playbook | Pattern | Why it fits |
|----------|---------|-------------|
| **Conversions / Templates** | Pricing hub (one per service, item, load size) | Real Pittsburgh pricing data is defensible, AI Overview is already pulling pricing tables for competitors, schema-marked Offers are self-executing |
| **Comparisons** | Steel City vs each major competitor | Seven competitors rank in Pittsburgh with zero comparison pages; Reddit threads prove the intent exists |
| **Templates + Glossary** | Item-specific removal pages | High-CPC items (piano $24, hot tub $13, pool $18) with dedicated searcher intent and room for real unit pricing |
| **Personas** | Situation-based empathetic pages | Estate cleanout searchers are in life transitions (loss, downsizing, divorce); empathy differentiates |
| **Glossary** | PA-specific resource pages | Zero competitor has PA probate content; this is the single biggest E-E-A-T gap |

Not using: Integrations (no API), Profiles (no proprietary entity data), Directories (thin without a supply side), Translations (wrong market).

---

## Page inventory

| Pattern | URL prefix | Count | Est. avg monthly volume / page (long tail incl.) | Priority |
|---------|-----------|-------|-----|----------|
| A. Item-specific removal | `/services/item-removal/[item]/` | 12 | 150–600 | **P0** |
| B. Pricing hub | `/pricing/` + children | 16 | 200–1,200 | **P0** |
| C. Competitor comparison | `/compare/[competitor]/` + hub | 8 | 80–400 | **P0** |
| D. Situation pages | `/situations/[situation]/` | 8 | 50–300 | **P1** |
| E. PA resources | `/resources/[topic]/` | 5 | 30–200 | **P1** |
| **Total new** | | **49** | | |

### Pattern A — Item-specific removal pages (12 pages)

One page per high-intent item. Items selected on volume + CPC + first-party fit (Steel City already handles them in the field):

| Item | National vol (item + disposal + removal) | Pittsburgh signal | CPC range |
|------|------|---|-----|
| hot tub | 890 ("hot tub removal cost") | Quoted in PAA on `junk removal pittsburgh` | $13.20 |
| piano | 1,200 ("piano removal") | Dedicated movers compete weakly | $24.60 |
| pool | 2,100 ("pool removal cost") | High-ticket, suburban demand | $18.40 |
| mattress | 4,400 ("mattress recycling services") | State law requires off-landfill routing | $6.07 |
| refrigerator | 1,200 ("refrigerator disposal") | EPA refrigerant handling angle | $7.40 |
| tire | 670 ("tire disposal services near me") | PA regulates tire disposal | $5.60 |
| television (CRT) | 900 ("tv disposal") | E-waste regulation | $6.00 |
| couch / sofa | 1,400 ("couch removal") | High-frequency | $8.00 |
| treadmill | 480 ("treadmill removal") | Low comp, high intent | $9.00 |
| washer / dryer | 1,100 ("washer dryer removal") | Appliance pickup | $7.50 |
| water heater | 390 ("water heater disposal") | Plumber handoff angle | $8.00 |
| shed (small outbuilding) | 1,900 ("shed removal services") | Tear-down + haul | $16.80 |

**Template skeleton** (one file: `src/components/item-removal-page-template.tsx`):
- H1: "[Item] Removal in Pittsburgh — What It Costs & How We Haul It"
- Meta: "Real Pittsburgh pricing for [item] removal. We pick up, haul, recycle or donate. Serving all of Allegheny County. Same-day available."
- Intro (150–250 words): why this item is a pain, what makes it different
- **Pricing table** with real $ figures + AggregateOffer schema
- "How we remove it" 5-step process
- "Where it goes" — donation / recycling / landfill routing (local partners named)
- "What you don't need to do" (disassembly, moving outside, etc.)
- 4 item-specific FAQs with FAQPage schema
- Photos of real Steel City jobs
- Internal links: `/pricing/`, parent service page, 3 adjacent item pages
- CTA: instant quote form

**Uniqueness levers:**
- Real Pittsburgh pricing (not national averages)
- First-party "this is what we charged last month for X" data
- Named local disposal/donation partners
- Item-specific regulatory content (PA refrigerant law, CRT disposal, etc.)

### Pattern B — Pricing hub (16 pages)

The highest-leverage pattern. Targets the AI Overview directly.

| URL | Target | Unique content |
|-----|--------|---------------|
| `/pricing/` | hub + all-in-one table | Full pricing schema, calculator embed |
| `/pricing/by-load-size/` | "junk removal cost" variants | Truck fill diagrams, real job examples |
| `/pricing/by-load-size/minimum-charge/` | "what is the minimum" | $99 floor, named |
| `/pricing/by-load-size/quarter-truck/` | Small loads | Real job invoice |
| `/pricing/by-load-size/half-truck/` | Mid loads | Real job invoice |
| `/pricing/by-load-size/full-truck/` | Whole-house | Real job invoice |
| `/pricing/pittsburgh-vs-national/` | Comparison table | Pittsburgh $ vs AI-cited Atlanta/Boston/LA |
| `/pricing/by-item/` | Item pricing table hub | Cross-links to 12 item pages |
| `/pricing/vs-dumpster-rental/` | "dumpster vs junk removal cost" | Decision tree |
| `/pricing/vs-diy/` | "cheapest junk removal" + "free junk removal" | Transfer station costs, donation routing |
| `/pricing/estate-cleanout/` | "estate cleanout cost" | Per-sqft framework |
| `/pricing/hoarder-cleanout/` | "hoarding cleanup cost" | Level 1-5 framework |
| `/pricing/garage-cleanout/` | "garage cleanout cost" | Single-bay vs two-bay |
| `/pricing/basement-cleanout/` | "basement cleanout cost" | Stairs surcharge logic |
| `/pricing/same-day/` | "same day junk removal cost" | Urgency surcharge, cutoff time |
| `/pricing/surcharges/` | Fees | Stairs, heavy items, biohazard, distance |

**Template skeleton:**
- H1 with keyword + Pittsburgh
- Summary paragraph answering the question in the first 40 words (LLM citability)
- **Primary pricing table** with real $ figures, marked up with schema
- "How we price" transparency section (volume-based, not item-based)
- 2–3 real anonymized job invoices ("Ross Township, March 2026: $485 — 1 sectional, 6 boxes, 1 mattress, stairs")
- FAQs with FAQPage schema
- Internal links to related pricing pages + parent service
- CTA

**Uniqueness levers:**
- Real dollar figures nobody else publishes
- Job-level invoice transparency
- Structured schema = AI Overview food
- "First 40 words" optimized for LLM snippet extraction

### Pattern C — Competitor comparison pages (8 pages)

One hub + seven individual comparisons. Built around Reddit insight ("1800GOTJUNK is expensive") and the Yelp top-10 composition.

| URL | Competitor | Pittsburgh ranking signal |
|-----|------------|---------|
| `/compare/pittsburgh-junk-removal-companies/` | Hub | All 7 below |
| `/compare/steel-city-vs-1-800-got-junk/` | 1-800-GOT-JUNK | #1 local pack on alt query |
| `/compare/steel-city-vs-junk-king/` | Junk King | #1 local pack on `junk removal pittsburgh` |
| `/compare/steel-city-vs-loadup/` | LoadUp | #1 organic on `estate cleanout pittsburgh` |
| `/compare/steel-city-vs-college-hunks/` | College Hunks | Top 10 on both primary |
| `/compare/steel-city-vs-gi-haul/` | G.I.HAUL | #2 local pack on primary |
| `/compare/steel-city-vs-junkluggers/` | Junkluggers | Top 10 on both |
| `/compare/steel-city-vs-two-men-junk-truck/` | Two Men Junk Truck | Top 10 on primary |

**Template skeleton:**
- H1: "Steel City Cleanouts vs [Competitor] in Pittsburgh — 2026 Comparison"
- Summary paragraph (first 40 words, LLM-friendly)
- **Big comparison table** with: Starting price, pricing model, response time, locally owned, what they refuse, donation routing, review count, coverage area
- "When [Competitor] is the right choice" section (fair, not hit-piece)
- "When Steel City is the better fit" section
- Real side-by-side job example (if publicly known pricing exists)
- 3 FAQs with FAQPage schema
- Internal links to pricing hub, hub comparison page, 2 other comparisons

**Uniqueness levers:**
- Structured comparison tables (LLMs love these)
- Named pricing from publicly disclosed sources (1-800-GOT-JUNK publishes ranges, College Hunks does too)
- First-party response time data
- "Locally owned" differentiation

**Risk mitigation:** Comparison pages must be factually accurate and fair. Cite the competitor's own pricing page directly. Never fabricate. If a competitor's pricing isn't disclosed publicly, say so.

### Pattern D — Situation pages (8 pages)

Persona playbook. These target emotional/contextual searches that don't fit clean keyword buckets.

| URL | Target searcher |
|-----|----------------|
| `/situations/after-losing-a-parent/` | Adult children handling estate |
| `/situations/downsizing-to-smaller-home/` | Empty nesters |
| `/situations/selling-parents-house/` | Realtor coordination |
| `/situations/moving-out-of-state/` | Relocators |
| `/situations/divorce-move-out/` | Divorce transitions |
| `/situations/senior-moving-to-assisted-living/` | Elder care |
| `/situations/prepping-for-estate-sale/` | Estate sale + cleanout combo |
| `/situations/after-probate-closes/` | Executors |

**Template skeleton:**
- H1 framing the situation empathetically
- First 40 words: what to do in the next 48 hours
- Step-by-step timeline
- Things to keep, things to donate, things to dispose decision framework
- "How we make this easier" section
- Internal links to relevant service pages and resource pages
- 3 FAQs

**Uniqueness levers:**
- Empathy and specificity no competitor provides
- Timeline frameworks
- Concrete decision guides

### Pattern E — PA resource pages (5 pages)

Glossary playbook. High-trust evergreen content that earns citations.

| URL | Target |
|-----|--------|
| `/resources/pa-probate-timeline/` | PA Orphans' Court process |
| `/resources/pennsylvania-estate-executor-checklist/` | 30/60/90 day executor guide |
| `/resources/allegheny-county-hoarding-task-force/` | Linked partnership info |
| `/resources/pittsburgh-donation-pickup-guide/` | Where things actually go |
| `/resources/pittsburgh-transfer-stations/` | McKees Rocks + others, DIY option |

**Template skeleton:**
- H1 stating the topic clearly
- Authoritative summary with citations to PA statute or government sources
- Table or checklist structure
- FAQPage schema
- Internal links to every service and situation page that touches this topic

**Uniqueness levers:**
- Named statutes and government sources
- First-party partnership info
- Zero competitor content in Pittsburgh SERP

---

## URL structure

All subfolder-based. No subdomains ever.

```
/
  /services/                    existing
    /item-removal/              NEW hub
      /[item]/                  12 new pages
  /pricing/                     NEW hub
    /by-load-size/              NEW
      /[variant]/               4 new pages
    /by-item/                   NEW
    /vs-dumpster-rental/        NEW
    /vs-diy/                    NEW
    /[service]/                 4 new pages
    /same-day/                  NEW
    /surcharges/                NEW
    /pittsburgh-vs-national/    NEW
  /compare/                     NEW hub
    /[competitor]/              7 new pages
  /situations/                  NEW hub
    /[situation]/               8 new pages
  /resources/                   existing
    /[new-topic]/               5 new pages
```

Breadcrumbs: `Home > [Hub] > [Child]`. All breadcrumbs get BreadcrumbList schema (already standardized in the site).

---

## Template work

Reuse the existing template pattern (`src/components/*-page-template.tsx`). New templates needed:

1. `item-removal-page-template.tsx` — based on service-page-template.tsx with pricing section swap
2. `pricing-page-template.tsx` — new, centers on pricing table + schema
3. `compare-page-template.tsx` — new, centers on big comparison table
4. `situation-page-template.tsx` — based on service-page-template.tsx with timeline section
5. Existing resource-page-template.tsx covers Pattern E

Data files:
- `src/lib/item-removal-data.ts` — 12 entries
- `src/lib/pricing-data.ts` — 16 entries
- `src/lib/competitors-data.ts` — 7 entries
- `src/lib/situations-data.ts` — 8 entries
- `src/lib/resources-data.ts` — extend with 5 entries

Keep the existing data-driven build pipeline. Static generation at build time, same as Phase 4.

---

## Internal linking architecture

Hub and spoke with cross-links. No orphans.

**Hub → spoke:**
- Homepage adds tiles for Pricing hub and Compare hub in the services nav
- Every service page links to its matching pricing page and its matching item pages
- Every area page links to 3 relevant pricing pages (by-load-size, by-service, same-day)

**Cross-links:**
- Every pricing page links to the matching service page + the AI-alternative to dumpster rental + 2 related pricing pages
- Every comparison page links to the pricing hub + 2 other comparisons + the relevant service page
- Every item page links to 3 adjacent items + the pricing-by-item hub + the parent service (junk removal or estate cleanout)
- Every situation page links to the relevant service + 2 resource pages + 1 item page (if applicable)
- Every resource page links to every service/situation that touches its topic

**Navigation update:**
Top nav adds a "Pricing" link. Footer adds a "Compare" column with the hub + 3 top competitor pages.

---

## Schema additions

Every new page gets:

- BreadcrumbList (already standardized)
- FAQPage where FAQs exist
- LocalBusiness / Organization (inherited from sitewide layout)

Pattern-specific:

- Pricing pages: `Offer` + `AggregateOffer` with named `priceCurrency`, `price`, `priceValidUntil`, and `eligibleRegion` set to Pittsburgh
- Item pages: `Service` + `AggregateOffer`
- Comparison pages: `ItemList` with `ComparisonElement` (structured data helps AI extraction)
- Resource pages: `Article` + `mainEntityOfPage`
- Situation pages: `Article` with `about` linking to the matching service Schema.org ID

---

## Cost projection

Build cost: zero new API spend. All content is first-party + Pittsburgh-specific knowledge from Jordan.

Monthly data refresh (optional, for pricing validation):
- DataForSEO `serp_organic_live_advanced` × 5 priority keywords × 4 checks per month = ~$0.06/mo
- DataForSEO `dataforseo_labs_google_ranked_keywords` for steelcitycleanouts.com × 1 call per month = ~$0.02/mo
- Total: under $1/mo if we refresh weekly

Labor estimate for Jordan (assuming the data files are the bottleneck):
- Pattern A (items): 12 hours (1 hr / item for research + real-job invoice anonymization)
- Pattern B (pricing): 8 hours (one pricing matrix builds most pages)
- Pattern C (competitor compare): 14 hours (2 hrs per competitor + hub)
- Pattern D (situations): 8 hours
- Pattern E (PA resources): 6 hours (legal references take the most time)
- Templates: 6 hours
- **Total: ~54 hours** of focused work, spread over 4–6 weeks

---

## 30/60/90 day execution plan

### Days 0–30: Foundation + Pattern B (Pricing hub)

Pricing hub is the highest-leverage pattern and the fastest to build because it reuses Jordan's real field data.

1. Build `pricing-page-template.tsx` and `pricing-data.ts`
2. Ship the 16 pricing pages
3. Add top-nav "Pricing" link
4. Submit all 16 URLs for indexing via `google_api.py indexing submit`
5. Add `/pricing/` to the homepage hero secondary CTA
6. Update sitemap

Expected outcome: site-wide pricing presence + first AI Overview citation attempts on "junk removal cost pittsburgh" variants within 4–6 weeks.

### Days 31–60: Pattern C (Competitor comparison) + Pattern A (Item removal, first 6)

1. Build `compare-page-template.tsx` and `competitors-data.ts`
2. Ship 1 hub + 7 comparison pages, with pricing sourced from each competitor's public page (cite the URL)
3. Build `item-removal-page-template.tsx` and `item-removal-data.ts`
4. Ship the first 6 item pages (hot tub, piano, pool, mattress, refrigerator, couch)
5. Internal linking sweep: every comparison page + item page gets bidirectional links with the pricing hub
6. Submit all new URLs for indexing
7. Pull a rank-check for the 5 priority keywords via DataForSEO to baseline

Expected outcome: comparison pages begin to accumulate impressions on "[competitor] alternative pittsburgh" queries. Item pages start ranking for long-tail item + Pittsburgh searches.

### Days 61–90: Pattern A (remaining 6 items) + Pattern D (Situations) + Pattern E (PA resources)

1. Ship remaining 6 item pages (tire, TV, treadmill, washer/dryer, water heater, shed)
2. Build `situation-page-template.tsx` and `situations-data.ts`
3. Ship 8 situation pages
4. Ship 5 PA resource pages (reuse existing `resource-page-template.tsx`)
5. Add footer "Resources" and "Compare" columns
6. Full internal-linking audit: confirm every new page has 3+ contextual inbound links

Expected outcome: 49 new pages live, full internal linking, measurable impressions growth across all 5 priority clusters.

---

## Keywords to SKIP (risk: thin content or wrong intent)

- **Neighborhood × item combos** (shadyside mattress removal, fox chapel hot tub removal) — too thin without major differentiation. Only revisit if one item page ranks extremely well and we can justify breaking it out.
- **"free junk removal" variants** — intent is "I don't want to pay." Unqualified lead. Skip unless we run a genuine donation-pickup program.
- **"1800 got junk" brand queries that aren't comparison** — no legitimate way to capture these without risking trademark complaints.
- **Pure informational queries** ("how to declutter") — wrong stage of funnel for a service business. Blog covers this, not programmatic.
- **Dumpster rental pricing as the primary target** — Steel City is not a dumpster rental operator. Use dumpster pricing only as a comparison point inside `/pricing/vs-dumpster-rental/`.

---

## Quality checks (pre-launch gate)

Before any page goes live:

- [ ] Unique H1 and meta description
- [ ] First 40 words answer the primary query directly (LLM snippet bait)
- [ ] Real dollar figures or real data, not placeholders
- [ ] Schema markup validates via `schema-markup` skill
- [ ] Voice check: zero em dashes, zero en dashes, heavy contractions, short sentences
- [ ] At least 3 contextual internal links in and out
- [ ] Mobile render verified at 390×844 via Playwright
- [ ] Desktop render verified at 1440×900 via Playwright
- [ ] URL submitted to Google Search Console indexing API

## Post-launch monitoring

Weekly for the first 8 weeks:

- `python run.py peacock quick-wins` (adapted for Steel City) to catch any keyword hitting position 11–20 that could be pushed to page 1
- DataForSEO rank check for the 5 priority keywords
- Search Console impressions/clicks delta by URL prefix (/pricing/, /compare/, /services/item-removal/)
- GA4 engagement time + conversion rate per new URL pattern

Kill criteria: if any pattern produces < 5 impressions per page after 60 days, pause further builds on that pattern and investigate.

---

## Cross-project applicability

The pricing hub + competitor comparison + PA resource patterns transfer directly to:

- **Peacock Bookkeeping Services** — pricing transparency (vs QBO ProAdvisor hourly rates), comparison pages (vs Bench, vs Pilot), PA resources (PA Dept of Revenue filing calendar)
- **JordanPeacock.com** (agency) — pricing by industry, comparison vs local SEO firms, PA-specific agency pricing

These same three patterns have earned citations in other verticals and should be reused across properties wherever the competitor SERP is thin on structured data.
