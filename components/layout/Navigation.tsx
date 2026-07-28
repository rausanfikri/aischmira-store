"use client";

import DesktopNav from "@/components/layout/DesktopNav";

export function Navigation({ isTransparent }: { isTransparent?: boolean }) {
  return <DesktopNav isTransparent={isTransparent} />;
}
