import type { BagLine, StoreProduct } from "@/types/storefront";
export const money = (value: string | bigint) => `Rp ${BigInt(value).toLocaleString("id-ID")}`;
export function parseBag(value: unknown): BagLine[] {
    if (!Array.isArray(value) || value.length > 500)
        throw new Error("Bag data is invalid. Clear the bag to continue.");
    const seen = new Set<string>();
    return value.map(line => {
        if (!line || typeof line.sku !== "string" || !Number.isSafeInteger(line.quantity) || line.quantity < 1 || line.quantity > 999 || seen.has(line.sku))
            throw new Error("Bag data is invalid. Clear the bag to continue.");
        seen.add(line.sku);
        return { sku: line.sku, quantity: line.quantity };
    });
}
export function resolveBag(lines: BagLine[], products: StoreProduct[]) {
    return parseBag(lines).map(line => {
        const product = products.find(p => p.variants.some(v => v.sku === line.sku));
        const variant = product?.variants.find(v => v.sku === line.sku);
        if (!product || !variant || variant.status !== "ACTIVE" || !/^[1-9]\d*$/.test(variant.finalPrice))
            throw new Error(`SKU ${line.sku} cannot be ordered. Remove it to continue.`);
        return { ...line, product, variant, subtotal: BigInt(variant.finalPrice) * BigInt(line.quantity) };
    });
}
