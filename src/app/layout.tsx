import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";

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
    "Same-day estate cleanouts and junk removal across Pittsburgh and surrounding areas. Family-owned, fully insured, upfront pricing. Call (412) 555-0199 for fast, reliable service.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
