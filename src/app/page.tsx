import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServiceAreasSection } from "@/components/service-areas-section";
import { CTASection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
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
            name: siteConfig.brand,
            image: "/images/og.jpg",
            telephone: `+1${siteConfig.phone.tel}`,
            email: siteConfig.email,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pittsburgh",
              addressRegion: "PA",
              addressCountry: "US",
            },
            description:
              "Same-day estate cleanouts and junk removal across Pittsburgh and surrounding areas. Family-owned, fully insured, upfront pricing.",
            areaServed: [
              "Pittsburgh, PA",
              "Mt. Lebanon, PA",
              "Cranberry Township, PA",
              "Monroeville, PA",
              "Wexford, PA",
              "Shaler Township, PA",
            ].map((a) => ({ "@type": "City", name: a })),
          }),
        }}
      />
    </>
  );
}
