import Image from "next/image";
import Link from "next/link";
import { HeroCentered } from "@/components/ui/HeroCentered";

export default function LabGrownDiamondsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* HERO SECTION */}
      <HeroCentered
        imageSrc="/images/diamond.webp"
        imageAlt="Lab Grown Diamonds Hero"
        title={
          <>
            <span className="block font-sans text-[#d4af37] uppercase tracking-widest text-sm mb-4">Lab-Grown Diamonds</span>
            Real diamonds. A modern origin.
          </>
        }
        subtitle="Lab-grown diamonds are real diamonds with the same fundamental chemical composition and crystal structure as mined diamonds. They are created using advanced technology rather than extracted from the earth."
        primaryButtonText="Discover More"
        primaryButtonLink="#educational"
      />

      {/* EDUCATIONAL SECTION */}
      <section id="educational" className="py-24 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl mb-6 text-[#111111]">What Are Lab-Grown Diamonds?</h2>
          <p className="font-light text-gray-600 text-lg leading-relaxed">
            A lab-grown diamond is a real diamond. Using highly advanced technology, conditions of the Earth&apos;s mantle are replicated to form diamonds from a carbon seed. The result is a stone with the exact same sparkle, clarity, and durability as a natural diamond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          <div className="text-center">
            <h3 className="font-serif text-xl mb-4 text-[#111111]">100% Real Diamonds</h3>
            <p className="font-light text-gray-500 text-sm leading-relaxed">
              Lab-grown diamonds are chemically and optically identical to earth-mined diamonds. They are not cubic zirconia or moissanite.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-xl mb-4 text-[#111111]">Exceptional Value</h3>
            <p className="font-light text-gray-500 text-sm leading-relaxed">
              Because the supply chain is shorter, lab-grown diamonds often provide larger carat sizes and higher clarity for your budget.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-xl mb-4 text-[#111111]">Certified Quality</h3>
            <p className="font-light text-gray-500 text-sm leading-relaxed">
              Our lab-grown diamonds are graded by independent laboratories using the exact same 4Cs criteria as natural diamonds.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#faf9f6] py-24 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl mb-6">Explore the Collection</h2>
          <p className="font-light text-gray-600 mb-8">
            Discover our curated selection of lab-grown diamond engagement rings, earrings, and necklaces.
          </p>
          <Link 
            href="/category/diamonds"
            className="inline-block px-10 py-4 uppercase tracking-widest text-sm text-white bg-[#111111] border border-[#d4af37]/30 rounded-[5px] hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500"
          >
            Shop Lab-Grown Diamonds
          </Link>
        </div>
      </section>
    </div>
  );
}
