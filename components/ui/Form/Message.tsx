import * as React from "react";
import { cn } from "@/lib/utils";

export const HelperText = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-[0.8rem] text-muted mt-1.5", className)} {...props} />
  )
);
HelperText.displayName = "HelperText";

export const ErrorMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-[0.8rem] font-medium text-danger mt-1.5", className)} {...props} />
  )
);
ErrorMessage.displayName = "ErrorMessage";
