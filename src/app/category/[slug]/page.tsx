import { getProductsByCategory } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { notFound } from "next/navigation";
import { DiamondWatermark } from "@/components/ui/DiamondWatermark";
import { FadeIn } from "@/components/animations/FadeIn";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const products = getProductsByCategory(resolvedParams.slug);

  if (!products) {
    notFound();
  }

  // Capitalize the title
  const title = resolvedParams.slug.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="relative min-h-screen bg-[#faf9f6]">
      {/* Background Watermark */}
      <DiamondWatermark opacity={0.15} className="inset-0" />
      
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-12 md:pt-40 md:pb-24">
        <FadeIn direction="up" once={false} className="flex flex-col items-center mb-16 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">{title}</h1>
          <p className="font-sans font-light text-gray-500 max-w-2xl">
            Discover our curated collection of {title.toLowerCase()}, crafted with precision and passion for the modern aesthete.
          </p>
        </FadeIn>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 font-sans">
          <h2 className="uppercase tracking-widest text-sm font-medium mb-6 border-b border-gray-200 pb-2">Filters</h2>
          
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Metal</h3>
            <div className="space-y-2 text-sm font-light">
              <label className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600 transition-colors">
                <input type="checkbox" className="accent-yellow-600" /> <span>18K Yellow Gold</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600 transition-colors">
                <input type="checkbox" className="accent-yellow-600" /> <span>18K White Gold</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600 transition-colors">
                <input type="checkbox" className="accent-yellow-600" /> <span>Rose Gold</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600 transition-colors">
                <input type="checkbox" className="accent-yellow-600" /> <span>Platinum</span>
              </label>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Diamond</h3>
            <div className="space-y-2 text-sm font-light">
              <label className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600 transition-colors">
                <input type="checkbox" className="accent-yellow-600" /> <span>Natural Diamond</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600 transition-colors">
                <input type="checkbox" className="accent-yellow-600" /> <span>Lab-Grown Diamond</span>
              </label>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Price</h3>
            <div className="space-y-2 text-sm font-light">
              <label className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600 transition-colors">
                <input type="checkbox" className="accent-yellow-600" /> <span>Under $1,000</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600 transition-colors">
                <input type="checkbox" className="accent-yellow-600" /> <span>$1,000 - $3,000</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600 transition-colors">
                <input type="checkbox" className="accent-yellow-600" /> <span>Over $3,000</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500 font-sans font-light">
              No products found in this category yet.
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
