import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageCta } from "@/components/page-cta";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "All Services | Estate Cleanouts & Junk Removal Pittsburgh | Steel City Cleanouts",
  description:
    "Full list of Steel City Cleanouts services in Pittsburgh PA: estate cleanouts, junk removal, appliance removal, furniture removal, garage cleanouts. Same-day service.",
  alternates: { canonical: "https://www.steelcitycleanouts.com/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline="Everything We Haul"
          sub="Estate cleanouts, junk removal, and every service in between — Pittsburgh and surrounding areas."
          image="/images/work/crew-loading-truck.jpg"
          imageAlt="Steel City Cleanouts crew loading a truck in Pittsburgh"
          eyebrow="All Services"
          trackingLocation="services-index"
        />
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 lg:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group overflow-hidden rounded-xl border-2 border-[#1d1d1d]/10 bg-white transition-all hover:-translate-y-[2px] hover:border-[#ed6623] hover:shadow-[6px_6px_0_rgba(237,102,35,0.2)]"
                >
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <Image
                      src={s.heroImage}
                      alt={`${s.name} Pittsburgh`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h2 className="m-0 uppercase text-white font-[family-name:var(--font-heading)] text-[22px]">
                        {s.name}
                      </h2>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="m-0 text-[14px] leading-[1.55] text-[#1d1d1d]/75 font-[family-name:var(--font-body)]">
                      {s.heroSub}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold uppercase text-[#ed6623] font-[family-name:var(--font-heading)]">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <PageCta location="services-index-bottom" />
      </main>
      <SiteFooter />
    </>
  );
}
