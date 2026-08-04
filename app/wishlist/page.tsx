"use client";

import * as React from "react";
import Link from "next/link";
import { useShopStore } from "@/store/useShopStore";
import { wishlistService, WishlistSummary } from "@/services/wishlist.service";
import { productService } from "@/services/product.service";
import { Product } from "@/domain/product";
import { ProductCard } from "@/components/ui/ProductCard";
import { ChevronRight, Heart, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function WishlistPage() {
  const wishlist = useShopStore((state) => state.wishlist);
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const addToCart = useShopStore((state) => state.addToCart);
  const isInitialized = useShopStore((state) => state.isInitialized);
  const initializeUserStore = useShopStore((state) => state.initializeUserStore);

  const [wishlistedProducts, setWishlistedProducts] = React.useState<Product[]>([]);
  const [recommendations, setRecommendations] = React.useState<Product[]>([]);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = React.useState<string>("all");
  const [summary, setSummary] = React.useState<WishlistSummary>({
    totalItems: 0,
    totalEstimatedValue: 0,
    categoryCounts: {},
  });

  React.useEffect(() => {
    if (!isInitialized) {
      initializeUserStore();
    }
  }, [isInitialized, initializeUserStore]);

  const wishlistIds = React.useMemo(() => wishlist.map((item) => item.productId), [wishlist]);

  // Fetch wishlisted products via WishlistService
  React.useEffect(() => {
    if (wishlistIds.length === 0) {
      requestAnimationFrame(() => {
        setWishlistedProducts([]);
        setSummary({ totalItems: 0, totalEstimatedValue: 0, categoryCounts: {} });
      });
      // Fetch general recommendations
      productService.getFeaturedProducts(4).then((res) => {
        if (res.isSuccess) setRecommendations(res.value);
      });
      return;
    }

    wishlistService.getWishlistProducts(wishlistIds).then((res) => {
      if (res.isSuccess) {
        const prods = res.value;
        setWishlistedProducts(prods);
        setSummary(wishlistService.getWishlistSummary(prods));

        // Fetch tailored recommendations
        wishlistService.getWishlistRecommendations(prods, 4).then((recRes) => {
          if (recRes.isSuccess) setRecommendations(recRes.value);
        });
      }
    });
  }, [wishlistIds]);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  // Filter wishlisted items by active category pill
  const filteredProducts = React.useMemo(() => {
    if (selectedCategoryFilter === "all") return wishlistedProducts;
    return wishlistedProducts.filter(
      (p) => (p.categoryId || "").toLowerCase() === selectedCategoryFilter.toLowerCase()
    );
  }, [wishlistedProducts, selectedCategoryFilter]);

  const handleMoveToBag = (product: Product) => {
    const productId = product.sku || (product as unknown as { id?: string }).id || "";
    const variant = product.variants[0];

    if (variant) {
      addToCart({
        productId,
        variantId: variant.id || variant.sku,
        quantity: 1,
      });
      toggleWishlist(productId);
    }
  };

  const handleWhatsAppConsult = (product: Product) => {
    const message = `Hello AISCHMIRA Styling Concierge, I have saved ${product.name} (${product.sku}) in my Personal Closet and would like guidance on sizing and availability.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="pt-28 md:pt-36 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="container-custom">
        {/* 1. Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-text/50">
            <li>
              <Link href="/" className="hover:text-text transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={10} className="text-text/30" />
            </li>
            <li>
              <Link href="/account/dashboard" className="hover:text-text transition-colors">
                Account
              </Link>
            </li>
            <li>
              <ChevronRight size={10} className="text-text/30" />
            </li>
            <li className="text-text font-medium">Personal Closet</li>
          </ol>
        </nav>

        {/* 2. Header & Privé Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary block">
            AISCHMIRA Privé &bull; Personal Closet
          </span>
          <h1 className="font-heading italic text-4xl md:text-6xl text-text font-light">
            Curated Personal Wardrobe
          </h1>
          <p className="font-body text-xs tracking-widest uppercase text-text/60 leading-relaxed">
            {summary.totalItems} {summary.totalItems === 1 ? "Curated Silhouette" : "Curated Silhouettes"} saved in your private sanctuary.
          </p>
        </div>

        {/* 3. Wishlist Content */}
        {wishlistedProducts.length > 0 ? (
          <div className="space-y-12">
            {/* Wardrobe Summary Bar & Category Pills */}
            <div className="p-6 bg-surface border border-border/40 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div>
                  <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">
                    Saved Items
                  </span>
                  <span className="font-heading italic text-2xl text-text font-light">
                    {summary.totalItems} Pieces
                  </span>
                </div>
                <div className="h-8 w-px bg-border/40" />
                <div>
                  <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">
                    Estimated Wardrobe Value
                  </span>
                  <span className="font-body text-base font-medium text-primary">
                    {formatter.format(summary.totalEstimatedValue)}
                  </span>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedCategoryFilter("all")}
                  className={`font-body text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full transition-all border ${
                    selectedCategoryFilter === "all"
                      ? "bg-text text-surface border-text font-medium"
                      : "bg-background border-border/60 text-text/70 hover:border-text"
                  }`}
                >
                  All ({summary.totalItems})
                </button>
                {Object.entries(summary.categoryCounts).map(([cat, count]) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategoryFilter(cat)}
                    className={`font-body text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full transition-all border ${
                      selectedCategoryFilter.toLowerCase() === cat.toLowerCase()
                        ? "bg-text text-surface border-text font-medium"
                        : "bg-background border-border/60 text-text/70 hover:border-text"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                ))}
              </div>
            </div>

            {/* Closet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
              {filteredProducts.map((product) => (
                <div key={product.sku} className="space-y-3 group">
                  <ProductCard product={product} />

                  {/* Wardrobe Quick Action Bar */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => handleMoveToBag(product)}
                      className="flex-1 bg-text text-surface font-body text-[9px] tracking-widest uppercase py-2.5 hover:bg-primary transition-colors rounded-sm font-medium flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag size={12} /> Move to Bag
                    </button>
                    <button
                      onClick={() => handleWhatsAppConsult(product)}
                      className="p-2.5 bg-surface text-whatsapp border border-border/60 hover:border-whatsapp transition-colors rounded-sm"
                      title="Consult Styling Concierge"
                      aria-label="Consult Styling Concierge"
                    >
                      <MessageCircle size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* 4. High-Fashion Empty State */
          <div className="space-y-16 py-8">
            <div className="text-center py-20 bg-surface/40 border border-border/30 rounded-sm max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-full bg-background border border-border/40 flex items-center justify-center text-primary mx-auto">
                <Heart size={28} strokeWidth={1.2} />
              </div>
              <div className="space-y-2">
                <h2 className="font-heading italic text-3xl md:text-4xl text-text font-light">
                  Your Personal Closet Awaits
                </h2>
                <p className="font-body text-xs tracking-widest uppercase text-text/50 max-w-md mx-auto leading-relaxed">
                  Save your favorite silhouettes, silk dresses, and artisanal scarves to build your private AISCHMIRA wardrobe.
                </p>
              </div>
              <div>
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 px-10 rounded-sm font-medium hover:bg-primary transition-colors"
                >
                  Discover Collections <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 5. Inspired Selection Recommendations */}
        {recommendations.length > 0 && (
          <section className="pt-16 border-t border-border/40 space-y-10">
            <div className="text-center">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 block mb-1">
                Inspired Selection
              </span>
              <h3 className="font-heading italic text-3xl md:text-4xl text-text font-light">
                Complete Your Personal Wardrobe
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
              {recommendations.map((p) => (
                <ProductCard key={p.sku} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
