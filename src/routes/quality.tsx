import { createFileRoute } from "@tanstack/react-router";
import quality from "@/assets/quality.jpg";
import { Banner, CardGrid, Intro, PageHero } from "@/components/site/blocks";
import { processTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/quality")({
  head: () => seo("Quality", "How Q Shira Creation checks quality at every stage, from fabric to final inspection."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Quality" tabs={processTabs} />
      <Intro title="At Q Shira Creation, our commitment to quality does not waver">
        <p>
          We aim for excellence in every part of our work, keeping rejections low and efficiency high. Our checks make sure each garment that leaves us is well made and built to last.
        </p>
      </Intro>
      <Banner src={quality} alt="Inspector measuring a folded shirt" />
      <section className="container-site pt-16">
        <p className="eyebrow">Quality at every stage</p>
      </section>
      <CardGrid
        cols={4}
        items={[
          { title: "Fabric inspection", text: "Fabric is checked for flaws, shade and shrinkage before cutting." },
          { title: "In-line checks", text: "Checkers on the sewing line catch problems early." },
          { title: "Measurement & fit", text: "Pieces are measured against the approved size chart." },
          { title: "Final inspection", text: "Finished goods are audited before they are packed." },
        ]}
      />
    </>
  );
}
