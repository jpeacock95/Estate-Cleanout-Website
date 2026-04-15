# Steel City Cleanouts — Programmatic SEO Workflow Output

**Date:** 2026-04-15
**Workflow:** The Boring Marketer 4-step MCP-driven programmatic SEO playbook
**Seeds:** `estate cleanout`, `junk removal`
**Model:** Claude Opus 4.6 (1M context)
**Tools used:** DataForSEO MCP (keyword research + live SERPs + Google Ads volume), Perplexity MCP (attempted gap analysis, fell back to manual), Playwright MCP (not needed — SERP data was sufficient)

---

## What's in this folder

| File | Purpose |
|------|---------|
| [README.md](README.md) | This file — executive summary and navigation |
| [keyword-research.md](keyword-research.md) | Step 1 output — 578 unique keywords across both seeds, filtered and clustered |
| [keywords_all.csv](keywords_all.csv) | Full raw keyword data with volume, competition, CPC, intent, opportunity score |
| [parse_keywords.py](parse_keywords.py) | The parser that generated the research files (re-runnable) |
| [gap-analysis.md](gap-analysis.md) | Step 2 output — real top-10 SERP analysis for 5 priority keywords + top 3 highest-leverage gaps |
| [strategy.md](strategy.md) | Step 3 output — 49-page programmatic SEO strategy with URL structure, templates, internal linking, 30/60/90 plan |
| [demo-hot-tub-removal-pittsburgh.md](demo-hot-tub-removal-pittsburgh.md) | Step 4 output — full demo page built end-to-end with schema, voice compliance check, and scale-up checklist |

---

## TL;DR

Steel City Cleanouts is **not** in the top 10 for any of the 5 priority keywords tested. Existing 138-page inventory has strong technical GEO (92/100) but no pages target the three biggest content gaps in the Pittsburgh cleanout SERP:

1. **Pricing transparency.** Every top-10 Pittsburgh operator hides prices behind a quote form. Google AI Overview pulls pricing tables from national pages for `junk removal cost` but has zero Pittsburgh data to cite.
2. **Competitor comparisons.** Seven national brands rank in Pittsburgh. Zero operators have built comparison pages. Reddit threads prove the intent ("1800GOTJUNK is expensive") but nobody is packaging it.
3. **PA-specific legal/process content.** Not one competitor touches PA probate, executor timelines, or Allegheny County Hoarding Task Force partnerships. This is the largest E-E-A-T gap.

**Recommendation:** Build 49 new pages across five programmatic patterns, prioritized by leverage. Full detail in [strategy.md](strategy.md).

## The 49 proposed new pages

| Pattern | Count | URL prefix | Priority | Phase |
|---------|-------|-----------|----------|-------|
| **A. Item-specific removal** (piano, hot tub, pool, mattress, fridge, tire, TV, couch, treadmill, washer/dryer, water heater, shed) | 12 | `/services/item-removal/` | P0 | Days 31–90 |
| **B. Pricing hub** (by-load-size, by-item, by-service, vs-dumpster, vs-diy, pittsburgh-vs-national, surcharges, same-day) | 16 | `/pricing/` | **P0** | Days 0–30 |
| **C. Competitor comparison** (1 hub + 7 comparisons: 1-800-GOT-JUNK, Junk King, LoadUp, College Hunks, G.I.HAUL, Junkluggers, Two Men Junk Truck) | 8 | `/compare/` | P0 | Days 31–60 |
| **D. Situation pages** (after-death, downsizing, selling-parents-house, moving-out-of-state, divorce, senior-moving, estate-sale-prep, after-probate) | 8 | `/situations/` | P1 | Days 61–90 |
| **E. PA resources** (PA probate timeline, PA executor checklist, Allegheny hoarding task force, Pittsburgh donation guide, Pittsburgh transfer stations) | 5 | `/resources/` | P1 | Days 61–90 |
| **Total** | **49** | | | |

## Key metrics from the keyword research

- **578 unique keywords** pulled across both seeds (national US pull)
- **125 commercial/transactional** keywords with volume ≥ 20
- **Top 5 volume drivers** that map directly to the strategy:
  - `junk removal near me`: 110,000 monthly searches
  - `junk removal services near me`: 22,200
  - `junk removal company near me`: 22,200
  - `junk removal cost` + 8 pricing variants: ~60,000 aggregate
  - `furniture donation pick up`: 33,100
- **Local Pittsburgh volume validated:** `junk removal pittsburgh` = 720/mo, `furniture removal pittsburgh` = 50/mo, `estate cleanout pittsburgh` = 10/mo (low head-term but high long-tail capture potential)
- **Surprise win:** `full service junk removal company` at 22,200 volume with 0.0 competition. No operator owns this.
- **Brand comparison volume:** `1800 got-junk removal` = 12,100 at 0.03 comp, `loadup junk removal` = 14,800 at 0.22 — comparison pages have zero Pittsburgh competition

## Expected outcome at 12 months

**Conservative traffic estimate for the 49 new pages at steady state:**

| Pattern | Avg monthly organic visitors per page (yr 1) | Total |
|---------|----------|-----|
| Pricing hub (16 pages) | 40–80 | 640–1,280 |
| Item removal (12 pages) | 30–80 | 360–960 |
| Competitor comparison (8 pages) | 25–60 | 200–480 |
| Situation pages (8 pages) | 20–50 | 160–400 |
| PA resources (5 pages) | 30–100 | 150–500 |
| **Total new visitors/mo** | | **1,510–3,620** |

Plus compound benefits: AI Overview citations, reduced bounce on existing pages from better internal linking, higher average session duration from the resources hub, and defensive moat against new local operators entering the market.

## Risks and mitigations

- **Thin content risk** on item × area combo pages → explicitly skipped in the strategy; revisit only after base item pages prove they rank
- **Factual risk** on comparison pages → must cite competitor pricing from their own public pages; never fabricate
- **Schema validation risk** on pricing pages → run Google Rich Results Test on a staged version before shipping each pattern
- **Voice drift risk** on 49 new pages → automated `rg "[—–]" src/` check before every commit, same as Phase 4

## What to do next

1. Read [strategy.md](strategy.md) end-to-end
2. Validate the hot tub pricing in [demo-hot-tub-removal-pittsburgh.md](demo-hot-tub-removal-pittsburgh.md) against Jordan's actual last-90-day jobs
3. If pricing holds, spend days 0–30 building the `/pricing/` hub first (highest leverage, shortest time-to-ship)
4. Monitor Search Console weekly for impression growth on new URL prefixes
5. If any pattern produces < 5 impressions per page after 60 days, pause and debug before scaling

## Cost to run this workflow today

- DataForSEO: ~$1.20 in credits (4 keyword pulls + 5 SERP pulls + 1 Google Ads volume check)
- Perplexity: ~$0.05 (one reason call, mostly unused)
- Firecrawl / Playwright: $0 (not invoked)
- **Total: ~$1.25**
- Labor: ~90 minutes of Claude Opus 4.6 with heavy parallel tool use

## Cost to refresh monthly

~$1/mo if we re-check the 5 priority keyword ranks once a week via DataForSEO. Full workflow re-run only needed when launching a new pattern or when pages plateau.
