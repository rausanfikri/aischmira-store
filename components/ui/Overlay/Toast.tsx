"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertTriangle, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  variant?: "info" | "success" | "warning" | "danger";
  className?: string;
}

export const Toast = ({ isOpen, onClose, title, description, variant = "info", className }: ToastProps) => {
  const icons = {
    info: <Info className="text-info" size={20} />,
    success: <CheckCircle className="text-success" size={20} />,
    warning: <AlertTriangle className="text-warning" size={20} />,
    danger: <XCircle className="text-danger" size={20} />
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className={cn(
            "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-lg border border-border bg-background p-4 shadow-xl ring-1 ring-black/5",
            className
          )}
          role="alert"
          aria-live="assertive"
        >
          <div className="shrink-0">{icons[variant]}</div>
          <div className="flex-1 pt-0.5">
            <h3 className="text-sm font-medium">{title}</h3>
            {description && <p className="mt-1 text-sm text-muted">{description}</p>}
          </div>
          <button 
            onClick={onClose} 
            className="shrink-0 rounded-md p-1.5 text-muted hover:bg-muted/20 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Toast.displayName = "Toast";
