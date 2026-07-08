import * as React from "react";
import { cn } from "@/lib/utils";

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn("animate-pulse rounded-md bg-muted/40", className)} 
    role="status"
    aria-label="Loading skeleton"
    {...props} 
  />
);

Skeleton.displayName = "Skeleton";
