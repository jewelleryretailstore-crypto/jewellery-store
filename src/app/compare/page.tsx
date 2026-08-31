"use client";

import React, { useEffect, useState } from "react";
import { useCompare } from "@/context/CompareContext";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowLeft, Check } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/FadeIn";

export default function ComparePage() {
  const { comparedProducts, removeFromCompare, clearCompare } = useCompare();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#F7F5F0]"></div>;

  if (comparedProducts.length === 0) {
    return (
      <div className="min-h-screen bg-[#F7F5F0] pt-32 pb-24 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-[#171716] mb-4">Compare Products</h1>
        <p className="font-sans font-light text-gray-500 mb-8 max-w-md">
          You haven't selected any products to compare yet. Add up to 4 products to see them side-by-side.
        </p>
        <Link 
          href="/collections"
          className="px-8 py-3 bg-[#171716] text-white text-xs uppercase tracking-widest hover:bg-[#B89A5A] transition-colors rounded-none"
        >
          Explore Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F5F0] pt-32 pb-24 px-4 md:px-8">
      <div className="container mx-auto max-w-[1400px]">
        
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <Link href="/" className="inline-flex items-center text-xs text-gray-500 hover:text-[#171716] uppercase tracking-widest font-medium mb-4 transition-colors">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to shopping
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl text-[#171716]">Compare Products</h1>
          </div>
          <button 
            onClick={clearCompare}
            className="text-xs text-gray-500 hover:text-red-500 uppercase tracking-widest font-medium transition-colors"
          >
            Clear All
          </button>
        </FadeIn>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto overflow-y-hidden">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 border-b border-gray-100 w-48 bg-gray-50">
                  <span className="font-sans text-xs uppercase tracking-widest text-gray-400">Product</span>
                </th>
                {comparedProducts.map(product => (
                  <th key={product.id} className="p-6 border-b border-gray-100 border-l border-gray-50 w-64 align-top relative">
                    <button 
                      onClick={() => removeFromCompare(product.id)}
                      className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <Link href={`/product/${product.id}`} className="group flex flex-col items-center text-center">
                      <div className="relative w-32 h-40 mb-4 rounded-sm overflow-hidden bg-[#F7F5F0]">
                        <Image 
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="font-serif text-lg text-[#171716] group-hover:text-[#B89A5A] transition-colors">{product.name}</h3>
                      <p className="font-sans text-sm font-medium mt-2">${product.price.toLocaleString()}</p>
                    </Link>
                  </th>
                ))}
                {/* Empty columns to fill up to 4 */}
                {Array.from({ length: 4 - comparedProducts.length }).map((_, i) => (
                  <th key={`empty-${i}`} className="p-6 border-b border-gray-100 border-l border-gray-50 w-64 align-middle text-center bg-gray-50/50">
                    <div className="w-24 h-24 mx-auto border-2 border-dashed border-gray-200 rounded-full flex flex-col items-center justify-center text-gray-400 mb-4">
                      <span className="text-2xl">+</span>
                    </div>
                    <span className="text-xs font-sans text-gray-400 uppercase tracking-widest">Add Product</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-sans text-sm font-light text-gray-600 divide-y divide-gray-100">
              
              {/* Category / Type */}
              <tr>
                <td className="p-6 bg-gray-50 font-medium text-xs uppercase tracking-widest text-gray-900">Type</td>
                {comparedProducts.map(product => (
                  <td key={product.id} className="p-6 border-l border-gray-50 capitalize">{product.category}</td>
                ))}
                {Array.from({ length: 4 - comparedProducts.length }).map((_, i) => <td key={`empty-td1-${i}`} className="p-6 border-l border-gray-50 bg-gray-50/50"></td>)}
              </tr>

              {/* Material */}
              <tr>
                <td className="p-6 bg-gray-50 font-medium text-xs uppercase tracking-widest text-gray-900">Material</td>
                {comparedProducts.map(product => (
                  <td key={product.id} className="p-6 border-l border-gray-50">{product.material}</td>
                ))}
                {Array.from({ length: 4 - comparedProducts.length }).map((_, i) => <td key={`empty-td2-${i}`} className="p-6 border-l border-gray-50 bg-gray-50/50"></td>)}
              </tr>

              {/* Diamond */}
              <tr>
                <td className="p-6 bg-gray-50 font-medium text-xs uppercase tracking-widest text-gray-900">Diamond Type</td>
                {comparedProducts.map(product => (
                  <td key={product.id} className="p-6 border-l border-gray-50">
                    {product.diamondType === 'lab-grown' ? 'Lab-Grown Diamond' : product.diamondType === 'natural' ? 'Natural Diamond' : 'N/A'}
                  </td>
                ))}
                {Array.from({ length: 4 - comparedProducts.length }).map((_, i) => <td key={`empty-td3-${i}`} className="p-6 border-l border-gray-50 bg-gray-50/50"></td>)}
              </tr>

              {/* Carat */}
              <tr>
                <td className="p-6 bg-gray-50 font-medium text-xs uppercase tracking-widest text-gray-900">Carat Weight</td>
                {comparedProducts.map(product => (
                  <td key={product.id} className="p-6 border-l border-gray-50">{product.carat || 'N/A'}</td>
                ))}
                {Array.from({ length: 4 - comparedProducts.length }).map((_, i) => <td key={`empty-td4-${i}`} className="p-6 border-l border-gray-50 bg-gray-50/50"></td>)}
              </tr>

              {/* Warranty */}
              <tr>
                <td className="p-6 bg-gray-50 font-medium text-xs uppercase tracking-widest text-gray-900">Lifetime Warranty</td>
                {comparedProducts.map(product => (
                  <td key={product.id} className="p-6 border-l border-gray-50 text-[#B89A5A]">
                    <Check className="w-5 h-5" />
                  </td>
                ))}
                {Array.from({ length: 4 - comparedProducts.length }).map((_, i) => <td key={`empty-td5-${i}`} className="p-6 border-l border-gray-50 bg-gray-50/50"></td>)}
              </tr>

              {/* Action Buttons */}
              <tr>
                <td className="p-6 bg-gray-50"></td>
                {comparedProducts.map(product => (
                  <td key={product.id} className="p-6 border-l border-gray-50 text-center">
                    <Link 
                      href={`/product/${product.id}`}
                      className="inline-block w-full py-3 bg-[#171716] text-white text-xs uppercase tracking-widest font-medium rounded-none hover:bg-[#B89A5A] transition-colors"
                    >
                      View Details
                    </Link>
                  </td>
                ))}
                {Array.from({ length: 4 - comparedProducts.length }).map((_, i) => <td key={`empty-td6-${i}`} className="p-6 border-l border-gray-50 bg-gray-50/50"></td>)}
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
