import { services } from "@/services";
import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { NewCollections } from "@/components/sections/NewCollections";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { EditorialBridge } from "@/components/sections/EditorialBridge";
import { Craftsmanship } from "@/components/sections/Craftsmanship";
import { JournalPreview } from "@/components/sections/JournalPreview";
import { InstagramPreview } from "@/components/sections/InstagramPreview";
import { Newsletter } from "@/components/sections/Newsletter";
import { WhatsAppSection } from "@/components/sections/WhatsAppSection";

export default async function Home() {
  const [featuredProductsRes, featuredCollectionsRes] = await Promise.all([
    services.product.getFeaturedProducts(4),
    services.collection.getFeaturedCollections(3),
  ]);

  const featuredProducts = featuredProductsRes.isSuccess ? featuredProductsRes.value : [];
  const featuredCollections = featuredCollectionsRes.isSuccess ? featuredCollectionsRes.value : [];

  return (
    <>
      {/* 1. Flagship Editorial Hero */}
      <Hero />

      {/* 2. Brand Story & Heritage Pillars */}
      <BrandStory />

      {/* 3. Featured Signature Collections */}
      <NewCollections collections={featuredCollections} />

      {/* 4. New Arrivals & Curated Highlights */}
      <FeaturedProducts products={featuredProducts} />

      {/* 5. High-Fashion Editorial Quote Banner */}
      <EditorialBridge />

      {/* 6. Artisanal Craftsmanship & Silk Heritage */}
      <Craftsmanship />

      {/* 7. Journal Preview & Style Guides */}
      <JournalPreview />

      {/* 8. Instagram Community 1:1 Gallery */}
      <InstagramPreview />

      {/* 9. Private Correspondence Newsletter */}
      <Newsletter />

      {/* 10. WhatsApp Concierge CTA */}
      <WhatsAppSection />
    </>
  );
}
