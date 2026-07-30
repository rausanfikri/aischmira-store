import { CustomerProfile, CustomerOrderSummary, CustomerLoyaltyInfo, SavedLook } from '@/domain/customer';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class CustomerService {
  public async getCustomerProfile(): Promise<Result<CustomerProfile, AppError>> {
    const mockProfile: CustomerProfile = {
      id: 'cust_01h8x9p',
      fullName: 'Lady Katherine Vance',
      email: 'katherine.vance@prive-aischmira.com',
      phone: '+62 812 8899 7700',
      membershipTier: 'Privé Gold',
      memberSince: '2024',
      pointsBalance: 2450,
      preferredSize: 'M (EU 38)',
      preferredColor: 'Midnight Black / Silk Ivory',
      preferredCategory: 'Silk Gowns & Tailored Blazers',
      addresses: [
        {
          id: 'addr_1',
          label: 'Primary Residence',
          isDefault: true,
          street: 'Jalan Senopati No. 42',
          city: 'Jakarta Selatan',
          postalCode: '12190',
          country: 'Indonesia',
        },
        {
          id: 'addr_2',
          label: 'Bali Villa Sanctuary',
          isDefault: false,
          street: 'Jalan Petitenget No. 88',
          city: 'Seminyak, Badung, Bali',
          postalCode: '80361',
          country: 'Indonesia',
        },
      ],
    };
    return success(mockProfile);
  }

  public async getCustomerOrders(): Promise<Result<CustomerOrderSummary[], AppError>> {
    const mockOrders: CustomerOrderSummary[] = [
      {
        id: 'ord_101',
        orderNumber: 'ASC-2026-8891',
        date: 'July 24, 2026',
        totalAmount: 9600000,
        status: 'Processing',
        itemCount: 2,
        skus: ['BIANCA-SILK-DRESS', 'PRISCILA-BLAZER'],
      },
      {
        id: 'ord_100',
        orderNumber: 'ASC-2026-7712',
        date: 'June 12, 2026',
        totalAmount: 3850000,
        status: 'Delivered',
        itemCount: 1,
        skus: ['SAFIRA-TROUSERS'],
      },
    ];
    return success(mockOrders);
  }

  public async getCustomerLoyalty(): Promise<Result<CustomerLoyaltyInfo, AppError>> {
    const mockLoyalty: CustomerLoyaltyInfo = {
      tier: 'Privé Gold',
      currentPoints: 2450,
      nextTierRequirement: 5000,
      pointsToNextTier: 2550,
      benefits: [
        'Complimentary Concierge Express Worldwide Shipping',
        'Early Access to Limited Edition Atelier Drops (48-Hour Priority Window)',
        'Personal Dedicated Bespoke Styling Director',
        'Signature Calligraphic Gift Wrapping Included',
        'Boutique Private Appointment Privileges in Flagship Showrooms',
      ],
    };
    return success(mockLoyalty);
  }

  public async getSavedLooks(): Promise<Result<SavedLook[], AppError>> {
    const mockLooks: SavedLook[] = [
      {
        id: 'look_01',
        name: 'The Midnight Soirée Assembly',
        season: 'Autumn / Winter 2026',
        productSkus: ['BIANCA-SILK-DRESS', 'SAFIRA-TROUSERS'],
        imageUrl: '/images/products/bianca-dress.jpg',
      },
      {
        id: 'look_02',
        name: 'Atelier Power Tailoring Ensemble',
        season: 'Resort 2026',
        productSkus: ['PRISCILA-BLAZER', 'SAFIRA-TROUSERS'],
        imageUrl: '/images/products/priscila-blazer.jpg',
      },
    ];
    return success(mockLooks);
  }
}

export const customerService = new CustomerService();
