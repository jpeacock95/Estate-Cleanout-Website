import { MapPin } from "lucide-react";

const allegheny = [
  "Pittsburgh",
  "Mt. Lebanon",
  "Bethel Park",
  "Monroeville",
  "Penn Hills",
  "Shaler Township",
  "McKeesport",
  "Wilkinsburg",
  "Plum",
  "Fox Chapel",
  "McCandless",
  "Upper St. Clair",
  "Squirrel Hill",
  "Robinson",
  "Moon Township",
];

const surrounding = [
  "Cranberry Twp",
  "Wexford",
  "Sewickley",
  "Gibsonia",
  "Mars",
  "Butler",
  "Beaver",
  "Aliquippa",
  "Coraopolis",
  "Washington",
  "Canonsburg",
  "Greensburg",
  "Murrysville",
  "Irwin",
  "New Kensington",
];

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
            Service Area Map
          </h2>
          <p
            className="text-[#666] font-[family-name:var(--font-body)]"
            style={{ fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: "28px", margin: 0 }}
          >
            Same-Day Junk Removal &amp; Estate Cleanouts Across Southwestern PA
          </p>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-start gap-[60px] max-lg:grid-cols-1 max-lg:gap-10">
          <div className="relative overflow-hidden rounded-[20px] border-2 border-black shadow-[10px_10px_0_#000]">
            <div
              className="relative aspect-[720/658] w-full"
              style={{
                background:
                  "linear-gradient(135deg, #2a2a2a 0%, #1d1d1d 40%, #0f0f0f 100%)",
              }}
            >
              <svg
                className="absolute inset-0 h-full w-full opacity-20"
                viewBox="0 0 720 658"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern id="topo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M0 30 Q15 20 30 30 T60 30" stroke="#ed6623" strokeWidth="1" fill="none" />
                    <path d="M0 45 Q15 35 30 45 T60 45" stroke="#fff" strokeWidth="0.5" fill="none" />
                  </pattern>
                </defs>
                <rect width="720" height="658" fill="url(#topo)" />
              </svg>

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 720 658"
                preserveAspectRatio="xMidYMid slice"
              >
                <path
                  d="M120 120 Q260 260 360 320"
                  stroke="#ed6623"
                  strokeWidth="6"
                  fill="none"
                  opacity="0.7"
                  strokeLinecap="round"
                />
                <path
                  d="M600 140 Q460 260 360 320"
                  stroke="#ed6623"
                  strokeWidth="6"
                  fill="none"
                  opacity="0.7"
                  strokeLinecap="round"
                />
                <path
                  d="M360 320 Q360 480 260 580"
                  stroke="#ed6623"
                  strokeWidth="8"
                  fill="none"
                  opacity="0.85"
                  strokeLinecap="round"
                />
                <circle cx="360" cy="320" r="16" fill="#ed6623" stroke="#fff" strokeWidth="3" />
                <circle cx="360" cy="320" r="32" fill="none" stroke="#ed6623" strokeWidth="2" opacity="0.4" />
                <circle cx="360" cy="320" r="60" fill="none" stroke="#ed6623" strokeWidth="2" opacity="0.25" />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="rounded-[60px] border-[3px] border-white bg-[#ed6623] px-[60px] py-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-md:px-10 max-md:py-[15px]">
                  <span
                    className="font-[family-name:var(--font-heading)] font-bold text-white"
                    style={{ fontSize: "clamp(24px, 3vw, 32px)", letterSpacing: "2px" }}
                  >
                    PITTSBURGH METRO
                  </span>
                </div>
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
                  <span
                    key={city}
                    className="inline-block cursor-pointer rounded-[30px] border-2 border-black bg-white px-5 py-2 text-[#1d1d1d] transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#ed6623] hover:text-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
                    style={{ fontSize: 14, fontWeight: 600, fontFamily: "var(--font-body)" }}
                  >
                    {city}
                  </span>
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
                  Surrounding Areas
                </h3>
              </div>
              <div className="flex flex-wrap gap-[10px]">
                {surrounding.map((city) => (
                  <span
                    key={city}
                    className="inline-block cursor-pointer rounded-[30px] border-2 border-black bg-white px-5 py-2 text-[#1d1d1d] transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#ed6623] hover:text-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
                    style={{ fontSize: 14, fontWeight: 600, fontFamily: "var(--font-body)" }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[10px] bg-[#ed6623]/10 p-5 text-center">
              <p className="m-0 text-[#1d1d1d] font-[family-name:var(--font-body)] text-[15px] font-semibold max-md:text-[14px]">
                Not sure if we cover your area? Give us a call — if you&apos;re within an
                hour of Pittsburgh, chances are we&apos;ll come clean it out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
