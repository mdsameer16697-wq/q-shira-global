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
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-6 max-w-sm text-muted-foreground">
            Clothing for men, women and kids, made with care and exported with pride.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-block font-medium text-plum">
            {CONTACT_EMAIL}
          </a>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="nav-link text-plum">{g.title}</h3>
            <ul className="mt-5 space-y-3">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-plum">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col justify-between gap-3 py-6 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</span>
          <span className="flex gap-6">
            <Link to="/sustainability-csr" className="hover:text-plum">We Care</Link>
            <Link to="/contact-us" className="hover:text-plum">Contact Us</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
