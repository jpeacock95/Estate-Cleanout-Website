# GEO Audit Report: Steel City Cleanouts

**Audit Date:** 2026-04-14
**URL:** https://www.steelcitycleanouts.com
**Business Type:** Local Business (Junk Removal / Estate Cleanouts)
**Pages Analyzed:** 86 (5 page types inspected live + full source review)
**Auditor:** Claude Opus 4.6, using local source + curl + WebFetch

---

## Executive Summary

**Overall GEO Score: 51/100 (Poor, Foundation Strong)**

Steel City Cleanouts has a rock-solid technical GEO foundation. Every AI crawler is explicitly allowed, llms.txt is live and well-structured, schema is deployed on every templated page, breadcrumbs are wired up, and SSR means AI systems see full content on first fetch. That's 92/100 on Technical GEO, which is top-tier for any 2-week-old site.

The weakness is off-page. Brand authority scores 15/100 because the business is brand new: no Google Business Profile, zero reviews, no third-party mentions anywhere AI models train. Content E-E-A-T sits at 45/100 because there are no author bios, no credentials, no testimonials, and no content freshness signals. Platform Optimization at 10/100 is a direct consequence of zero external presence.

The good news: every problem is fixable, and the foundation work (tech + schema) is the hardest part. The next 30 days should focus on content deepening, GBP setup, first reviews, and a handful of schema upgrades that close the gap to 75+ without writing a single new marketing channel.

### Score Breakdown

| Category | Score | Weight | Weighted |
|---|---|---|---|
| AI Citability | 70/100 | 25% | 17.5 |
| Brand Authority | 15/100 | 20% | 3.0 |
| Content E-E-A-T | 45/100 | 20% | 9.0 |
| Technical GEO | 92/100 | 15% | 13.8 |
| Schema & Structured Data | 68/100 | 10% | 6.8 |
| Platform Optimization | 10/100 | 10% | 1.0 |
| **Overall GEO Score** | | | **51.1** |

---

## Critical Issues (Fix Immediately)

None. No blocking issues. Every AI crawler can reach the site, schema is valid, and content renders server-side.

---

## High Priority Issues (Fix This Week)

### H1. Service pages lack a citable snippet box
Area pages and combo pages both open with a bordered citable snippet (name + service + phone). Service pages don't. That's the single easiest fix with the highest AI citation yield. Every service page should open with a one-sentence citable block like:

> "Steel City Cleanouts provides same-day estate cleanouts in Pittsburgh, PA. Family-owned, fully insured. Call (585) 200-0871 for a free quote."

**File:** `src/lib/services-data.ts` (add `citableSnippet` field) + `src/components/service-page-template.tsx` (render it above the intro).

### H2. Homepage LocalBusiness schema is incomplete
The homepage LocalBusiness JSON-LD is missing: `priceRange`, `openingHoursSpecification`, `geo` (lat/lon), `streetAddress`, `postalCode`, `url`, `@id`, and `sameAs` (social profiles). AI systems use these fields to decide whether to treat the business as a canonical entity.

**File:** `src/app/page.tsx`

### H3. No Organization schema (separate from LocalBusiness)
LocalBusiness is inherited from Organization but the site doesn't expose an Organization block with `logo`, `foundingDate`, and `sameAs`. Adding one helps entity recognition across AI systems that look for Organization specifically.

**File:** `src/app/layout.tsx` (inject once, sitewide)

### H4. Thin page-level content (~300 words of unique copy per service/area page)
Service pages average ~55 word intros + 5 bullets + ~150 words of FAQ. Area pages are similar. AI citability improves significantly above the 700-word threshold, especially when the extra words are stats, comparisons, and specific narratives. Content deepening is Phase 4.2 of this engagement.

### H5. No review aggregate signals
No `AggregateRating` schema, no embedded reviews on the homepage, no testimonials with named sources. This is a chicken-and-egg problem: the business is 2 weeks old. Action item for Jordan: collect 5 reviews this week via text message to friends/family/early customers, then add Review + AggregateRating schema.

