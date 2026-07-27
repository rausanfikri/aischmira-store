"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
        "relative z-50 flex items-center justify-center bg-text text-surface px-4 py-2.5",
        "min-h-[40px] overflow-hidden"
      )}
      role="region"
      aria-label="Pengumuman toko"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center text-[10px] sm:text-xs font-body tracking-[0.2em] uppercase text-surface/90"
        >
          {announcements[index]}
        </motion.p>
      </AnimatePresence>
      <button
        onClick={() => setVisible(false)}
        aria-label="Tutup pengumuman"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-surface/60 hover:text-surface transition-colors p-1"
      >
        <X size={14} strokeWidth={1.5} />
      </button>
    </div>
  );
}
