'use client';

import { Search, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Left Navigation */}
        <nav className="header-nav">
          <ul className="nav-list text-sans">
            <li className="nav-item">
              <Link href="#">Engagement</Link>
            </li>
            <li className="nav-item">
              <Link href="#">Wedding</Link>
            </li>
            <li className="nav-item">
              <Link href="#">Fine Jewelry</Link>
            </li>
            <li className="nav-item">
              <Link href="#">Custom</Link>
            </li>
          </ul>
        </nav>

        {/* Logo */}
        <div className="header-logo">
          <Link href="/">
            <h1 className="logo-text">LUMIERA</h1>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="header-actions">
          <button className="action-btn" aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="action-btn" aria-label="Account">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="action-btn" aria-label="Cart">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
