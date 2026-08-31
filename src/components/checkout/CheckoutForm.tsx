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
      <div className="lg:col-span-7 space-y-10">
        <div>
          <h2 className="text-2xl font-serif text-[#171716] mb-6">Contact & Billing Details</h2>
          
          {error && <div className="bg-red-50 text-red-600 p-4 text-sm mb-6 border border-red-100 rounded-md">{error}</div>}

          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium">First Name <span className="text-red-500">*</span></label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3.5 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium">Last Name <span className="text-red-500">*</span></label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3.5 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium">Email Address <span className="text-red-500">*</span></label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3.5 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium">Phone Number <span className="text-red-500">*</span></label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3.5 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium">Street Address <span className="text-red-500">*</span></label>
              <input required type="text" name="address1" value={formData.address1} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3.5 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm" placeholder="House number and street name" />
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium">City <span className="text-red-500">*</span></label>
                <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3.5 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium">State <span className="text-red-500">*</span></label>
                <input required type="text" name="state" value={formData.state} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3.5 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium">PIN Code <span className="text-red-500">*</span></label>
                <input required type="text" name="postcode" value={formData.postcode} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3.5 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium">Country / Region</label>
              <input readOnly type="text" value="India" className="w-full border border-gray-200 rounded-md p-3.5 bg-gray-50/50 text-gray-500 outline-none text-sm cursor-not-allowed" />
            </div>
            
            <div className="pt-8 mt-8 border-t border-gray-200">
              <h2 className="text-2xl font-serif text-[#171716] mb-6">Payment Options</h2>
              <div className="rounded-md border border-gray-200 overflow-hidden">
                <div className="flex items-center gap-4 p-5 bg-gray-50/50 border-b border-gray-200">
                  <input type="radio" id="cod" checked readOnly className="w-5 h-5 accent-gray-900" />
                  <label htmlFor="cod" className="text-sm font-medium text-gray-900 cursor-pointer">Cash on Delivery</label>
                </div>
                <div className="p-5 bg-white text-sm text-gray-500 leading-relaxed">
                  Pay with cash upon delivery. Your order will be shipped and you can pay the courier directly when it arrives.
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-5">
        <div className="bg-[#FAFAFA] rounded-xl p-8 sticky top-32 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-serif text-[#171716] mb-6">Order Summary</h2>
          
          <div className="space-y-5 mb-8">
            {cart?.contents?.nodes?.map((item) => (
              <div key={item.key} className="flex gap-4 items-center pl-2 pt-2">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-md border border-gray-200 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.product.node.image?.sourceUrl || '/images/diamond.webp'} alt="" className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium z-10">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium text-gray-900 line-clamp-1">{item.product.node.name}</p>
                  
                  {item.variation?.node.attributes?.nodes && item.variation.node.attributes.nodes.length > 0 && (
                    <p className='text-[10px] text-gray-500 mt-0.5 mb-1'>
                      {item.variation.node.attributes.nodes.map(a => `${a.name.replace('pa_', '').replace(/\b\w/g, l => l.toUpperCase())}: ${a.value}`).join(' / ')}
                    </p>
                  )}
                  
                  <p className="text-xs text-gray-500 mt-1">{item.total}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-4 mb-6">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>{cart?.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-6 mb-8">
            <div className="flex justify-between items-baseline">
              <span className="text-base font-medium text-[#171716]">Total</span>
              <span className="text-2xl font-serif text-[#171716]">{cart?.subtotal}</span>
            </div>
          </div>

          <button 
            type="submit" 
            form="checkout-form"
            disabled={loading}
            className="w-full bg-[#171716] text-white py-4 text-xs uppercase tracking-widest hover:bg-[#2A211C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-md"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Place Order'}
          </button>
          
          <p className="text-center text-[11px] text-gray-500 mt-6 flex justify-center items-center gap-2">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" /></svg>
            Secure, encrypted checkout
          </p>
        </div>
      </div>
    </div>
  );
}
