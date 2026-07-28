import { notFound } from "next/navigation";
import Image from "next/image";
import { collectionsData } from "@/data/collections";
import { productsData } from "@/data/products";
import { Metadata } from "next";
import { CollectionDetailClient } from "@/components/collections/CollectionDetailClient";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const collection = collectionsData.find((c) => c.slug === params.slug);
  if (!collection) return { title: "Collection Not Found | AISCHMIRA" };
  
  return {
    title: `${collection.name} | AISCHMIRA`,
    description: collection.description,
  };
}

export function generateStaticParams() {
  return collectionsData.map((c) => ({ slug: c.slug }));
}

export default function CollectionDetailPage({ params }: { params: { slug: string } }) {
  const collection = collectionsData.find((c) => c.slug === params.slug);
  if (!collection) notFound();

  const products = productsData.filter((p) => p.collectionId === collection.id);

  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      
      {/* Collection Hero */}
      <div className="relative w-full h-[45vh] md:h-[55vh] mb-12 md:mb-16">
        <Image 
          src={collection.coverImage} 
          alt={collection.name} 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-surface/80 mb-2">Exclusive Edit</span>
          <h1 className="font-heading italic text-5xl md:text-7xl text-surface mb-6 drop-shadow-lg">{collection.name}</h1>
          <p className="font-body text-xs md:text-sm tracking-editorial uppercase text-surface/90 max-w-2xl leading-relaxed drop-shadow-md">
            {collection.description}
          </p>
        </div>
      </div>

      {/* Interactive Products & Filters */}
      <CollectionDetailClient collection={collection} products={products} allProducts={productsData} />

    </div>
  );
}

