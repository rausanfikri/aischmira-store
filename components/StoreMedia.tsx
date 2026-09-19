import Image from "next/image";
import type { StoreVariant } from "@/types/storefront";
export function StoreMedia({ variant, name, index = 0, priority = false }: {
    variant: StoreVariant;
    name: string;
    index?: number;
    priority?: boolean;
}) {
    const media = variant.media[index];
    return <div className="product-media">{media ? <Image src={media.src} alt={media.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 33vw" priority={priority}/> : <div className="sample" style={{ backgroundColor: variant.colorCode || "#e5dfd3" }}><span className="sample-mark">A.</span><span className="sample-caption">{name}<br />{variant.color}<br /><small>Colour study · demo visual</small></span></div>}</div>;
}
