import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const GA_ID = "G-VYQMQB4QM7";
const CLARITY_ID = "wbdxvnhepc";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}#organization`,
  name: siteConfig.brand,
  legalName: "Steel City Cleanouts LLC",
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  email: siteConfig.email,
  telephone: `+1${siteConfig.phone.tel}`,
  foundingDate: `${siteConfig.foundingYear}-01-01`,
  description:
    "Family-owned, fully insured estate cleanouts and junk removal serving Pittsburgh, PA and surrounding suburbs. Same-day service 7 days a week.",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
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
  title: "Steel City Cleanouts | Estate Cleanouts & Junk Removal | Pittsburgh PA",
  description:
    "Same-day estate cleanouts and junk removal across Pittsburgh and surrounding areas. Family-owned, fully insured, upfront pricing. Call (585) 200-0871 for fast, reliable service.",
  openGraph: {
    title: "Steel City Cleanouts | Pittsburgh Estate Cleanouts & Junk Removal",
    description:
      "Fast, reliable estate cleanouts and junk removal in Pittsburgh PA. Family-owned, fully insured.",
    type: "website",
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
