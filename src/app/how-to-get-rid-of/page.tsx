import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageCta } from "@/components/page-cta";
import { PageFaq } from "@/components/page-faq";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { itemGuides } from "@/lib/item-guides-data";
import { siteConfig } from "@/lib/site-config";

const pageUrl = `${siteConfig.url}/how-to-get-rid-of`;

export const metadata: Metadata = {
  title: "How to Get Rid of Anything in Pittsburgh | Disposal Guides",
  description:
    "Plain-language disposal guides for Pittsburgh. Couches, mattresses, refrigerators, washers and dryers, pianos, and hot tubs. City bulk rules, donation limits, and when to call a hauler.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "How to Get Rid of Anything in Pittsburgh | Disposal Guides",
    description:
      "Every option for getting rid of big household items in Pittsburgh, including the free ones. City bulk collection rules, donation reality, recycling, and removal.",
    url: pageUrl,
    type: "website",
    images: [{ url: `${siteConfig.url}/images/hubs/pricing.jpg` }],
  },
};

const hubFaqs = [
  {
    q: "How many bulk items will Pittsburgh pick up?",
    a: "The City of Pittsburgh collects two bulk items per week alongside regular residential refuse collection. The City does not take construction and demolition debris, household hazardous waste, or electronics through ordinary curbside pickup. If you are unsure how your item is classified, Pittsburgh 311 at 412-255-2621 will tell you before you set it out.",
  },
  {
    q: "What will Pittsburgh not take at the curb?",
    a: "Construction and demolition waste, household hazardous waste, and electronic waste are all excluded from ordinary curbside collection. Appliances containing refrigerant, like refrigerators and freezers, need their refrigerant recovered by a certified technician before disposal, so they are handled through drop-off sites, transfer stations, or a utility recycling program instead.",
  },
  {
    q: "Is it cheaper to do it myself?",
    a: "In cash, usually yes, and these guides start with the free options for that reason. The honest trade is time and risk: a truck, a second person, a drive to a transfer station, and a staircase. When the item is heavy, awkward, on an upper floor, or attached to gas, water, or refrigerant, paying someone is often the better call.",
  },
  {
    q: "Do you charge to quote a pickup?",
    a: "No. Quotes are free. Call (585) 200-0871 with what the item is, what floor it is on, and how the truck would reach it, and you will get an arrival window and a price before anyone lifts anything.",
  },
];

export default function GuidesIndex() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline="How to Get Rid of Anything"
          sub="Straight answers for Pittsburgh, including the options that cost you nothing."
          image="/images/hubs/pricing.jpg"
          imageAlt="Steel City Cleanouts disposal guides for Pittsburgh"
          eyebrow="Disposal Guides"
          trackingLocation="guides-index"
        />

        <Breadcrumbs items={[{ label: "Guides" }]} />

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[820px] px-5">
            <div
              className="mb-8 rounded-xl border-2 border-[#ed6623] bg-[#fff7f2] p-5"
              data-speakable="true"
            >
              <p className="m-0 text-[16px] font-semibold leading-[1.55] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                The City of Pittsburgh collects two bulk items per week with regular residential
                refuse pickup, and does not take construction debris, household hazardous waste,
                or electronics at the curb. Appliances holding refrigerant must have it recovered
                by a certified technician before disposal. These guides cover every route for the
                items people get stuck with, starting with the free ones.
              </p>
            </div>

            <p className="text-[17px] leading-[1.75] text-[#1d1d1d] font-[family-name:var(--font-body)] lg:text-[18px]">
              Most of what people call us about has a do-it-yourself answer, and we would rather
              tell you what it is. Each guide below lays out every option in Pittsburgh, what the
              City actually accepts, which donations get refused and why, and the point where
              hiring someone stops being a luxury and starts being the sensible call.
            </p>
          </div>
        </section>

        <section className="bg-[#fafafa] py-14 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2 className="mb-8 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
              Pick Your Item
            </h2>
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 lg:grid-cols-3">
              {itemGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/how-to-get-rid-of/${g.slug}`}
                  className="group flex flex-col justify-between gap-3 rounded-xl border-2 border-[#1d1d1d]/10 bg-white p-6 transition-all hover:-translate-y-[2px] hover:border-[#ed6623] hover:shadow-[6px_6px_0_rgba(237,102,35,0.2)]"
                >
                  <div>
                    <h3 className="m-0 mb-3 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[20px]">
                      {g.title}
                    </h3>
                    <p className="m-0 text-[14px] leading-[1.55] text-[#1d1d1d]/75 font-[family-name:var(--font-body)]">
                      {g.heroSub}
                    </p>
                  </div>
                  <p className="m-0 inline-flex items-center gap-1 text-[13px] font-semibold uppercase text-[#ed6623] font-[family-name:var(--font-heading)]">
                    Read the guide <ArrowRight className="h-3 w-3" />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageFaq faqs={hubFaqs} heading="Pittsburgh Disposal FAQs" />

        <PageCta location="guides-index-bottom" heading="Rather Not Do It Yourself?" />
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${pageUrl}#collection`,
            name: "How to Get Rid of Anything in Pittsburgh",
            description:
              "Disposal guides for large household items in Pittsburgh, including City bulk collection rules, donation limits, recycling, and removal.",
            url: pageUrl,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: itemGuides.map((g, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: g.title,
                url: `${pageUrl}/${g.slug}`,
              })),
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
            mainEntity: hubFaqs.map((f) => ({
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
