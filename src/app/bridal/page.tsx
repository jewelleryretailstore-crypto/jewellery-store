import Image from "next/image";
import Link from "next/link";
import { HeroAnimated } from "@/components/ui/HeroAnimated";

export default function BridalPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#faf9f6]">
      {/* HERO SECTION */}
      <HeroAnimated 
        imageSrc="/images/Gem 01_Rose_Gem 02.webp"
        imageAlt="Bridal Jewellery Hero"
        title="The Bridal Collection"
        subtitle="For the promise of forever. Exquisite engagement rings and wedding bands crafted to symbolize your unique love story."
        buttonText="Find Your Ring"
        buttonLink="/category/rings"
      />

      {/* CATEGORIES */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/category/engagement-rings" className="group relative block p-3 bg-white/50 backdrop-blur-sm rounded-sm border border-[#d4af37]/30 transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <div className="relative aspect-square overflow-hidden">
              <Image 
                src="/images/RR-039-01Rose-_view3.webp"
                alt="Engagement Rings"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="font-serif text-3xl text-white tracking-wide">Engagement Rings</h2>
              </div>
            </div>
          </Link>
          <Link href="/category/wedding-bands" className="group relative block p-3 bg-white/50 backdrop-blur-sm rounded-sm border border-[#d4af37]/30 transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <div className="relative aspect-square overflow-hidden">
              <Image 
                src="/images/RR-039-01White-_view5.webp"
                alt="Wedding Bands"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="font-serif text-3xl text-white tracking-wide">Wedding Bands</h2>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CUSTOM EXPERIENCE */}
      <section className="bg-[#111111] text-[#faf9f6] py-24 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h4 className="uppercase tracking-widest text-sm mb-4 text-yellow-600">Bespoke Design</h4>
          <h2 className="font-serif text-4xl mb-6">Create Your Masterpiece</h2>
          <p className="font-light text-gray-400 mb-8 leading-relaxed">
            Work with our master jewelers to design a one-of-a-kind engagement ring that perfectly captures your vision and love story. From selecting the center stone to the final polish, we guide you through every step.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-4 uppercase tracking-widest text-sm text-white bg-transparent border border-[#d4af37]/30 rounded-[5px] hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
