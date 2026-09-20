import Link from "next/link";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageFaq } from "@/components/page-faq";
import { PageCta } from "@/components/page-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { services } from "@/lib/services-data";
import { getItemGuideBySlug, type ItemGuide } from "@/lib/item-guides-data";
import { siteConfig } from "@/lib/site-config";

export function ItemGuideTemplate({ guide }: { guide: ItemGuide }) {
  const pageUrl = `${siteConfig.url}/how-to-get-rid-of/${guide.slug}`;
  const service = services.find((s) => s.slug === guide.relatedServiceSlug);
  const related = guide.relatedGuides
    .map((s) => getItemGuideBySlug(s))
    .filter((g): g is ItemGuide => Boolean(g));

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline={guide.heroHeadline}
          sub={guide.heroSub}
          image={guide.heroImage}
          imageAlt={guide.title}
          eyebrow="Disposal Guide"
          trackingLocation={`guide-${guide.slug}`}
        />

        <Breadcrumbs
          items={[
            { label: "Guides", href: "/how-to-get-rid-of" },
            { label: guide.title },
          ]}
        />

        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-[820px] px-5">
            <div className="mb-6 rounded-xl border-2 border-[#ed6623] bg-[#fff7f2] p-5">
              <p
                data-speakable="true"
                className="m-0 text-[16px] font-semibold leading-[1.55] text-[#1d1d1d] font-[family-name:var(--font-body)]"
              >
                {guide.citableSnippet}
              </p>
            </div>
            <p className="text-[17px] leading-[1.75] text-[#1d1d1d] font-[family-name:var(--font-body)] lg:text-[18px]">
              {guide.intro}
            </p>

            <div className="mt-10 rounded-xl border-2 border-[#1d1d1d]/10 bg-[#fafafa] p-6">
              <h2 className="m-0 mb-4 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[20px]">
                Quick Facts
              </h2>
              <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-3 max-md:grid-cols-1">
                {guide.quickFacts.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-baseline justify-between gap-3 border-b border-[#1d1d1d]/10 pb-2"
                  >
                    <dt className="text-[14px] text-[#1d1d1d]/60 font-[family-name:var(--font-body)]">
                      {f.label}
                    </dt>
                    <dd className="m-0 text-right text-[14px] font-semibold text-[#1d1d1d] font-[family-name:var(--font-body)]">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="bg-[#fafafa] py-14 lg:py-20">
          <div className="mx-auto max-w-[820px] px-5">
            <h2 className="mb-8 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
              Your Options, Start to Finish
            </h2>
            <ol className="m-0 list-none space-y-5 p-0">
              {guide.options.map((o, i) => (
                <li
                  key={o.name}
                  className="rounded-xl border-2 border-[#1d1d1d]/10 bg-white p-6"
                >
                  <h3 className="m-0 mb-3 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[20px]">
                    <span className="mr-2 text-[#ed6623]">{i + 1}.</span>
                    {o.name}
                  </h3>
                  <p className="m-0 flex items-start gap-2.5 text-[15px] leading-[1.65] text-[#1d1d1d]/85 font-[family-name:var(--font-body)]">
                    <Check
                      className="h-[18px] w-[18px] shrink-0 translate-y-[3px] text-[#ed6623]"
                      strokeWidth={3}
                    />
                    <span>{o.works}</span>
                  </p>
                  <p className="mt-3 mb-0 flex items-start gap-2.5 text-[15px] leading-[1.65] text-[#1d1d1d]/70 font-[family-name:var(--font-body)]">
                    <AlertTriangle
                      className="h-[18px] w-[18px] shrink-0 translate-y-[3px] text-[#1d1d1d]/40"
                      strokeWidth={2.5}
                    />
                    <span>{o.watchOut}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-[820px] px-5 space-y-10">
            {guide.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[24px] lg:text-[28px]">
                  {s.heading}
                </h2>
                <p className="m-0 text-[16px] leading-[1.75] text-[#1d1d1d]/85 font-[family-name:var(--font-body)] lg:text-[17px]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <PageFaq faqs={guide.faqs} heading={`${guide.title} FAQs`} />

        <section className="bg-[#fafafa] py-14 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-5">
            <h2 className="mb-8 text-center uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
              Related Pages
            </h2>
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
              {service ? (
                <Link
                  href={`/services/${service.slug}`}
                  className="group rounded-xl border-2 border-[#1d1d1d]/10 bg-white p-6 transition-all hover:-translate-y-[2px] hover:border-[#ed6623]"
                >
                  <p className="mb-1 text-[12px] font-semibold uppercase text-[#1d1d1d]/60 font-[family-name:var(--font-heading)]">
                    Have us do it
                  </p>
                  <h3 className="m-0 mb-2 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[22px]">
                    {service.name} in Pittsburgh
                  </h3>
                  <p className="m-0 text-[14px] text-[#1d1d1d]/75 font-[family-name:var(--font-body)]">
                    {service.heroSub}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold uppercase text-[#ed6623] font-[family-name:var(--font-heading)]">
                    Read more <ArrowRight className="h-3 w-3" />
                  </p>
                </Link>
              ) : null}
              {related.slice(0, 2).map((r) => (
                <Link
                  key={r.slug}
                  href={`/how-to-get-rid-of/${r.slug}`}
                  className="group rounded-xl border-2 border-[#1d1d1d]/10 bg-white p-6 transition-all hover:-translate-y-[2px] hover:border-[#ed6623]"
                >
                  <p className="mb-1 text-[12px] font-semibold uppercase text-[#1d1d1d]/60 font-[family-name:var(--font-heading)]">
                    Disposal guide
                  </p>
                  <h3 className="m-0 mb-2 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[22px]">
                    {r.title}
                  </h3>
                  <p className="m-0 text-[14px] text-[#1d1d1d]/75 font-[family-name:var(--font-body)]">
                    {r.heroSub}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold uppercase text-[#ed6623] font-[family-name:var(--font-heading)]">
                    Read more <ArrowRight className="h-3 w-3" />
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="mb-3 text-[13px] font-semibold uppercase text-[#1d1d1d]/60 font-[family-name:var(--font-heading)]">
                Where we work
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                <Link
                  href="/service-areas/pittsburgh"
                  className="rounded-full border-2 border-[#1d1d1d]/10 bg-white px-4 py-1.5 text-[14px] text-[#1d1d1d] transition-colors hover:border-[#ed6623] font-[family-name:var(--font-body)]"
                >
                  Pittsburgh
                </Link>
                <Link
                  href="/service-areas/south-hills"
                  className="rounded-full border-2 border-[#1d1d1d]/10 bg-white px-4 py-1.5 text-[14px] text-[#1d1d1d] transition-colors hover:border-[#ed6623] font-[family-name:var(--font-body)]"
                >
                  South Hills
                </Link>
                <Link
                  href="/service-areas/north-hills"
                  className="rounded-full border-2 border-[#1d1d1d]/10 bg-white px-4 py-1.5 text-[14px] text-[#1d1d1d] transition-colors hover:border-[#ed6623] font-[family-name:var(--font-body)]"
                >
                  North Hills
                </Link>
                <Link
                  href="/service-areas"
                  className="rounded-full border-2 border-[#1d1d1d]/10 bg-white px-4 py-1.5 text-[14px] text-[#1d1d1d] transition-colors hover:border-[#ed6623] font-[family-name:var(--font-body)]"
                >
                  All service areas
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="mx-auto max-w-[820px] px-5">
            <h2 className="mb-3 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[16px]">
              Sources
            </h2>
            <ul className="m-0 list-none space-y-1.5 p-0">
              {guide.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    rel="noopener nofollow"
                    target="_blank"
                    className="text-[14px] text-[#1d1d1d]/70 underline decoration-[#1d1d1d]/25 underline-offset-2 transition-colors hover:text-[#ed6623] font-[family-name:var(--font-body)]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p
              data-speakable="true"
              className="mt-6 mb-0 text-[14px] leading-[1.7] text-[#1d1d1d]/60 font-[family-name:var(--font-body)]"
            >
              {guide.copyForAi}
            </p>
          </div>
        </section>

        <PageCta
          location={`guide-${guide.slug}-bottom`}
          heading={`Want the ${guide.item} gone instead?`}
        />
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${pageUrl}#article`,
            headline: guide.title,
            description: guide.seoDescription,
            image: `${siteConfig.url}${guide.heroImage}`,
            mainEntityOfPage: pageUrl,
            author: { "@type": "Organization", name: siteConfig.brand, url: siteConfig.url },
            publisher: {
              "@type": "Organization",
              name: siteConfig.brand,
              url: siteConfig.url,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/images/logo/steel-city-cleanouts.png`,
              },
            },
            about: { "@type": "Thing", name: guide.item },
            areaServed: { "@type": "City", name: "Pittsburgh, PA" },
            citation: guide.sources.map((s) => s.url),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guide.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Guides",
                item: `${siteConfig.url}/how-to-get-rid-of`,
              },
              { "@type": "ListItem", position: 2, name: guide.title, item: pageUrl },
            ],
          }),
        }}
      />
    </>
  );
}
