---
description: Run the weekly Steel City Cleanouts SEO loop (GSC pull, fix laggards, build toward risers, reindex)
---

Run the Steel City Cleanouts weekly SEO loop from the playbook (canonical: GitHub repo jpeacock95/seo-playbook, templates/weekly-loop.md). Do every step without asking permission. Read `GEO_RULES.md` first; it applies to every change.

## Steps

1. **Pull data:**
   - `python C:/Users/hocke/tools/google_api.py search-console query --site "sc-domain:steelcitycleanouts.com" --days 7 --limit 50`
   - `python C:/Users/hocke/tools/google_api.py search-console pages --site "sc-domain:steelcitycleanouts.com" --days 7`
   - Compare against last week if a snapshot exists in `research/weekly-loop/`; save this week's pull there as `YYYY-MM-DD.md`.

2. **Analyze:**
   - Which pages/queries gained clicks or impressions week over week?
   - Which queries sit at position 5-20 with impressions but few clicks (quick wins)?
   - Which URL prefixes are moving: /pricing/, /services/, combo pages? Build more toward what rises.

3. **Act (pick the 2-3 highest-leverage, do them now):**
   - Quick-win pages: tighten meta title toward the exact query, deepen the weakest section, add an FAQ matching the query.
   - Risers: add internal links from related pages pointing at them.
   - New query with no matching page: add a planned row to `seo-playbook/properties/steel-city-cleanouts-data-sheet.csv`.

4. **Bump `updatedAt` on every page you touched.** Each record in `services-data.ts`, `service-areas-data.ts`, `pricing-data.ts`, `item-guides-data.ts`, and `resources-data.ts` carries an `updatedAt` ISO date, and hand-built pages carry theirs in `src/lib/page-dates.ts`. The sitemap's `lastmod` reads from these. Set it to today for the pages whose visible content changed, and leave every other page alone. Do NOT bulk-update them: a sitemap that says all 199 URLs changed is the bug this replaced (see the comment at the top of `src/app/sitemap.ts`). Styling tweaks and dependency bumps do not count as changes.

5. **Verify + ship:** `npm run check` clean, commit, push to main, submit changed URLs via `python C:/Users/hocke/tools/google_api.py indexing submit --url "URL"`, Playwright check of changed pages at 1440px and 375px. GEO_RULES.md "done" criteria must pass.

6. **Log:** update PROJECT_STATUS.md and append one summary line to `research/weekly-loop/log.md` (date, what changed, why). If a batch from the rollout tracker is due (see seo-playbook/properties/steel-city-cleanouts.md), tell Jordan it's ready to run with /steelcity-batch.

7. **Monthly deep check (first run of each calendar month only):**
   - AI visibility: ask Perplexity 2-3 customer-style queries ("who does estate cleanouts in Pittsburgh", "hoarding cleanup near Cranberry Township PA") and note whether Steel City Cleanouts is cited. Track in `research/weekly-loop/ai-visibility.md`.
   - If DataForSEO MCP is available, pull live SERPs for "estate cleanout pittsburgh", "junk removal pittsburgh", "hoarding cleanup pittsburgh" (location "Pittsburgh,Pennsylvania,United States").
   - Nudge the off-site blockers if still open: GBP + reviews, named owner on /about, sameAs profiles.

8. **Report to Jordan in plain language:** what moved, what changed, what to expect. Clicks and calls, not jargon.
