import { DiamondWatermark } from "@/components/ui/DiamondWatermark";

export default function PaymentsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <DiamondWatermark opacity={0.03} className="inset-0" />
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-24 max-w-3xl font-sans">
        <h1 className="font-serif text-4xl text-[#171716] mb-12 text-center">Secure Payments</h1>
        
        <div className="prose prose-gray max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Bank-Grade Security</h2>
            <p>
              Your security and privacy are our utmost priorities. We employ industry-standard encryption protocols (SSL/TLS) to ensure that all personal and financial data transmitted during your transaction is completely secure and protected from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Accepted Payment Methods</h2>
            <p>
              We accept a variety of payment methods to provide you with a seamless checkout experience. All transactions are processed through highly secure, globally recognized payment gateways.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Credit & Debit Cards:</strong> Visa, MasterCard, American Express, and Discover.</li>
              <li><strong>Digital Wallets:</strong> Apple Pay and Google Pay for rapid checkout.</li>
              <li><strong>Bank Transfers:</strong> Direct NEFT/RTGS/IMPS transfers are available for high-value bespoke orders upon request.</li>
              <li><strong>Cash on Delivery (COD):</strong> Available for select PIN codes within India, subject to order value limits.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Fraud Prevention</h2>
            <p>
              To protect our clients, all orders are subject to a comprehensive fraud review. We may contact you to verify your identity if our automated systems detect unusual activity. We do not store your full credit card information on our servers; it is securely tokenized and handled directly by our payment partners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Currency & Taxes</h2>
            <p>
              All prices displayed are in Indian Rupees (INR) and are inclusive of GST (Goods and Services Tax). There are no hidden fees at checkout. If you are purchasing internationally, your bank may apply a currency conversion fee.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
