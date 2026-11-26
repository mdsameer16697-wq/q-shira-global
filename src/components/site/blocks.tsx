import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { SitePath } from "@/lib/site";

type Tab = { to: SitePath; label: string };

export function PageHero({ title, tabs }: { title: string; tabs?: readonly Tab[] }) {
  return (
    <section className="relative mb-14 overflow-hidden rounded-b-[2.5rem] bg-brand-deep text-primary-foreground">
      <div className="dots pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="container-site rise relative pb-12 pt-14 lg:pb-16 lg:pt-20">
        <span className="block h-0.5 w-14 bg-highlight" />
        <h1 className="mt-6 text-5xl font-medium lg:text-7xl">{title}</h1>
        {tabs && (
          <nav className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
            {tabs.map((t) => (
              <Link key={t.to} to={t.to} className="pill">
                {t.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}

export function Banner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="container-site reveal">
      <div className="img-zoom aspect-[4/3] rounded-[2rem] rounded-tr-[6rem] sm:aspect-[16/9] lg:aspect-[21/9] lg:rounded-tr-[10rem]">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export function Intro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <section className="container-site reveal py-16 lg:py-24">
      <div className={children ? "grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20" : "max-w-4xl"}>
        <div>
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h2 className="display text-3xl lg:text-5xl">{title}</h2>
        </div>
        {children && (
          <div className="space-y-5 border-l-2 border-highlight pl-6 text-lg leading-relaxed text-muted-foreground lg:pl-10">
            {children}
          </div>
        )}
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
    <section className="container-site reveal py-12 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
          <div
            className={`absolute -bottom-4 h-2/3 w-2/3 rounded-3xl bg-highlight/40 ${reverse ? "-right-4" : "-left-4"}`}
            aria-hidden="true"
          />
          <div
            className={`img-zoom relative ${tall ? "aspect-[3/4]" : "aspect-[4/3]"} ${
              reverse ? "rounded-tr-[5rem]" : "rounded-tl-[5rem]"
            }`}
          >
            <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
          </div>
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
    <section className="container-site reveal py-10">
      <div className={`grid gap-4 sm:grid-cols-2 lg:gap-5 ${c}`}>
        {items.map((i, n) => (
          <div
            key={i.title}
            className="group rounded-3xl border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:bg-brand hover:text-primary-foreground hover:shadow-soft lg:p-8"
          >
            <span className="font-[family-name:var(--font-display)] text-4xl italic text-highlight-deep group-hover:text-highlight">
              {String(n + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-semibold">{i.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <section className="container-site reveal py-12">
      <blockquote className="relative rounded-[2rem] bg-accent px-7 py-12 text-center text-2xl italic leading-snug text-accent-foreground lg:px-24 lg:py-16 lg:text-4xl">
        <span className="absolute left-6 top-2 text-7xl text-highlight-deep lg:left-12 lg:text-8xl" aria-hidden="true">
          “
        </span>
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
      <section className="container-site reveal pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-20">
          <div>
            <h2 className="display text-3xl lg:text-5xl">{title}</h2>
            <p className="mt-8 border-l-2 border-highlight pl-6 text-xl leading-relaxed">{lead}</p>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {paras.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {ranges.map((r) => (
                <li key={r} className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-primary-foreground">
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="img-zoom order-first aspect-[3/4] rounded-t-full lg:order-none">
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="container-site reveal grid gap-5 pb-10 sm:grid-cols-3 sm:pb-20">
        {gallery.map((g, i) => (
          <div key={i} className={`img-zoom aspect-[4/5] ${i % 2 === 1 ? "sm:translate-y-10" : ""}`}>
            <img src={g} alt={`${alt} ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </section>
    </>
  );
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <section className="reveal border-b border-border bg-surface">
      <dl className="container-site grid grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <div key={s.label} className={`flex flex-col-reverse gap-2 border-border px-2 py-8 lg:px-8 lg:py-12 ${i % 2 === 1 ? "border-l pl-6" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}>
            <dt className="text-sm text-muted-foreground lg:text-base">{s.label}</dt>
            <dd className="display text-5xl text-brand lg:text-7xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function NumberGrid({ items }: { items: readonly { title: string; text: string }[] }) {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-border bg-surface sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => (
        <div key={c.title} className="group -mb-px -mr-px border-b border-r border-border p-7 transition-colors duration-300 hover:bg-brand hover:text-primary-foreground lg:p-9">
          <span className="font-sans text-sm font-bold tracking-[0.2em] text-highlight-deep group-hover:text-highlight">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-8 text-2xl font-medium">{c.title}</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">{c.text}</p>
        </div>
      ))}
    </div>
  );
}

export function NumberRows({ items }: { items: readonly { title: string; text: string }[] }) {
  return (
    <ol className="border-t border-border">
      {items.map((c, i) => (
        <li key={c.title} className="reveal grid gap-3 border-b border-border px-2 py-8 transition-all hover:bg-surface hover:px-6 lg:grid-cols-[6rem_2fr_3fr] lg:gap-10 lg:py-10">
          <span className="font-[family-name:var(--font-display)] text-3xl italic text-highlight-deep">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="text-2xl font-medium lg:text-3xl">{c.title}</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">{c.text}</p>
        </li>
      ))}
    </ol>
  );
}
