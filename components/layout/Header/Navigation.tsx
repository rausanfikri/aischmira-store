"use client";

import * as React from "react";
import { NavLinks } from "./NavLinks";
import type { Collection } from "@/domain/collection/entity";
import type { Category } from "@/domain/category/entity";

interface NavigationProps {
  collections: Collection[];
  categories: Category[];
}

export function Navigation({ collections, categories }: NavigationProps) {
  return (
    <nav aria-label="Primary Header Navigation" className="hidden lg:flex items-center gap-8">
      <NavLinks collections={collections} categories={categories} />
    </nav>
  );
}
