"use client";

import * as React from "react";
import { Product } from "@/domain/product";
import { ProductCard } from "@/components/ui/ProductCard";

const RECENTLY_VIEWED_KEY = "aischmira_recently_viewed_ids_v1";

interface RecentlyViewedProps {
  currentProductId: string;
  allProducts?: Product[];
}

export function RecentlyViewed({ currentProductId, allProducts = [] }: RecentlyViewedProps) {
  const [recentProducts, setRecentProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
      let ids: string[] = stored ? JSON.parse(stored) : [];

      // Add current product if not present, keep last 6
      ids = [currentProductId, ...ids.filter((id) => id !== currentProductId)].slice(0, 6);
      localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(ids));

      // Filter out current product for display
      const displayIds = ids.filter((id) => id !== currentProductId).slice(0, 4);
      const matched = allProducts.filter((p) => displayIds.includes(p.sku || (p as unknown as { id?: string }).id || ""));
      
      requestAnimationFrame(() => {
        setRecentProducts(matched);
      });
    } catch {
      // Ignore storage error fallbacks
    }
  }, [currentProductId, allProducts]);

  if (recentProducts.length === 0) return null;

  return (
    <section className="pt-16 border-t border-border/40 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 block mb-1">
            Client Browsing History
          </span>
          <h3 className="font-heading italic text-2xl md:text-3xl text-text font-light">
            Recently Viewed Pieces
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {recentProducts.map((p) => (
          <ProductCard key={p.sku || (p as unknown as { id?: string }).id} product={p} />
        ))}
      </div>
    </section>
  );
}
