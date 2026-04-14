import Link from "next/link";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageFaq } from "@/components/page-faq";
import { PageCta } from "@/components/page-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";
import type { Service } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";
import { serviceAreas } from "@/lib/service-areas-data";
import { comboServiceSlugs } from "@/lib/combo-data";

export function ServicePageTemplate({ service }: { service: Service }) {
  const pageUrl = `https://www.steelcitycleanouts.com/services/${service.slug}`;
  const hasComboPages = comboServiceSlugs().includes(service.slug);
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline={service.heroHeadline}
          sub={service.heroSub}
          image={service.heroImage}
          imageAlt={`Steel City Cleanouts ${service.name.toLowerCase()} in Pittsburgh`}
          eyebrow={`${service.name} · Pittsburgh, PA`}
          trackingLocation={`service-${service.slug}`}
        />

        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.name },
          ]}
        />

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[820px] px-5">
            <p className="text-[17px] leading-[1.75] text-[#1d1d1d] font-[family-name:var(--font-body)] lg:text-[18px]">
              {service.intro}
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {service.keyPoints.map((p) => (
                <div key={p} className="flex items-start gap-3 rounded-xl border-2 border-[#1d1d1d]/10 bg-[#fafafa] p-5">
                  <Check className="h-5 w-5 shrink-0 text-[#ed6623]" strokeWidth={3} />
                  <span className="text-[15px] text-[#1d1d1d] font-[family-name:var(--font-body)]">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fafafa] py-16 lg:py-24">
          <div className="mx-auto max-w-[820px] px-5">
            <h2 className="mb-8 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px]">
              What&apos;s Included
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

        <PageFaq faqs={service.faqs} />

        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2 className="mb-8 text-center uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
              {service.name} Available In
            </h2>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
              {serviceAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={
                    hasComboPages
                      ? `/services/${service.slug}/in/${a.slug}`
                      : `/service-areas/${a.slug}`
                  }
                  className="rounded-xl border-2 border-[#1d1d1d]/10 bg-[#fafafa] p-5 text-center transition-all hover:border-[#ed6623] hover:bg-white"
                >
                  <p className="m-0 text-[16px] font-semibold text-[#1d1d1d] font-[family-name:var(--font-body)]">
                    {a.name}
                  </p>
                  <p className="mt-1 text-[13px] text-[#1d1d1d]/60 font-[family-name:var(--font-body)]">
                    {a.county}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageCta location={`service-${service.slug}-bottom`} />
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            serviceType: service.name,
            provider: {
              "@type": "LocalBusiness",
              name: siteConfig.brand,
              telephone: `+1${siteConfig.phone.tel}`,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pittsburgh",
                addressRegion: "PA",
                addressCountry: "US",
              },
            },
            areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a.fullName })),
            description: service.seoDescription,
            url: pageUrl,
            offers: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                description: service.pricingAnchor,
              },
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
            mainEntity: service.faqs.map((f) => ({
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
