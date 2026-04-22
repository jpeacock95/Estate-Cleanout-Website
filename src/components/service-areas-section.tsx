import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

type CityItem = { name: string; slug: string | null };

const allegheny: CityItem[] = [
  { name: "Pittsburgh", slug: "pittsburgh" },
  { name: "Mt. Lebanon", slug: "mt-lebanon" },
  { name: "Bethel Park", slug: "bethel-park" },
  { name: "Monroeville", slug: "monroeville" },
  { name: "Penn Hills", slug: "penn-hills" },
  { name: "Shaler Township", slug: "shaler-township" },
  { name: "McKeesport", slug: null },
  { name: "Wilkinsburg", slug: null },
  { name: "Plum", slug: "plum-borough" },
  { name: "Fox Chapel", slug: "fox-chapel" },
  { name: "McCandless", slug: "mccandless" },
  { name: "Upper St. Clair", slug: "upper-st-clair" },
  { name: "Squirrel Hill", slug: "squirrel-hill" },
  { name: "Robinson", slug: "robinson-township" },
  { name: "Moon Township", slug: "moon-township" },
];

const surrounding: CityItem[] = [
  { name: "Cranberry Twp", slug: "cranberry-township" },
  { name: "Wexford", slug: "wexford" },
  { name: "Sewickley", slug: "sewickley" },
  { name: "Gibsonia", slug: null },
  { name: "Mars", slug: null },
  { name: "Butler", slug: null },
  { name: "Beaver", slug: null },
  { name: "Aliquippa", slug: null },
  { name: "Coraopolis", slug: null },
  { name: "Washington", slug: null },
  { name: "Canonsburg", slug: null },
  { name: "Greensburg", slug: null },
  { name: "Murrysville", slug: null },
  { name: "Irwin", slug: null },
  { name: "New Kensington", slug: null },
];

function CityPill({ city }: { city: CityItem }) {
  const className =
    "inline-block rounded-[30px] border-2 border-black bg-white px-5 py-2 text-[#1d1d1d] transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#ed6623] hover:text-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]";
  const style = { fontSize: 14, fontWeight: 600, fontFamily: "var(--font-body)" };

  if (city.slug) {
    return (
      <Link href={`/service-areas/${city.slug}`} className={className} style={style}>
        {city.name}
      </Link>
    );
  }
  return (
    <span className={className} style={style}>
      {city.name}
    </span>
  );
}

export function ServiceAreasSection() {
  return (
    <section
      id="service-areas"
      className="mt-[100px] bg-[#f8f9fa] py-[100px] max-md:mt-[60px] max-md:py-[60px]"
    >
      <div className="container-site">
        <div className="mb-[60px] text-center max-md:mb-10">
          <h2
            className="mb-5 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
            style={{ fontSize: "clamp(36px, 4vw, 48px)", lineHeight: 1.1, margin: "0 0 20px" }}
          >
            Pittsburgh PA Service Area
          </h2>
          <p
            className="text-[#666] font-[family-name:var(--font-body)]"
            style={{ fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: "28px", margin: 0 }}
          >
            Same-Day Junk Removal &amp; Estate Cleanouts Across Pittsburgh and Allegheny County
          </p>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-start gap-[60px] max-lg:grid-cols-1 max-lg:gap-10">
          <div className="relative overflow-hidden rounded-[20px] border-2 border-black shadow-[10px_10px_0_#000]">
            <div className="relative aspect-[720/658] w-full">
              <Image
                src="/images/pittsburgh/pittsburgh-bridges-aerial.jpg"
                alt="Aerial view of Pittsburgh's Point State Park, Fort Pitt Bridge, and the three rivers, the heart of our Pittsburgh PA service area"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-[60px] border-[3px] border-white bg-[#ed6623] px-[60px] py-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] max-md:px-10 max-md:py-[15px]">
                  <span
                    className="font-[family-name:var(--font-heading)] font-bold text-white"
                    style={{ fontSize: "clamp(24px, 3vw, 32px)", letterSpacing: "2px" }}
                  >
                    PITTSBURGH METRO
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16">
                <p className="m-0 text-[13px] font-semibold uppercase tracking-wider text-white/90 font-[family-name:var(--font-heading)]">
                  Point State Park · Downtown Pittsburgh, PA
                </p>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="mb-10">
              <div className="mb-5 flex items-center gap-[15px]">
                <MapPin className="h-7 w-5 text-[#ed6623]" strokeWidth={2.5} />
                <h3
                  className="uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
                  style={{ fontSize: "clamp(24px, 2.4vw, 28px)", lineHeight: 1, margin: 0 }}
                >
                  Allegheny County
                </h3>
              </div>
              <div className="flex flex-wrap gap-[10px]">
                {allegheny.map((city) => (
                  <CityPill key={city.name} city={city} />
                ))}
              </div>
            </div>

            <div className="mb-10">
              <div className="mb-5 flex items-center gap-[15px]">
                <MapPin className="h-7 w-5 text-[#ed6623]" strokeWidth={2.5} />
                <h3
                  className="uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
                  style={{ fontSize: "clamp(24px, 2.4vw, 28px)", lineHeight: 1, margin: 0 }}
                >
                  Butler County &amp; Surrounding Areas
                </h3>
              </div>
              <div className="flex flex-wrap gap-[10px]">
                {surrounding.map((city) => (
                  <CityPill key={city.name} city={city} />
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[10px] bg-[#ed6623]/10 p-5 text-center">
              <p className="m-0 text-[#1d1d1d] font-[family-name:var(--font-body)] text-[15px] font-semibold max-md:text-[14px]">
                Based in Cranberry Township, PA, covering every Pittsburgh PA
                neighborhood from Downtown to Mt. Washington. Not sure if we cover
                your area?{" "}
                <Link
                  href="/service-areas"
                  className="text-[#ed6623] underline underline-offset-2 hover:text-[#1d1d1d]"
                >
                  See all service areas
                </Link>{" "}
                or call us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
