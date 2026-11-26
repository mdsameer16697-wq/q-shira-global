import { createFileRoute, Link } from "@tanstack/react-router";
import { CardGrid, Intro, PageHero } from "@/components/site/blocks";
import { aboutTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/our-clients")({
  head: () => seo("Clients", "The kinds of brands and buyers Q Shira Creation makes clothing for."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Clients" tabs={aboutTabs} />
      <Intro eyebrow="Our Clients" title="We build long relationships with the brands we make for.">
        <p>
          Buyers come to us for dependable quality, clear communication and delivery they can plan around.
        </p>
      </Intro>
      <CardGrid
        cols={3}
        items={[
          { title: "Fashion brands", text: "Seasonal collections made to your designs and tech packs." },
          { title: "Private labels", text: "Your label, our making, from sampling to bulk." },
          { title: "Retail chains", text: "Volume orders with consistent sizing and finish." },
          { title: "Online stores", text: "Smaller, faster runs for brands that sell direct." },
          { title: "Boutiques", text: "Detailed pieces in limited quantities." },
          { title: "Importers & buying houses", text: "A single reliable source across knits and wovens." },
        ]}
      />
      <div className="container-site pt-10 text-center">
        <Link to="/contact-us" className="btn-circle">Work<br />with us</Link>
      </div>
    </>
  );
}
