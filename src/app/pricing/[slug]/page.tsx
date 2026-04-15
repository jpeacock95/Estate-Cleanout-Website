import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPricingPageBySlug, pricingPages } from "@/lib/pricing-data";
import { PricingPageTemplate } from "@/components/pricing-page-template";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return pricingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPricingPageBySlug(slug);
  if (!page) return {};
  const url = `${siteConfig.url}/pricing/${page.slug}`;
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url,
      type: "website",
      images: [{ url: `${siteConfig.url}${page.heroImage}` }],
    },
  };
}

export default async function PricingChildPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPricingPageBySlug(slug);
  if (!page) notFound();
  return <PricingPageTemplate page={page} />;
}
