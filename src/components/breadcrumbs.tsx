import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.steelcitycleanouts.com/" },
      ...items.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.label,
        ...(c.href ? { item: `https://www.steelcitycleanouts.com${c.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-[#fafafa] border-b border-[#1d1d1d]/8">
        <ol className="mx-auto flex max-w-[1200px] list-none items-center gap-2 overflow-x-auto px-5 py-3 text-[13px] text-[#1d1d1d]/70 font-[family-name:var(--font-body)]">
          <li className="flex shrink-0 items-center gap-2">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-[#ed6623]">
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((c, i) => (
            <li key={`${c.label}-${i}`} className="flex shrink-0 items-center gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-[#1d1d1d]/40" />
              {c.href ? (
                <Link href={c.href} className="hover:text-[#ed6623]">
                  {c.label}
                </Link>
              ) : (
                <span className="text-[#1d1d1d] font-semibold">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
