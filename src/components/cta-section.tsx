import { Phone, Truck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function CTASection() {
  return (
    <section id="contact" className="bg-[#f8f9fa] py-[100px_60px] max-md:py-[60px]">
      <div className="container-site">
        <div className="mx-auto max-w-[600px] text-center">
          <div className="mb-[30px] inline-flex h-[77px] w-[77px] items-center justify-center rounded-full bg-[#ed6623]">
            <Truck className="h-10 w-10 text-white" strokeWidth={2} />
          </div>

          <h2
            className="mb-[30px] uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
            style={{
              fontSize: "clamp(32px, 4vw, 44px)",
              lineHeight: "1.05",
              margin: "0 0 30px",
            }}
          >
            Ready For A Fast, Stress-Free Cleanout?
          </h2>
          <p
            className="mb-10 text-[#1d1d1d] font-[family-name:var(--font-body)]"
            style={{ fontSize: 16, lineHeight: "22px", fontWeight: 500, margin: "0 0 40px" }}
          >
            Contact Steel City Cleanouts today. We&apos;ll be at your door tomorrow.
          </p>

          <div className="flex flex-wrap justify-center gap-5 max-md:flex-col max-md:items-center">
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="btn btn-primary max-md:w-full max-md:max-w-[300px]"
            >
              <Phone className="h-[18px] w-[18px]" strokeWidth={3} />
              <span>CALL NOW FOR SERVICE</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-primary max-md:w-full max-md:max-w-[300px]"
            >
              <span>REQUEST A QUOTE</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
