import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getItemGuideBySlug, itemGuides } from "@/lib/item-guides-data";
import { ItemGuideTemplate } from "@/components/item-guide-template";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return itemGuides.map((g) => ({ item: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ item: string }>;
}): Promise<Metadata> {
  const { item } = await params;
  const guide = getItemGuideBySlug(item);
  if (!guide) return {};
  const url = `${siteConfig.url}/how-to-get-rid-of/${guide.slug}`;
  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      url,
      type: "article",
      images: [{ url: `${siteConfig.url}${guide.heroImage}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.seoTitle,
      description: guide.seoDescription,
    },
  };
}

export default async function ItemGuidePage({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  const { item } = await params;
  const guide = getItemGuideBySlug(item);
  if (!guide) notFound();
  return <ItemGuideTemplate guide={guide} />;
}
