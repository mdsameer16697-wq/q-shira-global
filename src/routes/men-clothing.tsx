import { createFileRoute } from "@tanstack/react-router";
import main from "@/assets/men.jpg";
import knits from "@/assets/knits.jpg";
import woven from "@/assets/woven.jpg";
import hero from "@/assets/hero.jpg";
import { PageHero, ProductPage } from "@/components/site/blocks";
import { productTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/men-clothing")({
  head: () => seo("Mens", "Menswear made by Q Shira Creation: T-shirts, polos, shirts, jackets, sweatshirts and bottoms."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Mens" tabs={productTabs} />
      <ProductPage
        src={main}
        alt="Mens clothing"
        title="Menswear that leads. Discover the Q Shira signature collection"
        lead="Our mix of modern and classic men's clothing covers formal and casual wear, made with responsible practices."
        paras={["Our menswear is ready for wherever the day goes. We make T-shirts, polo shirts, shirts, rugby shirts, jerseys, hoodies, jackets, sweatshirts and bottoms in many fabrics and styles.", "With modern machines and skilled hands, we create pieces that look sharp and wear well."]}
        ranges={["Knitwear", "Woven Apparel", "Bottoms"]}
        gallery={[knits, hero, woven]}
      />
    </>
  );
}
