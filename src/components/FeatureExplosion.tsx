"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BarChart3, Users, Map, PieChart, Zap } from 'lucide-react';

export default function FeatureExplosion() {
  const [isExploded, setIsExploded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-48 relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="max-w-4xl text-center z-20 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.3em] mb-8 uppercase">
          <Zap size={14} /> Total Control Architecture
        </div>
        <h2 className="font-headline text-7xl md:text-9xl font-bold mb-10 tracking-tighter leading-none">THE <span className="text-primary">DASHBOARD</span></h2>
        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-16">
          A breathtaking interface that evolves in 3D space. Staggered charts, live heatmaps, and guest analytics at your fingertips.
        </p>
        <button 
          onMouseEnter={() => setIsExploded(true)}
          onMouseLeave={() => setIsExploded(false)}
          className="group relative px-16 py-7 bg-white text-black font-black tracking-[0.3em] uppercase text-xs rounded-2xl hover:bg-primary hover:text-white transition-all shadow-2xl"
        >
          EXPLODE INTERFACE
          <div className="absolute -inset-1 bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Explosion UI Components */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center perspective-3000">
        {/* Main Dashboard Center */}
        <div className={`relative w-[1000px] h-[600px] rounded-[3rem] border border-white/10 glass shadow-[0_60px_150px_rgba(0,0,0,0.9)] transition-all duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] ${isExploded ? 'scale-110 opacity-10 rotate-x-12 translate-z-[-200px]' : 'scale-95 opacity-100 rotate-0'}`}>
          <Image 
            src={PlaceHolderImages[5]?.imageUrl || "https://picsum.photos/seed/dash/1200/800"} 
            alt="Dashboard" 
            fill 
            className="object-cover opacity-50 rounded-[3rem]"
          />
        </div>

        {/* Exploding Fragments with Staggered Animations */}
        {[
          { pos: '-translate-x-[120%] -translate-y-[100%]', delay: '0s', title: 'Revenue Stream', icon: BarChart3, color: 'text-primary' },
          { pos: 'translate-x-[120%] -translate-y-[100%]', delay: '0.15s', title: 'Spatial Heatmap', icon: Map, color: 'text-blue-400' },
          { pos: '-translate-x-[120%] translate-y-[100%]', delay: '0.3s', title: 'VIP Roster', icon: Users, color: 'text-green-400' },
          { pos: 'translate-x-[120%] translate-y-[100%]', delay: '0.45s', title: 'Funnel Metrics', icon: PieChart, color: 'text-purple-400' }
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div 
              key={i}
              className={`absolute w-80 h-52 border border-white/10 glass rounded-[2rem] p-8 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${isExploded ? item.pos + ' opacity-100 scale-100 rotate-y-12 rotate-x-6' : 'translate-x-0 translate-y-0 opacity-0 scale-50'}`}
              style={{ transitionDelay: item.delay }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl bg-white/5 ${item.color}`}>
                  <Icon size={28} />
                </div>
                <div className="flex gap-1">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full animate-ping" />
                  <div className="text-[10px] font-bold text-primary">LIVE</div>
                </div>
              </div>
              <h4 className="font-headline font-bold text-xl text-white mb-4 tracking-tight">{item.title}</h4>
              <div className="space-y-3">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-primary/40 w-[85%] transition-all duration-[2s] delay-700" style={{ width: isExploded ? '85%' : '0%' }} />
                </div>
                <div className="h-2 w-2/3 bg-white/5 rounded-full" />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Dynamic Background Glow */}
      <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-[1.5s] pointer-events-none ${isExploded ? 'opacity-100' : 'opacity-0'}`} />
    </section>
  );
}