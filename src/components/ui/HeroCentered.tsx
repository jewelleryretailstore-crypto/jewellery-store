"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, ScaleImage } from "@/components/animations/FadeIn";

interface HeroCenteredProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export function HeroCentered({
  imageSrc,
  imageAlt,
  imagePosition = "object-center",
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroCenteredProps) {
  return (
    <section className="relative h-[90vh] w-full flex items-center overflow-hidden bg-[#171716]">
      <ScaleImage className="absolute inset-0 z-0">
        <Image 
          src={imageSrc} 
          alt={imageAlt}
          fill
          className={`object-cover ${imagePosition}`}
          priority
        />
        <div className="absolute inset-0 bg-[#171716]/20" />
      </ScaleImage>

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 flex flex-col items-start text-left text-white mt-16">
        <FadeIn delay={0.2} direction="up">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.1] max-w-3xl">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.4} direction="up">
          <p className="font-sans font-light text-lg md:text-xl mb-10 max-w-xl text-white/90 leading-relaxed">
            {subtitle}
          </p>
        </FadeIn>
        
        {(primaryButtonText || secondaryButtonText) && (
          <FadeIn delay={0.6} direction="up">
            <div className="flex flex-col sm:flex-row gap-5 mt-4">
              {primaryButtonText && primaryButtonLink && (
                <Link 
                  href={primaryButtonLink}
                  className="group relative bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 uppercase tracking-widest text-[11px] font-medium transition-all duration-500 hover:bg-white hover:text-[#171716]"
                >
                  <span className="relative z-10 transition-colors duration-500">{primaryButtonText}</span>
                </Link>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Link 
                  href={secondaryButtonLink}
                  className="group relative bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 uppercase tracking-widest text-[11px] font-medium transition-all duration-500 hover:bg-white hover:text-[#171716]"
                >
                  <span className="relative z-10">{secondaryButtonText}</span>
                </Link>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
