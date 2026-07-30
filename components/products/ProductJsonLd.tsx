import * as React from "react";
import { Product } from "@/domain/product";
import { Collection } from "@/domain/collection";

interface ProductJsonLdProps {
  product: Product;
  collection?: Collection | null;
  siteUrl?: string;
}

export function ProductJsonLd({ product, collection, siteUrl = "https://aischmira.store" }: ProductJsonLdProps) {
  if (!product) return null;

  const productUrl = `${siteUrl}/products/${product.slug}`;
  const images = product.images && product.images.length > 0
    ? product.images.map((img) => (img.startsWith("http") ? img : `${siteUrl}${img}`))
    : [`${siteUrl}/images/products/placeholder.png`];

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: images,
    description: product.description,
    sku: product.sku,
    mpn: product.sku,
    brand: {
      "@type": "Brand",
      name: "AISCHMIRA",
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: product.currency || "IDR",
      price: product.price,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: product.inventory?.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "AISCHMIRA",
      },
    },
  };

  const breadcrumbList = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Collections",
      item: `${siteUrl}/collections`,
    },
  ];

  if (collection) {
    breadcrumbList.push({
      "@type": "ListItem",
      position: 3,
      name: collection.name,
      item: `${siteUrl}/collections/${collection.slug}`,
    });
  }

  breadcrumbList.push({
    "@type": "ListItem",
    position: breadcrumbList.length + 1,
    name: product.name,
    item: productUrl,
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbList,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
