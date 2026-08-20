import { CartItem, Product, Variant } from "@/types";
import { PROMOTION_CONFIG } from "@/core/config/promotion";

type CartItemWithDetails = CartItem & { product: Product; variant: Variant };

export const WHATSAPP_NUMBER = "6285121344848";

export function getDirectProductWhatsAppUrl(params: {
  productName: string;
  collection?: string;
  color: string;
  size: string;
  skuCode: string;
  quantity?: number;
  price?: number;
  promoMessage?: string;
}) {
  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });
  const qty = params.quantity || 1;

  let message = `Halo AISCHMIRA, saya ingin membeli:\n\n`;
  message += `Product: ${params.productName}\n`;
  if (params.collection) {
    message += `Collection: ${params.collection}\n`;
  }
  message += `Color: ${params.color}\n`;
  message += `Size: ${params.size}\n`;
  message += `SKU: ${params.skuCode}\n`;
  message += `Qty: ${qty}\n`;
  if (params.price) {
    message += `Price: ${formatter.format(params.price)}\n`;
  }
  message += `\n`;

  const promoMsg = params.promoMessage ?? (PROMOTION_CONFIG.enabled ? PROMOTION_CONFIG.message : '');
  if (promoMsg) {
    message += `${promoMsg}\n\n`;
  }

  message += `Mohon info ketersediaan dan panduan pembayarannya. Terima kasih!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getWhatsAppCheckoutUrl(cartItems: CartItemWithDetails[]) {
  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });
  let message = "Halo AISCHMIRA, saya ingin memesan produk berikut:\n\n";

  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.product.name}\n`;
    message += `   SKU: ${item.variant.skuCode || item.variant.sku}\n`;
    message += `   Color: ${item.variant.color} | Size: ${item.variant.size}\n`;
    message += `   Quantity: ${item.quantity} x ${formatter.format(item.variant.price)}\n\n`;
  });

  if (PROMOTION_CONFIG.enabled && PROMOTION_CONFIG.message) {
    message += `Promo: ${PROMOTION_CONFIG.message}\n\n`;
  }

  message += "Mohon bantuan untuk konfirmasi ketersediaan dan proses pembayarannya. Terima kasih!";

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getWhatsAppInquiryUrl(customMessage: string) {
  const encodedMessage = encodeURIComponent(customMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
