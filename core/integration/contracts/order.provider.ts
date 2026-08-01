import { OrderEntity, TrackingInfo } from "@/domain/order";
import { Result } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export interface CreateOrderPayload {
  customerId: string;
  items: Array<{ sku: string; variantId: string; quantity: number; unitPrice: number }>;
  recipientName: string;
  recipientPhone: string;
  shippingAddress: string;
}

export interface IOrderProvider {
  createOrder(payload: CreateOrderPayload): Promise<Result<OrderEntity, AppError>>;
  getOrder(orderId: string): Promise<Result<OrderEntity | null, AppError>>;
  getTracking(orderId: string): Promise<Result<TrackingInfo | null, AppError>>;
}
