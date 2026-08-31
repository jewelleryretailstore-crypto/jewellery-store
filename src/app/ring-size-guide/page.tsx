import { DiamondWatermark } from "@/components/ui/DiamondWatermark";

export default function RingSizeGuidePage() {
  return (
    <div className="relative min-h-screen bg-white">
      <DiamondWatermark opacity={0.03} className="inset-0" />
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-24 max-w-3xl font-sans">
        <h1 className="font-serif text-4xl text-[#171716] mb-12 text-center">Ring Size Guide</h1>
        
        <div className="prose prose-gray max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Finding the Perfect Fit</h2>
            <p>
              Your ring should fit comfortably—snug enough so that it will not fall off, but loose enough to slide over your knuckle with slight resistance. Because temperature, diet, and time of day can affect finger size, we recommend measuring your finger at the end of the day when it is warm.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Method 1: Measure an Existing Ring</h2>
            <ol className="list-decimal pl-5 mt-4 space-y-2">
              <li>Select a ring that properly fits the intended finger.</li>
              <li>Measure the inner diameter of the ring in millimeters.</li>
              <li>Match the measurement to our size conversion chart below.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Method 2: Measure Your Finger</h2>
            <ol className="list-decimal pl-5 mt-4 space-y-2">
              <li>Wrap a thin strip of paper or string around the base of your finger.</li>
              <li>Mark where the paper or string overlaps to form a complete circle.</li>
              <li>Measure the length (circumference) in millimeters.</li>
              <li>Compare the measurement against our size conversion chart.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Standard Size Chart (US / Indian Sizes)</h2>
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm text-left border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-3 px-4 font-medium text-gray-900">Inner Diameter (mm)</th>
                    <th className="py-3 px-4 font-medium text-gray-900">US Size</th>
                    <th className="py-3 px-4 font-medium text-gray-900">Indian Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">15.3</td>
                    <td className="py-3 px-4">4.5</td>
                    <td className="py-3 px-4">8</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">16.1</td>
                    <td className="py-3 px-4">5.5</td>
                    <td className="py-3 px-4">11</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">16.9</td>
                    <td className="py-3 px-4">6.5</td>
                    <td className="py-3 px-4">14</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">17.7</td>
                    <td className="py-3 px-4">7.5</td>
                    <td className="py-3 px-4">16</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">18.5</td>
                    <td className="py-3 px-4">8.5</td>
                    <td className="py-3 px-4">18</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">19.4</td>
                    <td className="py-3 px-4">9.5</td>
                    <td className="py-3 px-4">21</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Complimentary Resizing</h2>
            <p>
              We understand that getting the size exactly right can be challenging, especially when purchasing a gift or engagement ring. That is why we offer one complimentary resizing within the first year of your purchase.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
