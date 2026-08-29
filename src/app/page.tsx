import Link from "next/link";
import Image from "next/image";
import { Sparkles, Gem, Fingerprint } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem, ScaleImage } from "@/components/animations/FadeIn";
import { HeroCentered } from "@/components/ui/HeroCentered";
import { MOCK_PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <HeroCentered 
        imageSrc="/images/hero image.png"
        imageAlt="Luxury Jewellery"
        imagePosition="object-[90%_center]"
        title={<>Jewellery Made to <br className="hidden md:block"/> Become Your Story.</>}
        subtitle="Timeless gold, refined silver and lab-grown diamonds, crafted for life's most meaningful moments."
        primaryButtonText="Shop Jewellery"
        primaryButtonLink="/category/jewellery"
        secondaryButtonText="Explore Collections"
        secondaryButtonLink="/collections"
      />

      {/* TRUST BAR */}
      <div className="w-full bg-[#111111] border-t border-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-gray-800">
            <div className="flex flex-col items-center justify-center">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#d4af37] font-medium mb-1">Certified Diamonds</span>
              <span className="text-[10px] text-gray-400 font-light hidden md:block">Independent grading available</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#d4af37] font-medium mb-1">18K Gold & Platinum</span>
              <span className="text-[10px] text-gray-400 font-light hidden md:block">Authenticity guaranteed</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#d4af37] font-medium mb-1">Secure Payments</span>
              <span className="text-[10px] text-gray-400 font-light hidden md:block">Protected checkout</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#d4af37] font-medium mb-1">Lifetime Support</span>
              <span className="text-[10px] text-gray-400 font-light hidden md:block">Care & repair assistance</span>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY GRID */}
      <section className="py-24 px-6 container mx-auto bg-[#faf9f6]">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-[#111111]">
            Shop by Category
          </h2>
        </FadeIn>
        
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Rings", img: "/images/RR-039-01Rose-_view3.webp" },
            { name: "Earrings", img: "/images/L2-27_10011LBWhite-_view3.webp" },
            { name: "Necklaces", img: "/images/GJSPD-197-01White-_view5.webp" },
            { name: "Bracelets", img: "/images/Gem 01_Yellow_Metal 02_0_1_1_1(1).webp" },
          ].map((cat) => (
            <StaggerItem key={cat.name}>
              <Link href={`/category/${cat.name.toLowerCase()}`} className="group cursor-pointer block relative flex flex-col">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-[#e6dfd1]">
                  <Image 
                    src={cat.img} 
                    alt={cat.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-sans uppercase tracking-widest text-sm transition-colors group-hover:text-[#d4af37]">
                    {cat.name}
                  </h3>
                  <span className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-[#d4af37]">&rarr;</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* LIFESTYLE QUOTE BLOCK */}
      <section className="relative py-32 overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 opacity-50">
          <Image 
            src="/images/lifestyle_bg.jpg" 
            alt="Jewellery Lifestyle"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" /> {/* Dark gradient overlay for text readability */}
        <div className="container relative z-10 mx-auto px-6 text-center text-white">
          <FadeIn once={false} direction="up">
            <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
              Made for the moments<br />that matter.
            </h2>
            <Link 
              href="/collections"
              className="inline-flex items-center justify-center uppercase tracking-widest text-[11px] font-medium transition-colors hover:text-[#d4af37]"
            >
              <span className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-[#d4af37] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-500">
                Discover the Collection &rarr;
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FEATURED JEWELLERY */}
      <section className="py-24 px-6 container mx-auto bg-[#faf9f6]">
        <FadeIn once={false}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#111111]">
              Featured Jewellery
            </h2>
            <Link href="/collections" className="text-[11px] font-medium uppercase tracking-widest text-gray-500 hover:text-[#111111] transition-colors mb-2">
              View All
            </Link>
          </div>
        </FadeIn>
        
        <StaggerChildren once={false} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.slice(0, 4).map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* LAB GROWN DIAMONDS FEATURE */}
      <section className="bg-[#faf9f6] text-[#111111] py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn once={false} direction="up" delay={0.1} className="relative aspect-[4/5] md:aspect-square w-full">
            <Image 
              src="/images/diamond.webp" 
              alt="Lab Grown Diamonds" 
              fill 
              className="object-cover"
            />
          </FadeIn>
            <FadeIn once={false} direction="up" delay={0.2} className="flex flex-col justify-center max-w-xl mx-auto md:mx-0">
              <h4 className="font-sans uppercase tracking-widest text-sm text-[#d4af37] mb-4">Innovation</h4>
              <h2 className="font-serif text-4xl mb-6">Real diamonds. A modern origin.</h2>
              <p className="font-sans font-light text-gray-600 mb-8 leading-relaxed">
                Lab-grown diamonds are real diamonds with the same fundamental chemical composition and crystal structure as mined diamonds. They are created using advanced technology rather than extracted from the earth.
              </p>
              <Link 
                href="/lab-grown-diamonds"
              className="inline-block border-b border-black pb-1 uppercase tracking-widest text-sm hover:text-yellow-700 hover:border-yellow-700 transition-colors"
            >
              Discover the Collection
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CRAFTED WITH INTENTION */}
      <section className="py-24 px-6 bg-white text-center overflow-hidden">
        <div className="container mx-auto">
          <FadeIn once={false} direction="up" delay={0.1}>
            <h4 className="font-sans uppercase tracking-widest text-xs text-[#d4af37] mb-4">Our Promise</h4>
            <h2 className="font-serif text-3xl md:text-5xl mb-16 text-[#111111] relative inline-block">
              Crafted With Intention
            </h2>
          </FadeIn>
          <StaggerChildren once={false} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <StaggerItem>
              <div className="bg-[#faf9f6] border border-[#d4af37]/20 p-10 h-full rounded-[2px] transition-all duration-700 hover:-translate-y-3 hover:border-[#d4af37]/60 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] group">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-white flex items-center justify-center border border-gray-200 group-hover:border-[#d4af37]/50 transition-colors duration-700">
                  <Sparkles className="w-5 h-5 text-[#d4af37]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-6 text-[#111111] group-hover:text-yellow-700 transition-colors duration-500">Gold</h3>
                <p className="font-light text-gray-500 text-sm leading-loose text-justify">
                  We work exclusively with 18k solid gold and platinum, ensuring every piece is an enduring heirloom that will never tarnish or fade over generations.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#faf9f6] border border-[#d4af37]/20 p-10 h-full rounded-[2px] transition-all duration-700 hover:-translate-y-3 hover:border-[#d4af37]/60 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] group">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-white flex items-center justify-center border border-gray-200 group-hover:border-[#d4af37]/50 transition-colors duration-700">
                  <Gem className="w-5 h-5 text-[#d4af37]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-6 text-[#111111] group-hover:text-yellow-700 transition-colors duration-500">Diamonds</h3>
                <p className="font-light text-gray-500 text-sm leading-loose text-justify">
                  Hand-selected for their exceptional brilliance, our diamonds are responsibly sourced and independently certified for maximum visual transparency.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#faf9f6] border border-[#d4af37]/20 p-10 h-full rounded-[2px] transition-all duration-700 hover:-translate-y-3 hover:border-[#d4af37]/60 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] group">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-white flex items-center justify-center border border-gray-200 group-hover:border-[#d4af37]/50 transition-colors duration-700">
                  <Fingerprint className="w-5 h-5 text-[#d4af37]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-6 text-[#111111] group-hover:text-yellow-700 transition-colors duration-500">Craft</h3>
                <p className="font-light text-gray-500 text-sm leading-loose text-justify">
                  Created by master jewellers using a blend of traditional hand-finishing techniques and state-of-the-art precision technology for a flawless finish.
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* WORN. LOVED. REMEMBERED. */}
      <section className="py-24 px-6 bg-[#faf9f6]">
        <div className="container mx-auto text-center">
          <FadeIn once={false}>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#111111]">
              Worn. Loved. Remembered.
            </h2>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-serif text-xl md:text-2xl text-gray-700 italic max-w-3xl mx-auto mb-6">
              "The ring looked even better in person. The whole experience felt incredibly personal and considered from start to finish."
            </p>
            <p className="font-sans text-[11px] uppercase tracking-widest text-gray-500 font-medium">
              — Verified Customer
            </p>
          </FadeIn>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square">
              <Image src="/images/RR-039-01Rose-_view5.webp" alt="Customer lifestyle" fill className="object-cover" />
            </div>
            <div className="relative aspect-square">
              <Image src="/images/RR-039-01White-_view5.webp" alt="Customer lifestyle" fill className="object-cover" />
            </div>
            <div className="relative aspect-square hidden md:block">
              <Image src="/images/RR-039-01Yellow-_view2.webp" alt="Customer lifestyle" fill className="object-cover" />
            </div>
            <div className="relative aspect-square hidden md:block">
              <Image src="/images/Gem 01_White_Metal 02_0_1_1_1.webp" alt="Customer lifestyle" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* BESPOKE */}
      <section className="relative h-[60vh] w-full flex items-center bg-[#faf9f6] overflow-hidden">
        {/* Subtle geometric lines / light watermark in background */}
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center text-[#111111]">
          <FadeIn once={false} direction="up">
            <h4 className="font-sans uppercase tracking-widest text-[11px] text-[#d4af37] mb-4">Bespoke</h4>
            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
              Your story. Your jewellery.
            </h2>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto font-light text-sm">
              Work directly with our master jewellers to create a one-of-a-kind piece that perfectly captures your vision and sentiment.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border border-[#d4af37]/30 text-[#111111] px-10 py-4 uppercase tracking-widest text-[11px] font-medium transition-colors hover:border-[#d4af37] rounded-[5px]"
            >
              Book an Appointment
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
