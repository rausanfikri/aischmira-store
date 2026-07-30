"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, TrendingUp, Clock, ArrowRight, Sparkles } from "lucide-react";
import { searchService, SearchSuggestion } from "@/services/search.service";
import { Product } from "@/domain/product";
import { Collection } from "@/domain/collection";
import { ProductCard } from "@/components/ui/ProductCard";

const RECENT_SEARCHES_KEY = "aischmira_recent_searches_v1";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [query, setQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<SearchSuggestion[]>([]);
  const [recentSearches, setRecentSearches] = React.useState<string[]>([]);
  const [trendingSearches, setTrendingSearches] = React.useState<string[]>([]);
  const [discoveryProducts, setDiscoveryProducts] = React.useState<Product[]>([]);
  const [discoveryCollections, setDiscoveryCollections] = React.useState<Collection[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  // Load initial discovery data & recent searches
  React.useEffect(() => {
    if (!isOpen) return;

    // Load recent searches from localStorage
    try {
      const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        requestAnimationFrame(() => setRecentSearches(parsed));
      }
    } catch {
      // Ignore storage errors
    }

    // Load discovery data from SearchService
    searchService.getDiscoveryData().then((res) => {
      if (res.isSuccess) {
        setTrendingSearches(res.value.trendingSearches);
        setDiscoveryProducts(res.value.popularProducts);
        setDiscoveryCollections(res.value.featuredCollections);
      }
    });

    // Auto-focus input
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, [isOpen]);

  // Live autocomplete suggestions on query change
  React.useEffect(() => {
    if (!query.trim()) {
      requestAnimationFrame(() => {
        setSuggestions([]);
        setSelectedIndex(-1);
      });
      return;
    }

    const timer = setTimeout(() => {
      searchService.getSuggestions(query).then((res) => {
        if (res.isSuccess) {
          setSuggestions(res.value);
        }
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Global keydown handler (Cmd+K / Ctrl+K and Escape)
  React.useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal if closed
          const searchBtn = document.querySelector('[data-search-modal-trigger="true"]') as HTMLButtonElement;
          searchBtn?.click();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen, onClose]);

  const saveRecentSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    const updated = [searchTerm, ...recentSearches.filter((s) => s.toLowerCase() !== searchTerm.toLowerCase())].slice(0, 5);
    setRecentSearches(updated);
    try {
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    saveRecentSearch(query.trim());
    onClose();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const handleSelectSearchTerm = (term: string) => {
    setQuery(term);
    saveRecentSearch(term);
    onClose();
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    try {
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch {
      // Ignore
    }
  };

  // Keyboard navigation within suggestions
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0 && suggestions[selectedIndex]) {
      e.preventDefault();
      const item = suggestions[selectedIndex];
      if (item.url) {
        onClose();
        router.push(item.url);
      } else {
        handleSelectSearchTerm(item.text);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/60 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Search Catalog"
        >
          {/* Backdrop click */}
          <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-3xl bg-background border border-border/60 shadow-2xl rounded-sm overflow-hidden z-10 flex flex-col max-h-[85vh]"
          >
            {/* Top Search Bar */}
            <form onSubmit={handleSearchSubmit} className="relative border-b border-border/50 p-4 md:p-6 flex items-center gap-4 bg-surface/50">
              <Search size={22} className="text-text/40 shrink-0" strokeWidth={1.5} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search collections, silk dresses, blazers, trousers..."
                className="w-full bg-transparent font-heading italic text-xl md:text-2xl text-text placeholder:text-text/30 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-text/40 hover:text-text p-1 transition-colors"
                  aria-label="Clear input"
                >
                  <X size={18} />
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="font-body text-[10px] tracking-widest uppercase bg-surface text-text/60 hover:text-text px-3 py-1.5 rounded-sm border border-border/40 shrink-0"
              >
                ESC
              </button>
            </form>

            {/* Scrollable Content Body */}
            <div className="p-6 overflow-y-auto space-y-8 divide-y divide-border/30">
              {/* Autocomplete Suggestions */}
              {query.trim() && suggestions.length > 0 && (
                <div className="space-y-3">
                  <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 block">
                    Suggestions
                  </span>
                  <div className="space-y-1">
                    {suggestions.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (item.url) {
                            onClose();
                            router.push(item.url);
                          } else {
                            handleSelectSearchTerm(item.text);
                          }
                        }}
                        className={`w-full text-left px-4 py-3 rounded-sm flex items-center justify-between transition-colors font-body text-xs ${
                          selectedIndex === idx ? "bg-surface text-primary font-medium" : "hover:bg-surface/60 text-text/80"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {item.type === "collection" ? (
                            <Sparkles size={14} className="text-primary" />
                          ) : (
                            <Search size={14} className="text-text/40" />
                          )}
                          {item.text}
                        </span>
                        <span className="font-body text-[9px] tracking-widest uppercase text-text/40">
                          {item.type} &rarr;
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Default View when query is empty */}
              {!query.trim() && (
                <>
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div className="space-y-3 pb-6">
                      <div className="flex items-center justify-between">
                        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 flex items-center gap-2">
                          <Clock size={12} /> Recent Searches
                        </span>
                        <button
                          onClick={clearRecentSearches}
                          className="font-body text-[9px] tracking-widest uppercase text-text/40 hover:text-text transition-colors"
                        >
                          Clear History
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((term) => (
                          <button
                            key={term}
                            onClick={() => handleSelectSearchTerm(term)}
                            className="font-body text-xs px-3.5 py-1.5 bg-surface border border-border/40 hover:border-primary text-text/80 hover:text-primary transition-all rounded-full"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trending Searches */}
                  {trendingSearches.length > 0 && (
                    <div className="space-y-3 pt-6">
                      <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 flex items-center gap-2">
                        <TrendingUp size={12} /> Trending Keywords
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {trendingSearches.map((term) => (
                          <button
                            key={term}
                            onClick={() => handleSelectSearchTerm(term)}
                            className="font-body text-xs px-3.5 py-1.5 bg-surface/50 border border-border/30 hover:border-text text-text/70 hover:text-text transition-all rounded-full"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Featured Collections Quick Links */}
                  {discoveryCollections.length > 0 && (
                    <div className="space-y-4 pt-6">
                      <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 block">
                        Featured Collections
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        {discoveryCollections.slice(0, 4).map((col) => (
                          <Link
                            key={col.id}
                            href={`/collections/${col.slug}`}
                            onClick={onClose}
                            className="p-3 bg-surface border border-border/40 hover:border-primary transition-colors rounded-sm group flex items-center justify-between"
                          >
                            <div>
                              <span className="font-heading italic text-sm text-text group-hover:text-primary block">
                                {col.name}
                              </span>
                              <span className="font-body text-[9px] tracking-widest uppercase text-text/40 block">
                                {col.season || "Edit"}
                              </span>
                            </div>
                            <ArrowRight size={14} className="text-text/30 group-hover:text-primary transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Discovery Products */}
                  {discoveryProducts.length > 0 && (
                    <div className="space-y-4 pt-6">
                      <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 block">
                        Popular Flagship Pieces
                      </span>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {discoveryProducts.map((p) => (
                          <div key={p.sku} onClick={onClose}>
                            <ProductCard product={p} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 bg-surface/80 border-t border-border/40 text-center">
              <Link
                href="/collections"
                onClick={onClose}
                className="font-body text-[10px] tracking-[0.2em] uppercase text-text/70 hover:text-primary transition-colors font-medium"
              >
                Browse All Luxury Collections &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
