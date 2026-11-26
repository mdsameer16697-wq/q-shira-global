export const COMPANY = "Q Shira Creation";
// Placeholder until the owner supplies real contact details.
export const CONTACT_EMAIL = "info@qshiracreation.com";

export const aboutTabs = [
  { to: "/about-us", label: "Overview" },
  { to: "/leadership", label: "Leadership" },
  { to: "/divisions", label: "Divisions" },
  { to: "/our-clients", label: "Clients" },
  { to: "/awards", label: "Awards" },
  { to: "/our-team", label: "People" },
] as const;

export const productTabs = [
  { to: "/women-clothing", label: "Womens" },
  { to: "/men-clothing", label: "Mens" },
  { to: "/kids-clothing", label: "Kids" },
] as const;

export const processTabs = [
  { to: "/design-innovation", label: "Design & Innovation" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/quality", label: "Quality" },
] as const;

export const mainNav = [
  { to: "/about-us", label: "Who We Are" },
  { to: "/men-clothing", label: "What We Do" },
  { to: "/design-innovation", label: "How We Do" },
  { to: "/sustainability-csr", label: "We Care" },
  { to: "/contact-us", label: "Contact Us" },
] as const;

export type SitePath =
  | (typeof aboutTabs)[number]["to"]
  | (typeof productTabs)[number]["to"]
  | (typeof processTabs)[number]["to"]
  | (typeof mainNav)[number]["to"];

export function seo(title: string, description: string) {
  const full = `${title} | ${COMPANY}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
