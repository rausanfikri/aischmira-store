"use client";

import * as React from "react";
import { X, MessageCircle } from "lucide-react";
import { useAnnouncementContext } from "@/providers/AnnouncementProvider";

export function AnnouncementBar() {
  const { dismissed, dismiss } = useAnnouncementContext();

  if (dismissed) return null;

  return (
    <div
      className="bg-text text-surface h-[40px] px-6 flex items-center justify-between font-body text-[10px] tracking-[0.2em] uppercase z-50 relative transition-all duration-300 border-b border-surface/10"
      role="region"
      aria-label="Announcement Bar"
    >
      <div className="mx-auto flex items-center gap-3">
        <span className="font-medium">
          COMPLIMENTARY WORLDWIDE EXPRESS SHIPPING & CONCIERGE PACKAGING
        </span>
        <span className="hidden md:inline text-surface/40">&bull;</span>
        <a
          href="https://wa.me/6285121344848"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline font-bold text-primary hover:underline flex items-center gap-1"
        >
          <MessageCircle size={12} /> WhatsApp Assistance
        </a>
      </div>

      <button
        onClick={dismiss}
        className="text-surface/60 hover:text-surface transition-colors p-1"
        aria-label="Dismiss Announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}
