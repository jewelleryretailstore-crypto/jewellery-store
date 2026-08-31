import Image from "next/image";
import Link from "next/link";
import { HeroCentered } from "@/components/ui/HeroCentered";
import { HowTheyAreMade } from "@/components/ui/HowTheyAreMade";
import { ComparisonTable } from "@/components/ui/ComparisonTable";

export default function LabGrownDiamondsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* HERO SECTION */}
      <HeroCentered
        imageSrc="/images/diamond.webp"
        imageAlt="Lab Grown Diamonds Hero"
        title={
          <>
            <span className="block font-sans text-[#B89A5A] uppercase tracking-widest text-sm mb-4">Lab-Grown Diamonds</span>
            Real diamonds. A modern origin.
          </>
        }
        subtitle="Lab-grown diamonds are real diamonds with the same fundamental chemical composition and crystal structure as mined diamonds. They are created using advanced technology rather than extracted from the earth."
        primaryButtonText="Discover More"
        primaryButtonLink="#educational"
      />

      {/* EDUCATIONAL SECTION */}
      <section id="educational" className="py-24 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="font-serif text-3xl mb-6 text-[#171716]">What Are Lab-Grown Diamonds?</h2>
          <p className="font-light text-gray-600 text-lg leading-relaxed">
            A lab-grown diamond is a real diamond. Using highly advanced technology, conditions of the Earth&apos;s mantle are replicated to form diamonds from a carbon seed. The result is a stone with the exact same sparkle, clarity, and durability as a natural diamond.
          </p>
        </div>

        {/* HOW THEY ARE MADE */}
        <HowTheyAreMade />

        {/* LAB-GROWN VS MINED */}
        <ComparisonTable />
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#F7F5F0] py-24 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl mb-6">Explore the Collection</h2>
          <p className="font-light text-gray-600 mb-8">
            Discover our curated selection of lab-grown diamond engagement rings, earrings, and necklaces.
          </p>
          <Link 
            href="/category/diamonds"
            className="inline-block px-10 py-4 uppercase tracking-widest text-sm font-medium text-[#171716] bg-black/5 backdrop-blur-md border border-[#171716]/20 hover:bg-[#171716] hover:text-white transition-all duration-500"
          >
            Shop Lab-Grown Diamonds
          </Link>
        </div>
      </section>
    </div>
  );
}
