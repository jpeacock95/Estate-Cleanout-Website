import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageCta } from "@/components/page-cta";
import { ReviewsSection } from "@/components/reviews-section";

export const metadata: Metadata = {
  title: "Reviews | Steel City Cleanouts Pittsburgh PA",
  description:
    "Customer reviews for Steel City Cleanouts. Estate cleanouts and junk removal across Pittsburgh and surrounding areas.",
  alternates: { canonical: "https://www.steelcitycleanouts.com/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline="What Pittsburgh Says"
          sub="Real reviews from families and businesses across the Steel City region."
          image="/images/work/workers-carrying-boxes.jpg"
          imageAlt="Steel City Cleanouts crew at work"
          eyebrow="Reviews"
          trackingLocation="reviews"
        />
        <ReviewsSection />
        <PageCta location="reviews-bottom" />
      </main>
      <SiteFooter />
    </>
  );
}
