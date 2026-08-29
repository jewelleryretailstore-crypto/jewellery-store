"use client";

import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/FadeIn";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { ImageGridAnimation } from "@/components/animations/ImageGridAnimation";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#faf9f6]">
      <section className="relative w-full min-h-screen flex flex-col md:flex-row pt-24 md:pt-0">
        
        {/* Left Side: Editorial Image */}
        <div className="flex-1 relative hidden md:block h-screen sticky top-0 overflow-hidden bg-black/10">
          <ImageGridAnimation 
            imageUrl="https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?q=80&w=1500&auto=format&fit=crop"
            rows={15}
            cols={10}
            pattern={13}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 relative">
          <div className="w-full max-w-lg">
            <FadeIn delay={0.2} direction="up">
              <h4 className="uppercase tracking-widest text-[10px] md:text-xs mb-4 text-[#d4af37] font-medium">Private Concierge</h4>
              <h1 className="font-serif text-4xl md:text-5xl mb-6 text-[#111111]">Contact Us</h1>
              <p className="font-light text-gray-500 mb-12 leading-relaxed">
                Whether you wish to arrange a private viewing, request a bespoke commission, or simply seek advice on a piece, our concierge team is at your disposal.
              </p>
            </FadeIn>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <StaggerChildren className="space-y-8">
                <StaggerItem>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 relative group">
                      <Input type="text" id="firstName" placeholder=" " required className="peer" />
                      <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#d4af37] uppercase tracking-widest pointer-events-none">First Name</label>
                    </div>
                    <div className="flex-1 relative group">
                      <Input type="text" id="lastName" placeholder=" " required className="peer" />
                      <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#d4af37] uppercase tracking-widest pointer-events-none">Last Name</label>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative group">
                    <Input type="email" id="email" placeholder=" " required className="peer" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#d4af37] uppercase tracking-widest pointer-events-none">Email Address</label>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative group">
                    <select id="inquiry" className="flex w-full bg-transparent border-b border-gray-300 py-3 text-sm transition-colors duration-500 text-[#111111] focus:outline-none focus:border-[#d4af37] focus:ring-0 appearance-none font-light peer" required defaultValue="">
                      <option value="" disabled className="text-gray-400 hidden"> </option>
                      <option value="bespoke">Bespoke Commission</option>
                      <option value="appointment">Book an Appointment</option>
                      <option value="support">Order Support</option>
                      <option value="other">General Inquiry</option>
                    </select>
                    <label htmlFor="inquiry" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#d4af37] uppercase tracking-widest pointer-events-none">Nature of Inquiry</label>
                    {/* Custom Arrow */}
                    <div className="absolute right-0 top-4 pointer-events-none text-gray-400 peer-focus:text-[#d4af37] transition-colors">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative group pt-4">
                    <Textarea id="message" placeholder=" " required className="peer" />
                    <label htmlFor="message" className="absolute left-0 top-1 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#d4af37] uppercase tracking-widest pointer-events-none">Your Message</label>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <button type="submit" className="group relative w-full bg-[#111111] text-white py-5 mt-4 uppercase tracking-widest text-sm transition-all duration-500 rounded-[5px] overflow-hidden border border-[#d4af37]/30 hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <span className="relative z-10">Send Inquiry</span>
                  </button>
                </StaggerItem>
              </StaggerChildren>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
