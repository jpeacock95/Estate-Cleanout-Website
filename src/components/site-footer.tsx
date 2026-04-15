"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { services } from "@/lib/services-data";
import { serviceAreas } from "@/lib/service-areas-data";
import { resources } from "@/lib/resources-data";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
  { label: "Free Estimate", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#1d1d1d] py-[60px_20px] text-white">
      <div className="container-wide">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10 border-b border-white/10 pb-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:text-center">
          <div className="max-lg:col-span-full max-lg:text-center">
            <div className="mb-6 inline-block rounded-xl bg-white p-0 shadow-[6px_6px_0_rgba(237,102,35,0.5)] overflow-hidden">
              <Image
                src="/images/logo/steel-city-cleanouts.png"
                alt="Steel City Cleanouts, Pittsburgh, PA"
                width={520}
                height={520}
                className="block h-[220px] w-[220px] object-cover max-lg:mx-auto"
              />
            </div>
            <div className="mt-5">
              <p className="m-0 mb-[5px] text-[14px] opacity-80 font-[family-name:var(--font-body)]">
                Same-Day Service
              </p>
              <a
                href={`tel:${siteConfig.phone.tel}`}
                onClick={() => trackEvent("call_click", { location: "footer" })}
                className="mb-[5px] block text-[#ed6623] no-underline transition-colors hover:text-white font-[family-name:var(--font-heading)]"
                style={{ fontSize: 28 }}
              >
                {siteConfig.phone.display}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                onClick={() => trackEvent("email_click", { location: "footer" })}
                className="mb-[5px] block text-[14px] text-white/80 hover:text-[#ed6623] font-[family-name:var(--font-body)]"
              >
                {siteConfig.email}
              </a>
              <p className="m-0 text-[14px] opacity-80 font-[family-name:var(--font-body)]">
                Open 7 Days A Week
              </p>
            </div>
          </div>

          <FooterColumn title="Services">
            {services.map((s) => (
              <FooterLink
                key={s.slug}
                href={`/services/${s.slug}`}
                label={s.shortName}
                column="Services"
              />
            ))}
            <FooterLink href="/services" label="All Services →" column="Services" />
          </FooterColumn>

          <FooterColumn title="Service Areas">
            {serviceAreas.map((a) => (
              <FooterLink
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                label={`${a.name}, PA`}
                column="Service Areas"
              />
            ))}
            <FooterLink href="/service-areas" label="All Areas →" column="Service Areas" />
          </FooterColumn>

          <FooterColumn title="Company">
            {companyLinks.map((link) => (
              <FooterLink key={link.label} href={link.href} label={link.label} column="Company" />
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            {resources.map((r) => (
              <FooterLink
                key={r.slug}
                href={`/resources/${r.slug}`}
                label={r.title}
                column="Resources"
              />
            ))}
          </FooterColumn>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between max-md:flex-col max-md:gap-5 max-md:text-center">
            <div className="max-md:text-center">
              <p className="m-0 text-[14px] opacity-70 font-[family-name:var(--font-body)]">
                © {new Date().getFullYear()} Steel City Cleanouts. All rights reserved. Licensed & Insured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 uppercase text-[#ed6623] font-[family-name:var(--font-heading)] text-[20px] max-md:text-[18px]">
        {title}
      </h3>
      <ul className="m-0 list-none p-0">{children}</ul>
    </div>
  );
}

function FooterLink({ href, label, column }: { href: string; label: string; column: string }) {
  return (
    <li className="mb-3">
      <Link
        href={href}
        onClick={() => trackEvent("footer_link_click", { label, column })}
        className="inline-block text-[16px] text-white opacity-90 no-underline transition-all hover:translate-x-[3px] hover:text-[#ed6623] max-md:text-[14px] font-[family-name:var(--font-body)]"
      >
        {label}
      </Link>
    </li>
  );
}
