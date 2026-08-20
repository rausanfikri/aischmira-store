"use client";

import * as React from "react";
import { Product } from "@/domain/product";
import { ProductCard } from "@/components/ui/ProductCard";
import { Search, SlidersHorizontal, X, ChevronDown, Check } from "lucide-react";
import { categoriesData } from "@/data/categories";

export type SortOption =
  | "featured"
  | "popular"
  | "newest"
  | "oldest"
  | "price_asc"
  | "price_desc"
  | "name_asc"
  | "name_desc";

interface ProductCatalogClientProps {
  initialProducts: Product[];
  initialCategory?: string;
  pageTitle?: string;
  pageSubtitle?: string;
}

export function ProductCatalogClient({
  initialProducts,
  initialCategory,
  pageTitle = "Product Catalog",
  pageSubtitle = "Explore the complete AISCHMIRA silhouette collection.",
}: ProductCatalogClientProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>(initialCategory || "all");
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = React.useState<string[]>([]);
  const [sortBy, setSortBy] = React.useState<SortOption>("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);

  // Derive unique colors and standard sizes from catalog
  const allColors = React.useMemo(() => {
    const colorSet = new Set<string>();
    initialProducts.forEach((p) => {
      if (p.color) colorSet.add(p.color);
      p.variants?.forEach((v) => {
        if (v.color) colorSet.add(v.color);
      });
    });
    return Array.from(colorSet).sort();
  }, [initialProducts]);

  const allSizes = ["XS", "S", "M", "L", "XL", "XXL", "S-M", "L-XL"];

  // Toggle helpers
  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedColors([]);
    setSelectedSizes([]);
    setSortBy("featured");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    selectedColors.length > 0 ||
    selectedSizes.length > 0;

  // Filter & Sort Logic
  const filteredAndSortedProducts = React.useMemo(() => {
    let result = [...initialProducts];

    // 1. Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.sku || "").toLowerCase().includes(q) ||
          (p.collection || "").toLowerCase().includes(q) ||
          (p.fabric || "").toLowerCase().includes(q) ||
          p.variants?.some(
            (v) =>
              v.sku.toLowerCase().includes(q) ||
              (v.skuCode && v.skuCode.toLowerCase().includes(q)) ||
              (v.skuName && v.skuName.toLowerCase().includes(q))
          )
      );
    }

    // 2. Category filter
    if (selectedCategory !== "all") {
      const catSlug = selectedCategory.toLowerCase();
      result = result.filter((p) => {
        const cat = (p.category || p.categoryId || "").toLowerCase();
        const type = (p.type || "").toLowerCase();

        if (catSlug === "outerwear") return cat.includes("outer") || type.includes("blazer") || type.includes("outer");
        if (catSlug === "tops") return cat.includes("top") || type.includes("top") || type.includes("blouse") || type.includes("shirt");
        if (catSlug === "bottoms") return cat.includes("bottom") || type.includes("pant") || type.includes("skirt") || type.includes("trouser");
        if (catSlug === "dress") return cat.includes("dress") || type.includes("dress");
        if (catSlug === "pyjamas") return cat.includes("pyjama") || type.includes("pyjama") || type.includes("pants") || type.includes("shorts");
        if (catSlug === "accessories") return cat.includes("access") || type.includes("scarf") || type.includes("obie");
        return cat.includes(catSlug) || type.includes(catSlug);
      });
    }

    // 3. Colors filter
    if (selectedColors.length > 0) {
      result = result.filter((p) => {
        const prodColor = (p.color || "").toLowerCase();
        const hasVariantColor = p.variants?.some((v) =>
          selectedColors.some((c) => c.toLowerCase() === v.color.toLowerCase())
        );
        return selectedColors.some((c) => c.toLowerCase() === prodColor) || hasVariantColor;
      });
    }

    // 4. Sizes filter
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.variants?.some((v) => selectedSizes.includes(v.size))
      );
    }

    // 5. Sorting
    switch (sortBy) {
      case "featured":
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
      case "popular":
        // Stable popular sort by variant depth / slug
        result.sort((a, b) => (b.variants?.length || 0) - (a.variants?.length || 0));
        break;
      case "newest":
        result.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime());
        break;
      case "price_asc":
        result.sort((a, b) => (a.price || a.basePrice || 0) - (b.price || b.basePrice || 0));
        break;
      case "price_desc":
        result.sort((a, b) => (b.price || b.basePrice || 0) - (a.price || a.basePrice || 0));
        break;
      case "name_asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name_desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return result;
  }, [initialProducts, searchQuery, selectedCategory, selectedColors, selectedSizes, sortBy]);

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="container-custom">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block">
            AISCHMIRA Flagship Catalog
          </span>
          <h1 className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-text font-light">
            {pageTitle}
          </h1>
          <p className="font-body text-xs sm:text-sm text-text/60 font-light leading-relaxed">
            {pageSubtitle}
          </p>
        </div>

        {/* Mobile Filter & Sort Control Bar */}
        <div className="lg:hidden flex items-center justify-between gap-4 py-4 border-y border-border/40 mb-8 font-body text-xs">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 text-text font-medium uppercase tracking-widest text-[10px]"
          >
            <SlidersHorizontal size={14} /> Filters {hasActiveFilters && `(${selectedColors.length + selectedSizes.length + (selectedCategory !== "all" ? 1 : 0)})`}
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-text/50">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-transparent border-none text-text text-xs focus:outline-none uppercase tracking-wider cursor-pointer font-medium"
            >
              <option value="featured">Featured</option>
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="name_asc">Name: A to Z</option>
              <option value="name_desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Main 2-Column Catalog Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* LEFT: Compact Filter Sidebar (Search, Categories, Colors, Sizes) */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8 sticky top-32">
            {/* Filter Header */}
            <div className="flex items-center justify-between border-b border-border/40 pb-3">
              <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text font-bold">
                Filters
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="font-body text-[9px] tracking-widest uppercase text-primary hover:underline"
                >
                  Reset All
                </button>
              )}
            </div>

            {/* 1. Search */}
            <div className="space-y-2">
              <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block font-semibold">
                1. Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pieces..."
                  className="w-full bg-surface border border-border/60 py-2.5 pl-3 pr-8 font-body text-xs text-text placeholder:text-text/40 rounded-xs focus:outline-none focus:border-primary transition-colors"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text/40 hover:text-text"
                  >
                    <X size={12} />
                  </button>
                ) : (
                  <Search size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text/40" />
                )}
              </div>
            </div>

            {/* 2. Categories */}
            <div className="space-y-2 border-t border-border/30 pt-6">
              <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block font-semibold">
                2. Categories
              </label>
              <div className="flex flex-col space-y-1 font-body text-xs">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`text-left py-1.5 px-2 rounded-xs transition-colors flex items-center justify-between ${
                    selectedCategory === "all"
                      ? "text-primary font-medium bg-surface"
                      : "text-text/70 hover:text-text"
                  }`}
                >
                  <span>All Categories</span>
                  {selectedCategory === "all" && <Check size={12} />}
                </button>

                {categoriesData.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`text-left py-1.5 px-2 rounded-xs transition-colors flex items-center justify-between ${
                      selectedCategory === cat.slug
                        ? "text-primary font-medium bg-surface"
                        : "text-text/70 hover:text-text"
                    }`}
                  >
                    <span>{cat.name}</span>
                    {selectedCategory === cat.slug && <Check size={12} />}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Colors */}
            <div className="space-y-2 border-t border-border/30 pt-6">
              <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block font-semibold">
                3. Colors {selectedColors.length > 0 && `(${selectedColors.length})`}
              </label>
              <div className="max-h-48 overflow-y-auto space-y-1 pr-1 font-body text-xs">
                {allColors.map((color) => {
                  const isSelected = selectedColors.includes(color);
                  return (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`w-full text-left py-1 px-2 rounded-xs transition-colors flex items-center justify-between ${
                        isSelected
                          ? "text-primary font-medium bg-surface"
                          : "text-text/70 hover:text-text"
                      }`}
                    >
                      <span className="truncate">{color}</span>
                      {isSelected && <Check size={12} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Sizes */}
            <div className="space-y-2 border-t border-border/30 pt-6">
              <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block font-semibold">
                4. Sizes {selectedSizes.length > 0 && `(${selectedSizes.length})`}
              </label>
              <div className="grid grid-cols-4 gap-1.5 font-body text-xs">
                {allSizes.map((size) => {
                  const isSelected = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-2 text-center rounded-xs border transition-colors ${
                        isSelected
                          ? "border-primary bg-primary text-surface font-medium"
                          : "border-border/60 text-text/70 hover:border-text"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT: Product Grid & Sorting Toolbar */}
          <main className="flex-1 w-full space-y-8">
            {/* Desktop Sorting & Count Toolbar */}
            <div className="hidden lg:flex items-center justify-between pb-4 border-b border-border/40 font-body text-xs">
              <span className="text-text/60">
                Showing <strong className="text-text font-medium">{filteredAndSortedProducts.length}</strong> {filteredAndSortedProducts.length === 1 ? "piece" : "pieces"}
              </span>

              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-widest text-text/50">Sort By:</span>
                <div className="relative inline-block">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="appearance-none bg-surface border border-border/60 py-2 pl-3 pr-8 text-xs font-body text-text focus:outline-none focus:border-primary rounded-xs uppercase tracking-wider cursor-pointer font-medium"
                  >
                    <option value="featured">Featured</option>
                    <option value="popular">Popular</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="name_asc">Name: A to Z</option>
                    <option value="name_desc">Name: Z to A</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-text/50" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.sku} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center space-y-4 bg-surface/30 border border-border/30 rounded-sm">
                <h3 className="font-heading italic text-2xl text-text font-light">No Silhouettes Matched</h3>
                <p className="font-body text-xs text-text/50 max-w-sm mx-auto">
                  Try adjusting or resetting your search and filter criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-2 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-3 px-6 rounded-xs hover:bg-primary transition-colors font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-background max-h-[85vh] overflow-y-auto p-6 space-y-6 rounded-t-lg border-t border-border/50">
            <div className="flex items-center justify-between border-b border-border/40 pb-3">
              <h3 className="font-heading italic text-2xl text-text font-light">Catalog Filters</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-text/50 hover:text-text"
              >
                <X size={20} />
              </button>
            </div>

            {/* 1. Mobile Search */}
            <div className="space-y-2">
              <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block font-semibold">1. Search</label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-surface border border-border/60 py-2.5 px-3 font-body text-xs text-text rounded-xs"
              />
            </div>

            {/* 2. Mobile Categories */}
            <div className="space-y-2 border-t border-border/30 pt-4">
              <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block font-semibold">2. Categories</label>
              <div className="grid grid-cols-2 gap-2 font-body text-xs">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`p-2 text-left rounded-xs border ${
                    selectedCategory === "all" ? "border-primary bg-primary text-surface font-medium" : "border-border/50 text-text/70"
                  }`}
                >
                  All Categories
                </button>
                {categoriesData.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`p-2 text-left rounded-xs border ${
                      selectedCategory === cat.slug ? "border-primary bg-primary text-surface font-medium" : "border-border/50 text-text/70"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Mobile Colors */}
            <div className="space-y-2 border-t border-border/30 pt-4">
              <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block font-semibold">3. Colors</label>
              <div className="max-h-36 overflow-y-auto space-y-1 font-body text-xs">
                {allColors.map((color) => {
                  const isSelected = selectedColors.includes(color);
                  return (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`w-full text-left py-1.5 px-2 rounded-xs flex items-center justify-between ${
                        isSelected ? "bg-surface font-medium text-primary" : "text-text/70"
                      }`}
                    >
                      <span>{color}</span>
                      {isSelected && <Check size={12} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Mobile Sizes */}
            <div className="space-y-2 border-t border-border/30 pt-4">
              <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block font-semibold">4. Sizes</label>
              <div className="grid grid-cols-4 gap-2 font-body text-xs">
                {allSizes.map((size) => {
                  const isSelected = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-2 text-center rounded-xs border ${
                        isSelected ? "border-primary bg-primary text-surface font-medium" : "border-border/60 text-text/70"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Apply & Close */}
            <div className="pt-4 flex gap-3">
              <button
                onClick={resetFilters}
                className="flex-1 py-3.5 border border-border/60 text-text font-body text-[10px] tracking-widest uppercase rounded-xs"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-3.5 bg-text text-surface font-body text-[10px] tracking-widest uppercase rounded-xs font-medium"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
