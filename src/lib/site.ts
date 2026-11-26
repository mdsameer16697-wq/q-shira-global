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
  { to: "/capabilities", label: "Capabilities" },
  { to: "/design-innovation", label: "How We Do" },
  { to: "/sustainability-csr", label: "We Care" },
  { to: "/contact-us", label: "Contact Us" },
] as const;

export const capabilities = [
  { title: "Design & Product Development", text: "We work alongside your design team on trends, fit and technical detail, so ideas become garments that sell." },
  { title: "Fabric Sourcing", text: "Fabrics and trims are chosen for feel, strength and value, and matched to the look each brand wants." },
  { title: "Knitting", text: "Jersey, rib, fleece and terry, with or without stretch, kept close to the sewing floor." },
  { title: "Cutting", text: "Digital patterns and careful marker planning give accurate cuts and less wasted fabric." },
  { title: "Stitching", text: "Skilled operators and well-kept machines give clean, consistent seams on every piece." },
  { title: "Embroidery & Surface Work", text: "Machine precision with hand-finished detail for garments that need something extra." },
  { title: "Dyeing & Washing", text: "Colour and hand-feel developed to your standard and held steady across the order." },
  { title: "Quality Checks", text: "Checks during making and a full inspection at the end, against your own standards." },
  { title: "Finishing & Packing", text: "Pressing, trimming and packing done to your instructions, ready for the shop floor." },
  { title: "Export & Shipping", text: "Clear timelines, honest updates and paperwork handled, from our door to yours." },
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
