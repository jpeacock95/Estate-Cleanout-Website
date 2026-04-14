"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Trash2,
  Sofa,
  Refrigerator,
  Warehouse,
  Package2,
  Hammer,
  Leaf,
  ArrowRight,
  Clock,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const emergencyCards = [
  {
    slug: "estate-cleanouts",
    image: "/images/before-after/livingroom-after.jpg",
    imageAlt: "Empty living room with polished hardwood floors after a full estate cleanout by Steel City Cleanouts",
    title: "Estate Cleanouts",
    description:
      "Full-home cleanouts for probate, downsizing, and estate sales. Respectful, thorough, and fast.",
  },
  {
    slug: "junk-removal",
    image: "/images/work/crew-armchair-steps.jpg",
    imageAlt: "Two Steel City Cleanouts crew members in orange safety vests carrying a leather armchair down the front steps of a Pittsburgh row house",
    title: "Same-Day Junk Removal",
    description:
      "We show up when we say we will and haul everything out. No sorting, no stress, no hidden fees.",
  },
];

const iconServices = [
  { icon: Sofa, title: "Furniture", slug: "furniture-removal" },
  { icon: Refrigerator, title: "Appliances", slug: "appliance-removal" },
  { icon: Home, title: "Estate Cleanouts", slug: "estate-cleanouts" },
  { icon: Warehouse, title: "Garage Cleanouts", slug: "garage-cleanouts" },
  { icon: Package2, title: "Hoarder Cleanup", slug: "hoarder-cleanouts" },
  { icon: Hammer, title: "Construction Debris", slug: "construction-debris" },
  { icon: Leaf, title: "Yard Waste", slug: "yard-waste-removal" },
  { icon: Trash2, title: "Bulk Junk Removal", slug: "junk-removal" },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-[106px] pb-[100px] max-md:py-[60px]">
      <div className="container-site">
        <div className="relative mb-[100px] text-center max-md:mb-[60px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#ed6623] px-4 py-2 text-white shadow-[3px_3px_0_#000]">
            <Clock className="h-4 w-4" strokeWidth={3} />
            <span className="font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase tracking-wider">
              Same-Day Service
            </span>
          </div>
          <h2
            className="m-0 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
            style={{
              fontSize: "clamp(36px, 4vw, 50px)",
              lineHeight: "1.2",
            }}
          >
            Full-Service Cleanouts, On Your Schedule
          </h2>
        </div>

        <div className="mx-auto mb-[120px] grid max-w-[1200px] grid-cols-2 gap-5 max-md:mb-[80px] max-md:grid-cols-1 max-md:gap-[30px]">
          {emergencyCards.map(({ slug, image, imageAlt, title, description }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              onClick={() => trackEvent("service_card_click", { service_slug: slug, location: "home-full-service" })}
              className="group relative block overflow-hidden rounded-[20px] border-2 border-[#1d1d1d] bg-white p-10 text-center text-[#1d1d1d] no-underline shadow-[10px_10px_0_#000] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[15px_15px_0_#000] max-md:p-[30px_20px]"
            >
              <div className="relative mb-[30px] h-[240px] overflow-hidden rounded-[10px] max-md:mb-5 max-md:h-[180px]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <h3
                className="mb-5 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
                style={{
                  fontSize: "clamp(32px, 3vw, 44px)",
                  lineHeight: "1.05",
                  margin: "0 0 20px",
                }}
              >
                {title}
              </h3>
              <p
                className="mx-auto mb-5 max-w-[360px] text-[#1d1d1d] font-[family-name:var(--font-body)]"
                style={{ fontSize: 16, lineHeight: "25px", fontWeight: 500, margin: "0 0 20px" }}
              >
                {description}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-5">
                <span className="uppercase text-[#ed6623] font-[family-name:var(--font-heading)] text-[18px]">
                  Learn More
                </span>
                <ArrowRight
                  className="h-5 w-5 text-[#ed6623] transition-transform group-hover:translate-x-[5px]"
                  strokeWidth={2.5}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="relative mb-20 text-center max-md:mb-[60px]">
          <div className="mb-5 inline-block rounded-full border-2 border-black bg-[#ed6623] px-4 py-2 text-white shadow-[3px_3px_0_#000]">
            <span className="font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase tracking-wider">
              We Haul It All
            </span>
          </div>
          <h2
            className="m-0 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
            style={{
              fontSize: "clamp(36px, 4vw, 50px)",
              lineHeight: "1.2",
            }}
          >
            Pittsburgh Junk Removal Services
          </h2>
        </div>

        <div className="mx-auto mb-16 grid max-w-[1200px] grid-cols-4 gap-x-[30px] gap-y-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-y-7 max-md:gap-x-3 max-md:mb-12">
          {iconServices.map(({ icon: Icon, title, slug }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              onClick={() => trackEvent("service_card_click", { service_slug: slug, location: "home-icon-grid" })}
              className="group block rounded-[15px] p-[30px_20px] text-center text-[#1d1d1d] no-underline transition-transform duration-300 hover:-translate-y-[3px] max-md:p-[16px_8px]"
            >
              <div className="mx-auto mb-4 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#ed6623]/10 transition-colors group-hover:bg-[#ed6623]/20 max-md:h-[60px] max-md:w-[60px]">
                <Icon className="h-9 w-9 text-[#ed6623] max-md:h-7 max-md:w-7" strokeWidth={1.75} />
              </div>
              <h3
                className="mb-[10px] uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
                style={{
                  fontSize: "clamp(18px, 2.4vw, 28px)",
                  lineHeight: "1.1",
                  margin: "0 0 10px",
                }}
              >
                {title}
              </h3>
              <div className="mt-2 flex items-center justify-center opacity-70 transition-all duration-300 group-hover:-translate-y-[2px] group-hover:opacity-100">
                <span className="mr-1 font-[family-name:var(--font-heading)] text-[12px] uppercase text-[#ed6623] max-md:text-[11px]">
                  Learn More
                </span>
                <ArrowRight className="h-3 w-3 text-[#ed6623]" strokeWidth={2.5} />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            onClick={() => trackEvent("quote_click", { location: "home-services-bottom" })}
            className="btn btn-primary"
          >
            <span>BOOK YOUR CLEANOUT</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
