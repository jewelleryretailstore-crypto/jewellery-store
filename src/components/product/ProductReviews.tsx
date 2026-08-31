import React from 'react';
import { Star } from 'lucide-react';

export function ProductReviews() {
  return (
    <div className="mt-24 pt-16 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="font-serif text-2xl tracking-wide text-gray-900 mb-2">Customer Reviews</h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-[#B89A5A] text-[#B89A5A]" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-900">4.9 / 5</span>
            <span className="text-sm text-gray-500 font-light">Based on 124 reviews</span>
          </div>
        </div>
        <button className="px-6 py-3 border border-[#171716] text-[#171716] text-xs uppercase tracking-widest font-medium hover:bg-[#171716] hover:text-white transition-colors">
          Write a Review
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            name: "Eleanor T.",
            date: "August 12, 2026",
            title: "Absolutely breathtaking",
            body: "The craftsmanship is unparalleled. I was nervous about buying jewelry online, but the process was flawless and the ring exceeded all my expectations. The diamonds catch the light beautifully.",
            rating: 5
          },
          {
            name: "James W.",
            date: "July 28, 2026",
            title: "Perfect anniversary gift",
            body: "My wife hasn't taken it off since our anniversary. The presentation box it arrived in was gorgeous, and the piece itself feels substantial and incredibly well-made. Highly recommend Lumière.",
            rating: 5
          }
        ].map((review, idx) => (
          <div key={idx} className="bg-white p-8 border border-gray-100 rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-start mb-4">
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#B89A5A] text-[#B89A5A]" />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-light">{review.date}</span>
            </div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">{review.title}</h4>
            <p className="text-sm font-light text-gray-600 mb-6 leading-relaxed">{review.body}</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500">
                {review.name.charAt(0)}
              </div>
              <span className="text-xs font-medium text-gray-900">{review.name} <span className="text-gray-400 font-light ml-1">Verified Buyer</span></span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="text-xs text-gray-500 uppercase tracking-widest font-medium hover:text-[#171716] border-b border-transparent hover:border-[#171716] transition-colors pb-1">
          Read All Reviews
        </button>
      </div>
    </div>
  );
}
