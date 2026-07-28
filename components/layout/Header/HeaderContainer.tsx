"use client";

import * as React from "react";

interface HeaderContainerProps {
  children: React.ReactNode;
}

export function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <div className="container-hero w-full">
      {children}
    </div>
  );
}