---

## Medium Priority Issues (Fix Within 1 Month)

### M1. No author attribution or team/credentials page signals
The About page tells a family story but has no named person, no headshot, no "Jordan + 3 crew members" bio, and no insurance carrier / license number / PA DEP waste hauler registration. E-E-A-T demands visible humans and verifiable credentials.

### M2. Zero content freshness signals
No blog posts, no "last updated" dates, no dated news/announcements. AI systems weigh freshness for local businesses. First blog post is blocked on 2-3 weeks of Search Console data (wait for real keyword signal before writing).

### M3. llms.txt could use "Key Numbers" and "Quick Facts" sections
Current llms.txt is solid but flat. Adding a `## Key Numbers` block (crews: 2+, trucks: 2, service area radius: 30 miles, years in business: founded 2026, counties: 2, zip codes covered: 30+) gives AI systems easy factoids to quote.

**File:** `src/app/llms.txt/route.ts`

### M4. No Person schema on About page
Name + photo + role + credentials for the owner would add an extractable Person entity to the knowledge graph. Needed for "who runs Steel City Cleanouts" queries.

### M5. Service pages don't surface stats or benchmark data
"Most two-car garages take 3 to 5 hours" is a great quotable stat buried in one FAQ. Service pages need 3-5 quotable numbers per page in a dedicated "Quick Facts" block. That makes them citation-magnets.

### M6. No Wikipedia, Reddit, or Google Knowledge Panel presence
No realistic path to Wikipedia for a 2-week-old business, but Reddit community participation (r/pittsburgh, r/cleaningtips, r/estatesales) and a Google Business Profile (eligible for a Knowledge Panel) are on the table.

---

## Low Priority Issues (Nice to Have)

### L1. Missing `speakable` schema on key pages
Adding a `speakable` specification pointing to the citable snippet box would opt the site into voice-assistant readouts.

### L2. No `BreadcrumbList` on homepage, About, Contact, Reviews
Templated pages have it, but the top-level static pages don't. Add breadcrumbs for consistency.

### L3. Service page combo grid could use schema
The "Available In" grid on service pages is 11 links to combo pages. Each link is essentially a WebPage entity. Wrapping the grid with `ItemList` schema makes it more extractable.

### L4. No `OpeningHoursSpecification` anywhere
Hours are stated in llms.txt ("7am to 8pm Eastern, 7 days a week") but not in any LocalBusiness JSON-LD. Easy fix.

### L5. Pricing is narrative, not structured
`pricingAnchor` fields are great copy but don't map to structured `Offer` / `PriceSpecification` with numeric `lowPrice` / `highPrice`. Low impact but easy win on service schema.

---

## Category Deep Dives

### AI Citability (70/100)

