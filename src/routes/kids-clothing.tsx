import { createFileRoute } from "@tanstack/react-router";
import main from "@/assets/kids.jpg";
import knits from "@/assets/knits.jpg";
import woven from "@/assets/woven.jpg";
import hero from "@/assets/hero.jpg";
import { PageHero, ProductPage } from "@/components/site/blocks";
import { productTabs, seo } from "@/lib/site";

export const Route = createFileRoute("/kids-clothing")({
  head: () => seo("Kids", "Kidswear made by Q Shira Creation: safe, soft and playful clothing for toddlers, boys and girls."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Kids" tabs={productTabs} />
      <ProductPage
        src={main}
        alt="Kids clothing"
        title="Kidswear for big adventures and lazy days alike."
        lead="Safe, comfortable clothes in quality fabrics, with playful designs for every little explorer."
        paras={["We make a wide range of garments for toddlers, boys and girls. Comfort comes first, so we choose soft, skin-friendly materials.", "Our production is set up to deliver neat workmanship with less waste."]}
        ranges={["Casual Wear", "Activewear"]}
        gallery={[knits, hero, woven]}
      />
    </>
  );
}
