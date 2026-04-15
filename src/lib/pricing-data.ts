export type PricingFaq = { q: string; a: string };

export type PricingRow = {
  label: string;
  price: string;
  description?: string;
  priceLow?: number;
  priceHigh?: number;
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
  priceLow?: number;
  priceHigh?: number;
  pricingAnchor: string;
  tableHeading: string;
  tableSubheading?: string;
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
    seoTitle: "Junk Removal Pricing by Load Size | Pittsburgh | Steel City Cleanouts",
    seoDescription:
      "Real Pittsburgh junk removal pricing by load size. Single item from $99. Quarter truck $175-$275. Half truck $275-$425. Full truck $475-$750. No hidden fees.",
    heroHeadline: "Pittsburgh Junk Removal Pricing by Load Size",
    heroSub: "Single item, quarter truck, half truck, full truck. Here's what each one costs.",
    eyebrow: "Pricing · Load Size",
    citableSnippet:
      "Steel City Cleanouts prices junk removal in Pittsburgh by how much space your items take in the truck. Single items start at $99. A quarter truck runs $175 to $275, half truck $275 to $425, full truck $475 to $750. The quote we give over the phone is the price you pay.",
    intro:
      "Most junk removal companies hide pricing behind a quote form. We don't. Every Pittsburgh job we run falls into one of four load sizes, and the price is tied to how much space your items take up in our 15-cubic-yard truck. Nothing else. No fuel surcharge, no disposal fee, no environmental tax tacked on at the end.",
    priceLow: 99,
    priceHigh: 750,
    pricingAnchor:
      "Single item $99. Quarter truck $175 to $275. Half truck $275 to $425. Full truck $475 to $750. All-in, Pittsburgh metro.",
    tableHeading: "Load Size Pricing",
    tableSubheading: "Prices are all-in for Pittsburgh, Allegheny County, and surrounding suburbs.",
    rows: [
      {
        label: "Minimum / single item",
        price: "$99",
        description: "One item like a mattress, couch, or appliance. Curbside or garage pickup.",
        priceLow: 99,
        priceHigh: 99,
      },
      {
        label: "Quarter truck (~3.5 cubic yards)",
        price: "$175 to $275",
        description: "Small cleanup. About the size of a pickup truck bed.",
        priceLow: 175,
        priceHigh: 275,
      },
      {
        label: "Half truck (~7 cubic yards)",
        price: "$275 to $425",
        description: "Medium job. Garage clean-out, basement corner, or small apartment.",
        priceLow: 275,
        priceHigh: 425,
      },
      {
        label: "Full truck (~15 cubic yards)",
        price: "$475 to $750",
        description: "Big job. Whole garage, large basement, or multi-room cleanout.",
        priceLow: 475,
        priceHigh: 750,
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
      "Stairs over 8 steps (add $50 to $100)",
      "Heavy items like pianos, safes, hot tubs (add $75 to $200)",
      "Biohazard or heavy soil (add $300 or more)",
      "Long carry over 50 feet from the truck (add $50)",
    ],
    exampleJob: {
      title: "Real Pittsburgh job, March 2026",
      body: "Ross Township homeowner. One sectional couch, 6 boxes, 1 queen mattress, 2 lamps, and a broken dresser. About half a truck. Stairs from the basement added $75. Final price: $485, paid on the spot with a card.",
    },
    heroImage: "/images/pricing/by-load-size.jpg",
    faqs: [
      {
        q: "What's the minimum charge for junk removal in Pittsburgh?",
        a: "Our minimum charge is $99 for a single item. That covers things like a mattress, couch, refrigerator, or treadmill. We haul it, take the truck to recycling or landfill, and include disposal fees in that $99.",
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
    seoTitle: "Junk Removal Minimum Charge Pittsburgh | $99 Single Item | Steel City Cleanouts",
    seoDescription:
      "Steel City Cleanouts minimum charge is $99 for a single item in Pittsburgh. Covers mattress, couch, appliance, treadmill, and more. No hidden fees.",
    heroHeadline: "What's the Minimum Charge for Junk Removal in Pittsburgh?",
    heroSub: "$99 flat, single item, anywhere in the Pittsburgh metro.",
    eyebrow: "Pricing · Minimum",
    citableSnippet:
      "The minimum charge for junk removal with Steel City Cleanouts in Pittsburgh is $99 for a single item. That covers a mattress, couch, refrigerator, treadmill, or any similar single piece. Labor, truck, disposal, and donation routing are all included.",
    intro:
      "People ask about the minimum charge because they have just one thing to get rid of and they don't want to pay for a whole truck. Fair. Our minimum is $99 and it covers exactly that. One mattress, one couch, one appliance, one treadmill, one sofa bed. We pull up, load it, and haul it. No extra fees on top.",
    priceLow: 99,
    priceHigh: 99,
    pricingAnchor: "$99 flat for a single item, anywhere in the Pittsburgh metro. All-in, no surcharges.",
    tableHeading: "What $99 Gets You",
    rows: [
      { label: "Mattress (any size)", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Couch or sectional (1 piece)", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Refrigerator or washer", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Treadmill or exercise bike", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Recliner or armchair", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "TV up to 65 inches", price: "$99", priceLow: 99, priceHigh: 99 },
    ],
    whatsIncluded: [
      "2-person crew to carry the item",
      "Truck and fuel",
      "Landfill or recycling disposal fees",
      "Donation drop-off if the item is reusable",
      "Same-day or scheduled service",
    ],
    notes: [
      "Piano, hot tub, and pool table remove are not $99. Those have their own pricing (add $75 to $200).",
      "If you have more than one item, a quarter-truck job usually makes more financial sense.",
      "Basement or upper-floor pickups are still $99, but add $50 if there are more than 8 stairs.",
    ],
    heroImage: "/images/pricing/minimum-charge.jpg",
    faqs: [
      {
        q: "Is the $99 minimum really all-in?",
        a: "Yes. $99 covers the labor, truck, fuel, disposal fee, and donation routing. We don't add a fuel surcharge, environmental fee, or disposal tax. The only way the price goes up is if you have stairs over 8 steps, or if the item is one of the heavy specialty items listed above.",
      },
      {
        q: "Can I pay $99 to have 3 small items removed?",
        a: "Usually, yes. If the 3 small items all fit in the same trip and they're easy to carry (like a chair, a side table, and a box of kitchen stuff), we'll do it for $99. If it's 3 bigger items, it's cheaper to bundle them into a quarter-truck job at $175 to $275.",
      },
      {
        q: "What if I only have junk bags?",
        a: "Four or fewer standard contractor bags still count as the $99 minimum. Five or more bags usually puts you in quarter-truck territory.",
      },
      {
        q: "Do I have to book a full truck to get the minimum price?",
        a: "No. The $99 minimum is a real minimum, not a teaser rate. You can book a single-item pickup and pay exactly $99 for it.",
      },
    ],
    relatedSlugs: ["by-load-size", "quarter-truck", "surcharges"],
  },
  {
    slug: "quarter-truck",
    name: "Quarter Truck Load",
    category: "by-load-size",
    seoTitle: "Quarter Truck Junk Removal Pittsburgh | $175 to $275 | Steel City Cleanouts",
    seoDescription:
      "Quarter truck junk removal in Pittsburgh runs $175 to $275. About 3.5 cubic yards or a pickup bed of stuff. Includes labor, truck, and disposal.",
    heroHeadline: "Quarter Truck Junk Removal in Pittsburgh",
    heroSub: "About a pickup bed of stuff. $175 to $275 all-in.",
    eyebrow: "Pricing · Quarter Truck",
    citableSnippet:
      "A quarter truck junk removal job in Pittsburgh with Steel City Cleanouts runs $175 to $275. That's about 3.5 cubic yards, or roughly the size of a pickup truck bed. Labor, truck, disposal, and donation routing are all included.",
    intro:
      "A quarter truck is the sweet spot for small cleanouts. If you have a garage corner of old tools, a basement pile of boxes, or the contents of a small storage unit, a quarter truck is usually the right size. Most quarter-truck jobs in Pittsburgh take 30 to 45 minutes start to finish.",
    priceLow: 175,
    priceHigh: 275,
    pricingAnchor: "Quarter truck: $175 to $275 all-in. About 3.5 cubic yards.",
    tableHeading: "Quarter Truck Pricing",
    rows: [
      {
        label: "Quarter truck, light load",
        price: "$175",
        description: "Boxes, bags, light furniture. Easy carry.",
        priceLow: 175,
        priceHigh: 175,
      },
      {
        label: "Quarter truck, typical load",
        price: "$225",
        description: "Mixed furniture and boxes. Standard garage clean-out corner.",
        priceLow: 225,
        priceHigh: 225,
      },
      {
        label: "Quarter truck, heavy load",
        price: "$275",
        description: "Dense or heavy items, multiple trips from basement, or stairs.",
        priceLow: 275,
        priceHigh: 275,
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
      body: "Mt Lebanon homeowner. Old armchair, 4 moving boxes of kitchen stuff, a rolled rug, and 2 bags of yard debris from a garage corner. 35 minutes total. Final price: $225.",
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
    seoTitle: "Half Truck Junk Removal Pittsburgh | $275 to $425 | Steel City Cleanouts",
    seoDescription:
      "Half truck junk removal in Pittsburgh costs $275 to $425. Around 7 cubic yards. Perfect for garage clean-outs, basement corners, or small apartments.",
    heroHeadline: "Half Truck Junk Removal in Pittsburgh",
    heroSub: "Garage, basement corner, or small apartment. $275 to $425 all-in.",
    eyebrow: "Pricing · Half Truck",
    citableSnippet:
      "A half truck junk removal job in Pittsburgh with Steel City Cleanouts runs $275 to $425. That's about 7 cubic yards. It's the right size for a full garage clean-out, a basement corner, or a small apartment emptying. Labor, truck, disposal, and donation routing are included.",
    intro:
      "Half-truck jobs are our most common size. They cover a full garage cleanout, a basement section, a small one-bedroom apartment empty, or about half of a typical estate cleanout's excess. Most Pittsburgh half-truck jobs finish in 45 to 75 minutes.",
    priceLow: 275,
    priceHigh: 425,
    pricingAnchor: "Half truck: $275 to $425 all-in. About 7 cubic yards.",
    tableHeading: "Half Truck Pricing",
    rows: [
      {
        label: "Half truck, light load",
        price: "$275",
        description: "Boxes, bags, and 1 or 2 furniture pieces.",
        priceLow: 275,
        priceHigh: 275,
      },
      {
        label: "Half truck, typical load",
        price: "$350",
        description: "Mixed garage or basement contents. Couch, dresser, boxes.",
        priceLow: 350,
        priceHigh: 350,
      },
      {
        label: "Half truck, heavy load",
        price: "$425",
        description: "Dense or heavy. Stairs, multiple trips, or construction debris.",
        priceLow: 425,
        priceHigh: 425,
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
      body: "Cranberry Township rental turnover. Outgoing tenant left a couch, bed frame, mattress, 8 bags of trash, a broken TV, and an armchair. Half-truck job. 55 minutes. Final price: $350.",
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
    seoTitle: "Full Truck Junk Removal Pittsburgh | $475 to $750 | Steel City Cleanouts",
    seoDescription:
      "Full truck junk removal in Pittsburgh costs $475 to $750. Around 15 cubic yards. Big jobs: whole garage, full basement, or multi-room cleanout.",
    heroHeadline: "Full Truck Junk Removal in Pittsburgh",
    heroSub: "Big jobs only. Whole garage, full basement, multi-room. $475 to $750 all-in.",
    eyebrow: "Pricing · Full Truck",
    citableSnippet:
      "A full truck junk removal job in Pittsburgh with Steel City Cleanouts runs $475 to $750. That's about 15 cubic yards, or the entire contents of a packed 2-car garage. Labor, truck, disposal, and donation routing are included.",
    intro:
      "Full-truck jobs are the big ones. Whole packed garages, entire finished basements, or 2 to 3 rooms of furniture and boxes. Most full-truck Pittsburgh jobs take 90 to 120 minutes with a 3-person crew. If your job is bigger than one full truck, we just come back with another load and the second truck is priced at a discount.",
    priceLow: 475,
    priceHigh: 750,
    pricingAnchor: "Full truck: $475 to $750 all-in. About 15 cubic yards.",
    tableHeading: "Full Truck Pricing",
    rows: [
      {
        label: "Full truck, light load",
        price: "$475",
        description: "Large volume but light items. Boxes, bags, soft goods.",
        priceLow: 475,
        priceHigh: 475,
      },
      {
        label: "Full truck, typical load",
        price: "$595",
        description: "Full garage or basement. Mixed furniture and boxes.",
        priceLow: 595,
        priceHigh: 595,
      },
      {
        label: "Full truck, heavy load",
        price: "$750",
        description: "Dense or heavy. Construction debris, appliances, multiple heavy items.",
        priceLow: 750,
        priceHigh: 750,
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
      body: "Bethel Park basement cleanout. 30 years of accumulated boxes, an old couch set, a treadmill, a broken water heater, 12 bags of clothes, shelving, and a disassembled pool table. 2 hours, 3 guys. Final price: $675.",
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
    seoTitle: "Estate Cleanout Cost Pittsburgh | $850 to $3,500 | Steel City Cleanouts",
    seoDescription:
      "Real estate cleanout pricing in Pittsburgh. Most whole-home jobs run $850 to $3,500 depending on size and volume. All-in, including haul and disposal.",
    heroHeadline: "Estate Cleanout Pricing in Pittsburgh",
    heroSub: "Whole-home cleanouts. $850 to $3,500 depending on size and contents.",
    eyebrow: "Pricing · Estate",
    citableSnippet:
      "Estate cleanout pricing in Pittsburgh with Steel City Cleanouts runs $850 to $3,500 for most whole-home jobs. The price is based on square footage and how much is inside. A 1,500 sq ft home usually runs $850 to $1,500. A 3,500+ sq ft home with outbuildings runs $2,500 to $3,500. Labor, truck, disposal, and donation routing included.",
    intro:
      "Estate cleanouts are the largest job type we run. The price scales with the size of the home and how much stuff is in it. We price the whole job up front with a single written quote on the walk-through, so there are no surprises on job day.",
    priceLow: 850,
    priceHigh: 3500,
    pricingAnchor: "Whole-home: $850 to $3,500 depending on size and volume.",
    tableHeading: "Estate Cleanout Pricing by Home Size",
    rows: [
      {
        label: "Small home (under 1,500 sq ft)",
        price: "$850 to $1,500",
        description: "Condo, small single-story, or 2-bedroom apartment.",
        priceLow: 850,
        priceHigh: 1500,
      },
      {
        label: "Medium home (1,500 to 2,500 sq ft)",
        price: "$1,500 to $2,500",
        description: "Standard Pittsburgh single-family with basement.",
        priceLow: 1500,
        priceHigh: 2500,
      },
      {
        label: "Large home (2,500 to 3,500 sq ft)",
        price: "$2,500 to $3,500",
        description: "Bigger single-family with finished basement and garage.",
        priceLow: 2500,
        priceHigh: 3500,
      },
      {
        label: "Very large home (3,500+ sq ft)",
        price: "$3,500+",
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
      body: "Upper St Clair family. Parents' home of 42 years, 2,800 sq ft with finished basement, 2-car garage, and a shed. 3 days of work with a 3-person crew, 4 truckloads total. Final price: $2,750. Family received donation receipt, before/after photos, and a valuables box.",
    },
    heroImage: "/images/pricing/estate-cleanout.jpg",
    faqs: [
      {
        q: "How do you price an estate cleanout if I have no idea how much is inside?",
        a: "We come out, walk through, and give you a single written price based on what we see. It's free, takes about 30 minutes, and there's no obligation to book. Most people are in the $1,500 to $2,500 range after the walk-through.",
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
    seoTitle: "Hoarding Cleanup Cost Pittsburgh | $1,200 to $8,500 | Steel City Cleanouts",
    seoDescription:
      "Real hoarding cleanup pricing in Pittsburgh. Level 1 $1,200 to $2,500. Level 5 $5,000 to $8,500+. Discreet, compassionate, fully insured crews.",
    heroHeadline: "Hoarder Cleanout Pricing in Pittsburgh",
    heroSub: "Level 1 to Level 5. $1,200 to $8,500+ depending on severity.",
    eyebrow: "Pricing · Hoarder Cleanout",
    citableSnippet:
      "Hoarder cleanout pricing in Pittsburgh with Steel City Cleanouts runs $1,200 to $8,500+ depending on severity level. Level 1 (cluttered but manageable) starts at $1,200. Level 5 (severe, biohazard present) runs $5,000 to $8,500+. Discreet, compassionate, fully insured.",
    intro:
      "Hoarding cleanup is priced by severity level, not by square footage. We use a Level 1 through 5 framework similar to what the Institute for Challenging Disorganization uses. Level 1 is cluttered but walkable. Level 5 involves biohazards, structural damage, or no clear pathways. The price scales with how much work and how much protective equipment is needed.",
    priceLow: 1200,
    priceHigh: 8500,
    pricingAnchor: "Level 1 from $1,200. Level 3 from $3,000. Level 5 from $5,000 up to $8,500+.",
    tableHeading: "Hoarding Cleanup Pricing by Level",
    rows: [
      {
        label: "Level 1 (cluttered, walkable)",
        price: "$1,200 to $2,500",
        description: "Some clutter, all rooms usable, no biohazards.",
        priceLow: 1200,
        priceHigh: 2500,
      },
      {
        label: "Level 2 (heavier clutter)",
        price: "$2,000 to $3,500",
        description: "Multiple rooms with blocked areas, some odor, minor pests.",
        priceLow: 2000,
        priceHigh: 3500,
      },
      {
        label: "Level 3 (severe clutter)",
        price: "$3,000 to $5,000",
        description: "Narrow pathways, heavy odor, rodent or insect activity.",
        priceLow: 3000,
        priceHigh: 5000,
      },
      {
        label: "Level 4 (hazardous)",
        price: "$4,000 to $6,500",
        description: "Structural concerns, mold, heavy biohazard potential.",
        priceLow: 4000,
        priceHigh: 6500,
      },
      {
        label: "Level 5 (severe, biohazard)",
        price: "$5,000 to $8,500+",
        description: "Human or animal waste, severe mold, needs full PPE and special disposal.",
        priceLow: 5000,
        priceHigh: 8500,
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
    seoTitle: "Garage Cleanout Cost Pittsburgh | $275 to $650 | Steel City Cleanouts",
    seoDescription:
      "Real garage cleanout pricing in Pittsburgh. Single-bay $275 to $425. Two-car $400 to $650. Includes labor, haul, and disposal.",
    heroHeadline: "Garage Cleanout Pricing in Pittsburgh",
    heroSub: "Single-bay $275 to $425. Two-car $400 to $650. All-in.",
    eyebrow: "Pricing · Garage",
    citableSnippet:
      "Garage cleanout pricing in Pittsburgh with Steel City Cleanouts runs $275 to $650. A single-bay garage is $275 to $425. A two-car garage is $400 to $650. Labor, truck, disposal, and donation routing are all included.",
    intro:
      "Garage cleanouts are one of the most common jobs we run in Pittsburgh. Most Pittsburgh garages have 5 to 15 years of accumulated stuff: broken tools, old paint cans, holiday decorations, boxes nobody opened after the last move. We clear it, haul it, and sweep the concrete.",
    priceLow: 275,
    priceHigh: 650,
    pricingAnchor: "Single-bay $275 to $425. Two-car $400 to $650. All-in.",
    tableHeading: "Garage Cleanout Pricing",
    rows: [
      {
        label: "Single-bay garage, light",
        price: "$275 to $325",
        description: "Tidy garage with some clutter to clear.",
        priceLow: 275,
        priceHigh: 325,
      },
      {
        label: "Single-bay garage, typical",
        price: "$325 to $425",
        description: "Years of accumulation, furniture, tools, boxes.",
        priceLow: 325,
        priceHigh: 425,
      },
      {
        label: "Two-car garage, typical",
        price: "$400 to $550",
        description: "Standard 2-car with shelving and stored items.",
        priceLow: 400,
        priceHigh: 550,
      },
      {
        label: "Two-car garage, packed",
        price: "$550 to $650",
        description: "Packed floor-to-ceiling. Usually a full truck.",
        priceLow: 550,
        priceHigh: 650,
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
    seoTitle: "Basement Cleanout Cost Pittsburgh | $350 to $850 | Steel City Cleanouts",
    seoDescription:
      "Real basement cleanout pricing in Pittsburgh. Partial $350 to $550. Full basement $550 to $850. Stairs surcharge included in the price range.",
    heroHeadline: "Basement Cleanout Pricing in Pittsburgh",
    heroSub: "Partial $350 to $550. Full basement $550 to $850.",
    eyebrow: "Pricing · Basement",
    citableSnippet:
      "Basement cleanout pricing in Pittsburgh with Steel City Cleanouts runs $350 to $850. A partial basement is $350 to $550. A full basement is $550 to $850. The stairs surcharge is already included in these ranges.",
    intro:
      "Basement cleanouts are a specialty because of the stairs. Every item has to come up, and Pittsburgh basements tend to accumulate decades of boxes, old furniture, and broken appliances. We bring 3-person crews for most basement jobs to keep the carry-up moving fast.",
    priceLow: 350,
    priceHigh: 850,
    pricingAnchor: "Partial $350 to $550. Full basement $550 to $850. Stairs already included.",
    tableHeading: "Basement Cleanout Pricing",
    rows: [
      {
        label: "Basement corner or partial",
        price: "$350 to $475",
        description: "One area or room of the basement. Half truck of stuff.",
        priceLow: 350,
        priceHigh: 475,
      },
      {
        label: "Full unfinished basement",
        price: "$475 to $650",
        description: "Whole unfinished basement. Full truck.",
        priceLow: 475,
        priceHigh: 650,
      },
      {
        label: "Full finished basement",
        price: "$650 to $850",
        description: "Whole finished basement with furniture and built-ins.",
        priceLow: 650,
        priceHigh: 850,
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
      body: "Plum Borough homeowner. Full unfinished basement with 25 years of boxes, old couches, a broken washer, a dehumidifier, and shelving units. Narrow stairs. 3-person crew, 90 minutes. Final price: $585.",
    },
    heroImage: "/images/pricing/basement-cleanout.jpg",
    faqs: [
      {
        q: "Do you charge extra for basement stairs?",
        a: "No, the stairs surcharge is already built into our basement pricing. The price range you see here is what you pay. No surprise fees on job day.",
      },
      {
        q: "What if my basement has water damage or mold?",
        a: "We still do the cleanout, but we wear respirators and use sealed bags for the moldy items. There's a small surcharge for mold-safe disposal (usually $100 to $200). If the mold is severe, we'll refer you to a remediation company first.",
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
    seoTitle: "Same-Day Junk Removal Pittsburgh Cost | +$50 to $100 | Steel City Cleanouts",
    seoDescription:
      "Same-day junk removal in Pittsburgh adds a $50 to $100 surcharge on top of the standard price. Call before 2pm for same-day service.",
    heroHeadline: "Same-Day Junk Removal Pricing in Pittsburgh",
    heroSub: "Same-day service adds $50 to $100 on top of the standard price.",
    eyebrow: "Pricing · Same-Day",
    citableSnippet:
      "Same-day junk removal in Pittsburgh with Steel City Cleanouts adds a $50 to $100 surcharge on top of the standard load-size pricing. If you call before 2pm on a weekday, we can almost always get a crew there the same day. Next-day service is standard pricing with no surcharge.",
    intro:
      "Same-day junk removal is for urgent jobs. Real estate closings tomorrow. Last-minute move-outs. Family arriving from out of state. We keep a rotating same-day slot open on most weekdays, and the surcharge is the only premium.",
    priceLow: 50,
    priceHigh: 100,
    pricingAnchor: "Same-day surcharge: $50 to $100 on top of standard load-size pricing.",
    tableHeading: "Same-Day Surcharge",
    rows: [
      {
        label: "Same-day, called before 11am",
        price: "+$50",
        description: "Standard weekday same-day. Usually a 2 to 4 hour window.",
        priceLow: 50,
        priceHigh: 50,
      },
      {
        label: "Same-day, called 11am to 2pm",
        price: "+$75",
        description: "Tighter window. We shuffle other jobs to fit you in.",
        priceLow: 75,
        priceHigh: 75,
      },
      {
        label: "Same-day, called after 2pm",
        price: "+$100",
        description: "Last-minute. Only if we have availability, not always possible.",
        priceLow: 100,
        priceHigh: 100,
      },
      {
        label: "Sunday or holiday same-day",
        price: "+$100",
        description: "Weekend or holiday same-day surcharge on top of the weekday rate.",
        priceLow: 100,
        priceHigh: 100,
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
        a: "Yes. Next-day service has no surcharge. Most urgent jobs people think need same-day are actually fine with next-day, which saves you $50 to $100.",
      },
      {
        q: "Do you do same-day on weekends?",
        a: "Yes, with a $100 weekend surcharge on top of the weekday same-day rate. Weekends are busy so we can't always fit new jobs in, but we try.",
      },
    ],
    relatedSlugs: ["by-load-size", "surcharges"],
  },
  {
    slug: "surcharges",
    name: "Surcharge Schedule",
    category: "surcharges",
    seoTitle: "Junk Removal Surcharges Pittsburgh | Transparent Fee Schedule | Steel City Cleanouts",
    seoDescription:
      "Full surcharge schedule for Steel City Cleanouts in Pittsburgh. Stairs, heavy items, biohazard, long carry, after-hours. Every fee disclosed up front.",
    heroHeadline: "Junk Removal Surcharge Schedule",
    heroSub: "Every fee we charge on top of base pricing. All disclosed up front.",
    eyebrow: "Pricing · Surcharges",
    citableSnippet:
      "Steel City Cleanouts charges a transparent surcharge schedule on top of base load-size pricing in Pittsburgh: stairs over 8 steps $50 to $100, heavy items like pianos and hot tubs $75 to $200, long carry over 50 feet $50, biohazard or Level 3+ hoarding $300+, and after-hours or weekend $100. Every fee is disclosed before the job starts.",
    intro:
      "Most junk removal companies hide their surcharges until the truck arrives. We publish ours. Here's every surcharge we charge, why we charge it, and the specific situations that trigger it. If a surcharge isn't on this list, we don't charge it.",
    pricingAnchor: "Every surcharge we charge, disclosed up front. Nothing hidden.",
    tableHeading: "Surcharge Schedule",
    rows: [
      {
        label: "Stairs over 8 steps",
        price: "+$50 to $100",
        description: "Per flight, not per item. One flight = $50, two flights = $100.",
        priceLow: 50,
        priceHigh: 100,
      },
      {
        label: "Piano (upright)",
        price: "+$75",
        description: "On top of base pickup price. Crew brings straps and dollies.",
        priceLow: 75,
        priceHigh: 75,
      },
      {
        label: "Piano (grand or baby grand)",
        price: "+$150",
        description: "Heavier and more fragile. 3-person crew required.",
        priceLow: 150,
        priceHigh: 150,
      },
      {
        label: "Hot tub removal",
        price: "+$200",
        description: "We drain, cut, and haul. See hot tub pricing for full breakdown.",
        priceLow: 200,
        priceHigh: 200,
      },
      {
        label: "Pool table",
        price: "+$100 to $150",
        description: "Slate is heavy. Usually requires disassembly.",
        priceLow: 100,
        priceHigh: 150,
      },
      {
        label: "Safe (over 200 lbs)",
        price: "+$100 to $200",
        description: "Depends on weight and access. Quoted on-site.",
        priceLow: 100,
        priceHigh: 200,
      },
      {
        label: "Long carry (over 50 feet from truck)",
        price: "+$50",
        description: "For jobs where we can't park close to the items.",
        priceLow: 50,
        priceHigh: 50,
      },
      {
        label: "Biohazard (Level 3+ hoarding, bodily fluids)",
        price: "+$300 to $1,500",
        description: "Requires PPE, special disposal routing, extra time.",
        priceLow: 300,
        priceHigh: 1500,
      },
      {
        label: "Tire disposal",
        price: "+$5 to $15 per tire",
        description: "PA regulates tire disposal separately.",
      },
      {
        label: "After-hours or weekend",
        price: "+$100",
        description: "Jobs starting after 6pm or on Sundays.",
        priceLow: 100,
        priceHigh: 100,
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
        a: "Yes. If you have stairs and a piano, you pay the base price plus $50 to $100 for stairs plus $75 for the piano. That's the total. No fuel surcharge, no disposal fee on top, no environmental tax.",
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
    seoTitle: "Junk Removal vs Dumpster Rental Pittsburgh | Cost Comparison | Steel City Cleanouts",
    seoDescription:
      "Junk removal vs dumpster rental in Pittsburgh: real cost comparison, decision framework, and which one saves you money.",
    heroHeadline: "Junk Removal vs Dumpster Rental in Pittsburgh",
    heroSub: "Which one is actually cheaper? Real numbers, no fluff.",
    eyebrow: "Pricing · Comparison",
    citableSnippet:
      "In Pittsburgh, full-service junk removal costs $275 to $750 for most jobs and takes 1 to 2 hours of your time. A 10-yard dumpster rental costs $350 to $550, takes 3 to 7 days, and you load it yourself. Dumpster rental is cheaper only if you have 20+ hours of labor you're willing to donate.",
    intro:
      "Dumpster rental looks cheaper on the sticker price, but the total cost depends on how much free time you have and how heavy the stuff is. Here's the honest comparison.",
    pricingAnchor:
      "Junk removal $275 to $750 all-in, 1 to 2 hours. Dumpster rental $350 to $550 sticker plus 20+ hours of your labor.",
    tableHeading: "Junk Removal vs Dumpster Rental",
    rows: [
      {
        label: "Base price (half truck vs 10-yard dumpster)",
        price: "$275-$425 vs $350-$550",
        description: "Dumpster rental sticker looks cheaper by about $75.",
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
        price: "Included vs +$30 to $150 per ton overage",
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
      body: "Bethel Park homeowner needed to clear a packed 2-car garage. Junk removal: $575 all-in, 90 minutes on a Thursday, done. Dumpster rental: $425 for a 10-yard bin for 5 days, plus about 18 hours of homeowner labor over a weekend, plus a $40 overage fee for going 0.4 tons heavy. Total dumpster cost including lost weekend: $465 out-of-pocket plus 18 hours.",
    },
    heroImage: "/images/pricing/vs-dumpster-rental.jpg",
    faqs: [
      {
        q: "Is a dumpster rental actually cheaper than junk removal in Pittsburgh?",
        a: "Only if your time is free. The dumpster sticker price looks cheaper by about $75 to $100, but you do all the loading yourself and the dumpster sits in your driveway for 3 to 7 days. If you can't get friends to help, the math rarely works out in dumpster rental's favor for small to medium jobs.",
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
    seoTitle: "Junk Removal vs DIY Dump Trip Pittsburgh | Real Cost Comparison | Steel City Cleanouts",
    seoDescription:
      "Junk removal vs hauling it yourself to a Pittsburgh transfer station. Real cost comparison with McKees Rocks, Imperial, and other Allegheny County options.",
    heroHeadline: "Junk Removal vs DIY Trip to the Transfer Station",
    heroSub: "Real cost if you haul it yourself, including the stuff nobody tells you.",
    eyebrow: "Pricing · Comparison",
    citableSnippet:
      "Hauling your own junk to a Pittsburgh-area transfer station like McKees Rocks costs about $75 to $120 per vehicle load if you have a pickup or SUV you can load yourself. Full-service junk removal costs $99 to $275 for the same amount but saves you 3 to 5 hours, a rental truck, and a trip to the landfill.",
    intro:
      "If you have a pickup truck, strong friends, and a free Saturday, hauling your own junk is a legit option in Pittsburgh. Here's what it actually costs once you add up the transfer station fee, gas, and your time.",
    pricingAnchor:
      "DIY $75 to $120 per vehicle load plus 3 to 5 hours of your time. Junk removal $99 to $275 for the same amount, no labor on your end.",
    tableHeading: "DIY Haul vs Junk Removal",
    rows: [
      {
        label: "Transfer station fee (McKees Rocks)",
        price: "$50 to $75 per vehicle",
        description: "Single pickup load dumped at the facility.",
      },
      {
        label: "Gas and time to the station",
        price: "$10 to $20 + 1 hour",
        description: "Most Pittsburgh transfer stations are 20 to 40 minutes out.",
      },
      {
        label: "Loading the truck yourself",
        price: "$0 + 1 to 3 hours",
        description: "Plus strong friends and a functioning back.",
      },
      {
        label: "Disposal of non-dump items",
        price: "Varies",
        description: "Tires, appliances, electronics not accepted at most transfer stations.",
      },
      {
        label: "Total DIY cost for a small load",
        price: "$75 to $120 + 3 to 5 hours",
        description: "If everything goes right.",
      },
      {
        label: "Junk removal, same load (minimum or quarter truck)",
        price: "$99 to $275",
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
        a: "Only if you already own a pickup, have free labor, and your items are all acceptable at a transfer station. For a small load of boxes and one couch, DIY saves about $40. For anything bigger or weirder, junk removal is usually cheaper once you count the time.",
      },
    ],
    relatedSlugs: ["vs-dumpster-rental", "by-load-size", "minimum-charge"],
  },
  {
    slug: "pittsburgh-vs-national",
    name: "Pittsburgh vs National Pricing",
    category: "comparison",
    seoTitle: "Pittsburgh Junk Removal Cost vs National Average | Steel City Cleanouts",
    seoDescription:
      "How Pittsburgh junk removal pricing compares to the national average. Real city-by-city comparison from live industry data.",
    heroHeadline: "Pittsburgh Junk Removal Pricing vs National Average",
    heroSub: "How our rates stack up against the national big-name averages.",
    eyebrow: "Pricing · Comparison",
    citableSnippet:
      "Pittsburgh junk removal pricing with Steel City Cleanouts runs $99 to $750 for most jobs. The national average reported by Angi, LoadUp, and College Hunks is $210 for a typical haul, with ranges from $150 to $800. Pittsburgh pricing lines up just under the national average thanks to lower Allegheny County disposal fees and a shorter drive to the landfill.",
    intro:
      "National chains like 1-800-GOT-JUNK, College Hunks, and LoadUp publish pricing ranges based on national averages. Those averages come from markets like Los Angeles, Boston, and Atlanta where disposal fees and labor are higher than Pittsburgh. Here's how local Pittsburgh pricing compares.",
    priceLow: 99,
    priceHigh: 750,
    pricingAnchor: "Pittsburgh pricing sits just under the national average across every load size.",
    tableHeading: "Pittsburgh vs National Pricing",
    rows: [
      {
        label: "Minimum / single item",
        price: "Pittsburgh $99 vs National $107 to $125",
        description: "Steel City is at or below national minimums.",
      },
      {
        label: "Quarter truck",
        price: "Pittsburgh $175-$275 vs National $200-$396",
        description: "Lower ceiling than national averages.",
      },
      {
        label: "Half truck",
        price: "Pittsburgh $275-$425 vs National $300-$600",
        description: "Meaningfully under the national mid-range.",
      },
      {
        label: "Full truck",
        price: "Pittsburgh $475-$750 vs National $600-$1,099",
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
      "The national average of $241 per job (Angi) is right in the middle of our half-truck range.",
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
    seoTitle: "Junk Removal Pricing by Item Pittsburgh | Full Item List | Steel City Cleanouts",
    seoDescription:
      "Pittsburgh junk removal pricing by specific item. Mattress, couch, piano, hot tub, appliance, tire, TV. Real dollar figures for every item.",
    heroHeadline: "Junk Removal Pricing by Item",
    heroSub: "Specific items, specific prices. All Pittsburgh rates.",
    eyebrow: "Pricing · By Item",
    citableSnippet:
      "Steel City Cleanouts prices single items at $99 minimum in Pittsburgh. Mattresses, couches, refrigerators, and treadmills are all $99 each. Heavy specialty items cost more: pianos $75 to $150 on top of base, hot tubs $375 to $750 all-in, pool tables $100 to $150 on top of base.",
    intro:
      "Most items fit into the $99 single-item minimum. The exceptions are heavy specialty pieces like pianos, hot tubs, and pool tables, which have their own pricing because they need extra crew, tools, or disposal routing. Here's the full list.",
    priceLow: 99,
    priceHigh: 1100,
    pricingAnchor: "$99 for most single items. Pianos, hot tubs, and pool tables have their own pricing.",
    tableHeading: "Pricing by Item",
    rows: [
      { label: "Mattress (any size)", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Couch or sectional", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Refrigerator (no Freon issues)", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Washer or dryer", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "TV up to 65 inches", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Treadmill or exercise bike", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Recliner or armchair", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Dining table or desk", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Upright piano", price: "$174 ($99 + $75)", priceLow: 174, priceHigh: 174 },
      { label: "Grand or baby grand piano", price: "$249 ($99 + $150)", priceLow: 249, priceHigh: 249 },
      { label: "Hot tub (small, 2-3 person)", price: "$375 to $450", priceLow: 375, priceHigh: 450 },
      { label: "Hot tub (standard, 4-5 person)", price: "$450 to $600", priceLow: 450, priceHigh: 600 },
      { label: "Hot tub (large, 6-8 person)", price: "$550 to $750", priceLow: 550, priceHigh: 750 },
      { label: "Swim spa (8+ person)", price: "$750 to $1,100", priceLow: 750, priceHigh: 1100 },
      { label: "Pool table (slate)", price: "$199 to $249", priceLow: 199, priceHigh: 249 },
      { label: "Safe (under 200 lbs)", price: "$99", priceLow: 99, priceHigh: 99 },
      { label: "Safe (200+ lbs)", price: "$199 to $299", priceLow: 199, priceHigh: 299 },
      { label: "Tires (each)", price: "$5 to $15", priceLow: 5, priceHigh: 15 },
    ],
    notes: [
      "Item pricing assumes curbside or garage-level access. Basement or upper-floor pickups add a stairs surcharge where applicable.",
      "Old refrigerators, ACs, and dehumidifiers with refrigerant need EPA-compliant routing (still included in our $99, no extra fee).",
      "CRT TVs over 32 inches have a small disposal surcharge ($10 to $25) due to PA e-waste rules.",
      "Pianos include strap, dolly, and careful handling. We don't tune, don't move, just remove.",
    ],
    heroImage: "/images/pricing/by-item.jpg",
    faqs: [
      {
        q: "Can you remove a hot tub for the $99 minimum?",
        a: "No. Hot tub removal has its own pricing because it requires draining, cutting the shell, and routing the pieces to multiple disposal points. Small hot tubs run $375 to $450 all-in. See the hot tub pricing page (coming soon) for the full breakdown.",
      },
      {
        q: "Do you charge extra for appliances with Freon?",
        a: "No. Our $99 item price includes EPA-compliant Freon handling. We work with local appliance recyclers who handle the refrigerant recovery. Other Pittsburgh junk haulers sometimes add a $25 to $50 Freon fee; we don't.",
      },
      {
        q: "What about CRT TVs or old monitors?",
        a: "We take them. Pennsylvania's electronics recycling law adds a small disposal surcharge ($10 to $25) for CRTs over 32 inches because they require special routing. Flat-panel TVs up to 65 inches are included in the $99 minimum with no surcharge.",
      },
      {
        q: "Can I bundle 3 items for less than $297?",
        a: "Sometimes. If all 3 items fit in one trip and are easy to carry, we can do the bundle for $175 to $225 as a quarter-truck job instead of charging $99 per item. Call us and we'll tell you which option makes more sense for your specific items.",
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
