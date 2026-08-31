"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowLeftRight } from "lucide-react";
import { Product } from "@/lib/data";
import { useWishlist } from "@/context/WishlistContext";
import { useCompare } from "@/context/CompareContext";
import QuickViewModal from "./QuickViewModal";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCompare, removeFromCompare, isInCompare, comparedProducts } = useCompare();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  const inWishlist = isInWishlist(product.id);
  const inCompare = isInCompare(product.id);

  return (
    <>
      <div
        className="group relative flex flex-col cursor-pointer bg-white transition-all duration-500"
      >
        {/* Heart Icon (Wishlist) */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (inWishlist) {
              removeFromWishlist(product.id);
            } else {
              addToWishlist(product);
            }
          }}
          className={`absolute top-4 right-4 z-30 transition-all duration-300 p-2 rounded-full
            ${inWishlist ? 'opacity-100 text-[#B89A5A]' : 'opacity-0 group-hover:opacity-100 text-gray-400 hover:text-[#171716]'}
          `}
        >
          <Heart className={`w-5 h-5 ${inWishlist ? 'fill-[#B89A5A] stroke-[#B89A5A]' : 'stroke-current'}`} strokeWidth={1.5} />
        </button>

        {/* Compare Icon */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (inCompare) {
              removeFromCompare(product.id);
            } else {
              if (comparedProducts.length < 4) {
                addToCompare(product);
              } else {
                alert("You can only compare up to 4 products at a time.");
              }
            }
          }}
          className={`absolute top-14 right-4 z-30 transition-all duration-300 p-2 rounded-full
            ${inCompare ? 'opacity-100 text-[#171716]' : 'opacity-0 group-hover:opacity-100 text-gray-400 hover:text-[#171716]'}
          `}
          title="Compare"
        >
          <ArrowLeftRight className="w-4 h-4" strokeWidth={1.5} />
        </button>

        <Link href={`/product/${product.id}`} className="absolute inset-0 z-10" />
        
        {/* IMAGE CONTAINER */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#F9F9F9] mb-5">
          {/* Main Image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-100 group-hover:scale-[1.03] group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover Image */}
          <Image
            src={product.hoverImage}
            alt={`${product.name} Alternate View`}
            fill
            className="object-cover opacity-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-100 group-hover:scale-[1.03] group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badges */}
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[9px] uppercase tracking-widest z-20 text-[#171716]">
              New
            </div>
          )}

          {/* Editorial Quick View Button */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-20">
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsQuickViewOpen(true);
              }}
              className="w-full bg-white/95 backdrop-blur-sm text-[#171716] py-3.5 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#171716] hover:text-white transition-colors duration-300 border-t border-gray-100"
            >
              Quick View
            </button>
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col items-center text-center px-2 pointer-events-none">
          <h3 className="font-serif text-[15px] md:text-base text-[#171716] mb-1.5 leading-snug">
            {product.name}
          </h3>
          <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest mb-2.5">
            {product.material}{product.carat && ` · ${product.carat}`}
          </p>
          <p className="font-sans text-sm text-[#171716] tracking-wide">
            ₹{product.price.toLocaleString()}
          </p>
        </div>
      </div>
    
    {/* Quick View Modal rendered via Portal */}
    <QuickViewModal 
      product={product}
      isOpen={isQuickViewOpen}
      onClose={() => setIsQuickViewOpen(false)}
    />
    </>
  );
}
