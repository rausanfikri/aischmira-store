"use client";

import * as React from "react";
import { NavLinks } from "./NavLinks";

export function Navigation() {
  return (
    <nav aria-label="Primary Header Navigation" className="hidden lg:flex items-center gap-8">
      <NavLinks />
    </nav>
  );
}
