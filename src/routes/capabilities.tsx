import { createFileRoute, Link } from "@tanstack/react-router";
import design from "@/assets/design.jpg";
import factory from "@/assets/factory.jpg";
import { Banner, Intro, NumberRows, PageHero, Split } from "@/components/site/blocks";
import { capabilities, productTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/capabilities")({
  head: () =>
    seo(
      "Capabilities",
      "Ten capabilities under one team at Q Shira Creation: design, fabric, knitting, cutting, stitching, embroidery, washing, quality, finishing and export.",
    ),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Capabilities" />
      <section className="container-site pb-10">
        <p className="display text-5xl lg:text-7xl">From first sketch</p>
        <p className="accent-word text-5xl lg:text-8xl">to shipped order</p>
      </section>
      <Banner src={factory} alt="Rows of sewing machines on a bright factory floor" />
      <Intro eyebrow="What we make" title="Clothing for men, women and kids, in knits and wovens.">
        <p>
          Whether it is an everyday essential or a detailed fashion piece, we bring careful making and fresh thinking together, and we keep as many steps as we can with one team.
        </p>
        <ul className="flex flex-wrap gap-2.5 pt-2">
          {productTabs.map((p) => (
            <li key={p.to}>
              <Link to={p.to} className="inline-block rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-deep">
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </Intro>
      <section className="container-site py-10">
        <p className="eyebrow">End to end</p>
        <h2 className="display mb-12 mt-5 text-4xl lg:text-6xl">Ten capabilities, one team.</h2>
        <NumberRows items={capabilities} />
      </section>
      <Split src={design} alt="Designer working with fabric swatches" eyebrow="How we work with you" title="An extension of your own design room">
        <p>
          Send us a sketch, a tech pack or a sample. We come back with fabric options, a fit sample and a clear plan for bulk production.
        </p>
        <Link to="/design-innovation" className="inline-block border-b border-brand pb-1 font-semibold text-brand">
          See how we do it
        </Link>
      </Split>
    </>
  );
}
