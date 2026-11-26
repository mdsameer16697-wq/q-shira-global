import { createFileRoute } from "@tanstack/react-router";
import design from "@/assets/design.jpg";
import factory from "@/assets/factory.jpg";
import knits from "@/assets/knits.jpg";
import { Banner, CardGrid, Intro, PageHero, Quote, Split } from "@/components/site/blocks";
import { processTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/design-innovation")({
  head: () => seo("Design & Innovation", "How Q Shira Creation designs garments: our team, our tools and our approach to new ideas."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Design & Innovation" tabs={processTabs} />
      <Intro title="Welcome to our world of design and innovation">
        <p>Where creativity meets current technology to shape the future of fashion.</p>
      </Intro>
      <Banner src={design} alt="Designer sketching in a studio" />
      <section className="container-site pt-16 text-center">
        <p className="display text-5xl lg:text-7xl">Design</p>
        <p className="outline-word text-5xl lg:text-8xl">Innovation</p>
      </section>
      <Split src={design} alt="Design desk with swatches" eyebrow="Our Team" title="Creative people, working closely with you">
        <p>
          Our design team works with merchandisers and graphic designers to take each style from concept to finished product.
        </p>
        <p>
          They follow trends and market research closely, so the designs we develop feel right for today's customers.
        </p>
      </Split>
      <Split src={factory} alt="Modern sewing floor" eyebrow="Technology Integration" title="Technology sits at the heart of our design process" reverse>
        <p>
          Digital pattern making and 3D garment visualisation help us turn ideas into samples faster, with fewer physical samples and less wasted material.
        </p>
        <p>
          Standardised sewing methods let us cost accurately, balance production lines and plan with confidence.
        </p>
      </Split>
      <section className="container-site pt-12">
        <p className="eyebrow">Advanced Automation</p>
      </section>
      <CardGrid
        cols={3}
        items={[
          { title: "Label attaching & pattern seaming", text: "Automated steps for speed, accuracy and consistency in every stitch." },
          { title: "Soft and secure seams", text: "Good threads and careful settings for softness, comfort and durability." },
          { title: "Bonding & heat transfers", text: "Clean bonded seams and transfer details that add function and style." },
        ]}
      />
      <Quote>Sustainability and ethics come first in how we design.</Quote>
      <Split src={knits} alt="Folded knit garments" eyebrow="Sustainability & Ethics" title="Responsible design">
        <p>
          From better materials to careful sourcing, we try to reduce our footprint and increase the good we do.
        </p>
        <p className="font-semibold text-foreground">
          Join us as we rethink design, one step at a time.
        </p>
      </Split>
    </>
  );
}
