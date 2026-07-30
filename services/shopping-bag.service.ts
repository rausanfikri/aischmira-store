import { ProductService, productService } from './product.service';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { Product, ProductVariant } from '@/domain/product';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';

export interface CartInputItem {
  id: string;
  productId: string;
  variantId: string;
  quantity: number;
}

export interface BagItemWithProduct {
  id: string;
  productId: string;
  variantId: string;
  quantity: number;
  product: Product;
  variant: ProductVariant;
  itemSubtotal: number;
}

export interface OrderSummary {
  subtotal: number;
  estimatedDiscount: number;
  estimatedShipping: number;
  estimatedTax: number;
  grandTotal: number;
  itemCount: number;
  freeShippingThreshold: number;
  remainingForFreeShipping: number;
  progressPercent: number;
}

export interface GiftPackagingOptions {
  isGiftWrapped: boolean;
  giftNote?: string;
}

export class ShoppingBagService {
  constructor(private readonly productSvc: ProductService = productService) {}

  public async getBagDetails(
    cartItems: CartInputItem[],
    freeShippingThreshold = 3000000
  ): Promise<Result<{ items: BagItemWithProduct[]; summary: OrderSummary }, AppError>> {
    const productsRes = await this.productSvc.getProducts();
    if (!productsRes.isSuccess) return productsRes;

    const allProducts = productsRes.value;
    const items: BagItemWithProduct[] = [];

    cartItems.forEach((item) => {
      const product = allProducts.find(
        (p) => p.sku === item.productId || (p as unknown as { id?: string }).id === item.productId
      );
      if (!product) return;

      const variant =
        product.variants.find(
          (v) => v.id === item.variantId || v.sku === item.variantId
        ) || product.variants[0];

      if (!variant) return;

      const unitPrice = variant.price || product.price || 0;
      const itemSubtotal = unitPrice * item.quantity;

      items.push({
        id: item.id,
        productId: product.sku || item.productId,
        variantId: variant.id || variant.sku,
        quantity: item.quantity,
        product,
        variant,
        itemSubtotal,
      });
    });

    const subtotal = items.reduce((acc, item) => acc + item.itemSubtotal, 0);
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
    const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

    const summary: OrderSummary = {
      subtotal,
      estimatedDiscount: 0,
      estimatedShipping: remainingForFreeShipping === 0 ? 0 : 0, // Calculated at checkout
      estimatedTax: 0,
      grandTotal: subtotal,
      itemCount,
      freeShippingThreshold,
      remainingForFreeShipping,
      progressPercent,
    };

    return success({ items, summary });
  }

  public buildWhatsAppCheckoutUrl(
    items: BagItemWithProduct[],
    summary: OrderSummary,
    gift?: GiftPackagingOptions
  ): string {
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

    let message = `Hello AISCHMIRA Concierge,\n\nI would like to place an order for the following items in my Shopping Bag:\n\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   SKU: ${item.variant.sku || item.product.sku}\n`;
      message += `   Color: ${item.variant.color} | Size: ${item.variant.size}\n`;
      message += `   Quantity: ${item.quantity} x ${formatter.format(item.variant.price)}\n`;
      message += `   Subtotal: ${formatter.format(item.itemSubtotal)}\n\n`;
    });

    message += `ORDER SUMMARY:\n`;
    message += `Items Subtotal: ${formatter.format(summary.subtotal)}\n`;
    message += `Shipping: ${summary.remainingForFreeShipping === 0 ? 'Complimentary Concierge Express' : 'Calculated at Checkout'}\n`;
    message += `Estimated Total: ${formatter.format(summary.grandTotal)}\n\n`;

    if (gift?.isGiftWrapped) {
      message += `GIFT OPTIONS:\n`;
      message += `Signature AISCHMIRA Gift Box Packaging: Requested\n`;
      if (gift.giftNote?.trim()) {
        message += `Calligraphic Note: "${gift.giftNote.trim()}"\n`;
      }
      message += `\n`;
    }

    message += `Please assist me with order confirmation and payment details. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }

  public async getBagRecommendations(bagItems: BagItemWithProduct[], limit = 4): Promise<Result<Product[], AppError>> {
    const productsRes = await this.productSvc.getProducts();
    if (!productsRes.isSuccess) return productsRes;

    const allProducts = productsRes.value;
    const bagSkus = new Set(bagItems.map((item) => item.product.sku));

    const recommendations = allProducts
      .filter((p) => !bagSkus.has(p.sku))
      .slice(0, limit);

    return success(recommendations);
  }
}

export const shoppingBagService = new ShoppingBagService();
