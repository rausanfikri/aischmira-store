"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { useShopStore } from "@/store/useShopStore";
import { shoppingBagService, BagItemWithProduct, OrderSummary } from "@/services/shopping-bag.service";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const cartOpen = useUIStore((state) => state.cartOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);

  const cart = useShopStore((state) => state.cart);
  const updateQuantity = useShopStore((state) => state.updateQuantity);
  const removeFromCart = useShopStore((state) => state.removeFromCart);

  const [bagItems, setBagItems] = React.useState<BagItemWithProduct[]>([]);
  const [summary, setSummary] = React.useState<OrderSummary>({
    subtotal: 0,
    estimatedDiscount: 0,
    estimatedShipping: 0,
    estimatedTax: 0,
    grandTotal: 0,
    itemCount: 0,
    freeShippingThreshold: 3000000,
    remainingForFreeShipping: 3000000,
    progressPercent: 0,
  });

  // Resolve bag details via ShoppingBagService
  React.useEffect(() => {
    if (cart.length === 0) {
      requestAnimationFrame(() => {
        setBagItems([]);
        setSummary({
          subtotal: 0,
          estimatedDiscount: 0,
          estimatedShipping: 0,
          estimatedTax: 0,
          grandTotal: 0,
          itemCount: 0,
          freeShippingThreshold: 3000000,
          remainingForFreeShipping: 3000000,
          progressPercent: 0,
        });
      });
      return;
    }

    shoppingBagService.getBagDetails(cart).then((res) => {
      if (res.isSuccess) {
        setBagItems(res.value.items);
        setSummary(res.value.summary);
      }
    });
  }, [cart]);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const handleCheckoutWhatsApp = () => {
    if (bagItems.length === 0) return;
    const url = shoppingBagService.buildWhatsAppCheckoutUrl(bagItems, summary);
    window.open(url, "_blank");
  };

  return (
    <Dialog.Root open={cartOpen} onOpenChange={setCartOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-surface shadow-2xl flex flex-col data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight border-l border-border/40">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/40 bg-background/50">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} strokeWidth={1.5} className="text-primary" />
              <Dialog.Title className="font-heading italic text-2xl text-text font-light">
                Shopping Bag ({summary.itemCount})
              </Dialog.Title>
            </div>
            <Dialog.Description className="sr-only">Your shopping bag contents.</Dialog.Description>
            <Dialog.Close asChild>
              <button
                className="text-text/60 hover:text-text focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1 transition-colors"
                aria-label="Close cart drawer"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </Dialog.Close>
          </div>
          
          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {bagItems.length === 0 ? (
              <div className="py-16 flex flex-col items-center justify-center text-text/50 text-center space-y-4">
                <ShoppingBag size={48} strokeWidth={1} className="text-text/20 mb-2" />
                <p className="font-body text-xs tracking-widest uppercase">Your bag is currently empty.</p>
                <p className="font-body text-xs text-text/50 font-light max-w-xs">
                  Discover our flagship collections and save your favorite silhouettes.
                </p>
                <Link
                  href="/collections"
                  onClick={() => setCartOpen(false)}
                  className="mt-4 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-3.5 px-8 rounded-sm hover:bg-primary transition-colors inline-flex items-center gap-2"
                >
                  Explore Collections <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Free Shipping Progress Indicator */}
                <div className="bg-background p-4 border border-border/30 rounded-sm space-y-2">
                  <div className="flex justify-between font-body text-[10px] uppercase tracking-widest text-text/70">
                    <span>
                      {summary.remainingForFreeShipping === 0
                        ? "✨ Complimentary Concierge Shipping"
                        : `Add ${formatter.format(summary.remainingForFreeShipping)} for Free Shipping`}
                    </span>
                    <span>{summary.progressPercent}%</span>
                  </div>
                  <div className="w-full bg-border/40 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full transition-all duration-500 rounded-full"
                      style={{ width: `${summary.progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {bagItems.map((item) => {
                    const imageSrc = item.variant.images?.[0] || item.product.images?.[0] || "/images/products/placeholder.png";

                    return (
                      <div key={item.id} className="flex gap-4 p-4 bg-background border border-border/30 rounded-sm">
                        {/* Thumbnail */}
                        <div className="relative w-20 aspect-[3/4] bg-surface rounded-sm overflow-hidden shrink-0 border border-border/20">
                          <Image
                            src={imageSrc}
                            alt={item.product.name}
                            fill
                            className="object-cover object-center"
                            sizes="80px"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col flex-1 justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <h4 className="font-heading italic text-lg text-text leading-snug font-light">
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-text/40 hover:text-red-700 transition-colors p-1"
                                aria-label="Remove item"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                            <p className="font-body text-[10px] tracking-widest text-text/50 uppercase mt-0.5">
                              Color: {item.variant.color} | Size: {item.variant.size}
                            </p>
                          </div>

                          <div className="flex justify-between items-center mt-3">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-border/50 rounded-sm bg-surface">
                              <button
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="p-1.5 text-text/60 hover:text-text transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="font-body text-xs font-medium px-2 text-text">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1.5 text-text/60 hover:text-text transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus size={12} />
                              </button>
                            </div>

                            <span className="font-body text-xs font-medium text-text">
                              {formatter.format(item.itemSubtotal)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {bagItems.length > 0 && (
            <div className="p-6 border-t border-border/40 bg-background space-y-4">
              <div className="flex justify-between items-center font-body text-xs">
                <span className="tracking-widest uppercase text-text/60">Subtotal</span>
                <span className="font-heading italic text-xl text-text font-light">
                  {formatter.format(summary.subtotal)}
                </span>
              </div>
              <p className="font-body text-[9px] text-text/40 tracking-widest uppercase">
                Taxes & Concierge Delivery calculated via WhatsApp checkout.
              </p>
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-whatsapp text-white py-4 text-[10px] tracking-[0.2em] uppercase font-body hover:opacity-95 transition-opacity rounded-sm font-medium shadow-sm"
              >
                Checkout via WhatsApp Concierge
              </button>
              <Link
                href="/bag"
                onClick={() => setCartOpen(false)}
                className="block text-center font-body text-[9px] tracking-widest uppercase text-text/60 hover:text-text underline pt-1"
              >
                View Full Shopping Bag Page &rarr;
              </Link>
            </div>
          )}

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
