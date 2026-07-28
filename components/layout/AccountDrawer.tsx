"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, User, ShoppingBag, Heart, ShieldCheck, LogOut, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useUIStore } from "@/store/useUIStore";

export function AccountDrawer() {
  const accountOpen = useUIStore((state) => state.accountOpen);
  const setAccountOpen = useUIStore((state) => state.setAccountOpen);

  return (
    <Dialog.Root open={accountOpen} onOpenChange={setAccountOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-surface shadow-2xl flex flex-col data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight border-l border-border/40">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/40 bg-background/50">
            <div className="flex items-center gap-2">
              <User size={18} strokeWidth={1.5} className="text-primary" />
              <Dialog.Title className="font-heading italic text-2xl text-text">
                Client Privilege Account
              </Dialog.Title>
            </div>
            <Dialog.Description className="sr-only">Your AISCHMIRA member privilege profile.</Dialog.Description>
            <Dialog.Close asChild>
              <button
                className="text-text/60 hover:text-text focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1 transition-colors"
                aria-label="Close account drawer"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </Dialog.Close>
          </div>

          {/* Drawer Scroll Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Member Profile Card */}
            <div className="p-6 bg-background border border-border/40 rounded-sm space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-body text-[9px] tracking-[0.25em] uppercase text-primary font-bold flex items-center gap-1">
                    <ShieldCheck size={12} /> AISCHMIRA PRIVÉ
                  </span>
                  <h3 className="font-heading italic text-2xl text-text font-light">
                    Victoria Valence
                  </h3>
                  <p className="font-body text-xs text-text/60">
                    client@aischmira.store
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-heading italic text-xl text-primary font-light">
                  VV
                </div>
              </div>

              <div className="pt-3 border-t border-border/30 flex justify-between items-center font-body text-[10px] tracking-widest uppercase text-text/70">
                <span>Loyalty Balance</span>
                <span className="font-bold text-primary text-xs">1,250 PTS</span>
              </div>
            </div>

            {/* Account Quick Links */}
            <div className="space-y-2">
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/40 font-bold block mb-3 px-1">
                Account Services
              </span>
              
              <Link
                href="/account/dashboard"
                onClick={() => setAccountOpen(false)}
                className="flex items-center justify-between p-3.5 bg-surface hover:bg-background border border-border/30 rounded-sm transition-colors group"
              >
                <span className="font-body text-xs text-text/80 group-hover:text-text tracking-widest uppercase flex items-center gap-3 font-medium">
                  <User size={16} className="text-text/50 group-hover:text-primary transition-colors" /> Dashboard & Rewards
                </span>
                <ChevronRight size={14} className="text-text/40 group-hover:text-text transition-colors" />
              </Link>

              <Link
                href="/account/orders"
                onClick={() => setAccountOpen(false)}
                className="flex items-center justify-between p-3.5 bg-surface hover:bg-background border border-border/30 rounded-sm transition-colors group"
              >
                <span className="font-body text-xs text-text/80 group-hover:text-text tracking-widest uppercase flex items-center gap-3 font-medium">
                  <ShoppingBag size={16} className="text-text/50 group-hover:text-primary transition-colors" /> Order History
                </span>
                <ChevronRight size={14} className="text-text/40 group-hover:text-text transition-colors" />
              </Link>

              <Link
                href="/wishlist"
                onClick={() => setAccountOpen(false)}
                className="flex items-center justify-between p-3.5 bg-surface hover:bg-background border border-border/30 rounded-sm transition-colors group"
              >
                <span className="font-body text-xs text-text/80 group-hover:text-text tracking-widest uppercase flex items-center gap-3 font-medium">
                  <Heart size={16} className="text-text/50 group-hover:text-primary transition-colors" /> Saved Wishlist
                </span>
                <ChevronRight size={14} className="text-text/40 group-hover:text-text transition-colors" />
              </Link>

              <Link
                href="/account/profile"
                onClick={() => setAccountOpen(false)}
                className="flex items-center justify-between p-3.5 bg-surface hover:bg-background border border-border/30 rounded-sm transition-colors group"
              >
                <span className="font-body text-xs text-text/80 group-hover:text-text tracking-widest uppercase flex items-center gap-3 font-medium">
                  <ShieldCheck size={16} className="text-text/50 group-hover:text-primary transition-colors" /> Profile Settings
                </span>
                <ChevronRight size={14} className="text-text/40 group-hover:text-text transition-colors" />
              </Link>
            </div>

            {/* Exclusive Privileges Banner */}
            <div className="p-5 bg-surface border border-border/40 rounded-sm space-y-3">
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 block">
                Privilege Perks
              </span>
              <p className="font-heading italic text-lg text-text leading-snug">
                Complimentary Alterations & Private Salon Preview
              </p>
              <p className="font-body text-[11px] text-text/60 leading-relaxed font-light">
                As an AISCHMIRA Privé member, enjoy priority concierge booking and bespoke tailoring services.
              </p>
            </div>

          </div>

          {/* Footer Action Bar */}
          <div className="p-6 border-t border-border/40 bg-background space-y-3">
            <a
              href="https://wa.me/6285121344848?text=Hello%20AISCHMIRA%20Concierge,%20I%20need%20assistance%20with%20my%20Privilege%20Account."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-whatsapp text-white py-3.5 text-[10px] tracking-[0.2em] uppercase font-body hover:opacity-95 transition-opacity rounded-sm font-medium flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} /> Consult Member Concierge
            </a>

            <Link
              href="/login"
              onClick={() => setAccountOpen(false)}
              className="w-full bg-surface text-text/70 border border-border/60 hover:border-text hover:text-text py-3 text-[10px] tracking-[0.2em] uppercase font-body transition-colors rounded-sm font-medium flex items-center justify-center gap-2 text-center"
            >
              <LogOut size={14} /> Sign Out Account
            </Link>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
