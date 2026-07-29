"use client";

import * as React from "react";
import { AnnouncementProvider } from "@/providers/AnnouncementProvider";
import { SearchProvider } from "@/providers/SearchProvider";
import { ShoppingBagProvider } from "@/providers/ShoppingBagProvider";
import { AccountProvider } from "@/providers/AccountProvider";
import { ModalProvider } from "@/providers/ModalProvider";

import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SearchModal from "@/components/layout/SearchModal";
import CartDrawer from "@/components/layout/CartDrawer";
import { AccountDrawer } from "@/components/layout/AccountDrawer";
import { WishlistDrawer } from "@/components/layout/WishlistDrawer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <AnnouncementProvider>
      <SearchProvider>
        <ShoppingBagProvider>
          <AccountProvider>
            <ModalProvider>
              <div className="min-h-screen flex flex-col bg-background text-text selection:bg-primary selection:text-surface">
                
                {/* 1. Announcement Bar */}
                <AnnouncementBar />

                {/* 2. Flagship Header Navigation */}
                <Header />

                {/* 3. Main Content Area */}
                <main className="flex-1 w-full">{children}</main>

                {/* 4. Balanced Luxury Footer */}
                <Footer />

                {/* 5. Global Overlays & Drawers */}
                <SearchModal />
                <CartDrawer />
                <AccountDrawer />
                <WishlistDrawer />

              </div>
            </ModalProvider>
          </AccountProvider>
        </ShoppingBagProvider>
      </SearchProvider>
    </AnnouncementProvider>
  );
}
