import { WarehouseDTO } from "../dto";
import { IWarehouseProvider } from "../contracts";
import { Result, success } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export class BigSellerWarehouseService implements IWarehouseProvider {
  private readonly warehouses: WarehouseDTO[] = [
    {
      warehouseId: "wh_jk_01",
      warehouseCode: "JKT-MAIN-01",
      name: "AISCHMIRA Flagship Jakarta Fulfillment Hub",
      location: "Jakarta Selatan, Indonesia",
      isPrimary: true,
    },
    {
      warehouseId: "wh_bd_02",
      warehouseCode: "BND-HUB-02",
      name: "AISCHMIRA Bandung Atelier Workshop",
      location: "Bandung, Jawa Barat",
      isPrimary: false,
    },
  ];

  public async getWarehouses(): Promise<Result<WarehouseDTO[], AppError>> {
    return success(this.warehouses);
  }

  public async allocateWarehouseStock(): Promise<Result<boolean, AppError>> {
    return success(true);
  }
}

export const bigSellerWarehouseService = new BigSellerWarehouseService();
