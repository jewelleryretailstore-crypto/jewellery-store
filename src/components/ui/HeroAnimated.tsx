"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroAnimatedProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export function HeroAnimated({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  buttonText,
  buttonLink
}: HeroAnimatedProps) {
  // Split title into words for staggered animation
  const words = title.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#171716]">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src={imageSrc} 
          alt={imageAlt}
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        {/* Soft vignette/glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(17,17,17,0.8)_100%)]" />
      </motion.div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl flex flex-col items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="overflow-hidden flex flex-wrap justify-center gap-x-4 mb-6"
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={child}
              className="font-serif text-5xl md:text-7xl block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-light text-lg md:text-xl text-white/80 mb-12 max-w-2xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        >
          <Link 
            href={buttonLink}
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white transition-all duration-500"
          >
            <span className="relative z-10 uppercase tracking-widest text-sm text-white group-hover:text-[#171716] transition-colors duration-500">
              {buttonText}
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
