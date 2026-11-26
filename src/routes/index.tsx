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

function Index() {
  const [active, setActive] = useState(0);
  const current = care[active] ?? care[0]!;
  return (
    <>
      <section className="container-site rise pb-12 pt-10 text-center lg:pt-16">
        <h1 className="display mx-auto max-w-5xl text-5xl lg:text-8xl">Excellence in every stitch</h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground lg:text-xl">
          From first sketch to finished garment, we bring creativity and quality together with care for every detail.
        </p>
      </section>
      <div className="container-site">
        <div className="img-zoom rise mx-auto aspect-[16/9] max-w-6xl">
          <img src={hero} alt="Two women in summer dresses walking down a sunny street" className="h-full w-full object-cover" />
        </div>
      </div>

      <section className="container-site grid items-end gap-10 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="display text-5xl lg:text-7xl">Creating</p>
          <p className="outline-word text-6xl lg:text-9xl">Beyond</p>
          <p className="display text-5xl lg:text-7xl">Imagination</p>
        </div>
        <div className="flex flex-col items-start gap-8 lg:items-end lg:text-right">
          <p className="max-w-md text-xl text-muted-foreground">
            A garment maker and exporter for brands that care about fit, finish and on-time delivery.
          </p>
          <Link to="/about-us" className="btn-circle">Read More</Link>
        </div>
      </section>

      <section className="container-site grid gap-8 md:grid-cols-3">
        {categories.map((c) => (
          <Link key={c.to} to={c.to} className="group block">
            <div className="img-zoom aspect-[3/4]">
              <img src={c.img} alt={`${c.title} clothing`} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold group-hover:text-plum">{c.title}</h2>
            <p className="mt-3 text-muted-foreground">{c.text}</p>
          </Link>
        ))}
      </section>

      <section className="mt-24 bg-plum-deep py-20 text-primary-foreground lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[2fr_3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] opacity-70">How We Do</p>
            <h2 className="display mt-5 text-4xl lg:text-5xl">Careful making, from the first cut to the final check</h2>
            <Link to="/quality" className="mt-10 inline-block border-b border-current pb-1 font-semibold">Read More</Link>
          </div>
          <ul className="grid gap-px bg-primary-foreground/20 sm:grid-cols-2">
            {how.map((h) => (
              <li key={h.title} className="bg-plum-deep p-8">
                <Link to={h.to} className="block">
                  <h3 className="text-2xl font-semibold">{h.title}</h3>
                  <p className="mt-3 leading-relaxed opacity-80">{h.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="eyebrow">Who We Are</p>
          <h2 className="display mt-5 text-4xl lg:text-5xl">Q Shira Creation is a clothing maker built on craft</h2>
          <p className="mt-6 text-xl text-muted-foreground">
            We design, make and export garments for men, women and kids, and we treat every order as if our own name were on the label.
          </p>
          <Link to="/about-us" className="btn-circle mt-10">Read<br />More</Link>
        </div>
        <div className="img-zoom aspect-[4/3]">
          <img src={factory} alt="Sewing floor at a garment factory" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="container-site grid gap-10 lg:grid-cols-[1fr_2fr]">
        <ul className="flex flex-col justify-center gap-2">
          {care.map((c, i) => (
            <li key={c.title}>
              <button
                onClick={() => setActive(i)}
                className={`w-full border-l-2 py-3 pl-6 text-left text-2xl font-semibold transition-colors ${
                  i === active ? "border-plum text-plum" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="relative aspect-[16/10] overflow-hidden">
          <img key={current.title} src={current.img} alt={current.title} loading="lazy" className="rise h-full w-full object-cover" />
          <h3 className="absolute bottom-0 left-0 bg-background px-6 py-4 text-2xl font-semibold">{current.title}</h3>
        </div>
      </section>

      <section className="container-site grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="img-zoom aspect-[4/3] lg:order-2">
          <img src={sustainability} alt="Factory roof with solar panels among trees" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow">Sustainability</p>
          <h2 className="display mt-5 text-5xl lg:text-6xl">We Care</h2>
          <p className="mt-6 text-xl text-muted-foreground">
            We work to use less water and energy, waste less fabric and look after the people who make our clothes.
          </p>
          <Link to="/sustainability-csr" className="btn-circle mt-10">Read More</Link>
        </div>
      </section>

      <section className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="img-zoom aspect-[4/3]">
          <img src={quality} alt="Inspector measuring a folded shirt" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow">Our Clients</p>
          <h2 className="display mt-5 text-4xl lg:text-5xl">Built on trust, one order at a time</h2>
          <Link to="/our-clients" className="btn-circle mt-10">Read More</Link>
        </div>
      </section>
    </>
  );
}
