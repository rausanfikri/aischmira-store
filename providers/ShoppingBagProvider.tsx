"use client";

import * as React from "react";
import { useShoppingBag } from "@/hooks/useShoppingBag";

type ShoppingBagContextType = ReturnType<typeof useShoppingBag>;

const ShoppingBagContext = React.createContext<ShoppingBagContextType | undefined>(undefined);

export function ShoppingBagProvider({ children }: { children: React.ReactNode }) {
  const shoppingBag = useShoppingBag();

  return (
    <ShoppingBagContext.Provider value={shoppingBag}>
      {children}
    </ShoppingBagContext.Provider>
  );
}

export function useShoppingBagContext() {
  const context = React.useContext(ShoppingBagContext);
  if (!context) {
    throw new Error("useShoppingBagContext must be used within a ShoppingBagProvider");
  }
  return context;
}
