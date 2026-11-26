import { createFileRoute } from "@tanstack/react-router";
import sustainability from "@/assets/sustainability.jpg";
import empower from "@/assets/empower.jpg";
import people from "@/assets/people.jpg";
import { Banner, CardGrid, Intro, PageHero, Split } from "@/components/site/blocks";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/sustainability-csr")({
  head: () => seo("Sustainability & CSR", "How Q Shira Creation cares for its people, its community and the environment."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="We Care" />
      <section className="container-site pb-10 text-center">
        <p className="display text-5xl lg:text-7xl">CSR &</p>
        <p className="outline-word text-4xl sm:text-5xl lg:text-8xl">Sustainability</p>
      </section>
      <Banner src={sustainability} alt="Factory roof with solar panels among trees" />
      <Intro title="Our commitment to social responsibility and sustainability">
        <p>
          We believe in more than business success. We want our work to be good for society and for the environment, and that belief is part of how we run the company.
        </p>
      </Intro>
      <Split src={empower} alt="Women workers at a training session" title="Empowering our workforce">
        <p>
          Our people are our most valuable asset. We put their wellbeing and development first, with attention to health, financial awareness, respect at work and equal opportunity.
        </p>
      </Split>
      <Split src={people} alt="Supervisor guiding a worker" title="Education and skill development" reverse>
        <p>
          Learning opens doors. We support training that builds skills and improves people's chances of steady, better-paid work.
        </p>
      </Split>
      <section className="container-site pt-12">
        <h2 className="display text-3xl lg:text-5xl">Key sustainability goals</h2>
      </section>
      <CardGrid
        cols={4}
        items={[
          { title: "Clean energy", text: "Moving more of our power use to renewable sources." },
          { title: "Water care", text: "Treating and reusing water, and harvesting rain." },
          { title: "Lower emissions", text: "Tracking our footprint and bringing it down each year." },
          { title: "Tree planting", text: "Greening the areas around where we work." },
          { title: "Safer chemistry", text: "Preferring natural and biodegradable dyes and chemicals." },
          { title: "Less waste", text: "Smarter cutting and reuse of fabric leftovers." },
          { title: "Community", text: "Support for local health and education needs." },
          { title: "Fair work", text: "Safe conditions and respect for every worker." },
        ]}
      />
    </>
  );
}
