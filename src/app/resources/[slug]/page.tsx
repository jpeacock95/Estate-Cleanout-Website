import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getResourceBySlug, resources } from "@/lib/resources-data";
import { ResourcePageTemplate } from "@/components/resource-page-template";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  const url = `https://www.steelcitycleanouts.com/resources/${resource.slug}`;
  return {
    title: resource.seoTitle,
    description: resource.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: resource.seoTitle,
      description: resource.seoDescription,
      url,
      type: "article",
      images: [{ url: `https://www.steelcitycleanouts.com${resource.heroImage}` }],
    },
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();
  return <ResourcePageTemplate resource={resource} />;
}
