import { z } from "zod";

export const variantSchema = z.object({
  variantId: z.string(),
  sku: z.string(),
  marketplaceSku: z.string().optional(),
  parentSku: z.string().optional(),
  warehouseSku: z.string().optional(),
  name: z.string(),
  color: z.string().optional(),
  size: z.string().optional(),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
});

export const productSchema = z.object({
  productId: z.string(),
  spu: z.string(),
  internalSku: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  collectionSlug: z.string().optional(),
  mainImage: z.string(),
  images: z.array(z.string()),
  variants: z.array(variantSchema),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const warehouseSchema = z.object({
  warehouseId: z.string(),
  warehouseCode: z.string(),
  name: z.string(),
  location: z.string(),
  isPrimary: z.boolean(),
});

export const inventorySchema = z.object({
  sku: z.string(),
  variantSku: z.string(),
  warehouseId: z.string(),
  availableStock: z.number().int().nonnegative(),
  reservedStock: z.number().int().nonnegative(),
  incomingStock: z.number().int().nonnegative(),
  safetyStock: z.number().int().nonnegative(),
  updatedAt: z.string(),
});

export const priceSchema = z.object({
  sku: z.string(),
  variantSku: z.string(),
  currency: z.string().default("IDR"),
  retailPrice: z.number().nonnegative(),
  marketplacePrice: z.number().nonnegative(),
  discountPrice: z.number().optional(),
  flashSalePrice: z.number().optional(),
  membershipPrice: z.number().optional(),
});

export const orderItemSchema = z.object({
  sku: z.string(),
  variantSku: z.string(),
  productName: z.string(),
  quantity: z.number().int().positive(),
  price: z.number().nonnegative(),
});

export const orderSchema = z.object({
  orderId: z.string(),
  orderNumber: z.string(),
  channel: z.string(),
  status: z.string(),
  paymentStatus: z.string(),
  buyerName: z.string(),
  buyerPhone: z.string(),
  shippingAddress: z.string(),
  items: z.array(orderItemSchema),
  subtotal: z.number().nonnegative(),
  shippingFee: z.number().nonnegative(),
  totalAmount: z.number().nonnegative(),
  createdAt: z.string(),
});

export const promotionSchema = z.object({
  promotionId: z.string(),
  code: z.string(),
  type: z.enum(["Discount", "Voucher", "FlashSale"]),
  discountAmount: z.number().optional(),
  discountPercentage: z.number().optional(),
  applicableSkus: z.array(z.string()),
  validFrom: z.string(),
  validTo: z.string(),
});
