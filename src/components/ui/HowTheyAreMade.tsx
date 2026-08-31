"use client";

import React from "react";
import { motion } from "framer-motion";
import { StaggerChildren, StaggerItem } from "@/components/animations/FadeIn";

export function HowTheyAreMade() {
  return (
    <div className="max-w-5xl mx-auto mb-24 relative">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif text-2xl text-center mb-16 text-[#171716]"
      >
        How They Are Made
      </motion.h3>
      
      <div className="relative">
        {/* Background Connecting Line */}
        <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#B89A5A]/30 to-transparent z-0 overflow-hidden">
          <motion.div 
            animate={{ x: ["-200%", "300%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#B89A5A] to-transparent shadow-[0_0_10px_#B89A5A]"
          />
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center relative z-10" staggerDelay={0.2}>
          {/* Step 1 */}
          <StaggerItem className="flex flex-col items-center group relative">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FCFBF8] border border-gray-300 mb-4 shadow-[0_0_15px_rgba(184,154,90,0.1)] group-hover:border-[#B89A5A] group-hover:shadow-[0_0_25px_rgba(184,154,90,0.4)] transition-all duration-500"
            >
              <span className="text-xs font-medium text-[#B89A5A]">01</span>
            </motion.div>
            <h4 className="text-sm font-medium text-[#171716] uppercase tracking-widest mb-2">Carbon Seed</h4>
            <p className="text-xs text-gray-500 font-light">A microscopic sliver of diamond is selected.</p>
          </StaggerItem>

          {/* Arrow 1 */}
          <div className="hidden md:flex items-start justify-center pt-4 relative">
            <motion.div 
              animate={{ 
                opacity: [0.3, 1, 0.3],
                x: [0, 5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              className="text-[#B89A5A]/50"
            >
              →
            </motion.div>
          </div>

          {/* Step 2 */}
          <StaggerItem className="flex flex-col items-center group relative">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FCFBF8] border border-gray-300 mb-4 shadow-[0_0_15px_rgba(184,154,90,0.1)] group-hover:border-[#B89A5A] group-hover:shadow-[0_0_25px_rgba(184,154,90,0.4)] transition-all duration-500"
            >
              <span className="text-xs font-medium text-[#B89A5A]">02</span>
            </motion.div>
            <h4 className="text-sm font-medium text-[#171716] uppercase tracking-widest mb-2">Crystal Growth</h4>
            <p className="text-xs text-gray-500 font-light">Carbon atoms deposit layer by layer.</p>
          </StaggerItem>

          {/* Arrow 2 */}
          <div className="hidden md:flex items-start justify-center pt-4 relative">
            <motion.div 
              animate={{ 
                opacity: [0.3, 1, 0.3],
                x: [0, 5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="text-[#B89A5A]/50"
            >
              →
            </motion.div>
          </div>

          {/* Step 3 */}
          <StaggerItem className="flex flex-col items-center group relative">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FCFBF8] border border-gray-300 mb-4 shadow-[0_0_15px_rgba(184,154,90,0.1)] group-hover:border-[#B89A5A] group-hover:shadow-[0_0_25px_rgba(184,154,90,0.4)] transition-all duration-500"
            >
              <span className="text-xs font-medium text-[#B89A5A]">03</span>
            </motion.div>
            <h4 className="text-sm font-medium text-[#171716] uppercase tracking-widest mb-2">Cutting & Polishing</h4>
            <p className="text-xs text-gray-500 font-light">Master cutters shape the rough stone.</p>
          </StaggerItem>

          {/* Arrow 3 */}
          <div className="hidden md:flex items-start justify-center pt-4 relative">
            <motion.div 
              animate={{ 
                opacity: [0.3, 1, 0.3],
                x: [0, 5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="text-[#B89A5A]/50"
            >
              →
            </motion.div>
          </div>

          {/* Step 4 */}
          <StaggerItem className="flex flex-col items-center group relative">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FCFBF8] border border-gray-300 mb-4 shadow-[0_0_15px_rgba(184,154,90,0.1)] group-hover:border-[#B89A5A] group-hover:shadow-[0_0_25px_rgba(184,154,90,0.4)] transition-all duration-500"
            >
              <span className="text-xs font-medium text-[#B89A5A]">04</span>
            </motion.div>
            <h4 className="text-sm font-medium text-[#171716] uppercase tracking-widest mb-2">Grading</h4>
            <p className="text-xs text-gray-500 font-light">Evaluated by independent laboratories.</p>
          </StaggerItem>

          {/* Arrow 4 */}
          <div className="hidden md:flex items-start justify-center pt-4 relative">
            <motion.div 
              animate={{ 
                opacity: [0.3, 1, 0.3],
                x: [0, 5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="text-[#B89A5A]/50"
            >
              →
            </motion.div>
          </div>

          {/* Step 5 */}
          <StaggerItem className="flex flex-col items-center group relative">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FCFBF8] border border-gray-300 mb-4 shadow-[0_0_15px_rgba(184,154,90,0.1)] group-hover:border-[#B89A5A] group-hover:shadow-[0_0_25px_rgba(184,154,90,0.4)] transition-all duration-500"
            >
              <span className="text-xs font-medium text-[#B89A5A]">05</span>
            </motion.div>
            <h4 className="text-sm font-medium text-[#171716] uppercase tracking-widest mb-2">Jewellery</h4>
            <p className="text-xs text-gray-500 font-light">Set by hand into a Lumière piece.</p>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </div>
  );
}
