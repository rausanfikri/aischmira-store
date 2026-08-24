import { OrderEntity, TrackingInfo } from '@/domain/order';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class OrderService {
  public async getOrders(): Promise<Result<OrderEntity[], AppError>> {
    return success([]);
  }

  public async getOrderById(orderId: string): Promise<Result<OrderEntity | null, AppError>> {
    void orderId;
    return success(null);
  }

  public async getTracking(orderId: string): Promise<Result<TrackingInfo | null, AppError>> {
    void orderId;
    return success(null);
  }
}

export const orderService = new OrderService();
