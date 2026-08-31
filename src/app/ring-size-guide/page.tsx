import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ring Size Guide | Lumière & Co.',
  description: 'How to accurately measure your ring size and international conversions.',
};

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#F7F5F0]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl text-[#171716] mb-8 uppercase tracking-widest">Ring Size Guide</h1>
        
        <div className="space-y-12 font-sans text-sm text-[#4A4945] leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Finding the Perfect Fit</h2>
            <p>An exact fit is essential for the comfort and security of your ring. We offer several methods to help you determine the correct size.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Measuring Instructions</h2>
            <ul className="list-decimal pl-5 space-y-4">
              <li><strong>Temperature Matters:</strong> Measure your fingers at the end of the day when they are at their largest. Avoid measuring when your hands are cold, as fingers can be up to half a size smaller.</li>
              <li><strong>The Knuckle Rule:</strong> Your ring should fit snugly on your finger but be loose enough to slide over your knuckle with slight resistance.</li>
              <li><strong>Use an Existing Ring:</strong> If you're buying a surprise gift, try to borrow a ring that fits the intended finger properly. Measure the inner diameter and compare it to our conversion chart.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">Complimentary Ring Sizer</h2>
            <p>For absolute precision, we recommend ordering our complimentary physical ring sizer. It will be delivered to your door within 2-3 business days. Contact our concierge to request yours.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#171716] uppercase tracking-widest mb-4">International Conversions</h2>
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#B89A5A]/30 text-[#171716]">
                    <th className="py-3 pr-4">UK/AU</th>
                    <th className="py-3 px-4">US/CA</th>
                    <th className="py-3 px-4">EU</th>
                    <th className="py-3 pl-4">Inner Diameter (mm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#B89A5A]/10">
                  <tr><td className="py-3 pr-4">J</td><td className="py-3 px-4">4 ¾</td><td className="py-3 px-4">49</td><td className="py-3 pl-4">15.6</td></tr>
                  <tr><td className="py-3 pr-4">K</td><td className="py-3 px-4">5 ¼</td><td className="py-3 px-4">50</td><td className="py-3 pl-4">16.0</td></tr>
                  <tr><td className="py-3 pr-4">L</td><td className="py-3 px-4">5 ¾</td><td className="py-3 px-4">51 ½</td><td className="py-3 pl-4">16.4</td></tr>
                  <tr><td className="py-3 pr-4">M</td><td className="py-3 px-4">6 ¼</td><td className="py-3 px-4">52 ½</td><td className="py-3 pl-4">16.8</td></tr>
                  <tr><td className="py-3 pr-4">N</td><td className="py-3 px-4">6 ¾</td><td className="py-3 px-4">54</td><td className="py-3 pl-4">17.2</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 italic text-xs">* Note: This is an abbreviated chart. Our full range spans from size F to Z+6.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
