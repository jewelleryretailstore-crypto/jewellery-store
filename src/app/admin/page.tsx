'use client';

import { useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { supabase, CategoryHero } from '@/lib/supabase';
import { DiamondWatermark } from '@/components/ui/DiamondWatermark';

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    slug: '',
    image_src: '',
    title: '',
    subtitle: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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

  const handleSignOut = () => signOut(auth);

  const fetchCategory = async () => {
    if (!formData.slug) return;
    setStatus({ type: 'info', message: 'Fetching...' });
    const { data, error } = await supabase.from('category_heroes').select('*').eq('slug', formData.slug.toLowerCase()).single();
    if (error && error.code !== 'PGRST116') {
      setStatus({ type: 'error', message: error.message });
    } else if (data) {
      setFormData({ ...formData, image_src: data.image_src || '', title: data.title || '', subtitle: data.subtitle || '' });
      setStatus({ type: 'success', message: 'Configuration loaded.' });
    } else {
      setStatus({ type: 'info', message: 'No configuration found for this category. Ready to create new.' });
      setFormData({ ...formData, image_src: '', title: '', subtitle: '' });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Saving...' });
    const { error } = await supabase.from('category_heroes').upsert({
      slug: formData.slug.toLowerCase(),
      image_src: formData.image_src,
      title: formData.title,
      subtitle: formData.subtitle,
      updated_at: new Date().toISOString()
    });
    if (error) {
      setStatus({ type: 'error', message: error.message });
    } else {
      setStatus({ type: 'success', message: 'Saved successfully!' });
    }
  };

  if (loading) return <div className='min-h-screen flex items-center justify-center bg-[#F7F5F0]'>Loading...</div>;

  if (!user) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-[#F7F5F0] relative font-sans'>
        <DiamondWatermark opacity={0.1} className='inset-0' />
        <div className='bg-white p-12 shadow-xl z-10 text-center max-w-md w-full'>
          <h1 className='font-serif text-3xl mb-4 text-[#171716]'>Lumière Admin</h1>
          <p className='text-gray-500 mb-8 font-light'>Sign in to manage category hero content.</p>
          <button onClick={handleSignIn} className='w-full bg-[#171716] text-white py-4 uppercase tracking-widest text-xs transition-colors hover:bg-[#2A211C]'>
            Sign in with Google
          </button>
          {status.message && <p className='mt-4 text-sm text-red-500'>{status.message}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-[#F7F5F0] relative font-sans pb-20'>
      <DiamondWatermark opacity={0.05} className='inset-0 pointer-events-none' />
      <header className='bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center sticky top-0 z-20'>
        <h1 className='font-serif text-xl text-[#171716]'>Admin Panel</h1>
        <div className='flex items-center gap-4'>
          <span className='text-sm text-gray-500'>{user.email}</span>
          <button onClick={handleSignOut} className='text-xs uppercase tracking-widest text-gray-500 hover:text-[#171716]'>Sign Out</button>
        </div>
      </header>

      <main className='max-w-3xl mx-auto mt-12 px-6 relative z-10'>
        <div className='bg-white p-8 md:p-12 shadow-sm border border-gray-100'>
          <h2 className='font-serif text-2xl mb-8 text-[#171716]'>Manage Category Hero</h2>
          <form onSubmit={handleSave} className='space-y-6'>
            <div>
              <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>Category Slug</label>
              <div className='flex gap-4'>
                <input 
                  type='text' 
                  placeholder='e.g., engagement-rings' 
                  value={formData.slug}
                  onChange={e => setFormData({...formData, slug: e.target.value})}
                  className='flex-1 border-b border-gray-300 py-2 focus:outline-none focus:border-[#B89A5A] transition-colors'
                  required
                />
                <button type='button' onClick={fetchCategory} className='px-6 py-2 bg-gray-100 text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors'>Load</button>
              </div>
            </div>
            
            <div>
              <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>Image URL</label>
              <input 
                type='url' 
                value={formData.image_src}
                onChange={e => setFormData({...formData, image_src: e.target.value})}
                className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#B89A5A] transition-colors'
                placeholder='https://...' 
                required
              />
            </div>

            <div>
              <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>Title</label>
              <input 
                type='text' 
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#B89A5A] transition-colors'
                required
              />
            </div>

            <div>
              <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>Subtitle</label>
              <textarea 
                value={formData.subtitle}
                onChange={e => setFormData({...formData, subtitle: e.target.value})}
                className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#B89A5A] transition-colors resize-none h-24'
                required
              />
            </div>

            <div className='pt-6 flex items-center justify-between'>
              <button type='submit' className='bg-[#171716] text-white px-10 py-4 uppercase tracking-widest text-xs transition-colors hover:bg-[#2A211C]'>
                Save Changes
              </button>
              {status.message && (
                <p className={`text-sm ${status.type === 'error' ? 'text-red-500' : status.type === 'success' ? 'text-green-600' : 'text-gray-500'}`}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}