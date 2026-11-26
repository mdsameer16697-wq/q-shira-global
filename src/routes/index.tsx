import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import men from "@/assets/men.jpg";
import women from "@/assets/women.jpg";
import kids from "@/assets/kids.jpg";
import factory from "@/assets/factory.jpg";
import people from "@/assets/people.jpg";
import empower from "@/assets/empower.jpg";
import design from "@/assets/design.jpg";
import quality from "@/assets/quality.jpg";
import sustainability from "@/assets/sustainability.jpg";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Garment Manufacturing & Export",
      "Q Shira Creation designs, makes and exports clothing for men, women and kids, with quality in every stitch.",
    ),
  component: Index,
});

const categories = [
  { to: "/men-clothing", title: "Mens", img: men, text: "Carefully made pieces, cut for polish and everyday versatility." },
  { to: "/women-clothing", title: "Women", img: women, text: "From lasting classics to modern statements that bring confidence to every setting." },
  { to: "/kids-clothing", title: "Kids", img: kids, text: "Made for fun and for function, so little ones stay stylish and comfortable." },
] as const;

const how = [
  { to: "/design-innovation", title: "Design & Innovation", text: "Turning imagination into wearable reality, with comfort and style in mind." },
  { to: "/manufacturing", title: "Manufacturing", text: "Quality leads our production, supported by modern machines and skilled hands." },
  { to: "/quality", title: "Quality", text: "Quality is more than a standard for us. It is a promise we keep on every piece." },
  { to: "/design-innovation", title: "Technology", text: "We use current tools to keep our process fast, accurate and consistent." },
] as const;

const care = [
  { title: "Skill Development", img: people },
  { title: "Women Empowerment", img: empower },
  { title: "Protecting Human Rights", img: quality },
  { title: "Health & Wellbeing", img: design },
  { title: "Community Projects", img: sustainability },
];

const strip = ["Design & Innovation", "Manufacturing", "Quality", "Mens", "Women", "Kids"];

