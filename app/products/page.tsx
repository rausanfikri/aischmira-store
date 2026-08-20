import { Metadata } from "next";
import { services } from "@/services";
import { ProductCatalogClient } from "@/components/products/ProductCatalogClient";

export const metadata: Metadata = {
  title: "Catalog — All Silhouettes | AISCHMIRA",
  description: "Browse the complete AISCHMIRA fashion catalog, featuring luxury outerwear, tops, bottoms, dresses, pyjamas, and artisanal accessories.",
};

export default async function ProductsPage() {
  const productsRes = await services.product.getProducts();
  const products = productsRes.isSuccess ? productsRes.value : [];

  return (
    <ProductCatalogClient
      initialProducts={products}
      pageTitle="All Silhouettes"
      pageSubtitle="The complete editorial collection of timeless garments and accessories."
    />
  );
}
