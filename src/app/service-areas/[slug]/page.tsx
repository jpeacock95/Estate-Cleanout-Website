import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAreaBySlug, serviceAreas } from "@/lib/service-areas-data";
import { AreaPageTemplate } from "@/components/area-page-template";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  const url = `https://www.steelcitycleanouts.com/service-areas/${area.slug}`;
  return {
    title: area.seoTitle,
    description: area.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      url,
      type: "website",
      images: [{ url: `https://www.steelcitycleanouts.com${area.heroImage}` }],
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();
  return <AreaPageTemplate area={area} />;
}
