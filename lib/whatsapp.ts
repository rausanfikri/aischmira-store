import { money, resolveBag } from "./commerce";
import type { BagLine, StoreProduct } from "@/types/storefront";
export function checkoutMessage(lines: BagLine[], products: StoreProduct[], customer: {
    name: string;
    phone: string;
    address: string;
}) {
    if (!customer.name.trim() || !customer.address.trim() || !/^\+?[0-9][0-9 ()-]{7,19}$/.test(customer.phone.trim()) || customer.phone.replace(/\D/g, "").length < 8)
        throw new Error("Enter your name, active WhatsApp number and shipping address.");
    const rows = resolveBag(lines, products);
    if (!rows.length)
        throw new Error("Your bag is empty.");
    const total = rows.reduce((sum, row) => sum + row.subtotal, BigInt(0));
    const message = `AISCHMIRA · DEMO ORDER REQUEST\nName: ${customer.name.trim()}\nWhatsApp: ${customer.phone.trim()}\nAddress: ${customer.address.trim()}\n\n` + rows.map(r => `${r.product.subCollection} / ${r.product.name}\nSKU: ${r.sku}\nColor: ${r.variant.color}\nSize: ${r.variant.size}\nQuantity: ${r.quantity}\nUnit price: ${money(r.variant.finalPrice)}\nSubtotal: ${money(r.subtotal)}`).join("\n\n") + `\n\nTotal: ${money(total)}\nPlease confirm details and shipping. This prototype request is not payment or order confirmation.`;
    return { message, url: `https://wa.me/6285121344848?text=${encodeURIComponent(message)}` };
}
