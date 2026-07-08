import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gridVariants = cva("grid", {
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      responsive: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", // Sangat cocok untuk galeri/produk
    },
    gap: {
      none: "gap-0",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    },
  },
  defaultVariants: {
    columns: "responsive",
    gap: "md",
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  as?: React.ElementType;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, columns, gap, as: Component = "div", children, ...props }, ref) => {
    return (
      <Component ref={ref} className={cn(gridVariants({ columns, gap, className }))} {...props}>
        {children}
      </Component>
    );
  }
);

Grid.displayName = "Grid";
