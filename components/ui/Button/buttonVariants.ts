import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-primary text-background hover:opacity-90 shadow-sm",
        secondary: "bg-secondary text-text hover:bg-accent shadow-sm",
        outline: "border border-border bg-transparent hover:bg-accent hover:text-text",
        ghost: "hover:bg-accent hover:text-text",
        link: "text-primary underline-offset-4 hover:underline",
        danger: "bg-danger text-surface hover:opacity-90 shadow-sm",
        success: "bg-success text-surface hover:opacity-90 shadow-sm",
      },
      size: {
        xs: "h-7 rounded-sm px-2 text-xs",
        sm: "h-9 rounded-md px-3 text-sm",
        md: "h-10 rounded-md px-4 py-2",
        lg: "h-11 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
      rounded: {
        true: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
