
"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryItems = [
  { id: 1, title: 'CYBERPUNK NIGHT', img: PlaceHolderImages[0]?.imageUrl, category: 'Music' },
  { id: 2, title: 'TECH SUMMIT 2024', img: PlaceHolderImages[4]?.imageUrl, category: 'Conference' },
  { id: 3, title: 'URBAN VIBES', img: PlaceHolderImages[1]?.imageUrl, category: 'Festival' },
  { id: 4, title: 'NEON DREAM', img: PlaceHolderImages[5]?.imageUrl, category: 'Exhibition' },
  { id: 5, title: 'DIGITAL RAVE', img: PlaceHolderImages[2]?.imageUrl, category: 'Party' },
];

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const progress = Math.min(Math.max(-rect.top / (rect.height - windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div 
          className="flex gap-16 px-[20vw] transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${-scrollProgress * 70}%)` }}
        >
          {galleryItems.map((item, idx) => {
            // Calculate scale based on how close the card is to the "center" of viewport
            // This is a simplified version of the logic
            return (
              <div 
                key={item.id}
                className="relative flex-shrink-0 w-[70vw] md:w-[600px] h-[450px] rounded-[3rem] overflow-hidden transition-all duration-700 group border border-white/5"
              >
                <Image
                  src={item.img || "https://picsum.photos/seed/600/400"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-12 left-12">
                  <p className="text-primary text-[10px] font-bold tracking-[0.4em] mb-4 uppercase">{item.category}</p>
                  <h3 className="font-headline text-5xl font-bold tracking-tighter text-white mb-2">{item.title}</h3>
                  <div className="h-1 w-16 bg-primary transition-all duration-500 group-hover:w-32" />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-24 left-24 pointer-events-none">
          <p className="text-primary text-xs font-bold tracking-[0.5em] mb-4 uppercase">Elite Curations</p>
          <h2 className="font-headline text-6xl font-bold tracking-tighter">DISCOVER THE <br /> EXTRAORDINARY</h2>
        </div>
      </div>
    </section>
  );
}
