"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useUIStore } from "@/store/useUIStore";
import { useShopStore } from "@/store/useShopStore";
import { ChevronDown, Search, User as UserIcon, Heart, ShoppingBag, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const COLLECTIONS = {
  signature: [
    { name: "FEMME", slug: "femme" },
    { name: "HER", slug: "her" },
    { name: "SHE", slug: "she" },
  ],
  classic: [
    { name: "Bianca", slug: "bianca" },
    { name: "Priscila", slug: "priscila" },
    { name: "Safira", slug: "safira" },
    { name: "Briana", slug: "briana" },
    { name: "Tifani", slug: "tifani" },
    { name: "Zamira", slug: "zamira" },
    { name: "Gendis", slug: "gendis" },
    { name: "Amara", slug: "amara" },
    { name: "Dasya", slug: "dasya" },
    { name: "Jolly", slug: "jolly" },
    { name: "Aveline", slug: "aveline" },
    { name: "Luna", slug: "luna" },
  ],
  special: [
    { name: "AM Monogram", slug: "am-monogram" },
    { name: "Floral Meadow", slug: "floral-meadow" },
    { name: "Chili Chic", slug: "chili-chic" },
    { name: "Garlic Bloom", slug: "garlic-bloom" },
    { name: "Spice Blossom", slug: "spice-blossom" },
  ],
};

const CATEGORIES = [
  { name: "Outerwear", slug: "outerwear" },
  { name: "Tops", slug: "tops" },
  { name: "Bottoms", slug: "bottoms" },
  { name: "Dress", slug: "dress" },
  { name: "Accessories", slug: "accessories" },
  { name: "Long Pyjama Set", slug: "long-pyjama" },
  { name: "Short Pyjama Set", slug: "short-pyjama" },
];

export default function MobileNav() {
  const mobileOpen = useUIStore((state) => state.mobileOpen);
  const setMobileOpen = useUIStore((state) => state.setMobileOpen);
  const setSearchOpen = useUIStore((state) => state.setSearchOpen);
  const setAccountOpen = useUIStore((state) => state.setAccountOpen);
  const setWishlistOpen = useUIStore((state) => state.setWishlistOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);

  const cart = useShopStore((state) => state.cart);
  const wishlist = useShopStore((state) => state.wishlist);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [collectionsExpanded, setCollectionsExpanded] = React.useState(false);
  const [categoriesExpanded, setCategoriesExpanded] = React.useState(false);

  const handleAction = (action: () => void) => {
    setMobileOpen(false);
    action();
  };

  return (
    <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
      <Dialog.Trigger asChild>
        <button
          className="p-2 text-text/80 hover:text-primary transition-colors focus:outline-none"
          aria-label="Open Navigation Menu"
        >
          <div className="space-y-1.5 w-6">
            <span className="block w-6 h-[1.5px] bg-current" />
            <span className="block w-4 h-[1.5px] bg-current" />
            <span className="block w-5 h-[1.5px] bg-current" />
          </div>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-background border-r border-border/40 flex flex-col pt-6 pb-8 px-6 data-[state=open]:animate-enterFromLeft data-[state=closed]:animate-exitToLeft">
          <Dialog.Title className="sr-only">Mobile Navigation Drawer</Dialog.Title>
          <Dialog.Description className="sr-only">Mobile navigation links and account triggers.</Dialog.Description>
          
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-border/40">
            <span className="font-heading italic text-xl text-text font-light">AISCHMIRA</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-text/60 hover:text-text rounded-full focus:outline-none"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 flex-1 overflow-y-auto pt-6">
            
            {/* 1. Collections Accordion */}
            <div className="border-b border-border/30 pb-4 space-y-3">
              <button
                onClick={() => setCollectionsExpanded(!collectionsExpanded)}
                className="w-full font-heading italic text-2xl text-text flex items-center justify-between hover:text-primary transition-colors font-light text-left"
              >
                <span>Collections</span>
                <ChevronDown size={18} className={cn("transition-transform duration-300", collectionsExpanded && "rotate-180")} />
              </button>

              {collectionsExpanded && (
                <div className="pl-4 pt-2 space-y-4 font-body text-xs tracking-widest uppercase">
                  {/* Signature */}
                  <div className="space-y-2">
                    <span className="text-primary font-bold text-[9px] block">Signature</span>
                    {COLLECTIONS.signature.map((c) => (
                      <Link
                        key={c.name}
                        href={`/collections/${c.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 text-text/80 hover:text-primary"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>

                  {/* Classic */}
                  <div className="space-y-2">
                    <span className="text-text/40 font-bold text-[9px] block">Classic</span>
                    <div className="grid grid-cols-2 gap-2">
                      {COLLECTIONS.classic.map((c) => (
                        <Link
                          key={c.name}
                          href={`/collections/${c.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1 text-text/70 hover:text-primary"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Special */}
                  <div className="space-y-2">
                    <span className="text-text/40 font-bold text-[9px] block">Special Scarves</span>
                    {COLLECTIONS.special.map((c) => (
                      <Link
                        key={c.name}
                        href={`/collections/${c.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 text-text/70 hover:text-primary"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Categories Accordion */}
            <div className="border-b border-border/30 pb-4 space-y-3">
              <button
                onClick={() => setCategoriesExpanded(!categoriesExpanded)}
                className="w-full font-heading italic text-2xl text-text flex items-center justify-between hover:text-primary transition-colors font-light text-left"
              >
                <span>Categories</span>
                <ChevronDown size={18} className={cn("transition-transform duration-300", categoriesExpanded && "rotate-180")} />
              </button>

              {categoriesExpanded && (
                <div className="pl-4 pt-2 flex flex-col gap-2 font-body text-xs tracking-widest uppercase text-text/70">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.name}
                      href={`/collections?category=${encodeURIComponent(cat.slug)}`}
                      onClick={() => setMobileOpen(false)}
                      className="py-1 hover:text-primary"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Member Quick Triggers */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => handleAction(() => setSearchOpen(true))}
                className="p-3 bg-surface border border-border/40 rounded-sm font-body text-[10px] tracking-widest uppercase text-text flex items-center justify-center gap-2 hover:border-primary"
              >
                <Search size={16} /> Search
              </button>

              <button
                onClick={() => handleAction(() => setAccountOpen(true))}
                className="p-3 bg-surface border border-border/40 rounded-sm font-body text-[10px] tracking-widest uppercase text-text flex items-center justify-center gap-2 hover:border-primary"
              >
                <UserIcon size={16} /> Account
              </button>

              <button
                onClick={() => handleAction(() => setWishlistOpen(true))}
                className="p-3 bg-surface border border-border/40 rounded-sm font-body text-[10px] tracking-widest uppercase text-text flex items-center justify-center gap-2 hover:border-primary relative"
              >
                <Heart size={16} /> Wishlist ({wishlist.length})
              </button>

              <button
                onClick={() => handleAction(() => setCartOpen(true))}
                className="p-3 bg-surface border border-border/40 rounded-sm font-body text-[10px] tracking-widest uppercase text-text flex items-center justify-center gap-2 hover:border-primary relative"
              >
                <ShoppingBag size={16} /> Bag ({cartCount})
              </button>
            </div>

            {/* WhatsApp Concierge */}
            <div className="mt-auto pt-4">
              <a
                href="https://wa.me/6285121344848"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-whatsapp text-white font-body text-[10px] tracking-[0.2em] uppercase py-3.5 rounded-sm flex items-center justify-center gap-2 font-medium shadow-sm"
              >
                <MessageCircle size={15} /> Chat via WhatsApp
              </a>
            </div>

          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
