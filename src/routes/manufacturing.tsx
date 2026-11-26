import { createFileRoute } from "@tanstack/react-router";
import factory from "@/assets/factory.jpg";
import knits from "@/assets/knits.jpg";
import people from "@/assets/people.jpg";
import quality from "@/assets/quality.jpg";
import { Banner, CardGrid, Intro, PageHero, Split } from "@/components/site/blocks";
import { processTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/manufacturing")({
  head: () => seo("Manufacturing", "How Q Shira Creation makes garments: knitting, embroidery, cutting, stitching, washing and finishing."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Manufacturing" tabs={processTabs} />
      <section className="container-site pb-10">
        <p className="display text-5xl lg:text-7xl">Modernized</p>
        <p className="accent-word text-5xl lg:text-8xl">Production</p>
      </section>
      <Banner src={factory} alt="Rows of sewing machines on a bright factory floor" />
      <Intro title="Careful, modern manufacturing is what our buyers rely on." />
      <Split src={knits} alt="Knit fabric and garments" eyebrow="Knitting" title="Fabric made close to the sewing floor">
        <p>
          We work with jersey, rib, fleece and terry fabrics, with or without stretch, and keep fabric moving quickly from knitting to stitching.
        </p>
      </Split>
      <Split src={people} alt="Worker marking fabric on a cutting table" eyebrow="Cutting" title="Precise cutting, less waste" reverse>
        <p>
          Digital patterns and careful marker planning help us cut accurately and make the most of every roll of fabric.
        </p>
      </Split>
      <Split src={quality} alt="Hands checking a finished shirt" eyebrow="Stitching" title="Neat stitching on every piece">
        <p>
          Skilled operators and well-kept machines give us clean, consistent stitching, from basic seams to fine detailing.
        </p>
      </Split>
      <CardGrid
        cols={4}
        items={[
          { title: "Embroidery", text: "Machine precision and hand-finished detail." },
          { title: "Dyeing & washing", text: "Colour and feel developed to your standard." },
          { title: "Finishing", text: "Pressing, trimming and final checks." },
          { title: "Packing", text: "Packed to your instructions, ready to ship." },
        ]}
      />
    </>
  );
}
