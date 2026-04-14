"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[1020] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <nav className="mx-auto flex h-[120px] max-w-[1280px] items-center justify-between gap-6 px-8 max-lg:h-[88px] max-lg:px-5">
        <Link
          href="/"
          className="flex-shrink-0"
          aria-label="Steel City Cleanouts — home"
          onClick={() => trackEvent("nav_click", { label: "logo" })}
        >
          <Image
            src="/images/logo/steel-city-cleanouts-wordmark.png"
            alt="Steel City Cleanouts — Pittsburgh, PA"
            width={748}
            height={415}
            priority
            className="h-[104px] w-auto max-lg:h-[72px]"
          />
        </Link>

        <div className="flex items-center justify-end gap-10 max-lg:hidden">
          <ul className="flex list-none gap-8 p-0 m-0">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => trackEvent("nav_click", { label: item.label })}
                  className="font-[family-name:var(--font-heading)] text-[20px] text-[#1d1d1d] transition-colors hover:text-[#ed6623]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${siteConfig.phone.tel}`}
            onClick={() => trackEvent("call_click", { location: "header" })}
            className="inline-flex min-h-[42px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#ed6623] px-6 py-3 font-[family-name:var(--font-heading)] text-[20px] text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#ff6b00]"
          >
            <Phone className="h-4 w-4" strokeWidth={3} />
            CALL NOW
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          className="hidden max-lg:flex ml-auto mr-4 flex-col gap-1 border-0 bg-transparent p-2"
        >
          {open ? <X className="h-7 w-7 text-[#1d1d1d]" /> : <Menu className="h-7 w-7 text-[#1d1d1d]" />}
        </button>
      </nav>

      <div
        className={`lg:hidden fixed left-0 right-0 top-[88px] bg-white shadow-lg transition-all duration-300 ${
          open ? "translate-y-0 opacity-100 visible" : "-translate-y-[150%] opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 p-6 list-none">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  trackEvent("nav_click", { label: `mobile-${item.label}` });
                }}
                className="font-[family-name:var(--font-heading)] text-[22px] text-[#1d1d1d] hover:text-[#ed6623]"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="w-full max-w-[300px]">
            <a
              href={`tel:${siteConfig.phone.tel}`}
              onClick={() => trackEvent("call_click", { location: "header-mobile" })}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ed6623] px-6 py-3 font-[family-name:var(--font-heading)] text-[20px] text-white"
            >
              <Phone className="h-4 w-4" strokeWidth={3} />
              CALL NOW
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
