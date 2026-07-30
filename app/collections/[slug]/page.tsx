import { notFound } from "next/navigation";
import { Metadata } from "next";
import { collectionService } from "@/services/collection.service";
import { productService } from "@/services/product.service";
import { CollectionDetailHero } from "@/components/collections/CollectionDetailHero";
import { CollectionEditorialStory } from "@/components/collections/CollectionEditorialStory";
import { CollectionInfoSpecs } from "@/components/collections/CollectionInfoSpecs";
import { CollectionFeaturedLooks } from "@/components/collections/CollectionFeaturedLooks";
import { CollectionDetailClient } from "@/components/collections/CollectionDetailClient";
import { CollectionDetailRelated } from "@/components/collections/CollectionDetailRelated";
import { CollectionEditorialCTA } from "@/components/collections/CollectionEditorialCTA";

interface CollectionDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CollectionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await collectionService.getCollectionBySlug(slug);
  const collection = result.isSuccess ? result.value : null;

  if (!collection) return { title: "Collection Not Found | AISCHMIRA" };

  return {
    title: `${collection.name} Collection | AISCHMIRA Luxury Editorial`,
    description: collection.description,
    openGraph: {
      title: `${collection.name} Collection | AISCHMIRA`,
      description: collection.description,
      images: collection.coverImage ? [{ url: collection.coverImage }] : [],
    },
  };
}

export async function generateStaticParams() {
  const result = await collectionService.getCollections();
  const collections = result.isSuccess ? result.value : [];
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function CollectionDetailPage({ params }: CollectionDetailPageProps) {
  const { slug } = await params;
  const collectionResult = await collectionService.getCollectionBySlug(slug);
  const collection = collectionResult.isSuccess ? collectionResult.value : null;

  if (!collection) notFound();

  // Fetch products via ProductService filtering for this collection
  const productsResult = await productService.getProducts();
  const allProducts = productsResult.isSuccess ? productsResult.value : [];
  const products = allProducts.filter((p) => p.collectionId === collection.id);

  // Fetch related collections dynamically via CollectionService
  const collectionsResult = await collectionService.getCollections();
  const allCollections = collectionsResult.isSuccess ? collectionsResult.value : [];
  const relatedCollections = allCollections.filter((c) => c.id !== collection.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-background pt-[72px] md:pt-[88px]">
      {/* 1. Collection Hero Section */}
      <CollectionDetailHero collection={collection} productCount={products.length} />

      {/* 2. Editorial Story Narrative */}
      <CollectionEditorialStory collection={collection} />

      {/* 3. Collection Information & Atelier Specs */}
      <CollectionInfoSpecs collection={collection} />

      {/* 4. Featured Lookbook Showcase */}
      <CollectionFeaturedLooks collection={collection} products={products} />

      {/* 5. Product Showcase Catalog with Multi-Facet Filters & Sorting */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="font-body text-[10px] tracking-[0.35em] uppercase text-primary font-bold block">
              Curated Garment Catalog
            </span>
            <h2 className="font-heading italic text-3xl sm:text-4xl text-text">
              The Complete {collection.name} Wardrobe
            </h2>
          </div>

          <CollectionDetailClient
            collection={collection}
            products={products}
            allProducts={allProducts}
            relatedCollections={relatedCollections}
          />
        </div>
      </section>

      {/* 6. Dynamic Related Collections */}
      <CollectionDetailRelated relatedCollections={relatedCollections} />

      {/* 7. Concierge & Personal Styling CTA */}
      <CollectionEditorialCTA collection={collection} />
    </main>
  );
}
