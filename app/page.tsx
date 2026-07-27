import { Hero } from "@/components/sections/Hero";
import { EditorialBridge } from "@/components/sections/EditorialBridge";
import { NewCollections } from "@/components/sections/NewCollections";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { ProductHighlight } from "@/components/sections/ProductHighlight";
import { BrandStory } from "@/components/sections/BrandStory";
import { Lookbook } from "@/components/sections/Lookbook";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramPreview } from "@/components/sections/InstagramPreview";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialBridge />
      <NewCollections />
      <FeaturedCollection />
      <ProductHighlight />
      <BrandStory />
      <Lookbook />
      <Testimonials />
      <InstagramPreview />
      <Newsletter />
    </>
  );
}
