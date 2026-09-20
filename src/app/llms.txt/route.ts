import { services } from "@/lib/services-data";
import { serviceAreas } from "@/lib/service-areas-data";
import { resources } from "@/lib/resources-data";
import { itemGuides } from "@/lib/item-guides-data";
import { siteConfig } from "@/lib/site-config";

const SITE_URL = "https://www.steelcitycleanouts.com";

export function GET() {
  const body = `# ${siteConfig.brand}

> Family-owned, fully insured estate cleanouts and junk removal serving Pittsburgh, PA and surrounding suburbs. Same-day service 7 days a week.

**Business:** ${siteConfig.brand}
**Legal Name:** Steel City Cleanouts LLC
**Based In:** ${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}
**Service Area:** Pittsburgh, PA and surrounding suburbs in Allegheny and Butler counties
**Phone:** ${siteConfig.phone.display}
**Email:** ${siteConfig.email}
**Website:** ${SITE_URL}
**Hours:** ${siteConfig.hours.display}
**Founded:** ${siteConfig.foundingYear}
**Pricing:** Free quotes, given per job after we see the item or the room. Price depends on volume, access, floor, and disposal requirements, so we quote rather than publish a rate card.

## Quick Facts

- **Service types:** ${services.length} distinct cleanout services
- **Service areas covered:** ${serviceAreas.length} Pittsburgh-area locations
- **Pricing model:** Quoted per job, free estimate over the phone or on site, price confirmed before work starts
- **What drives the price:** Volume, access and stairs, item type and disposal requirements, and whether it is a single item or a whole room
- **Typical arrival window:** 1 hour or less, not a 4-hour block
- **Crew size:** 2 to 4 people depending on job
- **Truck capacity:** ~15 cubic yards per load
- **Availability:** 7 days a week, 7am to 8pm Eastern
- **Response time:** Most quotes returned within 2 hours during business hours
- **Insurance:** Fully insured, liability coverage on every job
- **Donation partners:** Goodwill, Construction Junction, Vietnam Veterans of America, local Pittsburgh charities

## About

${siteConfig.brand} is a Pittsburgh-based family-owned business specializing in estate cleanouts and full-service junk removal. We serve every neighborhood in Pittsburgh plus surrounding townships including Cranberry Township, Wexford, Mt. Lebanon, Monroeville, and more. Our services are used by homeowners, probate attorneys, realtors, property managers, and families handling estate transitions.

## Services

${services
  .map(
    (s) =>
      `- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.heroSub}`,
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

## Disposal Guides

Plain-language guides covering every route for getting rid of large household items in Pittsburgh, including the free options. Each cites City of Pittsburgh and utility sources.

${itemGuides
  .map((g) => `- [${g.title}](${SITE_URL}/how-to-get-rid-of/${g.slug}): ${g.citableSnippet}`)
  .join("\n")}

- [All Disposal Guides](${SITE_URL}/how-to-get-rid-of)

## Verified Pittsburgh Disposal Facts

- The City of Pittsburgh collects two bulk items per week with regular residential refuse collection.
- The City does not accept construction and demolition debris, household hazardous waste, or electronics through ordinary curbside collection.
- Pittsburgh 311 is 412-255-2621 for a determination on a specific item.
- Pennsylvania has no statewide mattress recycling law, so there is no state-funded mattress take-back program.
- Refrigerant in refrigerators and freezers must be recovered by a certified technician or qualified appliance recycler before disposal.
- Duquesne Light runs an appliance recycling program with free pickup and a $50 rebate for a working refrigerator or freezer roughly 10 to 30 cubic feet, limit two per residential address.

## Contact

- [Contact page](${SITE_URL}/contact)
- [About page](${SITE_URL}/about)
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
