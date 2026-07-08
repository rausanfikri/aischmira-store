import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative flex flex-col overflow-hidden bg-background text-text transition-all",
  {
    variants: {
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
        soft: "shadow-soft",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
      },
      border: {
        true: "border border-border",
        false: "border-transparent",
      },
      hover: {
        true: "hover:shadow-lg hover:-translate-y-1 hover:border-primary/50",
        false: "",
      },
      clickable: {
        true: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        false: "",
      },
    },
    defaultVariants: {
      shadow: "sm",
      radius: "md",
      border: true,
      hover: false,
      clickable: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, shadow, radius, border, hover, clickable, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ shadow, radius, border, hover, clickable }),
          className
        )}
        // Menambahkan properti aksesibilitas bila card di-set sebagai clickable
        tabIndex={clickable ? 0 : undefined}
        role={clickable ? "button" : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md" | "lg";
}

const getPaddingClass = (padding?: string) => {
  switch (padding) {
    case "none": return "p-0";
    case "sm": return "p-3 sm:p-4";
    case "md": return "p-4 sm:p-6";
    case "lg": return "p-6 sm:p-8";
    default: return "p-4 sm:p-6";
  }
};

export const CardHeader = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, padding = "md", ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5", getPaddingClass(padding), className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

export const CardBody = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, padding = "md", ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn("flex-1", getPaddingClass(padding), className)} 
      {...props} 
    />
  )
);
CardBody.displayName = "CardBody";

export const CardFooter = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, padding = "md", ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center mt-auto", getPaddingClass(padding), className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  wrapperClassName?: string;
}

export const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, wrapperClassName, aspectRatio = "auto", alt, ...props }, ref) => {
    const aspectClass = {
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-[3/4]",
      auto: "aspect-auto",
    }[aspectRatio];

    return (
      <div className={cn("overflow-hidden relative w-full", aspectClass, wrapperClassName)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ref}
          className={cn("h-full w-full object-cover transition-transform duration-500", className)}
          alt={alt || "Card image"}
          {...props}
        />
      </div>
    );
  }
);
CardImage.displayName = "CardImage";
