import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-6 sm:px-[40px] md:px-[64px] lg:px-[80px]", {
  variants: {
    variant: {
      ultrawide: "max-w-[1600px]",
      hero: "max-w-[1440px]",
      default: "max-w-[1280px]",
      main: "max-w-[1280px]",
      editorial: "max-w-[960px]",
      prose: "max-w-[760px]",
      full: "max-w-full px-0 sm:px-0 md:px-0 lg:px-0",
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
