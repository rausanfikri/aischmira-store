"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const announcements = [
  "Free Shipping on orders above Rp 500.000",
  "New Collection — FEMME is now available",
  "Shop the latest arrivals at AISCHMIRA.STORE",
];

export function AnnouncementBar() {
  const [visible, setVisible] = React.useState(true);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "relative z-50 flex items-center justify-center bg-text px-4 py-2.5",
        "min-h-[40px]"
      )}
    >
      <p className="text-center text-xs font-body tracking-widest uppercase text-background transition-all duration-500">
        {announcements[index]}
      </p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-background/60 hover:text-background transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}
