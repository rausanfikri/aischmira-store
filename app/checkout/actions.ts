"use server";
import { products } from "@/services/storefront";
import { checkoutMessage } from "@/lib/whatsapp";
import type { BagLine } from "@/types/storefront";
export async function reviewCheckout(lines: BagLine[], customer: {
    name: string;
    phone: string;
    address: string;
}) {
    try {
        if (typeof customer?.name !== "string" || typeof customer?.phone !== "string" || typeof customer?.address !== "string" || customer.name.length > 120 || customer.phone.length > 20 || customer.address.length > 1000)
            throw new Error("Customer information is invalid.");
        return checkoutMessage(lines, products, customer);
    }
    catch (e) {
        return { error: e instanceof Error ? e.message : "Unable to prepare this order." };
    }
}
