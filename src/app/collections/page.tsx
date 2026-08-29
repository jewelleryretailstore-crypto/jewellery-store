import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/FadeIn";
import { DiamondWatermark } from "@/components/ui/DiamondWatermark";

export default function CollectionsPage() {
  const collections = [
    {
      id: "the-essentials",
      title: "The Essentials",
      subtitle: "Understated pieces for everyday elegance",
      image: "/images/GJSPD-197-01White-_view5.webp",
      className: "col-span-1 md:col-span-2 row-span-1 md:row-span-2 aspect-square md:aspect-auto", // Large Bento Item
    },
    {
      id: "solitaire",
      title: "Solitaire",
      subtitle: "The purest expression of a diamond",
      image: "/images/Gem 01_White_Metal 02_0_1_1_1.webp",
      className: "col-span-1 row-span-1 aspect-square", // Small Bento Item
    },
    {
      id: "heritage",
      title: "Heritage",
      subtitle: "Classic designs reimagined",
      image: "/images/RR-039-01Yellow-_view2.webp",
      className: "col-span-1 row-span-1 aspect-square", // Small Bento Item
    },
    {
      id: "modern-muse",
      title: "Modern Muse",
      subtitle: "Bold geometry and clean lines",
      image: "/images/Gem 01_Yellow_Metal 02_0_1_1_1(1).webp",
      className: "col-span-1 md:col-span-2 row-span-1 aspect-[2/1]", // Wide Bento Item
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-[#faf9f6]">
      <DiamondWatermark opacity={0.15} className="inset-0" />

      {/* Header */}
      <section className="relative z-10 pt-32 pb-16 md:pt-40 px-6 text-center">
        <FadeIn direction="up">
          <h1 className="font-serif text-5xl md:text-6xl text-[#111111] mb-6">Our Collections</h1>
          <p className="font-sans font-light text-gray-600 max-w-2xl mx-auto text-lg">
            Curated assortments of our finest pieces, each telling a distinct story of craftsmanship, heritage, and style.
          </p>
        </FadeIn>
      </section>

      {/* Bento Grid */}
      <section className="px-6 pb-32 container mx-auto max-w-5xl">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          {collections.map((collection) => (
            <StaggerItem 
              key={collection.id} 
              className={`${collection.className} ${
                  collection.id === "the-essentials" 
                    ? "shadow-[0_0_60px_-15px_rgba(212,175,55,0.6)] rounded-sm relative" 
                    : ""
              }`}
            >
              <Link 
                href={`/category/${collection.id}`}
                className={`group relative block w-full h-full overflow-hidden bg-gray-200 rounded-sm transition-all duration-500 ${
                  collection.id === "the-essentials" 
                    ? "border border-[#d4af37]/30 hover:border-[#d4af37] hover:shadow-[inset_0_0_20px_rgba(212,175,55,0.3)]" 
                    : "border border-transparent hover:border-[#d4af37]/30"
                }`}
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Glassmorphic overlay that activates on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-2 flex items-center gap-3">
                      {collection.title}
                      {collection.id === "the-essentials" && (
                        <span className="text-[10px] font-sans tracking-widest uppercase bg-[#d4af37] text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                          Featured
                        </span>
                      )}
                    </h2>
                    <p className="font-sans font-light text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {collection.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>
    </div>
  );
}
