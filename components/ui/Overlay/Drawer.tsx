"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  side?: "left" | "right";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Drawer = ({ isOpen, onClose, side = "right", title, children, className }: DrawerProps) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const slideVariants = {
    right: { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" } },
    left: { initial: { x: "-100%" }, animate: { x: 0 }, exit: { x: "-100%" } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[400] flex">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "drawer-title" : undefined}
            variants={slideVariants[side]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn(
              "relative z-[401] flex h-full w-full max-w-md flex-col bg-background p-6 shadow-2xl ring-1 ring-border",
              side === "right" ? "ml-auto" : "mr-auto",
              className
            )}
          >
            <div className="flex items-center justify-between mb-6">
              {title && <h2 id="drawer-title" className="text-xl font-heading font-semibold">{title}</h2>}
              <button 
                onClick={onClose} 
                className="ml-auto rounded-full p-1.5 text-muted hover:bg-muted/20 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                aria-label="Close drawer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

Drawer.displayName = "Drawer";
