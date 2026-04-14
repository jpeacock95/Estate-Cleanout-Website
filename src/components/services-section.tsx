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

const emergencyCards = [
  {
    icon: Home,
    title: "Estate Cleanouts",
    description:
      "Full-home cleanouts for probate, downsizing, and estate sales. Respectful, thorough, and fast.",
    href: "#services",
  },
  {
    icon: Trash2,
    title: "Same-Day Junk Removal",
    description:
      "We show up when we say we will and haul everything out. No sorting, no stress, no hidden fees.",
    href: "#services",
  },
];

const services = [
  { icon: Sofa, title: "Furniture" },
  { icon: Refrigerator, title: "Appliances" },
  { icon: Home, title: "Estate Cleanouts" },
  { icon: Warehouse, title: "Garage Cleanouts" },
  { icon: Package2, title: "Hoarder Cleanup" },
  { icon: Hammer, title: "Construction Debris" },
  { icon: Leaf, title: "Yard Waste" },
  { icon: Trash2, title: "Bulk Junk Removal" },
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
          {emergencyCards.map(({ icon: Icon, title, description, href }) => (
            <a
              key={title}
              href={href}
              className="group relative block overflow-hidden rounded-[20px] border-2 border-[#1d1d1d] bg-white p-10 text-center text-[#1d1d1d] no-underline shadow-[10px_10px_0_#000] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[15px_15px_0_#000] max-md:p-[30px_20px]"
            >
              <div className="mb-[30px] flex h-[200px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#ed6623]/10 to-[#1d1d1d]/5 max-md:mb-5 max-md:h-[140px]">
                <Icon className="h-24 w-24 text-[#ed6623] max-md:h-16 max-md:w-16" strokeWidth={1.5} />
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
            </a>
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
          {services.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group block rounded-[15px] p-[30px_20px] text-center text-[#1d1d1d] no-underline transition-transform duration-300 hover:-translate-y-[3px] max-md:p-[16px_8px]"
            >
              <div className="mx-auto mb-4 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#ed6623]/10 max-md:h-[60px] max-md:w-[60px]">
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
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="btn btn-primary">
            <span>BOOK YOUR CLEANOUT</span>
          </a>
        </div>
      </div>
    </section>
  );
}
