---
description: Ship the next drip batch of Steel City programmatic pages from the rollout tracker
argument-hint: [batch name, e.g. pattern-A-1]
---

Ship batch $ARGUMENTS (or the next pending batch if none given) of Steel City Cleanouts programmatic pages.

Source of truth: `c:\Users\Jorda\Projects\seo-playbook\properties\steel-city-cleanouts-data-sheet.csv` plus the rollout tracker in `steel-city-cleanouts.md` next to it. Full page specs per pattern: `research/programmatic-seo/2026-04-15/strategy.md`. Follow the playbook (jpeacock95/seo-playbook): drip, never dump. One batch only per run. Read `GEO_RULES.md` first.

## Batch preconditions

- **Pattern A (item removal):** needs Jordan's real per-item Pittsburgh pricing from last-90-day jobs. If missing, ask before building.
- **Pattern C (compare):** competitor pricing only from their own public pages, cited. Never fabricate. If undisclosed, say so on the page.
- **Patterns D (situations) + E (PA resources):** buildable without new data. PA legal content needs named statutes and government sources.

## Steps

1. Read the data sheet; list the planned rows in the requested batch. Confirm none already exist as routes.
2. **SERP + AI gap research:** if DataForSEO MCP available, pull live SERPs for 3-4 target keywords (location "Pittsburgh,Pennsylvania,United States"). Ask Perplexity 1-2 queries as a customer would; note who gets cited and what facts answers lack. Shape pages to fill those gaps.
3. Build data-driven: new `src/lib/*-data.ts` entries + template component per strategy.md skeletons. Every page needs all 10 anatomy parts including 3+ FAQs (FAQPage schema), Quick Facts with real numbers, plain-text Copy for AI block at bottom, 3+ internal links each way, breadcrumb + schema.
4. Voice rules: no em dashes, contractions, specific numbers, short sentences. Distress-purchase rules: no urgency manipulation, real prices, empathy on sensitive pages.
5. `npm run check` must pass clean. Update `public/llms.txt` with new pages.
6. Commit, push to main, wait for deploy, verify new pages return 200.
7. Submit every new URL: `python C:/Users/hocke/tools/google_api.py indexing submit --url "URL"`.
8. Playwright QA one new page at 1440px and 375px.
9. Regenerate the data sheet: `npx -y tsx scripts/export-data-sheet.ts` (extend script for new patterns first). Update rollout tracker + PROJECT_STATUS.md. Commit + push the seo-playbook repo too.
10. Remind Jordan: post about new pages on social/GBP once GBP exists, and next batch is ~2 weeks out, irregular cadence.
