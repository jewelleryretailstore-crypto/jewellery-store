import { DiamondWatermark } from "@/components/ui/DiamondWatermark";

export default function CertificatesPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <DiamondWatermark opacity={0.03} className="inset-0" />
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-24 max-w-3xl font-sans">
        <h1 className="font-serif text-4xl text-[#171716] mb-12 text-center">Certified Diamonds</h1>
        
        <div className="prose prose-gray max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Uncompromising Standards</h2>
            <p>
              We believe in complete transparency and trust. Every center diamond we offer—whether natural or lab-grown—has been meticulously graded by independent, internationally recognized gemological laboratories.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Our Grading Partners</h2>
            <p>
              Depending on the stone, your diamond will be accompanied by a grading report from one of the following esteemed institutions:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>GIA (Gemological Institute of America):</strong> The foremost authority in gemology, inventors of the 4Cs (Cut, Color, Clarity, Carat).</li>
              <li><strong>IGI (International Gemological Institute):</strong> A premier global laboratory, heavily utilized for precise grading of lab-grown diamonds.</li>
              <li><strong>SGL (Solitaire Gemological Laboratories):</strong> Renowned for strict standards in jewelry grading and certification.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Ethical Sourcing & Conflict-Free</h2>
            <p>
              Our commitment to ethical practices is resolute. All our natural diamonds are sourced through suppliers who strictly adhere to the Kimberley Process, ensuring they are conflict-free. Our lab-grown diamonds are created in controlled environments using advanced technology, offering a sustainable and eco-conscious alternative without compromising on brilliance or physical properties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#171716] mb-4">Understanding Your Certificate</h2>
            <p>
              Your physical grading report serves as your diamond's unique fingerprint. It maps the precise 4Cs of your stone, plots its inclusions, and often includes a laser inscription registry number matched to a microscopic engraving on the girdle of the diamond itself. We recommend keeping this certificate in a safe place for insurance and appraisal purposes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
