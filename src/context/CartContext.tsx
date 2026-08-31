'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchGraphQL } from '@/lib/wordpress';

type CartItem = {
  key: string;
  product: {
    node: {
      id: string;
      databaseId: number;
      name: string;
      slug: string;
      image: { sourceUrl: string };
      price: string;
    }
  };
  quantity: number;
  total: string;
};

type Cart = {
  contents: {
    nodes: CartItem[];
  };
  subtotal: string;
  total: string;
};

interface CartContextType {
  cart: Cart | null;
  loading: boolean;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (productId: number, quantity?: number) => Promise<void>;
  updateQuantity: (key: string, quantity: number) => Promise<void>;
  removeFromCart: (key: string) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const fetchCart = async () => {
    const query = `
      query GetCart {
        cart {
          contents {
            nodes {
              key
              product {
                node {
                  id
                  databaseId
                  name
                  slug
                  image { sourceUrl }
                  ... on SimpleProduct { price }
                  ... on VariableProduct { price }
                }
              }
              quantity
              total
            }
          }
          subtotal
          total
        }
      }
    `;
    const res = await fetchGraphQL(query);
    if (res?.data?.cart) setCart(res.data.cart);
    setLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (productId: number, quantity = 1) => {
    setLoading(true);
    const mutation = `
      mutation AddToCart($productId: Int!, $quantity: Int!) {
        addToCart(input: { productId: $productId, quantity: $quantity }) {
          cart { subtotal }
        }
      }
    `;
    await fetchGraphQL(mutation, { productId, quantity });
    await fetchCart();
    setIsCartOpen(true);
  };

  const updateQuantity = async (key: string, quantity: number) => {
    setLoading(true);
    const mutation = `
      mutation UpdateItemQuantities($items: [CartItemQuantityInput]!) {
        updateItemQuantities(input: { items: $items }) {
          cart { subtotal }
        }
      }
    `;
    await fetchGraphQL(mutation, { items: [{ key, quantity }] });
    await fetchCart();
  };

  const removeFromCart = async (key: string) => {
    setLoading(true);
    const mutation = `
      mutation RemoveItemsFromCart($keys: [ID]!) {
        removeItemsFromCart(input: { keys: $keys }) {
          cart { subtotal }
        }
      }
    `;
    await fetchGraphQL(mutation, { keys: [key] });
    await fetchCart();
  };

  return (
    <CartContext.Provider value={{ cart, loading, isCartOpen, setIsCartOpen, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}