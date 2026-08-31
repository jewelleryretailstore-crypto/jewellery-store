'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import './ProductConfigurator.css';
import { ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Product } from '@/lib/data';

interface ProductConfiguratorProps {
  product: Product;
}

export default function ProductConfigurator({ product }: ProductConfiguratorProps) {
  // Store selected options in a map
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    product.attributes?.forEach(attr => {
      if (attr.options && attr.options.length > 0) {
        initial[attr.name] = attr.options[0];
      }
    });
    return initial;
  });

  const handleOptionSelect = (attrName: string, option: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [attrName]: option
    }));
  };

  return (
    <div className="configurator-container">
      <div className="product-header">
        <div className="reviews text-sans">
          <span className="stars">★★★★★</span> (128 Reviews)
        </div>
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">₹{product.price.toLocaleString()}</p>
        <p className="product-tax text-sans">Inclusive of all taxes</p>
      </div>

        </motion.button>
      </div>

      <div className="trust-signals text-sans">
        <div className="trust-item">
          <Truck size={18} />
          <span>Free Insured Shipping</span>
        </div>
        <div className="trust-item">
          <RefreshCw size={18} />
          <span>30-Day Returns</span>
        </div>
        <div className="trust-item">
          <ShieldCheck size={18} />
          <span>Lifetime Warranty</span>
        </div>
      </div>
    </div>
  );
}
