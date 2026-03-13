
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function FeatureExplosion() {
  const [isExploded, setIsExploded] = useState(false);

  return (
    <section className="py-32 relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="max-w-4xl text-center z-10 mb-32">
        <h2 className="font-headline text-6xl font-bold mb-6">COMPLETE <span className="text-primary">CONTROL</span></h2>
        <p className="text-gray-400 text-lg">Every feature you need to manage elite events, presented in a breathtaking interface.</p>
        <button 
          onMouseEnter={() => setIsExploded(true)}
          onMouseLeave={() => setIsExploded(false)}
          className="mt-12 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-primary hover:text-white transition-all active:scale-95"
        >
          PREVIEW DASHBOARD
        </button>
      </div>

      {/* Explosion UI Components */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Main Dashboard Center */}
        <div className={`relative w-[800px] h-[500px] rounded-2xl border border-white/20 glass shadow-2xl transition-all duration-1000 ${isExploded ? 'scale-110 opacity-30' : 'scale-90 opacity-100'}`}>
          <Image 
            src={PlaceHolderImages[5]?.imageUrl || "https://picsum.photos/seed/dash/1200/800"} 
            alt="Dashboard" 
            fill 
            className="object-cover opacity-50 p-4"
          />
        </div>

        {/* Exploding Fragments */}
        {[
          { pos: '-translate-x-full -translate-y-full', delay: '0.1s', title: 'Revenue Analytics' },
          { pos: 'translate-x-full -translate-y-full', delay: '0.2s', title: 'Live Map' },
          { pos: '-translate-x-full translate-y-full', delay: '0.3s', title: 'Guest Management' },
          { pos: 'translate-x-full translate-y-full', delay: '0.4s', title: 'Marketing Suite' }
        ].map((item, i) => (
          <div 
            key={i}
            className={`absolute w-64 h-40 border border-primary/40 glass rounded-xl p-6 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isExploded ? item.pos + ' opacity-100 scale-100 rotate-3' : 'translate-x-0 translate-y-0 opacity-0 scale-50 rotate-0'}`}
            style={{ transitionDelay: item.delay }}
          >
            <div className="h-1 w-8 bg-primary mb-4" />
            <h4 className="font-headline font-bold text-lg text-white mb-2">{item.title}</h4>
            <div className="space-y-2">
              <div className="h-1 w-full bg-white/10 rounded" />
              <div className="h-1 w-2/3 bg-white/10 rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
