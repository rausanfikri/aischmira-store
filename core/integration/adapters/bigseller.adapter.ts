import { IInventoryProvider, IPriceProvider, StockLevel, PriceQuote } from "../contracts/inventory.provider";
import { IOrderProvider, CreateOrderPayload } from "../contracts/order.provider";
import { OrderEntity, TrackingInfo } from "@/domain/order";
import { Result, success } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";
import { bigSellerInventoryService } from "../bigseller/services/inventory.service";
import { bigSellerPricingService } from "../bigseller/services/pricing.service";
import { BigSellerOrderMapper } from "../bigseller/mappers/order.mapper";

export class BigSellerAdapter implements IInventoryProvider, IPriceProvider, IOrderProvider {
  public async getStockLevel(sku: string): Promise<Result<StockLevel, AppError>> {
    return bigSellerInventoryService.getStockLevel(sku);
  }

  public async batchGetStockLevels(skus: string[]): Promise<Result<StockLevel[], AppError>> {
    const results = await Promise.all(skus.map((sku) => this.getStockLevel(sku)));
    const levels: StockLevel[] = [];
    for (const r of results) {
      if (r.isSuccess) levels.push(r.value);
    }
    return success(levels);
  }

  public async getPriceQuote(sku: string): Promise<Result<PriceQuote, AppError>> {
    return bigSellerPricingService.getPriceQuote(sku);
  }

  public async createOrder(payload: CreateOrderPayload): Promise<Result<OrderEntity, AppError>> {
    const mockOrderDto = {
      orderId: `bigseller_${Date.now()}`,
      orderNumber: `ASC-BS-${Math.floor(1000 + Math.random() * 9000)}`,
      channel: "WhatsApp Concierge",
      status: "Confirmed",
      paymentStatus: "Pending Verification",
      buyerName: payload.recipientName,
      buyerPhone: payload.recipientPhone,
      shippingAddress: payload.shippingAddress,
      items: payload.items.map((it) => ({
        sku: it.sku,
        variantSku: it.variantId,
        productName: `Garment ${it.sku}`,
        quantity: it.quantity,
        price: it.unitPrice,
      })),
      subtotal: payload.items.reduce((acc, i) => acc + i.quantity * i.unitPrice, 0),
      shippingFee: 0,
      totalAmount: payload.items.reduce((acc, i) => acc + i.quantity * i.unitPrice, 0),
      createdAt: new Date().toISOString(),
    };
    return success(BigSellerOrderMapper.toDomain(mockOrderDto));
  }

  public async getOrder(): Promise<Result<OrderEntity | null, AppError>> {
    return success(null);
  }

  public async getTracking(): Promise<Result<TrackingInfo | null, AppError>> {
    return success(null);
  }
}

export const bigSellerAdapter = new BigSellerAdapter();
