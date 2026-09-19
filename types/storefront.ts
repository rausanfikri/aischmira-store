export interface StoreVariant {
    sku: string;
    size: string;
    color: string;
    colorCode: string | null;
    fabric: string | null;
    startPrice: string;
    finalPrice: string;
    status: string | null;
    media: {
        src: string;
        alt: string;
        width: number;
        height: number;
    }[];
}
export interface StoreProduct {
    id: string;
    slug: string;
    name: string;
    collection: string;
    subCollection: string;
    category: string;
    description: string;
    descriptionSource: "REAL" | "DEMO";
    variants: StoreVariant[];
}
export interface BagLine {
    sku: string;
    quantity: number;
}
