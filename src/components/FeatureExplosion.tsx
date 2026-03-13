
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BarChart3, Users, Map, PieChart } from 'lucide-react';

export default function FeatureExplosion() {
  const [isExploded, setIsExploded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-48 relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="max-w-4xl text-center z-20 mb-32 px-4">
        <p className="text-primary font-bold text-[10px] tracking-[0.5em] mb-6 uppercase">Admin Suite</p>
        <h2 className="font-headline text-6xl md:text-8xl font-bold mb-8 tracking-tighter">COMPLETE <span className="text-primary">CONTROL</span></h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Every feature you need to manage elite events, presented in a breathtaking interface that evolves with your needs.
        </p>
        <button 
          onMouseEnter={() => setIsExploded(true)}
          onMouseLeave={() => setIsExploded(false)}
          className="mt-16 px-12 py-5 bg-white text-black font-black tracking-[0.2em] uppercase text-xs rounded-lg hover:bg-primary hover:text-white transition-all active:scale-95 shadow-2xl"
        >
          PREVIEW DASHBOARD
        </button>
      </div>

      {/* Explosion UI Components */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center perspective-2000">
        {/* Main Dashboard Center */}
        <div className={`relative w-[900px] h-[550px] rounded-2xl border border-white/10 glass shadow-[0_40px_100px_rgba(0,0,0,0.8)] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${isExploded ? 'scale-110 opacity-20 rotate-x-6' : 'scale-95 opacity-100 rotate-0'}`}>
          <Image 
            src={PlaceHolderImages[5]?.imageUrl || "https://picsum.photos/seed/dash/1200/800"} 
            alt="Dashboard" 
            fill 
            className="object-cover opacity-60 rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
        </div>

        {/* Exploding Fragments */}
        {[
          { pos: '-translate-x-[110%] -translate-y-[80%]', delay: '0.1s', title: 'Revenue Analytics', icon: BarChart3, color: 'text-primary' },
          { pos: 'translate-x-[110%] -translate-y-[80%]', delay: '0.2s', title: 'Live Heatmap', icon: Map, color: 'text-blue-400' },
          { pos: '-translate-x-[110%] translate-y-[80%]', delay: '0.3s', title: 'Guest Roster', icon: Users, color: 'text-green-400' },
          { pos: 'translate-x-[110%] translate-y-[80%]', delay: '0.4s', title: 'Marketing Funnel', icon: PieChart, color: 'text-purple-400' }
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div 
              key={i}
              className={`absolute w-72 h-44 border border-white/10 glass rounded-2xl p-6 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-2xl ${isExploded ? item.pos + ' opacity-100 scale-100 rotate-y-12' : 'translate-x-0 translate-y-0 opacity-0 scale-50 rotate-0'}`}
              style={{ transitionDelay: item.delay }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                  <Icon size={24} />
                </div>
                <div className="h-1 w-12 bg-white/10 rounded-full" />
              </div>
              <h4 className="font-headline font-bold text-lg text-white mb-2 tracking-tight">{item.title}</h4>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-primary/40 w-3/4 animate-pulse" />
                </div>
                <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
              </div>
              <div className="mt-6 flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                <span>Realtime Data</span>
                <span className="text-primary">Live</span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-1000 pointer-events-none ${isExploded ? 'opacity-100' : 'opacity-0'}`} />
    </section>
  );
}
