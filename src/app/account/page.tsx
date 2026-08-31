'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { DiamondWatermark } from '@/components/ui/DiamondWatermark';

export default function AccountPage() {
  const { user, login, logout, loading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await login(username, password);
    if (!res.success) {
      setError(res.error || 'Login failed');
    }
  };

  if (loading) return <div className='min-h-screen bg-[#F7F5F0] flex items-center justify-center'>Loading...</div>;

  return (
    <div className='min-h-screen bg-[#F7F5F0] relative font-sans pt-32 pb-20'>
      <DiamondWatermark opacity={0.05} className='inset-0 pointer-events-none' />
      
      <main className='max-w-md mx-auto px-6 relative z-10'>
        <div className='bg-white p-8 shadow-sm border border-gray-100'>
          {!user ? (
            <>
              <h2 className='font-serif text-3xl mb-2 text-[#171716] text-center'>Sign In</h2>
              <p className='text-gray-500 text-center mb-8 font-light'>Enter your details to access your account.</p>
              <form onSubmit={handleLogin} className='space-y-6'>
                <div>
                  <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>Email or Username</label>
                  <input 
                    type='text' 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#B89A5A] transition-colors'
                    required
                  />
                </div>
                <div>
                  <label className='block text-xs uppercase tracking-widest text-gray-500 mb-2'>Password</label>
                  <input 
                    type='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#B89A5A] transition-colors'
                    required
                  />
                </div>
                {error && <p className='text-red-500 text-xs'>{error}</p>}
                <button type='submit' className='w-full bg-[#171716] text-white py-4 uppercase tracking-widest text-xs transition-colors hover:bg-[#2A211C]'>
                  Sign In
                </button>
              </form>
            </>
          ) : (
            <div className='text-center'>
              <h2 className='font-serif text-3xl mb-4 text-[#171716]'>Welcome, {user.username || user.email}</h2>
              <p className='text-gray-500 mb-8 font-light'>You are logged into your Lumière account.</p>
              <button onClick={logout} className='bg-transparent border border-gray-300 text-[#171716] px-8 py-3 uppercase tracking-widest text-xs transition-colors hover:bg-gray-50'>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}