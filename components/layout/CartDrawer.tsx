"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { useShopStore } from "@/store/useShopStore";
import { productsData } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppInquiryUrl } from "@/lib/whatsapp";

export default function CartDrawer() {
  const cartOpen = useUIStore((state) => state.cartOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);

  const cart = useShopStore((state) => state.cart);
  const updateQuantity = useShopStore((state) => state.updateQuantity);
  const removeFromCart = useShopStore((state) => state.removeFromCart);

  const cartDetails = React.useMemo(() => {
    return cart.map((item) => {
      const product = productsData.find((p) => p.id === item.productId);
      return {
        ...item,
        name: product ? product.name : "AISCHMIRA Garment",
        price: product ? product.basePrice : 0,
        image: product ? product.images[0] : "/images/products/placeholder.png",
      };
    });
  }, [cart]);

  const subtotal = React.useMemo(() => {
    return cartDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartDetails]);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const handleCheckoutWhatsApp = () => {
    if (cartDetails.length === 0) return;
    const itemList = cartDetails
      .map((item) => `- ${item.name} x${item.quantity}: ${formatter.format(item.price * item.quantity)}`)
      .join("\n");
    const message = `Hello AISCHMIRA Concierge, I would like to order the following items from my Shopping Bag:\n\n${itemList}\n\nTotal Estimated Subtotal: ${formatter.format(subtotal)}\n\nPlease assist me with order confirmation and delivery details. Thank you!`;
    const url = getWhatsAppInquiryUrl(message);
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
              <Dialog.Title className="font-heading italic text-2xl text-text">
                Shopping Bag ({cartDetails.length})
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
            {cartDetails.length === 0 ? (
              <div className="py-16 flex flex-col items-center justify-center text-text/50 text-center space-y-4">
                <ShoppingBag size={48} strokeWidth={1} className="text-text/20 mb-2" />
                <p className="font-body text-xs tracking-widest uppercase">Your bag is empty.</p>
                <p className="font-body text-xs text-text/50 font-light max-w-xs">
                  Discover our flagship collections and add your favorite pieces.
                </p>
                <Link
                  href="/collections"
                  onClick={() => setCartOpen(false)}
                  className="mt-4 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-3 px-8 rounded-sm hover:bg-primary transition-colors inline-block"
                >
                  Explore Collections
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartDetails.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-background border border-border/30 rounded-sm">
                    {/* Thumbnail */}
                    <div className="relative w-20 aspect-[3/4] bg-surface rounded-sm overflow-hidden shrink-0 border border-border/20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-center"
                        sizes="80px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-heading italic text-lg text-text leading-snug">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-text/40 hover:text-danger transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <p className="font-body text-[10px] tracking-widest text-text/50 uppercase mt-0.5">
                          Variant ID: {item.variantId}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-border/50 rounded-sm bg-surface">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
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
                          {formatter.format(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          <div className="p-6 border-t border-border/40 bg-background space-y-4">
            <div className="flex justify-between items-center font-body text-xs">
              <span className="tracking-widest uppercase text-text/60">Estimated Subtotal</span>
              <span className="font-bold text-text text-sm">{formatter.format(subtotal)}</span>
            </div>
            <p className="font-body text-[9px] text-text/40 tracking-widest uppercase">
              Taxes & delivery calculated via WhatsApp Concierge.
            </p>
            <button
              onClick={handleCheckoutWhatsApp}
              disabled={cartDetails.length === 0}
              className="w-full bg-whatsapp text-white py-4 text-[10px] tracking-[0.2em] uppercase font-body hover:opacity-95 transition-opacity rounded-sm font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Checkout via WhatsApp
            </button>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
