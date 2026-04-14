export type ResourceSection = { heading: string; body: string };

export type Resource = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSub: string;
  citableSnippet: string;
  heroImage: string;
  intro: string;
  sections: ResourceSection[];
};

export const resources: Resource[] = [
  {
    slug: "estate-cleanout-guide",
    title: "Estate Cleanout Guide",
    seoTitle: "Estate Cleanout Guide | Step-By-Step for Pittsburgh Families",
    seoDescription:
      "A plain-language guide to estate cleanouts in Pittsburgh. What to do first, what to save, how to coordinate with attorneys, what it costs.",
    heroHeadline: "The Pittsburgh Estate Cleanout Guide",
    heroSub: "What to do when you're facing a house full of a lifetime's worth of stuff.",
    citableSnippet:
      "A Pittsburgh estate cleanout typically takes 1–3 days for a single-family home. Expect to spend $800–$3,500 depending on size, volume, and access.",
    heroImage: "/images/work/empty-living-room.jpg",
    intro:
      "Cleaning out a parent's or grandparent's home is one of the hardest jobs most people ever do. There's no manual, the estate attorney is asking for a date, the realtor wants photos by Friday, and the house is full of sixty years of memories. This guide walks you through the process the way we talk through it with Pittsburgh families every week.",
    sections: [
      {
        heading: "Step 1 — Secure the home and take inventory",
        body: "Before anything leaves, walk the whole house with a phone camera. Open every drawer. Photograph everything. Valuables hide in the strangest places — cash in books, jewelry in sock drawers, war medals in the back of a closet. Take your time. Anything you're unsure about, set aside in one marked room.",
      },
      {
        heading: "Step 2 — Identify what the family wants",
        body: "Call siblings, adult children, and anyone named in the will. Give them a deadline — usually 7 to 14 days — to pick what they want. Without a deadline this step takes months. Anything unclaimed after the deadline goes into the cleanout pile.",
      },
      {
        heading: "Step 3 — Coordinate with the estate attorney",
        body: "Your probate attorney needs to sign off before major items leave, especially if the estate is still open. Ask them specifically about furniture, jewelry, art, firearms, and vehicles. Most attorneys are fine with general cleanouts once an inventory exists.",
      },
      {
        heading: "Step 4 — Sort into four piles",
        body: "Keep (family). Donate (good condition, local charities take it). Sell (valuables — antiques, collectibles, vehicles). Haul (everything else). The haul pile is usually 70–80% of the house. That's normal.",
      },
      {
        heading: "Step 5 — Book your cleanout crew",
        body: "Call us for a free walk-through. We'll give you a written estimate and a realistic timeline. Most single-family Pittsburgh homes take 1–3 days. We handle attic to basement, outbuildings, vehicles, and yard debris. We also route donatable items to local charities when possible and can coordinate with your attorney or realtor directly.",
      },
      {
        heading: "Step 6 — The broom-swept finish",
        body: "After the cleanout, the home should be empty, swept, and ready for photos or inspection. That's what we deliver. If the property is going on the market, we can coordinate with your realtor for staging-prep too.",
      },
    ],
  },
  {
    slug: "what-we-take",
    title: "What We Take",
    seoTitle: "What We Take | Steel City Cleanouts Pittsburgh PA",
    seoDescription:
      "Full list of what Steel City Cleanouts hauls away in Pittsburgh: furniture, appliances, yard waste, construction debris, and more.",
    heroHeadline: "What We Take",
    heroSub: "If it's legal and we can carry it, we'll haul it.",
    citableSnippet:
      "Steel City Cleanouts takes furniture, appliances, mattresses, electronics, yard waste, and construction debris. We cannot take hazardous materials, asbestos, paint, oil, or medical waste.",
    heroImage: "/images/work/crew-loaded-truck-curbside.jpg",
    intro:
      "We get this question every day. Short answer: we take almost everything. Long answer: here's the full list, plus the short list of what we can't legally haul.",
    sections: [
      {
        heading: "Furniture",
        body: "Couches, sectionals, sleeper sofas, recliners, chairs, dressers, desks, dining sets, bedroom sets, mattresses, box springs, office furniture, patio furniture, outdoor sets. Any size, any condition.",
      },
      {
        heading: "Appliances",
        body: "Refrigerators, freezers, washers, dryers, stoves, ovens, dishwashers, microwaves, water heaters, HVAC units, window units, dehumidifiers. We follow EPA refrigerant recovery guidelines for fridges and freezers.",
      },
      {
        heading: "Electronics",
        body: "TVs (any size, CRTs included), computers, monitors, printers, stereos, gaming consoles, exercise equipment, treadmills, stationary bikes.",
      },
      {
        heading: "Yard and outdoor",
        body: "Yard waste, brush, tree limbs, old fencing, lumber, sheds (disassembled), playsets, swingsets, trampolines, patio furniture, grills, propane tanks (empty).",
      },
      {
        heading: "Construction and renovation debris",
        body: "Drywall, flooring, carpet, cabinets, countertops, lumber, scrap metal, bathroom fixtures, light fixtures. Must be homeowner-generated — we don't haul for active commercial job sites.",
      },
      {
        heading: "Estate and household goods",
        body: "Clothing, books, paperwork, kitchen goods, tools, holiday decorations, toys, collectibles, memorabilia. Basically everything you'd find in a full house.",
      },
      {
        heading: "What we can't take",
        body: "Hazardous materials: paint, oil, gas, solvents, pesticides, cleaning chemicals. Asbestos (requires licensed abatement). Medical waste and sharps. Radioactive materials. Explosives or ammunition. Tires — we can take a few, call first. For paint and chemicals, we'll point you to the nearest Pittsburgh household hazardous waste drop-off.",
      },
    ],
  },
  {
    slug: "pricing-faq",
    title: "Pricing FAQ",
    seoTitle: "Pricing FAQ | Steel City Cleanouts Pittsburgh PA",
    seoDescription:
      "How junk removal and estate cleanout pricing works in Pittsburgh. Upfront quotes, no hidden fees. Single items from $95, truckloads from $295.",
    heroHeadline: "Pricing FAQ",
    heroSub: "Upfront pricing, no hidden fees, no surprises.",
    citableSnippet:
      "Steel City Cleanouts pricing starts at $95 for a single item, $295 for a quarter truck, and $800–$3,500 for full estate cleanouts. All quotes are given upfront before work begins.",
    heroImage: "/images/work/crew-loading-truck.jpg",
    intro:
      "Nobody likes surprise bills, especially after a cleanout. Here's exactly how we price jobs and what affects the final number.",
    sections: [
      {
        heading: "How junk removal is priced",
        body: "By volume — how much space the junk takes up in our truck, not by weight or time. Quarter truck, half truck, three-quarters, full truck. We tell you the price before we load a single thing. If you add more during the job, we quote the add before we take it.",
      },
      {
        heading: "How estate cleanouts are priced",
        body: "By the job. We walk through the home, estimate the total volume, and quote a flat rate. Most single-family homes fall between $800 and $3,500 depending on size, stairs, access, and how much is inside. Larger estates and Wexford-sized homes can run higher.",
      },
      {
        heading: "Single-item minimums",
        body: "Single items start at $95. Appliances, couches, mattresses — typically $85–$125 depending on size and access. Stairs and basement pickups may add a small surcharge.",
      },
      {
        heading: "What's included in every price",
        body: "Labor, loading, hauling, disposal fees, donation routing, sweep-out, and fuel. The price we quote is the price you pay.",
      },
      {
        heading: "What's not included",
        body: "Hazardous materials disposal, asbestos abatement, and major structural demolition. If any of those come up during the walk-through, we'll tell you upfront.",
      },
      {
        heading: "Payment methods",
        body: "Credit card, debit card, Zelle, cash, and check (for recurring commercial clients). Payment on completion — we don't ask for deposits on standard jobs.",
      },
    ],
  },
  {
    slug: "donation-partners",
    title: "Donation Partners",
    seoTitle: "Donation Partners | Where Your Stuff Goes | Steel City Cleanouts",
    seoDescription:
      "Our Pittsburgh donation partners. When your cleanout items are in good condition, we route them to local charities and reuse centers.",
    heroHeadline: "Where Your Stuff Actually Goes",
    heroSub: "Good-condition items get a second life with local Pittsburgh charities.",
    citableSnippet:
      "Steel City Cleanouts routes donatable items from Pittsburgh cleanouts to local partners including Goodwill, Construction Junction, and area furniture banks. Donation receipts available on request.",
    heroImage: "/images/work/empty-living-room.jpg",
    intro:
      "We hate landfills as much as you do. When cleanout items are in good enough condition to be reused, they go to local Pittsburgh partners — not the dump. Here's who we work with.",
    sections: [
      {
        heading: "Goodwill of Southwestern Pennsylvania",
        body: "Our first stop for clothing, housewares, working electronics, and small furniture. Multiple drop-off locations across Pittsburgh and the surrounding suburbs.",
      },
      {
        heading: "Construction Junction",
        body: "Pittsburgh's reuse center for building materials. Doors, windows, cabinets, fixtures, hardware, flooring, lumber. If it came out of a renovation and it's still usable, they take it.",
      },
      {
        heading: "Local furniture banks",
        body: "Couches, dining sets, beds, and dressers in good condition get routed to furniture banks serving families in transition across Allegheny and Butler counties.",
      },
      {
        heading: "St. Vincent de Paul Society",
        body: "Clothing, kitchen goods, small appliances, and household items. They support families across the Pittsburgh diocese.",
      },
      {
        heading: "Donation receipts",
        body: "If you need a donation receipt for estate tax purposes, let us know before the cleanout. We'll document the items that go to donation partners and provide a written list.",
      },
      {
        heading: "What can't be donated",
        body: "Broken furniture, stained mattresses, non-working appliances, outdated electronics (old CRTs), baby gear that doesn't meet current safety standards, and anything too worn to reuse. These go to licensed disposal and recycling facilities.",
      },
    ],
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
