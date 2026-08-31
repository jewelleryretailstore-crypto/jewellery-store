"use client";

import React, { useEffect, useState } from "react";
import { useCompare } from "@/context/CompareContext";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CompareDrawer() {
  const { comparedProducts, removeFromCompare, clearCompare } = useCompare();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || comparedProducts.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-10 fade-in duration-300">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white border border-gray-300 shadow-[0_0_40px_rgba(0,0,0,0.1)] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Products */}
          <div className="flex items-center gap-4 flex-1">
            <div className="flex -space-x-4">
              {comparedProducts.map((product) => (
                <div key={product.id} className="relative w-12 h-12 rounded-full border-2 border-white shadow-sm bg-gray-50 overflow-hidden group">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover" 
                  />
                  <button 
                    onClick={() => removeFromCompare(product.id)}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              ))}
              
              {/* Empty Slots */}
              {Array.from({ length: 4 - comparedProducts.length }).map((_, i) => (
                <div key={`empty-${i}`} className="w-12 h-12 rounded-full border-2 border-white border-dashed bg-gray-50 flex items-center justify-center shadow-sm">
                  <span className="text-gray-300 text-xs">+</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#171716]">Compare Products</span>
              <span className="text-xs text-gray-500">{comparedProducts.length} / 4 Selected</span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={clearCompare}
              className="text-xs text-gray-500 hover:text-red-500 transition-colors font-medium px-2"
            >
              Clear
            </button>
            <Link 
              href="/compare"
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors",
                comparedProducts.length > 1 
                  ? "bg-[#171716] text-white hover:bg-[#B89A5A]" 
                  : "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none"
              )}
            >
              Compare <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
