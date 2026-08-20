import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/services";
import { categoriesData } from "@/data/categories";
import { ProductCatalogClient } from "@/components/products/ProductCatalogClient";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return categoriesData.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categoriesData.find((c) => c.slug.toLowerCase() === slug.toLowerCase());

  if (!category) {
    return {
      title: "Category Not Found | AISCHMIRA",
    };
  }

  return {
    title: `${category.name} Collection | AISCHMIRA Flagship`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = categoriesData.find((c) => c.slug.toLowerCase() === slug.toLowerCase());

  if (!category) {
    notFound();
  }

  const productsRes = await services.product.getProducts();
  const products = productsRes.isSuccess ? productsRes.value : [];

  return (
    <ProductCatalogClient
      initialProducts={products}
      initialCategory={category.slug}
      pageTitle={category.name}
      pageSubtitle={category.description}
    />
  );
}
