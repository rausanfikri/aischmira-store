"use client";

import * as React from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchResultsProps {
  initialResults: Product[];
  query: string;
  allProducts: Product[];
}

export function SearchResults({ initialResults, query, allProducts }: SearchResultsProps) {
  const [localQuery, setLocalQuery] = React.useState(query);
  const router = useRouter();

  const quickCategories = [
    { label: "Silk Scarves", query: "silk" },
    { label: "Tailored Blazers", query: "blazer" },
    { label: "Elegant Dresses", query: "dress" },
    { label: "Wide Leg Trousers", query: "trousers" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(localQuery.trim())}`);
    }
  };

  const handleQuickCategory = (catQuery: string) => {
    setLocalQuery(catQuery);
    router.push(`/search?q=${encodeURIComponent(catQuery)}`);
  };

  const clearSearch = () => {
    setLocalQuery("");
    router.push("/search");
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Search Input Bar */}
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto w-full relative">
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search collections, silk scarves, blazers, dresses..."
          className="w-full bg-transparent border-b border-text/30 pb-4 text-center font-body text-base md:text-lg text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30 pr-10 pl-10"
        />
        <button type="submit" className="absolute right-0 top-0 bottom-4 text-text/50 hover:text-text transition-colors" aria-label="Search">
          <Search size={20} strokeWidth={1.5} />
        </button>
        {localQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute left-0 top-0 bottom-4 text-text/40 hover:text-text transition-colors"
            aria-label="Clear search"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        )}
      </form>

      {/* Quick Search Suggestions */}
      <div className="flex flex-wrap justify-center items-center gap-3">
        <span className="font-body text-[10px] tracking-widest uppercase text-text/40">Popular:</span>
        {quickCategories.map((cat) => (
          <button
            key={cat.query}
            onClick={() => handleQuickCategory(cat.query)}
            className="font-body text-[10px] tracking-widest uppercase px-3 py-1 bg-surface border border-border/40 hover:border-text text-text/70 hover:text-text transition-all rounded-full"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results Grid */}
      {initialResults.length > 0 ? (
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-border/40 pb-4">
            <span className="font-body text-[10px] tracking-widest uppercase text-text/60">
              Found {initialResults.length} {initialResults.length === 1 ? "match" : "matches"} for &ldquo;{query}&rdquo;
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
            {initialResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-16 py-12">
          <div className="text-center py-12 bg-surface/40 border border-border/30 rounded-sm">
            <p className="font-heading italic text-2xl text-text mb-3">
              {query ? `No pieces found matching "${query}"` : "Search our flagship library"}
            </p>
            <p className="font-body text-xs tracking-widest uppercase text-text/50 max-w-md mx-auto leading-relaxed">
              Explore our curated recommendations below or try searching by category, silhouette, or material.
            </p>
          </div>

          {/* Curated Recommendations using allProducts */}
          {allProducts && allProducts.length > 0 && (
            <div>
              <div className="text-center mb-12">
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 block mb-2">Curated Selection</span>
                <h3 className="font-heading italic text-3xl text-text">Recommended Flagship Pieces</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
                {allProducts.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
