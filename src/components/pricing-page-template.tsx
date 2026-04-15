import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageFaq } from "@/components/page-faq";
import { PageCta } from "@/components/page-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";
import type { PricingPage } from "@/lib/pricing-data";
import { getPricingPageBySlug } from "@/lib/pricing-data";
import { siteConfig } from "@/lib/site-config";

export function PricingPageTemplate({ page }: { page: PricingPage }) {
  const pageUrl = `${siteConfig.url}/pricing/${page.slug}`;
  const related = (page.relatedSlugs ?? [])
    .map((s) => getPricingPageBySlug(s))
    .filter((p): p is PricingPage => Boolean(p));

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline={page.heroHeadline}
          sub={page.heroSub}
          image={page.heroImage}
          imageAlt={`Steel City Cleanouts ${page.name.toLowerCase()} in Pittsburgh`}
          eyebrow={page.eyebrow}
          trackingLocation={`pricing-${page.slug}`}
        />

        <Breadcrumbs
          items={[
            { label: "Pricing", href: "/pricing" },
            { label: page.name },
          ]}
        />

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[820px] px-5">
            <div
              className="mb-8 rounded-xl border-2 border-[#ed6623] bg-[#fff7f2] p-5"
              data-speakable="true"
            >
              <p className="m-0 text-[16px] font-semibold leading-[1.55] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                {page.citableSnippet}
              </p>
            </div>

            <p className="text-[17px] leading-[1.75] text-[#1d1d1d] font-[family-name:var(--font-body)] lg:text-[18px]">
              {page.intro}
            </p>
          </div>
        </section>

        <section className="bg-[#fafafa] py-16 lg:py-24">
          <div className="mx-auto max-w-[900px] px-5">
            <h2 className="mb-2 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[26px] lg:text-[34px]">
              {page.tableHeading}
            </h2>
            {page.tableSubheading ? (
              <p className="mb-6 text-[15px] text-[#1d1d1d]/70 font-[family-name:var(--font-body)]">
                {page.tableSubheading}
              </p>
            ) : null}

            <div className="overflow-hidden rounded-xl border-2 border-[#1d1d1d]/10 bg-white">
              <table className="w-full border-collapse text-left">
                <thead className="bg-[#1d1d1d] text-white">
                  <tr>
                    <th className="p-4 text-[13px] uppercase tracking-wider font-[family-name:var(--font-heading)]">
                      Item
                    </th>
                    <th className="p-4 text-[13px] uppercase tracking-wider font-[family-name:var(--font-heading)]">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}
                    >
                      <td className="border-t border-[#1d1d1d]/10 p-4 align-top">
                        <p className="m-0 text-[15px] font-semibold text-[#1d1d1d] font-[family-name:var(--font-body)]">
                          {row.label}
                        </p>
                        {row.description ? (
                          <p className="mt-1 text-[13px] text-[#1d1d1d]/70 font-[family-name:var(--font-body)]">
                            {row.description}
                          </p>
                        ) : null}
                      </td>
                      <td className="border-t border-[#1d1d1d]/10 p-4 align-top">
                        <p className="m-0 whitespace-nowrap text-[16px] font-bold text-[#ed6623] font-[family-name:var(--font-body)]">
                          {row.price}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl border-2 border-[#ed6623] bg-white p-5">
              <p className="m-0 text-[15px] font-semibold text-[#1d1d1d] font-[family-name:var(--font-body)]">
                {page.pricingAnchor}
              </p>
            </div>
          </div>
        </section>

        {page.whatsIncluded && page.whatsIncluded.length ? (
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-[820px] px-5">
              <h2 className="mb-6 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[24px] lg:text-[30px]">
                What&apos;s Included
              </h2>
              <ul className="m-0 list-none space-y-3 p-0">
                {page.whatsIncluded.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 translate-y-1 text-[#ed6623]" strokeWidth={3} />
                    <span className="text-[16px] leading-[1.6] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                      {w}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {page.factors && page.factors.length ? (
          <section className="bg-[#fafafa] py-16 lg:py-20">
            <div className="mx-auto max-w-[820px] px-5">
              <h2 className="mb-6 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[24px] lg:text-[30px]">
                What Affects the Price
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {page.factors.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-3 rounded-xl border-2 border-[#1d1d1d]/10 bg-white p-5"
                  >
                    <div className="h-2 w-2 shrink-0 translate-y-2 rounded-full bg-[#ed6623]" />
                    <span className="text-[15px] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {page.notes && page.notes.length ? (
          <section className="bg-white py-14 lg:py-20">
            <div className="mx-auto max-w-[820px] px-5">
              <div className="rounded-xl border-2 border-[#1d1d1d]/10 bg-[#fafafa] p-6 lg:p-8">
                <h2 className="mb-4 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[20px] lg:text-[22px]">
                  Notes
                </h2>
                <ul className="m-0 list-none space-y-3 p-0">
                  {page.notes.map((n) => (
                    <li
                      key={n}
                      className="text-[15px] leading-[1.6] text-[#1d1d1d]/85 font-[family-name:var(--font-body)]"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {page.exampleJob ? (
          <section className="bg-[#fafafa] py-16 lg:py-20">
            <div className="mx-auto max-w-[820px] px-5">
              <div className="rounded-xl border-2 border-[#ed6623] bg-white p-6 lg:p-8">
                <p className="m-0 mb-2 text-[12px] font-bold uppercase tracking-wider text-[#ed6623] font-[family-name:var(--font-heading)]">
                  {page.exampleJob.title}
                </p>
                <p className="m-0 text-[16px] leading-[1.7] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                  {page.exampleJob.body}
                </p>
              </div>
            </div>
          </section>
        ) : null}

        <PageFaq faqs={page.faqs} heading={`${page.name} FAQs`} />

        {related.length ? (
          <section className="bg-white py-14 lg:py-20">
            <div className="mx-auto max-w-[1200px] px-5">
              <h2 className="mb-8 text-center uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[26px] lg:text-[32px]">
                Related Pricing
              </h2>
              <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/pricing/${r.slug}`}
                    className="group flex items-start justify-between gap-3 rounded-xl border-2 border-[#1d1d1d]/10 bg-white p-5 transition-all hover:-translate-y-[2px] hover:border-[#ed6623]"
                  >
                    <div>
                      <p className="m-0 text-[16px] font-semibold text-[#1d1d1d] font-[family-name:var(--font-body)]">
                        {r.name}
                      </p>
                      <p className="mt-1 text-[13px] text-[#1d1d1d]/65 font-[family-name:var(--font-body)]">
                        {r.pricingAnchor}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#ed6623]" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <PageCta location={`pricing-${page.slug}-bottom`} />
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: `${page.name} - Pittsburgh`,
            serviceType: page.name,
            provider: {
              "@type": "LocalBusiness",
              "@id": `${siteConfig.url}#business`,
              name: siteConfig.brand,
              telephone: `+1${siteConfig.phone.tel}`,
              email: siteConfig.email,
              url: siteConfig.url,
              priceRange: siteConfig.priceRange,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${siteConfig.address.locality}, ${siteConfig.address.region}`,
                addressLocality: siteConfig.address.locality,
                addressRegion: siteConfig.address.region,
                postalCode: siteConfig.address.postalCode,
                addressCountry: siteConfig.address.country,
              },
            },
            areaServed: {
              "@type": "City",
              name: "Pittsburgh",
            },
            description: page.seoDescription,
            url: pageUrl,
            ...(page.priceLow || page.priceHigh
              ? {
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "USD",
                    ...(page.priceLow ? { lowPrice: page.priceLow } : {}),
                    ...(page.priceHigh ? { highPrice: page.priceHigh } : {}),
                    offerCount: page.rows.filter((r) => r.priceLow).length || page.rows.length,
                    description: page.pricingAnchor,
                    priceSpecification: page.rows
                      .filter((r) => r.priceLow)
                      .map((r) => ({
                        "@type": "PriceSpecification",
                        priceCurrency: "USD",
                        price: r.priceLow,
                        ...(r.priceHigh && r.priceHigh !== r.priceLow
                          ? { maxPrice: r.priceHigh }
                          : {}),
                        description: `${r.label}: ${r.price}`,
                      })),
                  },
                }
              : {}),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
