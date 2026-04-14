import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageCta } from "@/components/page-cta";
import type { Resource } from "@/lib/resources-data";

export function ResourcePageTemplate({ resource }: { resource: Resource }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline={resource.heroHeadline}
          sub={resource.heroSub}
          image={resource.heroImage}
          imageAlt={resource.title}
          eyebrow="Resources"
          trackingLocation={`resource-${resource.slug}`}
        />

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[780px] px-5">
            <div className="mb-8 rounded-xl border-2 border-[#ed6623] bg-[#fff7f2] p-5">
              <p className="m-0 text-[16px] font-semibold leading-[1.55] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                {resource.citableSnippet}
              </p>
            </div>
            <p className="text-[17px] leading-[1.75] text-[#1d1d1d] font-[family-name:var(--font-body)] lg:text-[18px]">
              {resource.intro}
            </p>
            <div className="mt-12 space-y-10">
              {resource.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="mb-3 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[24px] lg:text-[28px]">
                    {s.heading}
                  </h2>
                  <p className="m-0 text-[16px] leading-[1.7] text-[#1d1d1d]/85 font-[family-name:var(--font-body)] lg:text-[17px]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCta location={`resource-${resource.slug}-bottom`} />
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: resource.title,
            description: resource.seoDescription,
            image: `https://www.steelcitycleanouts.com${resource.heroImage}`,
            author: { "@type": "Organization", name: "Steel City Cleanouts" },
            publisher: {
              "@type": "Organization",
              name: "Steel City Cleanouts",
              logo: {
                "@type": "ImageObject",
                url: "https://www.steelcitycleanouts.com/images/logo/steel-city-cleanouts.png",
              },
            },
          }),
        }}
      />
    </>
  );
}
