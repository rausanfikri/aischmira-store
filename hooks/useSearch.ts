"use client";

import { useUIStore } from "@/store/useUIStore";

export function useSearch() {
  const searchOpen = useUIStore((state) => state.searchOpen);
  const setSearchOpen = useUIStore((state) => state.setSearchOpen);

  return {
    searchOpen,
    setSearchOpen,
  };
}
