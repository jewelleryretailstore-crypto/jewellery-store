"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface FeatureCarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  subtitle: string;
  images: { src: string; alt: string; }[];
}

export const FeatureCarousel = React.forwardRef<HTMLDivElement, FeatureCarouselProps>(
  ({ title, subtitle, images, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2));

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full py-24 flex flex-col items-center justify-center overflow-hidden bg-[#171716] text-white',
          className
        )}
        {...props}
      >
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" aria-hidden="true">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(184,154,90,0.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(184,154,90,0.15),rgba(255,255,255,0))]"></div>
        </div>

        {/* Content */}
        <div className="z-10 flex w-full flex-col items-center text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-4 px-4 max-w-3xl">
            <h1 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-white">
              {title}
            </h1>
            <p className="max-w-xl mx-auto text-gray-400 font-light text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Main Showcase Section */}
          <div className="relative w-full max-w-5xl h-[350px] md:h-[450px] flex items-center justify-center">
            {/* Carousel Wrapper */}
            <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
              {images.map((image, index) => {
                const offset = index - currentIndex;
                const total = images.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos = pos - total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={index}
                    className={cn(
                      'absolute w-56 h-80 md:w-72 md:h-[400px] transition-all duration-700 ease-out',
                      'flex items-center justify-center'
                    )}
                    style={{
                      transform: `
                        translateX(${(pos) * 55}%) 
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                        rotateY(${(pos) * -15}deg)
                      `,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.5 : 0,
                      filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                      visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                    }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      {/* Gradient overlay for unselected cards */}
                      {!isCenter && <div className="absolute inset-0 bg-black/30 transition-opacity duration-700" />}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Buttons */}
            <button
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 z-20 flex items-center justify-center bg-black/60 border-2 border-[#B89A5A] text-[#B89A5A] backdrop-blur-md animate-glow-pulse hover:scale-110 hover:text-white hover:bg-black/80 transition-all duration-300"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 z-20 flex items-center justify-center bg-black/60 border-2 border-[#B89A5A] text-[#B89A5A] backdrop-blur-md animate-glow-pulse hover:scale-110 hover:text-white hover:bg-black/80 transition-all duration-300"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

FeatureCarousel.displayName = 'FeatureCarousel';
