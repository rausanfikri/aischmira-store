/**
 * Formats a numeric value into IDR currency string (e.g., Rp 1.250.000)
 */
export function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Generic currency formatter
 */
export function formatCurrency(amount: number, currencyCode = 'IDR', locale = 'id-ID'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: currencyCode === 'IDR' ? 0 : 2,
  }).format(amount);
}
