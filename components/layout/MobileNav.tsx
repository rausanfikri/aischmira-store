"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useUIStore } from "@/store/useUIStore";

export default function MobileNav() {
  const mobileOpen = useUIStore((state) => state.mobileOpen);
  const setMobileOpen = useUIStore((state) => state.setMobileOpen);

  return (
    <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-surface data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content className="fixed inset-0 z-30 flex flex-col pt-[104px] data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight">
          <Dialog.Title className="sr-only">Mobile Navigation</Dialog.Title>
          <Dialog.Description className="sr-only">Main navigation links for mobile.</Dialog.Description>
          <nav className="flex flex-col px-8 py-8 gap-8 flex-1 overflow-y-auto">
            <div className="flex flex-col gap-6">
              {["Collections", "Lookbook", "Journal"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-3xl font-light tracking-wide text-text hover:text-primary transition-colors block border-b border-border/50 pb-4"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
