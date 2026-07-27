"use client";

import * as React from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchResultsProps {
  initialResults: Product[];
  query: string;
  allProducts: Product[];
}

export function SearchResults({ initialResults, query, allProducts }: SearchResultsProps) {
  const [localQuery, setLocalQuery] = React.useState(query);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(localQuery)}`);
    }
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto w-full relative">
        <input 
          type="text" 
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search collections, products..." 
          className="w-full bg-transparent border-b border-text/20 pb-4 text-center font-body text-sm md:text-base text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/30"
        />
        <button type="submit" className="absolute right-0 top-0 bottom-4 text-text/50 hover:text-text transition-colors">
          <Search size={20} strokeWidth={1.5} />
        </button>
      </form>

      {/* Grid */}
      {initialResults.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
          {initialResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="font-body text-xs tracking-widest uppercase text-text/50">
            {query ? "No results found. Try a different search term." : "Discover our latest collections."}
          </p>
        </div>
      )}
    </div>
  );
}
