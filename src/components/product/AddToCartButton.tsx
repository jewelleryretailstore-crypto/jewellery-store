'use client';

import { useCart } from '@/context/CartContext';
import { Loader2 } from 'lucide-react';

export function AddToCartButton({ productId }: { productId: number | string }) {
  const { addToCart, loading } = useCart();

  const handleAdd = () => {
    // Convert string ID (if using local) to number if necessary, 
    // but WooCommerce requires a number for productId in GraphQL.
    // We mapped databaseId when fetching.
    addToCart(Number(productId));
  };

  return (
    <button 
      onClick={handleAdd}
      disabled={loading}
      className='flex-1 flex justify-center items-center bg-black/5 backdrop-blur-md text-[#171716] py-4 uppercase tracking-widest text-[11px] font-medium transition-all duration-500 rounded-none border border-[#171716]/20 hover:border-[#171716] hover:bg-[#171716] hover:text-white disabled:opacity-50'
    >
      {loading ? <Loader2 className='w-4 h-4 animate-spin' /> : 'Add to Cart'}
    </button>
  );
}