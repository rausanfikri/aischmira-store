"use client";

import * as React from "react";
import DesktopNav from "@/components/layout/DesktopNav";

interface NavLinksProps {
  isTransparent?: boolean;
}

export function NavLinks({ isTransparent }: NavLinksProps) {
  return (
    <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
      <DesktopNav isTransparent={isTransparent} />
    </nav>
  );
}
