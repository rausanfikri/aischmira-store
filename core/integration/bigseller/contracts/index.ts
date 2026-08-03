import { WarehouseDTO, PromotionDTO } from '../dto';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface ShipmentDetails {
  orderId: string;
  courierName: string;
  trackingNumber: string;
  shippedAt: string;
  estimatedDelivery: string;
}

export interface IShipmentProvider {
  createShipment(orderId: string, courierName: string): Promise<Result<ShipmentDetails, AppError>>;
  getShipmentStatus(trackingNumber: string): Promise<Result<ShipmentDetails | null, AppError>>;
}

export interface IWarehouseProvider {
  getWarehouses(): Promise<Result<WarehouseDTO[], AppError>>;
  allocateWarehouseStock(sku: string, warehouseId: string, quantity: number): Promise<Result<boolean, AppError>>;
}

export interface IPromotionProvider {
  getPromotions(): Promise<Result<PromotionDTO[], AppError>>;
  applyVoucher(code: string, cartTotal: number): Promise<Result<PromotionDTO | null, AppError>>;
}

export interface ICategoryProvider {
  getCategories(): Promise<Result<Array<{ id: string; name: string; slug: string }>, AppError>>;
}

export interface IProductSynchronizationProvider {
  syncCatalog(): Promise<Result<{ syncedCount: number; timestamp: string }, AppError>>;
}
