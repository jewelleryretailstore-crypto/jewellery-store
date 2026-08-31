import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Payments | Lumière & Co.',
  description: 'Payment methods, security protocols, and financing options.',
};

export default function PaymentsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#F7F5F0]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl text-[#171716] mb-8 uppercase tracking-widest">Secure Payments</h1>
        
        <div className="space-y-12 font-sans text-sm text-[#4A4945] leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Payment Security</h2>
            <p>Your security is our highest priority. All transactions on Lumière & Co. are protected by enterprise-grade encryption (TLS 1.3) and process through strict PCI-DSS compliant payment gateways. We never store your full credit card information on our servers.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Accepted Payment Methods</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Major Credit & Debit Cards (Visa, Mastercard, American Express)</li>
              <li>Apple Pay & Google Pay</li>
              <li>Wire Transfer (Required for purchases over £15,000)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Currency & Pricing</h2>
            <p>All prices are displayed and charged in GBP (£). If you are purchasing from outside the UK, your bank will automatically convert the transaction to your local currency at their prevailing exchange rate.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Financing Options</h2>
            <p>We believe exceptional jewellery should be accessible. In partnership with Klarna and specific private finance providers, we offer 0% APR financing for up to 12 months, or interest-bearing plans for up to 36 months, subject to status and approval. Select the financing option at checkout to see your eligibility.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
