import { ICustomerProvider } from "../contracts/customer.provider";
import { CustomerProfile } from "@/domain/customer";
import { SupabaseCustomerRepository } from "@/core/infrastructure/repositories/supabase/SupabaseCustomerRepository";
import { Result } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export class SupabaseAdapter implements ICustomerProvider {
  private repository = new SupabaseCustomerRepository();

  public async getCustomerProfile(customerId: string): Promise<Result<CustomerProfile, AppError>> {
    return this.repository.getProfile(customerId);
  }

  public async updateCustomerProfile(customerId: string, data: Partial<CustomerProfile>): Promise<Result<CustomerProfile, AppError>> {
    return this.repository.updateProfile(customerId, data);
  }
}

export const supabaseAdapter = new SupabaseAdapter();
