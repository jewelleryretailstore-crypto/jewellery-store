import { DiamondWatermark } from "@/components/ui/DiamondWatermark";

export default function ShippingPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <DiamondWatermark opacity={0.03} className="inset-0" />
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-24 max-w-3xl font-sans">
        <h1 className="font-serif text-4xl text-[#171716] mb-12 text-center">Shipping Policy</h1>
        
        <div className="prose prose-gray max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Complimentary Shipping</h2>
            <p>
              We are pleased to offer complimentary fully insured shipping on all orders. Each piece of jewelry is meticulously packaged in our signature luxury presentation boxes to ensure its safe arrival.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Delivery Timelines</h2>
            <p>
              As many of our pieces are handcrafted to order, please allow the following estimated timelines for delivery:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>In-Stock Items:</strong> Dispatched within 2-3 business days.</li>
              <li><strong>Made-to-Order Pieces:</strong> Requires 3-4 weeks for creation and hallmark certification.</li>
              <li><strong>Bespoke / Custom Orders:</strong> Requires 4-6 weeks, subject to design complexity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Secure & Insured Transit</h2>
            <p>
              Your purchase is fully insured from our atelier to your door. For your security, all deliveries require a signature from an adult upon receipt. We use premium trusted couriers (e.g., FedEx, UPS, or specialized high-value transit services).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">International Shipping</h2>
            <p>
              We currently ship to select international destinations. Please note that for international orders, the recipient is responsible for any applicable local customs duties, taxes, or import fees levied by the destination country.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
