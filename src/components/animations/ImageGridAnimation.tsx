'use client'; 

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from './ImageGrid.module.css';

interface ImageGridAnimationProps {
  imageUrl?: string;
  rows?: number;
  cols?: number;
  pattern?: number;
  duration?: number;
  className?: string;
}

export const ImageGridAnimation = ({ 
  imageUrl = "https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?q=80&w=1500&auto=format&fit=crop", 
  rows = 13, 
  cols = 9, 
  pattern = 13, // 0 to 13 for different wave patterns
  duration = 3000, // Slower duration
  className = ""
}: ImageGridAnimationProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 }); // Trigger when 30% visible

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isInView) {
      setIsAnimating(true);
      setIsDone(false);
      // Wait for max stagger (approx 3s) + duration (3s) = 6s
      timer = setTimeout(() => {
        setIsDone(true);
      }, 4500);
    } else {
      setIsAnimating(false);
      setIsDone(false);
    }
    return () => clearTimeout(timer);
  }, [isInView]);

  const delayDelta = 120; // Slower staggering
  
  const getDelay = (i: number, j: number, type: number, x: number, y: number) => {
    let delay = 0;
    switch (type) {
      case 0: delay = i * 2; break;
      case 1: delay = j * 2; break;
      case 2: delay = Math.floor(Math.random() * (x + y + 1)); break;
      case 3: delay = x + y - (j + i); break;
      case 4: delay = i + j; break;
      case 5: delay = x - i + j; break;
      case 6: delay = i + (y - j); break;
      case 7: delay = Math.abs((x + y) / 2 - (j + i)); break;
      case 8: delay = (x + y) / 2 - Math.abs((x + y) / 2 - (j + i)); break;
      case 9: delay = (x + y) / 2 - Math.abs((x + y) / 2 - (j + i)) * Math.cos(i + j); break;
      case 10: delay = Math.abs((x + y) / 2 - (x - j + i)); break;
      case 11: delay = Math.abs((x + y) / 2 - Math.abs((x + y) / 2 - (x - j + i))); break;
      case 12: delay = Math.abs(x / 2 - j) + Math.abs(y / 2 - i); break;
      case 13: delay = x / 2 - Math.abs(x / 2 - j) + (x / 2 - Math.abs(y / 2 - i)); break;
      default: delay = i + j;
    }
    return delay;
  };

  const fragments = [];
  const xMax = cols - 1;
  const yMax = rows - 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const delay = getDelay(i, j, pattern, xMax, yMax);
      const isOdd = (i + j) % 2 === 0;
      
      fragments.push({
        id: `${i}-${j}`,
        x: j,
        y: i,
        rotateX: isOdd ? -180 : 0,
        rotateY: isOdd ? 0 : -180,
        delayMs: delay * delayDelta
      });
    }
  }

  return (
    <div 
      ref={ref}
      className={`${styles.imageBox} ${className}`}
      style={{
        '--row': rows,
        '--col': cols,
        '--img-url': `url(${imageUrl})`,
      } as React.CSSProperties}
    >
      {isAnimating && fragments.map(frag => (
        <div 
          key={frag.id} 
          className={styles.fragment}
          style={{
            '--x': frag.x,
            '--y': frag.y,
            '--rotateX': `rotateX(${frag.rotateX}deg)`,
            '--rotateY': `rotateY(${frag.rotateY}deg)`,
            '--delay': `${frag.delayMs}ms`,
            '--duration': `${duration}ms`
          } as React.CSSProperties}
        />
      ))}

      {/* Seamless covering image that fades in at the exact end of the animation to eliminate all subpixel seams */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 z-10 ${isDone ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
};
