import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export const Spinner = ({ className, size = 24, ...props }: SpinnerProps) => (
  <div role="status" aria-label="Loading" className={cn("inline-flex", className)} {...props}>
    <Loader2 size={size} className="animate-spin text-primary" />
  </div>
);

Spinner.displayName = "Spinner";
