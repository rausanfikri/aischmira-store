"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({ isOpen, onClose, title, children, className }: ModalProps) => {
  // Focus trap & escape key handler
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 sm:p-6">
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
            aria-labelledby={title ? "modal-title" : undefined}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "relative z-[401] w-full max-w-lg rounded-2xl bg-background p-6 shadow-xl ring-1 ring-border",
              className
            )}
          >
            {title && (
              <div className="flex items-center justify-between mb-6">
                <h2 id="modal-title" className="text-xl font-heading font-semibold">{title}</h2>
                <button 
                  onClick={onClose} 
                  className="rounded-full p-1.5 text-muted hover:bg-muted/20 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            )}
            {!title && (
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 rounded-full p-1.5 text-muted hover:bg-muted/20 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

Modal.displayName = "Modal";
