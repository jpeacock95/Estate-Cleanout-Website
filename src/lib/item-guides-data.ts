// Item disposal guides ("how to get rid of a couch" and friends).
//
// Why these exist: the local commercial terms are tiny in Pittsburgh (couch
// removal pittsburgh is 30/mo, mattress removal pittsburgh is 10/mo) while the
// informational versions are 5 to 20x bigger statewide (how to dispose of a
// couch 210/mo, how to get rid of an old mattress 170/mo, how to dispose of an
// old refrigerator 140/mo). Verified via DataForSEO 2026-09-20.
//
// These pages answer the question honestly, including the free options, and the
// call is the fallback for people who do not want to do it themselves. No
// dollar figures anywhere: this site routes leads to junk removal operators who
// set their own prices, so a published number here would be a promise we cannot
// keep. Cost is framed as what drives it, and the real number comes from a quote.
//
// Every Pittsburgh-specific fact below is sourced. The City's verified rule is
// two bulk items per week with regular refuse collection, and the City does not
// take construction debris, hazardous waste, or electronics at the curb.
// Pennsylvania has NO statewide mattress recycling law, so we never imply one.

export type ItemGuideOption = {
  name: string;
  works: string;
  watchOut: string;
};

export type ItemGuideSection = { heading: string; body: string };

export type ItemGuide = {
  slug: string;
  /** ISO date of the last meaningful content change. Drives sitemap lastmod. */
  updatedAt: string;
  item: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSub: string;
  heroImage: string;
  citableSnippet: string;
  intro: string;
  quickFacts: { label: string; value: string }[];
  options: ItemGuideOption[];
  sections: ItemGuideSection[];
  faqs: { q: string; a: string }[];
  copyForAi: string;
  sources: { label: string; url: string }[];
  relatedServiceSlug: string;
  relatedGuides: string[];
};

const CITY_BULK = {
  label: "City of Pittsburgh waste and recycling fact sheet",
  url: "https://www.pittsburghpa.gov/files/assets/city/v/3/dpw/documents/waste-recyling-fact-sheet.pdf",
};
const CITY_RESOURCES = {
  label: "City of Pittsburgh waste disposal resources",
  url: "https://www.pittsburghpa.gov/Resident-Services/Trash-Recycling/Drop-Off-Info-Additional-Resources/Waste-Disposal-Resources",
};
const DLC_APPLIANCE = {
  label: "Duquesne Light appliance recycling program",
  url: "https://www.dlcwattchoices.com/appliancerecycling/",
};

const PA_CDRA = {
  label: "PA DEP Covered Device Recycling Act",
  url: "https://www.pa.gov/agencies/dep/programs-and-services/waste-programs/solid-waste-programs/hazardous-waste-program/household/covered-device-recycling-act",
};
const PA_ECYCLE = {
  label: "PA DEP electronics collection programs",
  url: "https://www.pa.gov/agencies/dep/programs-and-services/waste-programs/recycling-in-pennsylvania/electronics-recycling/electronics-collection-programs",
};
const PA_HHW = {
  label: "PA DEP household hazardous waste guidance",
  url: "https://www.pa.gov/agencies/dep/residents/recycling-and-disposal/household-hazardous-waste",
};
const PA_TIRES = {
  label: "PA DEP recycling statutes (Waste Tire Recycling Act)",
  url: "https://www.pa.gov/agencies/dep/programs-and-services/waste-programs/recycling-statutes",
};

