import { CartItem, Product, Variant } from "@/types";
import { PROMOTION_CONFIG } from "@/core/config/promotion";

type CartItemWithDetails = CartItem & { product: Product; variant: Variant };

export const WHATSAPP_NUMBER = "6285121344848";

export function getDirectProductWhatsAppUrl(params: {
  customerName?: string;
  productName: string;
  collection?: string;
  color: string;
  size: string;
  skuCode: string;
  quantity?: number;
  price?: number;
  bazaarEvent?: string;
  promoMessage?: string;
}) {
  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });
  const qty = params.quantity || 1;

  let message = `Halo AISCHMIRA Concierge,\n\n`;
  if (params.customerName && params.customerName !== 'Guest Visitor') {
    message += `Nama: ${params.customerName}\n`;
  }
  message += `Saya tertarik untuk memesan:\n`;
  message += `• Produk: ${params.productName}\n`;
  if (params.collection) {
    message += `• Koleksi: ${params.collection}\n`;
  }
  message += `• SKU: ${params.skuCode}\n`;
  message += `• Warna: ${params.color}\n`;
  message += `• Ukuran: ${params.size}\n`;
  message += `• Jumlah: ${qty} pcs\n`;
  if (params.price) {
    message += `• Harga Satuan: ${formatter.format(params.price)}\n`;
    message += `• Subtotal: ${formatter.format(params.price * qty)}\n`;
  }
  if (params.bazaarEvent) {
    message += `• Event/Bazaar: ${params.bazaarEvent}\n`;
  }
  message += `\n`;

  const promoMsg = params.promoMessage ?? (PROMOTION_CONFIG.enabled ? PROMOTION_CONFIG.message : '');
  if (promoMsg) {
    message += `Promo: ${promoMsg}\n\n`;
  }

  message += `Mohon konfirmasi ketersediaan dan panduan pembayarannya. Terima kasih.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getWhatsAppCheckoutUrl(
  cartItems: CartItemWithDetails[],
  options?: {
    customerName?: string;
    bazaarEvent?: string;
  }
) {
  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });
  let message = "Halo AISCHMIRA Concierge,\n\n";
  if (options?.customerName && options.customerName !== 'Guest Visitor') {
    message += `Nama Pemesan: ${options.customerName}\n\n`;
  }
  message += "Saya ingin memesan koleksi berikut:\n\n";

  let totalAmount = 0;
  cartItems.forEach((item, index) => {
    const itemSubtotal = (item.variant.price || item.product.price || 0) * item.quantity;
    totalAmount += itemSubtotal;
    message += `${index + 1}. ${item.product.name}\n`;
    message += `   SKU: ${item.variant.skuCode || item.variant.sku}\n`;
    message += `   Warna: ${item.variant.color} | Ukuran: ${item.variant.size}\n`;
    message += `   Qty: ${item.quantity} x ${formatter.format(item.variant.price)} = ${formatter.format(itemSubtotal)}\n\n`;
  });

  message += `Total Belanja: ${formatter.format(totalAmount)}\n`;
  if (options?.bazaarEvent) {
    message += `Event/Bazaar: ${options.bazaarEvent}\n`;
  }
  message += `\n`;

  if (PROMOTION_CONFIG.enabled && PROMOTION_CONFIG.message) {
    message += `Promo: ${PROMOTION_CONFIG.message}\n\n`;
  }

  message += "Mohon konfirmasi ketersediaan stok dan panduan pengiriman/pembayarannya. Terima kasih.";

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getWhatsAppInquiryUrl(customMessage: string) {
  const encodedMessage = encodeURIComponent(customMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
