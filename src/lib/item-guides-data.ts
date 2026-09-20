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

export const itemGuides: ItemGuide[] = [
  {
    slug: "couch",
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
    item: "mattress",
    title: "How to Get Rid of an Old Mattress",
    seoTitle: "How to Get Rid of an Old Mattress in Pittsburgh | Disposal Options",
    seoDescription:
      "How to dispose of an old mattress in Pittsburgh. City bulk collection rules, why Pennsylvania has no mattress recycling law, donation limits, and when to call a hauler.",
    heroHeadline: "How to Get Rid of an Old Mattress",
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
];

export function getItemGuideBySlug(slug: string): ItemGuide | undefined {
  return itemGuides.find((g) => g.slug === slug);
}
