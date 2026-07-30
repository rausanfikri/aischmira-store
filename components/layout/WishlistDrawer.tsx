"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useUIStore } from "@/store/useUIStore";
import { useShopStore } from "@/store/useShopStore";
import { wishlistService } from "@/services/wishlist.service";
import { Product } from "@/domain/product";

export function WishlistDrawer() {
  const wishlistOpen = useUIStore((state) => state.wishlistOpen);
  const setWishlistOpen = useUIStore((state) => state.setWishlistOpen);
  
  const wishlist = useShopStore((state) => state.wishlist);
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const addToCart = useShopStore((state) => state.addToCart);

  const [wishlistedProducts, setWishlistedProducts] = React.useState<Product[]>([]);

  const wishlistIds = React.useMemo(() => wishlist.map((item) => item.productId), [wishlist]);

  // Fetch wishlisted products via WishlistService
  React.useEffect(() => {
    if (wishlistIds.length === 0) {
      requestAnimationFrame(() => setWishlistedProducts([]));
      return;
    }

    wishlistService.getWishlistProducts(wishlistIds).then((res) => {
      if (res.isSuccess) {
        setWishlistedProducts(res.value);
      }
    });
  }, [wishlistIds]);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

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

  const handleRemove = (product: Product) => {
    const productId = product.sku || (product as unknown as { id?: string }).id || "";
    toggleWishlist(productId);
  };

  return (
    <Dialog.Root open={wishlistOpen} onOpenChange={setWishlistOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-surface shadow-2xl flex flex-col data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight border-l border-border/40">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/40 bg-background/50">
            <div className="flex items-center gap-2">
              <Heart size={18} strokeWidth={1.5} className="text-primary fill-primary" />
              <Dialog.Title className="font-heading italic text-2xl text-text font-light">
                Personal Closet ({wishlistedProducts.length})
              </Dialog.Title>
            </div>
            <Dialog.Description className="sr-only">Your saved AISCHMIRA luxury items.</Dialog.Description>
            <Dialog.Close asChild>
              <button
                className="text-text/60 hover:text-text focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1 transition-colors"
                aria-label="Close wishlist drawer"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </Dialog.Close>
          </div>

          {/* Drawer Scroll Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {wishlistedProducts.length === 0 ? (
              
              /* High-Fashion Empty State */
              <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6">
                <div className="w-16 h-16 rounded-full bg-background border border-border/40 flex items-center justify-center text-text/40">
                  <Heart size={28} strokeWidth={1.2} />
                </div>
                <div className="space-y-2 max-w-xs">
                  <h3 className="font-heading italic text-2xl text-text font-light">
                    Your Personal Closet Awaits
                  </h3>
                  <p className="font-body text-xs text-text/60 font-light leading-relaxed">
                    Save your favorite silhouettes, tailored blazers, and silk scarves while exploring our flagship edits.
                  </p>
                </div>
                <Link
                  href="/collections"
                  onClick={() => setWishlistOpen(false)}
                  className="bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-3.5 px-8 rounded-sm font-medium hover:bg-primary transition-colors inline-flex items-center gap-2"
                >
                  Explore Collections <ArrowRight size={14} />
                </Link>
              </div>

            ) : (
              
              /* Wishlist Items List */
              <div className="space-y-4">
                {wishlistedProducts.map((product) => {
                  if (!product) return null;
                  const itemPrice = product.price || product.variants[0]?.price || 0;
                  const imageSrc = product.images?.[0] || "/images/products/placeholder.png";

                  return (
                    <div
                      key={product.sku}
                      className="flex items-center gap-4 p-3 bg-background border border-border/40 rounded-sm relative group"
                    >
                      {/* Image Thumbnail */}
                      <Link
                        href={`/products/${product.slug}`}
                        onClick={() => setWishlistOpen(false)}
                        className="relative w-20 h-24 shrink-0 bg-surface rounded-sm overflow-hidden border border-border/30"
                      >
                        <Image
                          src={imageSrc}
                          alt={product.name}
                          fill
                          className="object-cover object-center"
                          sizes="80px"
                        />
                      </Link>

                      {/* Info & Actions */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">
                          {product.categoryId || "Garment"}
                        </span>
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={() => setWishlistOpen(false)}
                          className="font-heading italic text-lg text-text hover:text-primary transition-colors block truncate font-light"
                        >
                          {product.name}
                        </Link>
                        <p className="font-body text-xs font-normal text-text/80">
                          {formatter.format(itemPrice)}
                        </p>

                        <button
                          onClick={() => handleMoveToBag(product)}
                          className="mt-2 text-[9px] tracking-widest uppercase text-primary hover:underline font-bold flex items-center gap-1"
                        >
                          <ShoppingBag size={12} /> Move to Shopping Bag
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemove(product)}
                        className="text-text/40 hover:text-text p-2 transition-colors focus:outline-none"
                        aria-label={`Remove ${product.name} from wishlist`}
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                  );
                })}
              </div>

            )}
          </div>

          {/* Footer Action Bar */}
          {wishlistedProducts.length > 0 && (
            <div className="p-6 border-t border-border/40 bg-background space-y-3">
              <Link
                href="/wishlist"
                onClick={() => setWishlistOpen(false)}
                className="w-full bg-text text-surface py-4 text-[10px] tracking-[0.2em] uppercase font-body hover:bg-primary transition-colors rounded-sm font-medium block text-center shadow-sm"
              >
                View Full Personal Closet Page &rarr;
              </Link>
            </div>
          )}

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
