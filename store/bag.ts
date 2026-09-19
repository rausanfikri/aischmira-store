"use client";
import { create } from "zustand";
import { parseBag } from "@/lib/commerce";
import type { BagLine } from "@/types/storefront";
const key = "aischmira-demo-bag-v1";
interface BagState {
    lines: BagLine[];
    ready: boolean;
    error: string;
    hydrate: () => void;
    setLines: (lines: BagLine[]) => void;
}
export const useBag = create<BagState>((set) => ({ lines: [], ready: false, error: "",
    hydrate: () => { try {
        set({ lines: parseBag(JSON.parse(localStorage.getItem(key) || "[]")), ready: true });
    }
    catch {
        set({ ready: true, error: "Saved bag could not be read. Clear the bag to continue." });
    } },
    setLines: lines => { try {
        const clean = parseBag(lines);
        localStorage.setItem(key, JSON.stringify(clean));
        set({ lines: clean, error: "" });
    }
    catch {
        set({ error: "Bag could not be saved. Check browser storage and quantities." });
    } },
}));
