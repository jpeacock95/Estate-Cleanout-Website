export const siteConfig = {
  brand: "Steel City Cleanouts",
  tagline: "Same-Day Junk Removal & Estate Cleanouts",
  location: "Pittsburgh & Surrounding Areas",
  url: "https://www.steelcitycleanouts.com",
  phone: {
    display: "(585) 200-0871",
    tel: "5852000871",
  },
  email: "hello@steelcitycleanouts.com",
  hours: {
    opens: "07:00",
    closes: "20:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    display: "7 days a week, 7am to 8pm Eastern",
  },
  priceRange: "$$",
  geo: {
    latitude: 40.6845,
    longitude: -80.1073,
  },
  address: {
    locality: "Cranberry Township",
    region: "PA",
    postalCode: "16066",
    country: "US",
  },
  foundingYear: 2026,
  sameAs: [] as string[],
  nav: [
    { label: "SERVICES", href: "/services" },
    { label: "PRICING", href: "/pricing" },
    { label: "SERVICE AREA", href: "/service-areas" },
    { label: "ABOUT", href: "/about" },
    { label: "REVIEWS", href: "/reviews" },
    { label: "CONTACT", href: "/contact" },
  ],
} as const;
