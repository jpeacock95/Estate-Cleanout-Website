import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden max-md:h-auto max-md:min-h-0 max-md:mt-0 max-md:pb-10"
      style={{
        height: 912,
        marginTop: -102,
        background:
          "linear-gradient(135deg, rgb(26,26,26), rgb(45,45,45), rgb(26,26,26))",
      }}
    >
      {/* Pittsburgh skyline background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/pittsburgh/pittsburgh-skyline-hero.jpg"
          alt="Pittsburgh skyline at dusk showing the Duquesne Incline, Fort Pitt Bridge, and downtown from Mount Washington"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient overlay so the text stays legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(29,29,29,0.55) 0%, rgba(29,29,29,0.75) 60%, rgba(29,29,29,0.92) 100%)",
          }}
        />
        {/* Orange spot light — keeps brand color present */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 25%, rgba(237,102,35,0.25), transparent 55%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[900px] flex-col items-center justify-center gap-[30px] px-5 pt-[180px] pb-20 text-center max-md:min-h-0 max-md:max-w-full max-md:justify-start max-md:gap-5 max-md:px-5 max-md:pt-[100px] max-md:pb-0">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-black/40 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#ed6623]" />
          <span className="font-[family-name:var(--font-heading)] text-[13px] uppercase tracking-wider text-white">
            Family-Owned · Pittsburgh, PA
          </span>
        </div>

        <div className="relative text-center">
          <h1
            className="m-0 uppercase text-white font-[family-name:var(--font-heading)]"
            style={{
              fontSize: "clamp(32px, 5.5vw, 64px)",
              lineHeight: "1.02",
              fontWeight: 400,
              textShadow: "0 4px 30px rgba(0,0,0,0.6)",
            }}
          >
            {siteConfig.tagline}
            <br />
            <span className="text-[#ed6623]">{siteConfig.location}</span>
          </h1>
        </div>

        <p
          className="max-w-[620px] text-white font-[family-name:var(--font-body)] max-md:max-w-full max-md:px-2"
          style={{
            fontSize: "clamp(15px, 1.6vw, 18px)",
            lineHeight: "1.55",
            fontWeight: 500,
            margin: 0,
            textShadow: "0 2px 12px rgba(0,0,0,0.7)",
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

        <div className="flex flex-wrap items-center justify-center gap-[25px] max-md:w-full max-md:max-w-[280px] max-md:flex-col max-md:gap-3 max-md:mt-[10px]">
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
        className="absolute left-1/2 bottom-10 -translate-x-1/2 max-md:hidden animate-bounce-down"
        aria-hidden="true"
      >
        <svg width="15" height="38" viewBox="0 0 15 38" fill="none">
          <path d="M7.5 2v32M2 28l5.5 6L13 28" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
