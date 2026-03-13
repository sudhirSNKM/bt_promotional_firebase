
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ParallaxEnvironment() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use section reference to calculate relative scroll if needed, 
  // but for simplicity we'll use window.scrollY with modulo or thresholds
  
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Layer 1: Distant Lights (Slowest) */}
      <div 
        className="absolute inset-0 transition-transform duration-75 ease-out"
        style={{ transform: `scale(1.2) translateY(${scrollY * 0.05}px)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-radial-at-t from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Layer 2: Main Background Stage (Slow) */}
      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `scale(1.1) translateY(${scrollY * 0.1}px)` }}
      >
        <Image 
          src={PlaceHolderImages[0]?.imageUrl || "https://picsum.photos/seed/hero/1920/1080"} 
          alt="Stage" 
          fill 
          className="object-cover opacity-30 brightness-50"
        />
      </div>

      {/* Layer 3: Dynamic Fog & Beams */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-200"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="absolute top-0 left-1/4 w-[600px] h-[1200px] bg-primary/20 blur-[180px] rotate-45 transform -translate-y-1/2 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[1200px] bg-blue-900/10 blur-[180px] -rotate-45 transform -translate-y-1/2" />
      </div>

      {/* Layer 4: Crowd Silhouettes (Fast) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[60vh] transition-transform duration-300 ease-out z-10"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <Image 
          src={PlaceHolderImages[6]?.imageUrl || "https://picsum.photos/seed/crowd/1920/600"} 
          alt="Crowd" 
          fill 
          className="object-cover object-top opacity-50 mix-blend-screen"
        />
      </div>

      {/* Center Text Layer (Fastest) */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center z-20 transition-transform duration-500"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <p className="text-primary text-[10px] font-bold tracking-[1.5em] mb-6 uppercase">Immersive Atmosphere</p>
        <h2 className="font-headline text-8xl md:text-[12rem] font-bold tracking-tighter text-white/95 text-center leading-none">
          BEYOND <br /> REALITY
        </h2>
      </div>

      {/* Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-30" />
    </section>
  );
}
