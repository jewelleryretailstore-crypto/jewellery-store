"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingBag, Menu, X, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Monogram } from "@/components/ui/Monogram";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "All Jewellery", href: "/collections" },
  { name: "Gold", href: "/category/gold" },
  { name: "Diamond", href: "/category/diamonds" },
  { name: "Earrings", href: "/category/earrings" },
  { name: "Daily Wear", href: "/category/daily-wear" },
  { name: "Gemstone", href: "/category/gemstone" },
  { name: "Wedding", href: "/bridal" },
  { name: "Gifting", href: "/category/gifting" },
  { name: "Under 50K", href: "/category/under-50k" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { wishlist } = useWishlist();
  const { cart, setIsCartOpen } = useCart();

  // Pages with full-bleed dark hero images behind the header
  const hasDarkHero = pathname === "/" || pathname === "/bridal" || pathname === "/lab-grown-diamonds";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isSolid = isScrolled || isHovered || !hasDarkHero;

  return (
    <>
      <header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 w-full z-40 transition-all duration-500 font-sans ${
          isSolid ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent border-b border-white/20"
        }`}
      >
        {/* Top Row: Icons and Logo */}
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Mobile Hamburger (Left) */}
          <button
            className={`lg:hidden p-2 -ml-2 transition-colors duration-500 ${isSolid ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Left Area (Empty to maintain flex-between balance) */}
          <div className="hidden lg:flex w-1/3"></div>

          {/* Center Logo */}
          <div className="flex-shrink-0 text-center w-1/3 flex justify-center">
            <Link href="/">
              <h1 className={`font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase transition-colors duration-500 ${isSolid ? 'text-[#171716]' : 'text-white'}`}>
                Lumière
              </h1>
            </Link>
          </div>

          {/* Right Icons */}
          <div className={`flex items-center justify-end space-x-5 lg:space-x-6 w-1/3 transition-colors duration-500 ${isSolid ? 'text-gray-800' : 'text-white'}`}>
            <button className="hover:text-[#B89A5A] transition-colors hidden sm:block">
              <Search className="w-[18px] h-[18px] stroke-[1.5]" />
            </button>
            <Link href="/account" className="hover:text-[#B89A5A] transition-colors hidden sm:block">
              <User className="w-[18px] h-[18px] stroke-[1.5]" />
            </Link>
            <button className="hover:text-[#B89A5A] transition-colors hidden sm:block relative">
              <Heart className="w-[18px] h-[18px] stroke-[1.5]" />
              {wishlist.length > 0 && (
                <span className={`absolute -top-1.5 -right-2 text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-medium transition-colors duration-500 ${isSolid ? 'bg-[#B89A5A] text-white' : 'bg-white text-[#171716]'}`}>
                  {wishlist.length}
                </span>
              )}
            </button>
            <button onClick={() => setIsCartOpen(true)} className="hover:text-[#B89A5A] transition-colors relative">
              <ShoppingBag className="w-[18px] h-[18px] stroke-[1.5]" />
              {(cart?.contents?.nodes?.length || 0) > 0 && (
                <span className={`absolute -top-1.5 -right-2 text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-medium transition-colors duration-500 ${isSolid ? 'bg-[#B89A5A] text-white' : 'bg-white text-[#171716]'}`}>
                  {cart?.contents?.nodes?.reduce((acc, item) => acc + item.quantity, 0) || 0}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className={`hidden lg:block w-full border-t transition-colors duration-500 ${isSolid ? 'border-gray-100' : 'border-white/20'}`} />

        {/* Bottom Row: Navigation Links (Desktop Only) */}
        <nav className={`hidden lg:flex justify-center space-x-10 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors relative group hover:text-[#B89A5A] ${isSolid ? 'text-gray-800' : 'text-white'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#B89A5A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Menu Overlay (Moved outside header to fix backdrop-filter stacking context) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#171716]/60 z-50 lg:hidden backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-screen min-h-[100dvh] w-[85%] max-w-sm bg-white z-[100] p-6 flex flex-col shadow-2xl lg:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <Monogram className="w-6 h-6 text-[#171716] border-[#171716]/30 text-sm [&>div]:bg-[#171716]" />
                  <h1 className="font-serif text-2xl tracking-[0.2em] uppercase text-[#171716]">Lumière</h1>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium tracking-[0.15em] uppercase text-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
