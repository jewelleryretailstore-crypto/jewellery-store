import { getProductById, getProductsByCategory, getProducts, MOCK_PRODUCTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Heart, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react";
import { DiamondWatermark } from "@/components/ui/DiamondWatermark";
import ProductCard from "@/components/ui/ProductCard";
import { ProductReviews } from "@/components/product/ProductReviews";
import { ProductAssurance } from "@/components/product/ProductAssurance";
import { SimilarBudgetDesigns } from "@/components/product/SimilarBudgetDesigns";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { BuyNowButton } from "@/components/product/BuyNowButton";

export const revalidate = 60;

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = await getProductById(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Get similar products based on category, excluding current product
  const similarProducts = (await getProductsByCategory(product.category))
    .filter((p: any) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="relative font-sans bg-[#F7F5F0]">
      <DiamondWatermark opacity={0.15} className="inset-0" />
      
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-8 md:pt-40 md:pb-16 font-sans">
        {/* Breadcrumbs */}
        <div className="flex items-center text-xs text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <Link href={`/category/${product.category}`} className="hover:text-yellow-600 transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-gray-900">{product.name}</span>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-[#F7F5F0] w-full group">
            <button className="absolute top-6 right-6 z-10 text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="relative aspect-square cursor-pointer border border-gray-200">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="relative aspect-square cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
              <Image src={product.hoverImage} alt={product.name} fill className="object-cover" />
            </div>
            <div className="relative aspect-square cursor-pointer opacity-70 hover:opacity-100 transition-opacity bg-gray-100 flex items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-gray-500">Video</span>
            </div>
            <div className="relative aspect-square cursor-pointer opacity-70 hover:opacity-100 transition-opacity bg-gray-100 flex items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-gray-500">360°</span>
            </div>
          </div>
        </div>

        {/* Product Info & Actions */}
        <div className="flex flex-col lg:pl-8">
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl mb-2 uppercase tracking-wide">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-[#B89A5A]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[11px] font-medium text-gray-500 uppercase tracking-widest">Customer Reviews</span>
            </div>
            <p className="text-gray-900 font-medium text-sm mb-4">
              {product.material} {product.category.slice(0, 1).toUpperCase() + product.category.slice(1, -1)} {product.diamondType ? 'with Diamonds' : ''}
            </p>
            <p className="text-gray-600 font-light leading-relaxed text-[13px]">
              An exquisite piece crafted with unparalleled attention to detail. This {product.category.slice(0,-1)} embodies timeless elegance and modern sophistication, designed to become a cherished part of your personal story.
            </p>
          </div>

          <p className="text-xl font-medium mb-8">₹{product.price.toLocaleString()}</p>

          {/* Actions */}
          <div className="flex gap-4 mb-10">
            <AddToCartButton productId={product.databaseId || 0} />
            <BuyNowButton productId={product.databaseId || 0} />
          </div>

          {/* Variants & Details List */}
          <div className="border-t border-gray-200 mb-10">
            {product.attributes?.map((attr: any) => (
              <div key={attr.name} className="border-b border-gray-200 py-4 flex justify-between items-center group cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-[11px] uppercase tracking-widest font-medium text-gray-900">{attr.name}</span>
                <div className="flex items-center gap-2">
                  <select className="bg-transparent text-[11px] text-gray-500 outline-none text-right cursor-pointer appearance-none">
                    {attr.options.map((opt: string) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-[#171716] transition-colors rotate-90" />
                </div>
              </div>
            ))}

            {/* Collection Row */}
            <div className="border-b border-gray-200 py-4 flex justify-between items-center">
              <span className="text-[11px] uppercase tracking-widest font-medium text-gray-900">Collection</span>
              <span className="text-[11px] text-gray-500 mr-5">Lumière Signature</span>
            </div>

            {/* Vendor Code Row */}
            <div className="border-b border-gray-200 py-4 flex justify-between items-center">
              <span className="text-[11px] uppercase tracking-widest font-medium text-gray-900">Vendor Code</span>
              <span className="text-[11px] text-gray-500 mr-5">{product.id.split('-').join('').slice(0,8).toUpperCase()}</span>
            </div>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-3 gap-4 border-y border-gray-200 py-6 mb-8">
            <div className="flex flex-col items-center text-center">
              <Truck className="w-5 h-5 mb-2 text-gray-400" />
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Free Insured<br/>Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <RotateCcw className="w-5 h-5 mb-2 text-gray-400" />
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">30-Day<br/>Returns</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-5 h-5 mb-2 text-gray-400" />
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Certified<br/>Diamond</span>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="mb-8">
            <h3 className="font-sans font-medium uppercase tracking-widest text-[11px] mb-4 text-[#171716]">
              Product Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-xs font-light text-gray-600">
              {product.diamondType && (
                <>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-gray-900">Diamond Shape</span>
                    <span>Round Brilliant</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-gray-900">Carat Weight</span>
                    <span>1.50ct Centre</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-gray-900">Colour & Clarity</span>
                    <span>F–G / VS</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-gray-900">Certification</span>
                    <span>IGI Certified</span>
                  </div>
                </>
              )}
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-900">Metal Weight</span>
                <span>Approx. 4.2g</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-900">Band Dimensions</span>
                <span>1.8mm width x 1.6mm thickness</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-900">Setting Style</span>
                <span>Cathedral Solitaire, 4-Prong</span>
              </div>
            </div>
          </div>

          {/* Educational Guides */}
          <div className="space-y-4">
            {[
              'Diamond Guide: What is a 4C?',
              'Ring Guide: Find your size',
              'Metal Guide: 18K vs Platinum',
              'Care Guide: How to care for your jewellery'
            ].map((tab) => (
              <div key={tab} className="border-b border-gray-200 pb-4">
                <button className="w-full flex justify-between items-center text-[11px] uppercase tracking-widest font-medium hover:text-[#B89A5A] transition-colors">
                  {tab}
                  <span className="text-lg font-light">+</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* YOU MIGHT ALSO LIKE */}
      <div className="mt-32 pt-16 border-t border-gray-200">
        <div className="flex justify-between items-end mb-10">
          <h2 className="font-serif text-xl md:text-2xl tracking-wide uppercase text-gray-900">You Might Also Like</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>

      {/* CUSTOMER REVIEWS */}
      <ProductReviews />

      {/* CUSTOMERS WHO VIEWED THIS ALSO VIEWED */}
      <div className="mt-24 pt-16 border-t border-gray-200">
        <div className="flex justify-between items-end mb-10">
          <h2 className="font-serif text-xl md:text-2xl tracking-wide uppercase text-gray-900">Customers who viewed this also viewed</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.filter(p => p.id !== product.id).reverse().slice(0, 4).map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>

      {/* ASSURANCE */}
      <ProductAssurance />

      {/* SIMILAR BUDGET DESIGNS */}
      <SimilarBudgetDesigns products={MOCK_PRODUCTS.slice(2, 6)} />

    </div>
    </div>
  );
}
