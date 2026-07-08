"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

export const Progress = ({ value, className, ...props }: ProgressProps) => {
  // Clamp value between 0 and 100
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div 
      className={cn("h-2 w-full overflow-hidden rounded-full bg-muted/30", className)}
      role="progressbar"
      aria-valuenow={safeValue}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <motion.div
        className="h-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: `${safeValue}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

Progress.displayName = "Progress";
