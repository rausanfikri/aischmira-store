import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "m-0 p-0", // Base styles
  {
    variants: {
      variant: {
        display: "text-h1 md:text-6xl font-heading font-light tracking-tighter",
        h1: "text-h1 font-heading font-normal",
        h2: "text-h2 font-heading font-normal",
        h3: "text-h3 font-heading font-normal",
        h4: "text-h4 font-heading font-medium",
        title: "text-body-lg font-heading font-medium",
        subtitle: "text-body-lg font-body font-light text-muted",
        body: "text-body font-body",
        caption: "text-body-sm font-body text-muted",
        label: "text-body-sm font-body font-medium uppercase tracking-wider",
        small: "text-[12px] font-body leading-tight",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      color: {
        default: "text-text",
        primary: "text-primary",
        secondary: "text-secondary",
        muted: "text-muted",
        success: "text-success",
        warning: "text-warning",
        danger: "text-danger",
        info: "text-info",
        inverse: "text-background",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
    },
    defaultVariants: {
      variant: "body",
      color: "default",
      align: "left",
    },
  }
);

// Map variant secara cerdas ke HTML Semantic Element default
const defaultElementMapping: Record<NonNullable<VariantProps<typeof typographyVariants>["variant"]>, React.ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  title: "h5",
  subtitle: "h6",
  body: "p",
  caption: "span",
  label: "label",
  small: "small",
};

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType; // Prop untuk override elemen HTML
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, weight, color, align, as, children, ...props }, ref) => {
    // 1. Prioritaskan prop 'as'
    // 2. Jika tidak ada, gunakan mapping dari variant
    // 3. Fallback terakhir menggunakan 'p'
    const Component = as || (variant ? defaultElementMapping[variant] : "p");

    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={cn(typographyVariants({ variant, weight, color, align }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";
