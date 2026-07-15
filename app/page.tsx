import { Hero } from "@/components/sections/Hero";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { ProductHighlight } from "@/components/sections/ProductHighlight";
import { BrandStory } from "@/components/sections/BrandStory";
import { Lookbook } from "@/components/sections/Lookbook";
import { InstagramPreview } from "@/components/sections/InstagramPreview";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <ProductHighlight />
      <BrandStory />
      <Lookbook />
      <InstagramPreview />
      <Newsletter />
    </>
  );
}
