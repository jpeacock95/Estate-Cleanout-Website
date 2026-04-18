# Estate Cleanout Website (Steel City Cleanouts)

## What This Project Is

Marketing site for **Steel City Cleanouts** — a Pittsburgh-area estate cleanout, junk removal, hoarding cleanup, and property cleanout business. Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, and shadcn/ui. Deployed on Vercel.

- **Live site:** https://www.steelcitycleanouts.com
- **Business type:** Local service + distress purchase
- **Service area:** Pittsburgh metro (11 cities listed in schema areaServed)

See `README.md` for full stack, project structure, and dev commands.

---

## GEO / AI Search Rules (MANDATORY on every SEO task)

**Before starting any SEO, content, schema, or metadata work on this site, read `./GEO_RULES.md`.**

That file contains the full GEO (Generative Engine Optimization) checklist for getting cited by ChatGPT, Perplexity, Google AI Overviews, Gemini, and Bing Copilot. The 2026-04-17 audit flagged three critical off-site gaps: **no Google Business Profile**, **no AggregateRating/Review schema** (despite 3 named testimonials on site), and **no named owner or Person schema on /about**. All three block trust signals that distress-purchase buyers require.

Baseline GEO score: 58/100 (2026-04-17, up from 51 on 2026-04-14). Target: 75+ in 90 days.

---

## Critical Business Context

This site serves **distress purchasers** — people dealing with death, hoarding, foreclosure, or overwhelming property cleanout situations. Every content and design decision prioritizes **trust signals over conversion tactics**.

**Never:**
- Use urgency/scarcity manipulation ("3 spots left!")
- Show stock-photo smiling families on sensitive service pages (hoarding, estate cleanouts)
- Hide pricing or play coy
- Use "premium" language that implies gouging

**Always:**
- Real people, real prices, real timelines
- Empathy for the context (loss, stress, overwhelm)
- Transparent process = trust
- Specific numbers (1-3 days, $800-$3,500, 2-3 crew, 1-4 truckloads, 7 days/week)

---

## Voice Rules (Same as All Jordan Projects)

- No em dashes ever. Not one.
- Heavy contractions (don't, won't, we're, that's)
- Specific numbers, not vague ranges
- Short sentences, under 20 words preferred
- No corporate jargon (never "leverage," "synergy," "holistic," "streamline," "best in class")
- Direct and conversational, like talking to someone over coffee
- Sentence fragments fine for emphasis
- Never misspell: Pittsburgh, Cranberry Township, Pennsylvania

---

## Brand Disambiguation (Critical)

"Steel City" brand name collides with multiple Pittsburgh-area businesses:
- **Steel City Hauling** (competitor)
- **Steel City Junk Removal** (Braddock PA, 9 years old, BBB-listed — different business)
- **Steel City Property Services**

Every `/about` update must maintain: "Not affiliated with Steel City Hauling or Steel City Junk Removal (Braddock)." Use "Cranberry-based, family-owned since 2026" in meta descriptions to prevent AI entity collision.

---

## Key Files

- `src/lib/site-config.ts` — brand name, phone, nav (single source of truth)
- `src/app/` — Next.js app router pages
- `src/components/` — React components
- `public/` — Static assets
- `vercel.ts` — Vercel project configuration
- `research/geo-audit-2026-04-14/GEO-AUDIT-REPORT.md` — previous GEO audit
- `GEO_RULES.md` — ongoing GEO checklist (READ ON EVERY SEO TASK)

---

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript strict check |
| `npm run check` | Lint + typecheck + build |

Run `npm run check` before pushing. Vercel auto-deploys from `main`.

---

## Superpowers Skills to Use on This Project

- **brainstorming** — Before any new page, section, or major content change
- **writing-plans** — After brainstorming approves a direction
- **verification-before-completion** — Before deploying. Must run `npm run check` and confirm clean output.
- **using-git-worktrees** — For trying new designs safely
- **systematic-debugging** — When the build breaks or components render wrong

---

## Post-Deploy Rules (Apply to ALL Website Pushes)

After pushing any changes:

1. **Re-index changed/new URLs** via `python C:/Users/hocke/tools/google_api.py indexing submit --url "URL"`
2. **Check analytics events** for new interactive elements (add to GA4/Umami if missing)
3. **QA changed pages visually** via Playwright at 1440px (desktop) and 375px (mobile)
4. **Run GEO_RULES.md checklist** before marking deploy "done"

---

## Current Status

See `PROJECT_STATUS.md`.
