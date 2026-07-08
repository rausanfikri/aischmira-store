import * as React from "react";
import { cn } from "@/lib/utils";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        type="radio"
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-full border border-border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-primary accent-primary transition-colors cursor-pointer",
          hasError && "border-danger focus-visible:ring-danger",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Radio.displayName = "Radio";
