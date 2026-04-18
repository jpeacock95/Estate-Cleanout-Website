# GEO Rules — Steel City Cleanouts

## When Claude Reads This

Read this file on **every** SEO, content, or website update on this project. GEO (Generative Engine Optimization) rules run alongside traditional SEO — they are not optional. A task is not "done" until this checklist passes.

---

## Site Context

- **Site:** https://www.steelcitycleanouts.com
- **Business type:** **Local service + distress purchase** (estate cleanouts, junk removal, hoarding cleanup, property cleanouts in Pittsburgh metro)
- **Why this matters:** Distress buyers (death, hoarding, foreclosure) pick the FIRST trustworthy answer. Trust signals matter more than price. Being cited by AI engines = being the default trusted option.
- **Baseline GEO score (2026-04-17):** **58/100** (up from 51 on 2026-04-14 — strong technical foundation, but off-site authority is the critical gap)
- **Latest audit:** `research/geo-audit-2026-04-14/GEO-AUDIT-REPORT.md` + run `/geo-audit` to refresh

---

## Target Queries (AI Engine Citation Goals)

- "estate cleanout Pittsburgh"
- "junk removal Pittsburgh"
- "hoarding cleanup Pittsburgh"
- "house cleanout after death Pittsburgh"
- "property cleanout Cranberry Township"
- "best estate cleanout company Pittsburgh"

---

## Universal GEO Checklist (Apply on Every Content Change)

### Content structure
- [ ] **Answer-first with empathy** — "We clean out estate homes respectfully within 1-3 days, $800-$3,500 typical." Specifics + compassion matter for distress queries.
- [ ] **Specific numbers** — 1-3 days, $800-$3,500, 2-3 crew, 1-4 truckloads, 7 days/week. This is the citable-factoid format AI engines prefer.
- [ ] **Trust signals in every paragraph** — insurance carrier name, years experience, PA DEP waste hauler registration, what to expect, privacy commitments
- [ ] **Quick Facts blocks** — extractable stat blocks (already on estate cleanouts page — pattern for every service page)
- [ ] **Self-contained FAQ Q&As** (2-4 sentences each)
- [ ] **One H1 per page**
- [ ] **Empathy + privacy section** on sensitive services (hoarder cleanouts, estate cleanouts after death)

### Schema markup (strong foundation — don't let it regress)
- [ ] **LocalBusiness schema** on every page (currently excellent — geo coords, hours, price range, hasOfferCatalog, areaServed with 11 cities)
- [ ] **Service schema** on every service page
- [ ] **FAQPage schema** on every page with FAQs
- [ ] **BreadcrumbList schema**
- [ ] **AggregateRating + Review schema** — CURRENTLY MISSING despite 3 named testimonials on site. Wire this up immediately on homepage and `/reviews`.
- [ ] **Person schema on `/about`** — CURRENTLY MISSING. Named owner + headshot + credentials required.
- [ ] **`sameAs` array on Organization schema** — currently empty. Required: Facebook, Instagram, LinkedIn, YouTube. Even placeholder profiles help entity resolution.
- [ ] **ContactPoint schema** on contact page
- [ ] **speakable schema** on intro paragraphs

### Technical GEO
- [ ] **Canonical URL** set
- [ ] **Meta description** 120-160 chars
- [ ] **OpenGraph + Twitter card**
- [ ] **Server-side rendered** (Next.js 16 app router)

### AI-specific files
- [ ] **`llms.txt`** live and well-structured (currently excellent — pricing, hours, counties, charity partners, exclusions)
- [ ] **`llms-full.txt`** — concatenate service pages + about + pricing (consider adding)
- [ ] **`robots.txt`** explicitly allows 15 AI crawlers (currently perfect — GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, CCBot, Bytespider, Applebot-Extended, DuckAssistBot, etc.)

### Post-publish
- [ ] Submit URL to Google Indexing API
- [ ] Update sitemap lastmod

---

## Site-Specific Rules (From 2026-04-17 Audit)

These are the actions blocking the leap from 58 → 75:

1. **CRITICAL — Google Business Profile + 5 real reviews.** The #1 highest-leverage action. GBP category: "Junk Removal Service." Request reviews from Linda M., Mark T., Rachel P. (already quoted on site). Without GBP, AI engines default to competitors for local queries.

2. **Wire up AggregateRating + Review schema** using existing testimonials. Homepage + `/reviews`. Star ratings surface in AI answers.

3. **Named owner + headshot + Person schema on `/about`.**
   - Owner's full name (public)
   - Real headshot
   - Insurance carrier name (builds trust for distress buyers)
   - PA DEP waste hauler registration number (if applicable)
   - Years in cleanout business
   - Full Person schema with sameAs links
   - Without this, the "who am I trusting with my dead mother's house" question goes unanswered.

