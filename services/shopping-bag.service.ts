import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface ShoppingBagItem {
  sku: string;
  quantity: number;
}

export interface ShoppingBagState {
  items: ShoppingBagItem[];
  itemCount: number;
}

export class ShoppingBagService {
  public async getShoppingBag(): Promise<Result<ShoppingBagState, AppError>> {
    return success({ items: [], itemCount: 0 });
  }
}

export const shoppingBagService = new ShoppingBagService();
