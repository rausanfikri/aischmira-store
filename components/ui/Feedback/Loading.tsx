import * as React from "react";
import { Spinner } from "./Spinner";
import { cn } from "@/lib/utils";

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  fullScreen?: boolean;
}

export const Loading = ({ className, text = "Loading...", fullScreen = false, ...props }: LoadingProps) => (
  <div 
    className={cn(
      "flex flex-col items-center justify-center space-y-4",
      fullScreen ? "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" : "p-8",
      className
    )}
    {...props}
  >
    <Spinner size={32} />
    {text && <p className="text-sm text-muted animate-pulse font-medium">{text}</p>}
  </div>
);

Loading.displayName = "Loading";
