import { services } from "@/services";
import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { NewCollections } from "@/components/sections/NewCollections";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { EditorialLookbook } from "@/components/sections/EditorialLookbook";
import { EditorialBridge } from "@/components/sections/EditorialBridge";
import { Craftsmanship } from "@/components/sections/Craftsmanship";
import { LuxuryTestimonials } from "@/components/sections/LuxuryTestimonials";
import { JournalPreview } from "@/components/sections/JournalPreview";
import { InstagramPreview } from "@/components/sections/InstagramPreview";
import { Newsletter } from "@/components/sections/Newsletter";
import { WhatsAppSection } from "@/components/sections/WhatsAppSection";

export default async function Home() {
  const [
    featuredProductsRes,
    featuredCollectionsRes,
    brandStoryRes,
    lookbookRes,
    testimonialsRes,
    statsRes,
  ] = await Promise.all([
    services.product.getFeaturedProducts(4),
    services.collection.getFeaturedCollections(3),
    services.brand.getBrandStory(),
    services.lookbook.getActiveCampaign(),
    services.testimonial.getFeaturedTestimonials(),
    services.testimonial.getCommunityStats(),
  ]);

  const featuredProducts = featuredProductsRes.isSuccess ? featuredProductsRes.value : [];
  const featuredCollections = featuredCollectionsRes.isSuccess ? featuredCollectionsRes.value : [];
  const brandStory = brandStoryRes.isSuccess ? brandStoryRes.value : undefined;
  const lookbookCampaign = lookbookRes.isSuccess ? (lookbookRes.value ?? undefined) : undefined;
  const testimonials = testimonialsRes.isSuccess ? testimonialsRes.value : [];
  const stats = statsRes.isSuccess ? statsRes.value : [];

  return (
    <>
      {/* 1. Flagship Editorial Hero */}
      <Hero />

      {/* 2. Brand Story & Heritage Pillars */}
      <BrandStory story={brandStory} />

      {/* 3. Featured Signature Collections */}
      <NewCollections collections={featuredCollections} />

      {/* 4. New Arrivals & Curated Highlights */}
      <FeaturedProducts products={featuredProducts} />

      {/* 5. Editorial Lookbook Experience */}
      <EditorialLookbook campaign={lookbookCampaign} />

      {/* 6. High-Fashion Editorial Quote Banner */}
      <EditorialBridge />

      {/* 7. Artisanal Craftsmanship & Silk Heritage */}
      <Craftsmanship />

      {/* 8. Patronage Reflections & Luxury Community */}
      <LuxuryTestimonials testimonials={testimonials} stats={stats} />

      {/* 9. Journal Preview & Style Guides */}
      <JournalPreview />

      {/* 10. Instagram Community 1:1 Gallery */}
      <InstagramPreview />

      {/* 11. Private Correspondence Newsletter */}
      <Newsletter />

      {/* 12. WhatsApp Concierge CTA */}
      <WhatsAppSection />
    </>
  );
}
