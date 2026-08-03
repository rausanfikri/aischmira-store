import { OrderDTO } from "../dto";
import { OrderEntity, OrderStatus } from "@/domain/order";

export class BigSellerOrderMapper {
  public static toDomain(dto: OrderDTO): OrderEntity {
    return {
      id: dto.orderId,
      orderNumber: dto.orderNumber,
      date: dto.createdAt,
      status: (dto.status as OrderStatus) || "Confirmed",
      paymentStatus: dto.paymentStatus === "Paid" ? "Paid" : "Pending Verification",
      shippingStatus: "Pending Dispatch",
      source: "WhatsApp Concierge",
      recipientName: dto.buyerName,
      recipientPhone: dto.buyerPhone,
      shippingAddress: dto.shippingAddress,
      city: "Jakarta Selatan",
      items: dto.items.map((it) => ({
        sku: it.sku,
        variantSku: it.variantSku,
        productName: it.productName,
        variantColor: "Midnight Black",
        variantSize: "M (EU 38)",
        quantity: it.quantity,
        unitPrice: it.price,
        subtotal: it.quantity * it.price,
        image: "/images/products/bianca-dress.jpg",
      })),
      summary: {
        subtotal: dto.subtotal,
        discount: 0,
        shipping: dto.shippingFee,
        tax: 0,
        grandTotal: dto.totalAmount,
      },
    };
  }
}
