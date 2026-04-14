import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { TrackedLink } from "@/components/tracked-link";

type Props = {
  headline: string;
  sub: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
  trackingLocation: string;
};

export function PageHero({ headline, sub, image, imageAlt, eyebrow, trackingLocation }: Props) {
  return (
    <section className="relative -mt-[88px] lg:-mt-[120px] min-h-[580px] lg:min-h-[640px] overflow-hidden bg-[#1d1d1d]">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(29,29,29,0.60) 0%, rgba(29,29,29,0.80) 60%, rgba(29,29,29,0.95) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 25%, rgba(237,102,35,0.25), transparent 55%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[580px] lg:min-h-[640px] max-w-[900px] flex-col items-center justify-center gap-6 px-5 pt-[200px] pb-[24px] text-center lg:pt-[260px] lg:pb-[20px]">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-black/40 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ed6623]" />
            <span className="font-[family-name:var(--font-heading)] text-[12px] uppercase tracking-wider text-white">
              {eyebrow}
            </span>
          </div>
        ) : null}

        <h1
          className="m-0 uppercase text-white font-[family-name:var(--font-heading)]"
          style={{
            fontSize: "clamp(28px, 5vw, 56px)",
            lineHeight: "1.05",
            fontWeight: 400,
            textShadow: "0 4px 30px rgba(0,0,0,0.75)",
          }}
        >
          {headline}
        </h1>

        <p
          className="max-w-[620px] text-white font-[family-name:var(--font-body)]"
          style={{
            fontSize: "clamp(14px, 1.6vw, 18px)",
            lineHeight: "1.55",
            fontWeight: 500,
            margin: 0,
            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
          }}
        >
          {sub}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 max-md:w-full max-md:max-w-[300px] max-md:flex-col max-md:gap-3">
          <TrackedLink
            href={`tel:${siteConfig.phone.tel}`}
            event="call_click"
            eventParams={{ location: trackingLocation }}
            className="btn btn-primary max-md:w-full"
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={3} />
            <span>CALL NOW FOR PICKUP</span>
          </TrackedLink>
          <TrackedLink
            href="/contact"
            event="quote_click"
            eventParams={{ location: trackingLocation }}
            className="btn btn-secondary max-md:w-full"
          >
            <span>GET A FREE QUOTE</span>
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
