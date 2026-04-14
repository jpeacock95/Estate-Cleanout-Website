import {
  Heart,
  ShieldCheck,
  DollarSign,
  Clock,
  MessageCircle,
  Award,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const items = [
  {
    icon: Heart,
    title: "Family Owned & Local",
    description: "Born and raised in the Burgh. You're hiring your neighbors, not a call center.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Need it gone today? We work fast and show up when we say we will.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees. You get a firm quote before we lift a thing.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Licensed and insured for your peace of mind on every job, big or small.",
  },
  {
    icon: MessageCircle,
    title: "Respectful & Reliable",
    description: "Estate cleanouts are emotional. We handle your home with care and discretion.",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "We don't leave until the space is broom-clean and you're 100% happy.",
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="why-us"
      className="relative mt-[100px] bg-[#f8f9fa] py-[150px_100px] max-md:mt-[60px] max-md:py-[60px]"
    >
      <div className="container-site">
        <div className="relative mb-[100px] flex flex-col items-center justify-center rounded-[20px] border-2 border-black bg-[#ed6623] p-[60px] text-center shadow-[10px_10px_0_#000] max-md:mb-[60px] max-md:p-[40px_20px]">
          <span className="pointer-events-none absolute left-[22px] top-[22px] h-[17px] w-[17px] rounded-full bg-[#1d1d1d]" />
          <span className="pointer-events-none absolute right-[22px] top-[22px] h-[17px] w-[17px] rounded-full bg-[#1d1d1d]" />
          <span className="pointer-events-none absolute bottom-[22px] left-[22px] h-[17px] w-[17px] rounded-full bg-[#1d1d1d]" />
          <span className="pointer-events-none absolute bottom-[22px] right-[22px] h-[17px] w-[17px] rounded-full bg-[#1d1d1d]" />

          <h2
            className="mb-10 uppercase text-white font-[family-name:var(--font-heading)]"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: "1",
              letterSpacing: "2px",
              margin: "0 0 40px",
            }}
          >
            Need A Cleanout Today?
          </h2>

          <div className="text-center">
            <p className="mb-[15px] font-[family-name:var(--font-body)] text-[18px] font-medium leading-6 text-white">
              Call us now for a free estimate
            </p>
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="inline-flex items-center gap-3 rounded-[60px] border-[3px] border-black bg-white px-10 py-[15px] text-black no-underline transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] max-md:px-6 max-md:py-3"
              style={{ letterSpacing: "2px" }}
            >
              <Phone className="h-8 w-8 max-md:h-6 max-md:w-6" strokeWidth={2.5} />
              <span
                className="font-[family-name:var(--font-heading)] font-bold"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "50px" }}
              >
                {siteConfig.phone.display}
              </span>
            </a>
          </div>
        </div>

        <div className="mx-auto mb-[120px] grid max-w-[1200px] grid-cols-3 gap-x-10 gap-y-[60px] max-lg:grid-cols-2 max-md:mb-[60px] max-md:grid-cols-1 max-md:gap-10">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#ed6623]/10">
                <Icon className="h-9 w-9 text-[#ed6623]" strokeWidth={1.75} />
              </div>
              <h3
                className="mb-[15px] uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
                style={{
                  fontSize: "clamp(28px, 2.8vw, 38px)",
                  lineHeight: "1.15",
                  margin: "0 0 15px",
                }}
              >
                {title}
              </h3>
              <p
                className="mx-auto max-w-[260px] text-[#1d1d1d] font-[family-name:var(--font-body)]"
                style={{ fontSize: 16, lineHeight: "22px", fontWeight: 500, margin: 0 }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-[900px]">
          <div className="relative mb-10 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#ed6623] px-6 py-3 text-white shadow-[6px_6px_0_#000]">
              <span
                className="font-[family-name:var(--font-heading)] font-bold uppercase text-white"
                style={{ fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "2px" }}
              >
                Trusted By Families & Realtors
              </span>
            </div>
            <h2
              className="uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
              style={{
                fontSize: "clamp(30px, 3.2vw, 44px)",
                lineHeight: "1.05",
                margin: 0,
                paddingTop: 20,
              }}
            >
              Pittsburgh&apos;s Go-To Cleanout Team
            </h2>
          </div>
          <p
            className="text-[#1d1d1d] font-[family-name:var(--font-body)]"
            style={{ fontSize: 16, lineHeight: 1.7, fontWeight: 500, textAlign: "justify" }}
          >
            When a loved one passes, the last thing a family needs is another headache.
            Steel City Cleanouts steps in to take the weight off your shoulders. We&apos;ve
            cleaned out hundreds of homes across Allegheny, Butler, Beaver, Washington, and
            Westmoreland counties, donating what we can, recycling everything possible, and
            hauling the rest with respect. Whether it&apos;s a single room, a garage, or a
            full estate, we handle it with care.
          </p>
          <div className="mt-[30px] text-center">
            <a href="#contact" className="btn btn-primary">
              <span>GET YOUR FREE ESTIMATE</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
