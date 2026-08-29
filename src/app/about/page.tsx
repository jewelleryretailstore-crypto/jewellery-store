import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem, ScaleImage } from "@/components/animations/FadeIn";

import { GlassProfileCard } from "@/components/ui/glass-profile-card";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#faf9f6]">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <ScaleImage className="absolute inset-0 z-0">
          <Image 
            src="/images/diamond.webp" 
            alt="About Lumière & Co."
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </ScaleImage>
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mt-20">
          <FadeIn delay={0.2} direction="up">
            <h4 className="uppercase tracking-widest text-sm mb-4 text-yellow-500">Our Heritage</h4>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <h1 className="font-serif text-5xl md:text-6xl mb-6">A Legacy of Light</h1>
          </FadeIn>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn delay={0.1} direction="left">
              <h2 className="font-serif text-4xl mb-6 text-[#111111]">Our Story</h2>
              <p className="font-light text-gray-600 text-lg leading-relaxed mb-6">
                Lumière & Co. was founded on a simple premise: jewelry should be as enduring as the moments it commemorates. We believe in the quiet power of exceptional craftsmanship and the timeless appeal of understated elegance.
              </p>
              <p className="font-light text-gray-600 text-lg leading-relaxed">
                Every piece in our collection is a testament to our dedication to quality, designed to become a cherished part of your personal story and passed down through generations.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3} direction="right">
            <div className="relative aspect-[4/5] bg-gray-200">
              <Image 
                src="/images/Gem 01_Rose_Gem 02.webp"
                alt="Crafting Jewelry"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CRAFTSMANSHIP GRID */}
      <section className="py-24 px-6 container mx-auto bg-white">
        <FadeIn delay={0.1} direction="up" className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4 text-[#111111]">The Art of Creation</h2>
          <p className="font-light text-gray-600 max-w-2xl mx-auto">
            From the initial sketch to the final polish, our master jewelers pour their expertise and passion into every detail.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-6 bg-gray-100 overflow-hidden">
                <Image 
                  src="/images/RR-039-01Rose-_view3.webp"
                  alt="Design Process"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl mb-2 text-[#111111]">Vision & Design</h3>
              <p className="text-center font-light text-sm text-gray-500">Conceiving forms that balance contemporary aesthetics with classic proportions.</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-6 bg-gray-100 overflow-hidden">
                <Image 
                  src="/images/GJSPD-197-01White-_view3.webp"
                  alt="Material Selection"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl mb-2 text-[#111111]">Ethical Sourcing</h3>
              <p className="text-center font-light text-sm text-gray-500">Selecting only the finest materials, from responsibly mined gold to lab-grown diamonds.</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-6 bg-gray-100 overflow-hidden">
                <Image 
                  src="/images/L2-27_10011LBWhite-_view3.webp"
                  alt="Final Polish"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl mb-2 text-[#111111]">Masterful Execution</h3>
              <p className="text-center font-light text-sm text-gray-500">Employing centuries-old techniques alongside modern innovation to achieve perfection.</p>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </section>

      {/* THE TEAM SECTION */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#111111]">
        {/* Background Image for the team section to make glassmorphism pop */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/Gem 01_Yellow_Metal 02_0_1_1_1.webp" 
            alt="Workshop background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <FadeIn delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-[#faf9f6]">Meet the Artisans</h2>
            <p className="font-light text-gray-400 max-w-2xl mx-auto">
              The visionary minds and skilled hands behind every Lumière & Co. creation.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <GlassProfileCard 
                name="Eleanor Vance"
                role="Lead Designer"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop"
                socials={{ instagram: "#", linkedin: "#" }}
              />
            </StaggerItem>
            <StaggerItem>
              <GlassProfileCard 
                name="Julian Thorne"
                role="Master Jeweler"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
                socials={{ instagram: "#", twitter: "#" }}
              />
            </StaggerItem>
            <StaggerItem>
              <GlassProfileCard 
                name="Amelia Chen"
                role="Diamond Specialist"
                image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop"
                socials={{ linkedin: "#", twitter: "#" }}
              />
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#faf9f6] text-[#111111] py-24 text-center px-6">
        <FadeIn delay={0.2} direction="up" className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-8 leading-snug">
            &quot;We do not simply make jewelry; we craft artifacts of memory, meant to capture the light of your most precious moments.&quot;
          </h2>
          <p className="uppercase tracking-widest text-sm text-yellow-700">— The Founders</p>
        </FadeIn>
      </section>
    </div>
  );
}
