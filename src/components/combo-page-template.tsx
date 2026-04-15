import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageFaq } from "@/components/page-faq";
import { PageCta } from "@/components/page-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";
import type { ComboPage } from "@/lib/combo-data";
import { siteConfig } from "@/lib/site-config";

export function ComboPageTemplate({ data }: { data: ComboPage }) {
  const { service, area, combo } = data;
  const pageUrl = `https://www.steelcitycleanouts.com/services/${service.slug}/in/${area.slug}`;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline={combo.heroHeadline}
          sub={combo.heroSub}
          image={combo.heroImage}
          imageAlt={`${service.name} in ${area.fullName}`}
          eyebrow={`${service.name} · ${area.fullName}`}
          trackingLocation={`combo-${service.slug}-${area.slug}`}
        />

        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.name, href: `/services/${service.slug}` },
            { label: area.name },
          ]}
        />

        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-[820px] px-5">
            <div className="mb-6 rounded-xl border-2 border-[#ed6623] bg-[#fff7f2] p-5">
              <p className="m-0 text-[16px] font-semibold leading-[1.55] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                {combo.citableSnippet}
              </p>
            </div>
            <p className="text-[17px] leading-[1.75] text-[#1d1d1d] font-[family-name:var(--font-body)] lg:text-[18px]">
              {combo.intro}
            </p>
            <p className="mt-6 text-[17px] leading-[1.75] text-[#1d1d1d]/85 font-[family-name:var(--font-body)] lg:text-[18px]">
              {combo.localAngle}
            </p>
          </div>
        </section>

        <section className="bg-[#fafafa] py-14 lg:py-20">
          <div className="mx-auto max-w-[820px] px-5">
            <h2 className="mb-8 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
              What {service.name} in {area.name} Includes
            </h2>
            <ul className="m-0 list-none space-y-3 p-0">
              {service.whatsIncluded.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 translate-y-1 text-[#ed6623]" strokeWidth={3} />
                  <span className="text-[16px] leading-[1.6] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                    {w}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border-2 border-[#ed6623] bg-white p-6">
              <p className="m-0 text-[15px] font-semibold text-[#1d1d1d] font-[family-name:var(--font-body)]">
                Pricing: {service.pricingAnchor}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-[820px] px-5">
            <h2 className="mb-6 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
              {area.name} Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {area.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="rounded-full border-2 border-[#1d1d1d]/10 bg-[#fafafa] px-4 py-1.5 text-[14px] text-[#1d1d1d] font-[family-name:var(--font-body)]"
                >
                  {n}
                </span>
              ))}
            </div>
            {area.zipCodes.length ? (
              <p className="mt-5 text-[14px] text-[#1d1d1d]/60 font-[family-name:var(--font-body)]">
                Zip codes: {area.zipCodes.join(", ")}
              </p>
            ) : null}
          </div>
        </section>

        <PageFaq faqs={combo.faqs} heading={`${service.name} in ${area.name} FAQs`} />

        <section className="bg-[#fafafa] py-14 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-5">
            <h2 className="mb-8 text-center uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
              Related Pages
            </h2>
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              <Link
                href={`/services/${service.slug}`}
                className="group rounded-xl border-2 border-[#1d1d1d]/10 bg-white p-6 transition-all hover:-translate-y-[2px] hover:border-[#ed6623]"
              >
                <p className="mb-1 text-[12px] font-semibold uppercase text-[#1d1d1d]/60 font-[family-name:var(--font-heading)]">
                  Full service page
                </p>
                <h3 className="m-0 mb-2 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[22px]">
                  {service.name}
                </h3>
                <p className="m-0 text-[14px] text-[#1d1d1d]/75 font-[family-name:var(--font-body)]">
                  {service.heroSub}
                </p>
                <p className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold uppercase text-[#ed6623] font-[family-name:var(--font-heading)]">
                  Read more <ArrowRight className="h-3 w-3" />
                </p>
              </Link>
              <Link
                href={`/service-areas/${area.slug}`}
                className="group rounded-xl border-2 border-[#1d1d1d]/10 bg-white p-6 transition-all hover:-translate-y-[2px] hover:border-[#ed6623]"
              >
                <p className="mb-1 text-[12px] font-semibold uppercase text-[#1d1d1d]/60 font-[family-name:var(--font-heading)]">
                  All services in this area
                </p>
                <h3 className="m-0 mb-2 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[22px]">
                  {area.fullName}
                </h3>
                <p className="m-0 text-[14px] text-[#1d1d1d]/75 font-[family-name:var(--font-body)]">
                  {area.heroSub}
                </p>
                <p className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold uppercase text-[#ed6623] font-[family-name:var(--font-heading)]">
                  Read more <ArrowRight className="h-3 w-3" />
                </p>
              </Link>
            </div>
          </div>
        </section>

        <PageCta
          location={`combo-${service.slug}-${area.slug}-bottom`}
          heading={`${service.name} in ${area.name}, Same Day`}
        />
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: `${service.name} in ${area.fullName}`,
            serviceType: service.name,
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
                addressLocality: siteConfig.address.locality,
                addressRegion: siteConfig.address.region,
                postalCode: siteConfig.address.postalCode,
                addressCountry: siteConfig.address.country,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: siteConfig.hours.opens,
                  closes: siteConfig.hours.closes,
                },
              ],
            },
            areaServed: { "@type": "City", name: area.fullName },
            description: combo.seoDescription,
            url: pageUrl,
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              ...(service.priceLow ? { lowPrice: service.priceLow } : {}),
              ...(service.priceHigh ? { highPrice: service.priceHigh } : {}),
              description: service.pricingAnchor,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: combo.faqs.map((f) => ({
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
