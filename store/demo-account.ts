"use client";
import { create } from "zustand";
export const useDemoAccount = create<{
    email: string;
    name: string;
    phone: string;
    active: boolean;
    save: (value: {
        email: string;
        name: string;
        phone: string;
        active: boolean;
    }) => void;
}>(set => ({ email: "", name: "", phone: "", active: false, save: value => set(value) }));
