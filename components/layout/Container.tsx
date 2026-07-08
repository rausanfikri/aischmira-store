import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    variant: {
      default: "max-w-7xl",
      narrow: "max-w-4xl",
      wide: "max-w-[96rem]", // 1536px
      full: "max-w-full px-0 sm:px-0 lg:px-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, as: Component = "div", children, ...props }, ref) => {
    return (
      <Component ref={ref} className={cn(containerVariants({ variant, className }))} {...props}>
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
