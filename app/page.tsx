import { services } from "@/services";
import { Hero } from "@/components/sections/Hero";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { NewCollections } from "@/components/sections/NewCollections";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { BrandStatement } from "@/components/sections/BrandStatement";

export default async function Home() {
  const [featuredProductsRes, featuredCollectionsRes] = await Promise.all([
    services.product.getFeaturedProducts(8),
    services.collection.getFeaturedCollections(3),
  ]);

  const featuredProducts = featuredProductsRes.isSuccess ? featuredProductsRes.value : [];
  const featuredCollections = featuredCollectionsRes.isSuccess ? featuredCollectionsRes.value : [];

  return (
    <>
      {/* 1. Minimal Editorial Hero: NEW COLLECTION FEMME, HER, SHE */}
      <Hero />

      {/* 2. 6-Category Visual Exploration Grid */}
      <CategoriesSection />

      {/* 3. Featured Signature Collections (FEMME, HER, SHE) */}
      <NewCollections collections={featuredCollections} />

      {/* 4. Curated New Arrivals / Showcase */}
      <ProductShowcase products={featuredProducts} />

      {/* 5. Minimal Brand Philosophy & Statement */}
      <BrandStatement />
    </>
  );
}
