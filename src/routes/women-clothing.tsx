import { createFileRoute } from "@tanstack/react-router";
import main from "@/assets/women.jpg";
import knits from "@/assets/knits.jpg";
import woven from "@/assets/woven.jpg";
import hero from "@/assets/hero.jpg";
import { PageHero, ProductPage } from "@/components/site/blocks";
import { productTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/women-clothing")({
  head: () => seo("Womens", "Womenswear made by Q Shira Creation: tops, dresses, jackets and sweatshirts in woven, knit, linen and denim."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Womens" tabs={productTabs} />
      <ProductPage
        src={main}
        alt="Womens clothing"
        title="Refined, easy elegance for the modern woman."
        lead="We pay close attention to detail and make our womenswear with precision."
        paras={["Our range includes tops, dresses, jackets and sweatshirts in woven, knit, linen and denim, for work days and days off alike.", "Our experience with prints and garment graphics helps us meet many different tastes.", "Whether you need everyday essentials or statement pieces, there is something here for every occasion and mood."]}
        ranges={["Tops", "Dresses", "Jackets", "Sweatshirts"]}
        gallery={[knits, hero, woven]}
      />
    </>
  );
}
