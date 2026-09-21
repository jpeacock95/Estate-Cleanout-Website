// Last-modified dates for the hand-built pages that have no data record.
//
// Why this file exists: the sitemap used to stamp every page with the build
// time, so all 205 URLs claimed to change on every deploy. Google treats a
// lastmod it cannot trust as noise and falls back to its own crawl schedule,
// which is exactly the wrong outcome when three pages genuinely changed this
// week and we want those three recrawled.
//
// Data-driven pages carry their own `updatedAt`. These are the ones that do not.
// Bump the date here when you change the page's visible content. Do not bump it
// for a styling tweak or a dependency bump, because the whole point is that the
// date means something.

export const pageDates: Record<string, string> = {
  "/": "2026-09-20",
  "/services": "2026-08-31",
  "/service-areas": "2026-08-31",
  "/pricing": "2026-09-20",
  "/how-to-get-rid-of": "2026-09-20",
  "/about": "2026-07-23",
  "/contact": "2026-08-31",
};

/** Parses an ISO date string into a Date, falling back to the build time. */
export function asDate(iso: string | undefined): Date {
  if (!iso) return new Date();
  const d = new Date(`${iso}T12:00:00Z`);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

/** Last-modified date for a hand-built page path. */
export function pageDate(path: string): Date {
  return asDate(pageDates[path]);
}

/** The newer of two ISO dates. Combo pages inherit from their service and area. */
export function newerOf(a: string | undefined, b: string | undefined): Date {
  if (!a) return asDate(b);
  if (!b) return asDate(a);
  return asDate(a > b ? a : b);
}
