import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import AnalyticsScripts from "@/components/AnalyticsScripts";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}#organization`,
  name: siteConfig.brand,
  legalName: "Steel City Cleanouts LLC",
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo/steel-city-cleanouts.png`,
  email: siteConfig.email,
  telephone: `+1${siteConfig.phone.tel}`,
  foundingDate: `${siteConfig.foundingYear}-01-01`,
  description:
    "Family-owned, fully insured estate cleanouts and junk removal based in Cranberry Township, PA, serving Pittsburgh and Allegheny County. Same-day service 7 days a week.",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Pittsburgh",
      "@id": "https://www.wikidata.org/wiki/Q1342",
    },
    {
      "@type": "AdministrativeArea",
      name: "Allegheny County, Pennsylvania",
      "@id": "https://www.wikidata.org/wiki/Q484049",
    },
    {
      "@type": "AdministrativeArea",
      name: "Butler County, Pennsylvania",
      "@id": "https://www.wikidata.org/wiki/Q488437",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: `+1${siteConfig.phone.tel}`,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  ...(siteConfig.sameAs.length ? { sameAs: siteConfig.sameAs } : {}),
};

const bebas = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Steel City Cleanouts | Pittsburgh PA Estate Cleanouts & Junk Removal",
  description:
    "Same-day estate cleanouts and junk removal in Pittsburgh, PA and Allegheny County. Cranberry-based, family-owned since 2026. Fully insured, upfront pricing. Call (585) 200-0871.",
  keywords: [
    "estate cleanout Pittsburgh",
    "junk removal Pittsburgh PA",
    "hoarding cleanup Pittsburgh",
    "property cleanout Allegheny County",
    "estate cleanout Cranberry Township",
    "house cleanout Pittsburgh PA",
  ],
  openGraph: {
    title: "Steel City Cleanouts | Pittsburgh PA Estate Cleanouts & Junk Removal",
    description:
      "Same-day estate cleanouts and junk removal in Pittsburgh, PA. Cranberry-based, family-owned since 2026. Fully insured.",
    type: "website",
    locale: "en_US",
  },
  other: {
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cloud.umami.is" />
        <link rel="dns-prefetch" href="https://cloud.umami.is" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
