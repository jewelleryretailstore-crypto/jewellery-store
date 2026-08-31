"use client";

import React, { useState } from 'react';
import { Filter, ChevronDown, X, ChevronRight, Plus, Minus } from 'lucide-react';

export default function CategoryFilterBar({ totalResults = 11201 }: { totalResults?: number }) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // Hardcoded selected filters to match the user's mockup
  const selectedFilters = [
    "₹25,000 - ₹50,000",
    "Women",
    "Gold Jewellery",
    "22"
  ];
  
  const additionalFilters = [
    "Modern Wear",
    "Wedding Special",
    "Traditional and Ethnic Wear"
  ];

  return (
    <>
      {/* FILTER TOP BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
        
        {/* Left Side: Filter Button & Pills */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Main Filter Button */}
          <button 
            onClick={() => setIsFilterModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-sm hover:border-[#171716] transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          
          <div className="h-8 w-px bg-gray-300 mx-1 hidden md:block"></div>

          {/* Active Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {selectedFilters.map((filter, idx) => (
              <button 
                key={idx}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm hover:border-[#B89A5A] transition-colors bg-white group"
              >
                <Plus className="w-3.5 h-3.5 text-[#855B54] rotate-45 group-hover:text-red-500 transition-colors" />
                <span className="text-[#171716]">{filter}</span>
              </button>
            ))}
            
            {showMoreFilters && additionalFilters.map((filter, idx) => (
              <button 
                key={`add-${idx}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm hover:border-[#B89A5A] transition-colors bg-white group"
              >
                <Plus className="w-3.5 h-3.5 text-[#855B54] rotate-45 group-hover:text-red-500 transition-colors" />
                <span className="text-[#171716]">{filter}</span>
              </button>
            ))}

            {/* Show More / Less */}
            <button 
              onClick={() => setShowMoreFilters(!showMoreFilters)}
              className="text-sm text-[#855B54] font-medium ml-1 hover:text-[#5e413c] transition-colors"
            >
              {showMoreFilters ? "-Show Less" : "+Show More"}
            </button>
          </div>
        </div>

        {/* Right Side: Sort By */}
        <div className="relative">
          <button 
            onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-sm hover:border-[#171716] transition-colors bg-white"
          >
            <span className="text-gray-500">Sort By:</span>
            <span className="font-semibold text-[#171716]">Best Matches</span>
            <ChevronDown className="w-4 h-4 text-gray-400 ml-1" />
          </button>
          
          {/* Sort Dropdown */}
          {isSortDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                <h3 className="font-serif text-xl text-[#171716]">Sort By</h3>
                <button onClick={() => setIsSortDropdownOpen(false)} className="p-1 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col py-2">
                <button className="text-left px-6 py-3 text-sm font-semibold text-[#171716] hover:bg-gray-50 transition-colors">Best Sellers</button>
                <button className="text-left px-6 py-3 text-sm font-semibold text-[#171716] hover:bg-gray-50 transition-colors">New Arrivals</button>
                <button className="text-left px-6 py-3 text-sm font-semibold text-[#171716] hover:bg-gray-50 transition-colors">Recommendations</button>
                <button className="text-left px-6 py-3 text-sm font-semibold text-[#855B54] bg-[#fcf9f9] border-b border-gray-100 pb-4 mb-2">Best Matches</button>
                <button className="text-left px-6 py-3 text-sm font-semibold text-[#171716] hover:bg-gray-50 transition-colors">Price : Low To High</button>
                <button className="text-left px-6 py-3 text-sm font-semibold text-[#171716] hover:bg-gray-50 transition-colors">Price : High To Low</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FILTER MODAL / SLIDEOUT */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center sm:justify-start">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsFilterModalOpen(false)}></div>
          
          <div className="relative w-full max-w-md h-[90vh] sm:h-screen sm:max-h-screen bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-300 rounded-t-2xl sm:rounded-none">
            
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 shrink-0">
              <h2 className="font-serif text-2xl text-[#6d2f25]">Filter By</h2>
              <button onClick={() => setIsFilterModalOpen(false)} className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-2">
              {['Price', 'Jewellery Type', 'Brand', 'Gender', 'Karatage', 'Occasion', 'Metal', 'Diamond Clarity'].map((category, idx) => (
                <div key={idx} className="flex justify-between items-center py-6 border-b border-gray-100 cursor-pointer group hover:bg-gray-50 -mx-6 px-6 transition-colors">
                  <span className="font-semibold text-sm text-[#171716]">{category}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              ))}
            </div>
            
            <div className="px-6 py-5 border-t border-gray-200 bg-white shrink-0 flex gap-4">
              <button 
                onClick={() => setIsFilterModalOpen(false)}
                className="flex-1 py-4 text-[#171716] bg-[#f5ebeb] border border-[#d6c7c7] rounded-full font-medium text-sm flex justify-center items-center gap-2 hover:bg-[#e6dada] transition-colors"
              >
                Clear Filters <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsFilterModalOpen(false)}
                className="flex-1 py-4 text-white bg-[#7a2a29] border border-[#7a2a29] rounded-full font-medium text-sm flex justify-center items-center gap-2 hover:bg-[#632221] transition-colors shadow-lg"
              >
                Show Result ({totalResults.toLocaleString()}) <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
