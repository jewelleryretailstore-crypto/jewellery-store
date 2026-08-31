'use client';

import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, loading } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className='fixed inset-0 bg-[#171716]/60 backdrop-blur-sm z-50'
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className='fixed right-0 top-0 h-screen w-full max-w-md bg-white z-[60] shadow-2xl flex flex-col font-sans'
          >
            <div className='flex items-center justify-between p-6 border-b border-gray-100'>
              <h2 className='font-serif text-2xl text-[#171716]'>Your Bag</h2>
              <button onClick={() => setIsCartOpen(false)} className='text-gray-400 hover:text-[#171716] transition-colors'>
                <X className='w-6 h-6' />
              </button>
            </div>

            <div className='flex-1 overflow-y-auto p-6'>
              {!cart?.contents?.nodes?.length ? (
                <div className='h-full flex flex-col items-center justify-center text-center space-y-4'>
                  <ShoppingBag className='w-12 h-12 text-gray-300' strokeWidth={1} />
                  <p className='text-gray-500 font-light'>Your bag is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className='mt-4 px-8 py-3 bg-[#171716] text-white text-xs uppercase tracking-widest hover:bg-[#2A211C] transition-colors'
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className='space-y-8'>
                  {cart.contents.nodes.map((item) => (
                    <div key={item.key} className='flex gap-4 relative'>
                      <div className='w-24 h-24 relative bg-[#F7F5F0] flex-shrink-0'>
                        <Image 
                          src={item.product.node.image?.sourceUrl || '/images/diamond.webp'}
                          alt={item.product.node.name}
                          fill
                          className='object-cover'
                        />
                      </div>
                      <div className='flex-1 flex flex-col justify-between py-1'>
                        <div>
                          <h3 className='font-medium text-[#171716] text-sm'>{item.product.node.name}</h3>
                          <p className='text-xs text-gray-500 mt-1'>{item.product.node.price}</p>
                        </div>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center border border-gray-200'>
                            <button 
                              disabled={loading}
                              onClick={() => updateQuantity(item.key, item.quantity - 1)}
                              className='p-2 text-gray-500 hover:text-[#171716] disabled:opacity-50'
                            >
                              <Minus className='w-3 h-3' />
                            </button>
                            <span className='w-8 text-center text-sm'>{item.quantity}</span>
                            <button 
                              disabled={loading}
                              onClick={() => updateQuantity(item.key, item.quantity + 1)}
                              className='p-2 text-gray-500 hover:text-[#171716] disabled:opacity-50'
                            >
                              <Plus className='w-3 h-3' />
                            </button>
                          </div>
                          <button 
                            disabled={loading}
                            onClick={() => removeFromCart(item.key)}
                            className='text-xs text-gray-400 uppercase tracking-widest hover:text-[#171716] disabled:opacity-50'
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {(cart?.contents?.nodes?.length || 0) > 0 && (
              <div className='p-6 border-t border-gray-100 bg-[#F7F5F0]'>
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-sm text-gray-600 uppercase tracking-widest'>Subtotal</span>
                  <span className='font-serif text-xl'>{cart?.subtotal}</span>
                </div>
                <p className='text-xs text-gray-500 mb-6'>Shipping and taxes calculated at checkout.</p>
                <button 
                  onClick={() => {
                    setIsCartOpen(false);
                    window.location.href = '/checkout';
                  }}
                  className='w-full py-4 bg-[#171716] text-white uppercase tracking-widest text-xs hover:bg-[#2A211C] transition-colors'
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}