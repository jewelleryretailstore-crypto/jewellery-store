'use client';

import { useCart } from '@/context/CartContext';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export function BuyNowButton({ productId }: { productId: number | string }) {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleBuyNow = async () => {
    setLoading(true);
    await addToCart(Number(productId));
    window.location.href = '/checkout';
  };

  return (
    <button 
      onClick={handleBuyNow}
      disabled={loading}
      className='flex-1 flex justify-center items-center bg-transparent text-[#171716] py-4 uppercase tracking-widest text-[11px] font-medium transition-all duration-500 rounded-none border border-[#171716]/20 hover:border-[#171716] hover:bg-[#171716] hover:text-white disabled:opacity-50'
    >
      {loading ? <Loader2 className='w-4 h-4 animate-spin' /> : 'Buy It Now'}
    </button>
  );
}
