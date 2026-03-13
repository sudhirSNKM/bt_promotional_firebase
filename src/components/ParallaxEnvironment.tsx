
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ParallaxEnvironment() {
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black">
      {/* Layer 1: Background Stage (Slow) */}
      <div 
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: `scale(1.1) translateY(${mouseY * 20}px)` }}
      >
        <Image 
          src={PlaceHolderImages[0]?.imageUrl || "https://picsum.photos/seed/hero/1920/1080"} 
          alt="Stage" 
          fill 
          className="object-cover opacity-40 brightness-50"
        />
      </div>

      {/* Layer 2: Fog/Light beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[1000px] bg-primary/20 blur-[150px] rotate-45 transform -translate-y-1/2" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[1000px] bg-red-800/20 blur-[150px] -rotate-45 transform -translate-y-1/2" />
      </div>

      {/* Layer 3: Crowd Silhouettes (Fast) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${mouseY * -60}px)` }}
      >
        <Image 
          src={PlaceHolderImages[6]?.imageUrl || "https://picsum.photos/seed/crowd/1920/600"} 
          alt="Crowd" 
          fill 
          className="object-cover object-top opacity-60 mix-blend-screen"
        />
      </div>

      {/* Center Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <p className="text-primary text-xs font-bold tracking-[1em] mb-4 uppercase">Feel the Energy</p>
        <h2 className="font-headline text-7xl md:text-9xl font-bold tracking-tighter text-white/90 text-center">
          BEYOND <br /> REALITY
        </h2>
      </div>

      {/* Animated Lights Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
