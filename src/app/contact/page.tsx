import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Steel City Cleanouts | Pittsburgh PA Junk Removal",
  description:
    "Contact Steel City Cleanouts for a free quote on estate cleanouts or junk removal in Pittsburgh. Call (585) 200-0871 or fill the form.",
  alternates: { canonical: "https://www.steelcitycleanouts.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          headline="Get a Free Quote"
          sub="Tell us what needs to be hauled. We'll call or email you back fast."
          image="/images/work/crew-loaded-truck-curbside.jpg"
          imageAlt="Steel City Cleanouts truck loaded and ready"
          eyebrow="Contact"
          trackingLocation="contact"
        />

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1100px] px-5">
            <div className="grid grid-cols-[1fr_380px] gap-12 max-lg:grid-cols-1 max-lg:gap-10">
              <div>
                <h2 className="mb-3 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px]">
                  Send Us a Message
                </h2>
                <p className="mb-8 text-[16px] leading-[1.65] text-[#1d1d1d]/80 font-[family-name:var(--font-body)]">
                  Fill this out and we&apos;ll reach back out within a few hours on weekdays, same day on weekends. Or call us directly. We pick up.
                </p>
                <ContactForm />
              </div>

              <aside className="space-y-5">
                <div className="rounded-xl border-2 border-[#1d1d1d]/10 bg-[#fafafa] p-6">
                  <h3 className="mb-4 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[20px]">
                    Get In Touch
                  </h3>
                  <ContactRow icon={<Phone className="h-4 w-4" />} label="Call">
                    <a href="tel:5852000871" className="font-semibold text-[#ed6623] hover:underline">
                      (585) 200-0871
                    </a>
                  </ContactRow>
                  <ContactRow icon={<Mail className="h-4 w-4" />} label="Email">
                    <a href="mailto:hello@steelcitycleanouts.com" className="text-[#ed6623] hover:underline">
                      hello@steelcitycleanouts.com
                    </a>
                  </ContactRow>
                  <ContactRow icon={<Clock className="h-4 w-4" />} label="Hours">
                    7 days a week, 7am to 8pm
                  </ContactRow>
                  <ContactRow icon={<MapPin className="h-4 w-4" />} label="Service Area">
                    Pittsburgh + all surrounding townships
                  </ContactRow>
                </div>

                <div className="rounded-xl border-2 border-[#ed6623] bg-[#fff7f2] p-6">
                  <h3 className="mb-2 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[18px]">
                    Need Us Today?
                  </h3>
                  <p className="m-0 text-[14px] leading-[1.55] text-[#1d1d1d]/80 font-[family-name:var(--font-body)]">
                    Same-day service is available most days. Call us directly. We&apos;ll give you a real arrival window, not a four-hour block.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-1 flex items-center gap-2 text-[12px] font-semibold uppercase text-[#1d1d1d]/60 font-[family-name:var(--font-heading)]">
        <span className="text-[#ed6623]">{icon}</span>
        {label}
      </div>
      <div className="text-[15px] text-[#1d1d1d] font-[family-name:var(--font-body)]">{children}</div>
    </div>
  );
}
