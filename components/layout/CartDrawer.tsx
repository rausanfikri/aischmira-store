"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ShoppingBag } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/6285121344848";

export default function CartDrawer() {
  const cartOpen = useUIStore((state) => state.cartOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);

  return (
    <Dialog.Root open={cartOpen} onOpenChange={setCartOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-surface shadow-2xl flex flex-col data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight">
          
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <Dialog.Title className="font-heading text-2xl tracking-wider uppercase">Shopping Bag</Dialog.Title>
            <Dialog.Description className="sr-only">Your shopping cart contents.</Dialog.Description>
            <Dialog.Close asChild>
              <button 
                className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1"
                aria-label="Close cart"
              >
                <X size={24} strokeWidth={1.25} />
              </button>
            </Dialog.Close>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="p-12 flex flex-col items-center justify-center text-text/50 border-b border-border/50">
              <ShoppingBag size={48} strokeWidth={1} className="mb-6 opacity-20" />
              <p className="font-body text-xs tracking-widest uppercase">Your bag is empty.</p>
            </div>

            {/* Suggestions for empty state */}
            <div className="p-6">
              <h3 className="font-body text-[10px] tracking-[0.2em] uppercase text-text/50 mb-6">You Might Like</h3>
              <div className="flex flex-col gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-16 h-20 bg-background overflow-hidden shrink-0">
                      <Image 
                        src={`https://picsum.photos/seed/cart-prod-${i}/120/160`} 
                        alt="" 
                        width={64} 
                        height={80} 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                      <span className="font-heading text-lg group-hover:text-primary transition-colors">Tifani Dress</span>
                      <span className="font-body text-[10px] tracking-widest text-text/50 uppercase mt-1">Rp 1.299.000</span>
                    </div>
                    <button className="text-[10px] uppercase tracking-wider font-body border border-border px-3 py-1.5 hover:border-primary hover:text-primary transition-colors rounded-full">
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-border/50 bg-background/50">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center bg-text text-surface py-4 text-[11px] tracking-[0.2em] uppercase font-body hover:bg-primary transition-colors rounded-full"
            >
              Checkout via WhatsApp
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
