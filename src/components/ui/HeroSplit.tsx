"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, ScaleImage } from "@/components/animations/FadeIn";

interface HeroSplitProps {
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
}

export function HeroSplit({
  imageSrc,
  imageAlt,
  badge,
  title,
  description,
  buttonText,
  buttonLink,
}: HeroSplitProps) {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row bg-[#faf9f6]">
      {/* Text Content Side (Left) */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 order-2 md:order-1 relative z-10">
        <div className="max-w-xl">
          {badge && (
            <FadeIn delay={0.1} direction="up">
              <span className="uppercase tracking-widest text-xs md:text-sm mb-6 inline-block text-yellow-600 font-medium">
                {badge}
              </span>
            </FadeIn>
          )}
          <FadeIn delay={0.3} direction="up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-[#111111] leading-tight">
              {title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.5} direction="up">
            <p className="font-sans font-light text-lg text-gray-600 mb-10 leading-relaxed">
              {description}
            </p>
          </FadeIn>
          {buttonText && buttonLink && (
            <FadeIn delay={0.7} direction="up">
                <Link 
                  href={buttonLink}
                  className="inline-block bg-[#111111] text-white px-10 py-4 uppercase tracking-widest text-sm transition-all duration-500 rounded-[5px] border border-[#d4af37]/30 hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                {buttonText}
              </Link>
            </FadeIn>
          )}
        </div>
      </div>

      {/* Image Side (Right) */}
      <div className="flex-1 relative order-1 md:order-2 h-[50vh] md:h-auto overflow-hidden">
        <ScaleImage className="absolute inset-0 w-full h-full">
          <Image 
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </ScaleImage>
      </div>
    </section>
  );
}
