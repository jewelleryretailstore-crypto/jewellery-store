import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Returns & Exchanges | Lumière & Co.',
  description: 'Our 30-day return policy, conditions, and exchange process.',
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#F7F5F0]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl text-[#171716] mb-8 uppercase tracking-widest">Returns & Exchanges</h1>
        
        <div className="space-y-12 font-sans text-sm text-[#4A4945] leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">30-Day Return Period</h2>
            <p>We offer a complimentary 30-day return policy on all eligible purchases. If your piece isn't entirely perfect, you may return it for a full refund or exchange within 30 days of the delivery date.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Conditions of Return</h2>
            <p className="mb-4">To be eligible for a return, the piece must be:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>In its original, unworn condition with no signs of wear or damage</li>
              <li>Accompanied by all original packaging, diamond certificates, and documentation</li>
              <li>Returned with the original security tag intact</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Bespoke & Personalised Exclusions</h2>
            <p>Please note that bespoke commissions, engraved items, and rings that have been resized outside of our standard size range are final sale and cannot be returned or exchanged. We work closely with you during the design process to ensure the final piece meets your exact specifications.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Refund Process</h2>
            <p>To initiate a return, please contact our concierge team. We will arrange a complimentary insured courier collection. Once the piece is received and inspected by our quality assurance team, your refund will be processed to the original payment method within 5-7 business days.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
