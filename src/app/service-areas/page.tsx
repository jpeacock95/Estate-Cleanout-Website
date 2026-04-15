import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { PageCta } from "@/components/page-cta";
import { serviceAreas } from "@/lib/service-areas-data";

export const metadata: Metadata = {
  title: "Service Areas | Estate Cleanouts & Junk Removal Pittsburgh Suburbs",
  description:
    "Steel City Cleanouts serves Pittsburgh, Cranberry Township, Wexford, Mt. Lebanon, Monroeville and every suburb in between. Same-day service.",
  alternates: { canonical: "https://www.steelcitycleanouts.com/service-areas" },
};

export default function AreasIndex() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline="Where We Work"
          sub="Pittsburgh and every surrounding township, 7 days a week."
          image="/images/hubs/service-areas.jpg"
          imageAlt="Pittsburgh hillside neighborhood"
          eyebrow="Service Areas"
          trackingLocation="areas-index"
        />
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 lg:grid-cols-3">
              {serviceAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/service-areas/${a.slug}`}
                  className="group overflow-hidden rounded-xl border-2 border-[#1d1d1d]/10 bg-white transition-all hover:-translate-y-[2px] hover:border-[#ed6623] hover:shadow-[6px_6px_0_rgba(237,102,35,0.2)]"
                >
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <Image
                      src={a.heroImage}
                      alt={`Steel City Cleanouts serving ${a.fullName}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h2 className="m-0 uppercase text-white font-[family-name:var(--font-heading)] text-[22px]">
                        {a.name}
                      </h2>
                      <p className="mt-1 inline-flex items-center gap-1 text-[12px] text-white/80 font-[family-name:var(--font-body)]">
                        <MapPin className="h-3 w-3" /> {a.county}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="m-0 text-[14px] leading-[1.55] text-[#1d1d1d]/75 font-[family-name:var(--font-body)]">
                      {a.heroSub}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <PageCta location="areas-index-bottom" />
      </main>
      <SiteFooter />
    </>
  );
}
