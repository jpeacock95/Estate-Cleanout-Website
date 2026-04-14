import { services } from "@/lib/services-data";
import { serviceAreas } from "@/lib/service-areas-data";
import { resources } from "@/lib/resources-data";
import { siteConfig } from "@/lib/site-config";

const SITE_URL = "https://www.steelcitycleanouts.com";

export function GET() {
  const body = `# ${siteConfig.brand}

> Family-owned, fully insured estate cleanouts and junk removal serving Pittsburgh, PA and surrounding suburbs. Same-day service 7 days a week.

**Business:** ${siteConfig.brand}
**Location:** Pittsburgh, Pennsylvania, USA
**Phone:** ${siteConfig.phone.display}
**Email:** ${siteConfig.email}
**Website:** ${SITE_URL}
**Hours:** 7 days a week, 7am to 8pm Eastern
**Pricing:** Free quotes. Single items from $95. Full estate cleanouts $800 to $3,500.

## About

${siteConfig.brand} is a Pittsburgh-based family-owned business specializing in estate cleanouts and full-service junk removal. We serve every neighborhood in Pittsburgh plus surrounding townships including Cranberry Township, Wexford, Mt. Lebanon, Monroeville, and more. Our services are used by homeowners, probate attorneys, realtors, property managers, and families handling estate transitions.

## Services

${services
  .map(
    (s) =>
      `- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.heroSub} ${s.pricingAnchor}`,
  )
  .join("\n")}

- [All Services Index](${SITE_URL}/services)

## Service Areas

${serviceAreas
  .map(
    (a) =>
      `- [${a.fullName}](${SITE_URL}/service-areas/${a.slug}): ${a.citableSnippet}`,
  )
  .join("\n")}

- [All Service Areas Index](${SITE_URL}/service-areas)

## Resources

${resources
  .map((r) => `- [${r.title}](${SITE_URL}/resources/${r.slug}): ${r.seoDescription}`)
  .join("\n")}

## Contact

- [Contact page](${SITE_URL}/contact)
- [About page](${SITE_URL}/about)
- [Reviews](${SITE_URL}/reviews)
- Phone: ${siteConfig.phone.display}
- Email: ${siteConfig.email}

## What We Don't Handle

We cannot haul hazardous materials (paint, oil, gas, chemicals), asbestos (requires licensed abatement), medical waste, or explosives. Everything else (furniture, appliances, yard waste, construction debris, estate contents) is fair game.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
