import { Metadata } from "next";
import { SearchResults } from "@/components/search/SearchResults";
import { productsData } from "@/data/products";

export const metadata: Metadata = {
  title: "Search | AISCHMIRA",
  description: "Search for premium luxury fashion.",
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";
  
  const results = query 
    ? productsData.filter((p) => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryId.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-6">Search Results</h1>
          <p className="font-body text-xs tracking-editorial uppercase text-text/50 leading-relaxed">
            {query ? `Showing results for "${query}"` : "Enter a search term to begin"}
          </p>
        </div>

        {/* Results */}
        <SearchResults initialResults={results} query={query} allProducts={productsData} />

      </div>
    </div>
  );
}
