"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/domain/product";
import { Collection } from "@/domain/collection";
import { ProductCard } from "@/components/ui/ProductCard";
import { Search, X, SlidersHorizontal, Sparkles } from "lucide-react";
import { SearchSortOption } from "@/services/search.service";

interface SearchResultsProps {
  initialProducts: Product[];
  initialCollections: Collection[];
  query: string;
  allProducts: Product[];
  allCollections: Collection[];
}

export function SearchResults({
  initialProducts,
  initialCollections,
  query,
  allProducts,
  allCollections,
}: SearchResultsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [localQuery, setLocalQuery] = React.useState(query);
  const [activeTab, setActiveTab] = React.useState<"all" | "products" | "collections">("all");
  const [selectedCategory, setSelectedCategory] = React.useState(searchParams.get("category") || "all");
  const [selectedCollection, setSelectedCollection] = React.useState(searchParams.get("collection") || "all");
  const [selectedSort, setSelectedSort] = React.useState<SearchSortOption>(
    (searchParams.get("sort") as SearchSortOption) || "featured"
  );
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  // Sync state when URL query changes
  React.useEffect(() => {
    requestAnimationFrame(() => {
      setLocalQuery(query);
    });
  }, [query]);

  const trendingCategories = [
    { label: "Silk Dresses", query: "dress" },
    { label: "Tailored Blazers", query: "blazer" },
    { label: "Wide Leg Trousers", query: "trousers" },
    { label: "Silk Scarves", query: "silk" },
    { label: "She Collection", query: "she" },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(localQuery.trim())}`);
    }
  };

  const handleQuickTerm = (term: string) => {
    setLocalQuery(term);
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  const handleClearSearch = () => {
    setLocalQuery("");
    router.push("/search");
  };

  // Filter Products
  const filteredProducts = React.useMemo(() => {
    let list = [...initialProducts];

    if (selectedCategory !== "all") {
      list = list.filter((p) => (p.categoryId || "").toLowerCase() === selectedCategory.toLowerCase());
    }
    if (selectedCollection !== "all") {
      list = list.filter((p) => p.collectionId === selectedCollection);
    }

    if (selectedSort === "price-asc") {
      list.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (selectedSort === "price-desc") {
      list.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (selectedSort === "alphabetical") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [initialProducts, selectedCategory, selectedCollection, selectedSort]);

  const totalResultsCount = filteredProducts.length + initialCollections.length;

  return (
    <div className="flex flex-col gap-10">
      {/* 1. Large Search Input Header */}
      <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto w-full relative">
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search collections, silk scarves, blazers, dresses..."
          className="w-full bg-transparent border-b border-text/30 pb-4 text-center font-heading italic text-2xl md:text-3xl text-text focus:outline-none focus:border-primary transition-colors placeholder:text-text/30 pr-10 pl-10"
        />
        <button
          type="submit"
          className="absolute right-0 top-1 bottom-4 text-text/50 hover:text-text transition-colors"
          aria-label="Submit search"
        >
          <Search size={22} strokeWidth={1.5} />
        </button>
        {localQuery && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute left-0 top-1 bottom-4 text-text/40 hover:text-text transition-colors"
            aria-label="Clear search"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        )}
      </form>

      {/* 2. Trending Quick Terms */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        <span className="font-body text-[9px] tracking-widest uppercase text-text/40 mr-1">Trending:</span>
        {trendingCategories.map((cat) => (
          <button
            key={cat.query}
            onClick={() => handleQuickTerm(cat.query)}
            className="font-body text-[10px] tracking-widest uppercase px-3.5 py-1.5 bg-surface border border-border/40 hover:border-primary text-text/70 hover:text-primary transition-all rounded-full"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3. Filter, Sort, and Tab Control Bar */}
      {query.trim() && (
        <div className="border-b border-border/40 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("all")}
              className={`font-body text-xs tracking-widest uppercase pb-1 border-b-2 transition-colors ${
                activeTab === "all" ? "border-primary text-text font-medium" : "border-transparent text-text/50 hover:text-text"
              }`}
            >
              All Results ({totalResultsCount})
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`font-body text-xs tracking-widest uppercase pb-1 border-b-2 transition-colors ${
                activeTab === "products" ? "border-primary text-text font-medium" : "border-transparent text-text/50 hover:text-text"
              }`}
            >
              Products ({filteredProducts.length})
            </button>
            <button
              onClick={() => setActiveTab("collections")}
              className={`font-body text-xs tracking-widest uppercase pb-1 border-b-2 transition-colors ${
                activeTab === "collections" ? "border-primary text-text font-medium" : "border-transparent text-text/50 hover:text-text"
              }`}
            >
              Collections ({initialCollections.length})
            </button>
          </div>

          {/* Filter & Sort Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="font-body text-[10px] tracking-widest uppercase px-3 py-1.5 border border-border/60 hover:border-primary text-text/70 hover:text-text transition-colors rounded-sm flex items-center gap-2"
            >
              <SlidersHorizontal size={12} /> Filter Options
            </button>

            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value as SearchSortOption)}
              className="font-body text-[10px] tracking-widest uppercase bg-surface text-text/80 border border-border/60 rounded-sm px-3 py-1.5 focus:outline-none"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
      )}

      {/* Expanded Filter Panel */}
      {isFilterOpen && (
        <div className="p-6 bg-surface border border-border/40 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          <div>
            <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full font-body text-xs bg-background text-text border border-border/60 p-2.5 rounded-sm focus:outline-none"
            >
              <option value="all">All Categories</option>
              <option value="dresses">Dresses</option>
              <option value="outerwear">Outerwear & Blazers</option>
              <option value="trousers">Trousers & Bottoms</option>
              <option value="accessories">Scarves & Accessories</option>
            </select>
          </div>

          <div>
            <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block mb-2">Collection</label>
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="w-full font-body text-xs bg-background text-text border border-border/60 p-2.5 rounded-sm focus:outline-none"
            >
              <option value="all">All Collections</option>
              {allCollections.map((col) => (
                <option key={col.id} value={col.id}>
                  {col.name} ({col.season || "Edit"})
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* 4. Results Sections */}
      {query.trim() && totalResultsCount > 0 ? (
        <div className="space-y-16">
          {/* Matching Collections Section */}
          {(activeTab === "all" || activeTab === "collections") && initialCollections.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles size={16} className="text-primary" />
                <h3 className="font-heading italic text-2xl text-text font-light">
                  Matching Collections ({initialCollections.length})
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {initialCollections.map((col) => (
                  <Link
                    key={col.id}
                    href={`/collections/${col.slug}`}
                    className="p-6 bg-surface border border-border/40 hover:border-primary transition-all rounded-sm group space-y-3"
                  >
                    <span className="font-body text-[9px] tracking-[0.25em] uppercase text-primary block">
                      {col.season || "Collection Edit"}
                    </span>
                    <h4 className="font-heading italic text-2xl text-text group-hover:text-primary transition-colors">
                      {col.name}
                    </h4>
                    <p className="font-body text-xs text-text/60 line-clamp-2 leading-relaxed">
                      {col.description}
                    </p>
                    <span className="font-body text-[10px] tracking-widest uppercase text-text/80 group-hover:text-primary flex items-center gap-1.5 pt-2">
                      Explore Story &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Matching Products Section */}
          {(activeTab === "all" || activeTab === "products") && filteredProducts.length > 0 && (
            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-heading italic text-2xl text-text font-light">
                  Matching Garments & Accessories ({filteredProducts.length})
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.sku} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        /* 5. Empty State & Discovery Recommendations */
        <div className="space-y-16 py-8">
          <div className="text-center py-16 bg-surface/40 border border-border/30 rounded-sm space-y-4 max-w-2xl mx-auto">
            <p className="font-heading italic text-3xl text-text font-light">
              {query ? `No garments found matching "${query}"` : "Discover the AISCHMIRA Flagship Catalog"}
            </p>
            <p className="font-body text-xs tracking-widest uppercase text-text/50 max-w-md mx-auto leading-relaxed">
              Try searching by garment silhouette, silk material, or explore our curated collection edits below.
            </p>
            <div className="pt-4">
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-3.5 px-8 rounded-sm font-medium hover:bg-primary transition-colors"
              >
                Explore Collections &rarr;
              </Link>
            </div>
          </div>

          {/* Curated Recommendations */}
          {allProducts && allProducts.length > 0 && (
            <section className="space-y-8 pt-8 border-t border-border/40">
              <div className="text-center">
                <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 block mb-1">
                  Curated Selections
                </span>
                <h3 className="font-heading italic text-3xl md:text-4xl text-text font-light">
                  Recommended Flagship Pieces
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
                {allProducts.slice(0, 4).map((product) => (
                  <ProductCard key={product.sku} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
