import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { collectionsData } from "@/data/collections";
import { productsData } from "@/data/products";
import { Metadata } from "next";
import { CollectionDetailClient } from "@/components/collections/CollectionDetailClient";
import { ChevronRight } from "lucide-react";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const collection = collectionsData.find((c) => c.slug === params.slug);
  if (!collection) return { title: "Collection Not Found | AISCHMIRA" };
  
  return {
    title: `${collection.name} Collection | AISCHMIRA`,
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
  const relatedCollections = collectionsData.filter((c) => c.id !== collection.id).slice(0, 3);

  return (
    <div className="pt-[88px] pb-24 md:pb-36 bg-background min-h-screen">
      
      {/* Collection Hero Banner */}
      <div className="relative w-full h-[50vh] md:h-[60vh] mb-12 md:mb-16 bg-text">
        <Image 
          src={collection.coverImage} 
          alt={collection.name} 
          fill 
          className="object-cover object-center scale-[1.02]"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center px-6">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase text-surface/70">
              <li><Link href="/" className="hover:text-surface transition-colors">Home</Link></li>
              <li><ChevronRight size={10} className="text-surface/40" /></li>
              <li><Link href="/collections" className="hover:text-surface transition-colors">Collections</Link></li>
              <li><ChevronRight size={10} className="text-surface/40" /></li>
              <li className="text-surface font-medium">{collection.name}</li>
            </ol>
          </nav>

          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-surface/80 mb-3 block">
            {collection.category} Edit
          </span>
          <h1 className="font-heading italic text-5xl md:text-7xl lg:text-8xl text-surface mb-6 drop-shadow-lg font-light">
            {collection.name}
          </h1>
          <p className="font-body text-xs md:text-sm tracking-editorial uppercase text-surface/90 max-w-[760px] leading-relaxed drop-shadow-md font-light">
            {collection.description}
          </p>
        </div>
      </div>

      {/* Interactive Products, Filters & Narrative Details */}
      <CollectionDetailClient
        collection={collection}
        products={products}
        allProducts={productsData}
        relatedCollections={relatedCollections}
      />

    </div>
  );
}
