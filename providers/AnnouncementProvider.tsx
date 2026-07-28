"use client";

import * as React from "react";
import { useAnnouncement } from "@/hooks/useAnnouncement";

interface AnnouncementContextType {
  dismissed: boolean;
  dismiss: () => void;
}

const AnnouncementContext = React.createContext<AnnouncementContextType | undefined>(undefined);

export function AnnouncementProvider({ children }: { children: React.ReactNode }) {
  const { dismissed, dismiss } = useAnnouncement();

  return (
    <AnnouncementContext.Provider value={{ dismissed, dismiss }}>
      {children}
    </AnnouncementContext.Provider>
  );
}

export function useAnnouncementContext() {
  const context = React.useContext(AnnouncementContext);
  if (!context) {
    throw new Error("useAnnouncementContext must be used within an AnnouncementProvider");
  }
  return context;
}
