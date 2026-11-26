import { createFileRoute } from "@tanstack/react-router";
import { Intro, PageHero, Quote } from "@/components/site/blocks";
import { aboutTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/leadership")({
  head: () => seo("Leadership", "A message from the leadership of Q Shira Creation on how we lead and what we value."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Leadership" tabs={aboutTabs} />
      <Intro title="True leadership is the quiet work of inspiring and empowering every member of the team.">
        <p>
          Our leadership is guided by excellence, fresh thinking and integrity. We work to build a culture where people collaborate freely and every voice counts.
        </p>
        <p>
          Everyone here adds to our success, whether it is a designer giving shape to an idea or a technician mastering a new machine. We lead by example and hold ourselves to high standards of ethics and professionalism.
        </p>
        <p>
          Fashion changes quickly. We encourage an open, adaptable mindset and prefer to meet challenges early, with new ideas and practical solutions.
        </p>
      </Intro>
      <Quote>
        We bring together market understanding, modern technology and real talent. That mix is what earns the trust of our buyers and partners.
      </Quote>
      <Intro title="Looking ahead">
        <p>
          We stay committed to our purpose and to the good we can do through our work. With passion and integrity, we will keep raising our own bar.
        </p>
        <p>
          To every member of our team: thank you for your dedication and hard work. Together, there is no limit to what we can achieve.
        </p>
        <p className="pt-4 font-semibold text-foreground">
          Best regards,
          <br />
          The Leadership Team, Q Shira Creation
        </p>
      </Intro>
    </>
  );
}
