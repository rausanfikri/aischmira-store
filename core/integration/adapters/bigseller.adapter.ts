import { IInventoryProvider, IPriceProvider, StockLevel, PriceQuote } from "../contracts/inventory.provider";
import { IOrderProvider, CreateOrderPayload } from "../contracts/order.provider";
import { OrderEntity, TrackingInfo } from "@/domain/order";
import { Result, success } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export class BigSellerAdapter implements IInventoryProvider, IPriceProvider, IOrderProvider {
  public async getStockLevel(sku: string, variantId?: string): Promise<Result<StockLevel, AppError>> {
    return success({
      sku,
      variantId: variantId || sku,
      availableStock: 12,
      reservedStock: 1,
      inStock: true,
    });
  }

  public async batchGetStockLevels(skus: string[]): Promise<Result<StockLevel[], AppError>> {
    const list = skus.map((sku) => ({
      sku,
      variantId: sku,
      availableStock: 10,
      reservedStock: 0,
      inStock: true,
    }));
    return success(list);
  }

  public async getPriceQuote(sku: string, variantId?: string): Promise<Result<PriceQuote, AppError>> {
    return success({
      sku,
      variantId: variantId || sku,
      currency: "IDR",
      basePrice: 4800000,
    });
  }

  public async createOrder(payload: CreateOrderPayload): Promise<Result<OrderEntity, AppError>> {
    const mockOrder: OrderEntity = {
      id: `bigseller_${Date.now()}`,
      orderNumber: `ASC-BS-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString(),
      status: "Confirmed",
      paymentStatus: "Pending Verification",
      shippingStatus: "Pending Dispatch",
      source: "WhatsApp Concierge",
      recipientName: payload.recipientName,
      recipientPhone: payload.recipientPhone,
      shippingAddress: payload.shippingAddress,
      city: "Jakarta Selatan",
      items: payload.items.map((it) => ({
        sku: it.sku,
        variantSku: it.variantId,
        productName: `Garment ${it.sku}`,
        variantColor: "Midnight Black",
        variantSize: "M (EU 38)",
        quantity: it.quantity,
        unitPrice: it.unitPrice,
        subtotal: it.quantity * it.unitPrice,
        image: "/images/products/bianca-dress.jpg",
      })),
      summary: {
        subtotal: payload.items.reduce((acc, i) => acc + i.quantity * i.unitPrice, 0),
        discount: 0,
        shipping: 0,
        tax: 0,
        grandTotal: payload.items.reduce((acc, i) => acc + i.quantity * i.unitPrice, 0),
      },
    };
    return success(mockOrder);
  }

  public async getOrder(): Promise<Result<OrderEntity | null, AppError>> {
    return success(null);
  }

  public async getTracking(): Promise<Result<TrackingInfo | null, AppError>> {
    return success(null);
  }
}

export const bigSellerAdapter = new BigSellerAdapter();
