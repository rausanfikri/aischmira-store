import { ConfigurationService, configurationService } from './configuration.service';
import { BagItemWithProduct, OrderSummary, GiftPackagingOptions } from './shopping-bag.service';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface CheckoutCustomerDetails {
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
}

export interface CheckoutShippingPreference {
  method: 'concierge_express' | 'boutique_pickup' | 'personal_courier';
  notes?: string;
}

export interface CheckoutMessagePayload {
  items: BagItemWithProduct[];
  summary: OrderSummary;
  customer?: CheckoutCustomerDetails;
  shipping?: CheckoutShippingPreference;
  gift?: GiftPackagingOptions;
  specialNotes?: string;
}

export class WhatsAppService {
  constructor(private readonly configSvc: ConfigurationService = configurationService) {}

  public async getWhatsAppNumber(): Promise<Result<string, AppError>> {
    const contactRes = await this.configSvc.getContactConfig();
    if (!contactRes.isSuccess) return contactRes;
    return success(contactRes.value.whatsapp);
  }

  public buildConciergeMessage(payload: CheckoutMessagePayload): string {
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

    let msg = `Hello AISCHMIRA Styling Concierge,\n\nI am ready to finalize my order review for the following items:\n\n`;

    // 1. Items List
    payload.items.forEach((item, index) => {
      msg += `${index + 1}. ${item.product.name}\n`;
      msg += `   SKU: ${item.variant.sku || item.product.sku}\n`;
      msg += `   Color: ${item.variant.color} | Size: ${item.variant.size}\n`;
      msg += `   Quantity: ${item.quantity} x ${formatter.format(item.variant.price)}\n`;
      msg += `   Subtotal: ${formatter.format(item.itemSubtotal)}\n\n`;
    });

    // 2. Order Summary
    msg += `ORDER SUMMARY:\n`;
    msg += `Subtotal (${payload.summary.itemCount} items): ${formatter.format(payload.summary.subtotal)}\n`;
    msg += `Delivery: ${
      payload.shipping?.method === 'boutique_pickup'
        ? 'Boutique Pickup'
        : payload.summary.remainingForFreeShipping === 0
        ? 'Complimentary Concierge Express'
        : 'Calculated at Checkout'
    }\n`;
    msg += `Grand Total: ${formatter.format(payload.summary.grandTotal)}\n\n`;

    // 3. Customer Details (if provided)
    if (payload.customer?.fullName || payload.customer?.address || payload.customer?.city) {
      msg += `DELIVERY DETAILS:\n`;
      if (payload.customer.fullName) msg += `Name: ${payload.customer.fullName}\n`;
      if (payload.customer.phone) msg += `Phone: ${payload.customer.phone}\n`;
      if (payload.customer.email) msg += `Email: ${payload.customer.email}\n`;
      if (payload.customer.address) msg += `Address: ${payload.customer.address}\n`;
      if (payload.customer.city) msg += `City: ${payload.customer.city}\n`;
      msg += `\n`;
    }

    // 4. Gift Options
    if (payload.gift?.isGiftWrapped) {
      msg += `GIFT OPTIONS:\n`;
      msg += `Signature AISCHMIRA Gift Box Packaging: Yes\n`;
      if (payload.gift.giftNote?.trim()) {
        msg += `Calligraphic Note: "${payload.gift.giftNote.trim()}"\n`;
      }
      msg += `\n`;
    }

    // 5. Special Atelier Notes
    if (payload.specialNotes?.trim()) {
      msg += `ATELIER & STYLING NOTES:\n`;
      msg += `"${payload.specialNotes.trim()}"\n\n`;
    }

    msg += `Please assist me with payment options (Bank Transfer/QRIS) and shipping confirmation. Thank you!`;
    return msg;
  }

  public async generateWhatsAppUrl(payload: CheckoutMessagePayload): Promise<Result<string, AppError>> {
    const numberRes = await this.getWhatsAppNumber();
    if (!numberRes.isSuccess) return failure(numberRes.error);

    const whatsappNumber = numberRes.value;
    const rawMessage = this.buildConciergeMessage(payload);
    const encodedMessage = encodeURIComponent(rawMessage);

    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    return success(url);
  }
}

export const whatsAppService = new WhatsAppService();
