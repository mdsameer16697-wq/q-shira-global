import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { SitePath } from "@/lib/site";

type Tab = { to: SitePath; label: string };

export function PageHero({ title, tabs }: { title: string; tabs?: readonly Tab[] }) {
  return (
    <section className="container-site rise pb-14 pt-16 text-center lg:pt-24">
      <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl">{title}</h1>
      {tabs && (
        <nav className="mt-10 flex flex-wrap justify-center gap-1">
          {tabs.map((t) => (
            <Link key={t.to} to={t.to} className="pill">
              {t.label}
            </Link>
          ))}
        </nav>
      )}
    </section>
  );
}

export function Banner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="container-site">
      <div className="img-zoom aspect-[16/9] lg:aspect-[21/9]">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export function Intro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <section className="container-site py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h2 className="display text-3xl lg:text-5xl">{title}</h2>
        {children && <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function Split({
  src,
  alt,
  eyebrow,
  title,
  children,
  reverse,
  tall,
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  reverse?: boolean;
  tall?: boolean;
}) {
  return (
    <section className="container-site py-12 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className={`img-zoom ${tall ? "aspect-[3/4]" : "aspect-[4/3]"} ${reverse ? "lg:order-2" : ""}`}>
          <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h2 className="display text-3xl lg:text-[2.75rem]">{title}</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function CardGrid({ items, cols = 3 }: { items: { title: string; text: string }[]; cols?: 2 | 3 | 4 }) {
  const c = cols === 4 ? "lg:grid-cols-4" : cols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <section className="container-site py-10">
      <div className={`grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 ${c}`}>
        {items.map((i, n) => (
          <div key={i.title} className="bg-surface p-8 transition-colors hover:bg-accent lg:p-10">
            <span className="text-sm font-semibold text-plum">{String(n + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-xl font-semibold">{i.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <section className="container-site py-12">
      <blockquote className="mx-auto max-w-4xl border-l-2 border-plum pl-8 text-2xl font-medium leading-snug lg:text-3xl">
        {children}
      </blockquote>
    </section>
  );
}

export function ProductPage({
  src,
  alt,
  title,
  lead,
  paras,
  ranges,
  gallery,
}: {
  src: string;
  alt: string;
  title: string;
  lead: string;
  paras: string[];
  ranges: string[];
  gallery: string[];
}) {
  return (
    <>
      <section className="container-site pb-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div className="img-zoom aspect-[3/4]">
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          </div>
          <div className="lg:pt-8">
            <h2 className="display text-3xl lg:text-5xl">{title}</h2>
            <p className="mt-8 text-xl leading-relaxed">{lead}</p>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {paras.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {ranges.map((r) => (
                <li key={r} className="rounded-full border border-plum px-5 py-2 font-medium text-plum">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="container-site grid gap-6 pb-10 sm:grid-cols-3">
        {gallery.map((g, i) => (
          <div key={i} className="img-zoom aspect-[4/5]">
            <img src={g} alt={`${alt} ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </section>
    </>
  );
}
