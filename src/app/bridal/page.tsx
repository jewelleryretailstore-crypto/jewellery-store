import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroAnimated } from "@/components/ui/HeroAnimated";

export default function BridalPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F7F5F0]">
      {/* HERO SECTION */}
      <HeroAnimated 
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/7/79/Indian_bride_with_Jewellery.jpg"
        imageAlt="Indian Bridal Jewellery Hero"
        title="The Bridal Collection"
        subtitle="For the promise of forever. Exquisite engagement rings and wedding bands crafted to symbolize your unique love story."
        buttonText="Find Your Ring"
        buttonLink="/category/rings"
      />

      {/* CATEGORIES */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/category/engagement-rings" className="group relative block p-3 bg-white/50 backdrop-blur-sm rounded-none border border-transparent transition-all duration-500 hover:border-[#171716] hover:shadow-lg">
            <div className="relative aspect-square overflow-hidden">
              <Image 
                src="/images/RR-039-01Rose-_view3.webp"
                alt="Engagement Rings"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#171716]/10 group-hover:bg-[#171716]/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="font-serif text-3xl text-white tracking-wide">Engagement Rings</h2>
              </div>
            </div>
          </Link>
          <Link href="/category/wedding-bands" className="group relative block p-3 bg-white/50 backdrop-blur-sm rounded-none border border-transparent transition-all duration-500 hover:border-[#171716] hover:shadow-lg">
            <div className="relative aspect-square overflow-hidden">
              <Image 
                src="/images/RR-039-01White-_view5.webp"
                alt="Wedding Bands"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#171716]/10 group-hover:bg-[#171716]/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="font-serif text-3xl text-white tracking-wide">Wedding Bands</h2>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CUSTOM EXPERIENCE */}
      <section className="bg-[#FCFBF8] border-t border-gray-100 text-[#171716] py-24 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h4 className="uppercase tracking-widest text-xs mb-4 text-[#B89A5A]">Private Bespoke</h4>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Create something that exists nowhere else.</h2>
          
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-sans text-xs uppercase tracking-widest text-gray-500 mb-12">
            <li>Design consultation</li>
            <li className="hidden md:block">·</li>
            <li>Diamond selection</li>
            <li className="hidden md:block">·</li>
            <li>CAD visualisation</li>
            <li className="hidden md:block">·</li>
            <li>Craftsmanship</li>
            <li className="hidden md:block">·</li>
            <li>Final piece</li>
          </ul>

          <Link 
            href="/contact"
            className="inline-flex items-center text-xs uppercase tracking-widest text-[#171716] border-b border-[#171716] pb-1 hover:text-[#B89A5A] hover:border-[#B89A5A] transition-colors group"
          >
            Request a Private Consultation <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
