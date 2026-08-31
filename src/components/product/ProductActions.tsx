'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { Product } from '@/lib/data';
import { AddToCartButton } from './AddToCartButton';
import { BuyNowButton } from './BuyNowButton';

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    if (product.attributes) {
      product.attributes.forEach(attr => {
        if (attr.options && attr.options.length > 0) {
          initial[attr.name] = attr.options[0];
        }
      });
    }
    return initial;
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (attrName: string) => {
    setOpenDropdown(openDropdown === attrName ? null : attrName);
  };

  const selectOption = (attrName: string, option: string) => {
    setSelectedOptions(prev => ({ ...prev, [attrName]: option }));
    setOpenDropdown(null);
  };

  // Find the matching variation based on selected options
  const currentVariation = useMemo(() => {
    if (!product.variations || product.variations.length === 0) return null;
    
    return product.variations.find(v => {
      // Check if this variation matches all selected options
      return v.attributes.every(attr => {
        // The attribute name in variation might be e.g. "pa_purity" or "purity"
        const selectedVal = Object.entries(selectedOptions).find(([key, _]) => 
          key.toLowerCase() === attr.name.toLowerCase() || 
          attr.name.toLowerCase().includes(key.toLowerCase())
        )?.[1];
        
        return !selectedVal || selectedVal.toLowerCase() === attr.value.toLowerCase();
      });
    });
  }, [product.variations, selectedOptions]);

  // Determine current price and target ID
  const displayPrice = currentVariation ? currentVariation.price : product.price;
  const targetId = currentVariation ? currentVariation.databaseId : (product.databaseId || 0);

  return (
    <>
      <p className="text-xl font-medium mb-8">₹{displayPrice.toLocaleString()}</p>

      {/* Actions */}
      <div className="flex gap-4 mb-10">
        <AddToCartButton productId={targetId} />
        <BuyNowButton productId={targetId} />
      </div>

      {/* Variants & Details List */}
      <div className={`${!product.attributes || product.attributes.length === 0 ? 'border-t' : ''} border-gray-200 mb-10`} ref={dropdownRef}>
        
        {product.attributes && product.attributes.length > 0 && (
          <div className="border-t border-gray-200">
            {product.attributes.map((attr) => {
              const isSingleOption = attr.options.length === 1;
              const isOpen = openDropdown === attr.name;
              
              return (
                <div key={attr.name} className="relative border-b border-gray-200 py-4 flex justify-between items-center group transition-colors">
                  <span className="text-[11px] uppercase tracking-widest font-medium text-gray-900">{attr.name}</span>
                  
                  {isSingleOption ? (
                    <span className="text-[11px] text-gray-500 mr-5">{attr.options[0]}</span>
                  ) : (
                    <div className="relative">
                      <button 
                        onClick={() => toggleDropdown(attr.name)}
                        className="flex items-center gap-2 bg-transparent text-[11px] text-gray-500 outline-none text-right cursor-pointer group-hover:text-[#171716] transition-colors"
                      >
                        {selectedOptions[attr.name]}
                        <ChevronRight className={`w-3 h-3 text-gray-400 group-hover:text-[#171716] transition-transform duration-300 ${isOpen ? 'rotate-[-90deg]' : 'rotate-90'}`} />
                      </button>

                      <div 
                        className={`absolute right-0 top-full mt-2 w-48 bg-white/80 backdrop-blur-md border border-gray-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] z-50 transition-all duration-300 origin-top-right ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                      >
                        <div className="py-2">
                          {attr.options.map((opt) => {
                            const isSelected = selectedOptions[attr.name] === opt;
                            return (
                              <button
                                key={opt}
                                onClick={() => selectOption(attr.name, opt)}
                                className={`w-full text-left px-4 py-3 flex items-center justify-between text-[11px] uppercase tracking-widest transition-colors ${isSelected ? 'text-[#B89A5A] bg-gray-50/50' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                              >
                                {opt}
                                {isSelected && <Check className="w-3 h-3 text-[#B89A5A]" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

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
    </>
  );
}
