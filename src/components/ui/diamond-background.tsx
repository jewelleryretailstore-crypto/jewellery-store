'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type DiamondBackgroundProps = React.ComponentProps<'div'> & {
  diamondProps?: React.ComponentProps<'div'>;
  diamondSize?: number; // value greater than 20
  diamondMargin?: number;
};

function DiamondBackground({
  className,
  children,
  diamondProps,
  diamondSize = 60,
  diamondMargin = 1.5,
  ...props
}: DiamondBackgroundProps) {
  const diamondWidth = diamondSize;
  const diamondHeight = diamondSize;
  const rowSpacing = diamondSize / 2;
  const computedMarginTop = -diamondSize / 2;
  const oddRowMarginLeft = 0;
  const evenRowMarginLeft = diamondSize / 2;

  const [gridDimensions, setGridDimensions] = React.useState({
    rows: 0,
    columns: 0,
  });

  const updateGridDimensions = React.useCallback(() => {
    // Add extra rows and columns to ensure the screen is filled even when scrolling/resizing
    const rows = Math.ceil(window.innerHeight / rowSpacing) + 2;
    const columns = Math.ceil(window.innerWidth / diamondWidth) + 2;
    setGridDimensions({ rows, columns });
  }, [rowSpacing, diamondWidth]);

  React.useEffect(() => {
    updateGridDimensions();
    window.addEventListener('resize', updateGridDimensions);
    return () => window.removeEventListener('resize', updateGridDimensions);
  }, [updateGridDimensions]);

  return (
    <div
      data-slot="diamond-background"
      className={cn(
        'relative size-full overflow-hidden bg-[#171716]',
        className,
      )}
      {...props}
    >
      <style>{`:root { --diamond-margin: ${diamondMargin}px; }`}</style>
      <div className="absolute top-0 -left-[10%] w-[120%] h-[120%] overflow-hidden pointer-events-none">
        {Array.from({ length: gridDimensions.rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            style={{
              marginTop: rowIndex === 0 ? 0 : computedMarginTop,
              marginLeft:
                (rowIndex % 2 === 0
                  ? oddRowMarginLeft
                  : evenRowMarginLeft) - diamondSize,
            }}
            className="flex"
          >
            {Array.from({ length: gridDimensions.columns }).map(
              (_, colIndex) => (
                <div
                  key={`diamond-${rowIndex}-${colIndex}`}
                  {...diamondProps}
                  style={{
                    width: diamondWidth,
                    height: diamondHeight,
                    ...diamondProps?.style,
                  }}
                  className={cn(
                    'relative shrink-0 pointer-events-auto transition-all duration-500',
                    '[clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]',
                    "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#222222] before:opacity-100 before:transition-all before:duration-500",
                    "after:content-[''] after:absolute after:inset-[var(--diamond-margin)] after:bg-[#171716]",
                    'after:[clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]',
                    // Hover states for glow effect
                    'hover:drop-shadow-[0_0_15px_rgba(184,154,90,0.8)] z-0 hover:z-10',
                    'hover:before:bg-[#B89A5A] hover:before:opacity-100 hover:before:duration-0',
                    // Optional inner glow trick: make the inside slightly transparent or change its color on hover
                    'hover:after:bg-[#1a1710] hover:after:duration-0',
                    diamondProps?.className,
                  )}
                />
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { DiamondBackground, type DiamondBackgroundProps };
