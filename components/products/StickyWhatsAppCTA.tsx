"use client";

import * as React from "react";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { Product, Variant } from "@/types";
import { getWhatsAppInquiryUrl } from "@/lib/whatsapp";
import { useShopStore } from "@/store/useShopStore";

interface StickyWhatsAppCTAProps {
  product: Product;
  selectedVariant?: Variant;
}

export function StickyWhatsAppCTA({ product, selectedVariant }: StickyWhatsAppCTAProps) {
  const addToCart = useShopStore((state) => state.addToCart);
  const variant = selectedVariant || product.variants[0];
  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  const handleWhatsAppInquiry = () => {
    const selectedColorName = variant?.color || "Standard";
    const selectedSizeName = variant?.size || "Standard";
    
    const message = `Hello AISCHMIRA,\n\nI'm interested in:\nProduct: ${product.name}\nSize: ${selectedSizeName}\nColor: ${selectedColorName}\nPrice: ${formatter.format(variant?.price || product.basePrice)}\n\nCould you please assist me?`;
    const url = getWhatsAppInquiryUrl(message);
    window.open(url, "_blank");
  };

  const handleAddToCart = () => {
    if (!variant) return;
    addToCart({
      productId: product.id,
      variantId: variant.id,
      quantity: 1,
    });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border/40 p-4 shadow-2xl animate-fadeIn">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-heading italic text-sm text-text line-clamp-1">
            {product.name}
          </span>
          <span className="font-body text-xs font-bold text-primary">
            {formatter.format(variant?.price || product.basePrice)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAddToCart}
            className="p-3 bg-text text-surface rounded-sm hover:bg-primary transition-colors"
            aria-label="Add to Bag"
          >
            <ShoppingBag size={18} />
          </button>
          
          <button
            onClick={handleWhatsAppInquiry}
            className="bg-whatsapp text-white font-body text-[10px] tracking-[0.2em] uppercase py-3 px-5 rounded-sm font-medium flex items-center gap-1.5 shadow-sm"
          >
            <MessageCircle size={15} /> Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
