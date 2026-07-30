"use client";

import * as React from "react";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { Product, ProductVariant } from "@/domain/product";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { useShopStore } from "@/store/useShopStore";

interface StickyWhatsAppCTAProps {
  product: Product;
  selectedVariant?: ProductVariant;
}

export function StickyWhatsAppCTA({ product, selectedVariant }: StickyWhatsAppCTAProps) {
  const addToCart = useShopStore((state) => state.addToCart);
  const variant = selectedVariant || product.variants[0];
  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: product.currency || "IDR", minimumFractionDigits: 0 });

  const productId = product.sku || (product as unknown as { id?: string }).id || "product_id";

  const handleWhatsAppCheckout = () => {
    const selectedColorName = variant?.color || "Standard";
    const selectedSizeName = variant?.size || "Standard";

    const message = `Hello AISCHMIRA,\n\nI would like to order:\n\nProduct: ${product.name}\nColor: ${selectedColorName}\nSize: ${selectedSizeName}\n\nPlease assist me with the checkout process.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleAddToCart = () => {
    if (!variant) return;
    addToCart({
      productId,
      variantId: variant.id || variant.sku,
      quantity: 1,
    });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border/40 p-4 shadow-2xl animate-fadeIn">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col min-w-0">
          <span className="font-heading italic text-sm text-text line-clamp-1">
            {product.name}
          </span>
          <span className="font-body text-xs font-bold text-primary">
            {formatter.format(variant?.price || product.price || (product as unknown as { basePrice?: number }).basePrice || 0)}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleAddToCart}
            className="p-3 bg-text text-surface rounded-sm hover:bg-primary transition-colors"
            aria-label="Add to Bag"
          >
            <ShoppingBag size={18} />
          </button>

          <button
            onClick={handleWhatsAppCheckout}
            className="bg-whatsapp text-white font-body text-[10px] tracking-[0.15em] uppercase py-3 px-5 rounded-sm font-medium flex items-center gap-1.5 shadow-sm hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={15} /> Checkout via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
