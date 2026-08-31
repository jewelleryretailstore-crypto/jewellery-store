'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { DiamondWatermark } from '@/components/ui/DiamondWatermark';
import { Eye, EyeOff } from 'lucide-react';

type ViewState = 'login' | 'lost-password' | 'dashboard';

type TabType = 'dashboard' | 'orders' | 'addresses' | 'account-details';

export default function AccountPage() {
  const { user, login, logout, loading } = useAuth();
  const [view, setView] = useState<ViewState>('login');
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  
  // Form states
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [showLoginPass, setShowLoginPass] = useState(false);
  
  const [regEmail, setRegEmail] = useState('');
  
  const [lostEmail, setLostEmail] = useState('');

  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await login(loginUser, loginPass);
    if (!res.success) {
      setError(res.error || 'Login failed');
    }
  };

  if (loading) return <div className='min-h-screen bg-[#F7F5F0] flex items-center justify-center'>Loading...</div>;

  if (user) {
    return (
      <div className='min-h-screen bg-[#F7F5F0] relative font-sans pt-32 pb-20'>
        <DiamondWatermark opacity={0.05} className='inset-0 pointer-events-none' />
        <main className='max-w-6xl mx-auto px-6 relative z-10'>
          <h1 className='font-serif text-4xl mb-12 text-[#171716]'>My account</h1>
          
          <div className='flex flex-col md:flex-row gap-12'>
            {/* Sidebar Navigation */}
            <div className='w-full md:w-64 flex-shrink-0 space-y-6'>
              <nav className='flex flex-col gap-5 text-[15px]'>
                <button 
                  onClick={() => setActiveTab('dashboard')} 
                  className={`text-left transition-colors hover:text-[#B89A5A] ${activeTab === 'dashboard' ? 'text-[#171716] border-b border-[#171716] pb-1 w-fit' : 'text-gray-600'}`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => setActiveTab('orders')} 
                  className={`text-left transition-colors hover:text-[#B89A5A] ${activeTab === 'orders' ? 'text-[#171716] border-b border-[#171716] pb-1 w-fit' : 'text-gray-600'}`}
                >
                  Orders
                </button>
                <button 
                  onClick={() => setActiveTab('addresses')} 
                  className={`text-left transition-colors hover:text-[#B89A5A] ${activeTab === 'addresses' ? 'text-[#171716] border-b border-[#171716] pb-1 w-fit' : 'text-gray-600'}`}
                >
                  Addresses
                </button>
                <button 
                  onClick={() => setActiveTab('account-details')} 
                  className={`text-left transition-colors hover:text-[#B89A5A] ${activeTab === 'account-details' ? 'text-[#171716] border-b border-[#171716] pb-1 w-fit' : 'text-gray-600'}`}
                >
                  Account details
                </button>
                <button 
                  onClick={logout} 
                  className='text-left text-gray-600 transition-colors hover:text-[#B89A5A]'
                >
                  Log out
                </button>
              </nav>
            </div>

            {/* Main Content Area */}
            <div className='flex-1 text-[#171716]'>
              {activeTab === 'dashboard' && (
                <div className='space-y-6'>
                  <p className='text-[15px]'>
                    Hello <span className='font-medium'>{user.username || user.email}</span> (not <span className='font-medium'>{user.username || user.email}</span>? <button onClick={logout} className='underline underline-offset-4 hover:text-[#B89A5A] transition-colors'>Log out</button>)
                  </p>
                  <p className='text-[15px] leading-relaxed'>
                    From your account dashboard you can view your <button onClick={() => setActiveTab('orders')} className='underline underline-offset-4 hover:text-[#B89A5A] transition-colors'>recent orders</button>, 
                    manage your <button onClick={() => setActiveTab('addresses')} className='underline underline-offset-4 hover:text-[#B89A5A] transition-colors'>shipping and billing addresses</button>, and <button onClick={() => setActiveTab('account-details')} className='underline underline-offset-4 hover:text-[#B89A5A] transition-colors'>edit your password and account details</button>.
                  </p>
                </div>
              )}
              {activeTab === 'orders' && (
                <div>
                  <p className='text-gray-500'>You have no recent orders.</p>
                </div>
              )}
              {activeTab === 'addresses' && (
                <div>
                  <p className='text-gray-500 mb-4'>The following addresses will be used on the checkout page by default.</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div>
                      <h3 className='font-serif text-2xl mb-4'>Billing address</h3>
                      <button className='text-[#B89A5A] hover:text-[#171716] transition-colors'>Edit</button>
                      <p className='italic text-gray-500 mt-2'>You have not set up this type of address yet.</p>
                    </div>
                    <div>
                      <h3 className='font-serif text-2xl mb-4'>Shipping address</h3>
                      <button className='text-[#B89A5A] hover:text-[#171716] transition-colors'>Edit</button>
                      <p className='italic text-gray-500 mt-2'>You have not set up this type of address yet.</p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'account-details' && (
                <div>
                  <h3 className='font-serif text-2xl mb-6'>Account details</h3>
                  <p className='text-gray-500 mb-6'>Details for {user.email}</p>
                  {/* Add form fields for first name, last name, password change here in future */}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (view === 'lost-password') {
    return (
      <div className='min-h-screen bg-[#F7F5F0] relative font-sans pt-32 pb-20'>
        <DiamondWatermark opacity={0.05} className='inset-0 pointer-events-none' />
        <main className='max-w-2xl mx-auto px-6 relative z-10'>
          <h1 className='font-serif text-4xl mb-6 text-[#171716]'>Lost password</h1>
          <p className='text-gray-600 mb-8 leading-relaxed'>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
          <form className='space-y-6 max-w-md'>
            <div>
              <label className='block text-[15px] text-[#171716] mb-2'>Username or email <span className='text-red-500'>*</span></label>
              <input 
                type='text' 
                value={lostEmail}
                onChange={e => setLostEmail(e.target.value)}
                className='w-full border border-gray-300 bg-white py-2 px-3 focus:outline-none focus:border-[#171716] transition-colors'
                required
              />
            </div>
            <button type='button' className='bg-[#171716] text-white px-6 py-3 text-[15px] transition-colors hover:bg-[#2A211C]'>
              Reset password
            </button>
          </form>
          <button onClick={() => setView('login')} className='mt-8 text-sm text-gray-500 hover:text-[#171716] underline underline-offset-4'>Back to login</button>
        </main>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-[#F7F5F0] relative font-sans pt-32 pb-20'>
      <DiamondWatermark opacity={0.05} className='inset-0 pointer-events-none' />
      <main className='max-w-4xl mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Login Section */}
          <div>
            <h2 className='font-serif text-3xl mb-6 text-[#171716]'>Login</h2>
            <div className='bg-white p-8 border border-gray-100'>
              <form onSubmit={handleLogin} className='space-y-6'>
                <div>
                  <label className='block text-[15px] text-[#171716] mb-2'>Username or email address <span className='text-red-500'>*</span></label>
                  <input 
                    type='text' 
                    value={loginUser}
                    onChange={e => setLoginUser(e.target.value)}
                    className='w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-[#171716] transition-colors'
                    required
                  />
                </div>
                <div>
                  <label className='block text-[15px] text-[#171716] mb-2'>Password <span className='text-red-500'>*</span></label>
                  <div className='relative'>
                    <input 
                      type={showLoginPass ? 'text' : 'password'} 
                      value={loginPass}
                      onChange={e => setLoginPass(e.target.value)}
                      className='w-full border border-gray-300 py-2 px-3 pr-10 focus:outline-none focus:border-[#171716] transition-colors'
                      required
                    />
                    <button 
                      type='button'
                      onClick={() => setShowLoginPass(!showLoginPass)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                    >
                      {showLoginPass ? <EyeOff className='w-4 h-4' /> : <Eye className='w-4 h-4' />}
                    </button>
                  </div>
                </div>
                
                {error && <p className='text-red-500 text-sm'>{error}</p>}

                <div className='flex items-center gap-4'>
                  <button type='submit' className='bg-[#171716] text-white px-8 py-3 text-[15px] transition-colors hover:bg-[#2A211C]'>
                    Log in
                  </button>
                  <label className='flex items-center gap-2 text-sm text-gray-600 cursor-pointer'>
                    <input type='checkbox' className='rounded-sm border-gray-300 text-[#171716] focus:ring-[#171716]' />
                    Remember me
                  </label>
                </div>
                
                <div className='pt-2'>
                  <button 
                    type='button' 
                    onClick={() => setView('lost-password')} 
                    className='text-sm text-[#171716] hover:text-[#B89A5A] transition-colors underline underline-offset-4'
                  >
                    Lost your password?
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Register Section */}
          <div>
            <h2 className='font-serif text-3xl mb-6 text-[#171716]'>Register</h2>
            <div className='bg-white p-8 border border-gray-100'>
              <form className='space-y-6'>
                <div>
                  <label className='block text-[15px] text-[#171716] mb-2'>Email address <span className='text-red-500'>*</span></label>
                  <input 
                    type='email' 
                    value={regEmail}
                    onChange={e => setRegEmail(e.target.value)}
                    className='w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-[#171716] transition-colors'
                    required
                  />
                </div>
                
                <p className='text-[15px] text-gray-600 leading-relaxed'>
                  A link to set a new password will be sent to your email address.
                </p>
                
                <p className='text-[15px] text-gray-600 leading-relaxed'>
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='underline underline-offset-4 hover:text-[#171716] cursor-pointer'>privacy policy</span>.
                </p>

                <button type='button' className='bg-[#171716] text-white px-8 py-3 text-[15px] transition-colors hover:bg-[#2A211C]'>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}