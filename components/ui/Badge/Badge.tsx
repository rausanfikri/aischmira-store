import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-primary text-background hover:opacity-90 shadow-sm",
        secondary:
          "border-transparent bg-secondary text-text hover:bg-accent",
        success:
          "border-transparent bg-success text-surface hover:opacity-90 shadow-sm",
        danger:
          "border-transparent bg-danger text-surface hover:opacity-90 shadow-sm",
        warning:
          "border-transparent bg-warning text-surface hover:opacity-90 shadow-sm",
        outline: "text-text border-border",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
