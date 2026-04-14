import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { TrackedLink } from "@/components/tracked-link";

export function PageCta({ location, heading = "Ready to Clear It Out?" }: { location: string; heading?: string }) {
  return (
    <section className="bg-[#1d1d1d] py-16 lg:py-24 text-white">
      <div className="mx-auto max-w-[820px] px-5 text-center">
        <h2 className="mb-5 uppercase text-white font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px]">
          {heading}
        </h2>
        <p className="mb-8 text-[16px] opacity-90 font-[family-name:var(--font-body)] lg:text-[18px]">
          Same-day service across Pittsburgh. Upfront pricing. No hidden fees. Call or text for a free quote.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 max-md:flex-col">
          <TrackedLink
            href={`tel:${siteConfig.phone.tel}`}
            event="call_click"
            eventParams={{ location }}
            className="btn btn-primary max-md:w-full"
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={3} />
            <span>CALL {siteConfig.phone.display}</span>
          </TrackedLink>
          <TrackedLink
            href="/contact"
            event="quote_click"
            eventParams={{ location }}
            className="btn btn-secondary max-md:w-full"
          >
            <span>GET A FREE QUOTE</span>
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
