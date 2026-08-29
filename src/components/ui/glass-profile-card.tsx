'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface GlassProfileCardProps extends React.ComponentProps<'div'> {
  name: string;
  role: string;
  image: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export function GlassProfileCard({
  name,
  role,
  image,
  socials,
  className,
  ...props
}: GlassProfileCardProps) {
  // Using an array to map socials with index for staggered delay
  const socialLinks = [];
  if (socials?.instagram) {
    socialLinks.push({
      url: socials.instagram,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[1.3rem] h-[1.3rem]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    });
  }
  if (socials?.linkedin) {
    socialLinks.push({
      url: socials.linkedin,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[1.3rem] h-[1.3rem]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    });
  }
  if (socials?.twitter) {
    socialLinks.push({
      url: socials.twitter,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[1.3rem] h-[1.3rem]"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
      )
    });
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[20px] w-full max-w-[280px] h-[340px] cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.2)] group mx-auto',
        className
      )}
      {...props}
    >
      <div className="w-full h-[340px]">
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-cover w-full h-[340px]" 
        />
      </div>

      <div className="absolute left-0 -bottom-[180px] w-full min-h-[140px] text-white bg-white/20 backdrop-blur-[15px] shadow-[0_-10px_10px_rgba(255,255,255,0.1)] border-t border-white/20 transition-all duration-[400ms] ease-in group-hover:bottom-0 flex flex-col items-center">
        <h4 className="pt-2 text-[1.1rem] uppercase tracking-[3px] text-center font-medium opacity-0 -translate-y-[40px] transition-all duration-[800ms] delay-200 group-hover:translate-y-[10px] group-hover:opacity-100">
          {name}
        </h4>
        <h5 className="text-[0.8rem] uppercase tracking-[2px] text-center font-extralight opacity-0 -translate-y-[40px] transition-all duration-500 delay-200 group-hover:translate-y-[10px] group-hover:opacity-100 mt-1">
          {role}
        </h5>

        <ul className="list-none p-0 flex justify-center w-full">
          {socialLinks.map((social, idx) => (
            <li 
              key={idx}
              className="m-[10px] translate-y-[50px] transition-transform duration-500 group-hover:translate-y-[20px]"
              style={{ transitionDelay: `${0.15 * (idx + 1)}s` }}
            >
              <Link href={social.url} className="text-white hover:text-white/80 transition-colors">
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
