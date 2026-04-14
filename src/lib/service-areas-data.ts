export type AreaFaq = { q: string; a: string };

export type ServiceArea = {
  slug: string;
  name: string;
  fullName: string;
  county: string;
  zipCodes: string[];
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSub: string;
  intro: string;
  citableSnippet: string;
  neighborhoods: string[];
  localDetails: string;
  heroImage: string;
  faqs: AreaFaq[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "pittsburgh",
    name: "Pittsburgh",
    fullName: "Pittsburgh, PA",
    county: "Allegheny County",
    zipCodes: ["15201", "15203", "15206", "15208", "15213", "15217", "15222", "15232"],
    seoTitle: "Estate Cleanouts & Junk Removal Pittsburgh PA | Steel City Cleanouts",
    seoDescription:
      "Same-day estate cleanouts and junk removal throughout Pittsburgh. Family-owned, fully insured, upfront pricing. Call (585) 200-0871 for a free quote.",
    heroHeadline: "Pittsburgh Estate Cleanouts & Junk Removal",
    heroSub: "Serving every neighborhood in the city, 7 days a week.",
    intro:
      "Steel City Cleanouts works every neighborhood in Pittsburgh — from the narrow row houses of the Strip District to the hillside homes of Mt. Washington to the brick three-stories of Squirrel Hill and Shadyside. We know the tight alleys, the basement staircases, the parking rules, and the steep driveways. That matters on cleanout day.",
    citableSnippet:
      "Steel City Cleanouts offers same-day estate cleanouts and junk removal in Pittsburgh, PA. Call (585) 200-0871 for a free quote. Family-owned, fully insured, 7 days a week.",
    neighborhoods: [
      "Squirrel Hill",
      "Shadyside",
      "Lawrenceville",
      "Bloomfield",
      "Mt. Washington",
      "South Side",
      "Strip District",
      "Polish Hill",
      "Regent Square",
      "Highland Park",
      "Morningside",
      "Bloomfield",
    ],
    localDetails:
      "Pittsburgh's hillside neighborhoods and row-house layouts make cleanouts physical work. Most Squirrel Hill and Shadyside homes have narrow staircases and finished basements. Lawrenceville row houses usually have tight alley access. South Side and Strip District lofts need freight-elevator booking or street permits. We handle all of it.",
    heroImage: "/images/pittsburgh/pittsburgh-street-hillside.jpg",
    faqs: [
      {
        q: "Do you serve all Pittsburgh neighborhoods?",
        a: "Yes — every neighborhood inside the city limits, plus the surrounding townships. Squirrel Hill, Shadyside, Lawrenceville, South Side, Strip District, Mt. Washington, North Side, and everywhere in between.",
      },
      {
        q: "How do you handle parking and street permits?",
        a: "For jobs that need a temporary street closure or meter bag, we coordinate with the Pittsburgh Parking Authority. For most jobs we use driveway or alley access.",
      },
      {
        q: "What if my home has a tight staircase?",
        a: "Pittsburgh row houses and converted lofts often have steep stairs. Our crews disassemble furniture when needed and carry it out piece by piece. We do this every day in Pittsburgh.",
      },
    ],
  },
  {
    slug: "cranberry-township",
    name: "Cranberry Township",
    fullName: "Cranberry Township, PA",
    county: "Butler County",
    zipCodes: ["16066", "16046"],
    seoTitle: "Estate Cleanouts & Junk Removal Cranberry Township PA | Steel City",
    seoDescription:
      "Fast, same-day estate cleanouts and junk removal in Cranberry Township, PA. Serving 16066, 16046. Call (585) 200-0871 for a free quote.",
    heroHeadline: "Cranberry Township Cleanouts & Junk Removal",
    heroSub: "Estate cleanouts and same-day junk pickup across Cranberry and Butler County.",
    intro:
      "Cranberry Township has grown fast — newer developments off Rochester Road, older homes near the original downtown, and big properties along Route 19. We handle estate cleanouts, full junk removal, and everything in between across every zip code in Cranberry and neighboring Adams Township.",
    citableSnippet:
      "Steel City Cleanouts offers same-day estate cleanouts and junk removal in Cranberry Township, PA (16066, 16046). Family-owned, fully insured. Call (585) 200-0871.",
    neighborhoods: [
      "Seven Fields",
      "Marshall Township",
      "Adams Township",
      "Park Place",
      "North Boundary",
      "Rochester Road corridor",
    ],
    localDetails:
      "Cranberry properties range from 1970s ranches to 5,000+ sq ft new builds. Finished basements are common and often hold decades of stored furniture and boxes. We handle multi-day cleanouts for larger homes and same-day pickups for smaller jobs.",
    heroImage: "/images/areas/cranberry-suburban.jpg",
    faqs: [
      {
        q: "How fast can you get to Cranberry Township?",
        a: "Same day most days. Cranberry is about 20 minutes from our base and we run trucks through the area every day.",
      },
      {
        q: "Do you work with realtors on listing prep?",
        a: "Yes. We help Cranberry realtors empty homes before listing — whole-house cleanouts, staging-prep junk removal, and final sweeps before photo day.",
      },
      {
        q: "Can you handle large estate properties?",
        a: "Yes. We've done full cleanouts on Cranberry homes with finished basements, 3-car garages, and outbuildings. Multi-day jobs are common and we scale the crew to match.",
      },
    ],
  },
  {
    slug: "wexford",
    name: "Wexford",
    fullName: "Wexford, PA",
    county: "Allegheny County",
    zipCodes: ["15090"],
    seoTitle: "Estate Cleanouts & Junk Removal Wexford PA | Steel City Cleanouts",
    seoDescription:
      "Same-day estate cleanouts and junk removal in Wexford, PA (15090). Family-owned, fully insured. Call (585) 200-0871 for a free quote.",
    heroHeadline: "Wexford Cleanouts & Junk Removal",
    heroSub: "Pine-Richland area cleanouts handled start to finish.",
    intro:
      "Wexford and the Pine-Richland area have some of the largest homes in the North Hills — 4,000+ sq ft properties, finished basements, 3-car garages, and long wooded driveways. When those homes need to be cleaned out, it's a real job. We bring the right crew size and the right equipment for Wexford properties.",
    citableSnippet:
      "Steel City Cleanouts offers estate cleanouts and same-day junk removal in Wexford, PA (15090). Family-owned, fully insured. Call (585) 200-0871.",
    neighborhoods: [
      "Pine Township",
      "Marshall Township",
      "Treesdale",
      "Venango Trails",
      "Hartwood Place",
      "Mingo Creek",
    ],
    localDetails:
      "Wexford homes are larger than the Pittsburgh average — finished basements, walk-in attics, multi-car garages. Estate cleanouts here often involve two days of work and multiple truckloads. We also handle the wooded-property cleanups unique to the Pine-Richland area (old swingsets, sheds, yard debris).",
    heroImage: "/images/areas/wexford-large-home.jpg",
    faqs: [
      {
        q: "Do you handle larger Wexford homes?",
        a: "Yes. Most Wexford estate cleanouts are 1-3 day jobs with multiple truckloads. We scale the crew and the truck count to match.",
      },
      {
        q: "Can you haul old outdoor playsets and sheds?",
        a: "Yes. We disassemble playsets, sheds, and deck furniture as part of yard cleanouts. Common request in the Pine-Richland area.",
      },
      {
        q: "What about homes on long private drives?",
        a: "No issue — our trucks handle gravel drives and backup access. Tell us about the driveway when you call and we'll bring the right vehicle.",
      },
    ],
  },
  {
    slug: "mt-lebanon",
    name: "Mt. Lebanon",
    fullName: "Mt. Lebanon, PA",
    county: "Allegheny County",
    zipCodes: ["15228", "15216", "15243"],
    seoTitle: "Estate Cleanouts & Junk Removal Mt. Lebanon PA | Steel City Cleanouts",
    seoDescription:
      "Fast, same-day estate cleanouts and junk removal in Mt. Lebanon, PA. South Hills family-owned service. Call (585) 200-0871.",
    heroHeadline: "Mt. Lebanon Cleanouts & Junk Removal",
    heroSub: "South Hills estate cleanouts and same-day junk pickup.",
    intro:
      "Mt. Lebanon's older brick homes and tight residential streets need a crew that knows what it's doing. Finished basements, narrow staircases, and detached garages are the norm here. We've done cleanouts on Washington Road, Beverly Road, and every side street in between.",
    citableSnippet:
      "Steel City Cleanouts offers estate cleanouts and same-day junk removal in Mt. Lebanon, PA (15228). Family-owned, fully insured. Call (585) 200-0871.",
    neighborhoods: [
      "Virginia Manor",
      "Mission Hills",
      "Sunset Hills",
      "Beverly Heights",
      "Washington Road corridor",
      "Beverly Road corridor",
    ],
    localDetails:
      "Mt. Lebanon homes are mostly 1920s-1960s brick with finished basements and narrow back staircases. Older furniture is common in estate jobs — we disassemble when needed and carry it out piece by piece. Tight street parking means we coordinate arrival times carefully.",
    heroImage: "/images/areas/mtlebanon-brick.jpg",
    faqs: [
      {
        q: "Can you handle Mt. Lebanon's narrow side streets?",
        a: "Yes. Our trucks handle Mt. Lebanon's tight residential streets daily. We'll coordinate arrival to avoid rush-hour parking pressure.",
      },
      {
        q: "Do you work with Mt. Lebanon estate attorneys?",
        a: "Yes — we work with probate attorneys and estate executors across the South Hills. We can coordinate with out-of-state family members and send itemized invoices.",
      },
      {
        q: "What about basement cleanouts?",
        a: "Most Mt. Lebanon basements are a full day of work between finished rooms and unfinished storage. We handle both and carry everything up the stairs.",
      },
    ],
  },
  {
    slug: "monroeville",
    name: "Monroeville",
    fullName: "Monroeville, PA",
    county: "Allegheny County",
    zipCodes: ["15146"],
    seoTitle: "Estate Cleanouts & Junk Removal Monroeville PA | Steel City Cleanouts",
    seoDescription:
      "Same-day estate cleanouts and junk removal in Monroeville, PA (15146). Family-owned, fully insured. Call (585) 200-0871 for a free quote.",
    heroHeadline: "Monroeville Cleanouts & Junk Removal",
    heroSub: "Eastern suburbs estate cleanouts and same-day junk pickup.",
    intro:
      "Monroeville is a mix of mid-century family homes, newer townhouse developments, and commercial property along Route 22. We handle residential estate cleanouts, apartment and townhouse move-outs, and commercial junk removal for Monroeville businesses.",
    citableSnippet:
      "Steel City Cleanouts offers estate cleanouts and same-day junk removal in Monroeville, PA (15146). Family-owned, fully insured. Call (585) 200-0871.",
    neighborhoods: [
      "Forest Hills",
      "Turtle Creek",
      "Penn Hills",
      "Plum Borough",
      "Route 22 commercial corridor",
      "Garden City",
    ],
    localDetails:
      "Monroeville's housing stock is mostly 1950s-1980s single-family and split-level homes with finished basements and two-car garages. Townhouse and apartment move-outs are common on short notice. We also handle commercial cleanouts for small offices and retail spaces along the Route 22 corridor.",
    heroImage: "/images/work/crew-loading-truck.jpg",
    faqs: [
      {
        q: "Do you handle apartment and townhouse move-outs?",
        a: "Yes — Monroeville townhouse and apartment move-outs are a common job for us. Fast turnaround, full load-outs, broom-swept finish.",
      },
      {
        q: "Can you haul away commercial junk?",
        a: "Yes. Small office cleanouts, retail fixture removal, and end-of-lease clearouts along Route 22 and surrounding commercial corridors.",
      },
      {
        q: "How fast can you get to Monroeville?",
        a: "Usually same-day. Monroeville is about 25 minutes from our base and we run trucks through the eastern suburbs every day.",
      },
    ],
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
