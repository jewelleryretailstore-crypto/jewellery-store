import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping & Delivery | Lumière & Co.',
  description: 'Information about insured shipping, delivery times, and international orders.',
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#F7F5F0]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl text-[#171716] mb-8 uppercase tracking-widest">Shipping & Delivery</h1>
        
        <div className="space-y-12 font-sans text-sm text-[#4A4945] leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Insured Shipping</h2>
            <p className="mb-4">All Lumière & Co. pieces are fully insured during transit. Your piece remains our complete responsibility until it is safely delivered and signed for by you.</p>
            <p>For your security, all deliveries require a signature upon receipt and cannot be left unattended or delivered to P.O. boxes.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Delivery Times</h2>
            <ul className="space-y-4">
              <li><strong>In-Stock Items:</strong> Dispatched within 24-48 hours. Delivery typically takes 2-3 business days within the UK, and 4-7 business days for international orders.</li>
              <li><strong>Made-to-Order & Bespoke:</strong> Depending on the complexity of the piece, creation takes 3-6 weeks. Your concierge will provide a precise timeline during the design process.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Countries Served</h2>
            <p>We currently ship to the UK, EU, United States, Canada, Australia, and select countries in the Middle East and Asia. If your country is not available at checkout, please contact our concierge team to arrange a special delivery.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Tracking Your Order</h2>
            <p>Once your order has been dispatched, you will receive an email containing your tracking number and a link to monitor your delivery's progress in real-time.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
