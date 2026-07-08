import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/Typography";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState = ({ 
  icon, title, description, action, className, ...props 
}: EmptyStateProps) => (
  <div 
    className={cn(
      "flex flex-col items-center justify-center text-center p-8 sm:p-12 border-2 border-dashed border-border rounded-xl bg-surface/50", 
      className
    )}
    {...props}
  >
    {icon && <div className="mb-4 text-muted shrink-0">{icon}</div>}
    <Typography variant="h4" className="mb-2">{title}</Typography>
    {description && (
      <Typography variant="body" className="text-muted max-w-md mb-6">
        {description}
      </Typography>
    )}
    {action}
  </div>
);

EmptyState.displayName = "EmptyState";
