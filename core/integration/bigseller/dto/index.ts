export interface VariantDTO {
  variantId: string;
  sku: string;
  marketplaceSku?: string;
  parentSku?: string;
  warehouseSku?: string;
  name: string;
  color?: string;
  size?: string;
  price: number;
  stock: number;
}

export interface ProductDTO {
  productId: string;
  spu: string;
  internalSku: string;
  title: string;
  description: string;
  category: string;
  collectionSlug?: string;
  mainImage: string;
  images: string[];
  variants: VariantDTO[];
  createdAt: string;
  updatedAt: string;
}

export interface WarehouseDTO {
  warehouseId: string;
  warehouseCode: string;
  name: string;
  location: string;
  isPrimary: boolean;
}

export interface InventoryDTO {
  sku: string;
  variantSku: string;
  warehouseId: string;
  availableStock: number;
  reservedStock: number;
  incomingStock: number;
  safetyStock: number;
  updatedAt: string;
}

export interface PriceDTO {
  sku: string;
  variantSku: string;
  currency: string;
  retailPrice: number;
  marketplacePrice: number;
  discountPrice?: number;
  flashSalePrice?: number;
  membershipPrice?: number;
}

export interface OrderDTO {
  orderId: string;
  orderNumber: string;
  channel: string;
  status: string;
  paymentStatus: string;
  buyerName: string;
  buyerPhone: string;
  shippingAddress: string;
  items: Array<{
    sku: string;
    variantSku: string;
    productName: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  shippingFee: number;
  totalAmount: number;
  createdAt: string;
}

export interface PromotionDTO {
  promotionId: string;
  code: string;
  type: 'Discount' | 'Voucher' | 'FlashSale';
  discountAmount?: number;
  discountPercentage?: number;
  applicableSkus: string[];
  validFrom: string;
  validTo: string;
}
