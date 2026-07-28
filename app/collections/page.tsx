import { collectionsData } from "@/data/collections";
import { productsData } from "@/data/products";
import { Metadata } from "next";
import { CollectionsClient } from "@/components/collections/CollectionsClient";

export const metadata: Metadata = {
  title: "Flagship Collections | AISCHMIRA",
  description: "Explore the complete luxury collections of AISCHMIRA premium fashion.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-12 md:pt-16 pb-24 md:pb-36 bg-background min-h-screen">
      <div className="container-custom">
        
        {/* Header Hero Banner */}
        <div className="text-center max-w-[760px] mx-auto mb-16 md:mb-24">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block mb-3 font-medium">
            AISCHMIRA Flagship Catalog
          </span>
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-6">
            Flagship Collections
          </h1>
          <p className="font-body text-xs md:text-sm tracking-editorial uppercase text-text/60 leading-relaxed font-light">
            Discover our curated edits, designed for the modern visionary who values timeless elegance, pure silk, and Indonesian heritage craftsmanship.
          </p>
        </div>

        {/* Client Interactive Filter & Collection Cards */}
        <CollectionsClient collections={collectionsData} products={productsData} />
        
      </div>
    </div>
  );
}
