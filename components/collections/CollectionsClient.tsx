"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { ExtendedCollection } from "@/data/collections";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CollectionsClientProps {
  collections: ExtendedCollection[];
  products: Product[];
}

export function CollectionsClient({ collections, products }: CollectionsClientProps) {
  const [activeCategory, setActiveCategory] = React.useState<"all" | "newest" | "classic" | "scarf">("all");
  const [sortBy, setSortBy] = React.useState<"featured" | "newest" | "alpha">("featured");

  const categoryTabs = [
    { id: "all", label: "All Collections" },
    { id: "newest", label: "Newest Edits" },
    { id: "classic", label: "Classic Line" },
    { id: "scarf", label: "Silk Scarves" },
  ];

  // Helper to count products per collection
  const getProductCount = (collectionId: string) => {
    return products.filter((p) => p.collectionId === collectionId).length;
  };

  // Filter collections
  let filteredCollections = collections.filter((c) => {
    if (activeCategory === "all") return true;
    return c.category === activeCategory;
  });

  // Sort collections
  filteredCollections = [...filteredCollections].sort((a, b) => {
    if (sortBy === "alpha") return a.name.localeCompare(b.name);
    if (sortBy === "newest") {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA;
    }
    // Default featured sort
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return 0;
  });

  return (
    <div className="space-y-12">
      
      {/* Controls Bar: Segmented Category Pills + Sort Selector */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-border/40 pb-6">
        
        {/* Category Segmented Controls */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar max-w-full pb-2 md:pb-0">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as "all" | "newest" | "classic" | "scarf")}
              className={cn(
                "font-body text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 px-4 py-2 rounded-sm border whitespace-nowrap font-medium",
                activeCategory === tab.id
                  ? "bg-text text-surface border-text shadow-sm"
                  : "bg-surface text-text/70 border-border/50 hover:border-text hover:text-text"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-3 font-body text-[10px] tracking-widest uppercase text-text/60 self-end md:self-auto">
          <span>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "featured" | "newest" | "alpha")}
            className="bg-transparent border-b border-border/60 text-text font-body text-[10px] tracking-widest uppercase py-1 focus:outline-none focus:border-primary cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest First</option>
            <option value="alpha">Alphabetical (A&ndash;Z)</option>
          </select>
        </div>

      </div>

      {/* Collection Cards Grid (Standard Gap 32px desktop, 24px tablet, 16px mobile) */}
      {filteredCollections.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredCollections.map((collection, idx) => {
            const count = getProductCount(collection.id);
            return (
              <React.Fragment key={collection.id}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: (idx % 3) * 0.15 }}
                  className="group flex flex-col bg-surface border border-border/40 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
                >
                  {/* Image Cover */}
                  <Link
                    href={`/collections/${collection.slug}`}
                    className="relative w-full aspect-[3/4] overflow-hidden bg-background block"
                  >
                    <Image
                      src={collection.coverImage}
                      alt={collection.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                      priority={idx < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-surface">
                      <span className="font-body text-[8px] tracking-[0.25em] uppercase text-surface/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-sm border border-surface/20">
                        {collection.category}
                      </span>
                      {collection.isFeatured && (
                        <span className="font-body text-[8px] tracking-[0.25em] uppercase text-primary bg-black/60 backdrop-blur-md border border-primary/40 px-2.5 py-1 rounded-sm font-bold">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-surface">
                      <h2 className="font-heading italic text-3xl md:text-4xl text-surface tracking-wide drop-shadow-md">
                        {collection.name}
                      </h2>
                    </div>
                  </Link>

                  {/* Card Information Body */}
                  <div className="p-6 md:p-8 flex flex-col flex-1 justify-between space-y-6">
                    <div className="space-y-3">
                      <span className="font-body text-[9px] tracking-widest uppercase text-text/40 block">
                        {count} {count === 1 ? "Curated Piece" : "Curated Pieces"}
                      </span>
                      <p className="font-body text-xs text-text/70 leading-relaxed font-light line-clamp-2">
                        {collection.description}
                      </p>
                    </div>

                    <Link
                      href={`/collections/${collection.slug}`}
                      className="w-full bg-text text-surface hover:bg-primary transition-colors font-body text-[10px] tracking-[0.2em] uppercase py-3.5 rounded-sm font-medium text-center block"
                    >
                      Explore Collection
                    </Link>
                  </div>
                </motion.div>

                {/* Editorial Break Card after every 6th Collection */}
                {idx === 5 && (
                  <div className="col-span-full my-6 p-10 bg-surface border border-border/40 text-center space-y-3 rounded-sm">
                    <span className="font-body text-[9px] tracking-[0.3em] uppercase text-primary font-bold block">
                      Craft & Lineage
                    </span>
                    <h3 className="font-heading italic text-3xl text-text font-light">
                      &ldquo;Conceived in quiet elegance. Born of pure mulberry silk.&rdquo;
                    </h3>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        /* Luxury Empty State */
        <div className="text-center py-24 px-6 bg-surface/50 border border-border/40 rounded-sm space-y-4 max-w-md mx-auto">
          <p className="font-heading italic text-3xl text-text font-light">No Collections Match</p>
          <p className="font-body text-xs text-text/60 tracking-editorial uppercase font-light leading-relaxed">
            There are currently no collections under this specific category filter.
          </p>
          <button
            onClick={() => setActiveCategory("all")}
            className="mt-2 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-3.5 px-8 rounded-sm hover:bg-primary transition-colors inline-block"
          >
            Show All Collections
          </button>
        </div>
      )}

    </div>
  );
}
