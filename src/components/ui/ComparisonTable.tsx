"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/animations/FadeIn";

const comparisonData = [
  { feature: "Chemical Composition", lab: "Carbon", mined: "Carbon" },
  { feature: "Crystal Structure", lab: "Diamond", mined: "Diamond" },
  { feature: "Hardness (Mohs Scale)", lab: "10", mined: "10" },
  { feature: "Origin", lab: "Laboratory", mined: "Earth Mantle" },
  { feature: "Environmental Impact", lab: "Low", mined: "High" },
  { feature: "Supply Chain", lab: "Transparent", mined: "Complex" },
  { feature: "Value (Cost per Carat)", lab: "More Accessible", mined: "Premium" },
];

export function ComparisonTable() {
  return (
    <div className="max-w-4xl mx-auto mt-32 mb-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h4 className="font-sans uppercase tracking-widest text-xs text-[#B89A5A] mb-4">The Facts</h4>
        <h3 className="font-serif text-3xl md:text-4xl text-[#171716]">Lab-Grown vs Mined</h3>
      </motion.div>

      <div className="relative z-10 bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
        
        {/* Highlight Background for Lab Grown Column */}
        <div className="absolute top-0 bottom-0 left-1/3 w-1/3 bg-[#FCFBF8] border-x border-[#B89A5A]/20 -z-10" />

        <div className="grid grid-cols-3 text-center border-b border-gray-100">
          <div className="py-6 px-4 flex items-center justify-center">
            <span className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest">Feature</span>
          </div>
          <div className="py-6 px-4 bg-[#FCFBF8] relative flex flex-col items-center justify-center border-x border-[#B89A5A]/20">
            <div className="absolute top-0 w-full h-[2px] bg-[#B89A5A]" />
            <span className="text-[10px] md:text-xs font-bold text-[#171716] uppercase tracking-widest">Lumière Lab-Grown</span>
          </div>
          <div className="py-6 px-4 flex items-center justify-center">
            <span className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest">Mined Diamond</span>
          </div>
        </div>

        <StaggerChildren staggerDelay={0.1}>
          {comparisonData.map((row, index) => (
            <StaggerItem key={index}>
              <motion.div 
                whileHover={{ backgroundColor: "rgba(250, 249, 246, 0.5)" }}
                className="grid grid-cols-3 text-center border-b border-gray-50 transition-colors group"
              >
                <div className="py-5 px-4 flex items-center justify-center">
                  <span className="text-[11px] md:text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{row.feature}</span>
                </div>
                
                {/* Lab Column (Highlighted) */}
                <div className="py-5 px-4 bg-[#FCFBF8] group-hover:bg-[#F7F5F0] border-x border-[#B89A5A]/20 flex items-center justify-center transition-colors">
                  <span className="text-[11px] md:text-sm font-medium text-[#171716] flex items-center gap-2">
                    {row.lab}
                    {row.lab === row.mined && <Check className="w-3 h-3 text-[#B89A5A]" />}
                  </span>
                </div>
                
                {/* Mined Column */}
                <div className="py-5 px-4 flex items-center justify-center">
                  <span className="text-[11px] md:text-sm text-gray-500 font-light">{row.mined}</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#B89A5A]/5 blur-[120px] rounded-full pointer-events-none -z-20" />
    </div>
  );
}
