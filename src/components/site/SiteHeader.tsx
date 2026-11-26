import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { mainNav } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = mainNav.filter((n) => n.to !== "/contact-us");
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-site flex h-18 items-center justify-between gap-4 lg:h-22">
        <Logo />
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-surface p-1.5 lg:flex">
          {links.map((n) => (
            <Link key={n.to} to={n.to} className="nav-link">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact-us" className="btn-arrow hidden lg:inline-flex">
          Enquire Now
        </Link>
        <button
          className="grid h-11 w-11 place-items-center rounded-full bg-brand text-primary-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="rise absolute inset-x-0 top-full flex flex-col bg-brand-deep px-5 pb-8 pt-4 text-primary-foreground shadow-soft lg:hidden">
          {mainNav.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-primary-foreground/15 py-4 font-[family-name:var(--font-display)] text-2xl data-[status=active]:text-highlight"
            >
              <span className="font-sans text-xs text-highlight">{String(i + 1).padStart(2, "0")}</span>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
