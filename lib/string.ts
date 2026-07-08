/**
 * Converts a string into a URL-friendly slug.
 * 
 * Contoh: "Baju Koko Modern!" -> "baju-koko-modern"
 *
 * @param text - The string to slugify
 * @returns Slugified string
 */
export function slugify(text: string): string {
  if (!text) return "";
  
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")        // Replace spaces with -
    .replace(/[^\w-]+/g, "")     // Remove all non-word chars
    .replace(/--+/g, "-");       // Replace multiple - with single -
}

/**
 * Capitalizes the first letter of a string.
 * 
 * Contoh: "aischmira" -> "Aischmira"
 *
 * @param text - The string to capitalize
 * @returns String with the first letter capitalized
 */
export function capitalize(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Truncates a string to a specified maximum length, adding an ellipsis (...) 
 * if it exceeds the limit.
 *
 * @param text - The string to truncate
 * @param maxLength - The maximum allowed length
 * @returns Truncated string
 */
export function truncate(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}
