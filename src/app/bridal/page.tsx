import Image from "next/image";
import Link from "next/link";
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
          <h4 className="uppercase tracking-widest text-sm mb-4 text-[#B89A5A]">Bespoke Design</h4>
          <h2 className="font-serif text-4xl mb-6">Create Your Masterpiece</h2>
          <p className="font-light text-gray-500 mb-8 leading-relaxed">
            Work with our master jewelers to design a one-of-a-kind engagement ring that perfectly captures your vision and love story. From selecting the center stone to the final polish, we guide you through every step.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-4 uppercase tracking-widest text-sm text-[#171716] border border-[#171716] hover:bg-[#171716] hover:text-white transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
