import { OrderEntity, TrackingInfo } from '@/domain/order';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class OrderService {
  private readonly mockOrders: OrderEntity[] = [
    {
      id: 'ord_101',
      orderNumber: 'ASC-2026-8891',
      date: 'July 24, 2026',
      status: 'Processing',
      paymentStatus: 'Paid',
      shippingStatus: 'In Transit',
      source: 'WhatsApp Concierge',
      recipientName: 'Lady Katherine Vance',
      recipientPhone: '+62 812 8899 7700',
      shippingAddress: 'Jalan Senopati No. 42, Kebayoran Baru',
      city: 'Jakarta Selatan',
      customerNotes: 'Requesting signature gift wrapping and waist tailoring review.',
      items: [
        {
          sku: 'BIANCA-SILK-DRESS',
          variantSku: 'BIANCA-BLK-M',
          productName: 'The Bianca Silk Slip Dress',
          variantColor: 'Midnight Black',
          variantSize: 'M (EU 38)',
          quantity: 1,
          unitPrice: 4850000,
          subtotal: 4850000,
          image: '/images/products/bianca-dress.jpg',
        },
        {
          sku: 'PRISCILA-BLAZER',
          variantSku: 'PRISCILA-IVR-M',
          productName: 'The Priscila Tailored Blazer',
          variantColor: 'Silk Ivory',
          variantSize: 'M (EU 38)',
          quantity: 1,
          unitPrice: 4750000,
          subtotal: 4750000,
          image: '/images/products/priscila-blazer.jpg',
        },
      ],
      summary: {
        subtotal: 9600000,
        discount: 0,
        shipping: 0, // Free concierge delivery
        tax: 0,
        grandTotal: 9600000,
      },
      tracking: {
        courier: 'AISCHMIRA Concierge Express',
        trackingNumber: 'ASC-EXP-99201',
        estimatedArrival: 'July 31, 2026',
        events: [
          { date: 'July 24, 2026 - 10:30 WIB', title: 'Order Review & Concierge Confirmation', location: 'Jakarta Flagship Atelier', completed: true },
          { date: 'July 25, 2026 - 14:00 WIB', title: 'Atelier Tailoring & Quality Inspection', location: 'Atelier Workshop', completed: true },
          { date: 'July 26, 2026 - 09:15 WIB', title: 'Handcrafted Packaging & Signature Gift Box', location: 'Fulfillment Center', completed: true },
          { date: 'July 27, 2026 - 11:45 WIB', title: 'In Transit with Private Courier', location: 'Jakarta Distribution Center', completed: true },
          { date: 'July 31, 2026 (Estimated)', title: 'Out for Express Concierge Delivery', location: 'Destination Address', completed: false },
        ],
      },
    },
    {
      id: 'ord_100',
      orderNumber: 'ASC-2026-7712',
      date: 'June 12, 2026',
      status: 'Delivered',
      paymentStatus: 'Paid',
      shippingStatus: 'Delivered',
      source: 'WhatsApp Concierge',
      recipientName: 'Lady Katherine Vance',
      recipientPhone: '+62 812 8899 7700',
      shippingAddress: 'Jalan Senopati No. 42, Kebayoran Baru',
      city: 'Jakarta Selatan',
      items: [
        {
          sku: 'SAFIRA-TROUSERS',
          variantSku: 'SAFIRA-BLK-M',
          productName: 'The Safira Wide-Leg Trousers',
          variantColor: 'Midnight Black',
          variantSize: 'M (EU 38)',
          quantity: 1,
          unitPrice: 3850000,
          subtotal: 3850000,
          image: '/images/products/safira-trousers.jpg',
        },
      ],
      summary: {
        subtotal: 3850000,
        discount: 0,
        shipping: 0,
        tax: 0,
        grandTotal: 3850000,
      },
      tracking: {
        courier: 'AISCHMIRA Concierge Express',
        trackingNumber: 'ASC-EXP-77102',
        estimatedArrival: 'June 14, 2026',
        events: [
          { date: 'June 12, 2026 - 11:00 WIB', title: 'Order Confirmed', location: 'Jakarta Atelier', completed: true },
          { date: 'June 13, 2026 - 10:00 WIB', title: 'Dispatched via Courier', location: 'In Transit', completed: true },
          { date: 'June 14, 2026 - 15:30 WIB', title: 'Delivered & Received', location: 'Recipient Address', completed: true },
        ],
      },
    },
  ];

  public async getOrders(): Promise<Result<OrderEntity[], AppError>> {
    return success(this.mockOrders);
  }

  public async getOrderById(orderId: string): Promise<Result<OrderEntity | null, AppError>> {
    const order = this.mockOrders.find(
      (o) => o.id === orderId || o.orderNumber.toLowerCase() === orderId.toLowerCase()
    );
    return success(order || null);
  }

  public async getTracking(orderId: string): Promise<Result<TrackingInfo | null, AppError>> {
    const orderRes = await this.getOrderById(orderId);
    if (!orderRes.isSuccess) return orderRes;
    return success(orderRes.value?.tracking || null);
  }
}

export const orderService = new OrderService();