4. **`sameAs` social profiles on Organization schema.** Create barebones Facebook, Instagram, LinkedIn company profiles. Even if inactive, they anchor entity resolution. Add to Organization JSON-LD.

5. **Brand disambiguation — critical.** Confusion risk:
   - Steel City **Hauling** (competitor)
   - Steel City **Junk Removal** (Braddock, PA — 9 years old, BBB-listed, different business)
   - Steel City **Property Services**
   Add to `/about`: "not affiliated with Steel City Hauling or Steel City Junk Removal (Braddock)." Add unique brand phrase in meta descriptions: "Cranberry-based, family-owned since 2026" to prevent AI entity collision.

6. **BBB accreditation** (~$700/yr). Heavily cited in AI "best cleanout company" answers. Worth it for distress-purchase trust.

7. **Reddit presence** in r/pittsburgh, r/estatesales, r/hoarding. Answer 1-2 questions/week, no sell. Reddit is heavily cited by ChatGPT for local recommendations.

8. **Service page depth rule.** Every service page must be 2,900+ words with:
   - Quick Facts block (extractable stats)
   - FAQ with 5+ questions + FAQPage schema
   - Pricing range in numbers
   - Empathy + privacy section (for sensitive services)
   - Named geographic coverage (11 cities currently on areaServed — never shrink this list)

9. **Hoarder Cleanouts page needs depth.** Currently lowest word count of the 3 service pages sampled. Add empathy + privacy + discretion section. This is the most sensitive service — trust signals must be highest here.

---

## Ongoing Maintenance Cadence

### On every content update (checklist above)

### Weekly (15 min)
- Check Google Business Profile for new reviews (once GBP exists) — respond within 24 hours
- One Reddit comment in r/pittsburgh or r/estatesales (non-promotional help)
- Search "estate cleanout Pittsburgh" in Perplexity + ChatGPT — track if cited

### Monthly (30 min)
- Add one trust signal (new review, certification, press mention, directory listing)
- Review Bing Webmaster Tools for crawl errors
- Verify llms.txt matches current sitemap
- Check for competitor mentions in AI engines (Steel City Hauling, 1-800-GOT-JUNK, Pittsburgh PA Cleanouts)

### Quarterly (1 hr)
- Re-run full GEO audit via `/geo-audit`
- Compare score to baseline (58/100 on 2026-04-17, up from 51)
- Verify schema integrity on all pages (no regressions)
- Count: GBP reviews, BBB rating, directory listings, sameAs URLs — all should grow quarterly

---

## "Done" Criteria

An SEO task is not done until:

1. Universal GEO checklist passes
2. LocalBusiness schema integrity preserved on every page
3. If touching `/about`, `/reviews`, or `/contact` — verify Person/Review/ContactPoint schema present
4. URL submitted to Google Indexing API
5. Playwright QA at 1440px + 375px
6. No regression in word count on service pages (must stay 2,900+)

---

## Baseline Numbers (Measure Against, 2026-04-17)

| Metric | Baseline | 90-day Target |
|---|---|---|
| GEO Score | 58 | 75+ |
| Google reviews | 0 | 15+ |
| AggregateRating schema | Missing | Live (homepage + /reviews) |
| Person schema on /about | Missing | Live with name + headshot |
| Organization sameAs count | 0 | 4+ (FB, IG, LI, YouTube) |
| BBB accreditation | No | Yes |
| Directory listings (Yelp, BBB, Thumbtack, Angi) | 0 | 4+ |
| Reddit mentions of brand | 0 | 5+ |
| Service page word counts | 2,900-3,850 | Hold or grow |
| AI engine cites steelcitycleanouts.com for "estate cleanout Pittsburgh" | No | ≥1 engine |

---

## References

- **Project README:** `./README.md`
- **Previous GEO audit:** `./research/geo-audit-2026-04-14/GEO-AUDIT-REPORT.md`
- **Project status:** `./PROJECT_STATUS.md`
- **GEO audit skill:** `/geo-audit` (re-run quarterly)

---

## Critical Business Note

Distress buyers (death, hoarding, foreclosure) are the primary audience. Every decision prioritizes **trust signals over conversion tactics**. Never:
- Use urgency/scarcity manipulation ("3 spots left!")
- Show stock-photo smiling families on sensitive service pages
- Hide pricing or play coy
- Use "premium" language that implies gouging
Always:
- Real people, real prices, real timelines
- Empathy for the context (loss, stress, overwhelm)
- Fast response + transparent process = trust
