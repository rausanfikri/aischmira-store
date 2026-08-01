import { ICustomerProvider } from "../contracts/customer.provider";
import { CustomerProfile } from "@/domain/customer";
import { Result, success } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export class SupabaseAdapter implements ICustomerProvider {
  public async getCustomerProfile(customerId: string): Promise<Result<CustomerProfile, AppError>> {
    const mockProfile: CustomerProfile = {
      id: customerId,
      fullName: "Lady Katherine Vance",
      email: "katherine.vance@prive.aischmira.store",
      phone: "+62 812 8899 0011",
      membershipTier: "Privé Gold",
      memberSince: "2024",
      pointsBalance: 2450,
      preferredSize: "M (EU 38)",
      preferredColor: "Midnight Black",
      preferredCategory: "Silk Slip Dresses",
      addresses: [
        {
          id: "addr_1",
          label: "Private Residence",
          street: "Jl. Senopati No. 88",
          city: "Jakarta Selatan",
          postalCode: "12190",
          country: "Indonesia",
          isDefault: true,
        },
      ],
    };
    return success(mockProfile);
  }

  public async updateCustomerProfile(customerId: string, data: Partial<CustomerProfile>): Promise<Result<CustomerProfile, AppError>> {
    const profileRes = await this.getCustomerProfile(customerId);
    if (!profileRes.isSuccess) return profileRes;
    return success({ ...profileRes.value, ...data });
  }
}

export const supabaseAdapter = new SupabaseAdapter();
