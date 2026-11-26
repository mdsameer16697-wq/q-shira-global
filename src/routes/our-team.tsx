import { createFileRoute } from "@tanstack/react-router";
import people from "@/assets/people.jpg";
import empower from "@/assets/empower.jpg";
import factory from "@/assets/factory.jpg";
import { Banner, CardGrid, Intro, PageHero, Split } from "@/components/site/blocks";
import { aboutTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/our-team")({
  head: () => seo("People", "The people behind Q Shira Creation and how we support their wellbeing and growth."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="People" tabs={aboutTabs} />
      <Intro title="Meet the dedicated people whose skill, passion and commitment drive our success." />
      <Banner src={people} alt="A supervisor guiding a worker at a cutting table" />
      <Intro title="Our people are our driving force">
        <p>
          We believe a satisfied, motivated and well-informed workforce is what turns a company into a thriving one. Our people sit at the centre of everything we value.
        </p>
        <p>
          Their wellbeing, growth and satisfaction are priorities for us, because their happiness shows directly in the quality of our work.
        </p>
      </Intro>
      <Split src={empower} alt="Women workers at a training session" eyebrow="Her" title="Supporting the women in our workforce">
        <p>
          We pay special attention to the wellbeing and progress of women at work, with a focus on four areas.
        </p>
      </Split>
      <CardGrid
        cols={4}
        items={[
          { title: "Her health", text: "Awareness and access to basic health support." },
          { title: "Her finance", text: "Guidance on saving, banking and planning." },
          { title: "Her respect", text: "A workplace that is safe and dignified." },
          { title: "Her essentials", text: "Everyday needs taken seriously." },
        ]}
      />
      <Split src={factory} alt="Sewing floor" title="Learning never stops" reverse>
        <p>
          Continuous learning matters for personal and professional growth. We encourage training in both technical and people skills so everyone can do well in their role.
        </p>
        <p>
          We want every voice to be heard and respected, and we keep open channels for raising concerns.
        </p>
      </Split>
    </>
  );
}
