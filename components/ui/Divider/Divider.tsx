import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dividerVariants = cva("bg-border shrink-0", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  spacing?: "none" | "sm" | "md" | "lg";
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", spacing = "none", ...props }, ref) => {
    
    // Dynamic margin matching Tailwind design tokens
    let spacingClass = "";
    if (orientation === "horizontal") {
      if (spacing === "sm") spacingClass = "my-4";
      if (spacing === "md") spacingClass = "my-8";
      if (spacing === "lg") spacingClass = "my-12";
    } else {
      if (spacing === "sm") spacingClass = "mx-4";
      if (spacing === "md") spacingClass = "mx-8";
      if (spacing === "lg") spacingClass = "mx-12";
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation || undefined}
        className={cn(
          dividerVariants({ orientation }),
          spacingClass,
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
