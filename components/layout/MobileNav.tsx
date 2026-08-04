"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useUIStore } from "@/store/useUIStore";
import { useShopStore } from "@/store/useShopStore";
import { ChevronDown, Search, User as UserIcon, Heart, ShoppingBag, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Collection } from "@/domain/collection/entity";
import type { Category } from "@/domain/category/entity";

const SIGNATURE_SLUGS = new Set(["femme", "her", "she"]);

interface MobileNavProps {
  collections: Collection[];
  categories: Category[];
}

export default function MobileNav({ collections, categories }: MobileNavProps) {
  const mobileOpen = useUIStore((state) => state.mobileOpen);
  const setMobileOpen = useUIStore((state) => state.setMobileOpen);
  const setSearchOpen = useUIStore((state) => state.setSearchOpen);
  const setAccountOpen = useUIStore((state) => state.setAccountOpen);
  const setWishlistOpen = useUIStore((state) => state.setWishlistOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);

  const cart = useShopStore((state) => state.cart);
  const wishlist = useShopStore((state) => state.wishlist);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [collectionsExpanded, setCollectionsExpanded] = React.useState(true);
  const [categoriesExpanded, setCategoriesExpanded] = React.useState(false);

  const handleAction = (action: () => void) => {
    setMobileOpen(false);
    action();
  };

  const signature = collections.filter((c) => SIGNATURE_SLUGS.has(c.slug));
  const classic = collections.filter((c) => !SIGNATURE_SLUGS.has(c.slug));

  return (
    <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
      <Dialog.Trigger asChild>
        <button
          className="min-w-[44px] min-h-[44px] p-2 text-[var(--header-text)] hover:text-primary transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs cursor-pointer"
          aria-label="Open Mobile Navigation Menu"
        >
          <div className="space-y-1.5 w-5">
            <span className="block w-5 h-[1.5px] bg-current transition-transform" />
            <span className="block w-3.5 h-[1.5px] bg-current transition-transform" />
            <span className="block w-4 h-[1.5px] bg-current transition-transform" />
          </div>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 w-full sm:max-w-md bg-background border-r border-border/40 flex flex-col pt-6 pb-8 px-6 sm:px-8 data-[state=open]:animate-enterFromLeft data-[state=closed]:animate-exitToLeft">
          <Dialog.Title className="sr-only">Mobile Navigation Drawer</Dialog.Title>
          <Dialog.Description className="sr-only">
            AISCHMIRA mobile navigation links, catalog categories, and account quick triggers.
          </Dialog.Description>

          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-border/30">
            <span className="font-heading italic text-2xl text-text font-light tracking-wide">
              AISCHMIRA
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-text/60 hover:text-text rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 flex-1 overflow-y-auto pt-6" aria-label="Mobile Navigation">
            {/* 1. Collections Section */}
            <div className="border-b border-border/20 pb-5 space-y-3">
              <button
                onClick={() => setCollectionsExpanded(!collectionsExpanded)}
                className="w-full min-h-[48px] font-heading italic text-2xl text-text flex items-center justify-between hover:text-primary transition-colors font-light text-left cursor-pointer"
                aria-expanded={collectionsExpanded}
                aria-controls="mobile-collections-panel"
              >
                <span>Collections</span>
                <ChevronDown
                  size={18}
                  className={cn("transition-transform duration-300", collectionsExpanded && "rotate-180")}
                />
              </button>

              {collectionsExpanded && (
                <div id="mobile-collections-panel" className="pl-3 pt-2 space-y-4 font-body text-xs tracking-widest uppercase">
                  {/* Signature */}
                  {signature.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-primary font-bold text-[9px] tracking-[0.25em] block">
                        Signature Line
                      </span>
                      {signature.map((c) => (
                        <Link
                          key={c.id}
                          href={`/collections/${c.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between min-h-[44px] py-2.5 px-3 bg-surface border border-primary/20 hover:border-primary text-text font-medium transition-colors rounded-xs"
                        >
                          <span className="font-heading italic text-lg font-light">{c.name}</span>
                          <span className="font-body text-[8px] tracking-widest bg-primary/10 text-primary px-2 py-0.5 font-bold rounded-xs">
                            Signature
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Classic & Capsule Collections */}
                  {classic.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="text-text/50 font-bold text-[9px] tracking-[0.25em] block">
                        Capsules & Scarves
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {classic.map((c) => (
                          <Link
                            key={c.id}
                            href={`/collections/${c.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center min-h-[44px] py-2 px-3 bg-surface/60 border border-border/30 hover:border-primary/40 text-text/80 hover:text-primary transition-colors rounded-xs font-medium"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 2. Categories Section */}
            <div className="border-b border-border/20 pb-5 space-y-3">
              <button
                onClick={() => setCategoriesExpanded(!categoriesExpanded)}
                className="w-full min-h-[48px] font-heading italic text-2xl text-text flex items-center justify-between hover:text-primary transition-colors font-light text-left cursor-pointer"
                aria-expanded={categoriesExpanded}
                aria-controls="mobile-categories-panel"
              >
                <span>Categories</span>
                <ChevronDown
                  size={18}
                  className={cn("transition-transform duration-300", categoriesExpanded && "rotate-180")}
                />
              </button>

              {categoriesExpanded && (
                <div id="mobile-categories-panel" className="pl-3 pt-2 grid grid-cols-2 gap-2 font-body text-xs tracking-widest uppercase">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/collections?category=${encodeURIComponent(cat.slug)}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center min-h-[44px] py-2 px-3 bg-surface/60 border border-border/30 hover:border-primary/40 text-text/80 hover:text-primary transition-colors rounded-xs font-medium"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Quick Actions */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => handleAction(() => setSearchOpen(true))}
                className="min-h-[48px] p-3 bg-surface border border-border/40 rounded-xs font-body text-[10px] tracking-widest uppercase text-text flex items-center justify-center gap-2 hover:border-primary transition-colors cursor-pointer"
              >
                <Search size={16} /> Search
              </button>

              <button
                onClick={() => handleAction(() => setAccountOpen(true))}
                className="min-h-[48px] p-3 bg-surface border border-border/40 rounded-xs font-body text-[10px] tracking-widest uppercase text-text flex items-center justify-center gap-2 hover:border-primary transition-colors cursor-pointer"
              >
                <UserIcon size={16} /> Account
              </button>

              <button
                onClick={() => handleAction(() => setWishlistOpen(true))}
                className="min-h-[48px] p-3 bg-surface border border-border/40 rounded-xs font-body text-[10px] tracking-widest uppercase text-text flex items-center justify-center gap-2 hover:border-primary transition-colors relative cursor-pointer"
              >
                <Heart size={16} /> Wishlist ({wishlist.length})
              </button>

              <button
                onClick={() => handleAction(() => setCartOpen(true))}
                className="min-h-[48px] p-3 bg-surface border border-border/40 rounded-xs font-body text-[10px] tracking-widest uppercase text-text flex items-center justify-center gap-2 hover:border-primary transition-colors relative cursor-pointer"
              >
                <ShoppingBag size={16} /> Bag ({cartCount})
              </button>
            </div>

            {/* WhatsApp Concierge CTA */}
            <div className="mt-auto pt-6">
              <a
                href="https://wa.me/6285121344848"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] bg-whatsapp hover:bg-whatsapp-hover text-white font-body text-[10px] tracking-[0.2em] uppercase py-3.5 rounded-xs flex items-center justify-center gap-2 font-medium shadow-xs transition-colors"
              >
                <MessageCircle size={16} /> Chat via WhatsApp
              </a>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
