"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Collection, Product } from "@/types";
import { cn } from "@/lib/utils";

interface CollectionsClientProps {
  collections: Collection[];
  products: Product[];
}

export function CollectionsClient({ collections, products }: CollectionsClientProps) {
  const [activeTab, setActiveTab] = React.useState<"all" | "apparel" | "scarves">("all");

  const categoryTabs = [
    { id: "all", label: "All Collections" },
    { id: "apparel", label: "Apparel & Ready-to-Wear" },
    { id: "scarves", label: "Silk Scarves & Accessories" },
  ];

  // Helper to count products per collection
  const getProductCount = (collectionId: string) => {
    return products.filter((p) => p.collectionId === collectionId).length;
  };

  const filteredCollections = collections.filter((c) => {
    if (activeTab === "all") return true;
    if (activeTab === "scarves") return c.id.startsWith("col_am_") || c.id.includes("scarf") || c.name.toLowerCase().includes("monogram") || c.name.toLowerCase().includes("floral") || c.name.toLowerCase().includes("chic") || c.name.toLowerCase().includes("bloom") || c.name.toLowerCase().includes("blossom");
    if (activeTab === "apparel") return !c.id.startsWith("col_am_") && !c.name.toLowerCase().includes("monogram") && !c.name.toLowerCase().includes("floral") && !c.name.toLowerCase().includes("chic") && !c.name.toLowerCase().includes("bloom") && !c.name.toLowerCase().includes("blossom");
    return true;
  });

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex justify-center items-center gap-4 md:gap-8 border-b border-border/40 pb-6 overflow-x-auto no-scrollbar">
        {categoryTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "all" | "apparel" | "scarves")}
            className={cn(
              "font-body text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 pb-2 relative whitespace-nowrap",
              activeTab === tab.id
                ? "text-text font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-text"
                : "text-text/50 hover:text-text"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredCollections.map((collection, idx) => {
          const count = getProductCount(collection.id);
          return (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="group block relative aspect-[3/4] overflow-hidden bg-surface rounded-sm"
            >
              <Image
                src={collection.coverImage}
                alt={collection.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s]"
                priority={idx < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10 transition-opacity duration-500 group-hover:opacity-90">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-[9px] tracking-widest uppercase text-surface/70">
                    {count} {count === 1 ? "Item" : "Items"}
                  </span>
                  {collection.isFeatured && (
                    <span className="font-body text-[8px] tracking-widest uppercase text-primary border border-primary/40 px-2 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="font-heading italic text-3xl md:text-4xl text-surface mb-3 tracking-wide">
                  {collection.name}
                </h2>
                <p className="font-body text-xs text-surface/80 line-clamp-2 mb-4 font-light leading-relaxed">
                  {collection.description}
                </p>
                <p className="font-body text-[10px] tracking-widest uppercase text-surface group-hover:text-primary transition-colors flex items-center gap-2">
                  Explore Edit <span className="text-xs">&rarr;</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
