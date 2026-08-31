"use client";

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/lib/data';

interface SimilarBudgetDesignsProps {
  products: Product[];
}

export function SimilarBudgetDesigns({ products }: SimilarBudgetDesignsProps) {
  const [activeTab, setActiveTab] = useState("25K - 50K");
  const tabs = ["Under 25K", "25K - 50K", "50K - 1L", "1L Above"];

  return (
    <div className="mt-24 pt-16 border-t border-gray-200">
      <div className="mb-10">
        <h2 className="font-serif text-2xl text-[#171716] mb-8">Explore similar designs within your budget</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          {/* Budget Pills */}
          <div className="flex bg-white rounded-full border border-gray-200 p-1 overflow-x-auto max-w-full hide-scrollbar">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? "bg-[#6d2f25] text-white shadow-md" 
                    : "text-gray-500 hover:text-[#171716]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2 hidden sm:flex">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#171716] hover:border-[#171716] transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#171716] hover:border-[#171716] transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
