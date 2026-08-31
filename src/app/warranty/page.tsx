import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lifetime Warranty | Lumière & Co.',
  description: 'Details about our lifetime warranty and repair services.',
};

export default function WarrantyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#F7F5F0]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl text-[#171716] mb-8 uppercase tracking-widest">Lifetime Warranty</h1>
        
        <div className="space-y-12 font-sans text-sm text-[#4A4945] leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Our Guarantee</h2>
            <p>We stand behind the exceptional craftsmanship of every Lumière & Co. piece. We offer a comprehensive lifetime warranty against any manufacturing defects.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">What is Covered</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Structural faults in the metalwork</li>
              <li>Loose diamonds or gemstones due to manufacturing defects</li>
              <li>Complimentary professional cleaning and prong inspection once a year</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">What is Not Covered</h2>
            <p className="mb-4">Our warranty does not cover issues resulting from normal wear and tear, accidents, or improper care. This includes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Discoloration due to exposure to chemicals, make-up, swimming pools, or hot tubs</li>
              <li>Prongs that have worn down over time</li>
              <li>Bent, caught, or worn out prongs allowing a stone to fall out</li>
              <li>Lost or stolen pieces</li>
            </ul>
            <p className="mt-4">Please note: Any maintenance, repairs, sizing, or other services performed by a third-party jeweller will void your Lumière warranty.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Repair Process</h2>
            <p>Should your piece require attention, contact our concierge. We will arrange a secure assessment of the item. If the issue is covered under warranty, we will repair it free of charge. If the repair is not covered, we will provide a transparent quote for your approval before commencing any work.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
