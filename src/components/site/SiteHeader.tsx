import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { mainNav } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur">
        <div className="container-site flex h-20 items-center justify-between lg:h-28">
          <Logo />
          <nav className="hidden items-center gap-10 lg:flex">
            {mainNav.map((n) => (
              <Link key={n.to} to={n.to} className="nav-link">
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="container-site flex flex-col gap-5 border-t border-border py-6 lg:hidden">
            {mainNav.map((n) => (
              <Link key={n.to} to={n.to} className="nav-link" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <Link
        to="/contact-us"
        className="fixed right-0 top-1/3 z-50 hidden whitespace-nowrap rounded-l-md bg-primary px-2.5 py-4 text-sm text-primary-foreground [writing-mode:vertical-rl] rotate-180 hover:bg-plum-deep md:block"
      >
        Enquire Now
      </Link>
    </>
  );
}
