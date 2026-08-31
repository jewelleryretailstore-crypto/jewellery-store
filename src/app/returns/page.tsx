import { DiamondWatermark } from "@/components/ui/DiamondWatermark";

export default function ReturnsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <DiamondWatermark opacity={0.03} className="inset-0" />
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-24 max-w-3xl font-sans">
        <h1 className="font-serif text-4xl text-[#171716] mb-12 text-center">Returns & Exchanges</h1>
        
        <div className="prose prose-gray max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Our Commitment</h2>
            <p>
              We stand behind the exceptional quality and craftsmanship of our jewelry. If for any reason you are not entirely satisfied with your purchase, we offer a straightforward return and exchange process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">30-Day Return Policy</h2>
            <p>
              You may return or exchange eligible items within 30 days of the delivery date. To be eligible for a return, the item must be unworn, in pristine condition, and returned in its original packaging with all accompanying certificates and documents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Non-Returnable Items</h2>
            <p>
              Please note that the following items are final sale and cannot be returned or exchanged:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Custom-designed or bespoke pieces.</li>
              <li>Jewelry that has been engraved, modified, or resized by a third party.</li>
              <li>Items showing signs of wear, damage, or alteration.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Return Process</h2>
            <ol className="list-decimal pl-5 mt-4 space-y-2">
              <li><strong>Contact Us:</strong> Email our client services to initiate a return and receive a Return Authorization Number (RAN).</li>
              <li><strong>Package Securely:</strong> Place the jewelry, along with all original documents, in the original packaging.</li>
              <li><strong>Ship:</strong> We will provide a fully insured, prepaid shipping label for your convenience.</li>
              <li><strong>Inspection:</strong> Once received, our master jewelers will inspect the item to verify its condition.</li>
              <li><strong>Refund:</strong> Approved returns will be refunded to the original method of payment within 5-7 business days.</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
