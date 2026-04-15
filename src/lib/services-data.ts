export type ServiceFaq = { q: string; a: string };

export type QuickFact = { label: string; value: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSub: string;
  citableSnippet: string;
  intro: string;
  typicalJob?: string;
  whyUs?: string;
  keyPoints: string[];
  whatsIncluded: string[];
  quickFacts?: QuickFact[];
  pricingAnchor: string;
  priceLow?: number;
  priceHigh?: number;
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
    citableSnippet:
      "Steel City Cleanouts provides full-service estate cleanouts in Pittsburgh, PA and surrounding suburbs. Most homes are cleared in 1 to 3 days for $800 to $3,500. Family-owned, fully insured. Call (585) 200-0871 for a free walk-through.",
    intro:
      "Losing a loved one is hard enough without facing a house full of belongings. Our estate cleanout crews handle everything, from the attic boxes to the basement furnace, so families can focus on what matters. We work with attorneys, realtors, and families across Pittsburgh to turn a full home into an empty, broom-swept property in 1 to 3 days. Same-day walk-throughs are available most weeks.",
    typicalJob:
      "A typical Pittsburgh estate cleanout starts with a free walk-through. We look at every room, every closet, every basement corner, and every outbuilding. Then we give you a single written price with no upsells and no surprise fees. On job day, a 2 or 3-person crew shows up in uniformed trucks, protects floors and doorways, and starts clearing room by room. Valuables, paperwork, and photos get set aside on a table for the family to review before anything leaves the house. Donation-worthy furniture and clothing gets routed to local Pittsburgh charities when possible. Everything else goes to licensed disposal and recycling. We finish by sweeping every floor so the home is ready for photos, inspection, or handoff to a realtor.",
    whyUs:
      "Families pick us because we treat the house like it's ours. We don't rush, we don't judge, and we don't haul anything sentimental without asking twice. We coordinate with out-of-state executors by phone, photo, and video so you never have to fly in. And because we're family-owned, you talk to the same person from the first call to the final invoice. No call centers, no dispatch handoffs, no missed details.",
    keyPoints: [
      "Whole-house cleanouts, attic to basement",
      "We sort what can be donated or sold, haul the rest",
      "Work directly with probate attorneys and realtors",
      "Fully insured crews, respectful handling",
      "Same-day or scheduled service across Pittsburgh",
      "Before and after photos sent to out-of-state family",
    ],
    whatsIncluded: [
      "Walk-through and free written estimate",
      "Furniture, appliances, clothing, books, paperwork",
      "Basement, attic, garage, shed, and outbuildings",
      "Donation drop-offs to local partners where possible",
      "Valuables and photos set aside for family review",
      "Broom-swept finish so the home is ready for sale or rental",
    ],
    quickFacts: [
      { label: "Typical job size", value: "1 to 3 days" },
      { label: "Typical price range", value: "$800 to $3,500" },
      { label: "Crew size", value: "2 or 3 people" },
      { label: "Trucks per job", value: "1 to 4 truckloads" },
      { label: "Availability", value: "7 days a week" },
    ],
    pricingAnchor: "Free on-site estimates. Most homes $800 to $3,500 depending on size and volume.",
    priceLow: 800,
    priceHigh: 3500,
    heroImage: "/images/services/estate-cleanouts.jpg",
    faqs: [
      {
        q: "How long does an estate cleanout take?",
        a: "Most single-family homes take 1 to 3 days depending on square footage and how much is inside. A 2,000 sq ft home with a finished basement usually runs 1.5 days. A 3,500+ sq ft home with outbuildings usually runs 2 to 3 days. We'll walk through with you and give you a realistic window before we start.",
      },
      {
        q: "Do you work with probate attorneys and executors?",
        a: "Yes. We work with attorneys, executors, and out-of-state family members all the time. We coordinate access, provide itemized invoices, hold on-site valuables for the estate, and send before and after photos so out-of-state executors never have to fly in.",
      },
      {
        q: "What happens to the stuff you take?",
        a: "Anything in good condition gets donated to local Pittsburgh charities when possible. We partner with Goodwill, Construction Junction, and other regional donation sites. The rest goes to licensed disposal and recycling facilities. We send a donation receipt on request.",
      },
      {
        q: "Can you cleanout a hoarder situation?",
        a: "Yes. We've handled heavy hoarder cleanouts across Pittsburgh. Our crews are equipped with PPE, respectful, and discreet. We can bring unmarked trucks when privacy matters. Call us and we'll come out for a private walk-through.",
      },
      {
        q: "How do you handle valuables and family photos?",
        a: "Every job starts with a briefing. We set aside anything that looks valuable (jewelry, watches, cash, deeds, photo albums, paperwork) on a central table for the family to review before it leaves the house. If you're out of state, we photograph what we find and text it to you.",
      },
      {
        q: "What's the first step?",
        a: "Call (585) 200-0871 or use the contact form. We'll book a free walk-through, usually within 48 hours. You'll get a single written price the same day. If you approve, we can often start within a week, and same-day work is possible for smaller homes.",
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
    citableSnippet:
      "Steel City Cleanouts provides same-day junk removal in Pittsburgh, PA. Single items start at $95. Full truckloads from $295. Family-owned, fully insured, 7 days a week. Call (585) 200-0871.",
    intro:
      "If it's heavy, awkward, or broken, we'll take it. Our junk removal crews cover Pittsburgh and every surrounding township 7 days a week. You point at what needs to go. We carry it out, load the truck, sweep up behind us, and you get your space back. Same-day service is available most days, and most appointments are booked within 24 hours of your first call.",
    typicalJob:
      "A typical Pittsburgh junk removal job takes 30 minutes to 2 hours. You call, text a photo, or fill out the contact form. We give you a price range over the phone, then confirm it in person before we start loading. Two uniformed crew members arrive in a clearly marked truck, lay down floor protection if we're going through the house, and start carrying items out. You don't lift a thing. When the load is set, we sweep up, walk the area with you, take payment, and leave. No four-hour arrival windows, no hidden fees, no surprise upcharges.",
    whyUs:
      "Most junk removal companies in Pittsburgh show up in a magnet-sticker truck with a four-hour window and a price that goes up once they see the load. We don't. We quote you once, we show up in our real truck, and the price doesn't move. If you're comparing us to the national franchises, we're usually 15 to 30 percent cheaper on equivalent volume.",
    keyPoints: [
      "Same-day service across Pittsburgh",
      "We load everything. You don't lift a thing",
      "Upfront pricing before we start",
      "Single items or full truckloads",
      "Fully insured, uniformed crews",
      "No four-hour arrival windows",
    ],
    whatsIncluded: [
      "Old furniture, mattresses, couches, recliners",
      "Appliances, refrigerators, washers, dryers",
      "Electronics, TVs, computers, exercise equipment",
      "Yard waste, brush, fencing, lumber",
      "Construction debris and remodeling leftovers",
      "Floor and doorway protection on every job",
    ],
    quickFacts: [
      { label: "Typical job time", value: "30 min to 2 hours" },
      { label: "Starting price", value: "$95 per single item" },
      { label: "Full truckload", value: "from $295" },
      { label: "Arrival window", value: "1 hour or less, not 4" },
      { label: "Availability", value: "Same day, 7 days a week" },
    ],
    pricingAnchor: "Starts around $95 for a single item. Truckloads from $295. Free quotes over the phone.",
    priceLow: 95,
    priceHigh: 650,
    heroImage: "/images/services/junk-removal.jpg",
    faqs: [
      {
        q: "How fast can you get here?",
        a: "Most days we can be out the same day or next morning. Call us and we'll give you a real arrival window, usually 1 hour or less, not a four-hour block like the national franchises.",
      },
      {
        q: "What can't you take?",
        a: "We can't legally haul hazardous materials like paint, oil, gasoline, asbestos, or medical waste. Those require licensed abatement or hazmat disposal. Everything else (furniture, appliances, construction debris, yard waste, electronics) is fair game.",
      },
      {
        q: "Do I need to be home?",
        a: "Not always. If the items are outside, in a garage, or clearly marked, we can handle it with a photo and a phone call. Payment by card or Venmo over the phone when we're done. Landlords and out-of-state owners use this all the time.",
      },
      {
        q: "How is pricing calculated?",
        a: "By volume. How much space the junk takes up in our truck. We quote you a price before we start loading, so there are no surprises when you see the final total. Our truck holds roughly 15 cubic yards, which is 1.5 times most competitor trucks.",
      },
      {
        q: "What's the difference between you and 1-800-Got-Junk?",
        a: "We're local, family-owned, and usually 15 to 30 percent cheaper on equivalent volume. You talk to the same person from the first call to the final invoice. No call centers, no dispatch handoffs. We also don't charge a fuel surcharge.",
      },
      {
        q: "Can you haul a single item?",
        a: "Yes. Single couch, single mattress, single recliner, single appliance. Starts around $95 and we'll tell you the exact price before we load it. Minimum pickup isn't a truckload.",
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
    heroSub: "Old fridge, dead washer, busted dryer. We'll take it.",
    citableSnippet:
      "Steel City Cleanouts hauls old appliances (refrigerators, washers, dryers, stoves, dishwashers) across Pittsburgh, PA. Single appliances from $95. Same-day service. Fully insured. Call (585) 200-0871.",
    intro:
      "Appliances are heavy, awkward, and nobody wants to carry a refrigerator down a basement staircase. We do this every day. Two-person crews show up with the right gear, protect your floors and doorways, and get that old appliance out of your house in under 30 minutes most of the time. We follow EPA guidelines for refrigerant recovery on fridges and freezers, so you don't have to worry about disposal rules or drop-off fees.",
    typicalJob:
      "Most Pittsburgh appliance removal jobs wrap up in 20 to 40 minutes. We arrive in a 2-person crew, lay down floor protection, unplug the appliance, pad-wrap it to protect walls and door jambs, and walk it out with an appliance dolly. Basement appliances come up the stairs on a stair-climbing dolly. Stacked washer/dryer combos get separated in place. Chest freezers get tipped and rolled. Once it's on the truck, we sweep the space it came from so you don't have to clean behind it. Payment is taken on the spot.",
    whyUs:
      "You can't put an old fridge on the curb in Pittsburgh, and big-box stores only haul the old one if you're buying a new one from them. That leaves you stuck. We solve that in under an hour, and we handle multi-appliance jobs (whole kitchen swap, landlord turnover) for a discount.",
    keyPoints: [
      "Refrigerators, washers, dryers, stoves, dishwashers",
      "We protect your floors and doorways",
      "Two-person crews for heavy lifts",
      "EPA-compliant refrigerant recovery",
      "Same-day service available",
      "Multi-appliance discounts",
    ],
    whatsIncluded: [
      "Refrigerators and freezers (including chest freezers)",
      "Washers and dryers, stacked or standalone",
      "Electric and gas stoves, wall ovens",
      "Dishwashers, disposals, trash compactors",
      "Microwaves, water heaters, HVAC units",
      "Basic unplug and basement-to-curb carry",
    ],
    quickFacts: [
      { label: "Typical job time", value: "20 to 40 minutes" },
      { label: "Single appliance", value: "from $95" },
      { label: "Multi-appliance discount", value: "10 to 25 percent off" },
      { label: "Basement pickups", value: "Standard, no extra fee" },
      { label: "Disposal", value: "EPA-compliant, fully licensed" },
    ],
    pricingAnchor: "Single appliances from $95. Multi-appliance discounts available.",
    priceLow: 95,
    priceHigh: 250,
    heroImage: "/images/services/appliance-removal.jpg",
    faqs: [
      {
        q: "Do you take refrigerators and freezers?",
        a: "Yes. We handle refrigerators, chest freezers, and stand-up freezers. We follow EPA guidelines for coolant recovery and the unit goes to a certified recycler. No separate dump fee.",
      },
      {
        q: "Can you disconnect the appliance first?",
        a: "Basic disconnects like unplugging a fridge, pulling a dryer plug, or disconnecting a washer supply hose are included. Gas line or hardwired electric removal should be done by a licensed plumber or electrician before we arrive.",
      },
      {
        q: "What if the appliance is in the basement?",
        a: "No problem. We haul basement fridges, washers, and freezers up steps all the time, including the old Pittsburgh row house bulkhead basements. Tell us where it is when you call and we'll bring the right crew and dolly.",
      },
      {
        q: "Do you take multiple appliances at once?",
        a: "Yes, and we discount them. Whole kitchen swaps (fridge + stove + dishwasher + microwave) and landlord turnovers (washer + dryer + fridge) get 10 to 25 percent off the combined single-item price.",
      },
      {
        q: "Where does the old appliance go?",
        a: "Scrap metal and working parts get pulled for recycling. Refrigerants are recovered under EPA rules. Everything we can't recycle goes to licensed disposal. We can send a receipt if you need it for records.",
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
    heroSub: "One couch or a whole house. We'll haul it.",
    citableSnippet:
      "Steel City Cleanouts hauls old furniture (couches, mattresses, dressers, dining sets) across Pittsburgh, PA. Couches from $95. Mattresses from $85. Same-day pickup. Call (585) 200-0871.",
    intro:
      "That old sectional that won't fit down the stairs, the mattress nobody wants, the dining room set your parents left you. We take it all. Our crews carry furniture out without dinging your walls, load it in the truck, and get it out of your life. Donation-worthy pieces go to local Pittsburgh charities when possible, and mattresses are recycled under PA regional programs when they're in good enough shape.",
    typicalJob:
      "A typical furniture removal job in Pittsburgh takes 20 to 60 minutes. We confirm the price over the phone based on piece count, show up in a 2-person crew, lay down floor protection, and start carrying pieces out. Sectionals and sleeper sofas get disassembled on the spot if they won't fit down the stairs. Dressers get emptied if they still have drawers full. Box springs get stood on end to fit through doorways. Everything loads onto the truck pad-wrapped so your walls and the neighbor's walls stay clean.",
    whyUs:
      "Most people call us because they already tried to do it themselves and the couch is stuck on the stairs. We're the crew that doesn't quit halfway. If the piece came into the house, we can get it out, and we do it without chipping paint or gouging the hardwood.",
    keyPoints: [
      "Couches, sectionals, sleeper sofas, recliners",
      "Mattresses and box springs, any size",
      "Dressers, desks, dining sets, bedroom sets",
      "Floor and wall protection on every job",
      "Donations routed to local Pittsburgh charities",
      "Disassembly included when needed",
    ],
    whatsIncluded: [
      "Single-item pickups or full-room cleanouts",
      "Disassembly when needed (beds, sectionals, tables)",
      "Mattress and box spring removal",
      "Office furniture, cubicles, filing cabinets",
      "Patio furniture, outdoor sets",
      "Pad-wrap and doorway protection",
    ],
    quickFacts: [
      { label: "Typical job time", value: "20 to 60 minutes" },
      { label: "Couch from", value: "$95" },
      { label: "Mattress from", value: "$85" },
      { label: "Full room from", value: "$250" },
      { label: "Availability", value: "Same day, 7 days a week" },
    ],
    pricingAnchor: "Couches from $95. Mattresses from $85. Full rooms from $250.",
    priceLow: 85,
    priceHigh: 450,
    heroImage: "/images/services/furniture-removal.jpg",
    faqs: [
      {
        q: "Can you get a couch out through a tight staircase?",
        a: "Usually yes. Our crews disassemble sectionals and sleeper sofas on the spot when needed. If it came in, we can almost always get it out. Worst case, we cut the frame in place (with your permission) and haul it out in pieces.",
      },
      {
        q: "Do you donate usable furniture?",
        a: "When we can. Pieces in good condition go to local Pittsburgh donation partners like Goodwill, Construction Junction, and Vietnam Veterans of America. The rest is disposed of responsibly at licensed facilities.",
      },
      {
        q: "What about mattresses?",
        a: "We take them. Any size, any condition. Mattresses are recycled when possible under PA regional programs (an average mattress is ~75 percent recyclable into steel, cotton, and foam). Older stained ones go to licensed disposal.",
      },
      {
        q: "Do you take office furniture?",
        a: "Yes. Single desks, whole cubicle setups, filing cabinets, conference tables. Common for small businesses relocating or end-of-lease cleanouts. Volume discounts for 10+ pieces.",
      },
      {
        q: "What if the furniture is on the second floor or in the basement?",
        a: "No extra charge. We haul from any floor. Tell us where the pieces are when you call so we bring the right crew size. Big sectionals from a finished basement usually need 2 people and 30 to 45 minutes.",
      },
    ],
  },
  {
    slug: "garage-cleanouts",
    name: "Garage Cleanouts",
    shortName: "Garage Cleanouts",
    seoTitle: "Garage Cleanouts Pittsburgh PA | Full Garage Haul-Away | Steel City",
    seoDescription:
      "Full garage cleanouts in Pittsburgh. We clear the whole garage in one visit. Tools, boxes, furniture, yard equipment. Call (585) 200-0871 for a free quote.",
    heroHeadline: "Garage Cleanouts in Pittsburgh",
    heroSub: "Park your car in your garage again.",
    citableSnippet:
      "Steel City Cleanouts clears whole garages in Pittsburgh, PA in a single visit. Most 2-car garages take 3 to 5 hours and cost $350 to $900. Same-day scheduling. Call (585) 200-0871.",
    intro:
      "Most Pittsburgh garages start as car storage and end up as a 20-year collection of tools, boxes, bikes, broken lawnmowers, and paint cans nobody's opened since 2009. We come in, clear the whole thing, and leave you with a swept, empty garage in a single visit. Usually done in half a day. Most customers call us in late spring when they want the car back in the garage before summer storms, or in early fall when they're clearing winter storage space.",
    typicalJob:
      "A typical Pittsburgh garage cleanout runs 3 to 5 hours for a 2-car garage. We walk through with you first, point at things, and you tell us what stays, what goes to donation, and what gets hauled. We stack your keep pile to the side, sort donations separately, and load the haul pile onto the truck. Heavy items like old lawnmowers, chest freezers, and metal shelving come out first. Then boxes, tools, and loose items. Then a full sweep of the floor so you can drive in without crunching over gravel. Detached garages and basement garages work the same way.",
    whyUs:
      "The hardest part of a garage cleanout is the decisions, not the lifting. We make it easy. We don't push you to throw things away and we don't judge the paint-can collection. You point, we carry. If you want to stop halfway and keep something, we stop.",
    keyPoints: [
      "Whole-garage cleanouts in one visit",
      "Tools, yard equipment, old furniture, bikes",
      "Half-day turnaround on most garages",
      "Donation sorting included",
      "Broom-swept finish",
      "We work around what you're keeping",
    ],
    whatsIncluded: [
      "Boxes, totes, and accumulated junk",
      "Old yard equipment, lawnmowers, edgers",
      "Bikes, sports equipment, exercise gear",
      "Metal shelving, workbenches, cabinets",
      "Scrap lumber, leftover remodeling materials",
      "Sweep and haul in one visit",
    ],
    quickFacts: [
      { label: "Typical 2-car garage", value: "3 to 5 hours" },
      { label: "Typical 1-car garage", value: "2 to 3 hours" },
      { label: "Typical price", value: "$350 to $900" },
      { label: "Crew size", value: "2 or 3 people" },
      { label: "Donation sorting", value: "Included at no extra cost" },
    ],
    pricingAnchor: "Most garages $350 to $900 depending on volume.",
    priceLow: 350,
    priceHigh: 900,
    heroImage: "/images/services/garage-cleanouts.jpg",
    faqs: [
      {
        q: "How long does a garage cleanout take?",
        a: "Most 2-car garages take 3 to 5 hours. A packed-to-the-ceiling garage can take a full day. A 1-car garage usually runs 2 to 3 hours. We give you an honest estimate at the walk-through so you know what to expect.",
      },
      {
        q: "Can you help me sort what stays and what goes?",
        a: "Absolutely. We'll point, you decide. Piles for keep, donate, and haul. Then we load and go. Most customers keep 20 to 30 percent of what's in the garage and we handle the rest.",
      },
      {
        q: "What about chemicals like paint and oil?",
        a: "We can't legally haul hazardous materials. Pittsburgh residents can drop off paint and oil at the Allegheny County Household Chemical Collection events, usually 4 to 6 times a year. We'll tell you the next collection date when you call.",
      },
      {
        q: "Do you handle detached garages on alleys?",
        a: "Yes, common in Lawrenceville, Bloomfield, Squirrel Hill, and the East End. Alley access actually makes the job faster because we can back the truck right up to the garage door.",
      },
      {
        q: "Can you haul scrap metal and old tools?",
        a: "Yes. Metal shelving, broken tools, old lawn equipment, scrap pipe, metal desks. Metal goes to scrap recyclers and working tools get donated when possible.",
      },
    ],
  },
];

services.push(
  {
    slug: "hoarder-cleanouts",
    name: "Hoarder Cleanouts",
    shortName: "Hoarder Cleanouts",
    seoTitle: "Hoarder Cleanouts Pittsburgh PA | Discreet, Compassionate Service",
    seoDescription:
      "Discreet, compassionate hoarder cleanouts in Pittsburgh and surrounding areas. Multi-day jobs, full-PPE crews, no judgment. Call (585) 200-0871.",
    heroHeadline: "Pittsburgh Hoarder Cleanouts",
    heroSub: "Discreet, compassionate, done right.",
    citableSnippet:
      "Steel City Cleanouts handles hoarder cleanouts in Pittsburgh, PA with discretion and zero judgment. Unmarked trucks on request, full PPE, multi-day jobs. Most fall between $2,000 and $8,000. Call (585) 200-0871.",
    intro:
      "Hoarder cleanouts are some of the hardest jobs we do. They're also some of the most important. We handle every Pittsburgh hoarder cleanout with discretion, patience, and zero judgment. Our crews arrive in unmarked trucks when requested, wear full PPE when needed, and work at a pace the family or property owner can actually handle emotionally and physically. Most jobs span 2 to 5 days because rushing a hoarder cleanout usually ends with important things getting thrown away by accident.",
    typicalJob:
      "A hoarder cleanout starts with a private walk-through (alone or with the family present, whatever works). We look at every room, ask about valuables, paperwork, and medications, and agree on a sorting plan. On job day, crews arrive early and go slow. Room by room, pile by pile. Everything goes into 4 categories: keep, donate, haul, and review later. The review pile sits on a central table for the homeowner or family to check at the end of each day. Biohazards (sharps, rodent droppings, spoiled food, animal waste) get handled with full PPE and proper disposal. We don't stop unless the family asks us to. Most jobs finish with a broom-swept house ready for cleaning and repairs.",
    whyUs:
      "The #1 reason families call us over the national franchises is that we slow down when we need to. A hoarder home isn't a trash problem, it's a life-in-a-house. We respect that. We don't rush people, we don't shame anyone, and we don't haul anything without permission.",
    keyPoints: [
      "Discreet crews, unmarked trucks on request",
      "Full PPE and biohazard handling when needed",
      "Multi-day jobs handled by experienced teams",
      "Work directly with family members or social workers",
      "No judgment, full confidentiality",
      "Sorting pace set by the family, not us",
    ],
    whatsIncluded: [
      "Walk-through and private written estimate",
      "Heavy sorting (keep, donate, haul, review)",
      "Sharps, biohazard, and animal waste handling",
      "Multi-truck loads over 1 or more days",
      "Final clean-out to broom-swept condition",
      "Daily review table for family check-in",
    ],
    quickFacts: [
      { label: "Typical job length", value: "2 to 5 days" },
      { label: "Typical price range", value: "$2,000 to $8,000" },
      { label: "Crew size", value: "2 to 4 people" },
      { label: "PPE", value: "Full, including respirators for severe cases" },
      { label: "Discretion", value: "Unmarked trucks on request" },
    ],
    pricingAnchor: "Hoarder cleanouts vary widely. Most fall between $2,000 and $8,000. Free private walk-through.",
    priceLow: 2000,
    priceHigh: 8000,
    heroImage: "/images/services/hoarder-cleanouts.jpg",
    faqs: [
      {
        q: "Will the neighbors see?",
        a: "We can bring unmarked trucks and work early mornings or weekends if discretion is a priority. Just ask when you call.",
      },
      {
        q: "Can you handle homes with pests or animal waste?",
        a: "Yes. We handle homes with rodent infestations, cat waste, and other biohazards. Our crews wear full PPE and follow proper disposal protocols.",
      },
      {
        q: "How long does a hoarder cleanout take?",
        a: "Most Pittsburgh hoarder jobs take 2-5 days depending on severity. Lighter cases can finish in a day. Severe multi-room situations may run longer.",
      },
      {
        q: "Do you work with social workers or family members?",
        a: "Both. We regularly coordinate with adult children, siblings, and local social service agencies. We'll communicate at whatever pace works for the situation.",
      },
    ],
  },
  {
    slug: "foreclosure-cleanouts",
    name: "Foreclosure Cleanouts",
    shortName: "Foreclosure Cleanouts",
    seoTitle: "Foreclosure Cleanouts Pittsburgh PA | Bank & Realtor Service",
    seoDescription:
      "Fast foreclosure cleanouts in Pittsburgh for banks, asset managers, and realtors. Full property trash-outs, lawn care, boarding. Call (585) 200-0871.",
    heroHeadline: "Pittsburgh Foreclosure Cleanouts",
    heroSub: "Bank-ready property trash-outs, fast.",
    citableSnippet:
      "Steel City Cleanouts handles foreclosure trash-outs for Pittsburgh banks, asset managers, and REO realtors. Most single-family properties ready for listing in 1 to 2 days for $700 to $2,800. Volume pricing available. Call (585) 200-0871.",
    intro:
      "Foreclosed properties need to be emptied, cleaned, and listing-ready fast. We work with banks, asset managers, and Pittsburgh realtors to handle trash-outs on REO (real estate owned) homes. Whole-property cleanouts, yard work, lock changes coordinated with your preferred locksmith, and photo-ready finishes. Invoicing works with standard asset management platforms. Most properties go from full to listing-ready in 1 to 2 business days.",
    typicalJob:
      "A Pittsburgh foreclosure trash-out starts with an initial drive-by or photos from the agent. We confirm volume, give you a written price, and schedule the work. On job day, a 3-person crew starts at the top floor and works down, clearing every room, closet, and basement. Appliances come out (working or not), yard debris gets hauled, outbuildings get cleared, and the interior gets swept. We document the condition with before/after photos and send them with the invoice the same day. Volume-priced jobs get pre-set rates so asset managers can plan budgets across a portfolio.",
    whyUs:
      "Asset managers hire us because we finish on the day we say we'll finish and the invoice never changes. We document everything with photos, we don't add surprise fees, and we're small enough to actually pick up the phone when there's a deadline change. Speed and paperwork discipline are the two things this work needs most.",
    keyPoints: [
      "Whole-property trash-outs in 1 to 2 days",
      "Work with banks, asset managers, REO agents",
      "Photo-ready finish for listing day",
      "Yard debris, leftover belongings, appliances all handled",
      "Invoicing compatible with asset management platforms",
      "Same-day photo documentation with every invoice",
    ],
    whatsIncluded: [
      "Complete interior trash-out (every room, every level)",
      "Yard debris, fencing, outdoor furniture, playsets",
      "Detached garages, sheds, outbuildings",
      "Broom-swept interior, ready for inspection photos",
      "Detailed itemized invoice with before/after photos",
      "Priority scheduling for volume clients",
    ],
    quickFacts: [
      { label: "Typical turnaround", value: "1 to 2 days" },
      { label: "Typical price", value: "$700 to $2,800" },
      { label: "Documentation", value: "Before/after photos on every job" },
      { label: "Volume pricing", value: "Available for 3+ properties" },
      { label: "Platforms", value: "Compatible with standard asset management systems" },
    ],
    pricingAnchor: "Most foreclosure jobs $700 to $2,800 depending on property size and volume. Volume pricing for asset managers.",
    priceLow: 700,
    priceHigh: 2800,
    heroImage: "/images/services/foreclosure-cleanouts.jpg",
    faqs: [
      {
        q: "Do you work with asset management companies?",
        a: "Yes. We work with banks, asset managers, and REO realtors. We can invoice through standard asset management platforms and provide before/after photo documentation with every job.",
      },
      {
        q: "How fast can you trash out a property?",
        a: "Most single-family REO properties are done in 1-2 days. We scale crew size to match your timeline. If you need it by Friday for listing photos, tell us when you call.",
      },
      {
        q: "Can you handle properties with severe damage or biohazards?",
        a: "Yes. We handle properties that have been abandoned, vandalized, or left in poor condition. Biohazard situations get full PPE crews and proper disposal protocols.",
      },
      {
        q: "Do you provide photo documentation?",
        a: "Yes. Every foreclosure job includes before/after photos documenting the condition and the finished work. Essential for bank and asset manager records.",
      },
    ],
  },
  {
    slug: "eviction-cleanouts",
    name: "Eviction Cleanouts",
    shortName: "Eviction Cleanouts",
    seoTitle: "Eviction Cleanouts Pittsburgh PA | Same-Day Landlord Service",
    seoDescription:
      "Same-day eviction cleanouts for Pittsburgh landlords and property managers. Full unit trash-outs, fast turnaround between tenants. Call (585) 200-0871.",
    heroHeadline: "Pittsburgh Eviction Cleanouts",
    heroSub: "Get the unit rent-ready. Fast.",
    citableSnippet:
      "Steel City Cleanouts provides same-day eviction trash-outs for Pittsburgh landlords and property managers. Apartment units from $350. Single-family from $650. Volume discounts available. Call (585) 200-0871.",
    intro:
      "After an eviction, time is money. Every day the unit sits full of the previous tenant's belongings is a day of lost rent. We show up same-day or next-day, trash out the entire unit, and leave it broom-swept and ready for turnover. Single-family homes, duplexes, apartments, student rentals. We handle all of it for Pittsburgh landlords and property managers, and we're familiar with PA tenant property rules and the 10-day notice process.",
    typicalJob:
      "Most Pittsburgh eviction trash-outs take 3 to 6 hours on a single unit. Landlord calls, we quote, we schedule. On job day, a 2 or 3-person crew clears the unit floor by floor. Furniture, mattresses, clothing, trash, and anything the tenant left behind. Appliances come out if the landlord wants a clean slate. Yard items get hauled if the property has outdoor space. The unit finishes swept and ready for the cleaning crew, painter, or next walkthrough. Itemized invoice goes out the same day for record-keeping and tax purposes.",
    whyUs:
      "Property managers with 5+ doors hire us on a standing rate because we make the pipeline work. Trash-out Monday, clean Tuesday, paint Wednesday, show Thursday. We fit into your turnover schedule instead of making you wait on us.",
    keyPoints: [
      "Same-day or next-day service",
      "Whole-unit trash-outs in a single visit",
      "Apartments, duplexes, single-family homes",
      "Broom-swept and ready for turnover cleaning",
      "Volume pricing for property managers",
      "Familiar with PA tenant property rules",
    ],
    whatsIncluded: [
      "Complete removal of abandoned tenant property",
      "Furniture, appliances, clothing, trash, and debris",
      "Yard items if applicable",
      "Swept and vacuumed finish, ready for painter or cleaner",
      "Itemized invoice for record-keeping",
      "Photo documentation on request",
    ],
    quickFacts: [
      { label: "Typical single-unit job", value: "3 to 6 hours" },
      { label: "Apartment units from", value: "$350" },
      { label: "Single-family from", value: "$650" },
      { label: "Turnaround", value: "Same day or next day" },
      { label: "Volume discounts", value: "Available for 5+ doors" },
    ],
    pricingAnchor: "Apartment units from $350. Single-family trash-outs $650 to $2,000. Volume discounts for property managers.",
    priceLow: 350,
    priceHigh: 2000,
    heroImage: "/images/services/eviction-cleanouts.jpg",
    faqs: [
      {
        q: "How fast can you turn a unit?",
        a: "Most eviction trash-outs are done in 3-6 hours on single units. Call us in the morning, the unit is ready by afternoon. Multi-unit jobs get scheduled around your turnover timeline.",
      },
      {
        q: "Do you handle PA legal abandoned property requirements?",
        a: "We're familiar with PA tenant property rules. We can hold items aside if you need to follow the 10-day notice process, or trash-out immediately if the lease allows and you've followed proper procedure. When in doubt, check with your attorney first.",
      },
      {
        q: "Can you coordinate with my cleaner and painter?",
        a: "Yes. We coordinate schedules with turnover cleaners, painters, and maintenance crews so the unit flows through the turnover pipeline without waiting around.",
      },
      {
        q: "Do you offer volume discounts for property managers?",
        a: "Yes. If you manage multiple Pittsburgh-area properties, we'll set up a standing rate that's below our single-job pricing. Call us for a volume agreement.",
      },
    ],
  },
);

services.push(
  {
    slug: "construction-debris",
    name: "Construction Debris Removal",
    shortName: "Construction Debris",
    seoTitle: "Construction Debris Removal Pittsburgh PA | Renovation Haul-Away",
    seoDescription:
      "Construction and renovation debris removal in Pittsburgh. Drywall, lumber, flooring, cabinets, fixtures. Homeowner-generated only. Call (585) 200-0871.",
    heroHeadline: "Pittsburgh Construction Debris Removal",
    heroSub: "Renovation leftover, remodel junk, demo debris. We'll haul it.",
    citableSnippet:
      "Steel City Cleanouts hauls homeowner-generated construction and renovation debris across Pittsburgh, PA. Single-room debris from $250. Full-gut jobs $800 to $2,500. Often cheaper than renting a dumpster. Call (585) 200-0871.",
    intro:
      "Remodeling or demoing a room leaves behind piles of drywall, lumber, flooring, cabinets, and fixtures. We handle the haul-away so you can keep working. Single rooms, whole-house renovations, and post-contractor cleanups. We take homeowner-generated construction debris across Pittsburgh and surrounding areas. For most small to medium renovations, hiring us for 2 or 3 truckloads is cheaper than a 2-week dumpster rental.",
    typicalJob:
      "A typical job is a DIY homeowner mid-renovation. You demo a bathroom, rip out old cabinets, or tear up carpet, and you need the pile gone before you can keep going. You call or text us a photo. We give you a price based on volume, arrive the same day or next morning, and load everything onto the truck. Drywall, lumber, tile, carpet, and fixtures go together in one load. Scrap metal gets separated for recycling. Demo-related dust is your mess, but debris removal is ours.",
    whyUs:
      "Most homeowners compare us to a 10-yard dumpster rental. A dumpster rental is $400 to $700 for a week or two, plus you have to load it yourself, plus you get charged for overage. We come, we load, we haul, same price. And we're there in under 24 hours so you're not staring at a pile for 2 weeks.",
    keyPoints: [
      "Drywall, lumber, flooring, cabinets, fixtures",
      "Single-room or whole-house renovation debris",
      "Scrap metal and plumbing fixtures included",
      "Post-contractor cleanup if they left a mess",
      "Same-day or scheduled pickup",
      "Often cheaper than a dumpster rental",
    ],
    whatsIncluded: [
      "Old drywall and plaster",
      "Lumber, trim, doors, windows",
      "Carpet, tile, hardwood, vinyl flooring",
      "Kitchen cabinets and bathroom fixtures",
      "Scrap metal, old pipes, light fixtures",
      "We load it, you keep working",
    ],
    quickFacts: [
      { label: "Typical single-room debris", value: "from $250" },
      { label: "Full-gut renovation", value: "$800 to $2,500" },
      { label: "Truck capacity", value: "~15 cubic yards per load" },
      { label: "Turnaround", value: "Same day or next morning" },
      { label: "vs. dumpster rental", value: "Often cheaper, and no loading labor" },
    ],
    pricingAnchor: "Single-room debris from $250. Full-gut renovation jobs $800 to $2,500.",
    priceLow: 250,
    priceHigh: 2500,
    heroImage: "/images/services/construction-debris.jpg",
    faqs: [
      {
        q: "Can you haul debris from a contractor's job?",
        a: "Only if it's homeowner-generated, meaning the property owner is hiring us directly, not the contractor. If your contractor is supposed to haul their own debris, that's on them. We handle the leftover mess after they're gone.",
      },
      {
        q: "What about hazardous materials like asbestos or lead paint?",
        a: "We can't legally haul asbestos or confirmed lead-painted materials. Those require licensed abatement contractors. If you're not sure, tell us what you have and we'll help figure it out.",
      },
      {
        q: "Can you haul full dumpster loads?",
        a: "Yes. Instead of renting a dumpster, we can schedule multiple truckloads across a day or weekend. Often cheaper than a dumpster rental for 2-3 days of debris.",
      },
    ],
  },
  {
    slug: "yard-waste-removal",
    name: "Yard Waste Removal",
    shortName: "Yard Waste",
    seoTitle: "Yard Waste Removal Pittsburgh PA | Brush, Branches, Debris Haul-Away",
    seoDescription:
      "Yard waste hauling in Pittsburgh. Brush, branches, old playsets, fencing, deck debris. Same-day service. Call (585) 200-0871.",
    heroHeadline: "Pittsburgh Yard Waste Removal",
    heroSub: "Brush, branches, old playsets, deck debris. We'll haul it.",
    citableSnippet:
      "Steel City Cleanouts hauls yard waste (brush, branches, playsets, fencing, deck debris) across Pittsburgh, PA. Single pile from $150. Full yard cleanouts $400 to $1,200. Same-day service. Call (585) 200-0871.",
    intro:
      "Pittsburgh yards generate a lot of debris: storm damage, fallen branches, overgrown beds, old playsets, busted fencing, and deck tear-downs. We haul it all away in one visit. No bagging, no waiting for municipal pickup, no scheduling around the township's brush collection week. Most Allegheny and Butler County townships only do yard waste pickup a few weeks a year, and they have volume limits. We don't.",
    typicalJob:
      "Most yard waste jobs run 30 minutes to 3 hours depending on volume. You point at the pile, we carry it to the truck. Brush and branches load loose (no bagging needed). Playsets and swingsets get disassembled on the spot (typically 45 minutes for a standard wood set). Fencing gets pulled, cut into sections if needed, and loaded. Deck debris loads in layers. We clean up small chunks and rake the grass afterward so the yard looks normal, not like a construction site.",
    whyUs:
      "The big complaint we hear about yard waste is the bagging. Pittsburgh townships require yard waste in paper bags, they limit quantity, and they only pick up certain weeks. We skip all that. No bags, no limits, no waiting. Most yards are cleared same day.",
    keyPoints: [
      "Brush, branches, storm damage",
      "Old playsets and swingsets",
      "Fencing, deck debris, lattice",
      "Outdoor furniture and grills",
      "Same-day service available",
      "No bagging required",
    ],
    whatsIncluded: [
      "Tree limbs and brush (under contractor-sized)",
      "Playsets, swingsets, trampolines (disassembled)",
      "Fencing panels, posts, and hardware",
      "Old deck boards, railings, stairs",
      "Outdoor furniture, grills, patio sets",
      "Quick rake of the work area before we leave",
    ],
    quickFacts: [
      { label: "Typical job time", value: "30 min to 3 hours" },
      { label: "Single brush pile", value: "from $150" },
      { label: "Full yard cleanout", value: "$400 to $1,200" },
      { label: "Playset disassembly", value: "~45 minutes" },
      { label: "Bag it yourself", value: "Never required" },
    ],
    pricingAnchor: "Single brush pile from $150. Full yard cleanouts $400 to $1,200.",
    priceLow: 150,
    priceHigh: 1200,
    heroImage: "/images/services/yard-waste-removal.jpg",
    faqs: [
      {
        q: "Do I need to bag the yard waste first?",
        a: "No. Just point at the pile and we'll load it directly into the truck. Saves you the backache and the trash bags.",
      },
      {
        q: "Can you haul away old playsets?",
        a: "Yes. We disassemble old swingsets and playsets on-site and haul everything away. Common request from families whose kids have outgrown them.",
      },
      {
        q: "What about tree stumps or large tree removal?",
        a: "We don't cut down trees or grind stumps. That's arborist work. But once a tree is on the ground, we can haul the pieces away as yard waste.",
      },
    ],
  },
);

services.push(
  {
    slug: "storage-unit-cleanouts",
    name: "Storage Unit Cleanouts",
    shortName: "Storage Unit Cleanouts",
    seoTitle: "Storage Unit Cleanouts Pittsburgh PA | Fast Lockup Haul-Away",
    seoDescription:
      "Fast storage unit cleanouts in Pittsburgh. We empty the unit, haul everything, and leave it broom-swept. Starts around $250. Call (585) 200-0871.",
    heroHeadline: "Pittsburgh Storage Unit Cleanouts",
    heroSub: "Stop paying for a unit full of stuff you don't want. We'll empty it.",
    citableSnippet:
      "Steel City Cleanouts empties storage units across Pittsburgh, PA in under 2 hours. Most jobs run $250 to $900. We haul everything, leave it broom-swept, and help you stop paying rent on a lockup you don't need. Call (585) 200-0871.",
    intro:
      "Nobody wants to pay $200 a month forever for a storage unit they haven't opened in a year. We get it. Most of our storage unit cleanout calls come from people who stopped paying, inherited a unit, or just decided it's time to let go of whatever's in there. We empty the whole unit, haul everything away, and leave it swept and ready to hand back to the facility. Usually done in 1 to 3 hours depending on size.",
    typicalJob:
      "You call or text the facility name, unit number, and a rough description of what's inside. We give you a price range over the phone based on the unit size (10x10, 10x20, etc.). On job day, we meet you at the facility, you unlock the unit, and we start loading. Usable furniture goes to donation piles, everything else goes to the truck. We sweep the concrete floor when the unit is empty, you walk it with us, and you can hand the unit back to management the same day. Payment is on the spot by card or Venmo.",
    whyUs:
      "You can't abandon a storage unit in Pennsylvania without the facility charging you for disposal, and their rates are usually 2 to 3 times what we charge. We show up faster, we charge less, and we leave the unit cleaner than the facility would.",
    keyPoints: [
      "Any size unit, any facility",
      "Usually done in 1 to 3 hours",
      "We meet you at the facility",
      "Donation sorting included",
      "Broom-swept finish so you can hand it back",
      "On-the-spot payment, no invoicing needed",
    ],
    whatsIncluded: [
      "Full unit empty-out, 5x5 up to 10x30",
      "Furniture, boxes, appliances, anything inside",
      "Donation routing for usable items",
      "Broom-swept concrete floor",
      "Handoff-ready for facility inspection",
      "Itemized receipt on request",
    ],
    quickFacts: [
      { label: "Typical job time", value: "1 to 3 hours" },
      { label: "Typical price range", value: "$250 to $900" },
      { label: "Unit sizes handled", value: "5x5 to 10x30" },
      { label: "Availability", value: "Same day most weekdays" },
      { label: "Payment", value: "On the spot, card or Venmo" },
    ],
    pricingAnchor: "Most units $250 to $900 depending on size and volume. Free quotes over the phone.",
    priceLow: 250,
    priceHigh: 900,
    heroImage: "/images/services/storage-unit-cleanouts.jpg",
    faqs: [
      {
        q: "How much does it cost to empty a 10x10 storage unit?",
        a: "Most 10x10 units run $350 to $550 depending on how full they are. A packed-to-the-ceiling 10x10 is on the higher end. A half-full 10x10 is on the lower end. We quote you before we start loading so there are no surprises.",
      },
      {
        q: "Can you meet me at the facility?",
        a: "Yes. Just give us the facility name, address, unit number, and a time. We show up, you unlock, and we start loading. Most facilities don't require advance notice, but a few do, so check with them first if you're not sure.",
      },
      {
        q: "What if I don't want anything from inside?",
        a: "Totally fine. Most of our storage unit calls are exactly that: the customer doesn't want to see or sort anything. You unlock, we load, you pay, we leave. Usable items go to donation when possible.",
      },
      {
        q: "Can you cleanout a unit I inherited from a deceased family member?",
        a: "Yes. We handle inherited storage units all the time. We'll set aside anything that looks sentimental (photos, letters, paperwork, jewelry) for you to review before we haul the rest. Coordinate with the facility on legal access first.",
      },
      {
        q: "What about a unit that's been auctioned?",
        a: "If you bought a storage unit at auction and want it emptied instead of sorted, we can help. Same pricing as a normal cleanout. Point, we load, we haul.",
      },
      {
        q: "Do you handle climate-controlled units?",
        a: "Yes. Climate-controlled units are usually faster because the contents are in better condition. Same pricing as non-climate units.",
      },
    ],
  },
  {
    slug: "commercial-cleanouts",
    name: "Commercial Cleanouts",
    shortName: "Commercial Cleanouts",
    seoTitle: "Commercial Cleanouts Pittsburgh PA | Office, Retail, End-of-Lease",
    seoDescription:
      "Fast commercial cleanouts in Pittsburgh. Office trash-outs, retail fixture removal, end-of-lease clearouts, restaurant equipment. Call (585) 200-0871.",
    heroHeadline: "Pittsburgh Commercial Cleanouts",
    heroSub: "Office, retail, restaurant. Cleared fast, after hours if needed.",
    citableSnippet:
      "Steel City Cleanouts handles commercial cleanouts across Pittsburgh, PA: office trash-outs, retail fixture removal, restaurant equipment, and end-of-lease clearouts. After-hours work available. From $500 per job. Call (585) 200-0871.",
    intro:
      "When a Pittsburgh business closes, moves, or renovates, the old space needs to be cleared fast. We handle commercial cleanouts of every size: small offices (single room to whole floor), retail spaces, restaurants, light industrial, and end-of-lease clearouts for property managers. We work after hours and early mornings so your operation keeps running while we clear the back room.",
    typicalJob:
      "A typical commercial cleanout starts with a walk-through (or a photo tour if you're pressed for time). We quote based on volume: desks, chairs, cubicles, fixtures, displays, equipment. On job day, a 3 or 4-person crew arrives at the scheduled window (often after close of business or before opening), clears the space floor by floor, and hauls everything to licensed disposal and recycling. Scrap metal and recoverable equipment are pulled and routed separately. We finish with a broom-swept floor and document the condition with photos so you have a record for the landlord or new tenant.",
    whyUs:
      "Commercial property managers don't have time for a crew that shows up late, leaves a mess, or adds surprise fees. We don't do any of that. We arrive on the schedule you approved, we work in the window you set, and the invoice matches the quote. If that sounds basic, it's because it should be. Most commercial cleanout vendors fall short on exactly these things.",
    keyPoints: [
      "Offices, retail, restaurants, light industrial",
      "After-hours and early-morning work available",
      "End-of-lease clearouts for property managers",
      "Scrap metal and equipment recovery",
      "Photo documentation with every invoice",
      "Volume pricing for multi-location clients",
    ],
    whatsIncluded: [
      "Desks, chairs, cubicles, conference tables",
      "Retail fixtures, display cases, shelving",
      "Restaurant equipment (coolers, fryers, ovens)",
      "Filing cabinets and office machines",
      "Broom-swept finish with photo documentation",
      "Coordination with building management",
    ],
    quickFacts: [
      { label: "Typical small-office job", value: "3 to 6 hours" },
      { label: "Typical full-floor job", value: "1 to 2 days" },
      { label: "Starting price", value: "$500" },
      { label: "After-hours work", value: "Available on request" },
      { label: "Volume pricing", value: "Available for 3+ locations" },
    ],
    pricingAnchor: "Small offices from $500. Retail and restaurant from $900. Full-floor jobs $2,000 to $8,000+.",
    priceLow: 500,
    priceHigh: 8000,
    heroImage: "/images/services/commercial-cleanouts.jpg",
    faqs: [
      {
        q: "Do you work after hours?",
        a: "Yes. Most commercial cleanouts happen after close of business, early morning, or on weekends so the operation keeps running. Just tell us your preferred window when you call.",
      },
      {
        q: "Can you handle restaurant equipment?",
        a: "Yes. Walk-in coolers, commercial fryers, pizza ovens, prep tables, stainless kitchen equipment. We coordinate disconnect with licensed electricians or plumbers if needed.",
      },
      {
        q: "Do you handle retail fixture removal?",
        a: "Yes. Display cases, shelving, slatwall, mannequins, cash wraps, and the built-in fixtures that need to go before handoff. Common for end-of-lease or store closures.",
      },
      {
        q: "Can you work with multiple locations?",
        a: "Yes. Property managers and multi-location businesses get volume pricing and a standing rate. We coordinate a rolling schedule across properties.",
      },
      {
        q: "Do you provide photo documentation?",
        a: "Yes. Every commercial job includes before and after photos, which matter for landlord handoff, new-tenant records, and internal documentation.",
      },
      {
        q: "What about furniture donation for closing nonprofits or schools?",
        a: "We route usable office furniture and equipment to local Pittsburgh nonprofits, schools, and donation partners when possible. Donation receipts are available on request.",
      },
    ],
  },
  {
    slug: "bereavement-cleanouts",
    name: "Bereavement Cleanouts",
    shortName: "Bereavement Cleanouts",
    seoTitle: "Bereavement Cleanouts Pittsburgh PA | Compassionate Family Service",
    seoDescription:
      "Compassionate cleanouts after the loss of a family member. Patient, respectful, no pressure. Call (585) 200-0871 when you're ready.",
    heroHeadline: "Pittsburgh Bereavement Cleanouts",
    heroSub: "When a loved one passes, we take the heavy part.",
    citableSnippet:
      "Steel City Cleanouts provides compassionate, patient cleanouts for Pittsburgh families after the loss of a loved one. We work at the family's pace, handle sentimental items with care, and help you move forward when you're ready. Call (585) 200-0871.",
    intro:
      "Losing someone you love is the hardest thing most people will ever do. And somewhere in the middle of grief, there's a house full of belongings that needs to be sorted. It doesn't feel urgent and it doesn't feel right, but it has to happen eventually. We're the crew that comes in when you're ready, works at your pace, and takes the physical weight off your shoulders so you can focus on the people and the memories.",
    typicalJob:
      "A bereavement cleanout always starts with a phone call, and we don't push. Some families call 2 weeks after the funeral, some call 2 years. Both are fine. When you're ready, we schedule a private walk-through, no commitment. We talk through what the family wants to keep, what can be donated, what should go to a relative, and what we can haul. Then we give you a written price and a flexible schedule. You set the pace. Some families want the whole house cleared in 2 days. Others want us to work room by room across several weekends while they sort the memories at their own speed. Both work.",
    whyUs:
      "We've done a lot of these jobs. More than we expected when we started this business. What we've learned is that the right approach isn't fast, it isn't efficient, and it isn't aggressive. It's patient. It's showing up and asking the family 5 times a day if they want to take a break. It's stopping when someone finds an old letter and needs a minute. It's setting aside anything that looks like it matters and letting the family decide later. That's how these jobs should be handled, and that's how we handle them.",
    keyPoints: [
      "Patient, respectful, family-paced",
      "No pressure on timing",
      "Sentimental items always set aside first",
      "Multi-session scheduling available",
      "Discrete crews, unmarked trucks on request",
      "Coordination with out-of-state family members",
    ],
    whatsIncluded: [
      "Private walk-through with no commitment",
      "Keep/donate/sell/haul sorting at family's pace",
      "Photos and paperwork set aside for review",
      "Daily check-in table for family to review piles",
      "Coordination with probate attorneys and executors",
      "Broom-swept finish when the family is ready",
    ],
    quickFacts: [
      { label: "Typical timing", value: "Whenever the family is ready" },
      { label: "Typical price range", value: "$800 to $3,500" },
      { label: "Walk-through", value: "Free, no pressure, no commitment" },
      { label: "Pacing", value: "Family sets the speed" },
      { label: "Out-of-state family coordination", value: "Included" },
    ],
    pricingAnchor: "Same pricing as standard estate cleanouts. Most homes $800 to $3,500. Free private walk-through.",
    priceLow: 800,
    priceHigh: 3500,
    heroImage: "/images/services/bereavement-cleanouts.jpg",
    faqs: [
      {
        q: "When should I call? Is it too soon?",
        a: "Call whenever you're ready. Some families call the week after the funeral. Others call months or years later. There's no right answer. We'll come out for a walk-through whenever you want, and you don't have to schedule the work on the same day.",
      },
      {
        q: "Do I need to be there for the cleanout?",
        a: "No. Some families want to be there every minute. Others find it too painful and want to come back when the house is empty. Both are fine. We can send photo updates throughout the job if you're not on-site.",
      },
      {
        q: "What about sentimental items we haven't had time to sort?",
        a: "We set them aside, every single one. Photos, letters, jewelry, old cards, anything that looks personal or meaningful. They go on a review table and we don't haul them until the family has had a chance to look. If you need more time, we stop and come back later.",
      },
      {
        q: "Can you coordinate with out-of-state family?",
        a: "Yes. We work with out-of-state family members by phone, photo, and video often. You don't have to fly in to manage the cleanout. We send daily updates, answer questions as they come up, and keep things moving at whatever pace works for the whole family.",
      },
      {
        q: "What if the house is a hoarder situation?",
        a: "We handle those too, with the same patient approach. Hoarder situations in a grief context need extra care because it's often hard to tell what was meaningful to the person who passed. We go slow, we photograph piles, and we don't rush the family through decisions.",
      },
      {
        q: "How is this different from a regular estate cleanout?",
        a: "The work is similar. The approach is different. Regular estate cleanouts often have a tight timeline driven by a listing date or family logistics. Bereavement cleanouts run at the family's pace, however long that takes. We bring the same crews and the same care, but we don't push the schedule.",
      },
    ],
  },
);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
