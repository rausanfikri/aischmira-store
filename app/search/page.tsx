import { Metadata } from "next";
import { searchService } from "@/services/search.service";
import { productService } from "@/services/product.service";
import { collectionService } from "@/services/collection.service";
import { SearchResults } from "@/components/search/SearchResults";
import { SearchSortOption } from "@/services/search.service";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    collection?: string;
    sort?: string;
  }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q || "";

  return {
    title: query ? `Search: "${query}" | AISCHMIRA Luxury` : "Search Flagship Catalog | AISCHMIRA",
    description: "Search AISCHMIRA luxury fashion collections, silk dresses, blazers, and artisanal apparel.",
    robots: {
      index: false, // Prevent dynamic search query parameter duplication indexing
      follow: true,
    },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || "";
  const category = params.category || "all";
  const collectionId = params.collection || "all";
  const sort = (params.sort as SearchSortOption) || "featured";

  // Fetch search results via SearchService
  const searchResult = await searchService.globalSearch(
    query,
    { category, collectionId },
    sort
  );

  const payload = searchResult.isSuccess
    ? searchResult.value
    : { products: [], collections: [], totalProducts: 0, totalCollections: 0, query };

  // Fetch all products & collections for discovery recommendations & filter options
  const allProductsRes = await productService.getProducts();
  const allCollectionsRes = await collectionService.getCollections();

  const allProducts = allProductsRes.isSuccess ? allProductsRes.value : [];
  const allCollections = allCollectionsRes.isSuccess ? allCollectionsRes.value : [];

  return (
    <main className="pt-28 md:pt-36 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block">
            Catalog Discovery & Search
          </span>
          <h1 className="font-heading italic text-4xl md:text-6xl text-text font-light">
            Search Flagship Library
          </h1>
          <p className="font-body text-xs tracking-widest uppercase text-text/50 leading-relaxed">
            {query ? `Showing catalog results for "${query}"` : "Search by garment, silhouette, silk textile, or collection edit"}
          </p>
        </div>

        {/* Results Component */}
        <SearchResults
          initialProducts={payload.products}
          initialCollections={payload.collections}
          query={query}
          allProducts={allProducts}
          allCollections={allCollections}
        />
      </div>
    </main>
  );
}
