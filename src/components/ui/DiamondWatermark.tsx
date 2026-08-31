import React from 'react';
import { cn } from '@/lib/utils';

interface DiamondWatermarkProps {
  className?: string;
  opacity?: number;
}

export function DiamondWatermark({ className, opacity = 0.2 }: DiamondWatermarkProps) {
  // A seamlessly tessellating diamond grid SVG
  const svgData = `data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23B89A5A' stroke-width='1' stroke-opacity='${opacity}'%3E%3Cpath d='M30,0 L60,30 L30,60 L0,30 Z' /%3E%3Cpath d='M0,-30 L30,0 L0,30 L-30,0 Z' /%3E%3Cpath d='M60,-30 L90,0 L60,30 L30,0 Z' /%3E%3Cpath d='M0,30 L30,60 L0,90 L-30,60 Z' /%3E%3Cpath d='M60,30 L90,60 L60,90 L30,60 Z' /%3E%3C/g%3E%3C/svg%3E`;

  return (
    <div className={cn("absolute inset-0 pointer-events-none z-0", className)}>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${svgData}")`,
          backgroundSize: '60px 60px',
          backgroundRepeat: 'repeat'
        }}
      />
      {/* 
        Solid overlay to soften the pattern uniformly across the entire page,
        ensuring it remains subtle and doesn't distract from products.
      */}
      <div className="absolute inset-0 bg-[#F7F5F0]/85" />
    </div>
  );
}
