"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";
import { Product } from "@/lib/data";

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#171716]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl flex flex-col md:flex-row z-10 animate-in fade-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full hover:bg-white text-gray-500 hover:text-gray-900 transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image */}
        <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[600px] bg-[#F7F5F0]">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h4 className="uppercase tracking-widest text-[10px] md:text-xs mb-3 text-[#B89A5A] font-medium">{product.category}</h4>
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-[#171716]">{product.name}</h2>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-[#B89A5A]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[11px] font-medium text-gray-500 uppercase tracking-widest">Customer Reviews</span>
          </div>

          <p className="text-xl font-medium mb-8">${product.price.toLocaleString()}</p>
          
          <p className="font-light text-gray-600 text-sm leading-relaxed mb-8">
            {product.material}{product.carat ? ` with ${product.carat} diamonds` : ''}. A masterpiece of the Lumière collection, designed to be worn and loved for a lifetime.
          </p>

          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-black/5 backdrop-blur-md text-[#171716] py-4 uppercase tracking-widest text-[11px] font-medium transition-all duration-500 rounded-none border border-[#171716]/20 hover:border-[#171716] hover:bg-[#171716] hover:text-white">
              Add to Bag
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <Link 
              href={`/product/${product.id}`}
              className="flex items-center justify-between group cursor-pointer"
            >
              <span className="text-[11px] uppercase tracking-widest font-medium text-gray-900 group-hover:text-[#B89A5A] transition-colors">
                View Full Details
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#B89A5A] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
