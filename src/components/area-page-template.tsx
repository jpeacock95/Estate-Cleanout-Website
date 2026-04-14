import Link from "next/link";
import { MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageFaq } from "@/components/page-faq";
import { PageCta } from "@/components/page-cta";
import type { ServiceArea } from "@/lib/service-areas-data";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

export function AreaPageTemplate({ area }: { area: ServiceArea }) {
  const pageUrl = `https://www.steelcitycleanouts.com/service-areas/${area.slug}`;
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline={area.heroHeadline}
          sub={area.heroSub}
          image={area.heroImage}
          imageAlt={`Steel City Cleanouts crew in ${area.fullName}`}
          eyebrow={`${area.fullName} · ${area.county}`}
          trackingLocation={`area-${area.slug}`}
        />

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[820px] px-5">
            <div className="mb-6 rounded-xl border-2 border-[#ed6623] bg-[#fff7f2] p-5">
              <p className="m-0 text-[16px] font-semibold leading-[1.55] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                {area.citableSnippet}
              </p>
            </div>
            <p className="text-[17px] leading-[1.75] text-[#1d1d1d] font-[family-name:var(--font-body)] lg:text-[18px]">
              {area.intro}
            </p>
            <p className="mt-6 text-[17px] leading-[1.75] text-[#1d1d1d]/85 font-[family-name:var(--font-body)] lg:text-[18px]">
              {area.localDetails}
            </p>
          </div>
        </section>

        <section className="bg-[#fafafa] py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2 className="mb-8 text-center uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px]">
              Services in {area.name}
            </h2>
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 lg:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-xl border-2 border-[#1d1d1d]/10 bg-white p-6 transition-all hover:-translate-y-[2px] hover:border-[#ed6623] hover:shadow-[6px_6px_0_rgba(237,102,35,0.2)]"
                >
                  <h3 className="mb-2 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[20px]">
                    {s.name}
                  </h3>
                  <p className="m-0 text-[14px] text-[#1d1d1d]/70 font-[family-name:var(--font-body)]">
                    {s.heroSub}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[820px] px-5">
            <h2 className="mb-6 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
              Neighborhoods We Cover in {area.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {area.neighborhoods.map((n) => (
                <div
                  key={n}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#1d1d1d]/10 bg-[#fafafa] px-4 py-2"
                >
                  <MapPin className="h-4 w-4 text-[#ed6623]" />
                  <span className="text-[14px] text-[#1d1d1d] font-[family-name:var(--font-body)]">{n}</span>
                </div>
              ))}
            </div>
            {area.zipCodes.length ? (
              <p className="mt-6 text-[14px] text-[#1d1d1d]/60 font-[family-name:var(--font-body)]">
                Zip codes served: {area.zipCodes.join(", ")}
              </p>
            ) : null}
          </div>
        </section>

        <PageFaq faqs={area.faqs} heading={`${area.name} Cleanout FAQs`} />

        <PageCta location={`area-${area.slug}-bottom`} heading={`${area.name} Cleanout Help, 7 Days a Week`} />
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `${siteConfig.brand} — ${area.name}`,
            image: "https://www.steelcitycleanouts.com/images/og.jpg",
            telephone: `+1${siteConfig.phone.tel}`,
            email: siteConfig.email,
            url: pageUrl,
            address: {
              "@type": "PostalAddress",
              addressLocality: area.name,
              addressRegion: "PA",
              addressCountry: "US",
              postalCode: area.zipCodes[0],
            },
            areaServed: { "@type": "City", name: area.fullName },
            description: area.seoDescription,
            priceRange: "$$",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: area.faqs.map((f) => ({
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
