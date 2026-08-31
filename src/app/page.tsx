import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem, ScaleImage } from "@/components/animations/FadeIn";
import { HeroCentered } from "@/components/ui/HeroCentered";
import { FeatureCarousel } from "@/components/ui/FeatureCarousel";
import { getProducts } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";

export default async function Home() {
  const allProducts = await getProducts();
  const newArrivals = allProducts.slice(0, 4);
  const bestSellers = allProducts.slice(1, 5);

  const categories = [
    { name: "Rings", image: "/images/RR-039-01White-_view5.webp", href: "/category/rings" },
    { name: "Earrings", image: "/images/EAR-001.webp", href: "/category/earrings" },
    { name: "Necklaces", image: "/images/NECK-001.webp", href: "/category/necklaces" },
    { name: "Bracelets", image: "/images/BRACE-001.webp", href: "/category/bracelets" },
    { name: "Bridal", image: "/images/Gem 01_White_Metal 02_0_1_1_1.webp", href: "/bridal" },
    { name: "Gifts", image: "/images/gift-box.webp", href: "/gifts" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
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
      <div className="w-full bg-[#171716] border-t border-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-gray-800">
            <Link href="/diamonds" className="flex flex-col items-center justify-center group">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#B89A5A] font-medium mb-1">Certified Diamonds</span>
              <span className="text-[10px] text-gray-400 font-light hidden md:flex items-center gap-1 group-hover:text-white transition-colors">
                Learn how our diamonds are graded <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/craftsmanship" className="flex flex-col items-center justify-center group">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#B89A5A] font-medium mb-1">18K Gold & Platinum</span>
              <span className="text-[10px] text-gray-400 font-light hidden md:flex items-center gap-1 group-hover:text-white transition-colors">
                Explore our materials <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/payments" className="flex flex-col items-center justify-center group">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#B89A5A] font-medium mb-1">Secure Payments</span>
              <span className="text-[10px] text-gray-400 font-light hidden md:flex items-center gap-1 group-hover:text-white transition-colors">
                Payment & security <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/warranty" className="flex flex-col items-center justify-center group">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#B89A5A] font-medium mb-1">Lifetime Support</span>
              <span className="text-[10px] text-gray-400 font-light hidden md:flex items-center gap-1 group-hover:text-white transition-colors">
                Our care promise <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* SHOP BY CATEGORY */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <FadeIn>
            <div className="flex justify-between items-end mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-[#171716]">Shop by Category</h2>
              <Link href="/collections" className="text-xs uppercase tracking-widest text-gray-500 hover:text-[#B89A5A] transition-colors border-b border-transparent hover:border-[#B89A5A] pb-1">
                View All
              </Link>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <FadeIn key={cat.name} delay={idx * 0.1}>
                <Link href={cat.href} className="group flex flex-col items-center">
                  <div className="w-full aspect-square rounded-full overflow-hidden bg-[#F7F5F0] mb-4 relative shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg border-2 border-transparent group-hover:border-[#B89A5A]">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <span className="font-sans text-xs uppercase tracking-widest font-medium text-gray-700 group-hover:text-[#B89A5A] transition-colors">{cat.name}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS GRID */}
      <section className="py-16 md:py-24 px-6 container mx-auto bg-[#F7F5F0]">
        <FadeIn>
          <div className="flex flex-col items-center mb-12 text-center">
            <h4 className="font-sans uppercase tracking-widest text-[10px] text-[#B89A5A] mb-3">Just Landed</h4>
            <h2 className="font-serif text-3xl md:text-4xl text-[#171716] mb-6">New Arrivals</h2>
          </div>
        </FadeIn>
        
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {newArrivals.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerChildren>
        
        <div className="flex justify-center mt-12">
          <Link 
            href="/category/new-in"
            className="inline-flex items-center justify-center uppercase tracking-widest text-[11px] font-medium transition-colors hover:text-[#B89A5A] group"
          >
            <span className="relative flex items-center whitespace-nowrap gap-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-[#B89A5A] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-500">
              View All New Arrivals <ArrowRight className="w-3 h-3 shrink-0 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CURATED COLLECTIONS (BANNER GRID) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
            {/* Left Banner */}
            <Link href="/bridal" className="relative group overflow-hidden block h-full rounded-none">
              <Image 
                src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop" 
                alt="Bridal Collection" 
                fill 
                className="object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-[10px] uppercase tracking-widest text-white/80 font-medium mb-2 block">For The Big Day</span>
                <h3 className="font-serif text-3xl text-white mb-4">The Bridal Edit</h3>
                <span className="inline-flex items-center text-xs uppercase tracking-widest text-white font-medium group-hover:text-[#B89A5A] transition-colors border-b border-white pb-1 group-hover:border-[#B89A5A]">
                  Explore Collection
                </span>
              </div>
            </Link>

            {/* Right Top/Bottom Banners */}
            <div className="flex flex-col gap-4 h-full">
              <Link href="/collections/everyday" className="relative group overflow-hidden block h-1/2 rounded-none">
                <Image 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop" 
                  alt="Everyday Essentials" 
                  fill 
                  className="object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="font-serif text-2xl text-white mb-3">Everyday Essentials</h3>
                  <span className="inline-flex items-center text-xs uppercase tracking-widest text-white font-medium group-hover:text-[#B89A5A] transition-colors">
                    Shop Now <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>

              <Link href="/gifts" className="relative group overflow-hidden block h-1/2 rounded-none">
                <Image 
                  src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Gifting" 
                  fill 
                  className="object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="font-serif text-2xl text-white mb-3">Gifts Under $1,000</h3>
                  <span className="inline-flex items-center text-xs uppercase tracking-widest text-white font-medium group-hover:text-[#B89A5A] transition-colors">
                    Shop Gifts <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLERS GRID */}
      <section className="py-16 md:py-24 px-6 container mx-auto bg-[#F7F5F0]">
        <FadeIn>
          <div className="flex flex-col items-center mb-12 text-center">
            <h4 className="font-sans uppercase tracking-widest text-[10px] text-[#B89A5A] mb-3">Customer Favourites</h4>
            <h2 className="font-serif text-3xl md:text-4xl text-[#171716] mb-6">Bestsellers</h2>
          </div>
        </FadeIn>
        
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bestSellers.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* 3D FEATURE CAROUSEL */}
      <FeatureCarousel 
        title={
          <span className="text-[#F7F5F0]">
            Styling 101 With <span className="italic text-[#B89A5A]">Diamonds</span>
          </span>
        }
        subtitle="Trendsetting diamond jewellery suited for every occasion. A curated mix of solid gold, refined silver, and conflict-free stones."
        images={[
          { src: "/images/RR-039-01White-_view5.webp", alt: "Diamond Ring" },
          { src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop", alt: "Gold Jewelry" },
          { src: "/images/EAR-001.webp", alt: "Diamond Earrings" },
          { src: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=600&auto=format&fit=crop", alt: "Bridal Wear" },
          { src: "/images/NECK-001.webp", alt: "Silver Necklace" },
        ]}
      />

      {/* MINIMAL LAB GROWN BANNER */}
      <section className="py-16 bg-[#FCFBF8] border-t border-gray-100 text-[#171716]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl mb-8 md:mb-0">
              <h2 className="font-serif text-2xl md:text-3xl mb-4">Lumière Lab-Grown Diamonds</h2>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Identical chemical composition, zero mining. Discover our conscious collection of premium lab-grown diamonds, meticulously crafted for modern luxury.
              </p>
            </div>
            <Link 
              href="/lab-grown-diamonds"
              className="inline-flex items-center justify-center uppercase tracking-widest text-[11px] font-medium transition-colors hover:bg-gray-100 text-[#171716] group shrink-0 border border-gray-300 px-8 py-4 rounded-none hover:border-gray-400"
            >
              Discover Lab-Grown
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
