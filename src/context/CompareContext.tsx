"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/lib/data";

interface CompareContextType {
  comparedProducts: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  isInCompare: (productId: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("lumiere_compare");
    if (saved) {
      try {
        setComparedProducts(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse compare data from local storage", e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save to local storage when state changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("lumiere_compare", JSON.stringify(comparedProducts));
    }
  }, [comparedProducts, isInitialized]);

  const addToCompare = (product: Product) => {
    setComparedProducts((prev) => {
      if (prev.length >= 4) return prev; // Max 4 products
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId: string) => {
    setComparedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const clearCompare = () => {
    setComparedProducts([]);
  };

  const isInCompare = (productId: string) => {
    return comparedProducts.some((p) => p.id === productId);
  };

  return (
    <CompareContext.Provider value={{ comparedProducts, addToCompare, removeFromCompare, clearCompare, isInCompare }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
