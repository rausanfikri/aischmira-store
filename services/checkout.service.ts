import { ShoppingBagService, shoppingBagService, CartInputItem, BagItemWithProduct, OrderSummary } from './shopping-bag.service';
import { WhatsAppService, whatsAppService, CheckoutMessagePayload, CheckoutCustomerDetails } from './whatsapp.service';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface BigSellerOrderPayload {
  channel: 'WhatsApp';
  skus: Array<{ sku: string; variantSku: string; quantity: number; unitPrice: number; subtotal: number }>;
  totalAmount: number;
  customerName?: string;
  customerPhone?: string;
  shippingAddress?: string;
  notes?: string;
}

export interface SupabaseDraftOrderPayload {
  status: 'draft';
  items: BagItemWithProduct[];
  summary: OrderSummary;
  customer?: CheckoutCustomerDetails;
  createdAt: string;
}

export class CheckoutService {
  constructor(
    private readonly bagSvc: ShoppingBagService = shoppingBagService,
    private readonly whatsAppSvc: WhatsAppService = whatsAppService
  ) {}

  public async prepareCheckoutReview(
    cartItems: CartInputItem[]
  ): Promise<Result<{ items: BagItemWithProduct[]; summary: OrderSummary }, AppError>> {
    return this.bagSvc.getBagDetails(cartItems);
  }

  public async generateWhatsAppUrl(payload: CheckoutMessagePayload): Promise<Result<string, AppError>> {
    return this.whatsAppSvc.generateWhatsAppUrl(payload);
  }

  public toBigSellerPayload(payload: CheckoutMessagePayload): BigSellerOrderPayload {
    return {
      channel: 'WhatsApp',
      skus: payload.items.map((item) => ({
        sku: item.product.sku,
        variantSku: item.variant.sku || item.product.sku,
        quantity: item.quantity,
        unitPrice: item.variant.price,
        subtotal: item.itemSubtotal,
      })),
      totalAmount: payload.summary.grandTotal,
      customerName: payload.customer?.fullName,
      customerPhone: payload.customer?.phone,
      shippingAddress: payload.customer?.address,
      notes: payload.specialNotes,
    };
  }

  public toSupabaseDraftOrder(payload: CheckoutMessagePayload): SupabaseDraftOrderPayload {
    return {
      status: 'draft',
      items: payload.items,
      summary: payload.summary,
      customer: payload.customer,
      createdAt: new Date().toISOString(),
    };
  }
}

export const checkoutService = new CheckoutService();
