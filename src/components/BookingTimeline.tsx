"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Search, Ticket, CreditCard, Sparkles } from 'lucide-react';

const steps = [
  { id: 1, icon: Search, title: 'DISCOVER', desc: 'Browse our curated collection of elite events worldwide.' },
  { id: 2, icon: Ticket, title: 'SELECT', desc: 'Choose your preferred zone and interactive seating plan.' },
  { id: 3, icon: CreditCard, title: 'RESERVE', desc: 'Encrypted payment processing for instant ticket generation.' },
  { id: 4, icon: Sparkles, title: 'EXPERIENCE', desc: 'Enter with zero friction and enjoy the moment.' },
];

export default function BookingTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top > viewportHeight) return;

      const totalHeight = rect.height;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(Math.max(scrolled / (totalHeight - viewportHeight), 0), 1);
      
      const index = Math.floor(progress * steps.length);
      setActiveIndex(Math.min(index, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background overflow-hidden h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-16">
              <p className="text-primary text-[10px] font-bold tracking-[0.5em] mb-4 uppercase">The Journey</p>
              <h2 className="font-headline text-6xl md:text-8xl font-bold mb-8 leading-none tracking-tighter">
                HOW IT <br /><span className="text-primary">WORKS</span>
              </h2>
            </div>
            
            <div className="relative space-y-12">
              {/* Vertical Progress Line */}
              <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white/5" />
              <div 
                className="absolute left-8 top-0 w-[2px] bg-primary transition-all duration-700" 
                style={{ height: `${(activeIndex / (steps.length - 1)) * 100}%` }}
              />

              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i <= activeIndex;
                const isCurrent = i === activeIndex;
                return (
                  <div key={step.id} className={`flex gap-10 transition-all duration-700 ${isActive ? 'opacity-100 translate-x-4' : 'opacity-20'}`}>
                    <div className={`relative z-10 w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-500 ${isCurrent ? 'bg-primary border-primary text-white neon-glow scale-110' : 'bg-white/5 border-white/10 text-gray-500'}`}>
                      <Icon size={28} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className={`font-headline text-3xl font-bold mb-2 transition-colors duration-500 ${isCurrent ? 'text-white' : 'text-gray-600'}`}>{step.title}</h3>
                      <p className="text-gray-500 text-sm max-w-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visuals */}
          <div className="hidden lg:flex flex-col items-center justify-center perspective-2000">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`absolute w-[450px] h-[300px] rounded-[3rem] border border-white/10 glass flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${i === activeIndex ? 'scale-100 opacity-100 translate-z-0 neon-glow border-primary/40' : i < activeIndex ? 'scale-90 opacity-0 -translate-y-full -rotate-x-12' : 'scale-90 opacity-0 translate-y-full rotate-x-12'}`}
              >
                 <span className="text-[12rem] font-black text-white/[0.02] absolute inset-0 flex items-center justify-center pointer-events-none">0{i + 1}</span>
                 <step.icon size={100} className={`relative z-10 transition-colors duration-1000 ${i === activeIndex ? 'text-primary' : 'text-white/10'}`} strokeWidth={1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}