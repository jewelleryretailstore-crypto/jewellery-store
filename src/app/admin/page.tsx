'use client';

import { useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { supabase } from '@/lib/supabase';
import { DiamondWatermark } from '@/components/ui/DiamondWatermark';

const ALLOWED_EMAILS = ['jewelleryretailstore@gmail.com', 'desairashmi86@gmail.com']; // Add admin emails here

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  const [activeTab, setActiveTab] = useState('category-heroes');

  const [formData, setFormData] = useState({
    slug: 'diamond',
    image_src: '',
    title: '',
    subtitle: '',
    cta_text: '',
    cta_link: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const categories = [
    { name: 'All Jewellery', slug: 'collections' },
    { name: 'Gold', slug: 'gold' },
    { name: 'Diamond', slug: 'diamond' },
    { name: 'Earrings', slug: 'earrings' },
    { name: 'Daily Wear', slug: 'daily-wear' },
    { name: 'Gemstone', slug: 'gemstone' },
    { name: 'Wedding', slug: 'wedding' },
    { name: 'Gifting', slug: 'gifting' },
    { name: 'Under 50K', slug: 'under-50k' }
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email) {
        const emailEnv = process.env.NEXT_PUBLIC_ADMIN_EMAILS;
        const allowed = emailEnv ? emailEnv.split(',').map(e => e.trim()) : ALLOWED_EMAILS;
        if (allowed.includes(currentUser.email)) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      setStatus({ type: 'error', message: error.message });
    }
  };

  const handleSignOut = () => {
    signOut(auth);
    setUser(null);
    setIsAuthorized(false);
  };

  const fetchCategory = async () => {
    if (!formData.slug) return;
    setStatus({ type: 'info', message: 'Fetching...' });
    const { data, error } = await supabase.from('category_heroes').select('*').eq('slug', formData.slug).single();
    if (error && error.code !== 'PGRST116') {
      setStatus({ type: 'error', message: error.message });
    } else if (data) {
      setFormData({ 
        ...formData, 
        image_src: data.image_src || '', 
        title: data.title || '', 
        subtitle: data.subtitle || '',
        cta_text: data.cta_text || '',
        cta_link: data.cta_link || ''
      });
      setStatus({ type: 'success', message: 'Configuration loaded.' });
    } else {
      setStatus({ type: 'info', message: 'No configuration found for this category. Ready to create new.' });
      setFormData({ ...formData, image_src: '', title: '', subtitle: '', cta_text: '', cta_link: '' });
    }
  };

  // Auto fetch when category changes
  useEffect(() => {
    if (isAuthorized) {
      fetchCategory();
    }
  }, [formData.slug, isAuthorized]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Saving...' });
    const { error } = await supabase.from('category_heroes').upsert({
      slug: formData.slug,
      image_src: formData.image_src,
      title: formData.title,
      subtitle: formData.subtitle,
      cta_text: formData.cta_text,
      cta_link: formData.cta_link,
      updated_at: new Date().toISOString()
    });
    if (error) {
      setStatus({ type: 'error', message: error.message });
    } else {
      setStatus({ type: 'success', message: 'Saved successfully!' });
    }
  };

  if (loading) return <div className='min-h-screen flex items-center justify-center bg-[#F7F5F0]'>Loading...</div>;

  if (!user || !isAuthorized) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-[#F7F5F0] relative font-sans'>
        <DiamondWatermark opacity={0.1} className='inset-0' />
        <div className='bg-white p-12 shadow-xl z-10 text-center max-w-md w-full'>
          <h1 className='font-serif text-3xl mb-4 text-[#171716]'>Admin Panel</h1>
          <p className='text-gray-500 mb-8 font-light'>
            {user ? 'You are not authorized to view this page.' : 'Sign in to manage the store.'}
          </p>
          {!user ? (
            <button onClick={handleSignIn} className='w-full bg-[#171716] text-white py-4 uppercase tracking-widest text-xs transition-colors hover:bg-[#2A211C]'>
              Sign in with Google
            </button>
          ) : (
            <button onClick={handleSignOut} className='w-full border border-[#171716] text-[#171716] py-4 uppercase tracking-widest text-xs transition-colors hover:bg-gray-50'>
              Sign out
            </button>
          )}
          {status.message && <p className='mt-4 text-sm text-red-500'>{status.message}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-[#F7F5F0] relative font-sans'>
      <DiamondWatermark opacity={0.05} className='inset-0 pointer-events-none' />
      
      {/* Top Header */}
      <header className='bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center sticky top-0 z-20'>
        <h1 className='font-serif text-xl text-[#171716]'>Store Administration</h1>
        <div className='flex items-center gap-4'>
          <span className='text-sm text-gray-500 hidden md:inline'>{user.email}</span>
        </div>
      </header>

      <div className='flex max-w-7xl mx-auto'>
        {/* Left Sidebar Menu */}
        <aside className='w-64 flex-shrink-0 min-h-[calc(100vh-65px)] border-r border-gray-200 bg-white/50 backdrop-blur-sm p-6 hidden md:block relative z-10'>
          <nav className='space-y-2'>
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${activeTab === 'dashboard' ? 'bg-[#171716] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('category-heroes')} 
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${activeTab === 'category-heroes' ? 'bg-[#171716] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Category Pages
            </button>
            <button 
              onClick={() => setActiveTab('settings')} 
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${activeTab === 'settings' ? 'bg-[#171716] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Settings
            </button>
            <div className='pt-8'>
              <button 
                onClick={handleSignOut}
                className='w-full text-left px-4 py-3 text-sm text-red-600 transition-colors hover:bg-red-50'
              >
                Log Out
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className='flex-1 p-6 md:p-12 relative z-10'>
          {activeTab === 'dashboard' && (
            <div>
              <h2 className='font-serif text-3xl mb-4 text-[#171716]'>Welcome, {user.displayName}</h2>
              <p className='text-gray-600'>Select an option from the sidebar to manage your store content.</p>
            </div>
          )}

          {activeTab === 'category-heroes' && (
            <div className='bg-white p-8 md:p-10 shadow-sm border border-gray-100 max-w-3xl'>
              <h2 className='font-serif text-2xl mb-8 text-[#171716]'>Edit Category Content</h2>
              <form onSubmit={handleSave} className='space-y-8'>
                <div>
                  <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>Select Category Page</label>
                  <select 
                    value={formData.slug}
                    onChange={e => setFormData({...formData, slug: e.target.value})}
                    className='w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#B89A5A] transition-colors'
                  >
                    {categories.map(cat => (
                      <option key={cat.slug} value={cat.slug}>{cat.name} ({cat.slug})</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>Hero Image URL</label>
                  <input 
                    type='url' 
                    value={formData.image_src}
                    onChange={e => setFormData({...formData, image_src: e.target.value})}
                    className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#B89A5A] transition-colors'
                    placeholder='https://...' 
                    required
                  />
                  {formData.image_src && (
                    <div className='mt-4 aspect-[21/9] bg-gray-100 relative overflow-hidden'>
                      <img src={formData.image_src} alt="Preview" className='object-cover w-full h-full' />
                    </div>
                  )}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div>
                    <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>Main Title</label>
                    <input 
                      type='text' 
                      value={formData.title}
                      onChange={e => setFormData({...formData, title: e.target.value})}
                      className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#B89A5A] transition-colors'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>Subtitle Text</label>
                    <input 
                      type='text' 
                      value={formData.subtitle}
                      onChange={e => setFormData({...formData, subtitle: e.target.value})}
                      className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#B89A5A] transition-colors'
                      required
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div>
                    <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>CTA Button Text</label>
                    <input 
                      type='text' 
                      value={formData.cta_text}
                      onChange={e => setFormData({...formData, cta_text: e.target.value})}
                      placeholder='e.g., Shop Collection'
                      className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#B89A5A] transition-colors'
                    />
                  </div>
                  <div>
                    <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>CTA Button Link</label>
                    <input 
                      type='text' 
                      value={formData.cta_link}
                      onChange={e => setFormData({...formData, cta_link: e.target.value})}
                      placeholder='e.g., /category/diamond'
                      className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#B89A5A] transition-colors'
                    />
                  </div>
                </div>

                <div className='pt-6 flex items-center justify-between border-t border-gray-100 mt-8'>
                  <button type='submit' className='bg-[#171716] text-white px-10 py-4 uppercase tracking-widest text-xs transition-colors hover:bg-[#2A211C]'>
                    Publish Changes
                  </button>
                  {status.message && (
                    <p className={`text-sm ${status.type === 'error' ? 'text-red-500' : status.type === 'success' ? 'text-green-600' : 'text-gray-500'}`}>
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className='font-serif text-3xl mb-4 text-[#171716]'>Settings</h2>
              <p className='text-gray-600'>Global store settings will appear here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
