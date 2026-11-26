import { createFileRoute, Link } from "@tanstack/react-router";
import women from "@/assets/women.jpg";
import knits from "@/assets/knits.jpg";
import woven from "@/assets/woven.jpg";
import factory from "@/assets/factory.jpg";
import { Banner, CardGrid, Intro, PageHero, Quote, Split } from "@/components/site/blocks";
import { aboutTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/about-us")({
  head: () => seo("Overview", "Who Q Shira Creation is: a garment maker and exporter for men, women and kids."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Overview" tabs={aboutTabs} />
      <Banner src={women} alt="Model wearing a knit loungewear set" />
      <section className="container-site pt-16 text-center">
        <p className="display text-5xl lg:text-7xl">Q Shira</p>
        <p className="outline-word text-5xl lg:text-8xl">Creation</p>
      </section>
      <Intro title="Commitment, craft and a clear vision guide everything we make.">
        <p>
          Q Shira Creation is a garment manufacturer and exporter. We make woven and knit clothing for men, women and kids, covering casual wear and active wear.
        </p>
        <p>
          We work as a one-stop partner: design support, sampling, production, finishing and shipping all happen under one roof, so our buyers deal with one team from start to finish.
        </p>
        <p>
          Quality, honesty and fresh thinking shape how we work. We keep improving our methods and we care about the people and the environment around us.
        </p>
      </Intro>
      <Split src={factory} alt="Sewing floor" eyebrow="Mission" title="To be a name buyers choose first">
        <p>
          We aim to become a preferred clothing partner for brands around the world by making well-finished, fashion-right garments at fair value.
        </p>
      </Split>
      <Split src={woven} alt="Woven shirts on a rail" eyebrow="Vision" title="To grow beyond today's horizons" reverse>
        <p>
          We want to reach new markets with garments that stand out for style and quality, and to be counted among the most trusted garment makers anywhere.
        </p>
      </Split>
      <section className="container-site pt-12">
        <p className="eyebrow">Strength of the company</p>
      </section>
      <CardGrid
        cols={3}
        items={[
          { title: "Creative design", text: "Fresh ideas and new details in every season's range." },
          { title: "Many product types", text: "Knits and wovens for men, women and kids from one source." },
          { title: "Better raw materials", text: "Fabrics and trims chosen for feel, strength and value." },
          { title: "Technical skill", text: "Pattern, fit and finish handled by experienced people." },
          { title: "New categories", text: "We keep adding styles as our buyers' needs grow." },
          { title: "Reliable delivery", text: "Clear timelines and honest updates on every order." },
        ]}
      />
      <Quote>Comfort, style and quality in each stitch.</Quote>
      <Split src={knits} alt="Folded knit garments" eyebrow="Divisions" title="Knits and Wovens">
        <p>
          Our knit garments are made for softness and easy wear. Our woven range brings a sharper, more tailored look for men, women and children.
        </p>
        <Link to="/divisions" className="inline-block border-b border-plum pb-1 font-semibold text-plum">
          See our divisions
        </Link>
      </Split>
    </>
  );
}
