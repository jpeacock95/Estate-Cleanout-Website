export type PricingFaq = { q: string; a: string };

export type PricingRow = {
  label: string;
  price: string;
  description?: string;
};

export type PricingPage = {
  slug: string;
  name: string;
  category: "by-load-size" | "by-service" | "comparison" | "surcharges" | "core";
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSub: string;
  eyebrow: string;
  citableSnippet: string;
  intro: string;
  pricingAnchor: string;
  tableHeading: string;
  tableSubheading?: string;
  tableColumnLabel?: string;
  rows: PricingRow[];
  whatsIncluded?: string[];
  factors?: string[];
  notes?: string[];
  exampleJob?: { title: string; body: string };
  heroImage: string;
  faqs: PricingFaq[];
  relatedSlugs?: string[];
};

export const pricingPages: PricingPage[] = [
  {
    slug: "by-load-size",
    name: "Pricing by Load Size",
    category: "by-load-size",
    seoTitle: "Junk Removal Cost by Load Size in Pittsburgh | What Each Size Holds",
    seoDescription:
      "How junk removal load sizes work in Pittsburgh. What a single item, quarter truck, half truck, and full truck actually hold, and what moves your quote.",
    heroHeadline: "Pittsburgh Junk Removal Pricing by Load Size",
    heroSub: "Single item, quarter truck, half truck, full truck. Here is what each one actually holds.",
    eyebrow: "Pricing · Load Size",
    citableSnippet:
      "Junk removal in Pittsburgh is priced by how much truck space your load fills. A quarter truck is about 3.5 cubic yards, roughly a pickup bed. A half truck is about 7 cubic yards. A full truck is about 15 cubic yards. Your quote depends on that volume plus access, stairs, item type, and disposal requirements.",
    intro:
      "Most junk removal companies hide pricing behind a quote form. We don't. Every Pittsburgh job we run falls into one of four load sizes, and the price is tied to how much space your items take up in our 15-cubic-yard truck. Nothing else. No fuel surcharge, no disposal fee, no environmental tax tacked on at the end.",
    pricingAnchor:
      "Load size sets the baseline, access and item type adjust it. We quote the whole job before anyone loads.",
    tableHeading: "What Each Load Size Holds",
    tableColumnLabel: "What It Holds",
    tableSubheading: "Prices are all-in for Pittsburgh, Allegheny County, and surrounding suburbs.",
    rows: [
      {
        label: "Minimum / single item",
        price: "One item, curbside or carried out",
        description: "One item like a mattress, couch, or appliance. Curbside or garage pickup.",
      },
      {
        label: "Quarter truck (~3.5 cubic yards)",
        price: "About a pickup bed",
        description: "Small cleanup. About the size of a pickup truck bed.",
      },
      {
        label: "Half truck (~7 cubic yards)",
        price: "A garage corner or small apartment",
        description: "Medium job. Garage clean-out, basement corner, or small apartment.",
      },
      {
        label: "Full truck (~15 cubic yards)",
        price: "A packed garage, full basement, or multi-room clearout",
        description: "Big job. Whole garage, large basement, or multi-room cleanout.",
      },
    ],
    whatsIncluded: [
      "Labor (2 or 3-person crew)",
      "Truck and fuel",
      "Haul-away and disposal fees",
      "Donation routing for reusable items",
      "Broom-sweep finish of the area",
    ],
    factors: [
      "Truck fill percentage (volume drives price)",
      "Stairs over 8 steps, because every trip takes longer",
      "Heavy items like pianos, safes, and hot tubs, which need extra crew and equipment",
      "Biohazard or heavy soil, which needs protective gear and a separate disposal route",
      "Long carry over 50 feet from the truck",
    ],
    exampleJob: {
      title: "Real Pittsburgh job, March 2026",
      body: "Ross Township homeowner. One sectional couch, 6 boxes, 1 queen mattress, 2 lamps, and a broken dresser. About half a truck, with stairs from the basement adding a second crew member. Quoted at the walk-through, paid on the spot with a card.",
    },
    heroImage: "/images/pricing/by-load-size.jpg",
    faqs: [
      {
        q: "What's the minimum charge for junk removal in Pittsburgh?",
        a: "Single-item pickup is our smallest job type. It covers one piece such as a mattress, couch, refrigerator, or treadmill. We haul it, route it to recycling, donation, or landfill, and the disposal fee is inside the quoted number rather than added afterward.",
      },
      {
        q: "How do you measure a 'quarter truck' or 'half truck'?",
        a: "Our standard truck holds about 15 cubic yards. A quarter truck is roughly 3.5 cubic yards, which is about the size of a pickup bed. A half truck is around 7 cubic yards. We measure in the field, not on a form, and we give you the final volume before we haul anything away.",
      },
      {
        q: "Why is junk removal pricing based on volume and not weight?",
        a: "Volume is what drives our costs. We pay disposal fees at the landfill by volume, not weight, for most items. The only time weight matters is for heavy construction debris or concrete, where we charge a small surcharge.",
      },
      {
        q: "Do I need to get multiple quotes to see the real price?",
        a: "No. Our price is our price. We don't run a bait-and-switch where the quote doubles on job day. The range we publish here is the range we charge. Call (585) 200-0871 and we'll give you a specific number for your job in about 5 minutes.",
      },
    ],
    relatedSlugs: ["minimum-charge", "quarter-truck", "half-truck", "full-truck", "surcharges"],
  },
  {
    slug: "minimum-charge",
    name: "Minimum Charge",
    category: "by-load-size",
    seoTitle: "Junk Removal Minimum Charge in Pittsburgh | Single Item Pickup",
    seoDescription:
      "How single-item junk removal pickup works in Pittsburgh. What counts as one item, what gets quoted separately, and what affects the price.",
    heroHeadline: "What's the Minimum Charge for Junk Removal in Pittsburgh?",
    heroSub: "One item, anywhere in the Pittsburgh metro. Here is how it is quoted.",
    eyebrow: "Pricing · Minimum",
    citableSnippet:
      "Single-item junk removal in Pittsburgh covers one piece picked up and hauled, such as a couch, a mattress, a recliner, or one appliance. It is the smallest job type and it is quoted on its own rather than as part of a load. Oversized items like pianos, hot tubs, and pool tables are quoted separately because of weight and disassembly.",
    intro:
      "People ask about the minimum charge because they have just one thing to get rid of and they don't want to pay for a whole truck. Fair. Single-item pickup covers exactly that. One mattress, one couch, one appliance, one treadmill, one sofa bed. We pull up, load it, and haul it. No extra fees on top.",
    pricingAnchor: "One item, quoted on the call. Oversized pieces like pianos and hot tubs are quoted separately.",
    tableHeading: "What Counts as a Single Item",
    tableColumnLabel: "How It Is Handled",
    rows: [
      { label: "Mattress (any size)", price: "Standard single-item pickup" },
      { label: "Couch or sectional (1 piece)", price: "Standard single-item pickup" },
      { label: "Refrigerator or washer", price: "Standard single-item pickup" },
      { label: "Treadmill or exercise bike", price: "Standard single-item pickup" },
      { label: "Recliner or armchair", price: "Standard single-item pickup" },
      { label: "TV up to 65 inches", price: "Standard single-item pickup" },
    ],
    whatsIncluded: [
      "2-person crew to carry the item",
      "Truck and fuel",
      "Landfill or recycling disposal fees",
      "Donation drop-off if the item is reusable",
      "Same-day or scheduled service",
    ],
    notes: [
      "Pianos, hot tubs, and pool tables are not single-item pickups. They are quoted on their own because of weight, disassembly, and equipment.",
      "If you have more than one item, a quarter-truck job usually makes more financial sense.",
      "Basement and upper-floor pickups are still single-item jobs, with the stair carry accounted for in the quote.",
    ],
    heroImage: "/images/pricing/minimum-charge.jpg",
    faqs: [
      {
        q: "Is the single-item price really all-in?",
        a: "Yes. Your quote covers the labor, truck, fuel, disposal fee, and donation routing. We don't add a fuel surcharge, environmental fee, or disposal tax. The only way the price goes up is if you have stairs over 8 steps, or if the item is one of the heavy specialty items listed above.",
      },
      {
        q: "Can I get 3 small items removed as one pickup?",
        a: "Usually, yes. If the 3 small items all fit in the same trip and they're easy to carry (like a chair, a side table, and a box of kitchen stuff), we'll quote it as one single-item pickup. If it's 3 bigger items, it's cheaper to bundle them into one quarter-truck job than to book three separate pickups.",
      },
      {
        q: "What if I only have junk bags?",
        a: "Four or fewer standard contractor bags still count as a single-item pickup. Five or more bags usually puts you in quarter-truck territory.",
      },
      {
        q: "Do I have to book a full truck to get the minimum price?",
        a: "No. The single-item rate is a real job type, not a teaser to get us in the door. You can book one item, and the number quoted on the call is the number you pay.",
      },
    ],
    relatedSlugs: ["by-load-size", "quarter-truck", "surcharges"],
  },
  {
    slug: "quarter-truck",
    name: "Quarter Truck Load",
    category: "by-load-size",
    seoTitle: "Quarter Truck Junk Removal in Pittsburgh | What Fits and What It Costs",
    seoDescription:
      "Quarter truck junk removal in Pittsburgh holds about 3.5 cubic yards, roughly a pickup bed. What fits, how long it takes, and what moves the quote.",
    heroHeadline: "Quarter Truck Junk Removal in Pittsburgh",
    heroSub: "About a pickup bed of stuff. Usually 30 to 45 minutes on site.",
    eyebrow: "Pricing · Quarter Truck",
    citableSnippet:
      "A quarter truck junk removal load in Pittsburgh is about 3.5 cubic yards, roughly the volume of a pickup truck bed. That is typically 4 to 6 moving boxes plus a couple of furniture pieces. Most quarter truck jobs take 30 to 45 minutes with a 2 or 3-person crew, and the quote covers labor, truck, and disposal.",
    intro:
      "A quarter truck is the sweet spot for small cleanouts. If you have a garage corner of old tools, a basement pile of boxes, or the contents of a small storage unit, a quarter truck is usually the right size. Most quarter-truck jobs in Pittsburgh take 30 to 45 minutes start to finish.",
    pricingAnchor: "Quarter truck: about 3.5 cubic yards, 30 to 45 minutes on site. Quoted before we load.",
    tableHeading: "Quarter Truck Load Guide",
    tableColumnLabel: "Time and Crew",
    rows: [
      {
        label: "Quarter truck, light load",
        price: "About 30 minutes, 2-person crew",
        description: "Boxes, bags, light furniture. Easy carry.",
      },
      {
        label: "Quarter truck, typical load",
        price: "35 to 45 minutes, 2-person crew",
        description: "Mixed furniture and boxes. Standard garage clean-out corner.",
      },
      {
        label: "Quarter truck, heavy load",
        price: "45 minutes or more, often a 3rd crew member",
        description: "Dense or heavy items, multiple trips from basement, or stairs.",
      },
    ],
    whatsIncluded: [
      "2 or 3-person crew",
      "Truck, fuel, and disposal",
      "30 to 45 minutes of work",
      "Donation routing for reusable items",
      "Sweep-up of the loaded area",
    ],
    exampleJob: {
      title: "Real quarter-truck job, February 2026",
      body: "Mt Lebanon homeowner. Old armchair, 4 moving boxes of kitchen stuff, a rolled rug, and 2 bags of yard debris from a garage corner. Textbook quarter truck, 35 minutes start to finish, quoted on the phone before the truck rolled.",
    },
    heroImage: "/images/pricing/quarter-truck.jpg",
    faqs: [
      {
        q: "How much stuff is actually a quarter truck?",
        a: "Think the size of a standard pickup truck bed, or about 4 to 6 standard moving boxes plus a couple of pieces of furniture. If you can see all your junk in one corner of the garage, it's almost always a quarter truck or less.",
      },
      {
        q: "How long does a quarter-truck job take?",
        a: "Most Pittsburgh quarter-truck jobs take 30 to 45 minutes from when we pull up to when we drive away. Faster if everything is curbside, a little slower if we have to go up or down stairs.",
      },
      {
        q: "Can I schedule a quarter-truck pickup for the same day?",
        a: "Yes, usually. If you call before 2pm and you're in the Pittsburgh metro, we can almost always fit you in same-day. Same-day adds a small surcharge. Next-day is standard pricing.",
      },
    ],
    relatedSlugs: ["by-load-size", "minimum-charge", "half-truck", "full-truck"],
  },
  {
    slug: "half-truck",
    name: "Half Truck Load",
    category: "by-load-size",
    seoTitle: "Half Truck Junk Removal in Pittsburgh | What Fits and What It Costs",
    seoDescription:
      "Half truck junk removal in Pittsburgh holds about 7 cubic yards. What fits, how long it takes, and what affects the quote on a garage or basement clearout.",
    heroHeadline: "Half Truck Junk Removal in Pittsburgh",
    heroSub: "A garage, a basement corner, or a small apartment. Here is what fits.",
    eyebrow: "Pricing · Half Truck",
    citableSnippet:
      "A half truck junk removal load in Pittsburgh is about 7 cubic yards, which is the most common job size. It typically covers a single-bay garage, a basement corner, or the furniture from a one or two-bedroom apartment. Most half truck jobs run 45 to 75 minutes with a 2 or 3-person crew.",
    intro:
      "Half-truck jobs are our most common size. They cover a full garage cleanout, a basement section, a small one-bedroom apartment empty, or about half of a typical estate cleanout's excess. Most Pittsburgh half-truck jobs finish in 45 to 75 minutes.",
    pricingAnchor: "Half truck: about 7 cubic yards, 45 to 75 minutes on site. Quoted before we load.",
    tableHeading: "Half Truck Load Guide",
    tableColumnLabel: "Time and Crew",
    rows: [
      {
        label: "Half truck, light load",
        price: "About 45 minutes, 2-person crew",
        description: "Boxes, bags, and 1 or 2 furniture pieces.",
      },
      {
        label: "Half truck, typical load",
        price: "About an hour, 2 or 3-person crew",
        description: "Mixed garage or basement contents. Couch, dresser, boxes.",
      },
      {
        label: "Half truck, heavy load",
        price: "75 minutes or more, 3-person crew",
        description: "Dense or heavy. Stairs, multiple trips, or construction debris.",
      },
    ],
    whatsIncluded: [
      "2 or 3-person crew",
      "45 to 75 minutes of work",
      "Truck, fuel, and disposal",
      "Donation routing",
      "Sweep-up finish",
    ],
    exampleJob: {
      title: "Real half-truck job, March 2026",
      body: "Cranberry Township rental turnover. Outgoing tenant left a couch, bed frame, mattress, 8 bags of trash, a broken TV, and an armchair. Textbook half truck, 55 minutes, and the landlord had the unit ready to show the next morning.",
    },
    heroImage: "/images/pricing/half-truck.jpg",
    faqs: [
      {
        q: "Is a half truck enough for a full garage cleanout?",
        a: "Usually, yes. A standard 2-car Pittsburgh garage with shelving and a few years of clutter fits in a half truck about 80% of the time. If your garage is packed floor-to-ceiling, you're probably looking at a full truck instead.",
      },
      {
        q: "How long does a half-truck job take?",
        a: "Most Pittsburgh half-truck jobs take 45 to 75 minutes. Longer if the items are far from the curb or if there are stairs.",
      },
      {
        q: "What if I'm not sure whether I'm a half or a full truck?",
        a: "Call us and describe the job, or send a couple of photos. We can usually give you a confident range over the phone. On job day we always confirm the volume in the field before we haul anything away.",
      },
    ],
    relatedSlugs: ["by-load-size", "quarter-truck", "full-truck", "garage-cleanout"],
  },
  {
    slug: "full-truck",
    name: "Full Truck Load",
    category: "by-load-size",
    seoTitle: "Full Truck Junk Removal in Pittsburgh | What Fits and What It Costs",
    seoDescription:
      "Full truck junk removal in Pittsburgh holds about 15 cubic yards. What fits in a whole-garage or full-basement clearout and what moves the quote.",
    heroHeadline: "Full Truck Junk Removal in Pittsburgh",
    heroSub: "Big jobs. A whole garage, a full basement, or several rooms.",
    eyebrow: "Pricing · Full Truck",
    citableSnippet:
      "A full truck junk removal load in Pittsburgh is about 15 cubic yards. That covers a packed two-car garage, a full basement, or several rooms of furniture at once. Full truck jobs usually take 2 to 4 hours with a 3-person crew, and very large homes sometimes need more than one truckload.",
    intro:
      "Full-truck jobs are the big ones. Whole packed garages, entire finished basements, or 2 to 3 rooms of furniture and boxes. Most full-truck Pittsburgh jobs take 90 to 120 minutes with a 3-person crew. If your job is bigger than one full truck, we just come back with another load and the second truck is priced at a discount.",
    pricingAnchor: "Full truck: about 15 cubic yards, 2 to 4 hours on site. Quoted after a walk-through.",
    tableHeading: "Full Truck Load Guide",
    tableColumnLabel: "Time and Crew",
    rows: [
      {
        label: "Full truck, light load",
        price: "About 2 hours, 3-person crew",
        description: "Large volume but light items. Boxes, bags, soft goods.",
      },
      {
        label: "Full truck, typical load",
        price: "2 to 3 hours, 3-person crew",
        description: "Full garage or basement. Mixed furniture and boxes.",
      },
      {
        label: "Full truck, heavy load",
        price: "3 to 4 hours, 3-person crew",
        description: "Dense or heavy. Construction debris, appliances, multiple heavy items.",
      },
    ],
    whatsIncluded: [
      "3-person crew",
      "90 to 120 minutes of work",
      "Truck, fuel, and disposal",
      "Donation routing",
      "Sweep-up finish",
    ],
    notes: [
      "If your job exceeds one full truck, the second load is billed at 75% of the full-truck price.",
      "We can stage a dumpster if the job is bigger than 3 full trucks (usually cheaper at that scale).",
    ],
    exampleJob: {
      title: "Real full-truck job, March 2026",
      body: "Bethel Park basement cleanout. 30 years of accumulated boxes, an old couch set, a treadmill, a broken water heater, 12 bags of clothes, shelving, and a disassembled pool table. Full truck, 2 hours, 3-person crew, one trip.",
    },
    heroImage: "/images/pricing/full-truck.jpg",
    faqs: [
      {
        q: "How much fits in a full truck?",
        a: "Our truck holds about 15 cubic yards. That's roughly a full 2-car garage of stuff, or the complete contents of a 600 to 800 square foot basement.",
      },
      {
        q: "What if my job is more than one full truck?",
        a: "We come back with a second truck. The second load is priced at 75% of the full-truck rate. If you know up front that your job is 2 or more trucks (like a whole-house estate cleanout), ask about our estate cleanout pricing instead, which is built for bigger jobs.",
      },
      {
        q: "Can you guarantee my stuff fits in one truck?",
        a: "We give you a confident estimate on the walk-through, and if we're wrong we eat the difference. You won't get surprised with a second-truck bill you weren't expecting.",
      },
    ],
    relatedSlugs: ["by-load-size", "half-truck", "estate-cleanout", "vs-dumpster-rental"],
  },
  {
    slug: "estate-cleanout",
    name: "Estate Cleanout Pricing",
    category: "by-service",
    seoTitle: "Estate Cleanout Cost in Pittsburgh | What Drives the Price",
    seoDescription:
      "What an estate cleanout costs in Pittsburgh and why. Home size, volume, access, and sorting time are the four things that move the number. Free walk-through.",
    heroHeadline: "Estate Cleanout Pricing in Pittsburgh",
    heroSub: "Whole-home cleanouts. Here is what actually moves the number.",
    eyebrow: "Pricing · Estate",
    citableSnippet:
      "Estate cleanout cost in Pittsburgh is driven by four things: the square footage of the home, how densely it is packed, access such as stairs and driveway distance, and how much sorting the family wants before anything is hauled. A single-family home typically takes 1 to 3 days with a 2 to 4-person crew. Quotes are given after a free walk-through.",
    intro:
      "Estate cleanouts are the largest job type we run. The price scales with the size of the home and how much stuff is in it. We price the whole job up front with a single written quote on the walk-through, so there are no surprises on job day.",
    pricingAnchor: "Quoted after a free walk-through, because two homes the same size can differ by a factor of three.",
    tableHeading: "Estate Cleanout Scope by Home Size",
    tableColumnLabel: "What to Expect",
    rows: [
      {
        label: "Small home (under 1,500 sq ft)",
        price: "Usually 1 day, 2-person crew, 1 to 2 truckloads",
        description: "Condo, small single-story, or 2-bedroom apartment.",
      },
      {
        label: "Medium home (1,500 to 2,500 sq ft)",
        price: "1 to 2 days, 2 to 3-person crew, 2 to 3 truckloads",
        description: "Standard Pittsburgh single-family with basement.",
      },
      {
        label: "Large home (2,500 to 3,500 sq ft)",
        price: "2 to 3 days, 3-person crew, 3 to 5 truckloads",
        description: "Bigger single-family with finished basement and garage.",
      },
      {
        label: "Very large home (3,500+ sq ft)",
        price: "3+ days, 3 to 4-person crew, walk-through required",
        description: "Quoted on-site. Usually 2 to 3 days of work with multiple trucks.",
      },
    ],
    whatsIncluded: [
      "Free on-site walk-through",
      "Single written price with no upsells",
      "2 or 3-person crew",
      "Unlimited truckloads within the quoted price",
      "Donation routing to local Pittsburgh charities",
      "Valuables and photos set aside for family review",
      "Broom-swept finish",
    ],
    factors: [
      "Total square footage and number of rooms",
      "Volume and density of contents",
      "Hoarding-level accumulation (priced separately)",
      "Hazardous materials requiring special handling",
      "Access challenges like narrow stairs or long carries",
    ],
    exampleJob: {
      title: "Real estate cleanout, March 2026",
      body: "Upper St Clair family. Parents' home of 42 years, 2,800 sq ft with finished basement, 2-car garage, and a shed. 3 days of work with a 3-person crew and 4 truckloads, quoted as one written price at the walk-through. The family received a donation receipt, before and after photos, and a valuables box.",
    },
    heroImage: "/images/pricing/estate-cleanout.jpg",
    faqs: [
      {
        q: "How do you price an estate cleanout if I have no idea how much is inside?",
        a: "We come out, walk through, and give you a single written price based on what we see. It's free, takes about 30 minutes, and there's no obligation to book. The written number is the number, and nothing gets added after the walk-through.",
      },
      {
        q: "What's included in the estate cleanout price?",
        a: "Everything. Labor, unlimited truckloads within the quote, disposal fees, donation routing, and the broom-swept finish. The only add-ons are hazardous materials like paint or chemicals that require a separate disposal route.",
      },
      {
        q: "How long does an estate cleanout take in Pittsburgh?",
        a: "A 1,500 sq ft home usually finishes in a day. A 2,500 sq ft home with a basement runs 1.5 to 2 days. A 3,500+ sq ft home with outbuildings runs 2 to 3 days.",
      },
      {
        q: "Do you coordinate with out-of-state family?",
        a: "All the time. We work with out-of-state executors and family members by phone, photo, and video so you never have to fly in. We send before/after photos and itemized invoices.",
      },
    ],
    relatedSlugs: ["hoarder-cleanout", "full-truck", "pittsburgh-vs-national", "vs-dumpster-rental"],
  },
  {
    slug: "hoarder-cleanout",
    name: "Hoarder Cleanout Pricing",
    category: "by-service",
    seoTitle: "Hoarding Cleanup Cost in Pittsburgh | Levels 1 to 5 Explained",
    seoDescription:
      "What hoarding cleanup costs in Pittsburgh and why. The clutter scale from Level 1 to Level 5, what each level involves, and the factors that drive the quote.",
    heroHeadline: "Hoarder Cleanout Pricing in Pittsburgh",
    heroSub: "Level 1 to Level 5. What each one involves, and what it takes to clear it.",
    eyebrow: "Pricing · Hoarder Cleanout",
    citableSnippet:
      "Hoarding cleanup cost in Pittsburgh scales with the clutter level. Level 1 is cluttered but walkable and clears in about a day. Level 3 has blocked exits and needs several days. Level 5 involves structural or biohazard conditions, protective equipment, and specialized disposal. Crew size, days on site, and disposal requirements drive the quote, which comes after a discreet walk-through.",
    intro:
      "Hoarding cleanup is priced by severity level, not by square footage. We use a Level 1 through 5 framework similar to what the Institute for Challenging Disorganization uses. Level 1 is cluttered but walkable. Level 5 involves biohazards, structural damage, or no clear pathways. The price scales with how much work and how much protective equipment is needed.",
    pricingAnchor: "Quoted after a discreet walk-through. Unmarked trucks, and the assessment costs nothing.",
    tableHeading: "Hoarding Levels and What They Involve",
    tableColumnLabel: "What It Involves",
    rows: [
      {
        label: "Level 1 (cluttered, walkable)",
        price: "All rooms usable, about a day, standard crew",
        description: "Some clutter, all rooms usable, no biohazards.",
      },
      {
        label: "Level 2 (heavier clutter)",
        price: "Some rooms unusable, light odor, 1 to 2 days",
        description: "Multiple rooms with blocked areas, some odor, minor pests.",
      },
      {
        label: "Level 3 (severe clutter)",
        price: "Blocked exits, several days, protective gear",
        description: "Narrow pathways, heavy odor, rodent or insect activity.",
      },
      {
        label: "Level 4 (hazardous)",
        price: "Structural concerns, pests, specialized disposal",
        description: "Structural concerns, mold, heavy biohazard potential.",
      },
      {
        label: "Level 5 (severe, biohazard)",
        price: "Full PPE, biohazard handling, multi-day, coordinated plan",
        description: "Human or animal waste, severe mold, needs full PPE and special disposal.",
      },
    ],
    whatsIncluded: [
      "Discreet, unmarked trucks on request",
      "Full PPE for the crew (Level 3 and above)",
      "Careful sorting for valuables, documents, and sentimental items",
      "Donation routing where possible",
      "Licensed biohazard disposal where needed",
      "Family coordination throughout",
    ],
    factors: [
      "Severity level (drives most of the price)",
      "Home size",
      "Biohazard presence (Level 4 and 5 require special routing)",
      "Presence of animals needing rehoming coordination",
      "Access and privacy needs",
    ],
    notes: [
      "Every hoarding job starts with a free, private walk-through. No judgment, no pressure.",
      "We work with the Allegheny County Hoarding Task Force and can coordinate with social workers, family, or attorneys.",
      "Unmarked trucks available on request for privacy.",
    ],
    heroImage: "/images/pricing/hoarder-cleanout.jpg",
    faqs: [
      {
        q: "How do you decide what hoarding level a home is?",
        a: "We do a free, private walk-through and use the Institute for Challenging Disorganization 5-level scale. Level 1 is cluttered but walkable, Level 5 involves biohazards. We show you where your home falls and explain what's involved in the cleanup.",
      },
      {
        q: "Will my neighbors know you're doing a hoarding cleanup?",
        a: "Not unless you want them to. We can bring unmarked trucks, work discreetly, and schedule during off-peak hours. Privacy is the default for hoarding jobs.",
      },
      {
        q: "Do you work with family members who are worried about a loved one?",
        a: "Yes. We regularly work with adult children, spouses, and siblings. We'll do a private walk-through with you, talk through options, and only proceed when the person living in the home consents. We're not interventionists, but we can refer you to partners who are.",
      },
      {
        q: "Does insurance cover hoarding cleanup in Pennsylvania?",
        a: "Sometimes. Homeowners insurance may cover biohazard cleanup if it's tied to a covered event. It almost never covers clutter. We can provide documentation for an insurance claim, but we recommend talking to your insurance company first.",
      },
    ],
    relatedSlugs: ["estate-cleanout", "surcharges", "pittsburgh-vs-national"],
  },
  {
    slug: "garage-cleanout",
    name: "Garage Cleanout Pricing",
    category: "by-service",
    seoTitle: "Garage Cleanout Cost in Pittsburgh | What Drives the Price",
    seoDescription:
      "What a garage cleanout costs in Pittsburgh. Single-bay versus two-car, how packed it is, and the hazardous items we cannot take. Free quote.",
    heroHeadline: "Garage Cleanout Pricing in Pittsburgh",
    heroSub: "Single-bay or two-car. Here is what changes the number.",
    eyebrow: "Pricing · Garage",
    citableSnippet:
      "Garage cleanout cost in Pittsburgh depends on the bay count, how densely the garage is packed, and whether it holds items that need separate handling. Paint, oil, gasoline, and chemicals cannot be hauled with ordinary junk and have to go to a household hazardous waste event. Most single-bay garages clear in under 2 hours.",
    intro:
      "Garage cleanouts are one of the most common jobs we run in Pittsburgh. Most Pittsburgh garages have 5 to 15 years of accumulated stuff: broken tools, old paint cans, holiday decorations, boxes nobody opened after the last move. We clear it, haul it, and sweep the concrete.",
    pricingAnchor: "Quoted on the call or on site. Hazardous items are flagged before we start, not after.",
    tableHeading: "Garage Cleanout Scope",
    tableColumnLabel: "What to Expect",
    rows: [
      {
        label: "Single-bay garage, light",
        price: "Under 2 hours, 2-person crew, partial truckload",
        description: "Tidy garage with some clutter to clear.",
      },
      {
        label: "Single-bay garage, typical",
        price: "About 2 hours, 2-person crew, half truckload",
        description: "Years of accumulation, furniture, tools, boxes.",
      },
      {
        label: "Two-car garage, typical",
        price: "2 to 3 hours, 2 to 3-person crew, most of a truck",
        description: "Standard 2-car with shelving and stored items.",
      },
      {
        label: "Two-car garage, packed",
        price: "3+ hours, 3-person crew, often a full truckload",
        description: "Packed floor-to-ceiling. Usually a full truck.",
      },
    ],
    whatsIncluded: [
      "Labor, truck, and fuel",
      "Disposal fees",
      "Donation routing",
      "Paint and chemical coordination (where applicable)",
      "Concrete sweep at the end",
    ],
    notes: [
      "Paint cans and household chemicals need to go to Allegheny County household hazardous waste. We'll set them aside and tell you how to drop them off (or coordinate pickup for a small surcharge).",
      "Tires have a separate disposal fee ($5 to $15 each) because PA regulates tire disposal.",
    ],
    heroImage: "/images/pricing/garage-cleanout.jpg",
    faqs: [
      {
        q: "Can you haul away paint cans and household chemicals from my garage?",
        a: "Not directly in the same load. PA requires household hazardous waste (paint, solvents, automotive fluids) to go to a specific facility. We can set them aside, tell you how to drop them off at Allegheny County's HHW program, or coordinate a separate pickup for a small surcharge.",
      },
      {
        q: "What about old tires in my garage?",
        a: "We take them, but tires have a separate PA disposal fee of $5 to $15 each. We'll add that to the quote on the walk-through.",
      },
      {
        q: "Do I need to sort my garage before you come?",
        a: "No. We sort on the fly. If you want to keep certain things, just tag them or set them in a separate corner and we'll work around them.",
      },
    ],
    relatedSlugs: ["basement-cleanout", "half-truck", "full-truck", "surcharges"],
  },
  {
    slug: "basement-cleanout",
    name: "Basement Cleanout Pricing",
    category: "by-service",
    seoTitle: "Basement Cleanout Cost in Pittsburgh | What Drives the Price",
    seoDescription:
      "What a basement cleanout costs in Pittsburgh. Why the stairs set the price, partial versus full, finished versus unfinished, and what to expect. Free quote.",
    heroHeadline: "Basement Cleanout Pricing in Pittsburgh",
    heroSub: "Partial or full. In a basement, the stairs are the whole job.",
    eyebrow: "Pricing · Basement",
    citableSnippet:
      "Basement cleanout cost in Pittsburgh is driven by the stairs more than the volume, because every item has to be carried up. A narrow staircase with a turn, a bulkhead entrance, or a finished basement with furniture that will not clear the landing all add crew time. Pittsburgh basements commonly hold 30 or more years of storage.",
    intro:
      "Basement cleanouts are a specialty because of the stairs. Every item has to come up, and Pittsburgh basements tend to accumulate decades of boxes, old furniture, and broken appliances. We bring 3-person crews for most basement jobs to keep the carry-up moving fast.",
    pricingAnchor: "Quoted after we see the stairs. The carry is built into the job, not added on the day.",
    tableHeading: "Basement Cleanout Scope",
    tableColumnLabel: "What to Expect",
    rows: [
      {
        label: "Basement corner or partial",
        price: "Under 2 hours, 2-person crew, one carry route",
        description: "One area or room of the basement. Half truck of stuff.",
      },
      {
        label: "Full unfinished basement",
        price: "2 to 4 hours, 3-person crew, repeated stair trips",
        description: "Whole unfinished basement. Full truck.",
      },
      {
        label: "Full finished basement",
        price: "Half day or more, 3-person crew, furniture disassembly likely",
        description: "Whole finished basement with furniture and built-ins.",
      },
    ],
    whatsIncluded: [
      "3-person crew for most basement jobs",
      "Stairs already built into the price",
      "Labor, truck, fuel, disposal",
      "Donation routing",
      "Floor sweep at the end",
    ],
    factors: [
      "Number of stairs and tightness of the stairwell",
      "Water damage or mold (may need separate routing)",
      "Old appliances (water heater, washer, dryer)",
      "Presence of broken glass or sharp debris (add PPE)",
    ],
    exampleJob: {
      title: "Real basement cleanout, February 2026",
      body: "Plum Borough homeowner. Full unfinished basement with 25 years of boxes, old couches, a broken washer, a dehumidifier, and shelving units. Narrow stairs with a turn, so a 3-person crew ran a relay. 90 minutes, quoted before anyone started.",
    },
    heroImage: "/images/pricing/basement-cleanout.jpg",
    faqs: [
      {
        q: "Do you charge extra for basement stairs?",
        a: "No, the stairs surcharge is already built into our basement pricing. The price range you see here is what you pay. No surprise fees on job day.",
      },
      {
        q: "What if my basement has water damage or mold?",
        a: "We still do the cleanout, but we wear respirators and use sealed bags for the moldy items. There is an additional charge for mold-safe disposal, quoted up front before we start. If the mold is severe, we'll refer you to a remediation company first.",
      },
      {
        q: "Can you remove an old water heater or washer from my basement?",
        a: "Yes. Old appliances are included in the basement cleanout price. We recycle the metal where possible. Gas water heaters need to be disconnected by a plumber first; electric water heaters we can handle ourselves.",
      },
    ],
    relatedSlugs: ["garage-cleanout", "full-truck", "surcharges"],
  },
  {
    slug: "same-day",
    name: "Same-Day Junk Removal Pricing",
    category: "by-service",
    seoTitle: "Same-Day Junk Removal in Pittsburgh | How It Works",
    seoDescription:
      "How same-day junk removal works in Pittsburgh. Cutoff times, what fits into a same-day slot, and when next-day is the better call. Available 7 days a week.",
    heroHeadline: "Same-Day Junk Removal Pricing in Pittsburgh",
    heroSub: "Called this morning, gone this afternoon. Here is how the slots work.",
    eyebrow: "Pricing · Same-Day",
    citableSnippet:
      "Same-day junk removal in Pittsburgh depends on how early you call and how big the job is. Calls before 11am have the best chance of a same-day slot. Small and mid-size loads fit into same-day far more often than whole-home cleanouts, which need a scheduled walk-through. Service runs 7 days a week, 7am to 8pm.",
    intro:
      "Same-day junk removal is for urgent jobs. Real estate closings tomorrow. Last-minute move-outs. Family arriving from out of state. We keep a rotating same-day slot open on most weekdays, and the surcharge is the only premium.",
    pricingAnchor: "Same-day availability depends on the time you call and the size of the job. Quoted on that call.",
    tableHeading: "Same-Day Availability by Call Time",
    tableColumnLabel: "Your Odds",
    rows: [
      {
        label: "Same-day, called before 11am",
        price: "Best odds, most job sizes",
        description: "Standard weekday same-day. Usually a 2 to 4 hour window.",
      },
      {
        label: "Same-day, called 11am to 2pm",
        price: "Good odds for small and mid-size loads",
        description: "Tighter window. We shuffle other jobs to fit you in.",
      },
      {
        label: "Same-day, called after 2pm",
        price: "Possible for small loads, otherwise next morning",
        description: "Last-minute. Only if we have availability, not always possible.",
      },
      {
        label: "Sunday or holiday same-day",
        price: "Available, fewer slots, call early",
        description: "Weekend or holiday same-day surcharge on top of the weekday rate.",
      },
    ],
    whatsIncluded: [
      "Cut-the-line scheduling",
      "Rotating same-day reserve crew",
      "All standard pricing rules still apply to the base job",
    ],
    notes: [
      "Next-day service is standard pricing with no surcharge. Most 'same-day' urgency is actually next-day.",
      "If we can't fit you in same-day, you pay nothing. We won't charge the surcharge unless we actually deliver same-day.",
    ],
    heroImage: "/images/pricing/same-day.jpg",
    faqs: [
      {
        q: "How late can I call for same-day service?",
        a: "Calling before 11am gives you the best shot at same-day in Pittsburgh. Between 11am and 2pm is usually possible but tighter. After 2pm we can sometimes still make it work, but you're not guaranteed. If we can't fit you in, we'll tell you right away.",
      },
      {
        q: "Is next-day service the same price as regular?",
        a: "Yes, and next-day is quoted without the same-day premium. Most jobs people think need same-day are fine next morning, which is the cheaper call.",
      },
      {
        q: "Do you do same-day on weekends?",
        a: "Yes, at a weekend rate quoted on the call. Weekends fill up fastest, so the earlier you ring the better your odds of a slot.",
      },
    ],
    relatedSlugs: ["by-load-size", "surcharges"],
  },
  {
    slug: "surcharges",
    name: "Surcharge Schedule",
    category: "surcharges",
    seoTitle: "Junk Removal Extras in Pittsburgh | What Gets Quoted Separately",
    seoDescription:
      "What gets quoted separately on a Pittsburgh junk removal job. Stairs, pianos, hot tubs, safes, long carries, and biohazard work, all flagged before we start.",
    heroHeadline: "Junk Removal Surcharge Schedule",
    heroSub: "What gets quoted separately, and why. All of it flagged before we start.",
    eyebrow: "Pricing · Surcharges",
    citableSnippet:
      "Some items and conditions are quoted separately from a standard junk removal load because they change crew size, equipment, or disposal route. That list includes long stair carries, pianos, hot tubs, pool tables, heavy safes, long carries from the truck, tires, and biohazard conditions. All of it is identified at the walk-through, never added after the job.",
    intro:
      "Most junk removal companies hide their surcharges until the truck arrives. We publish ours. Here's every surcharge we charge, why we charge it, and the specific situations that trigger it. If a surcharge isn't on this list, we don't charge it.",
    pricingAnchor: "Everything on this list is flagged at the walk-through and included in your quote before work starts.",
    tableHeading: "What Gets Quoted Separately",
    tableColumnLabel: "Why",
    rows: [
      {
        label: "Stairs over 8 steps",
        price: "Extra crew time on every trip",
        description: "Charged per flight of stairs, not per item carried.",
      },
      {
        label: "Piano (upright)",
        price: "300 to 500 lbs, piano board and straps",
        description: "On top of base pickup price. Crew brings straps and dollies.",
      },
      {
        label: "Piano (grand or baby grand)",
        price: "Legs and lyre come off, 3+ person lift",
        description: "Heavier and more fragile. 3-person crew required.",
      },
      {
        label: "Hot tub removal",
        price: "Drain, then carry whole or cut down on site",
        description: "We drain, cut, and haul. See hot tub pricing for full breakdown.",
      },
      {
        label: "Pool table",
        price: "Slate comes out in sections, 3+ person lift",
        description: "Slate is heavy. Usually requires disassembly.",
      },
      {
        label: "Safe (over 200 lbs)",
        price: "Rated equipment and floor protection",
        description: "Depends on weight and access. Quoted on-site.",
      },
      {
        label: "Long carry (over 50 feet from truck)",
        price: "Adds time to every load",
        description: "For jobs where we can't park close to the items.",
      },
      {
        label: "Biohazard (Level 3+ hoarding, bodily fluids)",
        price: "PPE and specialized disposal route",
        description: "Requires PPE, special disposal routing, extra time.",
      },
      {
        label: "Tire disposal",
        price: "Landfills refuse tires, separate recycler required",
        description: "PA regulates tire disposal separately.",
      },
      {
        label: "After-hours or weekend",
        price: "Crew scheduling outside standard hours",
        description: "Jobs starting after 6pm or on Sundays.",
      },
    ],
    notes: [
      "Surcharges are additive. One surcharge never stacks with another on the same item.",
      "If two or more surcharges apply to the same job (stairs + piano, for example), both apply.",
      "All surcharges are disclosed on the walk-through quote. No surprises on job day.",
    ],
    heroImage: "/images/pricing/surcharges.jpg",
    faqs: [
      {
        q: "Are surcharges really all-in like the base prices?",
        a: "Yes, and they are added together into one quoted number before work starts rather than appearing on the invoice afterward. A job with stairs and a piano is quoted as that job. No fuel surcharge, no disposal fee on top, no environmental tax.",
      },
      {
        q: "How do you decide what counts as a 'heavy item'?",
        a: "Anything over 300 pounds that needs special handling or equipment. Pianos, hot tubs, pool tables, safes, gun safes, large appliances. We list the specific items above so there are no surprises.",
      },
      {
        q: "What if my job has something weird I don't see on this list?",
        a: "Call us and ask. If it's not on this list, we probably don't charge a surcharge for it. If we do want to add a new fee, we'll tell you on the walk-through before you commit.",
      },
    ],
    relatedSlugs: ["by-load-size", "hoarder-cleanout", "same-day"],
  },
  {
    slug: "vs-dumpster-rental",
    name: "Junk Removal vs Dumpster Rental",
    category: "comparison",
    seoTitle: "Junk Removal vs Dumpster Rental in Pittsburgh | Honest Comparison",
    seoDescription:
      "Junk removal versus dumpster rental in Pittsburgh. Real dumpster market rates, permit costs, how many hours of your labor each takes, and which one fits your job.",
    heroHeadline: "Junk Removal vs Dumpster Rental in Pittsburgh",
    heroSub: "Which one actually fits your job? Real numbers on the dumpster side.",
    eyebrow: "Pricing · Comparison",
    citableSnippet:
      "In Pittsburgh a 10-yard dumpster rental typically runs $350 to $550 for 3 to 7 days on the open market, plus a city permit if it sits on the street, and you do all the loading, which is commonly 15 to 25 hours of work. Full-service junk removal is quoted per job and the crew does the loading in 1 to 2 hours. Dumpster rental wins on multi-week renovations; junk removal wins on one-time cleanouts.",
    intro:
      "Dumpster rental looks cheaper on the sticker price, but the total cost depends on how much free time you have and how heavy the stuff is. Here's the honest comparison.",
    pricingAnchor:
      "Dumpster rental is the cheaper sticker and the bigger time cost. We quote our side per job.",
    tableHeading: "Junk Removal vs Dumpster Rental",
    tableColumnLabel: "Junk Removal vs Dumpster",
    rows: [
      {
        label: "Base price (half truck vs 10-yard dumpster)",
        price: "Quoted per job vs $350 to $550 market rate",
        description: "The dumpster sticker usually looks a little cheaper before labor.",
      },
      {
        label: "Your labor",
        price: "0 hours vs 15 to 25 hours",
        description: "We load; you don't. Dumpster, you load everything yourself.",
      },
      {
        label: "Time on-site",
        price: "45 to 75 min vs 3 to 7 days",
        description: "Dumpster sits in your driveway for days.",
      },
      {
        label: "Disposal fees",
        price: "Included in the quote vs $30 to $150 per ton overage",
        description: "Dumpster rentals charge extra if you go over weight.",
      },
      {
        label: "Donation routing",
        price: "Included vs Not available",
        description: "We divert reusable items. Dumpster goes straight to landfill.",
      },
      {
        label: "Permit (if on street)",
        price: "Not needed vs $25 to $75 (Pittsburgh city)",
        description: "Pittsburgh may require a dumpster permit for street placement.",
      },
    ],
    notes: [
      "Dumpster rental wins if your job is spread out over a week, you have help, and you don't mind the aesthetic of a dumpster in your driveway.",
      "Junk removal wins if you value your time, want the job done same-day or next-day, or have stuff that's heavy, awkward, or hard to carry.",
      "For jobs bigger than 3 full trucks (whole-house demo, major renovation debris), dumpster rental usually wins on cost.",
    ],
    exampleJob: {
      title: "Same job, both options, priced out",
      body: "Bethel Park homeowner needed to clear a packed 2-car garage. Junk removal: quoted as one number, 90 minutes on a Thursday, done. Dumpster rental: $425 for a 10-yard bin for 5 days at market rate, plus about 18 hours of homeowner labor over a weekend, plus a $40 overage for going 0.4 tons heavy. The sticker gap was small. The lost weekend was not.",
    },
    heroImage: "/images/pricing/vs-dumpster-rental.jpg",
    faqs: [
      {
        q: "Is a dumpster rental actually cheaper than junk removal in Pittsburgh?",
        a: "Only if your time is free. The dumpster sticker usually looks a little cheaper, but you do all the loading yourself and the bin sits in your driveway for 3 to 7 days. If you can't get friends to help, the math rarely works out in dumpster rental's favor for small to medium jobs.",
      },
      {
        q: "When does dumpster rental make more sense?",
        a: "When you have a multi-day project (like a kitchen demo or siding removal), when the waste is heavy construction debris, or when your job is bigger than 3 full trucks. At that point, the dumpster's flat rate beats the per-truck pricing.",
      },
      {
        q: "Do I need a permit to put a dumpster on the street in Pittsburgh?",
        a: "Yes, for most City of Pittsburgh street placements. The permit costs $25 to $75 depending on the street type and duration. Private driveways don't require a permit. We don't need any permits because our truck just pulls in, loads, and leaves.",
      },
    ],
    relatedSlugs: ["by-load-size", "half-truck", "full-truck", "vs-diy"],
  },
  {
    slug: "vs-diy",
    name: "Junk Removal vs DIY Transfer Station",
    category: "comparison",
    seoTitle: "Junk Removal vs Hauling It Yourself in Pittsburgh | Real Cost Comparison",
    seoDescription:
      "What hauling junk yourself actually costs in Pittsburgh: transfer station fees, gas, truck rental, and the hours nobody counts. Compared against hiring a crew.",
    heroHeadline: "Junk Removal vs DIY Trip to the Transfer Station",
    heroSub: "What it really costs to haul it yourself, including the parts nobody counts.",
    eyebrow: "Pricing · Comparison",
    citableSnippet:
      "Hauling junk yourself in Pittsburgh means a transfer station fee, commonly $50 to $75 per vehicle load, plus gas, plus a truck if you do not own one, plus 3 to 5 hours of loading, driving, and unloading for a small load. Full-service junk removal is quoted per job and takes none of your time. DIY wins on cash for small loads; the gap closes fast once stairs or multiple trips are involved.",
    intro:
      "If you have a pickup truck, strong friends, and a free Saturday, hauling your own junk is a legit option in Pittsburgh. Here's what it actually costs once you add up the transfer station fee, gas, and your time.",
    pricingAnchor:
      "DIY saves cash and costs hours. We quote our side per job so you can compare honestly.",
    tableHeading: "Hauling It Yourself vs Hiring a Crew",
    tableColumnLabel: "What It Costs You",
    rows: [
      {
        label: "Transfer station fee (McKees Rocks)",
        price: "$50 to $75 per vehicle",
        description: "Single pickup load dumped at the facility.",
      },
      {
        label: "Gas and time to the station",
        price: "$10 to $20 plus 1 hour",
        description: "Most Pittsburgh transfer stations are 20 to 40 minutes out.",
      },
      {
        label: "Loading the truck yourself",
        price: "1 to 3 hours of your labor",
        description: "Plus strong friends and a functioning back.",
      },
      {
        label: "Disposal of non-dump items",
        price: "Separate trips, varies by item",
        description: "Tires, appliances, electronics not accepted at most transfer stations.",
      },
      {
        label: "Total DIY cost for a small load",
        price: "Roughly $75 to $120 plus 3 to 5 hours",
        description: "If everything goes right.",
      },
      {
        label: "Junk removal, same load (minimum or quarter truck)",
        price: "Quoted per job, none of your time",
        description: "We handle everything. Zero hours on your end.",
      },
    ],
    notes: [
      "Pittsburgh-area transfer stations that accept mixed household waste: McKees Rocks (Tri-State), Imperial, Boyd, Michael Bros.",
      "Most transfer stations do NOT accept appliances with Freon, tires, paint, batteries, TVs, or hazardous materials.",
      "If your job needs 2+ vehicle trips, junk removal usually costs less per cubic yard.",
    ],
    exampleJob: {
      title: "Real DIY math, March 2026",
      body: "Squirrel Hill homeowner had a pickup and wanted to save money. Borrowed a friend's truck for $0. Loaded it with boxes, an old couch, a mattress, and a broken grill. 2 hours of loading. 40 minutes to McKees Rocks, $60 dump fee, 40 minutes back. Total: $60 cash plus 3.5 hours plus a friend's Saturday morning.",
    },
    heroImage: "/images/pricing/vs-diy.jpg",
    faqs: [
      {
        q: "Which Pittsburgh transfer stations accept mixed household waste?",
        a: "McKees Rocks (Tri-State Disposal), Imperial, Boyd Services, and Michael Bros are the main options for mixed residential waste in the Pittsburgh metro. Fees typically run $50 to $75 per standard pickup load.",
      },
      {
        q: "Can I take appliances, tires, or electronics to a Pittsburgh transfer station?",
        a: "Usually not. Most transfer stations reject appliances with refrigerant, tires (PA regulates separately), electronics with CRTs, paint, and hazardous waste. You'd need to route those to the Allegheny County household hazardous waste program or a specialty recycler.",
      },
      {
        q: "Is DIY actually cheaper than junk removal in Pittsburgh?",
        a: "Only if you already own a pickup, have free labor, and your items are all acceptable at a transfer station. For a small load of boxes and one couch, DIY usually saves a modest amount of cash. For anything bigger or weirder, junk removal is usually cheaper once you count the time.",
      },
    ],
    relatedSlugs: ["vs-dumpster-rental", "by-load-size", "minimum-charge"],
  },
  {
    slug: "pittsburgh-vs-national",
    name: "Pittsburgh vs National Pricing",
    category: "comparison",
    seoTitle: "Pittsburgh Junk Removal Cost vs the National Average | What to Expect",
    seoDescription:
      "How Pittsburgh junk removal pricing compares to national averages, what the published national figures actually mean, and why local quotes vary.",
    heroHeadline: "Pittsburgh Junk Removal Pricing vs National Average",
    heroSub: "What the national numbers say, and why your local quote will differ.",
    eyebrow: "Pricing · Comparison",
    citableSnippet:
      "National junk removal averages published by home services marketplaces put a typical single job around $241, with quarter truck loads commonly $200 to $396 and full truck loads $600 to $1,099 nationally. Those are national aggregates across very different markets. Pittsburgh generally sits at or below national averages, but the only number that applies to your job is a local quote against your actual load and access.",
    intro:
      "National chains like 1-800-GOT-JUNK, College Hunks, and LoadUp publish pricing ranges based on national averages. Those averages come from markets like Los Angeles, Boston, and Atlanta where disposal fees and labor are higher than Pittsburgh. Here's how local Pittsburgh pricing compares.",
    pricingAnchor: "National averages are a reference point, not a quote. Pittsburgh generally runs at or below them.",
    tableHeading: "National Reference Points",
    tableColumnLabel: "Published National Figures",
    rows: [
      {
        label: "Minimum / single item",
        price: "National $107 to $125",
        description: "Steel City is at or below national minimums.",
      },
      {
        label: "Quarter truck",
        price: "National $200 to $396",
        description: "Lower ceiling than national averages.",
      },
      {
        label: "Half truck",
        price: "National $300 to $600",
        description: "Meaningfully under the national mid-range.",
      },
      {
        label: "Full truck",
        price: "National $600 to $1,099",
        description: "Lower on both ends of the range.",
      },
      {
        label: "National average (Angi data)",
        price: "$241 per job",
        description: "Angi's 2026 data for a typical US junk removal job.",
      },
    ],
    notes: [
      "National averages are pulled from Angi (2026 data), LoadUp, College Hunks, and 1-800-GOT-JUNK published pricing pages.",
      "Pittsburgh disposal fees are lower than coastal markets like LA or Boston, which is why our pricing comes in below the national mid-range.",
      "The national average of $241 per job (Angi) is a useful reference point, but it averages across markets that look nothing like Pittsburgh.",
    ],
    heroImage: "/images/pricing/pittsburgh-vs-national.jpg",
    faqs: [
      {
        q: "Why is Pittsburgh junk removal cheaper than the national average?",
        a: "Three reasons: Allegheny County and surrounding landfills charge lower per-ton disposal fees than coastal markets, the drive from Pittsburgh neighborhoods to the transfer station is short (lower fuel cost), and local labor costs are meaningfully lower than in Boston, LA, or NYC. Net effect is about 15% to 25% below national averages for the same job.",
      },
      {
        q: "Where do these national averages come from?",
        a: "Angi's 2026 Junk Removal Cost report, LoadUp's published pricing tables, College Hunks' pricing page, and 1-800-GOT-JUNK's public pricing guide. We compare against the published numbers from their own websites, not estimates.",
      },
      {
        q: "Is local always cheaper than national franchises in Pittsburgh?",
        a: "Usually, but not always. For same-day service with large crews, national franchises sometimes match local pricing because they have more trucks on the road. For scheduled jobs, local almost always wins on price, and you get better local knowledge for things like Pittsburgh stair walks, narrow street parking, and neighborhood donation routing.",
      },
    ],
    relatedSlugs: ["by-load-size", "vs-dumpster-rental", "estate-cleanout"],
  },
  {
    slug: "by-item",
    name: "Pricing by Item",
    category: "core",
    seoTitle: "Junk Removal by Item in Pittsburgh | What We Take and How It Is Quoted",
    seoDescription:
      "Item-by-item junk removal in Pittsburgh. What counts as a standard single item, which pieces are quoted separately, and what we cannot haul at all.",
    heroHeadline: "Junk Removal Pricing by Item",
    heroSub: "Specific items, and how each one gets quoted.",
    eyebrow: "Pricing · By Item",
    citableSnippet:
      "Most single household items are quoted as a standard single-item pickup in Pittsburgh, including couches, mattresses, recliners, and individual appliances. Pianos, hot tubs, pool tables, and heavy safes are quoted separately because of weight, disassembly, and equipment. Paint, oil, gasoline, chemicals, asbestos, and medical waste cannot be hauled at all.",
    intro:
      "Most household items are quoted as a standard single-item pickup. The exceptions are heavy specialty pieces like pianos, hot tubs, and pool tables, which are quoted on their own because they need extra crew, tools, or disposal routing. Here's the full list.",
    pricingAnchor: "Most single items are one standard pickup. Oversized pieces are quoted separately on the call.",
    tableHeading: "How Each Item Is Quoted",
    tableColumnLabel: "How It Is Quoted",
    rows: [
      { label: "Mattress (any size)", price: "Standard single-item pickup" },
      { label: "Couch or sectional", price: "Standard single-item pickup" },
      { label: "Refrigerator (no Freon issues)", price: "Standard single-item pickup" },
      { label: "Washer or dryer", price: "Standard single-item pickup" },
      { label: "TV up to 65 inches", price: "Standard single-item pickup" },
      { label: "Treadmill or exercise bike", price: "Standard single-item pickup" },
      { label: "Recliner or armchair", price: "Standard single-item pickup" },
      { label: "Dining table or desk", price: "Standard single-item pickup" },
      { label: "Upright piano", price: "Quoted separately, piano board and 3-person lift" },
      { label: "Grand or baby grand piano", price: "Quoted separately, legs and lyre come off first" },
      { label: "Hot tub (small, 2-3 person)", price: "Quoted separately, drain then carry or cut down" },
      { label: "Hot tub (standard, 4-5 person)", price: "Quoted separately, access decides the method" },
      { label: "Hot tub (large, 6-8 person)", price: "Quoted separately, usually cut down on site" },
      { label: "Swim spa (8+ person)", price: "Quoted on site, cut down and removed in sections" },
      { label: "Pool table (slate)", price: "Quoted separately, slate comes out in sections" },
      { label: "Safe (under 200 lbs)", price: "Standard single-item pickup" },
      { label: "Safe (200+ lbs)", price: "Quoted separately, rated equipment and floor protection" },
      { label: "Tires (each)", price: "PA disposal fee of $5 to $15 each, passed through" },
    ],
    notes: [
      "Item pricing assumes curbside or garage-level access. Basement or upper-floor pickups add a stairs surcharge where applicable.",
      "Old refrigerators, ACs, and dehumidifiers with refrigerant need EPA-compliant routing, which is included in the quote rather than billed separately.",
      "CRT TVs over 32 inches have a small disposal surcharge ($10 to $25) due to PA e-waste rules.",
      "Pianos include strap, dolly, and careful handling. We don't tune, don't move, just remove.",
    ],
    heroImage: "/images/pricing/by-item.jpg",
    faqs: [
      {
        q: "Can you remove a hot tub as a single item?",
        a: "No. Hot tub removal has its own pricing because it requires draining, cutting the shell, and routing the pieces to multiple disposal points. Hot tubs are quoted on their own after we see the access. See the hot tub pricing page (coming soon) for the full breakdown.",
      },
      {
        q: "Do you charge extra for appliances with Freon?",
        a: "No. Your single-item quote includes EPA-compliant Freon handling. We work with local appliance recyclers who handle the refrigerant recovery. Some haulers bill a separate Freon fee on top of the job; we don't.",
      },
      {
        q: "What about CRT TVs or old monitors?",
        a: "We take them. Pennsylvania's electronics recycling law adds a small disposal surcharge ($10 to $25) for CRTs over 32 inches because they require special routing. Flat-panel TVs up to 65 inches are a standard single-item pickup with no added surcharge.",
      },
      {
        q: "Is it cheaper to bundle 3 items than book them separately?",
        a: "Usually yes. If all 3 items fit in one trip and are easy to carry, we quote it as one quarter-truck job rather than three separate pickups, which comes out ahead for you. Tell us all three items on the first call so we can price it that way instead of charging per item. Call us and we'll tell you which option makes more sense for your specific items.",
      },
    ],
    relatedSlugs: ["minimum-charge", "by-load-size", "surcharges"],
  },
];

export function getPricingPageBySlug(slug: string): PricingPage | undefined {
  return pricingPages.find((p) => p.slug === slug);
}

export function pricingCategories(): Array<{
  key: PricingPage["category"];
  label: string;
  pages: PricingPage[];
}> {
  const byKey = new Map<PricingPage["category"], PricingPage[]>();
  for (const p of pricingPages) {
    const arr = byKey.get(p.category) ?? [];
    arr.push(p);
    byKey.set(p.category, arr);
  }
  const labels: Record<PricingPage["category"], string> = {
    "by-load-size": "By Load Size",
    "by-service": "By Service",
    comparison: "Comparisons",
    surcharges: "Surcharges",
    core: "Core Pricing",
  };
  const order: PricingPage["category"][] = ["core", "by-load-size", "by-service", "comparison", "surcharges"];
  return order
    .filter((k) => byKey.has(k))
    .map((k) => ({ key: k, label: labels[k], pages: byKey.get(k) ?? [] }));
}
