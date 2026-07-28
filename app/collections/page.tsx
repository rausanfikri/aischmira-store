import { collectionsData } from "@/data/collections";
import { productsData } from "@/data/products";
import { Metadata } from "next";
import { CollectionsClient } from "@/components/collections/CollectionsClient";

export const metadata: Metadata = {
  title: "Collections | AISCHMIRA",
  description: "Explore the complete luxury collections of AISCHMIRA premium fashion.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 block mb-3">AISCHMIRA Flagship</span>
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-6">Collections</h1>
          <p className="font-body text-xs tracking-editorial uppercase text-text/60 leading-relaxed max-w-2xl mx-auto">
            Discover our curated edits, designed for the modern visionary who values timeless elegance, pure silk, and meticulous craftsmanship.
          </p>
        </div>

        {/* Client Interactive Collections */}
        <CollectionsClient collections={collectionsData} products={productsData} />
        
      </div>
    </div>
  );
}

