import { createFileRoute } from "@tanstack/react-router";
import { CardGrid, Intro, PageHero } from "@/components/site/blocks";
import { aboutTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/awards")({
  head: () => seo("Awards", "The standards Q Shira Creation works to and wants to be recognised for."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Awards" tabs={aboutTabs} />
      <Intro eyebrow="Awards" title="Recognition follows good work. These are the standards we hold ourselves to.">
        <p>Our dedication to innovation, quality and service is what we want to be known for.</p>
      </Intro>
      <CardGrid
        cols={4}
        items={[
          { title: "Quality", text: "Checks at every stage, from fabric to final packing." },
          { title: "Service", text: "Quick replies and honest updates for every buyer." },
          { title: "Innovation", text: "New fabrics, finishes and methods each season." },
          { title: "Responsibility", text: "Fair treatment of people and care for the environment." },
        ]}
      />
    </>
  );
}
