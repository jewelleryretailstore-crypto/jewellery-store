'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { fetchGraphQL } from '@/lib/wordpress';
import { Loader2 } from 'lucide-react';

export default function CheckoutForm() {
  const { cart, loading: cartLoading } = useCart();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    city: '',
    state: '',
    postcode: '',
    country: 'IN', // Default to India for INR prices
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const mutation = `
        mutation Checkout($input: CheckoutInput!) {
          checkout(input: $input) {
            order {
              databaseId
              orderKey
              total
              status
            }
            result
          }
        }
      `;

      const input = {
        clientMutationId: "checkout-" + Date.now(),
        billing: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address1: formData.address1,
          city: formData.city,
          state: formData.state,
          postcode: formData.postcode,
          country: formData.country,
        },
        shipping: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          address1: formData.address1,
          city: formData.city,
          state: formData.state,
          postcode: formData.postcode,
          country: formData.country,
        },
        paymentMethod: "cod", // Cash on Delivery default for now
        isPaid: false
      };

      const res = await fetchGraphQL(mutation, { input });

      if (res.errors) {
        throw new Error(res.errors[0]?.message || 'Checkout failed');
      }

      if (res.data?.checkout?.order) {
        setSuccess(true);
        // We could also clear the local cart context here
      } else {
        throw new Error('Something went wrong processing your order.');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during checkout.');
    } finally {
      setLoading(false);
    }
  };

  if (cartLoading) return <div className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-gray-400" /></div>;
  if (!cart?.contents?.nodes?.length && !success) {
    return <div className="py-20 text-center text-gray-500 font-sans">Your cart is empty.</div>;
  }

  if (success) {
    return (
      <div className="py-24 text-center">
        <h2 className="font-serif text-3xl mb-4 text-[#171716]">Order Received</h2>
        <p className="font-sans text-gray-600 mb-8 max-w-md mx-auto">
          Thank you for your purchase. Your order has been successfully placed (Cash on Delivery). We will process it shortly.
        </p>
        <a href="/" className="px-8 py-3 bg-[#171716] text-white text-xs uppercase tracking-widest hover:bg-[#2A211C] transition-colors">
          Return to Shop
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 font-sans pb-24">
      {/* Checkout Form */}
      <div className="lg:col-span-7 space-y-8">
        <div className="bg-white p-8 border border-gray-200">
          <h2 className="text-xl font-serif text-[#171716] mb-6">Billing Details</h2>
          
          {error && <div className="bg-red-50 text-red-600 p-4 text-sm mb-6 border border-red-100">{error}</div>}

          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name *</label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-300 p-3 outline-none focus:border-[#B89A5A] text-sm" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name *</label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border border-gray-300 p-3 outline-none focus:border-[#B89A5A] text-sm" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-3 outline-none focus:border-[#B89A5A] text-sm" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 p-3 outline-none focus:border-[#B89A5A] text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Street Address *</label>
              <input required type="text" name="address1" value={formData.address1} onChange={handleChange} className="w-full border border-gray-300 p-3 outline-none focus:border-[#B89A5A] text-sm" placeholder="House number and street name" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">City *</label>
                <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full border border-gray-300 p-3 outline-none focus:border-[#B89A5A] text-sm" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">State *</label>
                <input required type="text" name="state" value={formData.state} onChange={handleChange} className="w-full border border-gray-300 p-3 outline-none focus:border-[#B89A5A] text-sm" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">PIN Code *</label>
                <input required type="text" name="postcode" value={formData.postcode} onChange={handleChange} className="w-full border border-gray-300 p-3 outline-none focus:border-[#B89A5A] text-sm" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Country</label>
              <input readOnly type="text" value="India" className="w-full border border-gray-300 p-3 bg-gray-50 text-gray-500 outline-none text-sm" />
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Payment Method</h3>
              <div className="flex items-center gap-3 p-4 border border-[#B89A5A] bg-[#B89A5A]/5">
                <input type="radio" checked readOnly className="w-4 h-4 accent-[#B89A5A]" />
                <span className="text-sm text-gray-700">Cash on Delivery</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Pay with cash upon delivery. (Card/Razorpay integrations can be added later).</p>
            </div>
          </form>
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-5">
        <div className="bg-[#F7F5F0] p-8 sticky top-32">
          <h2 className="text-xl font-serif text-[#171716] mb-6">Your Order</h2>
          
          <div className="space-y-4 mb-6">
            {cart?.contents?.nodes?.map((item) => (
              <div key={item.key} className="flex justify-between items-start pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-white relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.product.node.image?.sourceUrl || '/images/diamond.webp'} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 line-clamp-1">{item.product.node.name}</p>
                    <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900 whitespace-nowrap">{item.total}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 uppercase tracking-widest text-[11px]">Subtotal</span>
              <span className="font-medium">{cart?.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 uppercase tracking-widest text-[11px]">Shipping</span>
              <span className="font-medium text-[#B89A5A]">Free</span>
            </div>
            <div className="flex justify-between text-lg font-serif pt-4 border-t border-gray-200">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">{cart?.total}</span>
            </div>
          </div>

          <button 
            type="submit"
            form="checkout-form"
            disabled={loading}
            className="w-full mt-8 py-4 bg-[#171716] text-white uppercase tracking-widest text-xs font-medium hover:bg-[#2A211C] transition-colors disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Place Order'}
          </button>
        </div>
      </div>
    </div>
  );
}
