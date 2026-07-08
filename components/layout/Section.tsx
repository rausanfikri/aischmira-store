import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full relative", {
  variants: {
    padding: {
      none: "py-0",
      sm: "py-8 md:py-12",
      md: "py-12 md:py-20",
      lg: "py-20 md:py-32",
    },
    background: {
      default: "bg-background",
      muted: "bg-muted",
      surface: "bg-surface",
      primary: "bg-primary text-background",
    },
    divider: {
      none: "",
      top: "border-t border-border",
      bottom: "border-b border-border",
      both: "border-y border-border",
    },
  },
  defaultVariants: {
    padding: "md",
    background: "default",
    divider: "none",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, padding, background, divider, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ padding, background, divider, className }))}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
