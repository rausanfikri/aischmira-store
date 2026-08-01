import { CustomerProfile } from "@/domain/customer";
import { Result } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export interface ICustomerProvider {
  getCustomerProfile(customerId: string): Promise<Result<CustomerProfile, AppError>>;
  updateCustomerProfile(customerId: string, data: Partial<CustomerProfile>): Promise<Result<CustomerProfile, AppError>>;
}
