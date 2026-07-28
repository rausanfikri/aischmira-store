"use client";

import * as React from "react";
import Link from "next/link";
import { Product, Collection } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";
import { SlidersHorizontal, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollectionDetailClientProps {
  collection: Collection;
  products: Product[];
  allProducts: Product[];
}

export function CollectionDetailClient({ collection, products, allProducts }: CollectionDetailClientProps) {
  const [sortBy, setSortBy] = React.useState<"featured" | "price-asc" | "price-desc" | "newest">("featured");
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  // Extract available colors and sizes across products in this collection
  const availableColors = Array.from(
    new Set(products.flatMap((p) => p.variants.map((v) => v.color)))
  ).filter((c) => c !== "OS");

  const availableSizes = Array.from(
    new Set(products.flatMap((p) => p.variants.map((v) => v.size)))
  ).filter((s) => s !== "OS");

  // Apply filtering
  let filteredProducts = products.filter((product) => {
    if (selectedColor) {
      const hasColor = product.variants.some((v) => v.color.toLowerCase() === selectedColor.toLowerCase());
      if (!hasColor) return false;
    }
    if (selectedSize) {
      const hasSize = product.variants.some((v) => v.size.toUpperCase() === selectedSize.toUpperCase());
      if (!hasSize) return false;
    }
    return true;
  });

  // Apply sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.basePrice - b.basePrice;
    if (sortBy === "price-desc") return b.basePrice - a.basePrice;
    if (sortBy === "newest") return new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime();
    return 0;
  });

  const activeFilterCount = (selectedColor ? 1 : 0) + (selectedSize ? 1 : 0);

  const clearFilters = () => {
    setSelectedColor(null);
    setSelectedSize(null);
    setSortBy("featured");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-text/50">
          <li>
            <Link href="/" className="hover:text-text transition-colors">Home</Link>
          </li>
          <li>
            <ChevronRight size={12} className="text-text/30" />
          </li>
          <li>
            <Link href="/collections" className="hover:text-text transition-colors">Collections</Link>
          </li>
          <li>
            <ChevronRight size={12} className="text-text/30" />
          </li>
          <li className="text-text font-medium">{collection.name}</li>
        </ol>
      </nav>

      {/* Toolbar & Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-6 mb-12">
        <div className="flex items-center gap-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-text/60">
            Showing {filteredProducts.length} of {products.length} {products.length === 1 ? "Piece" : "Pieces"}
          </p>
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="font-body text-[10px] tracking-widest uppercase text-primary hover:underline flex items-center gap-1"
            >
              Clear Filters ({activeFilterCount}) <X size={12} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-6">
          {/* Toggle Filters Drawer */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-text hover:text-primary transition-colors border border-border/60 px-4 py-2 rounded-sm"
          >
            <SlidersHorizontal size={14} />
            Filter {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-text/70">
            <span className="hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "featured" | "price-asc" | "price-desc" | "newest")}
              className="bg-transparent border-b border-border/50 text-text font-body text-[10px] tracking-widest uppercase py-1 focus:outline-none focus:border-text"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrival</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Collapsible Filter Panel */}
      {isFilterOpen && (
        <div className="bg-surface/80 p-6 border border-border/40 mb-12 rounded-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Color Filter */}
            {availableColors.length > 0 && (
              <div>
                <span className="font-body text-[10px] tracking-widest uppercase text-text/60 block mb-3">Filter by Color</span>
                <div className="flex flex-wrap gap-2">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                      className={cn(
                        "font-body text-[10px] tracking-widest uppercase px-3 py-1.5 border transition-all rounded-sm",
                        selectedColor === color
                          ? "border-text bg-text text-surface"
                          : "border-border/50 text-text/70 hover:border-text hover:text-text"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Filter */}
            {availableSizes.length > 0 && (
              <div>
                <span className="font-body text-[10px] tracking-widest uppercase text-text/60 block mb-3">Filter by Size</span>
                <div className="flex flex-wrap gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                      className={cn(
                        "font-body text-[10px] tracking-widest uppercase px-3.5 py-1.5 border transition-all rounded-sm",
                        selectedSize === size
                          ? "border-text bg-text text-surface"
                          : "border-border/50 text-text/70 hover:border-text hover:text-text"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Active Filter Badges */}
      {(selectedColor || selectedSize) && (
        <div className="flex items-center gap-2 mb-8">
          <span className="font-body text-[10px] tracking-widest uppercase text-text/50">Active:</span>
          {selectedColor && (
            <span className="inline-flex items-center gap-1 font-body text-[10px] tracking-widest uppercase bg-surface px-3 py-1 border border-border/50 text-text">
              Color: {selectedColor}
              <button onClick={() => setSelectedColor(null)} className="hover:text-primary"><X size={12} /></button>
            </span>
          )}
          {selectedSize && (
            <span className="inline-flex items-center gap-1 font-body text-[10px] tracking-widest uppercase bg-surface px-3 py-1 border border-border/50 text-text">
              Size: {selectedSize}
              <button onClick={() => setSelectedSize(null)} className="hover:text-primary"><X size={12} /></button>
            </span>
          )}
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 space-y-6 bg-surface/40 border border-border/30 rounded-sm">
          <p className="font-heading italic text-2xl text-text">No items match your criteria</p>
          <p className="font-body text-xs tracking-widest uppercase text-text/50 max-w-md mx-auto">
            Try adjusting your active filters or explore our complete catalog.
          </p>
          <button
            onClick={clearFilters}
            className="inline-block bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-primary transition-colors rounded-sm"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Bottom Recommendation if collection is small */}
      {filteredProducts.length < 4 && allProducts.length > 0 && (
        <div className="mt-24 pt-16 border-t border-border/40">
          <h3 className="font-heading italic text-2xl md:text-3xl text-center text-text mb-12">You May Also Admire</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
            {allProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
