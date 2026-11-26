import { createFileRoute } from "@tanstack/react-router";
import knits from "@/assets/knits.jpg";
import woven from "@/assets/woven.jpg";
import { Intro, PageHero, Split } from "@/components/site/blocks";
import { aboutTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/divisions")({
  head: () => seo("Divisions", "Q Shira Creation's Knits and Wovens divisions and what each one makes."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Divisions" tabs={aboutTabs} />
      <Intro eyebrow="Divisions" title="Two divisions, one standard: Knits and Wovens.">
        <p>
          Our Knits division is about comfort and versatility. Our Wovens division pairs classic craft with a clean, current look.
        </p>
      </Intro>
      <Split src={knits} alt="Stack of knit garments" eyebrow="Knits" title="Knits">
        <p>
          We make T-shirts, polos, sweatshirts, hoodies and other knitwear for buyers who expect consistent fabric, fit and colour.
        </p>
        <p>
          Our team keeps pushing design forward and uses current technology to turn ideas into finished pieces, with responsible choices on materials wherever possible.
        </p>
      </Split>
      <Split src={woven} alt="Woven shirts and dresses on a rail" eyebrow="Woven" title="Woven" reverse>
        <p>
          Our woven range covers shirts, dresses, tops, jackets and bottoms. Skilled pattern makers and computer-aided design help us get the fit right early.
        </p>
        <p>
          We keep upgrading our machines and methods so the division stays in step with the industry.
        </p>
      </Split>
    </>
  );
}
