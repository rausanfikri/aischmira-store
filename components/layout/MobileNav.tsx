"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useUIStore } from "@/store/useUIStore";
import { ChevronRight } from "lucide-react";

export default function MobileNav() {
  const mobileOpen = useUIStore((state) => state.mobileOpen);
  const setMobileOpen = useUIStore((state) => state.setMobileOpen);

  return (
    <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background border-l border-border/40 flex flex-col pt-24 pb-12 px-6 data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight">
          <Dialog.Title className="sr-only">Mobile Navigation</Dialog.Title>
          <Dialog.Description className="sr-only">Main navigation links for mobile.</Dialog.Description>
          
          <nav className="flex flex-col gap-8 flex-1 overflow-y-auto">
            {/* Primary Navigation Links */}
            <div className="flex flex-col gap-5 border-b border-border/40 pb-8">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/40 font-bold">
                Navigation
              </span>
              <Link
                href="/collections"
                onClick={() => setMobileOpen(false)}
                className="font-heading italic text-2xl text-text hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>Collections</span>
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/collections"
                onClick={() => setMobileOpen(false)}
                className="font-heading italic text-2xl text-text hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>Categories</span>
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/journal"
                onClick={() => setMobileOpen(false)}
                className="font-heading italic text-2xl text-text hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>Journal</span>
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="font-heading italic text-2xl text-text hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>About</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Member Account Links */}
            <div className="flex flex-col gap-4 border-b border-border/40 pb-8">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/40 font-bold">
                Member Services
              </span>
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="font-body text-xs tracking-widest uppercase text-text/80 hover:text-primary transition-colors"
              >
                Sign In / Register
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setMobileOpen(false)}
                className="font-body text-xs tracking-widest uppercase text-text/80 hover:text-primary transition-colors"
              >
                My Wishlist
              </Link>
              <Link
                href="/account/orders"
                onClick={() => setMobileOpen(false)}
                className="font-body text-xs tracking-widest uppercase text-text/80 hover:text-primary transition-colors"
              >
                Order Status
              </Link>
            </div>

            {/* Quick WhatsApp Concierge */}
            <div className="mt-auto pt-4">
              <a
                href="https://wa.me/6285121344848"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-whatsapp text-white font-body text-[10px] tracking-[0.2em] uppercase py-3.5 rounded-sm block text-center font-medium shadow-sm"
              >
                Chat via WhatsApp
              </a>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
