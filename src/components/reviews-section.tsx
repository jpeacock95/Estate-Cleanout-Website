import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Linda M.",
    location: "Mt. Lebanon",
    text: "After my mom passed, I had to clear out her house in a week. Steel City showed up the next morning, worked all day, and left the place broom-clean. I cried when they were done. Worth every penny.",
    rating: 5,
  },
  {
    name: "Mark T.",
    location: "Shaler Township",
    text: "Called Monday, they were at my garage Tuesday. Upfront price, no surprises, and two guys who actually knew what they were doing. Hauled stuff I'd been putting off for three years.",
    rating: 5,
  },
  {
    name: "Rachel P.",
    location: "Squirrel Hill",
    text: "I'm a realtor and I use them on every listing that needs a cleanout. Fast, honest, and they make me look great to my sellers. They're on my speed dial for a reason.",
    rating: 5,
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.steelcitycleanouts.com/#reviews",
  name: "Steel City Cleanouts",
  url: "https://www.steelcitycleanouts.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: reviews.length.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: r.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating.toString(),
      bestRating: "5",
    },
    reviewBody: r.text,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Steel City Cleanouts",
    },
    locationCreated: {
      "@type": "Place",
      name: r.location,
    },
  })),
};

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#f8f9fa] py-20 max-md:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="container-wide">
        <h2
          className="mb-10 text-center uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
          style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          What Our Customers Say
        </h2>

        <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-8 max-lg:grid-cols-1">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative rounded-[20px] border-2 border-[#1d1d1d] bg-white p-8 shadow-[6px_6px_0_#000]"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-[#ed6623]/20" fill="currentColor" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#ed6623] text-[#ed6623]" />
                ))}
              </div>
              <p className="mb-6 text-[15px] leading-[24px] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="border-t border-black/10 pt-4">
                <p
                  className="uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
                  style={{ fontSize: 22, lineHeight: 1, margin: 0 }}
                >
                  {r.name}
                </p>
                <p className="mt-1 text-[13px] text-[#666] font-[family-name:var(--font-body)]">
                  {r.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
