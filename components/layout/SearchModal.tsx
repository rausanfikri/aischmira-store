"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Search } from "lucide-react";
import Image from "next/image";
import { useUIStore } from "@/store/useUIStore";

export default function SearchModal() {
  const searchOpen = useUIStore((state) => state.searchOpen);
  const setSearchOpen = useUIStore((state) => state.setSearchOpen);

  return (
    <Dialog.Root open={searchOpen} onOpenChange={setSearchOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col items-center p-4 pt-32 overflow-y-auto data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut">
          
          <Dialog.Close asChild>
            <button 
              className="absolute top-8 right-8 text-text hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
              aria-label="Close search"
            >
              <X size={32} strokeWidth={1} />
            </button>
          </Dialog.Close>
          
          <div className="w-full max-w-4xl relative mb-16">
            <Dialog.Title className="sr-only">Search</Dialog.Title>
            <Dialog.Description className="sr-only">Search for products and collections.</Dialog.Description>
            <input 
              type="text" 
              placeholder="Search products, collections..." 
              className="w-full bg-transparent border-b-2 border-text/20 focus:border-primary text-2xl md:text-4xl font-heading font-light py-4 outline-none placeholder:text-text/30 transition-colors"
              autoFocus
              aria-label="Search input"
            />
            <Search size={28} className="absolute right-0 top-1/2 -translate-y-1/2 text-text/30" strokeWidth={1} />
          </div>

          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12 text-left pb-16">
            <div>
              <h3 className="font-body text-[10px] tracking-[0.2em] uppercase text-text/50 mb-6">Recent Searches</h3>
              <ul className="flex flex-col gap-4 font-heading text-xl text-text/80">
                <li><button className="hover:text-primary transition-colors focus:outline-none">Silk Scarves</button></li>
                <li><button className="hover:text-primary transition-colors focus:outline-none">Priscila Dress</button></li>
                <li><button className="hover:text-primary transition-colors focus:outline-none">Outerwear 2025</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-body text-[10px] tracking-[0.2em] uppercase text-text/50 mb-6">Popular Collections</h3>
              <ul className="flex flex-col gap-4 font-heading text-xl text-text/80">
                <li><button className="hover:text-primary transition-colors focus:outline-none">FEMME Collection</button></li>
                <li><button className="hover:text-primary transition-colors focus:outline-none">HER Edit</button></li>
                <li><button className="hover:text-primary transition-colors focus:outline-none">Classic Scarf</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-body text-[10px] tracking-[0.2em] uppercase text-text/50 mb-6">Popular Products</h3>
              <div className="flex flex-col gap-4">
                {[1, 2].map((i) => (
                  <button key={i} className="flex items-center gap-4 group cursor-pointer focus:outline-none w-full text-left">
                    <div className="w-12 h-16 bg-surface overflow-hidden shrink-0">
                      <Image 
                        src={`https://picsum.photos/seed/search-prod-${i}/100/150`} 
                        alt="" 
                        width={48} 
                        height={64} 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading text-lg group-hover:text-primary transition-colors">Bianca Dress</span>
                      <span className="font-body text-[10px] tracking-widest text-text/50 uppercase">Rp 899.000</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
