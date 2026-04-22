import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { BeforeAfterSection } from "@/components/before-after-section";
import { LocalStripSection } from "@/components/local-strip-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServiceAreasSection } from "@/components/service-areas-section";
import { CTASection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    url: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BeforeAfterSection />
        <LocalStripSection />
        <WhyChooseSection />
        <ReviewsSection />
        <ServiceAreasSection />
        <CTASection />
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${siteConfig.url}#business`,
            name: siteConfig.brand,
            alternateName: "Steel City Cleanouts LLC",
            image: `${siteConfig.url}/images/hero/hero-2.jpg`,
            logo: `${siteConfig.url}/images/logo/steel-city-cleanouts.png`,
            url: siteConfig.url,
            telephone: `+1${siteConfig.phone.tel}`,
            email: siteConfig.email,
            priceRange: siteConfig.priceRange,
            foundingDate: `${siteConfig.foundingYear}-01-01`,
            address: {
              "@type": "PostalAddress",
              streetAddress: `${siteConfig.address.locality}, ${siteConfig.address.region}`,
              addressLocality: siteConfig.address.locality,
              addressRegion: siteConfig.address.region,
              postalCode: siteConfig.address.postalCode,
              addressCountry: siteConfig.address.country,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: siteConfig.geo.latitude,
              longitude: siteConfig.geo.longitude,
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
            description:
              "Same-day estate cleanouts and junk removal in Pittsburgh, PA and Allegheny County. Cranberry-based, family-owned since 2026. Fully insured, upfront pricing. Single items from $95. Full estate cleanouts $800 to $3,500.",
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Butler County, Pennsylvania",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Pittsburgh, PA",
                "@id": "https://www.wikidata.org/wiki/Q1342",
              },
              {
                "@type": "AdministrativeArea",
                name: "Allegheny County, PA",
                "@id": "https://www.wikidata.org/wiki/Q484049",
              },
              { "@type": "City", name: "Mt. Lebanon, PA" },
              { "@type": "City", name: "Cranberry Township, PA" },
              { "@type": "City", name: "Monroeville, PA" },
              { "@type": "City", name: "Wexford, PA" },
              { "@type": "City", name: "Shadyside, Pittsburgh, PA" },
              { "@type": "City", name: "Squirrel Hill, Pittsburgh, PA" },
              { "@type": "City", name: "Upper St. Clair, PA" },
              { "@type": "City", name: "Sewickley, PA" },
              { "@type": "City", name: "Bethel Park, PA" },
              { "@type": "City", name: "Ross Township, PA" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Cleanout and Junk Removal Services",
              itemListElement: [
                "Estate Cleanouts",
                "Junk Removal",
                "Appliance Removal",
                "Furniture Removal",
                "Garage Cleanouts",
                "Hoarder Cleanouts",
                "Foreclosure Cleanouts",
                "Eviction Cleanouts",
                "Construction Debris Removal",
                "Yard Waste Removal",
              ].map((name) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name },
              })),
            },
            ...(siteConfig.sameAs.length ? { sameAs: siteConfig.sameAs } : {}),
          }),
        }}
      />
    </>
  );
}
