# Estate Cleanout Website

Marketing site for **Steel City Cleanouts** — a Pittsburgh-area estate cleanout and junk removal business.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and shadcn/ui. Deployed on Vercel.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack, Node.js 24)
- **UI:** React 19, Tailwind CSS v4, shadcn/ui primitives, Lucide icons
- **Fonts:** Bebas Neue (headings) + Poppins (body) via `next/font/google`
- **Hosting:** Vercel (auto-deploy from `main`)

## Local development

```bash
npm install
npm run dev
```

Site runs at [http://localhost:3000](http://localhost:3000).

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript strict check |
| `npm run check` | Lint + typecheck + build |

## Project structure

```
src/
  app/
    layout.tsx       # Fonts, metadata, <html> shell
    page.tsx         # Home page — imports every section
    globals.css      # Design tokens, utilities, button styles
  components/
    site-header.tsx
    hero-section.tsx
    services-section.tsx
    why-choose-section.tsx
    reviews-section.tsx
    service-areas-section.tsx
    cta-section.tsx
    site-footer.tsx
    ui/              # shadcn primitives
  lib/
    site-config.ts   # Brand name, phone, nav — single source of truth
    utils.ts         # cn() helper
public/
  images/ seo/ videos/   # Static assets
```

## Editing content

Most content lives in two places:

1. **`src/lib/site-config.ts`** — brand name, phone number, email, nav links. Change these once and they update everywhere.
2. **Each component file** — section-specific copy (services list, testimonials, service areas, why-choose features) is defined at the top of the section's `.tsx` file as plain data arrays.

No CMS. No database. Pure static React components.

## Design system

All brand tokens are defined in `src/app/globals.css` under `:root`:

| Token | Value |
|---|---|
| `--brand-orange` | `#ed6623` |
| `--brand-dark` | `#1d1d1d` |
| `--brand-bg-secondary` | `#f8f9fa` |
| `--shadow-card` | `10px 10px 0 #000` |

Shared button styles (`.btn`, `.btn-primary`, `.btn-secondary`) and container widths (`.container-site`, `.container-wide`) are also defined there.

## Deployment

This repo is wired to Vercel. Every push to `main` auto-deploys to production. Every pull request gets a preview URL.

Project configuration lives in [`vercel.ts`](./vercel.ts).

**First-time setup:**
1. Push this repo to GitHub
2. Import it in [vercel.com/new](https://vercel.com/new)
3. Pick the Next.js preset (it auto-detects)
4. Deploy

After that, `git push` is the deploy.

## License

Private project. All rights reserved.
