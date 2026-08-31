"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowLeftRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

  // 3D Tilt Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col cursor-pointer p-3 bg-white/50 backdrop-blur-sm rounded-sm border border-gray-300 transition-all duration-500 hover:border-[#B89A5A] hover:shadow-lg"
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
          className={`absolute top-4 right-4 z-30 transition-opacity p-2 rounded-full backdrop-blur-sm shadow-sm
            ${inWishlist ? 'opacity-100 bg-[#B89A5A] text-white hover:bg-[#a6894c]' : 'opacity-0 group-hover:opacity-100 bg-white/70 text-gray-700 hover:bg-white'}
          `}
          style={{ transform: "translateZ(40px)" }}
        >
          <Heart className={`w-4 h-4 ${inWishlist ? 'fill-white stroke-white' : ''}`} />
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
          className={`absolute top-14 right-4 z-30 transition-opacity p-2 rounded-full backdrop-blur-sm shadow-sm
            ${inCompare ? 'opacity-100 bg-[#171716] text-white hover:bg-black' : 'opacity-0 group-hover:opacity-100 bg-white/70 text-gray-700 hover:bg-white'}
          `}
          style={{ transform: "translateZ(40px)" }}
          title="Compare"
        >
          <ArrowLeftRight className="w-4 h-4" />
        </button>

        <Link href={`/product/${product.id}`} className="absolute inset-0 z-10" />
        
        {/* IMAGE CONTAINER */}
        <div 
          className="relative aspect-[3/4] overflow-hidden bg-[#F7F5F0] mb-4 shadow-[0_0_0_1px_rgba(0,0,0,0.03)] transition-shadow duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
          style={{ transform: "translateZ(20px)" }} // Pops the image slightly out
        >
          {/* Main Image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-all duration-700 group-hover:opacity-0 scale-100 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover Image */}
          <Image
            src={product.hoverImage}
            alt={`${product.name} Alternate View`}
            fill
            className="object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 scale-100 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badges */}
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest z-20 text-[#171716] rounded-full">
              New
            </div>
          )}

          {/* Glass Add to Bag Button */}
          <div className="absolute bottom-4 left-4 right-4 translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsQuickViewOpen(true);
              }}
              className="w-full relative z-20 rounded-none bg-white/60 backdrop-blur-md text-[#171716] py-3 text-xs uppercase tracking-widest font-medium transition-all duration-500 border border-gray-300 hover:border-[#B89A5A] hover:bg-white hover:shadow-lg"
            >
              Quick View
            </button>
          </div>
        </div>

        {/* DETAILS */}
        <div 
          className="flex flex-col items-center text-center px-2 mt-2 pointer-events-none"
          style={{ transform: "translateZ(10px)" }}
        >
          <h3 className="font-serif text-[15px] md:text-base text-[#171716] mb-1 group-hover:text-yellow-700 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-medium">
            {product.material}{product.carat && ` · ${product.carat}`}
          </p>
          <p className="font-sans text-sm text-[#171716] font-medium tracking-wide">
            ₹{product.price.toLocaleString()}
          </p>
        </div>
    </motion.div>
    
    {/* Quick View Modal rendered via Portal */}
    <QuickViewModal 
      product={product}
      isOpen={isQuickViewOpen}
      onClose={() => setIsQuickViewOpen(false)}
    />
    </>
  );
}
