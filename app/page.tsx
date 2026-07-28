import { Hero } from "@/components/sections/Hero";
import { BrandIntroduction } from "@/components/sections/BrandIntroduction";
import { NewCollections } from "@/components/sections/NewCollections";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Lookbook } from "@/components/sections/Lookbook";
import { BrandValues } from "@/components/sections/BrandValues";
import { InstagramPreview } from "@/components/sections/InstagramPreview";
import { Newsletter } from "@/components/sections/Newsletter";
import { WhatsAppSection } from "@/components/sections/WhatsAppSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntroduction />
      <NewCollections />
      <FeaturedProducts />
      <Lookbook />
      <BrandValues />
      <InstagramPreview />
      <Newsletter />
      <WhatsAppSection />
    </>
  );
}
