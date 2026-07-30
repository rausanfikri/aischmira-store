export type OrderStatus =
  | 'Pending'
  | 'Confirmed'
  | 'Processing'
  | 'Packed'
  | 'Shipped'
  | 'Delivered'
  | 'Completed'
  | 'Cancelled'
  | 'Returned'
  | 'Refunded';

export interface OrderItem {
  sku: string;
  variantSku: string;
  productName: string;
  variantColor: string;
  variantSize: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  image: string;
}

export interface OrderSummaryDetails {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  grandTotal: number;
}

export interface TrackingEvent {
  date: string;
  title: string;
  location: string;
  completed: boolean;
}

export interface TrackingInfo {
  courier: string;
  trackingNumber: string;
  estimatedArrival: string;
  events: TrackingEvent[];
}

export interface OrderEntity {
  id: string;
  orderNumber: string;
  date: string;
  status: OrderStatus;
  paymentStatus: 'Paid' | 'Pending Verification' | 'Refunded';
  shippingStatus: 'Pending Dispatch' | 'In Transit' | 'Delivered';
  source: 'WhatsApp Concierge' | 'Website';
  items: OrderItem[];
  summary: OrderSummaryDetails;
  tracking?: TrackingInfo;
  recipientName: string;
  recipientPhone: string;
  shippingAddress: string;
  city: string;
  customerNotes?: string;
}
