import React from 'react';
import { RefreshCcw, ShieldCheck, Diamond, Wrench } from 'lucide-react';

export function ProductAssurance() {
  const assurances = [
    {
      icon: <RefreshCcw className="w-8 h-8" strokeWidth={1.5} />,
      title: "100% Exchange Value",
      subtitle: "On Precious Stones"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />,
      title: "The Purity Guarantee",
      subtitle: "Certified authenticity"
    },
    {
      icon: <Diamond className="w-8 h-8" strokeWidth={1.5} />,
      title: "Complete Transparency",
      subtitle: "Ethically sourced"
    },
    {
      icon: <Wrench className="w-8 h-8" strokeWidth={1.5} />,
      title: "Lifetime Maintenance",
      subtitle: "Free cleaning & checks"
    }
  ];

  return (
    <div className="mt-24 pt-16 pb-8 border-t border-gray-200">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl text-[#171716] mb-3">The Lumière Assurance</h2>
        <p className="font-sans font-light text-gray-500">Crafted by Experts, Cherished by You.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {assurances.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 mb-6 rounded-full bg-[#F7F5F0] flex items-center justify-center text-[#B89A5A] transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md">
              {item.icon}
            </div>
            <h3 className="font-serif text-lg text-[#171716] mb-1 leading-snug max-w-[140px] mx-auto">{item.title}</h3>
            <p className="font-sans text-xs text-gray-500 font-light">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
