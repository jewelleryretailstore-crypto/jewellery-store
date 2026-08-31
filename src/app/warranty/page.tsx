import { DiamondWatermark } from "@/components/ui/DiamondWatermark";

export default function WarrantyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <DiamondWatermark opacity={0.03} className="inset-0" />
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-24 max-w-3xl font-sans">
        <h1 className="font-serif text-4xl text-[#171716] mb-12 text-center">Lifetime Warranty</h1>
        
        <div className="prose prose-gray max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Exceptional Craftsmanship, Guaranteed</h2>
            <p>
              We take immense pride in the uncompromising quality of our jewelry. Every piece undergoes rigorous quality control by our master craftsmen before it is delivered to you. To ensure your peace of mind, we proudly offer a comprehensive Lifetime Warranty against manufacturing defects.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">What Is Covered</h2>
            <p>
              Our Lifetime Warranty covers structural and manufacturing defects. If a piece fails due to a fault in its production, we will repair or replace it at no cost to you. This includes issues such as porosity in the metal or faulty settings that were present at the time of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">What Is Not Covered</h2>
            <p>
              Fine jewelry requires proper care. Our warranty does not cover:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Normal wear and tear (such as scratches, bent rings, or worn-down prongs).</li>
              <li>Damage resulting from trauma, dropping, or improper storage.</li>
              <li>Loss of stones due to damaged or worn-out prongs (we recommend annual prong inspections).</li>
              <li>Discoloration caused by exposure to chemicals, perfumes, cosmetics, or swimming pools.</li>
              <li>Any piece that has been repaired, resized, or altered by a third-party jeweler.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Complimentary Services</h2>
            <p>
              As part of our commitment to your jewelry's longevity, we offer complimentary professional cleaning, prong inspections, and one free ring resizing within the first year of purchase.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
