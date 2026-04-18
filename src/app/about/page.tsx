import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "About Steel City Cleanouts | Family-Owned Pittsburgh Junk Removal",
  description:
    "Family-owned, fully insured estate cleanouts and junk removal serving Pittsburgh and surrounding areas. Meet the crew.",
  alternates: { canonical: "https://www.steelcitycleanouts.com/about" },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.steelcitycleanouts.com/about#aboutpage",
  url: "https://www.steelcitycleanouts.com/about",
  name: "About Steel City Cleanouts",
  description:
    "Family-owned, fully insured estate cleanouts and junk removal company serving Pittsburgh and every surrounding township.",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": "https://www.steelcitycleanouts.com/#organization",
    name: "Steel City Cleanouts",
    url: "https://www.steelcitycleanouts.com",
    description:
      "Family-owned junk removal and estate cleanout company based in the Pittsburgh region. Fully insured, 7 days a week, upfront pricing.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cranberry Township",
        addressRegion: "PA",
        addressCountry: "US",
      },
    },
    areaServed: [
      "Pittsburgh, PA",
      "Cranberry Township, PA",
      "Wexford, PA",
      "Mt. Lebanon, PA",
      "Monroeville, PA",
      "Shaler Township, PA",
      "Squirrel Hill, PA",
      "Butler County, PA",
      "Allegheny County, PA",
    ],
    knowsAbout: [
      "Estate Cleanouts",
      "Junk Removal",
      "Hoarding Cleanup",
      "Property Cleanouts",
      "Appliance Removal",
      "Furniture Removal",
      "Garage Cleanouts",
      "Basement Cleanouts",
      "Post-Move Cleanouts",
    ],
    // UPDATE: Add named owner + headshot + Person schema once Jordan confirms business ownership details
    // See ACTION_ITEMS.md for details
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Estate Cleanouts and Junk Removal",
      },
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        minPrice: "200",
        maxPrice: "3500",
      },
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline="Family-Owned. Pittsburgh Born."
          sub="Steel City Cleanouts is a family-run junk removal and estate cleanout business serving Pittsburgh and every surrounding township."
          image="/images/hubs/about.jpg"
          imageAlt="Steel City Cleanouts crew on the job in Pittsburgh"
          eyebrow="About Us"
          trackingLocation="about"
        />
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[780px] px-5">
            <div className="mb-8 rounded-xl border-2 border-[#ed6623] bg-[#fff7f2] p-5">
              <p className="m-0 text-[16px] font-semibold leading-[1.55] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                Steel City Cleanouts is a family-owned junk removal and estate cleanout company based in the Pittsburgh region. Fully insured, 7 days a week, upfront pricing.
              </p>
            </div>

            <h2 className="mb-4 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
              Who We Are
            </h2>
            <p className="text-[17px] leading-[1.75] text-[#1d1d1d] font-[family-name:var(--font-body)]">
              Steel City Cleanouts started out of a simple observation: Pittsburgh families deserve better than the usual junk removal experience. No hidden fees, no four-hour arrival windows, no showing up with the wrong truck. We built this business to do it the right way, every time.
            </p>

            <h2 className="mb-4 mt-12 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
              What Makes Us Different
            </h2>
            <ul className="m-0 space-y-4 pl-5 text-[16px] leading-[1.7] text-[#1d1d1d]/85 font-[family-name:var(--font-body)]">
              <li><strong>Upfront pricing.</strong> We tell you the price before we touch anything. No surprises.</li>
              <li><strong>Same-day service.</strong> Most calls can be handled same day or next morning. No week-out scheduling.</li>
              <li><strong>Fully insured.</strong> Our crews are insured, uniformed, and trained to protect your floors, walls, and doorways.</li>
              <li><strong>Donation-first.</strong> Anything in good condition goes to local Pittsburgh charities when possible. We hate landfills too.</li>
              <li><strong>Family-owned.</strong> Local owners answer the phone, do walk-throughs, and stand behind every job.</li>
            </ul>

            <h2 className="mb-4 mt-12 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
              Where We Work
            </h2>
            <p className="text-[17px] leading-[1.75] text-[#1d1d1d] font-[family-name:var(--font-body)]">
              We serve Pittsburgh, Cranberry Township, Wexford, Mt. Lebanon, Monroeville, and every neighborhood and township in between. If you can get to Point State Park in under 45 minutes, we work your area.
            </p>
          </div>
        </section>
        <PageCta location="about-bottom" />
      </main>
      <SiteFooter />
    </>
  );
}
