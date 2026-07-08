/**
 * Formats a number to Indonesian Rupiah (IDR) currency format.
 *
 * @param amount - The numeric amount to format
 * @returns Formatted currency string, e.g., "Rp 1.500.000"
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats a generic number into a local string representation (Indonesian).
 * Useful for thousands separator (e.g., 10000 -> 10.000).
 *
 * @param value - The number to format
 * @returns Formatted number string
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("id-ID").format(value);
}

/**
 * Formats a given date into a human-readable Indonesian string.
 *
 * @param date - Date object, string, or timestamp number
 * @returns Formatted date string, e.g., "12 Agustus 2026"
 */
export function formatDate(date: Date | string | number): string {
  const d = new Date(date);
  
  if (isNaN(d.getTime())) {
    return "Invalid Date";
  }

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}
