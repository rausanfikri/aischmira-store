import Image from "next/image";
import Link from "next/link";
import { collectionsData } from "@/data/collections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | AISCHMIRA",
  description: "Explore the complete collections of AISCHMIRA premium luxury fashion.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-6">Collections</h1>
          <p className="font-body text-xs tracking-editorial uppercase text-text/50 leading-relaxed">
            Discover our curated edits, designed for the modern woman who values timeless elegance and impeccable craftsmanship.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {collectionsData.map((collection, idx) => (
            <Link 
              key={collection.id} 
              href={`/collections/${collection.slug}`}
              className="group block relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={collection.coverImage}
                alt={collection.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s]"
                priority={idx < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-8 md:p-10 transition-opacity duration-500 group-hover:opacity-90">
                <h2 className="font-heading italic text-3xl md:text-4xl text-surface mb-3 tracking-wide">{collection.name}</h2>
                <p className="font-body text-xs tracking-widest uppercase text-surface/80 group-hover:text-primary transition-colors">
                  Explore Edit
                </p>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}
