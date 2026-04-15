import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const slides = [
  {
    src: "/images/hero/hero-1.jpg",
    alt: "Two movers loading a couch into a truck on a residential Pittsburgh street",
  },
  {
    src: "/images/hero/hero-2.jpg",
    alt: "Junk removal crew carrying furniture out of a suburban Pittsburgh home",
  },
  {
    src: "/images/hero/hero-3.jpg",
    alt: "Pickup truck loaded with furniture parked curbside in front of a Pittsburgh house",
  },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative -mt-[88px] lg:-mt-[120px] min-h-[100svh] lg:h-[912px] overflow-hidden bg-[#1d1d1d]"
    >
      {/* Slideshow background */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div key={s.src} className="hero-slide absolute inset-0">
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Dark gradient for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(29,29,29,0.55) 0%, rgba(29,29,29,0.78) 60%, rgba(29,29,29,0.95) 100%)",
          }}
        />
        {/* Brand orange spotlight */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 25%, rgba(237,102,35,0.25), transparent 55%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] lg:min-h-[912px] max-w-[900px] flex-col items-center justify-center gap-7 px-5 pt-[200px] pb-[24px] text-center max-md:gap-5 lg:pt-[260px] lg:pb-[20px]">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-black/40 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#ed6623]" />
          <span className="font-[family-name:var(--font-heading)] text-[12px] uppercase tracking-wider text-white max-md:text-[11px]">
            Family-Owned · Pittsburgh, PA
          </span>
        </div>

        <h1
          className="m-0 uppercase text-white font-[family-name:var(--font-heading)]"
          style={{
            fontSize: "clamp(30px, 5.5vw, 64px)",
            lineHeight: "1.02",
            fontWeight: 400,
            textShadow: "0 4px 30px rgba(0,0,0,0.75)",
          }}
        >
          {siteConfig.tagline}
          <br />
          <span className="text-[#ed6623]">{siteConfig.location}</span>
        </h1>

        <p
          className="max-w-[620px] text-white font-[family-name:var(--font-body)] max-md:max-w-full max-md:px-2"
          style={{
            fontSize: "clamp(14px, 1.6vw, 18px)",
            lineHeight: "1.55",
            fontWeight: 500,
            margin: 0,
            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
          }}
        >
          <a
            href="#services"
            className="text-white underline underline-offset-2 transition-all hover:text-[#ed6623] hover:decoration-2"
          >
            Estate Cleanouts
          </a>{" "}
          &amp; Full-Service Junk Removal
          <br />
          Homes, Garages, Attics, Offices | Call Now for Fast, Reliable Pickup.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 max-md:w-full max-md:max-w-[300px] max-md:flex-col max-md:gap-3">
          <a href={`tel:${siteConfig.phone.tel}`} className="btn btn-primary max-md:w-full">
            <Phone className="h-[18px] w-[18px]" strokeWidth={3} />
            <span>CALL NOW FOR PICKUP</span>
          </a>
          <a href="#contact" className="btn btn-secondary max-md:w-full">
            <span>GET A FREE QUOTE</span>
          </a>
        </div>
      </div>

      <div
        className="absolute left-1/2 bottom-8 -translate-x-1/2 max-md:hidden animate-bounce-down"
        aria-hidden="true"
      >
        <svg width="15" height="38" viewBox="0 0 15 38" fill="none">
          <path
            d="M7.5 2v32M2 28l5.5 6L13 28"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
