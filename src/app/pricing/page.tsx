import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageCta } from "@/components/page-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pricingCategories } from "@/lib/pricing-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Junk Removal Pricing Pittsburgh | Real Prices, No Hidden Fees | Steel City Cleanouts",
  description:
    "Real Pittsburgh junk removal and estate cleanout pricing. Single item $99. Quarter truck $175-$275. Half truck $275-$425. Full truck $475-$750. No hidden fees.",
  alternates: { canonical: `${siteConfig.url}/pricing` },
  openGraph: {
    title: "Junk Removal Pricing Pittsburgh | Steel City Cleanouts",
    description:
      "Transparent pricing for junk removal, estate cleanouts, and every service. Real Pittsburgh dollar figures, no quote-form gatekeeping.",
    url: `${siteConfig.url}/pricing`,
    type: "website",
    images: [{ url: `${siteConfig.url}/images/hubs/pricing.jpg` }],
  },
};

export default function PricingIndex() {
  const categories = pricingCategories();
  const pageUrl = `${siteConfig.url}/pricing`;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline="Pittsburgh Junk Removal Pricing"
          sub="Every price we charge, published up front. No quote form required."
          image="/images/hubs/pricing.jpg"
          imageAlt="Steel City Cleanouts pricing in Pittsburgh"
          eyebrow="Pricing"
          trackingLocation="pricing-index"
        />

        <Breadcrumbs items={[{ label: "Pricing" }]} />

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[820px] px-5">
            <div
              className="mb-8 rounded-xl border-2 border-[#ed6623] bg-[#fff7f2] p-5"
              data-speakable="true"
            >
              <p className="m-0 text-[16px] font-semibold leading-[1.55] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                Steel City Cleanouts publishes real Pittsburgh pricing for every service.
                Single items start at $99. Quarter truck runs $175 to $275. Half truck $275 to
                $425. Full truck $475 to $750. Whole-home estate cleanouts run $850 to $3,500.
                Every surcharge is listed. The quote we give you is the price you pay.
              </p>
            </div>

            <p className="text-[17px] leading-[1.75] text-[#1d1d1d] font-[family-name:var(--font-body)] lg:text-[18px]">
              Most junk removal companies in Pittsburgh hide their prices behind a quote form.
              We don&apos;t. Pick the page below that matches your job and you&apos;ll see a real
              dollar range, what&apos;s included, and what costs extra. If you want a firm
              number in under 5 minutes, call {siteConfig.phone.display} or use the form at
              the bottom of any page.
            </p>
          </div>
        </section>

        {categories.map((cat) => (
          <section
            key={cat.key}
            className={
              cat.key === "by-load-size" || cat.key === "comparison"
                ? "bg-[#fafafa] py-14 lg:py-20"
                : "bg-white py-14 lg:py-20"
            }
          >
            <div className="mx-auto max-w-[1200px] px-5">
              <h2 className="mb-8 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
                {cat.label}
              </h2>
              <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 lg:grid-cols-3">
                {cat.pages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/pricing/${p.slug}`}
                    className="group flex flex-col justify-between gap-3 rounded-xl border-2 border-[#1d1d1d]/10 bg-white p-6 transition-all hover:-translate-y-[2px] hover:border-[#ed6623] hover:shadow-[6px_6px_0_rgba(237,102,35,0.2)]"
                  >
                    <div>
                      <p className="m-0 text-[12px] font-bold uppercase tracking-wider text-[#ed6623] font-[family-name:var(--font-heading)]">
                        {p.eyebrow}
                      </p>
                      <h3 className="mt-2 mb-3 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[20px]">
                        {p.name}
                      </h3>
                      <p className="m-0 text-[14px] leading-[1.55] text-[#1d1d1d]/75 font-[family-name:var(--font-body)]">
                        {p.pricingAnchor}
                      </p>
                    </div>
                    <p className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold uppercase text-[#ed6623] font-[family-name:var(--font-heading)]">
                      See Pricing <ArrowRight className="h-3 w-3" />
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        <PageCta location="pricing-index-bottom" />
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${pageUrl}#collection`,
            name: "Pittsburgh Junk Removal Pricing",
            description:
              "Transparent pricing guide for junk removal, estate cleanouts, and every service in Pittsburgh.",
            url: pageUrl,
            isPartOf: { "@id": `${siteConfig.url}#website` },
            about: {
              "@type": "LocalBusiness",
              "@id": `${siteConfig.url}#business`,
              name: siteConfig.brand,
            },
          }),
        }}
      />
    </>
  );
}
