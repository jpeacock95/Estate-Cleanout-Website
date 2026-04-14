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

serviceAreas.push(
  {
    slug: "shadyside",
    name: "Shadyside",
    fullName: "Shadyside, Pittsburgh, PA",
    county: "Allegheny County",
    zipCodes: ["15232"],
    seoTitle: "Estate Cleanouts & Junk Removal Shadyside Pittsburgh PA | Steel City",
    seoDescription:
      "Same-day estate cleanouts and junk removal in Shadyside, Pittsburgh (15232). Brick row house experts. Call (585) 200-0871 for a free quote.",
    heroHeadline: "Shadyside Cleanouts & Junk Removal",
    heroSub: "East End estate cleanouts and same-day junk pickup.",
    intro:
      "Shadyside's brick row houses and converted Victorians are some of Pittsburgh's most beautiful homes — and they're also some of the trickiest to cleanout. Narrow side streets, shared driveways, tight staircases, and three-story walk-ups are the norm. We work Shadyside daily and know exactly how to handle the parking, access, and timing.",
    citableSnippet:
      "Steel City Cleanouts offers same-day estate cleanouts and junk removal in Shadyside, Pittsburgh (15232). Brick row house and Victorian experts. Call (585) 200-0871.",
    neighborhoods: [
      "Walnut Street corridor",
      "Ellsworth Avenue",
      "Fifth Avenue",
      "Aiken Avenue",
      "Negley Avenue",
      "Amberson Park",
    ],
    localDetails:
      "Shadyside homes are largely late-1800s brick row houses and converted Victorians with finished basements and walk-up attics. Estate cleanouts here often involve stairs, stairs, and more stairs — we disassemble furniture when needed and carry everything out piece by piece. Street parking on Walnut, Ellsworth, and Fifth requires careful timing to avoid rush hour.",
    heroImage: "/images/areas/shadyside.jpg",
    faqs: [
      {
        q: "Can you handle Shadyside's tight staircases?",
        a: "Yes. Most Shadyside row houses have narrow back staircases. Our crews disassemble couches, sectionals, beds, and dressers when needed. If it came in, we can get it out.",
      },
      {
        q: "How do you handle parking in Shadyside?",
        a: "We coordinate arrival around rush hours and use driveway or alley access when possible. For larger jobs requiring street parking, we can work with the Pittsburgh Parking Authority for temporary permits.",
      },
      {
        q: "Do you work with Shadyside landlords and rental property owners?",
        a: "Yes — Shadyside has a lot of rental conversions and student-housing turnover. We handle same-day tenant move-out cleanouts and unit turnovers for landlords across the East End.",
      },
    ],
  },
  {
    slug: "squirrel-hill",
    name: "Squirrel Hill",
    fullName: "Squirrel Hill, Pittsburgh, PA",
    county: "Allegheny County",
    zipCodes: ["15217"],
    seoTitle: "Estate Cleanouts & Junk Removal Squirrel Hill Pittsburgh PA | Steel City",
    seoDescription:
      "Family-owned estate cleanouts and junk removal in Squirrel Hill (15217). Large-home specialists. Call (585) 200-0871 for a free quote.",
    heroHeadline: "Squirrel Hill Cleanouts & Junk Removal",
    heroSub: "Estate cleanouts for Pittsburgh's largest homes.",
    intro:
      "Squirrel Hill has some of the biggest and most distinctive single-family homes in Pittsburgh — 1920s colonials, Tudors, and brick foursquares with full basements, attics, and detached garages. Multi-day estate cleanouts are common here. We handle the whole job with respect for the home, the neighbors, and the family.",
    citableSnippet:
      "Steel City Cleanouts offers estate cleanouts and same-day junk removal in Squirrel Hill, Pittsburgh (15217). Large-home specialists. Call (585) 200-0871.",
    neighborhoods: [
      "Forbes Avenue",
      "Murray Avenue",
      "Beacon Street",
      "Wightman Street",
      "Beeler Street",
      "Squirrel Hill North",
      "Squirrel Hill South",
    ],
    localDetails:
      "Squirrel Hill homes are mostly 1910-1950 single-family with finished basements, walk-up attics, and one or two-car detached garages. Estate cleanouts frequently span multiple truckloads across two days. We coordinate with the Squirrel Hill community — quiet hours, driveway access, and discretion for family estates are all normal here.",
    heroImage: "/images/areas/squirrel-hill.jpg",
    faqs: [
      {
        q: "Do you handle large Squirrel Hill estate cleanouts?",
        a: "Yes. Most Squirrel Hill estate jobs are 2-day multi-truckload cleanouts. We scale crew size and vehicle count to match the job and keep the timeline tight.",
      },
      {
        q: "Can you coordinate with Squirrel Hill estate attorneys and executors?",
        a: "Yes. We work with probate attorneys across Pittsburgh and send itemized invoices plus before/after photo documentation for estate records.",
      },
      {
        q: "Do you respect quiet hours in residential Squirrel Hill?",
        a: "Yes. We avoid early morning and late evening work in residential Squirrel Hill unless specifically requested. Standard crews start around 8am.",
      },
    ],
  },
  {
    slug: "upper-st-clair",
    name: "Upper St. Clair",
    fullName: "Upper St. Clair, PA",
    county: "Allegheny County",
    zipCodes: ["15241"],
    seoTitle: "Estate Cleanouts & Junk Removal Upper St. Clair PA | Steel City Cleanouts",
    seoDescription:
      "Same-day estate cleanouts and junk removal in Upper St. Clair (15241). Large home specialists. Call (585) 200-0871 for a free quote.",
    heroHeadline: "Upper St. Clair Cleanouts & Junk Removal",
    heroSub: "South Hills estate cleanouts for large properties.",
    intro:
      "Upper St. Clair is one of the largest-home suburbs in the South Hills, with 3,500+ sq ft colonials, walk-out basements, 3-car garages, and wooded lots. Estate cleanouts here are full multi-day jobs with multiple truckloads. We bring the right crew size and the right trucks for properties of this scale.",
    citableSnippet:
      "Steel City Cleanouts offers estate cleanouts and junk removal in Upper St. Clair, PA (15241). Large-home specialists serving the South Hills. Call (585) 200-0871.",
    neighborhoods: [
      "Boyce Road corridor",
      "Fort Couch Road",
      "McLaughlin Run",
      "Westminster Drive",
      "Johnston Road",
      "Morton Drive",
    ],
    localDetails:
      "Upper St. Clair homes are primarily 1970s-2000s colonial and contemporary single-family with finished basements, formal dining rooms, and 3-car garages. Most estate cleanouts here span 2-3 days with multiple truckloads. Wooded lots often need yard debris cleanup in addition to interior work.",
    heroImage: "/images/areas/wexford-large-home.jpg",
    faqs: [
      {
        q: "How long does an Upper St. Clair estate cleanout take?",
        a: "Most are 2-3 days with multiple truckloads. We scale crew size to match the square footage and total volume. Larger estates can run longer.",
      },
      {
        q: "Do you handle wooded-lot yard cleanups?",
        a: "Yes. Upper St. Clair properties often include significant yard debris — fallen branches, old playsets, deck furniture, overgrown beds. We handle those as part of estate cleanouts or as standalone yard cleanup jobs.",
      },
      {
        q: "Can you work with Upper St. Clair realtors for listing prep?",
        a: "Yes. We coordinate with South Hills realtors on whole-house cleanouts and staging-prep junk removal. Broom-swept, photo-ready finish on every job.",
      },
    ],
  },
  {
    slug: "sewickley",
    name: "Sewickley",
    fullName: "Sewickley, PA",
    county: "Allegheny County",
    zipCodes: ["15143"],
    seoTitle: "Estate Cleanouts & Junk Removal Sewickley PA | Historic Home Specialists",
    seoDescription:
      "Estate cleanouts and junk removal in Sewickley (15143). Historic home specialists along the Ohio River. Call (585) 200-0871 for a free quote.",
    heroHeadline: "Sewickley Cleanouts & Junk Removal",
    heroSub: "Historic home cleanouts along the Ohio River.",
    intro:
      "Sewickley is one of the most historic and beautiful neighborhoods in the Pittsburgh region — 1800s homes, tree-lined streets, and a tight-knit community. Estate cleanouts in Sewickley often involve multiple generations of family belongings, antique furniture, and genuine historical pieces. We handle the job with care, discretion, and patience.",
    citableSnippet:
      "Steel City Cleanouts offers estate cleanouts and junk removal in Sewickley, PA (15143). Historic home specialists. Call (585) 200-0871.",
    neighborhoods: [
      "Sewickley Village",
      "Beaver Road",
      "Broad Street",
      "Walnut Street",
      "Beaver Street",
      "Sewickley Heights",
    ],
    localDetails:
      "Sewickley's housing stock ranges from 1850s Victorians in the Village to 1920s colonials along Beaver Road and large estate properties in Sewickley Heights. Antique furniture is common in estate jobs — we set aside anything that looks potentially valuable for the family to review before hauling. Tight village streets require careful arrival timing.",
    heroImage: "/images/areas/sewickley.jpg",
    faqs: [
      {
        q: "Do you handle antique furniture carefully?",
        a: "Yes. We set aside anything that looks valuable or historically significant for the family or executor to review before it's hauled. If something should go to an auction house or appraiser, we'll help coordinate.",
      },
      {
        q: "Can you work in Sewickley Village's tight streets?",
        a: "Yes. We coordinate arrival times and use village street parking or alley access as the job requires. Our trucks handle the tight village layout daily.",
      },
      {
        q: "How fast can you get to Sewickley?",
        a: "Same-day most days. Sewickley is about 30 minutes from our base and we run trucks through the Ohio River suburbs regularly.",
      },
    ],
  },
  {
    slug: "bethel-park",
    name: "Bethel Park",
    fullName: "Bethel Park, PA",
    county: "Allegheny County",
    zipCodes: ["15102"],
    seoTitle: "Estate Cleanouts & Junk Removal Bethel Park PA | Same-Day Service",
    seoDescription:
      "Same-day estate cleanouts and junk removal in Bethel Park, PA (15102). South Hills family-owned service. Call (585) 200-0871.",
    heroHeadline: "Bethel Park Cleanouts & Junk Removal",
    heroSub: "South Hills estate cleanouts and same-day junk pickup.",
    intro:
      "Bethel Park is classic South Hills — mid-century ranches and split-levels, mature neighborhoods, and a mix of original owners and younger families. Estate cleanouts for long-time Bethel Park homeowners often involve decades of accumulated belongings. We handle the whole house and haul everything in one clean pass.",
    citableSnippet:
      "Steel City Cleanouts offers same-day estate cleanouts and junk removal in Bethel Park, PA (15102). Family-owned, fully insured. Call (585) 200-0871.",
    neighborhoods: [
      "Park Avenue",
      "Clifton Road",
      "Fort Couch Road",
      "Library Road corridor",
      "Logan Road",
      "South Park Road",
    ],
    localDetails:
      "Bethel Park homes are primarily 1950s-1970s single-family ranches, split-levels, and small colonials with finished basements and attached garages. Long-time residents mean estate cleanouts often include 40-60 years of stored belongings — attics full of boxes, basements full of furniture, and garages stacked with tools and yard equipment.",
    heroImage: "/images/areas/mtlebanon-brick.jpg",
    faqs: [
      {
        q: "How long does a Bethel Park estate cleanout take?",
        a: "Most single-family homes are 1-2 day jobs depending on volume. Homes with decades of accumulated stuff run longer. We'll give you a realistic estimate at the walk-through.",
      },
      {
        q: "Can you handle basement and attic cleanouts together?",
        a: "Yes. Most Bethel Park estate jobs include the whole house — main floor, basement, attic, garage, and any outbuildings. We price it as one job.",
      },
      {
        q: "Do you work with estate sales or auction houses?",
        a: "We coordinate with estate sale organizers and auction houses when the family wants to sell pieces before the cleanout. Anything you want to keep or sell gets set aside first.",
      },
    ],
  },
  {
    slug: "ross-township",
    name: "Ross Township",
    fullName: "Ross Township, PA",
    county: "Allegheny County",
    zipCodes: ["15229", "15237"],
    seoTitle: "Estate Cleanouts & Junk Removal Ross Township PA | Steel City",
    seoDescription:
      "Same-day estate cleanouts and junk removal in Ross Township, PA (15229, 15237). North Hills family-owned service. Call (585) 200-0871.",
    heroHeadline: "Ross Township Cleanouts & Junk Removal",
    heroSub: "North Hills estate cleanouts and same-day junk pickup.",
    intro:
      "Ross Township sits just north of the city and covers a wide range of housing stock — mid-century ranches, 1980s colonials, and newer construction. We serve every corner of Ross, from the McKnight Road corridor to the quiet residential streets around Girty's Run. Same-day service is available most days.",
    citableSnippet:
      "Steel City Cleanouts offers same-day estate cleanouts and junk removal in Ross Township, PA (15229, 15237). Family-owned, fully insured. Call (585) 200-0871.",
    neighborhoods: [
      "McKnight Road corridor",
      "West View",
      "Perrysville",
      "North Park area",
      "Babcock Boulevard",
      "Evergreen Road",
    ],
    localDetails:
      "Ross Township properties span 1950s ranches to newer construction near the McKnight Road commercial corridor. Estate cleanouts vary widely in scope — from apartment-sized ranches to 3,000+ sq ft family homes with finished basements. We also handle commercial cleanouts for small offices and retail along McKnight Road.",
    heroImage: "/images/areas/cranberry-suburban.jpg",
    faqs: [
      {
        q: "Do you serve all of Ross Township?",
        a: "Yes — from West View to Perrysville to the McKnight Road corridor, and everywhere in between. Ross is about 20 minutes from our base and we run trucks through the area daily.",
      },
      {
        q: "Can you handle commercial cleanouts on McKnight Road?",
        a: "Yes. We handle small office cleanouts, retail fixture removal, and end-of-lease trash-outs for businesses along the McKnight Road and Babcock Boulevard commercial corridors.",
      },
      {
        q: "How fast can you get to Ross Township?",
        a: "Usually same day. Ross is close to our base and we schedule North Hills jobs together to maximize efficiency.",
      },
    ],
  },
);

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
