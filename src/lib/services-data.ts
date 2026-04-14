export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSub: string;
  intro: string;
  keyPoints: string[];
  whatsIncluded: string[];
  pricingAnchor: string;
  heroImage: string;
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "estate-cleanouts",
    name: "Estate Cleanouts",
    shortName: "Estate Cleanouts",
    seoTitle: "Estate Cleanouts Pittsburgh PA | Same-Day Service | Steel City Cleanouts",
    seoDescription:
      "Full-service estate cleanouts in Pittsburgh and surrounding areas. We handle the whole house, haul everything away, sweep it clean. Call (585) 200-0871 for a free quote.",
    heroHeadline: "Pittsburgh Estate Cleanouts",
    heroSub: "Whole-house cleanouts handled with respect and speed.",
    intro:
      "Losing a loved one is hard enough without facing a house full of belongings. Our estate cleanout crews handle everything — from the attic boxes to the basement furnace — so families can focus on what matters. We work with attorneys, realtors, and families across Pittsburgh to turn a full home into an empty, broom-swept property in one to three days.",
    keyPoints: [
      "Whole-house cleanouts, attic to basement",
      "We sort what can be donated or sold, haul the rest",
      "Work directly with probate attorneys and realtors",
      "Fully insured crews, respectful handling",
      "Same-day or scheduled service across Pittsburgh",
    ],
    whatsIncluded: [
      "Walk-through and free written estimate",
      "Furniture, appliances, clothing, books, paperwork",
      "Basement, attic, garage, shed, and outbuildings",
      "Donation drop-offs to local partners where possible",
      "Broom-swept finish so the home is ready for sale or rental",
    ],
    pricingAnchor: "Free on-site estimates. Most homes $800–$3,500 depending on size and volume.",
    heroImage: "/images/work/empty-living-room.jpg",
    faqs: [
      {
        q: "How long does an estate cleanout take?",
        a: "Most single-family homes take one to three days depending on square footage and how much is inside. We'll walk through with you and give you a realistic window before we start.",
      },
      {
        q: "Do you work with probate attorneys and executors?",
        a: "Yes. We work with attorneys, executors, and out-of-state family members all the time. We can coordinate access, provide itemized invoices, and hold on-site valuables for the estate.",
      },
      {
        q: "What happens to the stuff you take?",
        a: "Anything in good condition gets donated to local Pittsburgh charities when possible. The rest goes to licensed disposal and recycling. We send a receipt for donated items on request.",
      },
      {
        q: "Can you cleanout a hoarder situation?",
        a: "Yes. We've handled heavy hoarder cleanouts across Pittsburgh. Our crews are equipped, respectful, and discreet. Call us and we'll come out for a private walk-through.",
      },
    ],
  },
  {
    slug: "junk-removal",
    name: "Junk Removal",
    shortName: "Junk Removal",
    seoTitle: "Junk Removal Pittsburgh PA | Same-Day Pickup | Steel City Cleanouts",
    seoDescription:
      "Fast, same-day junk removal in Pittsburgh. We haul furniture, appliances, yard waste, construction debris, and more. Upfront pricing. Call (585) 200-0871.",
    heroHeadline: "Same-Day Junk Removal in Pittsburgh",
    heroSub: "Point, we load, we haul. No hidden fees.",
    intro:
      "If it's heavy, awkward, or broken, we'll take it. Our junk removal crews cover Pittsburgh and every surrounding township seven days a week. You point at what needs to go — we carry it out, load the truck, sweep up behind us, and you get your space back. Same-day service is available most days.",
    keyPoints: [
      "Same-day service across Pittsburgh",
      "We load everything — you don't lift a thing",
      "Upfront pricing before we start",
      "Single items or full truckloads",
      "Fully insured, uniformed crews",
    ],
    whatsIncluded: [
      "Old furniture, mattresses, couches, recliners",
      "Appliances, refrigerators, washers, dryers",
      "Electronics, TVs, computers, exercise equipment",
      "Yard waste, brush, fencing, lumber",
      "Construction debris and remodeling leftovers",
    ],
    pricingAnchor: "Starts around $95 for a single item. Truckloads from $295. Free quotes over the phone.",
    heroImage: "/images/work/crew-loading-truck.jpg",
    faqs: [
      {
        q: "How fast can you get here?",
        a: "Most days we can be out the same day or next morning. Call us and we'll give you a real window, not a four-hour block.",
      },
      {
        q: "What can't you take?",
        a: "We can't haul hazardous materials like paint, oil, gas, or asbestos. Everything else — furniture, appliances, construction debris, yard waste — is fair game.",
      },
      {
        q: "Do I need to be home?",
        a: "Not always. If the items are outside or in a garage, we can handle it with a photo and a phone call. Payment by card over the phone when we're done.",
      },
      {
        q: "How is pricing calculated?",
        a: "By volume — how much space the junk takes up in our truck. We give you a price before we start loading, so there are no surprises.",
      },
    ],
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    shortName: "Appliance Removal",
    seoTitle: "Appliance Removal Pittsburgh PA | Fridge, Washer, Dryer Haul-Away",
    seoDescription:
      "Old appliance hauling in Pittsburgh. We remove refrigerators, washers, dryers, stoves, and dishwashers. Fully insured. Call (585) 200-0871.",
    heroHeadline: "Appliance Removal Across Pittsburgh",
    heroSub: "Old fridge, dead washer, busted dryer — we'll take it.",
    intro:
      "Appliances are heavy, awkward, and nobody wants to carry a refrigerator down a basement staircase. We do this every day. Two-person crews show up with the right gear, protect your floors and doorways, and get that old appliance out of your house in under thirty minutes most of the time.",
    keyPoints: [
      "Refrigerators, washers, dryers, stoves, dishwashers",
      "We protect your floors and doorways",
      "Two-person crews for heavy lifts",
      "Environmentally responsible disposal",
      "Same-day service available",
    ],
    whatsIncluded: [
      "Refrigerators and freezers (including chest freezers)",
      "Washers and dryers, stacked or standalone",
      "Electric and gas stoves, wall ovens",
      "Dishwashers, disposals, trash compactors",
      "Microwaves, water heaters, HVAC units",
    ],
    pricingAnchor: "Single appliances from $95. Multi-appliance discounts available.",
    heroImage: "/images/work/crew-loaded-truck-curbside.jpg",
    faqs: [
      {
        q: "Do you take refrigerators and freezers?",
        a: "Yes. We handle refrigerators, chest freezers, and stand-up freezers. We follow EPA guidelines for coolant recovery.",
      },
      {
        q: "Can you disconnect the appliance first?",
        a: "Basic disconnects like unplugging a fridge or pulling a washer hose are included. Gas line or hardwired electric removal should be done by a licensed plumber or electrician first.",
      },
      {
        q: "What if the appliance is in the basement?",
        a: "No problem. We haul basement fridges, washers, and freezers up steps all the time. Tell us where it is when you call and we'll bring the right crew.",
      },
    ],
  },
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    shortName: "Furniture Removal",
    seoTitle: "Furniture Removal Pittsburgh PA | Couch, Mattress, Table Haul-Away",
    seoDescription:
      "Pittsburgh furniture removal and haul-away. Old couches, mattresses, desks, tables, bedroom sets. Same-day pickup. Call (585) 200-0871.",
    heroHeadline: "Pittsburgh Furniture Removal",
    heroSub: "One couch or a whole house — we'll haul it.",
    intro:
      "That old sectional that won't fit down the stairs, the mattress nobody wants, the dining room set your parents left you — we take it all. Our crews carry furniture out without dinging your walls, load it in the truck, and get it out of your life. Donation-worthy pieces go to local Pittsburgh charities when possible.",
    keyPoints: [
      "Couches, sectionals, sleeper sofas, recliners",
      "Mattresses and box springs, any size",
      "Dressers, desks, dining sets, bedroom sets",
      "Floor and wall protection on every job",
      "Donations routed to local Pittsburgh charities",
    ],
    whatsIncluded: [
      "Single-item pickups or full-room cleanouts",
      "Disassembly when needed (beds, sectionals, tables)",
      "Mattress and box spring removal",
      "Office furniture, cubicles, filing cabinets",
      "Patio furniture, outdoor sets",
    ],
    pricingAnchor: "Couches from $95. Mattresses from $85. Full rooms from $250.",
    heroImage: "/images/work/crew-loading-couch.jpg",
    faqs: [
      {
        q: "Can you get a couch out through a tight staircase?",
        a: "Usually yes. Our crews disassemble sectionals and sleeper sofas when needed. If it came in, we can get it out.",
      },
      {
        q: "Do you donate usable furniture?",
        a: "When we can. Pieces in good condition go to local Pittsburgh donation partners. The rest is disposed of responsibly at licensed facilities.",
      },
      {
        q: "What about mattresses?",
        a: "We take them. Any size, any condition. Mattresses are recycled when possible under PA and regional programs.",
      },
    ],
  },
  {
    slug: "garage-cleanouts",
    name: "Garage Cleanouts",
    shortName: "Garage Cleanouts",
    seoTitle: "Garage Cleanouts Pittsburgh PA | Full Garage Haul-Away | Steel City",
    seoDescription:
      "Full garage cleanouts in Pittsburgh. We clear the whole garage in one visit — tools, boxes, furniture, yard equipment. Call (585) 200-0871 for a free quote.",
    heroHeadline: "Garage Cleanouts in Pittsburgh",
    heroSub: "Park your car in your garage again.",
    intro:
      "Most Pittsburgh garages start as car storage and end up as a twenty-year collection of tools, boxes, bikes, broken lawnmowers, and paint cans nobody's opened since 2009. We come in, clear the whole thing, and leave you with a swept, empty garage in a single visit. Usually done in half a day.",
    keyPoints: [
      "Whole-garage cleanouts in one visit",
      "Tools, yard equipment, old furniture, bikes",
      "Half-day turnaround on most garages",
      "Donation sorting included",
      "Broom-swept finish",
    ],
    whatsIncluded: [
      "Boxes, totes, and accumulated junk",
      "Old yard equipment, lawnmowers, edgers",
      "Bikes, sports equipment, exercise gear",
      "Metal shelving, workbenches, cabinets",
      "Scrap lumber, leftover remodeling materials",
    ],
    pricingAnchor: "Most garages $350–$900 depending on volume.",
    heroImage: "/images/before-after/garage-after.jpg",
    faqs: [
      {
        q: "How long does a garage cleanout take?",
        a: "Most two-car garages take three to five hours. We'll give you an honest estimate at the walk-through.",
      },
      {
        q: "Can you help me sort what stays and what goes?",
        a: "Absolutely. We'll point, you decide. Piles for keep, donate, and haul. Then we load and go.",
      },
      {
        q: "What about chemicals like paint and oil?",
        a: "We can't legally haul hazardous materials, but we'll tell you the nearest Pittsburgh drop-off sites for paint, oil, and automotive fluids.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
