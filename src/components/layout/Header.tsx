"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingBag, Menu, X, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Monogram } from "@/components/ui/Monogram";

const navLinks = [
  { name: "New In", href: "/category/new-in" },
  { name: "Engagement", href: "/bridal" },
  { name: "Wedding", href: "/bridal" },
  { name: "Jewellery", href: "/collections" },
  { name: "Diamonds", href: "/lab-grown-diamonds" },
  { name: "Bespoke", href: "/about" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

          {/* Desktop Left Icons (Location / Appointment) */}
          <div className={`hidden lg:flex items-center space-x-6 w-1/3 transition-colors duration-500 ${isSolid ? 'text-gray-800' : 'text-white'}`}>
            <Link href="/contact" className="flex items-center space-x-2 hover:text-[#d4af37] transition-colors group">
              <MapPin className="w-4 h-4 stroke-[1.5]" />
              <span className="text-[10px] uppercase tracking-widest group-hover:text-[#d4af37]">Showrooms</span>
            </Link>
            <Link href="/contact" className="flex items-center space-x-2 hover:text-[#d4af37] transition-colors group">
              <Calendar className="w-4 h-4 stroke-[1.5]" />
              <span className="text-[10px] uppercase tracking-widest group-hover:text-[#d4af37]">Appointment</span>
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 text-center w-1/3 flex justify-center">
            <Link href="/">
              <h1 className={`font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase transition-colors duration-500 ${isSolid ? 'text-[#111111]' : 'text-white'}`}>
                Lumière
              </h1>
            </Link>
          </div>

          {/* Right Icons */}
          <div className={`flex items-center justify-end space-x-5 lg:space-x-6 w-1/3 transition-colors duration-500 ${isSolid ? 'text-gray-800' : 'text-white'}`}>
            <button className="hover:text-[#d4af37] transition-colors hidden sm:block">
              <Search className="w-[18px] h-[18px] stroke-[1.5]" />
            </button>
            <button className="hover:text-[#d4af37] transition-colors hidden sm:block">
              <User className="w-[18px] h-[18px] stroke-[1.5]" />
            </button>
            <button className="hover:text-[#d4af37] transition-colors hidden sm:block">
              <Heart className="w-[18px] h-[18px] stroke-[1.5]" />
            </button>
            <button className="hover:text-[#d4af37] transition-colors relative">
              <ShoppingBag className="w-[18px] h-[18px] stroke-[1.5]" />
              <span className={`absolute -top-1.5 -right-2 text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-medium transition-colors duration-500 ${isSolid ? 'bg-[#d4af37] text-white' : 'bg-white text-black'}`}>
                0
              </span>
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
              className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors relative group hover:text-[#d4af37] ${isSolid ? 'text-gray-800' : 'text-white'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
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
              className="fixed inset-0 bg-black/60 z-50 lg:hidden backdrop-blur-sm"
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
                  <Monogram className="w-6 h-6 text-[#111111] border-[#111111]/30 text-sm [&>div]:bg-[#111111]" />
                  <h1 className="font-serif text-2xl tracking-[0.2em] uppercase text-[#111111]">Lumière</h1>
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
              <div className="flex flex-col gap-4 pt-8 border-t border-[#e6dfd1]">
                <Link href="/contact" className="flex items-center space-x-3 text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">Showrooms</span>
                </Link>
                <Link href="/contact" className="flex items-center space-x-3 text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">Book Appointment</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
