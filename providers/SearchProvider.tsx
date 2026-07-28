"use client";

import * as React from "react";
import { useSearch } from "@/hooks/useSearch";

interface SearchContextType {
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

const SearchContext = React.createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const { searchOpen, setSearchOpen } = useSearch();

  return (
    <SearchContext.Provider value={{ searchOpen, setSearchOpen }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}