**Strengths:**
- Citable snippet boxes on area, combo, and resource pages (explicit brand + service + phone)
- FAQ blocks are cleanly Q/A structured on every templated page
- llms.txt gives AI systems a ready-made summary with links
- Short, direct sentences throughout (matches Jordan's voice profile, also matches how AI systems prefer to quote)
- Specific numbers in pricing anchors ($95, $295, $800 to $3,500)

**Weaknesses:**
- Service pages lack a citable snippet (H1 above)
- Average ~300 words of unique content per page is below the 700-word AI citation sweet spot
- No "quick facts" blocks with extractable stats (3-5 numbers per page)
- No stat-dense paragraphs on how jobs are priced, how long they take, how many trucks

**Sample passage from Squirrel Hill area page (good):**
> "Squirrel Hill homes are mostly 1910-1950 single-family with finished basements, walk-up attics, and one or two-car detached garages. Estate cleanouts frequently span multiple truckloads across two days."

**Sample gap from Estate Cleanouts service page (needs fix):**
> (No citable snippet block. Jumps straight into 80-word narrative intro.)

### Brand Authority (15/100)

This is the lowest score on the audit and it's 95% driven by the business age. Two weeks live, zero external signals. The fixable items for Jordan:

1. Google Business Profile (single biggest lever, takes 1 hour, free)
2. First 5 reviews from friends/family/early customers (ask this week)
3. Claim Yelp, Bing Places, Apple Maps (30 minutes each)
4. LinkedIn company page (15 minutes)

These are all off-site and blocked on Jordan doing them. Nothing to build in code.

### Content E-E-A-T (45/100)

**Experience signals (good):**
- Specific local details (street names, neighborhood quirks, zip codes)
- Knowledge of narrow staircases, row house alleys, Parking Authority coordination
- Mentions of specific pricing ranges and timelines

**Expertise signals (gap):**
- No named experts, no credentials, no licenses, no training mentions
- No "how we estimate" explanation, no methodology page

**Authoritativeness signals (gap):**
- Zero third-party citations or mentions
- No partner logos, no featured-in media
- No case studies with named clients

**Trustworthiness signals (partial):**
- "Fully insured" stated but no carrier named
- Phone number and email are real
- Family-owned framing adds trust but no face/name attached

**Biggest fix:** Add a real About page with Jordan's name, a headshot, and a 3-paragraph story. Add insurance carrier name + policy type. List any licenses or certifications (PA DEP waste hauler registration, contractor registration, etc.) if they exist.

### Technical GEO (92/100)

Near perfect. The only dings are:
- No `X-Robots-Tag` headers (Next.js handles this via meta tags, not a real issue)
- No `preload` hints for critical fonts (performance nit, not a GEO blocker)

Otherwise: AI crawlers explicitly allowed, llms.txt live at /llms.txt, sitemap.xml dynamic and accurate, SSR throughout, canonical URLs set, meta descriptions on every page, OG tags present.

### Schema & Structured Data (68/100)

| Schema Type | Homepage | Service | Area | Combo | Resource | About |
|---|---|---|---|---|---|---|
| LocalBusiness | thin | inside Service | full | full | no | no |
| Service | no | yes | no | yes | no | no |
| FAQPage | no | yes | yes | yes | yes | no |
| BreadcrumbList | no | yes | yes | yes | yes | no |
| Organization | no | no | no | no | no | no |
| Person | no | no | no | no | no | no |
| Article | no | no | no | no | yes | no |
| AggregateRating | no | no | no | no | no | no |
| Offer/Price | no | yes | no | yes | no | no |

**Fix list (in order of impact):**
1. Beef up homepage LocalBusiness (add geo, hours, price range, street address, sameAs, @id)
2. Add sitewide Organization schema in layout.tsx
3. Add Review + AggregateRating when first 5 reviews exist
4. Add Person schema on About page
5. Add numeric Offer pricing on Service schema (lowPrice/highPrice)
6. Add speakable on citable snippet blocks

### Platform Optimization (10/100)

Zero presence anywhere AI models train or cite:
- No Google Business Profile
- No Yelp
- No LinkedIn
- No YouTube
- No Reddit participation
- No Wikipedia (not eligible yet)
- No Bing Places
- No Apple Maps

All action items for Jordan, not code. GBP is the #1 lever and should be set up this week.

---

## Quick Wins (Implement This Week, In Code)

1. **Add citable snippet box to service pages** (30 min). Touches `services-data.ts` + `service-page-template.tsx`. Zero risk. Huge AI citation impact.
2. **Expand homepage LocalBusiness schema** (20 min). Add geo, openingHoursSpecification, priceRange, streetAddress, sameAs, url, @id. Touches `page.tsx`.
3. **Add sitewide Organization schema** (15 min). Touches `layout.tsx`. Inject once, covers every page.
4. **Add Person schema to About page + named owner** (20 min). Touches `about/page.tsx`. Needs Jordan's name to be public on the site.
5. **Add OpeningHoursSpecification to all LocalBusiness blocks** (15 min). Touches homepage, area template, combo template.
6. **Expand llms.txt with Quick Facts section** (10 min). Touches `llms.txt/route.ts`. Adds extractable stats AI systems love.
7. **Add numeric Offer pricing on Service schema** (15 min). Touches `service-page-template.tsx`. Uses existing pricing anchors.

Total code time: ~2 hours. Expected score lift: +8 to +12 points, bringing composite to 60-63.

## Quick Wins (Off-Site, For Jordan)

1. **Create Google Business Profile** with primary category "Junk Removal Service" (1 hour)
2. **Get 5 reviews on GBP** from friends, family, early customers (this week)
3. **Claim Yelp, Bing Places, Apple Maps** (30 min each)
4. **Create LinkedIn company page** with Jordan as founder (15 min)
5. **Sit in r/pittsburgh once a week** answering cleanout questions with no sell (ongoing)

---

## 30-Day Action Plan

### Week 1: Citability and Schema Foundations
- [ ] Add citable snippet to service pages (H1)
- [ ] Expand homepage LocalBusiness schema (H2)
- [ ] Add Organization schema sitewide (H3)
- [ ] Expand llms.txt with Quick Facts (M3)
- [ ] Jordan: set up Google Business Profile

### Week 2: Content Deepening
- [ ] Expand all 10 service pages from ~300 to ~700-900 words
- [ ] Expand all 11 area pages from ~300 to ~700-900 words
- [ ] Add Quick Facts / Quick Stats blocks with 3-5 numbers per page
- [ ] Jordan: collect first 5 reviews

### Week 3: E-E-A-T and Authority
- [ ] Rewrite About page with named owner, photo, bio (M1, M4)
- [ ] Add Person schema on About (M4)
- [ ] Add Review + AggregateRating schema once reviews exist
- [ ] Name insurance carrier on About page

### Week 4: Expansion and Polish
- [ ] Add 6-10 more service areas (+8 areas = +48 new pages)
- [ ] Add storage unit, commercial, and death-in-family service types
- [ ] Add ItemList schema on service page "Available In" grid
- [ ] Add speakable schema to citable snippet blocks
- [ ] Pull Search Console query data, plan first blog post

---

## Appendix: Pages Analyzed

| Page Type | Count | Schema Health | Word Count | Notes |
|---|---|---|---|---|
| Homepage | 1 | Thin LocalBusiness only | ~1,200 visible | Missing Organization, geo, hours, price range |
| Service pages | 10 | Good (Service + FAQPage + Breadcrumb) | ~300 unique | Missing citable snippet; content is thin |
| Service area pages | 11 | Good (LocalBusiness + FAQPage + Breadcrumb) | ~300 unique | Has citable snippet; content is thin |
| Combo pages | 55 | Excellent | ~300 unique | Has citable snippet + cross-links |
| Resource pages | 4 | Good (Article + FAQPage + Breadcrumb) | ~500 unique | Dense enough, no changes needed |
| About | 1 | None | ~400 | Needs Person + Organization |
| Contact | 1 | None | ~200 | Needs ContactPoint schema |
| Reviews | 1 | None | ~150 | Blocked on real reviews |

---

## What's NOT In This Report

- Lighthouse performance scores (out of scope for GEO audit; existing site is Next.js 16 + Vercel and is likely already fast)
- Competitor gap analysis (needs DataForSEO account)
- Search Console query data (not enough data yet, needs 2-3 weeks)
- First blog post recommendations (blocked on Search Console data)

---

## Verdict

Technically the site is GEO-ready. Everything that blocks AI systems from citing Steel City Cleanouts is either (a) off-site authority work that only Jordan can do, or (b) content depth that takes ~2 hours of writing per page batch. In the next session, tackle the Week 1 quick wins and content deepening in that order. The score should move from 51 to 62-65 without any external work, and to 75+ once GBP and first reviews are live.
