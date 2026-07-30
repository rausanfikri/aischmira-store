import { Metadata } from "next";
import { collectionService } from "@/services/collection.service";
import { productService } from "@/services/product.service";
import { Collection } from "@/domain/collection";
import { CollectionsHero } from "@/components/collections/CollectionsHero";
import { CollectionsEditorialIntro } from "@/components/collections/CollectionsEditorialIntro";
import { CollectionsClient } from "@/components/collections/CollectionsClient";
import { CollectionHighlightSection } from "@/components/collections/CollectionHighlightSection";
import { SeasonalCampaignBanner } from "@/components/collections/SeasonalCampaignBanner";
import { RelatedCollectionsSection } from "@/components/collections/RelatedCollectionsSection";
import { CollectionsNewsletterCTA } from "@/components/collections/CollectionsNewsletterCTA";

export const metadata: Metadata = {
  title: "Flagship Collections | AISCHMIRA Luxury Editorial",
  description:
    "Discover the complete luxury flagship collections of AISCHMIRA. Pure Mulberry silk satin, architectural tailoring, and Indonesian heritage craftsmanship.",
  openGraph: {
    title: "Flagship Collections | AISCHMIRA",
    description:
      "Discover the complete luxury flagship collections of AISCHMIRA. Pure Mulberry silk satin, architectural tailoring, and Indonesian heritage craftsmanship.",
  },
};

export default async function CollectionsPage() {
  // Fetch collections via CollectionService
  const collectionsResult = await collectionService.getCollections();
  const collections: Collection[] = collectionsResult.isSuccess ? collectionsResult.value : [];

  // Fetch products via ProductService to compute product counts per collection
  const productsResult = await productService.getProducts();
  const products = productsResult.isSuccess ? productsResult.value : [];

  // Compute product count per collection ID
  const productCounts: Record<string, number> = {};
  products.forEach((product) => {
    if (product.collectionId) {
      productCounts[product.collectionId] = (productCounts[product.collectionId] || 0) + 1;
    }
  });

  // Select spotlight collection for highlight section (e.g. FEMME or first featured)
  const spotlightCollection =
    collections.find((c) => c.slug === "femme" || c.featured) || collections[0];

  return (
    <main className="min-h-screen bg-background">
      {/* 1. Magazine Editorial Hero */}
      <CollectionsHero totalCollections={collections.length} />

      {/* 2. Editorial Introduction Narrative */}
      <CollectionsEditorialIntro />

      {/* 3. Main Interactive Collection Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <CollectionsClient collections={collections} productCounts={productCounts} />
        </div>
      </section>

      {/* 4. Collection Spotlight Highlight */}
      {spotlightCollection && (
        <CollectionHighlightSection
          collection={spotlightCollection}
          productCount={productCounts[spotlightCollection.id] || 0}
        />
      )}

      {/* 5. Seasonal Campaign Visual Break */}
      <SeasonalCampaignBanner />

      {/* 6. Related Exploratory Edits */}
      <RelatedCollectionsSection collections={collections} />

      {/* 7. VIP Newsletter & Privé Atelier Invitation */}
      <CollectionsNewsletterCTA />
    </main>
  );
}
