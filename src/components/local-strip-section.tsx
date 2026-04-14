import Image from "next/image";
import { MapPin } from "lucide-react";

export function LocalStripSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width Pittsburgh night photo */}
      <div className="relative h-[500px] w-full max-md:h-[380px]">
        <Image
          src="/images/pittsburgh/pittsburgh-downtown-drone.jpg"
          alt="Pittsburgh downtown skyline at night with the Roberto Clemente Bridge reflected in the Allegheny River"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(29,29,29,0.88) 0%, rgba(29,29,29,0.55) 50%, rgba(29,29,29,0.88) 100%)",
          }}
        />

        {/* Content overlay */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-5">
          <div className="max-w-[680px] text-white max-md:text-center max-md:mx-auto">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-[#ed6623]" strokeWidth={3} />
              <span className="font-[family-name:var(--font-heading)] text-[14px] uppercase tracking-wider text-white">
                Born & Raised in the Burgh
              </span>
            </div>
            <h2
              className="mb-6 uppercase text-white font-[family-name:var(--font-heading)]"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: "1.02",
                textShadow: "0 4px 30px rgba(0,0,0,0.6)",
                margin: "0 0 24px",
              }}
            >
              Your Neighbors.
              <br />
              <span className="text-[#ed6623]">Not a 1-800 Number.</span>
            </h2>
            <p
              className="mb-8 max-w-[560px] text-white/90 max-md:mx-auto font-[family-name:var(--font-body)]"
              style={{
                fontSize: "clamp(16px, 1.7vw, 19px)",
                lineHeight: "1.6",
                fontWeight: 500,
                textShadow: "0 2px 12px rgba(0,0,0,0.7)",
                margin: "0 0 32px",
              }}
            >
              We live in Pittsburgh. We know the city, the neighborhoods, the
              three-story walk-ups in Bloomfield, the tight alleys in the South
              Side, the back roads out to Cranberry. When you call us, you&apos;re
              talking to someone who&apos;s loaded a truck on your block before.
            </p>

            {/* Proof row */}
            <div className="flex flex-wrap gap-6 max-md:justify-center max-md:gap-4">
              <div className="text-left max-md:text-center">
                <div
                  className="font-[family-name:var(--font-heading)] text-[#ed6623]"
                  style={{ fontSize: "clamp(36px, 4vw, 48px)", lineHeight: 1 }}
                >
                  500+
                </div>
                <div className="mt-1 text-[13px] uppercase tracking-wider text-white/80 font-[family-name:var(--font-body)]">
                  Cleanouts completed
                </div>
              </div>
              <div className="text-left max-md:text-center">
                <div
                  className="font-[family-name:var(--font-heading)] text-[#ed6623]"
                  style={{ fontSize: "clamp(36px, 4vw, 48px)", lineHeight: 1 }}
                >
                  5★
                </div>
                <div className="mt-1 text-[13px] uppercase tracking-wider text-white/80 font-[family-name:var(--font-body)]">
                  Google rating
                </div>
              </div>
              <div className="text-left max-md:text-center">
                <div
                  className="font-[family-name:var(--font-heading)] text-[#ed6623]"
                  style={{ fontSize: "clamp(36px, 4vw, 48px)", lineHeight: 1 }}
                >
                  24 hr
                </div>
                <div className="mt-1 text-[13px] uppercase tracking-wider text-white/80 font-[family-name:var(--font-body)]">
                  Average turnaround
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
