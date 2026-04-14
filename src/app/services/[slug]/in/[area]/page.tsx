import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allComboPages, getComboPage } from "@/lib/combo-data";
import { ComboPageTemplate } from "@/components/combo-page-template";

export function generateStaticParams() {
  return allComboPages().map((c) => ({
    slug: c.service.slug,
    area: c.area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; area: string }>;
}): Promise<Metadata> {
  const { slug, area } = await params;
  const data = getComboPage(slug, area);
  if (!data) return {};
  const url = `https://www.steelcitycleanouts.com/services/${slug}/in/${area}`;
  return {
    title: data.combo.seoTitle,
    description: data.combo.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: data.combo.seoTitle,
      description: data.combo.seoDescription,
      url,
      type: "website",
      images: [{ url: `https://www.steelcitycleanouts.com${data.combo.heroImage}` }],
    },
  };
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ slug: string; area: string }>;
}) {
  const { slug, area } = await params;
  const data = getComboPage(slug, area);
  if (!data) notFound();
  return <ComboPageTemplate data={data} />;
}
