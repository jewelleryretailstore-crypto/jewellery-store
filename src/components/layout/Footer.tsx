import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DiamondBackground } from "@/components/ui/diamond-background";
import { Monogram } from "@/components/ui/Monogram";

export default function Footer() {
  return (
    <footer className="relative text-[#F7F5F0] bg-[#171716] overflow-hidden pt-20 pb-10">
      <DiamondBackground className="absolute inset-0 z-0" diamondSize={50} diamondMargin={1.5} />
      <div className="container mx-auto px-6 relative z-10 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto">
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-12 mt-12 border-t border-gray-800 text-[10px] text-gray-400 font-sans tracking-wider gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-2xl">
            <div className="flex flex-col space-y-1">
              <span className="font-semibold text-gray-200 uppercase tracking-widest mb-2">Lumière & Co.</span>
              <span>Registered in England & Wales: 14592033</span>
              <span>742 Rue de la Paix, Suite 100, Paris, 75002</span>
            </div>
            
            <div className="flex flex-col space-y-1">
              <span className="font-semibold text-gray-200 uppercase tracking-widest mb-2">Customer Service</span>
              <a href="mailto:concierge@lumiere.com" className="hover:text-white transition-colors">concierge@lumiere.com</a>
              <a href="tel:+442071234567" className="hover:text-white transition-colors">+44 (0) 20 7123 4567</a>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end space-y-6 w-full md:w-auto">
            {/* Socials & Payments */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full justify-between md:justify-end">
              <div className="flex space-x-6">
                <Link href="#" className="text-[#B89A5A] hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link>
                <Link href="#" className="text-[#B89A5A] hover:text-white transition-colors" aria-label="Pinterest">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.5-.1-1-.2-2.4 0-3.4.2-1 1.5-6.5 1.5-6.5s-.4-.8-.4-1.9c0-1.8 1-3.2 2.3-3.2 1 0 1.6.8 1.6 1.8 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.8-2.3 3.8-5.5 0-2.8-2-4.8-4.9-4.8-3.4 0-5.3 2.5-5.3 5.1 0 1 .4 2.1.9 2.6.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.4-.1.2-.2.2-.4.1-1.5-.7-2.4-3-2.4-4.8 0-3.9 2.8-7.5 8.2-7.5 4.3 0 7.7 3.1 7.7 7.2 0 4.3-2.7 7.8-6.5 7.8-1.3 0-2.5-.7-2.9-1.5l-.8 3.1c-.3 1.1-1.1 2.4-1.6 3.2 1.1.3 2.2.5 3.5.5 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
                </Link>
              </div>
              
              <div className="flex gap-3 text-[9px] uppercase tracking-[0.2em] opacity-70">
                <span>Visa</span>
                <span>·</span>
                <span>Mastercard</span>
                <span>·</span>
                <span>Amex</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 uppercase">
              <span>Worldwide Shipping Available</span>
              <span className="hidden md:inline">|</span>
              <span>&copy; {new Date().getFullYear()} Lumière & Co. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