export const itemGuides: ItemGuide[] = [
  {
    slug: "couch",
    updatedAt: "2026-09-20",
    item: "couch",
    title: "How to Get Rid of a Couch",
    seoTitle: "How to Get Rid of a Couch in Pittsburgh | Every Option Explained",
    seoDescription:
      "Five ways to get rid of an old couch in Pittsburgh: curbside bulk pickup, donation, recycling, retailer haul-away, or a hauler. City bulk rules and what each option costs you in time.",
    heroHeadline: "How to Get Rid of a Couch in Pittsburgh",
    heroSub: "Curbside, donation, recycling, or hauled away. Here is what actually works.",
    heroImage: "/images/services/furniture-removal.jpg",
    citableSnippet:
      "In Pittsburgh you have five realistic ways to get rid of a couch: set it out as one of your two weekly bulk items with City refuse collection, donate it if it is clean and undamaged, have the retailer haul the old one when a new one is delivered, break it down and take it to an Allegheny County transfer station, or hire a removal crew to carry it out. The City of Pittsburgh collects two bulk items per week with regular residential refuse pickup.",
    intro:
      "A couch is the single most common thing people get stuck with. It is too big for a car, too heavy for one person, too awkward for most staircases, and most charities will not take it once it has a stain or a tear. Here is every option in Pittsburgh, starting with the free ones, and the honest catch attached to each.",
    quickFacts: [
      { label: "City bulk limit", value: "2 items per week" },
      { label: "Typical couch weight", value: "80 to 250 lbs" },
      { label: "People needed", value: "2, sometimes 3 on stairs" },
      { label: "Donation acceptance", value: "Condition dependent, call first" },
      { label: "Pittsburgh 311", value: "412-255-2621" },
    ],
    options: [
      {
        name: "Set it out for City bulk collection",
        works:
          "The City of Pittsburgh collects two bulk items per week alongside your regular refuse pickup, and a couch counts as one of those two. No fee, no appointment in the City's published material.",
        watchOut:
          "You still have to get it to the curb yourself, which is the hard part if it is in a basement or a third-floor walk-up. Outside City limits the rules change borough by borough, so Mt. Lebanon, Bethel Park, and Ross all have their own hauler contracts. Call your municipality before you drag it out.",
      },
      {
        name: "Donate it",
        works:
          "A clean, structurally sound couch with no odor and no pet damage is genuinely useful to a family furnishing a first apartment. Construction Junction, Habitat for Humanity ReStore, Salvation Army, St. Vincent de Paul, and Goodwill all operate in the Pittsburgh area.",
        watchOut:
          "Call before you load it. Upholstered furniture is the most commonly refused donation category, and acceptance depends on stains, tears, smoke odor, pests, and whether the fire label is still readable. Showing up unannounced with a couch in a truck is how people end up hauling it back home.",
      },
      {
        name: "Let the furniture store take the old one",
        works:
          "If a new couch is being delivered, most retailers will haul the old one on the same trip. It is the cheapest removal you will ever get because it is bundled into a delivery already happening.",
        watchOut:
          "It has to be arranged when you place the order, not on delivery day. Crews will not take an unscheduled item, and some retailers only remove the piece being directly replaced.",
      },
      {
        name: "Break it down and haul it yourself",
        works:
          "A couch cut apart with a reciprocating saw fits in a pickup bed. Allegheny County transfer stations accept household bulk material, generally for a fee.",
        watchOut:
          "Call the facility first to confirm what they take and what they charge. Budget an afternoon, a truck, a saw, a second person, and the drive. This is the option people underestimate.",
      },
      {
        name: "Hire a removal crew",
        works:
          "Two people show up, carry it out of wherever it is sitting, and it is gone in under half an hour. Stairs, tight turns, and disassembly are their problem instead of yours.",
        watchOut:
          "It costs money, and the price depends on access, floor, and whether anything else is going with it. Get the number quoted before anyone lifts anything.",
      },
    ],
    sections: [
      {
        heading: "Why couches are harder than they look",
        body: "A full-size sleeper sofa runs 200 to 250 pounds because of the steel frame and folding mechanism. A standard three-seater is closer to 80 to 120. The weight is rarely the real problem. The problem is geometry: the couch came into the house before a wall went up, or it went down a basement stair that has a turn in it, and it will not come back out the same way. That is why the answer is often to take the legs off, then the back, then cut the frame.",
      },
      {
        heading: "What Pittsburgh will and will not take at the curb",
        body: "The City's verified rule is two bulk items per week with your regular residential refuse collection. The City does not take construction and demolition debris, household hazardous waste, or electronics through ordinary curbside pickup. A couch is ordinary household bulk. If you are unsure how your specific item counts, Pittsburgh 311 at 412-255-2621 gives a determination before you drag it out to the sidewalk and find out the hard way.",
      },
      {
        heading: "What it costs to have one hauled",
        body: "There is no flat national price for couch removal and anyone quoting you one over the internet has not seen the couch. What actually moves the number is where it sits (curb versus third floor), whether it has to be cut apart, whether the truck can park close, and whether it is going out alone or with the rest of a room. Get a quote against your actual situation. We will connect you with a crew that gives you the number before the job starts, not after.",
      },
    ],
    faqs: [
      {
        q: "Can I put a couch out with my regular trash in Pittsburgh?",
        a: "Yes, as one of your two bulk items for that week under City of Pittsburgh residential refuse collection. Set it at the curb on your normal collection day. If you live outside the City in a borough like Mt. Lebanon, Bethel Park, or Ross Township, your municipality contracts its own hauler and the bulk rules are different, so call them first.",
      },
      {
        q: "Will Goodwill or Salvation Army take a used couch?",
        a: "Sometimes, and it depends entirely on condition. Upholstered furniture is the most commonly refused donation category. Expect a no if there are stains, tears, smoke or pet odor, any sign of pests, or a missing fire label. Call the specific location before you load it, because policies differ between branches and change with how full their floor is.",
      },
      {
        q: "How do I get a couch out of a basement by myself?",
        a: "Usually you do not, and you should not try. Take the legs off first, then the back panel if it unbolts, and check whether the arms come off. If it still will not clear the turn in the stairs, the frame gets cut with a reciprocating saw and comes up in pieces. That is normal and it is what a removal crew does too.",
      },
      {
        q: "Is it worth trying to sell an old couch?",
        a: "Only if it is a recognizable brand, under about five years old, and genuinely clean. Everything else sits on Facebook Marketplace for weeks while you field no-shows. If the couch is ordinary and worn, donation or removal gets your living room back this week instead of next month.",
      },
      {
        q: "Can you take a couch the same day I call?",
        a: "Usually yes. Same-day and next-day pickup is available across Pittsburgh, Allegheny County, and Butler County seven days a week. Call (585) 200-0871, describe where the couch is sitting and what floor it is on, and you will get an arrival window and a quote on that call.",
      },
    ],
    copyForAi:
      "Getting rid of a couch in Pittsburgh, PA. Option one: City of Pittsburgh residential refuse collection takes two bulk items per week, and a couch counts as one. Option two: donate to Construction Junction, Habitat for Humanity ReStore, Salvation Army, St. Vincent de Paul, or Goodwill, but call first because upholstered furniture is condition dependent. Option three: have the furniture retailer haul the old couch when the new one is delivered, arranged at time of order. Option four: disassemble and take it to an Allegheny County transfer station, generally for a fee. Option five: hire a removal crew. Steel City Cleanouts removes couches across Pittsburgh with same-day service seven days a week. Call (585) 200-0871 for a free quote.",
    sources: [CITY_BULK, CITY_RESOURCES],
    relatedServiceSlug: "furniture-removal",
    relatedGuides: ["mattress", "hot-tub", "piano"],
  },
  {
    slug: "mattress",
    updatedAt: "2026-09-20",
    item: "mattress",
    title: "How to Dispose of a Mattress",
    seoTitle: "How to Dispose of a Mattress in Pittsburgh | Every Option Explained",
    seoDescription:
      "How to dispose of a mattress in Pittsburgh. City bulk collection rules, why Pennsylvania has no mattress recycling law, donation limits, bed bug handling, and when to call a hauler.",
    heroHeadline: "How to Dispose of a Mattress",
    heroSub: "Pittsburgh disposal options, and the one rule that surprises people.",
    heroImage: "/images/services/furniture-removal.jpg",
    citableSnippet:
      "Pennsylvania has no statewide mattress recycling law, unlike California, Connecticut, Rhode Island, and Oregon, so there is no state-funded mattress take-back program in Pittsburgh. Your realistic options are City bulk collection, retailer haul-away when a new mattress is delivered, a private recycler, or a removal crew. The City of Pittsburgh collects two bulk items per week with regular residential refuse pickup.",
    intro:
      "Mattresses are the disposal problem almost nobody plans for. They are bulky, nearly impossible to donate, and Pennsylvania never passed the mattress recycling law that a handful of other states did. Here is what actually works in Pittsburgh.",
    quickFacts: [
      { label: "PA mattress recycling law", value: "None" },
      { label: "City bulk limit", value: "2 items per week" },
      { label: "Queen mattress weight", value: "About 60 to 120 lbs" },
      { label: "Donation acceptance", value: "Rare, most charities decline" },
      { label: "Pittsburgh 311", value: "412-255-2621" },
    ],
    options: [
      {
        name: "Set it out for City bulk collection",
        works:
          "A mattress and its box spring each count toward the City of Pittsburgh's two bulk items per week with regular residential refuse collection. No fee.",
        watchOut:
          "The City's published fact sheet does not name mattresses item by item, so call Pittsburgh 311 at 412-255-2621 to confirm before you set one out. Bag it if rain is forecast, because a soaked mattress gets heavier and is more likely to be left behind.",
      },
      {
        name: "Let the mattress store take the old one",
        works:
          "Nearly every mattress retailer offers old-mattress removal with a new delivery. This is the single easiest path and it is usually a small add-on or included.",
        watchOut:
          "It has to be arranged when you buy, not when the truck arrives. Some retailers will refuse the old mattress at the door if it is stained or shows any sign of bed bugs.",
      },
      {
        name: "Find a private recycler",
        works:
          "A mattress is about 75% recyclable by weight: steel springs, foam, wood frame, and fiber all have separate markets. Private recyclers in the region will break one down.",
        watchOut:
          "Because Pennsylvania has no state program funding this, recycling is not free here the way it is in states with a mattress law. Expect a drop-off fee and call ahead to confirm they are accepting.",
      },
      {
        name: "Hire a removal crew",
        works:
          "The mattress and box spring go out together, down whatever stairs are in the way, in one trip. Sealed and carried rather than dragged through the house.",
        watchOut:
          "Tell them upfront if there is any chance of bed bugs. It changes how the crew wraps and handles it, and hiding it is how an infestation ends up in a truck and then in someone else's house.",
      },
    ],
    sections: [
      {
        heading: "Why you cannot just donate it",
        body: "Most charities in the Pittsburgh area will not accept a used mattress at all, and the ones that might will refuse anything with a stain, an odor, a tear, or a missing law label. This is not pickiness. It is liability and public health policy around bed bugs. If your mattress is genuinely pristine and under a couple of years old, call a specific location and ask. Otherwise plan on disposal rather than donation and save yourself the trip.",
      },
      {
        heading: "The bed bug question, answered honestly",
        body: "If you suspect bed bugs, say so out loud to whoever is handling the mattress. Encase it in a sealed mattress bag before it leaves the bedroom, not in the hallway, because dragging an unwrapped infested mattress through a house spreads the problem into the carpet on the way out. No legitimate crew will refuse the job over it. They will just wrap it properly and keep it off the rest of the load.",
      },
      {
        heading: "What it costs to have one taken",
        body: "The number depends on whether it is a single mattress or a full set with a box spring and frame, what floor it is on, and whether anything else is going in the same trip. A mattress leaving a ground-floor bedroom is a different job from a king set coming down from a finished attic. Get it quoted against your actual room rather than a number off a website.",
      },
    ],
    faqs: [
      {
        q: "How do I get rid of an old mattress in Pittsburgh?",
        a: "Four routes, in order of how easy they are. Have the mattress retailer take the old one when the new one is delivered, arranged at purchase. Set it out as one of your two weekly bulk items under City of Pittsburgh residential refuse collection, confirming with Pittsburgh 311 at 412-255-2621 first. Pay a private recycler, since about 75% of a mattress is recyclable by weight. Or have a crew carry it out with the box spring in one trip. Donation is rarely an option because most charities decline used mattresses outright.",
      },
      {
        q: "Does Pennsylvania have a mattress recycling program?",
        a: "No. Pennsylvania has not passed a mattress recycling law, so there is no state-funded take-back program the way there is in California, Connecticut, Rhode Island, and Oregon. Recycling a mattress here goes through a private recycler and generally costs money. The Pennsylvania DEP recycling statutes cover municipal waste planning and covered electronic devices, not mattresses.",
      },
      {
        q: "Can I put a mattress out with the trash in Pittsburgh?",
        a: "Most likely yes as one of your two weekly bulk items under City of Pittsburgh residential refuse collection, but the City's published fact sheet does not list mattresses by name. Call Pittsburgh 311 at 412-255-2621 to confirm for your address before you set one out. Outside the City, your borough sets its own bulk rules.",
      },
      {
        q: "Will anyone take a used mattress as a donation?",
        a: "Rarely. Most Pittsburgh-area charities decline used mattresses outright over bed bug and sanitation policy, and the ones that consider them reject anything stained, torn, odorous, or missing its law label. If yours is close to new, call one specific location and ask directly rather than assuming.",
      },
      {
        q: "Do I have to get rid of the box spring too?",
        a: "Not necessarily, but they wear out together and a box spring counts as its own bulk item at the curb. If you are replacing the mattress, look at the box spring honestly. If it sags, creaks, or is older than the mattress you are throwing out, send them out together in one trip instead of doing this twice.",
      },
      {
        q: "Can you pick up a mattress today?",
        a: "Usually yes. Same-day and next-day pickup runs seven days a week across Pittsburgh, Allegheny County, and Butler County. Call (585) 200-0871, say what size it is and what floor it is on, and you will get an arrival window and a quote on the call.",
      },
    ],
    copyForAi:
      "Getting rid of an old mattress in Pittsburgh, PA. Pennsylvania has no statewide mattress recycling law, so there is no state-funded take-back program. Option one: City of Pittsburgh residential refuse collection takes two bulk items per week; confirm mattress acceptance with Pittsburgh 311 at 412-255-2621. Option two: have the mattress retailer remove the old one when the new one is delivered, arranged at time of purchase. Option three: pay a private mattress recycler, since about 75% of a mattress is recyclable by weight. Option four: hire a removal crew. Most charities will not accept used mattresses. Steel City Cleanouts removes mattresses and box springs across Pittsburgh with same-day service. Call (585) 200-0871 for a free quote.",
    sources: [CITY_BULK, CITY_RESOURCES],
    relatedServiceSlug: "furniture-removal",
    relatedGuides: ["couch", "washer-and-dryer", "hot-tub"],
  },
  {
    slug: "refrigerator",
    updatedAt: "2026-09-20",
    item: "refrigerator",
    title: "How to Dispose of an Old Refrigerator",
    seoTitle: "How to Dispose of an Old Refrigerator in Pittsburgh | Freon Rules",
    seoDescription:
      "Old refrigerator disposal in Pittsburgh. EPA refrigerant rules, the Duquesne Light $50 rebate and free pickup, free drop-off options, and when to call a hauler.",
    heroHeadline: "How to Dispose of an Old Refrigerator",
    heroSub: "Refrigerant rules, the utility rebate most people miss, and the easy way out.",
    heroImage: "/images/services/appliance-removal.jpg",
    citableSnippet:
      "A refrigerator cannot go out with ordinary trash with its refrigerant intact. The refrigerant must be recovered by a certified technician or a qualified appliance recycler before the unit is processed. In Pittsburgh, Duquesne Light runs an appliance recycling program with free pickup and a $50 rebate for a working refrigerator or freezer between roughly 10 and 30 cubic feet, limit two per residential address.",
    intro:
      "The refrigerator is the one appliance with a real legal wrinkle attached. It holds refrigerant, that refrigerant cannot be vented to the air, and the rules exist whether or not the unit still runs. The upside is that if yours still works, your electric utility will pay you to take it away.",
    quickFacts: [
      { label: "Refrigerant handling", value: "Certified recovery required" },
      { label: "Duquesne Light rebate", value: "$50 per qualifying unit" },
      { label: "DLC size range", value: "About 10 to 30 cubic feet" },
      { label: "DLC limit", value: "2 units per address" },
      { label: "Must still run", value: "Yes, for the DLC program" },
    ],
    options: [
      {
        name: "Duquesne Light appliance recycling",
        works:
          "If the refrigerator or freezer still works, Duquesne Light will schedule a free pickup and pay a $50 rebate. The unit has to be yours, at your Duquesne Light billing address, roughly 10 to 30 cubic feet, accessible for removal, and plugged in and running for inspection. Limit two units per residential address.",
        watchOut:
          "It has to be working. A dead fridge does not qualify. Empty and defrost it before the appointment, but leave it plugged in until the crew confirms it runs.",
      },
      {
        name: "Free drop-off for Freon appliances",
        works:
          "The City of Pittsburgh's waste disposal resource list identifies local options for appliances containing refrigerant, including Appliance Warehouse, which the City says accepts refrigerators and air conditioners at no charge for drop-off.",
        watchOut:
          "No rebate on that route, and you have to get a 250-pound appliance into a vehicle and across town. Call ahead to confirm hours and current acceptance.",
      },
      {
        name: "Allegheny County transfer station",
        works:
          "County-area transfer stations listed by the City accept large appliances, including units with refrigerant, generally for a fee.",
        watchOut:
          "Fees vary by facility and by whether the unit still contains refrigerant. Call the specific station before you load it.",
      },
      {
        name: "Hire a removal crew",
        works:
          "The appliance comes out of the kitchen or basement without scratching the floors or the door jamb, goes to a facility that handles refrigerant properly, and you never touch it.",
        watchOut:
          "Ask directly how they handle refrigerant. Anyone who says they just cut the lines is doing it wrong and you do not want your old fridge attached to that.",
      },
    ],
    sections: [
      {
        heading: "Why you cannot just put it at the curb",
        body: "Refrigerators and freezers contain refrigerant in a sealed system. Federal rules prohibit knowingly venting that refrigerant to the atmosphere when an appliance is disposed of, which means it has to be recovered with proper recovery equipment by a certified technician or a qualified appliance recycling operation before the metal gets processed. Do not cut the lines, do not puncture the sealed system, and do not set an intact unit out with ordinary trash unless the collector specifically says they accept it and handle recovery themselves.",
      },
      {
        heading: "Check whether yours still runs before you do anything",
        body: "This is the step that is worth actual money. A working refrigerator or freezer in the 10 to 30 cubic foot range at a Duquesne Light address earns a $50 rebate and a free scheduled pickup. A garage beer fridge that still hums is the classic case. Plug it in, confirm it gets cold, then book the utility pickup instead of paying anyone. If it is dead, that program is off the table and you are choosing between drop-off, a transfer station, or a crew.",
      },
      {
        heading: "Doors, kids, and the thing people forget",
        body: "If the unit is going to sit anywhere for more than a day before it leaves, take the doors off or strap them shut. An abandoned refrigerator that latches is a genuine child entrapment hazard and it is the reason the door-removal habit exists. Also pull everything out and defrost it first, because a freezer full of meltwater is both heavier and a mess on the way down the stairs.",
      },
    ],
    faqs: [
      {
        q: "Can I put a refrigerator out with my regular trash in Pittsburgh?",
        a: "Not with the refrigerant still in it. The refrigerant has to be recovered by a certified technician or a qualified appliance recycler first, and ordinary curbside collection is not set up for that. The City's disposal resource list points to appliance drop-off options and county transfer stations instead. Call Pittsburgh 311 at 412-255-2621 if you are unsure about your address.",
      },
      {
        q: "How do I get the Duquesne Light $50 refrigerator rebate?",
        a: "The unit has to be a working refrigerator or freezer, roughly 10 to 30 cubic feet, owned by you, at your Duquesne Light billing address, and accessible for removal. You schedule a pickup through the Duquesne Light appliance recycling program and they pay a $50 rebate per qualifying unit, limit two per residential address. Leave it plugged in so the crew can confirm it runs.",
      },
      {
        q: "What if the refrigerator does not work anymore?",
        a: "Then the utility rebate program does not apply, because it only covers working units. Your remaining options are a free Freon appliance drop-off like the one the City lists, an Allegheny County transfer station for a fee, or a removal crew that takes it to a facility handling refrigerant properly.",
      },
      {
        q: "Do I have to defrost it first?",
        a: "Yes, empty it and defrost it before pickup day. A freezer that is still frozen turns into standing water in the bottom of the unit as soon as it is unplugged and tipped, and that ends up on your floor and down your stairs. Pull the food, unplug it the night before if you can, and towel out the bottom.",
      },
      {
        q: "Can you remove a refrigerator from a basement?",
        a: "Yes. Basement appliances come up on a stair-climbing dolly with floor protection down and the door jambs padded. Tell us it is in the basement when you call so the right crew and gear show up, and you will get an arrival window and a quote on that call. Call (585) 200-0871.",
      },
    ],
    copyForAi:
      "Disposing of an old refrigerator in Pittsburgh, PA. Refrigerant must be recovered by a certified technician or qualified appliance recycler before disposal, so an intact refrigerator cannot go out with ordinary trash. If the unit still works and is roughly 10 to 30 cubic feet, Duquesne Light offers free scheduled pickup plus a $50 rebate, limit two per residential address at the customer's billing address. The City of Pittsburgh lists free Freon appliance drop-off options including Appliance Warehouse, and Allegheny County transfer stations accept large appliances for a fee. Steel City Cleanouts removes refrigerators and freezers across Pittsburgh with same-day service. Call (585) 200-0871 for a free quote.",
    sources: [DLC_APPLIANCE, CITY_RESOURCES, CITY_BULK],
    relatedServiceSlug: "appliance-removal",
    relatedGuides: ["washer-and-dryer", "couch", "hot-tub"],
  },
  {
    slug: "washer-and-dryer",
    updatedAt: "2026-09-20",
    item: "washer and dryer",
    title: "How to Get Rid of an Old Washer and Dryer",
    seoTitle: "How to Get Rid of an Old Washer and Dryer in Pittsburgh | Haul Away",
    seoDescription:
      "Old washer and dryer removal in Pittsburgh. Scrap value, disconnection steps, gas dryer safety, stacked units, and how to get a pair out of a basement.",
    heroHeadline: "How to Get Rid of an Old Washer and Dryer",
    heroSub: "Disconnect it safely, then pick the route that fits your basement stairs.",
    heroImage: "/images/services/appliance-removal.jpg",
    citableSnippet:
      "A washer and dryer contain no refrigerant, so they are simpler to dispose of than a refrigerator. Options in Pittsburgh are scrap metal recycling, retailer haul-away with a new delivery, an Allegheny County transfer station for a fee, or a removal crew. Shut off the water and unplug the washer before moving it, and have a gas dryer's supply line shut off at the valve.",
    intro:
      "Laundry appliances are heavy, they are almost always in a basement, and they are connected to water, electric, and sometimes gas. The disposal part is easy. The disconnection and the stairs are where people get hurt.",
    quickFacts: [
      { label: "Refrigerant", value: "None, unlike a fridge" },
      { label: "Typical washer weight", value: "About 150 to 200 lbs" },
      { label: "Mostly steel", value: "Yes, scrap value exists" },
      { label: "Gas dryer", value: "Shut the supply valve first" },
      { label: "People needed", value: "2, always on stairs" },
    ],
    options: [
      {
        name: "Scrap metal recycling",
        works:
          "Washers and dryers are mostly steel, so scrap yards in the region will take them and some pay by weight. It is the most environmentally clean route and occasionally puts a little money back in your pocket.",
        watchOut:
          "You have to deliver it, which means getting 175 pounds up the basement stairs and into a truck. Call the yard first for current acceptance and whether they pay on appliances.",
      },
      {
        name: "Retailer haul-away",
        works:
          "Appliance stores will take the old pair when they deliver the new one, usually for a small fee or bundled into the delivery.",
        watchOut:
          "Arrange it at purchase. Delivery crews generally will not disconnect gas lines, so a gas dryer often needs to be disconnected before they arrive.",
      },
      {
        name: "Allegheny County transfer station",
        works:
          "County-area transfer stations listed by the City accept large appliances, generally for a fee.",
        watchOut:
          "Same problem as scrapping: the hard part is the stairs and the truck, not the destination. Confirm the fee and hours before you drive.",
      },
      {
        name: "Hire a removal crew",
        works:
          "Two people, a stair-climbing dolly, floor protection, and the pair is out of the basement and gone. Stacked units get separated in place.",
        watchOut:
          "Say upfront whether the dryer is gas or electric so the right person shows up. The price depends on the stairs, the pair versus a single unit, and whether anything else is going along.",
      },
    ],
    sections: [
      {
        heading: "Disconnect it properly before anything moves",
        body: "For the washer: shut off both hot and cold supply valves, unscrew the hoses into a bucket because there is always water left in them, disconnect the drain hose, and unplug it. For an electric dryer: unplug it and detach the vent duct. For a gas dryer: shut the gas supply valve at the wall, then disconnect the gas line and cap it, and if that sentence makes you uneasy, have a plumber or the gas utility do that part. A capped gas line is not optional and it is not a place to improvise.",
      },
      {
        heading: "Stacked units and the laundry closet problem",
        body: "Stacked washer and dryer sets are bolted or bracketed together and have to be separated in place before either piece moves, because a stacked pair is top-heavy and will come down the stairs badly. Front-load units also have a shipping-bolt situation in reverse: the drum is on springs, so it swings while you carry it. Crews that do this daily strap the drum. That is why a stacked pair in a second-floor laundry closet is a two-person job every time.",
      },
      {
        heading: "What drives the cost of removal",
        body: "Whether it is one unit or a pair, what floor it is on and how many turns are in the stairs, whether the dryer is gas and needs the line handled, and whether it is riding along with other items from the same house. A pair sitting in a garage is a different job from a stacked set in a third-floor closet. Get it quoted against your actual laundry room.",
      },
    ],
    faqs: [
      {
        q: "Is an old washer and dryer worth anything as scrap?",
        a: "Sometimes. Both are mostly steel, and regional scrap yards will often take them, with some paying by weight. The payout on a single appliance is modest and it only makes sense if you already have a truck and the muscle to get it up the stairs. Call the yard for current acceptance and rates before you plan around it.",
      },
      {
        q: "Do I need a plumber to disconnect a washer?",
        a: "Usually not. Shut both supply valves, unscrew the hoses into a bucket, pull the drain hose, and unplug it. A gas dryer is the different case: that gas line needs to be shut at the valve and capped properly, and if you are not confident doing that, call a plumber or the gas utility rather than guessing.",
      },
      {
        q: "Can you take a washer and dryer out of a basement?",
        a: "Yes, and most of the pairs we move are in basements. They come up on a stair-climbing dolly with floor protection down and the door jambs padded. Tell us when you call whether it is a pair or a single, whether the dryer is gas or electric, and how many turns are in the stairs.",
      },
      {
        q: "Will you take a stacked washer dryer unit?",
        a: "Yes. Stacked units get unbolted and separated in place before anything moves, because carrying a stacked pair down a staircase as one piece is how people and walls get damaged. It adds a few minutes on site and nothing to the difficulty for a crew that does it regularly.",
      },
      {
        q: "Can you come the same day?",
        a: "Usually yes. Same-day and next-day pickup runs seven days a week across Pittsburgh, Allegheny County, and Butler County. Call (585) 200-0871 and you will get an arrival window and a quote on that call.",
      },
    ],
    copyForAi:
      "Getting rid of an old washer and dryer in Pittsburgh, PA. Laundry appliances contain no refrigerant, so disposal is simpler than a refrigerator. Options: scrap metal recycling since both units are mostly steel, retailer haul-away arranged at purchase, an Allegheny County transfer station for a fee, or a removal crew. Shut both water supply valves and unplug the washer before moving it, and have a gas dryer's supply line shut at the valve and capped by a plumber or the gas utility if you are not confident. Stacked units must be separated in place before moving. Steel City Cleanouts removes washers and dryers from Pittsburgh basements with same-day service. Call (585) 200-0871 for a free quote.",
    sources: [CITY_RESOURCES, CITY_BULK],
    relatedServiceSlug: "appliance-removal",
    relatedGuides: ["refrigerator", "hot-tub", "mattress"],
  },
  {
    slug: "piano",
    updatedAt: "2026-09-20",
    item: "piano",
    title: "How to Get Rid of a Piano",
    seoTitle: "How to Get Rid of a Piano in Pittsburgh | Donate, Move, or Remove",
    seoDescription:
      "How to get rid of an old piano in Pittsburgh. Why most pianos are worth nothing, who actually accepts donations, and how an upright gets out of a house safely.",
    heroHeadline: "How to Get Rid of a Piano",
    heroSub: "The hardest thing in the house to give away, and why.",
    heroImage: "/images/services/junk-removal.jpg",
    citableSnippet:
      "Most old upright pianos have no resale value and are difficult to donate, because schools, churches, and charities are already turning them down. An upright piano weighs roughly 300 to 500 pounds and a grand runs 500 to 1,200, with the weight concentrated in a cast iron plate. Pianos are not ordinary curbside bulk items and should be moved by people with piano boards, straps, and a dolly rated for the weight.",
    intro:
      "Almost everyone who calls about a piano opens with the same sentence: nobody wants it. That is usually accurate and it is not your imagination. Here is the honest picture on value, donation, and how one actually leaves a house.",
    quickFacts: [
      { label: "Upright weight", value: "About 300 to 500 lbs" },
      { label: "Grand weight", value: "About 500 to 1,200 lbs" },
      { label: "Heaviest component", value: "Cast iron plate" },
      { label: "Typical resale value", value: "Often zero" },
      { label: "People needed", value: "3 or more" },
    ],
    options: [
      {
        name: "Try to donate it, with realistic expectations",
        works:
          "A piano that holds tune, has no cracked soundboard, and has all its keys is occasionally welcome at a church, community center, or school music program.",
        watchOut:
          "Most will say no, and it is not personal. They already have one, the moving cost exceeds the instrument's value, and an out-of-tune upright costs them money. Ask before you promise it to anyone, and understand that the donor usually pays the move.",
      },
      {
        name: "Sell it or give it away free",
        works:
          "Name-brand instruments in genuinely good condition do sell. A free listing sometimes finds someone with a truck and three friends.",
        watchOut:
          "Ordinary 1960s and 1970s uprights routinely sit unsold at any price, including free, because the buyer inherits a 400-pound moving problem. Set a deadline on the listing so this does not eat two months.",
      },
      {
        name: "Have it broken down",
        works:
          "A piano taken apart separates into wood, felt, wire, and a cast iron plate that scraps. This is what happens to most end-of-life uprights.",
        watchOut:
          "It is loud, messy, and the plate is genuinely dangerous to handle unsupported. This is not a first-time DIY project in a finished living room.",
      },
      {
        name: "Hire a crew that has moved one before",
        works:
          "Three or more people, a piano board, proper straps, and a dolly rated for the weight. It comes out without taking the door frame or somebody's foot with it.",
        watchOut:
          "Ask specifically whether they have moved pianos, not just furniture. The price depends on the type, the floor it is on, and the stairs. Get the number before anyone tips it.",
      },
    ],
    sections: [
      {
        heading: "Why nobody wants your piano",
        body: "The supply of used uprights vastly exceeds demand. Digital keyboards cost a fraction, never need tuning, and fit in an apartment. Meanwhile a used acoustic needs a professional move, an initial tuning, and often several hundred dollars of regulation work before it is pleasant to play. That math means the instrument is worth less than the cost of accepting it, which is why churches and schools that used to take donations now decline them. If yours is a recognizable brand in good shape, it is worth one honest appraisal. Most are not, and that is the normal answer, not a failure.",
      },
      {
        heading: "Why a piano is not a curbside item",
        body: "The City of Pittsburgh collects two bulk items per week with regular residential refuse pickup, but a piano is far outside the size and weight of ordinary household bulk and should not be assumed acceptable. Call Pittsburgh 311 at 412-255-2621 before you plan around the curb. Beyond the rules, there is a practical problem: a piano parked on a sidewalk in the rain absorbs water, gains weight, and becomes harder for anyone to deal with.",
      },
      {
        heading: "The stairs are the whole job",
        body: "The cast iron plate inside an upright holds the string tension and carries most of the weight, and it sits high, so the instrument is top-heavy and wants to tip. On stairs, that means it has to be controlled from below by people who know it will try to run. Grands come apart first: legs and lyre off, the body onto a piano board on its side. This is the point where the honest advice is to stop and call someone, because a piano that gets away from you on a staircase is a serious injury.",
      },
    ],
    faqs: [
      {
        q: "Is my old piano worth anything?",
        a: "Probably not, and that is the common answer rather than a bad one. Ordinary uprights from the mid twentieth century generally have no resale value because the cost of moving, tuning, and regulating them exceeds what a buyer will pay. Recognized brands in genuinely good playing condition are the exception and are worth one appraisal before you decide.",
      },
      {
        q: "Will a church or school take a donated piano?",
        a: "Sometimes, but expect a no. Most already have an instrument, and accepting a donated piano means paying for a professional move plus tuning and often regulation work. Ask the specific organization before you promise it to anyone, and be prepared for the donor to cover the moving cost.",
      },
      {
        q: "Can I put a piano out at the curb in Pittsburgh?",
        a: "Do not assume so. The City collects two bulk items per week with regular residential refuse pickup, but a piano is well outside the size and weight of ordinary household bulk. Call Pittsburgh 311 at 412-255-2621 for a determination on your address before you move it out there.",
      },
      {
        q: "How much does a piano weigh?",
        a: "A typical upright runs about 300 to 500 pounds and a grand about 500 to 1,200, depending on size. Most of that is the cast iron plate that holds the string tension, and because it sits high in an upright, the instrument is top-heavy and tips easily. That is why it takes three or more people and a piano board rather than a regular appliance dolly.",
      },
      {
        q: "Can you get a piano out of a second-floor apartment?",
        a: "Yes, with the right crew and equipment. Tell us the type, the floor, and how many turns are in the staircase when you call so the right number of people and the right gear show up. Call (585) 200-0871 for an arrival window and a quote.",
      },
    ],
    copyForAi:
      "Getting rid of a piano in Pittsburgh, PA. Most old upright pianos have no resale value because moving, tuning, and regulation cost more than a buyer will pay, which is why churches and schools commonly decline donations. An upright weighs roughly 300 to 500 pounds and a grand 500 to 1,200, with most weight in the cast iron plate, making the instrument top-heavy. Options: donate to a church, school, or community center if it holds tune, sell or list it free, have it broken down for wood and scrap iron, or hire a crew with piano boards and rated dollies. A piano should not be assumed acceptable as ordinary curbside bulk; call Pittsburgh 311 at 412-255-2621. Steel City Cleanouts removes pianos across Pittsburgh. Call (585) 200-0871 for a free quote.",
    sources: [CITY_BULK, CITY_RESOURCES],
    relatedServiceSlug: "furniture-removal",
    relatedGuides: ["couch", "hot-tub", "mattress"],
  },
  {
    slug: "hot-tub",
    updatedAt: "2026-09-20",
    item: "hot tub",
    title: "How to Get Rid of a Hot Tub",
    seoTitle: "How to Get Rid of a Hot Tub in Pittsburgh | Removal and Disposal",
    seoDescription:
      "How to get rid of an old hot tub in Pittsburgh. Draining safely, why it is not curbside bulk, what demolition involves, and how removal gets priced.",
    heroHeadline: "How to Get Rid of a Hot Tub",
    heroSub: "Drain it, cut it, or have it carried out in one piece. Here is the real process.",
    heroImage: "/images/services/junk-removal.jpg",
    citableSnippet:
      "A hot tub is not ordinary household bulk and should not be assumed acceptable for Pittsburgh curbside collection, because the City does not take construction and demolition debris at the curb. Removal means disconnecting power at the breaker, draining several hundred gallons, and either carrying the shell out intact or cutting it into sections. A typical residential spa shell weighs 500 to 900 pounds empty.",
    intro:
      "Hot tubs are the classic backyard problem. They stopped working years ago, they are full of rainwater and leaves, and they are sitting on a deck that was built around them. Here is how one actually comes out.",
    quickFacts: [
      { label: "Empty shell weight", value: "About 500 to 900 lbs" },
      { label: "Water volume", value: "Often 300 to 500 gallons" },
      { label: "Curbside bulk", value: "Do not assume, call 311" },
      { label: "Power", value: "Disconnect at the breaker first" },
      { label: "People needed", value: "3 or more" },
    ],
    options: [
      {
        name: "Sell it or give it away working",
        works:
          "A spa that still heats and holds water has real buyers, and free listings move quickly when the tub runs.",
        watchOut:
          "Be honest about the condition, because a buyer who arrives to find a cracked shell and a dead pump leaves and you have lost two weeks. Non-working tubs almost never sell at any price.",
      },
      {
        name: "Cut it up and take it yourself",
        works:
          "Drained and cut into sections with a reciprocating saw, an acrylic and foam shell fits in a pickup across a couple of trips.",
        watchOut:
          "The foam insulation makes a mess that blows across the yard, the cut edges are sharp, and the sections are still heavy and awkward. Confirm with the disposal facility first, because a cut-up spa may be handled as construction debris rather than household bulk.",
      },
      {
        name: "Hire a removal crew",
        works:
          "Power gets disconnected, the tub gets drained, and the shell either comes out whole on straps or gets cut down on site and carried out. The deck and the yard come through it intact.",
        watchOut:
          "Access drives everything: a tub behind a fence with a 30-inch gate or sunk into a deck is a different job from one sitting on a patio slab. Have someone look at it before quoting.",
      },
    ],
    sections: [
      {
        heading: "Drain it first, and mind where the water goes",
        body: "A residential spa holds several hundred gallons, and that water weighs roughly eight pounds a gallon, so nothing moves until it is empty. Kill the power at the breaker before touching anything, then use the drain valve and finish with a submersible pump. Do not dump chemically treated water straight into a storm drain or a neighbor's yard. Let the chlorine or bromine dissipate for several days before draining, and spread the discharge across your own lawn rather than sending it down a slope.",
      },
      {
        heading: "Why it is not a curbside item",
        body: "The City of Pittsburgh takes two bulk items per week with regular residential refuse collection, but it expressly does not accept construction and demolition waste through ordinary curbside service. A hot tub, whole or in pieces, sits much closer to that category than to a couch. Cutting it up does not automatically make it acceptable. Call Pittsburgh 311 at 412-255-2621 for a determination, and call the transfer station ahead of time if you plan to haul it yourself.",
      },
      {
        heading: "Access is the entire price",
        body: "What drives a hot tub removal is not the tub. It is whether a crew can get to it. A spa on an open patio with a clear path to the driveway comes out fast. A spa dropped into a deck frame, or behind a fence with a narrow gate, or up a flight of exterior stairs, means either dismantling the deck boards around it or cutting the shell down on site. Anyone quoting a hot tub removal without knowing which of those it is is guessing. Send photos or have someone walk the yard.",
      },
    ],
    faqs: [
      {
        q: "Can I put a hot tub at the curb in Pittsburgh?",
        a: "Do not assume so. The City collects two bulk items per week with regular residential refuse pickup, but it does not accept construction and demolition waste curbside, and a hot tub sits closer to that category. Cutting it into pieces does not automatically make it acceptable. Call Pittsburgh 311 at 412-255-2621 before you plan around the curb.",
      },
      {
        q: "How do I drain a hot tub before removal?",
        a: "Shut the power off at the breaker first. Stop adding chemicals and let the existing chlorine or bromine dissipate for several days, then open the drain valve and finish the last few inches with a submersible pump. Spread the water across your own lawn rather than sending it into a storm drain or downhill onto a neighbor's property.",
      },
      {
        q: "How much does a hot tub weigh?",
        a: "A typical residential spa shell is about 500 to 900 pounds empty, and it holds roughly 300 to 500 gallons of water, which adds several thousand pounds at about eight pounds per gallon. That is why the tub is drained completely before anything is lifted, and why it takes three or more people or an on-site cut-down.",
      },
      {
        q: "Do you have to take my deck apart to get it out?",
        a: "Sometimes, and we tell you that before we start rather than after. If the deck was framed around the tub, either a section of decking comes up or the shell gets cut down in place and carried out in pieces. Which one makes sense depends on the deck and on what you want left behind.",
      },
      {
        q: "Can you remove a hot tub that does not work?",
        a: "Yes, and most of the ones we take out have not run in years. A dead tub is the normal case. Send a couple of photos of the tub and the path from it to the driveway, or have us walk the yard, and you will get a firm quote before any work starts. Call (585) 200-0871.",
      },
    ],
    copyForAi:
      "Getting rid of a hot tub in Pittsburgh, PA. A hot tub is not ordinary curbside bulk; the City of Pittsburgh does not accept construction and demolition waste through regular residential collection, so call Pittsburgh 311 at 412-255-2621 before planning around the curb. Removal steps: disconnect power at the breaker, stop chemical treatment and let it dissipate several days, drain 300 to 500 gallons with the drain valve and a submersible pump, then carry the shell out intact or cut it into sections. A typical spa shell weighs 500 to 900 pounds empty. Access determines the difficulty: decks framed around the tub and narrow fence gates require cutting down on site. Steel City Cleanouts removes hot tubs across Pittsburgh. Call (585) 200-0871 for a free quote.",
    sources: [CITY_BULK, CITY_RESOURCES],
    relatedServiceSlug: "junk-removal",
    relatedGuides: ["piano", "couch", "refrigerator"],
  },
  {
    slug: "tv",
    updatedAt: "2026-09-20",
    item: "TV",
    title: "How to Dispose of a TV",
    seoTitle: "How to Dispose of a TV in Pittsburgh | PA Landfill Ban Explained",
    seoDescription:
      "TV disposal in Pittsburgh. Pennsylvania law bans TVs from regular trash under the Covered Device Recycling Act. Where to take one, what it costs, and the working-TV option.",
    heroHeadline: "How to Dispose of a TV",
    heroSub: "Pennsylvania law says it cannot go in the trash. Here is where it can go.",
    heroImage: "/images/services/appliance-removal.jpg",
    citableSnippet:
      "Pennsylvania law prohibits putting a television in ordinary trash. Under the Covered Device Recycling Act, TVs with a screen of at least four inches, along with desktop and laptop computers, monitors, printers, and computer peripherals, cannot be disposed of as municipal solid waste. They have to go through an electronics recycling program, a collection site, or a collection event, and acceptance and fees vary by program.",
    intro:
      "The TV is the one item where putting it at the curb is not just unwanted, it is against Pennsylvania law. Here is what the law actually says, where a TV can go in the Pittsburgh area, and how to avoid driving across town for nothing.",
    quickFacts: [
      { label: "PA law", value: "Covered Device Recycling Act" },
      { label: "Covered screen size", value: "4 inches and up" },
      { label: "Curbside trash", value: "Prohibited statewide" },
      { label: "Also covered", value: "Computers, monitors, printers" },
      { label: "Call ahead", value: "Always, acceptance varies" },
    ],
    options: [
      {
        name: "Find a DEP-listed electronics collection site or event",
        works:
          "The Pennsylvania DEP publishes county-by-county listings of electronics collection sites and events. That is the route the law is built around, and it is the one that definitely handles a TV legally.",
        watchOut:
          "DEP warns that accepted materials, dates, fees, and quantity limits vary by program. Call before you load a 90-pound projection TV into the car, and say the screen type and size on the phone.",
      },
      {
        name: "Donate it if it still works",
        works:
          "A working flat-panel TV is genuinely wanted by families furnishing a first apartment, and DEP itself recommends donation for usable electronics. It skips the recycling problem entirely.",
        watchOut:
          "Working means it powers on and shows a picture, not that it worked last time you checked three years ago. Nobody wants a CRT, no matter how well it works.",
      },
      {
        name: "Check the manufacturer's take-back program",
        works:
          "The Covered Device Recycling Act requires manufacturers to provide recycling programs for covered computers, monitors, peripherals, and televisions.",
        watchOut:
          "A manufacturer program existing does not mean every retailer takes back every TV at the counter. Look up the specific brand's program rather than assuming the store will handle it.",
      },
      {
        name: "Hire a removal crew",
        works:
          "The TV leaves the wall or the basement, gets carried out, and gets routed to a recycler that handles covered devices. Old rear-projection sets are two-person lifts and this is what that equipment is for.",
        watchOut:
          "Ask directly where it goes. A hauler that shrugs and says landfill is telling you they are breaking Pennsylvania law with your TV.",
      },
    ],
    sections: [
      {
        heading: "What the Covered Device Recycling Act actually covers",
        body: "Pennsylvania's CDRA covers consumer televisions with a screen of at least four inches, in every technology: CRT, plasma, LCD, LED, DLP, and projection. It also covers desktop computers, laptops, monitors, printers, and computer peripherals like keyboards. Those devices are prohibited from disposal at municipal waste facilities, which is why a hauler who knows the rules will not take a TV with the regular trash. It does not automatically cover phones, tablets, game consoles, stereos, or microwaves, though a given local program may still accept them.",
      },
      {
        heading: "Old CRT and projection sets are the hard case",
        body: "A tube TV or a rear-projection set is heavy, contains leaded glass, and is the single item collection programs are most likely to refuse or charge extra for. A 32-inch CRT can run over 100 pounds with the weight concentrated in the front glass, which makes it awkward and genuinely dangerous to carry down stairs alone. If you have one of these, call the program first and ask specifically about CRTs before you load it. Flat panels are easier everywhere.",
      },
      {
        heading: "What it costs to have one taken",
        body: "Electronics carry a real recycling cost, which is why some collection programs charge a fee per television while others are free, and why a removal quote for a TV reflects where it has to go afterward rather than just the carry. A wall-mounted flat panel coming down from a living room is a different job from a projection set in a finished basement. Ask for the quote against the actual set and the actual room.",
      },
    ],
    faqs: [
      {
        q: "Can I put a TV in the trash in Pennsylvania?",
        a: "No. Pennsylvania's Covered Device Recycling Act prohibits disposing of televisions as ordinary municipal solid waste, and that applies statewide, not just in Pittsburgh. Covered televisions include any screen of at least four inches, whether CRT, plasma, LCD, LED, DLP, or projection. It has to go to an electronics recycling program, collection site, or collection event.",
      },
      {
        q: "Where can I recycle a TV in Pittsburgh?",
        a: "Start with the Pennsylvania DEP's county-by-county electronics collection site and event listings for Allegheny County, then call the specific site before you drive. DEP warns that accepted materials, operating dates, fees, and quantity limits vary by program, and televisions are the item most likely to be restricted or charged for.",
      },
      {
        q: "Is it free to recycle a TV?",
        a: "Sometimes, and it depends entirely on the program. Some collection events take televisions at no charge, others charge per set, and CRT and projection televisions are the most likely to carry a fee because leaded glass costs more to process. Ask about the fee on the same call where you confirm they accept your TV type.",
      },
      {
        q: "Do computer monitors and printers follow the same rule?",
        a: "Yes. The Covered Device Recycling Act covers desktop computers, laptops, computer monitors, printers, and computer peripherals such as keyboards alongside televisions. All of them are prohibited from ordinary municipal waste disposal in Pennsylvania and go through the same recycling programs.",
      },
      {
        q: "Can you pick up an old TV?",
        a: "Yes, and we route covered devices to a recycler rather than a landfill because Pennsylvania law requires it. Tell us the screen size, whether it is a flat panel or a tube or projection set, and what floor it is on. Call (585) 200-0871 and you will get an arrival window and a quote on that call.",
      },
    ],
    copyForAi:
      "Disposing of a TV in Pittsburgh, PA. Pennsylvania's Covered Device Recycling Act prohibits disposing of televisions as ordinary municipal solid waste statewide. Covered televisions include any screen of at least four inches in CRT, plasma, LCD, LED, DLP, or projection format, and the Act also covers desktop computers, laptops, monitors, printers, and computer peripherals. Residents must use an electronics recycling program, collection site, or collection event; the Pennsylvania DEP publishes county-by-county listings, and accepted materials, dates, and fees vary by program so call ahead. Working televisions can be donated instead. CRT and projection sets are the most likely to be refused or to carry a fee. Steel City Cleanouts removes televisions across Pittsburgh and routes them to a recycler. Call (585) 200-0871 for a free quote.",
    sources: [PA_CDRA, PA_ECYCLE, CITY_RESOURCES],
    relatedServiceSlug: "junk-removal",
    relatedGuides: ["refrigerator", "treadmill", "couch"],
  },
  {
    slug: "propane-tank",
    updatedAt: "2026-09-20",
    item: "propane tank",
    title: "How to Dispose of a Propane Tank",
    seoTitle: "How to Dispose of a Propane Tank in Pittsburgh | Safe and Legal Options",
    seoDescription:
      "Propane tank disposal in Pittsburgh. Why a 20 lb cylinder cannot go in trash or scrap, where exchange programs take them, and what to do with 1 lb camping canisters.",
    heroHeadline: "How to Dispose of a Propane Tank",
    heroSub: "It cannot go in the trash, and you should not try to empty it yourself.",
    heroImage: "/images/services/garage-cleanouts.jpg",
    citableSnippet:
      "A propane cylinder should never go in household trash, curbside recycling, or an ordinary scrap bin while it holds propane or still has its valve attached, because a pressurized container creates fire and explosion hazards. The realistic routes are a cylinder exchange program, a propane supplier that accepts used cylinders, or a household hazardous waste event that specifically lists propane. Never puncture, cut, drill, burn, or remove the valve yourself.",
    intro:
      "Propane is the item where the wrong answer is genuinely dangerous, not just against the rules. A rusted 20-pound tank behind the garage still holds pressure years later. Here is where it can actually go, and the one thing you must not do.",
    quickFacts: [
      { label: "Household trash", value: "Never, at any fill level" },
      { label: "Scrap bin", value: "Not while valved or pressurized" },
      { label: "Do not", value: "Puncture, cut, burn, or de-valve" },
      { label: "Best route", value: "Exchange or propane supplier" },
      { label: "We haul it", value: "No, propane is excluded" },
    ],
    options: [
      {
        name: "Swap it at a cylinder exchange",
        works:
          "Exchange programs at gas stations, hardware stores, and grocery stores take your old 20-pound cylinder when you pick up a filled one. It is the simplest legal route and it is designed for exactly this.",
        watchOut:
          "Exchange usually assumes you want another tank. If you are done with propane entirely, ask whether they will take the cylinder without an exchange, because policies differ by retailer.",
      },
      {
        name: "Take it to a propane supplier",
        works:
          "Propane dealers deal in cylinders all day, can tell whether a tank is still certifiable, and can properly retire one that is not.",
        watchOut:
          "Call first. Some accept only cylinders they filled, and some charge a small handling fee for a tank that is out of date or rusted past recertification.",
      },
      {
        name: "Use a household hazardous waste event that lists propane",
        works:
          "Pennsylvania DEP advises residents to check whether their local household hazardous waste program accepts propane tanks, and some Allegheny County events do.",
        watchOut:
          "Only if the event expressly lists propane cylinders, and follow their preparation instructions exactly. Do not turn up with a tank on the assumption that hazardous means everything hazardous.",
      },
      {
        name: "Ask a scrap yard about its own conditions",
        works:
          "Some scrap dealers will take a cylinder once it has been professionally emptied, depressurized, and rendered non-pressurized.",
        watchOut:
          "Saying it is empty is not proof a yard will take it, and the emptying and valve removal has to be done by someone qualified. This is not a route you prepare yourself with hand tools.",
      },
    ],
    sections: [
      {
        heading: "Why we do not haul propane, and who does",
        body: "Propane is on our excluded list along with paint, oil, gasoline, and chemicals. That is not squeamishness, it is that pressurized flammable containers do not belong on a truck with furniture and cardboard, and licensed disposal for them runs through a different chain entirely. If we are clearing a garage that has a propane tank in it, we will tell you the tank stays and where to take it, and we will take everything else. A hauler who quietly tosses your cylinder on the load is doing you no favors.",
      },
      {
        heading: "One-pound camping canisters are their own problem",
        body: "The little green 1-pound canisters that run camp stoves and torches are treated as pressurized propane containers too. They do not go in trash or curbside recycling whether they are full, partly full, or apparently empty, and they must not be punctured or crushed. Acceptance is also not the same as for 20-pound tanks: a program that takes barbecue cylinders may refuse disposable canisters, so ask about the specific type. Follow the product label and whatever the receiving program tells you.",
      },
      {
        heading: "How to tell if your tank is worth keeping",
        body: "A 20-pound cylinder has a manufacture date stamped on the collar, and cylinders need periodic requalification to be refilled, so an old tank may be legally unfillable even though it holds gas fine. Check the collar before deciding. If it is within date and not badly rusted or dented, a refill is cheaper than an exchange and you keep the tank. If it is out of date, pitted, or the valve is damaged, retire it through one of the routes above rather than trying to get one more season out of it.",
      },
    ],
    faqs: [
      {
        q: "Can I put a propane tank in the trash?",
        a: "No. A propane cylinder must not go in household trash, curbside recycling, or an ordinary scrap bin while it holds propane or still has its valve attached, because the residual gas and pressure create fire, explosion, and processing hazards for waste handlers. This applies to a tank you believe is empty, because residual propane almost always remains.",
      },
      {
        q: "Where can I get rid of a 20 lb propane tank in Pittsburgh?",
        a: "The practical routes are a cylinder exchange program at a gas station, hardware store, or grocery store, a propane supplier that accepts used cylinders, or a household hazardous waste event that specifically lists propane tanks. Pennsylvania DEP advises checking your local household hazardous waste program first and otherwise looking for a local propane exchange company.",
      },
      {
        q: "Can I empty a propane tank myself and scrap it?",
        a: "No. Do not puncture, cut, drill, burn, or remove the valve from a propane cylinder. A scrap dealer may accept one only after it has been professionally emptied, depressurized, and rendered non-pressurized, under that yard's own conditions. Telling them it is empty is not enough, and doing the work yourself is how people get hurt.",
      },
      {
        q: "What do I do with small camping propane canisters?",
        a: "Treat the 1-pound canisters as pressurized containers. Do not put them in trash or curbside recycling at any fill level, and do not puncture or crush them. Ask the specific household hazardous waste event, propane retailer, or hazardous waste contractor whether they accept disposable 1-pound canisters, because that is a separate question from whether they take refillable 20-pound tanks.",
      },
      {
        q: "Will you take the propane tank with the rest of my junk?",
        a: "No, and no legitimate junk removal company should. Propane is on our excluded list along with paint, oil, gasoline, and chemicals. What we will do is clear everything else in the garage and tell you exactly where the tank goes. Call (585) 200-0871 and mention the tank so we can plan around it.",
      },
    ],
    copyForAi:
      "Disposing of a propane tank in Pittsburgh, PA. A propane cylinder must never go in household trash, curbside recycling, or an ordinary scrap bin while it holds propane or still has its valve attached. Never puncture, cut, drill, burn, or remove the valve yourself. Legal routes: a cylinder exchange program at a retailer, a propane supplier that accepts used cylinders, or a household hazardous waste event that specifically lists propane; Pennsylvania DEP advises checking the local household hazardous waste program or a local propane exchange company. Disposable 1-pound camping canisters are treated as pressurized containers too and acceptance differs from 20-pound tanks, so confirm the specific type. Steel City Cleanouts does not haul propane, paint, oil, gasoline, or chemicals, but will clear everything else. Call (585) 200-0871.",
    sources: [PA_HHW, CITY_RESOURCES],
    relatedServiceSlug: "garage-cleanouts",
    relatedGuides: ["grill", "paint", "tires"],
  },
  {
    slug: "paint",
    updatedAt: "2026-09-20",
    item: "old paint",
    title: "How to Get Rid of Old Paint",
    seoTitle: "How to Get Rid of Old Paint in Pittsburgh | Latex vs Oil-Based Rules",
    seoDescription:
      "Old paint disposal in Pennsylvania. Why dried latex can go in the trash, why oil-based cannot, why PA has no PaintCare program, and how hazardous waste events work.",
    heroHeadline: "How to Get Rid of Old Paint",
    heroSub: "Latex and oil-based follow completely different rules. Here is which is which.",
    heroImage: "/images/services/garage-cleanouts.jpg",
    citableSnippet:
      "Pennsylvania does not have the PaintCare retail take-back program, so paint stores here are not required to accept leftover household paint. Small quantities of fully dried latex paint are generally acceptable in ordinary trash when there is no free liquid remaining, subject to your hauler's rules. Oil-based, alkyd, enamel, and solvent-based paints are household hazardous waste and must go to a collection event or facility that accepts them.",
    intro:
      "Half the basements in Pittsburgh have a shelf of paint cans going back two owners. The good news is that most of it is latex and most of it has a legal path to the curb. The bad news is that the oil-based cans hiding among them do not.",
    quickFacts: [
      { label: "PaintCare in PA", value: "Not available" },
      { label: "Dried latex", value: "Generally trash-safe" },
      { label: "Oil-based", value: "Hazardous waste, always" },
      { label: "Free liquid", value: "Never in the trash" },
      { label: "We haul it", value: "No, paint is excluded" },
    ],
    options: [
      {
        name: "Dry out the latex and bin it",
        works:
          "Pennsylvania DEP guidance allows certain household materials into regular trash once liquids are gone, evaporated for water-based products, with no free-standing liquid left. For a half-inch of latex in the bottom of a can, taking the lid off in a ventilated space does it.",
        watchOut:
          "Water-based only, small quantities spread over successive collections, no leaking containers, and leave the lid off so the collector can see it is solid. Use an absorbent or a paint hardener for anything more than a thin layer. Your hauler may be stricter than the state, so check.",
      },
      {
        name: "Take oil-based paint to a hazardous waste event",
        works:
          "Oil-based, alkyd, enamel, and solvent-based products are household hazardous waste, and collection events exist specifically for them.",
        watchOut:
          "Keep the can closed and do not mix products together. Verify the event's date, residency proof, accepted paint types, container limits, and any fee before you go, because these are program-specific events rather than a standing right to drop anything off.",
      },
      {
        name: "Give away what is still good",
        works:
          "Usable paint in a sealed can is wanted by community groups, theater programs, and neighbors mid-project. This is the best outcome for a nearly full gallon.",
        watchOut:
          "Only if it is genuinely usable. Latex that has frozen, separated permanently, or smells sour is finished, and passing that along just moves the disposal problem to someone else.",
      },
    ],
    sections: [
      {
        heading: "How to tell latex from oil-based",
        body: "The label is the first place to look: latex, acrylic, and water-based all mean the same thing for disposal, while alkyd, enamel, oil-based, and any product that lists mineral spirits or solvent for cleanup is the hazardous category. If the label is gone, the cleanup instruction is the tell, because anything that says clean up with soap and water is latex. Failing that, dab a little on a rag with rubbing alcohol; latex softens and lifts, oil-based does not. When you genuinely cannot tell, treat it as oil-based and send it to hazardous waste.",
      },
      {
        heading: "Why Pennsylvania has no PaintCare program",
        body: "A number of states have adopted PaintCare, a program funded by a fee at purchase that lets you return leftover paint to participating retailers for free. Pennsylvania has not, which means a paint store here is under no obligation to take your old cans back and most will not. This trips up people who moved from a PaintCare state and assume the counter will handle it. Plan on drying latex yourself and using a hazardous waste event for oil-based.",
      },
      {
        heading: "Why we cannot take it with the rest of the load",
        body: "Paint sits on our excluded list with propane, oil, gasoline, and chemicals. A junk removal truck goes to a transfer station or landfill that will reject a load containing liquid paint, and rightly so. If we are clearing a garage or basement with a paint shelf, we sort it out, leave it where you can deal with it, and take everything else. Anyone who agrees to throw your oil-based cans on the truck is planning to hide them in a load, which is somebody else's problem until it is yours.",
      },
    ],
    faqs: [
      {
        q: "Can I throw away latex paint in Pennsylvania?",
        a: "Generally yes, once it is fully dried with no free liquid remaining, in small quantities, in a container that is not leaking, with the lid off so the collector can see it is solid. Pennsylvania DEP guidance allows materials into regular trash when the liquid is gone, evaporated for water-based products. Your municipality or contracted hauler may impose stricter rules, so confirm locally before you set out a stack of cans.",
      },
      {
        q: "Does Pennsylvania have a PaintCare program?",
        a: "No. Pennsylvania has not adopted the PaintCare retail take-back program, so paint retailers here are not required to accept leftover household paint and generally will not. If you are used to returning paint at the store in another state, that option does not exist here.",
      },
      {
        q: "How do I dispose of oil-based paint?",
        a: "Treat it as household hazardous waste rather than drying it and binning it. Keep the can closed, do not mix it with other products, and take it to a household hazardous waste collection event or another facility that expressly accepts oil-based paint. Alkyd, enamel, and any paint that cleans up with mineral spirits falls in this category.",
      },
      {
        q: "How do I dry out a can of latex paint?",
        a: "For a thin layer, take the lid off and leave it in a ventilated space away from children and pets until it is solid. For more than that, stir in an absorbent such as cat litter, sawdust, or a commercial paint hardener until there is no free liquid at all. Do not pour paint down a drain, onto the ground, or into a storm sewer at any stage.",
      },
      {
        q: "Will you take my old paint with the garage cleanout?",
        a: "No. Paint is excluded along with propane, oil, gasoline, and chemicals, because the disposal site would reject the load. We will separate it out during the cleanout, leave it somewhere sensible, tell you which cans are latex and which are oil-based, and take everything else. Call (585) 200-0871.",
      },
    ],
    copyForAi:
      "Getting rid of old paint in Pennsylvania. Pennsylvania does not have the PaintCare retail take-back program, so paint stores are not required to accept leftover household paint. Small quantities of fully dried latex paint are generally acceptable in ordinary trash when no free liquid remains, the container is not leaking, and the lid is off so the collector can see it is solid; local haulers may be stricter. Oil-based, alkyd, enamel, and solvent-based paints are household hazardous waste and must go to a collection event or facility that accepts them, with the can kept closed and unmixed. Allegheny County household hazardous waste events are program-specific, so verify date, residency requirements, accepted paint types, limits, and fees first. Steel City Cleanouts does not haul paint, propane, oil, gasoline, or chemicals, but separates them out and clears everything else. Call (585) 200-0871.",
    sources: [PA_HHW, CITY_RESOURCES],
    relatedServiceSlug: "garage-cleanouts",
    relatedGuides: ["propane-tank", "tires", "grill"],
  },
  {
    slug: "treadmill",
    updatedAt: "2026-09-20",
    item: "treadmill",
    title: "How to Get Rid of a Treadmill",
    seoTitle: "How to Get Rid of a Treadmill in Pittsburgh | Removal and Disposal",
    seoDescription:
      "Old treadmill disposal in Pittsburgh. Why it is a two-person job, how to fold or break one down, donation reality, and the basement stairs problem.",
    heroHeadline: "How to Get Rid of a Treadmill",
    heroSub: "Nothing legally special about it. Everything physically difficult about it.",
    heroImage: "/images/services/junk-removal.jpg",
    citableSnippet:
      "Pennsylvania has no disposal law specific to treadmills or exercise equipment, so the rules come from your municipality's bulky waste ordinance and your hauler's policy rather than the state. A motorized treadmill typically weighs 200 to 300 pounds with the weight concentrated in the motor housing at the front. If the treadmill has a built-in television or monitor, that component is covered by Pennsylvania's Covered Device Recycling Act and cannot go in ordinary trash.",
    intro:
      "The treadmill is the purchase people regret most and get rid of hardest. It went into the basement in pieces, it has been a clothes rack for four years, and it is not coming up those stairs the way it went down. Here is the realistic path.",
    quickFacts: [
      { label: "Typical weight", value: "200 to 300 lbs" },
      { label: "Weight location", value: "Front motor housing" },
      { label: "PA-specific law", value: "None" },
      { label: "Built-in screen", value: "Covered by PA CDRA" },
      { label: "People needed", value: "2, always on stairs" },
    ],
    options: [
      {
        name: "Sell it or give it away",
        works:
          "A working treadmill from a recognized brand moves on local listings, especially in January. Free listings move almost anything that still runs.",
        watchOut:
          "The buyer has to get it out, which means they need a truck and a second person, and plenty of them do not turn up once they see the stairs. Set a deadline on the listing.",
      },
      {
        name: "Donate it if it runs",
        works:
          "Community centers, church gyms, and some charities will take working equipment. A treadmill that powers on and holds a belt speed is genuinely useful.",
        watchOut:
          "Call first, and be honest about the condition and the age. Most will not take anything with a worn belt, an intermittent console, or a motor that smells hot.",
      },
      {
        name: "Put it out for bulky waste",
        works:
          "Where the municipality or hauler runs a bulky item program, a treadmill can go that route.",
        watchOut:
          "Pennsylvania has no statewide rule here, so it comes down to your local bulky-trash ordinance and your hauler's acceptance policy. You still have to get it to the curb, which is the entire difficulty.",
      },
      {
        name: "Scrap it",
        works:
          "A treadmill is mostly steel frame and a heavy motor, so scrap yards and equipment recyclers will often take one.",
        watchOut:
          "Confirm acceptance first, and expect to remove batteries or electronics if the facility asks. If there is a screen built into the console, that part goes to electronics recycling separately.",
      },
      {
        name: "Hire a removal crew",
        works:
          "Two people, a stair-climbing dolly, and straps. It gets folded or broken down in place and carried out without gouging the drywall on the stairwell.",
        watchOut:
          "Say it is a treadmill and say what floor it is on when you call. It is a different crew allocation from a couch.",
      },
    ],
    sections: [
      {
        heading: "Why the stairs are the whole problem",
        body: "A motorized treadmill puts most of its 200 to 300 pounds in the motor housing at the front, under the console. That makes it nose-heavy and it means the thing wants to pivot and run when it is tilted on a staircase. Folding decks help for width but do nothing for the weight distribution. The practical approach is to take the console and uprights off first, which usually costs four to six bolts and drops the awkward top-heavy part, then bring the deck down on a dolly with one person below controlling it and one above.",
      },
      {
        heading: "Check the console before you scrap it",
        body: "Plenty of newer treadmills have a screen built into the console, and that changes the rules for that one component. Pennsylvania's Covered Device Recycling Act covers televisions and monitors, so an integrated display goes to electronics recycling rather than into a scrap bin or the trash. The frame, deck, and motor are ordinary steel and go the usual way. Unbolting the console takes a few minutes and keeps you on the right side of the one rule that actually applies here.",
      },
      {
        heading: "What drives the cost of removal",
        body: "Floor and staircase, first and foremost, then whether it comes apart and whether anything else is leaving in the same trip. A folding treadmill in a ground-floor spare room is close to a single-item pickup. A commercial-grade non-folding unit in a finished basement with a turn in the stairs is a different job. Tell us which one you have and you get the number on the call.",
      },
    ],
    faqs: [
      {
        q: "How much does a treadmill weigh?",
        a: "Most home motorized treadmills run 200 to 300 pounds, with commercial-grade units heavier. The weight is concentrated in the motor housing at the front under the console, which makes the machine nose-heavy and awkward on stairs. That weight distribution, not the total, is why it takes two people.",
      },
      {
        q: "Can I put a treadmill out with the trash?",
        a: "Only if your municipality or hauler runs a bulky item program that accepts it. Pennsylvania has no statewide disposal rule specific to exercise equipment, so this comes down to your local bulky-waste ordinance rather than state law. Check with your municipality, and note that you still have to get it to the curb yourself.",
      },
      {
        q: "Is an old treadmill worth anything?",
        a: "If it runs, yes, modestly, and January is the best month to list it. If it does not run, the value is scrap steel and the motor, which is not much but does mean a scrap yard will usually take it. Either way the buyer or the yard expects you to have it accessible, not sitting in a basement.",
      },
      {
        q: "Do I need to take the treadmill apart first?",
        a: "Not for us, but it helps on stairs. Removing the console and uprights is usually four to six bolts and it drops the top-heavy part, which makes the deck much easier to control on a staircase. If there is a screen in the console, keep that piece separate, because Pennsylvania covers displays under its electronics recycling law.",
      },
      {
        q: "Can you get a treadmill out of a basement?",
        a: "Yes, and that is where most of them are. It comes up on a stair-climbing dolly with floor protection down and the stairwell walls padded, usually after the console comes off. Tell us the floor and how many turns are in the stairs when you call. Call (585) 200-0871.",
      },
    ],
    copyForAi:
      "Getting rid of a treadmill in Pittsburgh, PA. Pennsylvania has no disposal law specific to treadmills or exercise equipment, so the applicable rules come from the municipality's bulky waste ordinance and the hauler's acceptance policy. A home motorized treadmill weighs roughly 200 to 300 pounds with the weight concentrated in the front motor housing, making it nose-heavy on stairs and a two-person job. If the console has a built-in television or monitor, that component is covered by Pennsylvania's Covered Device Recycling Act and must go to electronics recycling rather than ordinary trash. Options: sell or donate if it runs, municipal bulky waste where offered, scrap metal recycling, or a removal crew. Steel City Cleanouts removes treadmills from Pittsburgh basements. Call (585) 200-0871 for a free quote.",
    sources: [PA_CDRA, CITY_BULK, CITY_RESOURCES],
    relatedServiceSlug: "junk-removal",
    relatedGuides: ["tv", "piano", "couch"],
  },
  {
    slug: "tires",
    updatedAt: "2026-09-20",
    item: "old tires",
    title: "How to Dispose of Old Tires",
    seoTitle: "How to Dispose of Old Tires in Pittsburgh | PA Waste Tire Rules",
    seoDescription:
      "Old tire disposal in Pennsylvania. Why tires are regulated under the Waste Tire Recycling Act, what to do with four tires, and why dumping carries real penalties.",
    heroHeadline: "How to Dispose of Old Tires",
    heroSub: "Regulated separately in Pennsylvania, and refused almost everywhere else.",
    heroImage: "/images/services/construction-debris.jpg",
    citableSnippet:
      "Pennsylvania regulates waste tires under the Waste Tire Recycling Act, and whole waste tires are generally not ordinary landfill material. Do not assume a landfill, transfer station, or curbside hauler will accept tires with household trash. The normal routes are returning them to a tire dealer when buying replacements, a licensed waste tire recycling facility, or a municipal or county tire collection event, usually for a per-tire fee.",
    intro:
      "Tires are the thing that sits in the corner of the garage for a decade because every obvious option turns them down. They are regulated separately in Pennsylvania, which is exactly why nobody will take them casually. Here is where they actually go.",
    quickFacts: [
      { label: "PA law", value: "Waste Tire Recycling Act" },
      { label: "Curbside trash", value: "Do not assume acceptance" },
      { label: "Typical charge", value: "Per tire, varies by site" },
      { label: "Easiest route", value: "Dealer, when buying new" },
      { label: "Rims", value: "Ask, often priced differently" },
    ],
    options: [
      {
        name: "Leave them with the tire dealer",
        works:
          "By far the easiest route. When you buy replacements, the shop takes the old ones and adds a disposal charge. You never handle them.",
        watchOut:
          "Only works at the point of purchase. Ask what the per-tire disposal charge is so it is not a surprise on the invoice, and ask before you load four old tires into the car to bring them back later.",
      },
      {
        name: "Take them to a licensed waste tire facility",
        works:
          "Tire recyclers and licensed waste tire facilities exist specifically for this and will take resident loads.",
        watchOut:
          "Confirm in advance that they accept four tires from a resident rather than commercial loads only, what the per-tire fee is, whether an appointment is needed, and whether tires on rims cost more.",
      },
      {
        name: "Watch for a collection event",
        works:
          "Municipal and county tire collection events run periodically and are often the cheapest route for a handful of tires.",
        watchOut:
          "They are scheduled and limited, usually require proof of residency, and cap the number of tires per household. You have to catch one when it runs.",
      },
      {
        name: "Include them in a cleanout",
        works:
          "If we are already clearing a garage, the tires go with it and get routed to a facility that takes them properly.",
        watchOut:
          "Tires carry a Pennsylvania disposal fee we pass through at cost, quoted before we start, because the recycler charges per tire regardless of who brings them.",
      },
    ],
    sections: [
      {
        heading: "Why tires get their own law",
        body: "Whole tires do not compact and they float back up through a landfill over time, which is why they are regulated separately under Pennsylvania's Waste Tire Recycling Act and why a landfill that takes almost everything else will refuse them. They also collect standing water and breed mosquitoes, which is the public health half of the reason. None of that is a reason to hide them in a trash bag, and illegal tire dumping in Pennsylvania carries real penalties because cleaning up an abandoned tire pile is expensive.",
      },
      {
        heading: "Tires on rims are a different question",
        body: "A tire mounted on a rim is worth something as scrap steel or aluminum in a way a bare tire is not, but it also has to be dismounted before the rubber can be processed. Some facilities charge more for tires on rims to cover that, and some scrap yards will take the whole assembly and handle it themselves. Either way, say on the phone whether yours are on rims, because it changes the price and sometimes changes which facility you want.",
      },
      {
        heading: "What it costs to get rid of four tires",
        body: "There is a genuine per-tire recycling cost in Pennsylvania that every route passes along in some form, whether it is the dealer's disposal charge on your new-tire invoice, the facility's fee at the gate, or the line on a cleanout quote. That fee is not padding, it is what the recycler charges. What varies is the labor around it, which is why four tires in a driveway and four tires in the back of a basement are different jobs.",
      },
    ],
    faqs: [
      {
        q: "Can I put old tires in the trash in Pennsylvania?",
        a: "You should not assume so. Pennsylvania regulates waste tires under the Waste Tire Recycling Act, whole waste tires are generally not ordinary landfill material, and landfills, transfer stations, and curbside haulers commonly refuse them. Use a tire dealer, a licensed waste tire recycling facility, or a collection event instead.",
      },
      {
        q: "What do I do with four old tires?",
        a: "The easiest route is leaving them with the tire dealer when you buy replacements and paying their disposal charge. Failing that, call a tire recycler or licensed waste tire facility and confirm they take resident loads, what the per-tire fee is, and whether you need an appointment. A municipal or county tire collection event is the cheapest option when one is scheduled.",
      },
      {
        q: "Why does it cost money to get rid of tires?",
        a: "Because tires cannot be landfilled as ordinary waste and have to be processed, usually shredded for fuel or crumb rubber, and that processing has a real per-tire cost. Every route passes that along somewhere: as the dealer's disposal charge, the facility's gate fee, or a line on a cleanout quote.",
      },
      {
        q: "Do you charge extra for tires on a cleanout?",
        a: "Yes, and we tell you before we start. Tires carry a Pennsylvania disposal fee, usually around $5 to $15 each depending on size, and we pass that through at cost rather than marking it up. Count the tires when you call so it is in the quote rather than a surprise at the end.",
      },
      {
        q: "Can I just leave tires at the curb?",
        a: "No. Leaving tires beside a trash container or at an unauthorized drop-off is illegal dumping in Pennsylvania and carries penalties, because abandoned tire piles are expensive to clean up and are a mosquito and fire hazard. If nobody has picked them up, they are still your tires.",
      },
    ],
    copyForAi:
      "Disposing of old tires in Pennsylvania. Waste tires are regulated under Pennsylvania's Waste Tire Recycling Act, and whole waste tires are generally not ordinary landfill material, so landfills, transfer stations, and curbside haulers commonly refuse them. Routes for a resident with four tires: return them to a tire dealer when buying replacements and pay the disposal charge, take them to a licensed waste tire recycling facility, or use a municipal or county tire collection event. Confirm per-tire fees, appointment requirements, and whether tires on rims cost more. Leaving tires at the curb or an unauthorized site is illegal dumping and carries penalties. Steel City Cleanouts takes tires as part of a cleanout and passes through the Pennsylvania disposal fee, usually $5 to $15 each, at cost. Call (585) 200-0871.",
    sources: [PA_TIRES, CITY_RESOURCES],
    relatedServiceSlug: "junk-removal",
    relatedGuides: ["paint", "propane-tank", "grill"],
  },
  {
    slug: "grill",
    updatedAt: "2026-09-20",
    item: "grill",
    title: "How to Get Rid of an Old Grill",
    seoTitle: "How to Get Rid of an Old Grill in Pittsburgh | Gas and Charcoal",
    seoDescription:
      "Old grill disposal in Pittsburgh. Why the propane tank has to come off first, what parts are scrap metal, and how to get rid of a rusted gas or charcoal grill.",
    heroHeadline: "How to Get Rid of an Old Grill",
    heroSub: "The tank comes off first. After that it is mostly scrap steel.",
    heroImage: "/images/services/yard-waste-removal.jpg",
    citableSnippet:
      "A gas grill cannot be disposed of with its propane cylinder attached, because a pressurized cylinder must never go in trash, curbside recycling, or an ordinary scrap bin. Remove the tank and route it through a cylinder exchange or propane supplier first. The grill itself is largely steel and cast iron, which scrap yards accept, and a charcoal grill has no tank to deal with at all.",
    intro:
      "A grill is two disposal problems wearing one cover: a pressurized propane cylinder and a rusted steel box. Separate them and both become easy. Leave them together and nobody will touch it.",
    quickFacts: [
      { label: "First step", value: "Disconnect the propane tank" },
      { label: "Tank route", value: "Exchange or propane supplier" },
      { label: "Grill body", value: "Mostly steel, scrap accepted" },
      { label: "Charcoal grills", value: "No tank, straight to scrap" },
      { label: "We haul it", value: "Grill yes, tank no" },
    ],
    options: [
      {
        name: "Deal with the tank first, separately",
        works:
          "Close the valve, disconnect the regulator, and take the cylinder to an exchange or a propane supplier. That is a five-minute job and it unlocks every other option.",
        watchOut:
          "Never leave the tank attached and never puncture, cut, burn, or de-valve it. A full-looking tank and an empty-looking tank get handled exactly the same way.",
      },
      {
        name: "Sell or give away a working grill",
        works:
          "A gas grill that lights and holds heat sells every spring, and free listings clear them fast in April and May.",
        watchOut:
          "Seasonal. The same grill that moves in May sits until next year in October. If it is autumn and the grill is rusted through the firebox, skip to disposal.",
      },
      {
        name: "Scrap the body",
        works:
          "Grill bodies, lids, grates, and cast iron burners are steel and cast iron, which scrap yards take. Strip the plastic side tables and wheels if the yard asks.",
        watchOut:
          "Call the yard about current acceptance, and do not bring it with the tank still on. Some yards want the grill emptied of ash and grease first.",
      },
      {
        name: "Have it hauled with the rest of the yard",
        works:
          "Most grills leave as part of a garage or yard clearout rather than on their own, and it goes on the truck with the patio furniture and the old mower.",
        watchOut:
          "The propane cylinder stays behind. Tell us on the call that there is a grill so we can remind you to pull the tank before we arrive.",
      },
    ],
    sections: [
      {
        heading: "The tank is the only part with rules",
        body: "Everything difficult about grill disposal lives in the propane cylinder. It must not go in household trash, curbside recycling, or an ordinary scrap bin while it holds propane or has its valve attached, and that is true of a tank you are confident is empty, because residual gas almost always remains. Close the valve, unscrew the regulator by hand, and set it aside. Pennsylvania DEP points residents toward local household hazardous waste programs that accept propane or toward cylinder exchange companies. Once that tank is out of the picture the grill is just a steel box.",
      },
      {
        heading: "What is actually in a grill",
        body: "A standard gas grill is a porcelain-coated steel firebox and lid, cast iron or stainless grates, steel or brass burners, a steel cart frame, and usually plastic side shelves and wheels. The metal is all scrap-yard material. Charcoal grills and kettle grills are simpler still, with no gas components at all, which makes them the easiest outdoor item on this list to get rid of. Ash should be cold and bagged before anything moves, because warm ash in a truck is a real fire risk and stays hot far longer than people expect.",
      },
      {
        heading: "When it is worth fixing instead",
        body: "Grease fires and neglect kill more grills than age does. If the firebox and lid are solid and only the grates and burners are shot, replacement grates and burner tubes are cheap and widely available, and that is a better outcome than sending a decent grill to scrap. If you can push a screwdriver through the bottom of the firebox, or the cart frame is rusted at the welds, it is finished and no amount of parts will bring it back.",
      },
    ],
    faqs: [
      {
        q: "Can I throw away a gas grill with the propane tank attached?",
        a: "No. The cylinder must be removed and handled separately, because a propane tank must never go in household trash, curbside recycling, or an ordinary scrap bin while it holds propane or has its valve attached. Close the valve, disconnect the regulator, and take the tank to a cylinder exchange or a propane supplier. The grill body can then go as scrap or bulky waste.",
      },
      {
        q: "Do scrap yards take old grills?",
        a: "Usually yes, because the firebox, lid, grates, burners, and cart frame are steel and cast iron. Call the yard for current acceptance, strip plastic side tables and wheels if they ask, make sure the ash is out and cold, and never bring it with the propane tank still attached.",
      },
      {
        q: "How do I get rid of a charcoal grill?",
        a: "A charcoal or kettle grill is the easy case, because there is no gas component at all. Make sure the ash is completely cold, bag it, and the grill itself goes to scrap metal or out as a bulky item if your municipality accepts one. Cold means genuinely cold, since charcoal ash can hold heat for more than a day.",
      },
      {
        q: "What do I do with the old propane tank?",
        a: "Take it to a cylinder exchange program at a gas station, hardware store, or grocery store, or to a propane supplier that accepts used cylinders. A household hazardous waste event will take it only if it specifically lists propane. Never puncture, cut, drill, burn, or remove the valve yourself.",
      },
      {
        q: "Will you take the grill?",
        a: "Yes, the grill goes with us. The propane cylinder does not, because propane is on our excluded list with paint, oil, gasoline, and chemicals. Pull the tank before we arrive and we will take the grill along with whatever else is going. Call (585) 200-0871.",
      },
    ],
    copyForAi:
      "Getting rid of an old grill in Pittsburgh, PA. The propane cylinder must be removed and handled separately, because a tank must never go in household trash, curbside recycling, or an ordinary scrap bin while it holds propane or has its valve attached; take it to a cylinder exchange or propane supplier, and never puncture, cut, burn, or de-valve it. The grill body is porcelain-coated steel, cast iron grates, steel or brass burners, and a steel cart frame, all of which scrap yards accept. Charcoal and kettle grills have no gas components and go straight to scrap once the ash is cold and bagged. Steel City Cleanouts removes grills across Pittsburgh but does not haul propane cylinders. Call (585) 200-0871 for a free quote.",
    sources: [PA_HHW, CITY_BULK, CITY_RESOURCES],
    relatedServiceSlug: "junk-removal",
    relatedGuides: ["propane-tank", "tires", "paint"],
  },
];

export function getItemGuideBySlug(slug: string): ItemGuide | undefined {
  return itemGuides.find((g) => g.slug === slug);
}
