import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { collectionsData } from "@/data/collections";
import { productsData } from "@/data/products";
import { Metadata } from "next";
import { ProductCard } from "@/components/ui/ProductCard";

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
      <div className="relative w-full h-[50vh] md:h-[60vh] mb-16 md:mb-24">
        <Image 
          src={collection.coverImage} 
          alt={collection.name} 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
          <h1 className="font-heading italic text-5xl md:text-7xl text-surface mb-6 drop-shadow-lg">{collection.name}</h1>
          <p className="font-body text-xs md:text-sm tracking-editorial uppercase text-surface max-w-2xl leading-relaxed drop-shadow-md">
            {collection.description}
          </p>
        </div>
      </div>

      {/* Toolbar / Filters (Mockup) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-center border-b border-border/50 pb-6">
        <p className="font-body text-[10px] tracking-widest uppercase text-text/60">
          {products.length} {products.length === 1 ? 'Product' : 'Products'}
        </p>
        <button className="font-body text-[10px] tracking-widest uppercase text-text hover:text-primary transition-colors">
          Filter & Sort +
        </button>
      </div>

      {/* Product Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="font-body text-xs tracking-widest uppercase text-text/50">No products available in this collection.</p>
          </div>
        )}
      </div>

    </div>
  );
}
