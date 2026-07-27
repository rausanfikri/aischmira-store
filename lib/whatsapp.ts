export function getWhatsAppCheckoutUrl(cartItems: any[]) {
  const WHATSAPP_NUMBER = "6285121344848"; // From user requirements

  let message = "Hello AISCHMIRA, I would like to place an order:\n\n";

  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.product.name}\n`;
    message += `   SKU: ${item.variant.sku}\n`;
    message += `   Color: ${item.variant.color} | Size: ${item.variant.size}\n`;
    message += `   Quantity: ${item.quantity}\n\n`;
  });

  message += "Please let me know the total with shipping and how to proceed with payment.\nThank you.";

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
