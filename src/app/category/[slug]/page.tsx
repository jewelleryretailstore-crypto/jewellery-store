import { getProductsByCategory } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { notFound } from "next/navigation";
import { DiamondWatermark } from "@/components/ui/DiamondWatermark";
import { FadeIn } from "@/components/animations/FadeIn";
import CategoryFilterBar from "@/components/ui/CategoryFilterBar";
import { HeroAnimated } from "@/components/ui/HeroAnimated";
import { supabase } from "@/lib/supabase";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const products = await getProductsByCategory(resolvedParams.slug);

  if (!products) {
    notFound();
  }

  // Fetch Hero config from Supabase
  const { data: heroConfig } = await supabase
    .from('category_heroes')
    .select('*')
    .eq('slug', resolvedParams.slug.toLowerCase())
    .single();

  // Fallback images for common categories while Supabase is being set up
  const fallbackImages: Record<string, string> = {
    'rings': '/images/RR-039-01Rose-_view3.webp',
    'earrings': '/images/GJSPD-197-01White-_view5.webp',
    'gold': '/images/Gem 01_Yellow_Metal 02_0_1_1_1.webp',
    'diamonds': '/images/diamond.webp',
    'wedding': 'https://upload.wikimedia.org/wikipedia/commons/7/79/Indian_bride_with_Jewellery.jpg',
    'gifting': '/images/lifestyle_bg.jpg',
    'default': '/images/homepage hero.png'
  };

  const currentSlug = resolvedParams.slug.toLowerCase();
  const fallbackImage = fallbackImages[currentSlug] || fallbackImages['default'];

  // Capitalize the default title
  const defaultTitle = resolvedParams.slug.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="relative flex flex-col min-h-screen bg-[#F7F5F0]">
      {/* Background Watermark */}
      <DiamondWatermark opacity={0.15} className="inset-0" />
      
      {/* Dynamic Hero Section */}
      <HeroAnimated 
        imageSrc={heroConfig?.image_src || fallbackImage}
        imageAlt={heroConfig?.title || defaultTitle}
        title={heroConfig?.title || defaultTitle}
        subtitle={heroConfig?.subtitle || `Discover our curated collection of ${defaultTitle.toLowerCase()}, crafted with precision and passion for the modern aesthete.`}
        buttonText="Explore Collection"
        buttonLink="#collection"
      />
      
      <div id="collection" className="container relative z-10 mx-auto px-6 pb-24 pt-12">
        {/* Filter Bar */}
        <CategoryFilterBar totalResults={products.length} />

        {/* Product Grid */}
        <div className="w-full">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
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
  );
}
