"use client";

import * as React from "react";

const ANNOUNCEMENT_DISMISSED_KEY = "aischmira_announcement_dismissed_v1";

export function useAnnouncement() {
  const [dismissed, setDismissed] = React.useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return localStorage.getItem(ANNOUNCEMENT_DISMISSED_KEY) === "true";
    } catch {
      return false;
    }
  });

  const dismiss = React.useCallback(() => {
    setDismissed(true);
    try {
      localStorage.setItem(ANNOUNCEMENT_DISMISSED_KEY, "true");
    } catch {
      // Storage access fail-safe
    }
  }, []);

  return { dismissed, dismiss };
}
