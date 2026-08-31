import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DiamondBackground } from "@/components/ui/diamond-background";
import { Monogram } from "@/components/ui/Monogram";

export default function Footer() {
  return (
    <footer className="relative text-[#F7F5F0] bg-[#171716] overflow-hidden pt-20 pb-10">
      <DiamondBackground className="absolute inset-0 z-0" diamondSize={50} diamondMargin={1.5} />
      <div className="container mx-auto px-6 relative z-10 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <Monogram />
              <h2 className="font-serif text-2xl text-white uppercase tracking-widest">Lumière</h2>
            </div>
            <p className="text-gray-400 mb-8 font-serif italic text-sm">
              Fine jewellery, thoughtfully made.
            </p>
            <form className="relative max-w-sm mt-4 group">
              <input
                type="email"
                id="newsletter-email"
                placeholder="Email Address"
                className="peer w-full bg-transparent border-b border-gray-600 focus:border-[#B89A5A] py-2 text-xs text-white placeholder-transparent outline-none transition-colors duration-500 font-sans pr-10"
                required
              />
              <label 
                htmlFor="newsletter-email" 
                className="absolute left-0 -top-3 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#B89A5A] uppercase tracking-widest pointer-events-none"
              >
                Join our world
              </label>
              <button type="submit" className="absolute right-0 top-2 text-gray-400 hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Links Grid */}
          <div>
            <h3 className="font-sans font-semibold uppercase tracking-widest text-xs mb-6 text-white">
              Customer Care
            </h3>
            <ul className="space-y-4 font-sans text-gray-200 text-sm font-light">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link href="/warranty" className="hover:text-white transition-colors">Warranty</Link></li>
              <li><Link href="/ring-size-guide" className="hover:text-white transition-colors">Ring Size Guide</Link></li>
              <li><Link href="/care-guide" className="hover:text-white transition-colors">Care Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold uppercase tracking-widest text-xs mb-6 text-white">
              The Brand
            </h3>
            <ul className="space-y-4 font-sans text-gray-200 text-sm font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/craftsmanship" className="hover:text-white transition-colors">Craftsmanship</Link></li>
              <li><Link href="/diamonds" className="hover:text-white transition-colors">Diamonds</Link></li>
              <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/journal" className="hover:text-white transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold uppercase tracking-widest text-xs mb-6 text-white">
              Trust
            </h3>
            <ul className="space-y-4 font-sans text-gray-200 text-sm font-light">
              <li><Link href="/payments" className="hover:text-white transition-colors">Secure Payments</Link></li>
              <li><Link href="/certificates" className="hover:text-white transition-colors">Certified Diamonds</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-800 text-[10px] text-gray-500 font-sans uppercase tracking-widest gap-6">
          <div className="flex flex-col space-y-2 max-w-sm">
            <span className="font-semibold text-gray-300">Lumière & Co. Ltd.</span>
            <span>Registered in England & Wales: 14592033</span>
            <span>concierge@lumiere.com | +44 (0) 20 7123 4567</span>
          </div>
          
          <div className="flex flex-col items-start md:items-end space-y-4">
            <div className="flex space-x-6">
              <Link href="#" className="text-[#B89A5A] hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-[#B89A5A] hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-[#B89A5A] hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </div>
            <span>&copy; {new Date().getFullYear()} Lumière & Co. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
