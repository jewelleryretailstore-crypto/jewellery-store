"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  fullWidth?: boolean;
  once?: boolean;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up",
  duration = 1,
  fullWidth = false,
  once = true
}: FadeInProps) {
  const directionOffset = {
    up: 30,
    down: -30,
    left: 30,
    right: -30,
    none: 0,
  };

  const initialY = direction === "up" || direction === "down" ? directionOffset[direction] : 0;
  const initialX = direction === "left" || direction === "right" ? directionOffset[direction] : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({ 
  children, 
  className = "",
  staggerDelay = 0.1,
  delayChildren = 0,
  once = true
}: { 
  children: ReactNode; 
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-50px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", direction = "up" }: { children: ReactNode, className?: string, direction?: "up" | "none" }) {
  const initialY = direction === "up" ? 30 : 0;
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: initialY },
        show: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleImage({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ scale: 1.05, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