function Index() {
  const [active, setActive] = useState(0);
  const current = care[active] ?? care[0]!;
  return (
    <>
      <section className="container-site grid items-center gap-10 pb-14 pt-10 lg:grid-cols-[6fr_5fr] lg:gap-16 lg:pb-20 lg:pt-16">
        <div className="rise">
          <span className="block h-0.5 w-14 bg-highlight" />
          <h1 className="display mt-6 text-5xl sm:text-6xl lg:text-8xl">
            Excellence in <span className="italic text-highlight-deep">every stitch</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground lg:text-xl">
            From first sketch to finished garment, we bring creativity and quality together with care for every detail.
          </p>
          <Link to="/about-us" className="btn-arrow mt-10">Read More</Link>
        </div>
        <div className="rise relative">
          <div className="dots absolute -right-3 -top-3 h-40 w-40 rounded-full" aria-hidden="true" />
          <div className="img-zoom relative aspect-[4/5] rounded-t-full">
            <img src={hero} alt="Two women in summer dresses walking down a sunny street" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-surface py-5" aria-hidden="true">
        <div className="marquee">
          {[...strip, ...strip].map((s, i) => (
            <span key={i} className="flex items-center gap-8 pl-8 font-[family-name:var(--font-display)] text-2xl italic lg:text-3xl">
              {s}
              <span className="h-2 w-2 rounded-full bg-highlight" />
            </span>
          ))}
        </div>
      </div>

      <section className="container-site reveal py-16 lg:py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-deep px-7 py-14 text-primary-foreground lg:px-20 lg:py-24">
          <div className="dots pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[3fr_2fr]">
            <p className="display text-5xl lg:text-8xl">
              Creating <span className="italic text-highlight">Beyond</span> Imagination
            </p>
            <div className="flex flex-col items-start gap-8">
              <p className="max-w-md text-xl opacity-85">
                A garment maker and exporter for brands that care about fit, finish and on-time delivery.
              </p>
              <Link to="/about-us" className="btn-arrow on-dark">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site reveal grid gap-6 md:grid-cols-3 md:pb-12">
        {categories.map((c, i) => (
          <Link
            key={c.to}
            to={c.to}
            className={`group relative block aspect-[3/4] overflow-hidden rounded-[2rem] ${i === 1 ? "md:translate-y-12" : ""}`}
          >
            <img
              src={c.img}
              alt={`${c.title} clothing`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground">
              <h2 className="text-4xl font-medium transition-colors group-hover:text-highlight">{c.title}</h2>
              <p className="mt-3 opacity-85">{c.text}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="container-site reveal grid gap-12 py-20 lg:grid-cols-[2fr_3fr] lg:gap-20 lg:py-28">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">How We Do</p>
          <h2 className="display mt-5 text-4xl lg:text-5xl">Careful making, from the first cut to the final check</h2>
          <Link to="/quality" className="btn-arrow mt-10">Read More</Link>
        </div>
        <ul className="border-t border-border">
          {how.map((h, i) => (
            <li key={h.title} className="border-b border-border">
              <Link to={h.to} className="group flex gap-6 px-2 py-8 transition-all hover:bg-surface hover:px-6 lg:gap-10">
                <span className="font-[family-name:var(--font-display)] text-3xl italic text-highlight-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <h3 className="text-2xl font-semibold transition-colors group-hover:text-brand lg:text-3xl">{h.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{h.text}</p>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="reveal bg-accent py-16 lg:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="img-zoom aspect-[4/3] rounded-tl-[5rem]">
            <img src={factory} alt="Sewing floor at a garment factory" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="display mt-5 text-4xl lg:text-5xl">Q Shira Creation is a clothing maker built on craft</h2>
            <p className="mt-6 text-xl text-muted-foreground">
              We design, make and export garments for men, women and kids, and we treat every order as if our own name were on the label.
            </p>
            <Link to="/about-us" className="btn-arrow mt-10">Read More</Link>
          </div>
        </div>
      </section>

      <section className="container-site reveal py-20 lg:py-28">
        <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-wrap lg:px-0">
          {care.map((c, i) => (
            <li key={c.title}>
              <button
                onClick={() => setActive(i)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 font-semibold transition-colors ${
                  i === active
                    ? "border-brand bg-brand text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-brand hover:text-brand"
                }`}
              >
                {c.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[2rem] sm:aspect-[16/9] lg:aspect-[21/9]">
          <img key={current.title} src={current.img} alt={current.title} loading="lazy" className="rise h-full w-full object-cover" />
          <h3 className="absolute bottom-4 left-4 rounded-full bg-highlight px-6 py-3 text-xl font-semibold text-brand-deep lg:bottom-8 lg:left-8 lg:text-2xl">
            {current.title}
          </h3>
        </div>
      </section>

      <section className="container-site reveal grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-20 lg:pb-28">
        <div>
          <p className="eyebrow">Sustainability</p>
          <h2 className="display mt-5 text-5xl lg:text-7xl">We <span className="italic text-highlight-deep">Care</span></h2>
          <p className="mt-6 text-xl text-muted-foreground">
            We work to use less water and energy, waste less fabric and look after the people who make our clothes.
          </p>
          <Link to="/sustainability-csr" className="btn-arrow mt-10">Read More</Link>
        </div>
        <div className="img-zoom aspect-[4/3] rounded-tr-[5rem]">
          <img src={sustainability} alt="Factory roof with solar panels among trees" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="container-site reveal">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <img src={quality} alt="Inspector measuring a folded shirt" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-deep/80" />
          <div className="relative px-7 py-16 text-center text-primary-foreground lg:py-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-highlight">Our Clients</p>
            <h2 className="display mx-auto mt-5 max-w-3xl text-4xl lg:text-6xl">Built on trust, one order at a time</h2>
            <Link to="/our-clients" className="btn-arrow on-dark mt-10">Read More</Link>
          </div>
        </div>
      </section>
    </>
  );
}
