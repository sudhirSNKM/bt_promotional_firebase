
"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryItems = [
  { id: 1, title: 'CYBERPUNK NIGHT', img: PlaceHolderImages[0]?.imageUrl },
  { id: 2, title: 'URBAN VIBES', img: PlaceHolderImages[4]?.imageUrl },
  { id: 3, title: 'MODERN PULSE', img: PlaceHolderImages[1]?.imageUrl },
  { id: 4, title: 'NEON DREAM', img: PlaceHolderImages[5]?.imageUrl },
  { id: 5, title: 'DIGITAL RAVE', img: PlaceHolderImages[2]?.imageUrl },
];

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the section the user has scrolled
      const progress = Math.min(Math.max(-rect.top / (rect.height - windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#15171A]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div 
          className="flex gap-12 px-24 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${-scrollProgress * 60}%)` }}
        >
          {galleryItems.map((item, idx) => {
            return (
              <div 
                key={item.id}
                className="relative flex-shrink-0 w-[600px] h-[400px] rounded-3xl overflow-hidden transition-transform duration-500"
                style={{ 
                  transform: `scale(${1})`,
                }}
              >
                <Image
                  src={item.img || "https://picsum.photos/seed/600/400"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute bottom-10 left-10">
                  <h3 className="font-headline text-4xl font-bold tracking-tight text-white">{item.title}</h3>
                  <div className="h-1 w-12 bg-primary mt-2" />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Gallery Indicator Text */}
        <div className="absolute top-20 left-24">
          <p className="text-primary text-xs font-bold tracking-[0.5em] mb-2 uppercase">Featured Gallery</p>
          <h2 className="font-headline text-4xl font-bold">IMMERSIVE PERSPECTIVES</h2>
        </div>
      </div>
    </section>
  );
}
