"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/domain/product";
import { Collection } from "@/domain/collection";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductCardSkeleton } from "@/components/ui/SkeletonLoader";
import { SlidersHorizontal, X, MessageCircle, Gem, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollectionDetailClientProps {
  collection: Collection;
  products: Product[];
  allProducts?: Product[];
  relatedCollections: Collection[];
}

export function CollectionDetailClient({
  collection,
  products,
  relatedCollections,
}: CollectionDetailClientProps) {
  const [sortBy, setSortBy] = React.useState<"featured" | "newest" | "price-asc" | "price-desc" | "best-selling">("featured");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
  const [priceRange, setPriceRange] = React.useState<"all" | "under-1m" | "1m-2m" | "above-2m">("all");
  const [availability, setAvailability] = React.useState<"all" | "in-stock" | "pre-order">("all");
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(8);
  const [isLoading, setIsLoading] = React.useState(false);

  // Extract available categories, colors, sizes
  const availableCategories = Array.from(new Set(products.map((p) => p.categoryId)));
  const availableColors = Array.from(
    new Set(products.flatMap((p) => p.variants.map((v) => v.color)))
  ).filter((c) => c !== "OS");
  const availableSizes = Array.from(
    new Set(products.flatMap((p) => p.variants.map((v) => v.size)))
  ).filter((s) => s !== "OS");

  // Filter products
  let filteredProducts = products.filter((product) => {
    if (selectedCategory && product.categoryId !== selectedCategory) return false;
    
    if (selectedColor) {
      const hasColor = product.variants.some((v) => v.color.toLowerCase() === selectedColor.toLowerCase());
      if (!hasColor) return false;
    }
    
    if (selectedSize) {
      const hasSize = product.variants.some((v) => v.size.toUpperCase() === selectedSize.toUpperCase());
      if (!hasSize) return false;
    }

    const productPrice = product.price ?? (product as unknown as { basePrice?: number }).basePrice ?? 0;
    if (priceRange === "under-1m" && productPrice >= 1000000) return false;
    if (priceRange === "1m-2m" && (productPrice < 1000000 || productPrice > 2000000)) return false;
    if (priceRange === "above-2m" && productPrice <= 2000000) return false;

    if (availability === "in-stock") {
      const hasStock = product.variants.some((v) => v.stock > 0);
      if (!hasStock) return false;
    }

    return true;
  });

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    const priceA = a.price ?? (a as unknown as { basePrice?: number }).basePrice ?? 0;
    const priceB = b.price ?? (b as unknown as { basePrice?: number }).basePrice ?? 0;
    if (sortBy === "price-asc") return priceA - priceB;
    if (sortBy === "price-desc") return priceB - priceA;
    if (sortBy === "newest") return new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime();
    if (sortBy === "best-selling") return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    return 0;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const activeFilterCount =
    (selectedCategory ? 1 : 0) +
    (selectedColor ? 1 : 0) +
    (selectedSize ? 1 : 0) +
    (priceRange !== "all" ? 1 : 0) +
    (availability !== "all" ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedColor(null);
    setSelectedSize(null);
    setPriceRange("all");
    setAvailability("all");
    setSortBy("featured");
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="container-custom space-y-20 md:space-y-28">
      
      {/* Editorial Story & Designer Notes Banner */}
      {(collection.story || collection.designerNotes) && (
        <section className="bg-surface p-8 md:p-14 border border-border/40 rounded-sm shadow-sm max-w-[960px] mx-auto space-y-8 text-center">
          <div className="space-y-4">
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block font-medium">
              Curator Narrative
            </span>
            <h2 className="font-heading italic text-3xl md:text-4xl text-text font-light">
              Collection Story & Craft
            </h2>
            <p className="font-body text-xs md:text-sm text-text/70 leading-relaxed font-light prose-reading">
              {collection.story || collection.description}
            </p>
          </div>

          {collection.designerNotes && (
            <div className="pt-6 border-t border-border/30 max-w-xl mx-auto space-y-2">
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-primary font-bold flex items-center justify-center gap-1.5">
                <Sparkles size={12} /> Designer Notes
              </span>
              <p className="font-body text-xs text-text/60 italic font-light">
                &ldquo;{collection.designerNotes}&rdquo;
              </p>
            </div>
          )}

          {/* Materials Badges */}
          {collection.materials && collection.materials.length > 0 && (
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              {collection.materials.map((mat) => (
                <span
                  key={mat}
                  className="font-body text-[9px] tracking-widest uppercase bg-background border border-border/40 text-text/80 px-3.5 py-1.5 rounded-sm flex items-center gap-1.5"
                >
                  <Gem size={12} className="text-primary" /> {mat}
                </span>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Toolbar & Filter Bar */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-6 mb-10">
          <div className="flex items-center gap-4">
            <p className="font-body text-[10px] tracking-widest uppercase text-text/60 font-medium">
              Showing {displayedProducts.length} of {filteredProducts.length} {filteredProducts.length === 1 ? "Piece" : "Pieces"}
            </p>
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="font-body text-[10px] tracking-widest uppercase text-primary hover:underline flex items-center gap-1 font-medium"
              >
                Clear Filters ({activeFilterCount}) <X size={12} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-text hover:text-primary transition-colors border border-border/60 px-4 py-2 rounded-sm font-medium bg-surface"
            >
              <SlidersHorizontal size={14} />
              Filter {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>

            <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-text/70">
              <span className="hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "featured" | "newest" | "price-asc" | "price-desc" | "best-selling")}
                className="bg-transparent border-b border-border/50 text-text font-body text-[10px] tracking-widest uppercase py-1 focus:outline-none focus:border-text cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest Arrival</option>
                <option value="best-selling">Best Selling</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Collapsible Multi-Facet Filter Panel */}
        {isFilterOpen && (
          <div className="bg-surface p-6 sm:p-8 border border-border/40 mb-12 rounded-sm space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              
              {/* Category Filter */}
              {availableCategories.length > 0 && (
                <div>
                  <span className="font-body text-[10px] tracking-widest uppercase text-text/60 block mb-3 font-medium">
                    Category
                  </span>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={cn(
                        "text-left font-body text-[10px] tracking-widest uppercase py-1 transition-colors",
                        selectedCategory === null ? "text-primary font-bold" : "text-text/70 hover:text-text"
                      )}
                    >
                      All Categories
                    </button>
                    {availableCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                        className={cn(
                          "text-left font-body text-[10px] tracking-widest uppercase py-1 transition-colors",
                          selectedCategory === cat ? "text-primary font-bold" : "text-text/70 hover:text-text"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Filter */}
              {availableColors.length > 0 && (
                <div>
                  <span className="font-body text-[10px] tracking-widest uppercase text-text/60 block mb-3 font-medium">
                    Color
                  </span>
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
                  <span className="font-body text-[10px] tracking-widest uppercase text-text/60 block mb-3 font-medium">
                    Size
                  </span>
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

              {/* Price & Availability Filter */}
              <div className="space-y-6">
                <div>
                  <span className="font-body text-[10px] tracking-widest uppercase text-text/60 block mb-3 font-medium">
                    Price Range
                  </span>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value as "all" | "under-1m" | "1m-2m" | "above-2m")}
                    className="w-full bg-background border border-border/50 rounded-sm text-text font-body text-[10px] tracking-widest uppercase p-2 focus:outline-none"
                  >
                    <option value="all">All Prices</option>
                    <option value="under-1m">Under Rp 1.000.000</option>
                    <option value="1m-2m">Rp 1.000.000 – Rp 2.000.000</option>
                    <option value="above-2m">Above Rp 2.000.000</option>
                  </select>
                </div>

                <div>
                  <span className="font-body text-[10px] tracking-widest uppercase text-text/60 block mb-3 font-medium">
                    Availability
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setAvailability(availability === "in-stock" ? "all" : "in-stock")}
                      className={cn(
                        "font-body text-[9px] tracking-widest uppercase px-3 py-1.5 border rounded-sm transition-all",
                        availability === "in-stock" ? "border-emerald-700 bg-emerald-50 text-emerald-900 font-bold" : "border-border/50 text-text/70"
                      )}
                    >
                      In Stock Only
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Active Filter Badges */}
        {activeFilterCount > 0 && (
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <span className="font-body text-[10px] tracking-widest uppercase text-text/50">Active:</span>
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 font-body text-[10px] tracking-widest uppercase bg-surface px-3 py-1 border border-border/50 text-text">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory(null)} className="hover:text-primary"><X size={12} /></button>
              </span>
            )}
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
            {priceRange !== "all" && (
              <span className="inline-flex items-center gap-1 font-body text-[10px] tracking-widest uppercase bg-surface px-3 py-1 border border-border/50 text-text">
                Price: {priceRange}
                <button onClick={() => setPriceRange("all")} className="hover:text-primary"><X size={12} /></button>
              </span>
            )}
          </div>
        )}

        {/* Featured Products Grid with INLINE EDITORIAL CONTENT BLOCKS */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {displayedProducts.map((product, idx) => (
              <React.Fragment key={product.sku || (product as unknown as { id?: string }).id || idx}>
                {/* Regular Product Card */}
                <ProductCard product={product} />

                {/* INLINE EDITORIAL BLOCK inserted after the 4th item in grid */}
                {idx === 3 && (
                  <div className="col-span-full my-8 bg-surface p-10 md:p-14 border border-border/40 rounded-sm text-center space-y-4">
                    <span className="font-body text-[9px] tracking-[0.3em] uppercase text-primary font-bold block">
                      Editorial Pause
                    </span>
                    <h3 className="font-heading italic text-3xl md:text-4xl text-text font-light max-w-xl mx-auto">
                      &ldquo;Every seam tells a story of patience, Mulberry silk, and quiet luxury.&rdquo;
                    </h3>
                    <p className="font-body text-xs text-text/60 tracking-widest uppercase font-light">
                      Handcrafted in Indonesia &bull; AISCHMIRA Studio
                    </p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          /* Luxury Empty State */
          <div className="text-center py-20 px-6 space-y-4 bg-surface/50 border border-border/40 rounded-sm max-w-md mx-auto">
            <p className="font-heading italic text-3xl text-text font-light">No Pieces Match Criteria</p>
            <p className="font-body text-xs tracking-widest uppercase text-text/50 leading-relaxed font-light">
              Try adjusting your active category, color, or size filters to discover available pieces.
            </p>
            <button
              onClick={clearFilters}
              className="inline-block bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-primary transition-colors rounded-sm font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Loading State & Load More Controls */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-10">
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </div>
        ) : visibleCount < filteredProducts.length ? (
          <div className="text-center pt-14">
            <button
              onClick={handleLoadMore}
              className="bg-surface text-text border border-border/60 hover:border-text hover:text-primary transition-colors font-body text-[10px] tracking-[0.2em] uppercase py-4 px-12 rounded-sm font-medium inline-flex items-center gap-2"
            >
              Load More Pieces <ArrowRight size={14} />
            </button>
          </div>
        ) : null}

      </div>

      {/* Related Collections Section */}
      {relatedCollections.length > 0 && (
        <section className="pt-16 border-t border-border/40 space-y-12">
          <div className="text-center space-y-2">
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block">
              Curated Recommendations
            </span>
            <h3 className="font-heading italic text-3xl md:text-4xl text-text font-light">
              You May Also Admire
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {relatedCollections.map((rel) => (
              <Link
                key={rel.id}
                href={`/collections/${rel.slug}`}
                className="group block relative aspect-[3/4] overflow-hidden bg-surface rounded-sm border border-border/30"
              >
                <Image
                  src={rel.coverImage}
                  alt={rel.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="font-body text-[8px] tracking-[0.25em] uppercase text-surface/70 block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-heading italic text-2xl text-surface mb-2">
                    {rel.name}
                  </h4>
                  <span className="font-body text-[9px] tracking-widest uppercase text-surface/90 group-hover:text-primary transition-colors flex items-center gap-1.5">
                    Explore Edit &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* WhatsApp Styling Concierge CTA */}
      <section className="bg-surface p-10 md:p-16 border border-border/40 rounded-sm text-center space-y-6 max-w-[960px] mx-auto shadow-sm">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block">
          Bespoke Concierge
        </span>
        <h3 className="font-heading italic text-3xl md:text-4xl text-text font-light">
          Seeking Sizing or Styling Guidance for {collection.name}?
        </h3>
        <p className="font-body text-xs md:text-sm text-text/70 leading-relaxed font-light prose-reading">
          Our dedicated fashion advisors are ready to assist you with garment measurements, textile care, and outfit recommendations.
        </p>
        <div>
          <a
            href={`https://wa.me/6285121344848?text=Hello%20AISCHMIRA%20Concierge,%20I%20have%20a%20question%20regarding%20the%20${encodeURIComponent(collection.name)}%20Collection.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-body text-[10px] tracking-[0.2em] uppercase py-4 px-10 rounded-sm font-medium hover:opacity-95 transition-opacity"
          >
            <MessageCircle size={16} /> Consult Styling Team via WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
