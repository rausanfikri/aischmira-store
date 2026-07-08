import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes efficiently without style conflicts.
 * 
 * Utility ini sangat esensial untuk memanipulasi className Tailwind secara dinamis
 * dalam komponen UI (terutama jika ada kondisional props).
 *
 * @param inputs - Array of class values (strings, objects, arrays)
 * @returns A safely merged string of Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
