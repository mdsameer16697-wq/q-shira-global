import { Link } from "@tanstack/react-router";
import { aboutTabs, processTabs, productTabs, COMPANY, CONTACT_EMAIL } from "@/lib/site";
import { Logo } from "./Logo";

const groups = [
  { title: "Who We Are", links: aboutTabs },
  { title: "What We Do", links: productTabs },
  { title: "How We Do", links: processTabs },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden rounded-t-[2.5rem] bg-brand-deep text-primary-foreground">
      <div className="dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-site relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5 lg:py-20">
        <div className="lg:col-span-2">
          <Logo onDark />
          <p className="mt-6 max-w-sm text-lg opacity-80">
            Clothing for men, women and kids, made with care and exported with pride.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-5 inline-block border-b border-highlight pb-1 font-semibold text-highlight">
            {CONTACT_EMAIL}
          </a>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-highlight">{g.title}</h3>
            <ul className="mt-5 space-y-3">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="opacity-80 transition hover:pl-1.5 hover:text-highlight hover:opacity-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative border-t border-primary-foreground/15">
        <div className="container-site flex flex-col justify-between gap-3 py-6 text-sm opacity-75 sm:flex-row">
          <span>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</span>
          <span className="flex gap-6">
            <Link to="/sustainability-csr" className="hover:text-highlight">We Care</Link>
            <Link to="/contact-us" className="hover:text-highlight">Contact Us</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
