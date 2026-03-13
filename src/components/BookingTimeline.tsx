
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
      const stepHeight = rect.height / steps.length;
      const current = Math.floor(Math.abs(rect.top) / stepHeight);
      setActiveIndex(Math.min(Math.max(current, 0), steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="sticky top-32">
          <h2 className="font-headline text-6xl font-bold mb-8">HOW IT <br /><span className="text-primary">WORKS</span></h2>
          <p className="text-gray-400 text-lg mb-12">We've reimagined the booking experience from the ground up to be as cinematic as the events themselves.</p>
          
          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i <= activeIndex;
              return (
                <div key={step.id} className={`flex gap-6 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-4' : 'opacity-30'}`}>
                  <div className={`p-4 rounded-xl border ${isActive ? 'bg-primary border-primary text-white neon-glow' : 'bg-white/5 border-white/10 text-gray-400'}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm max-w-sm">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-32 py-32">
          {steps.map((step, i) => (
            <div key={i} className={`h-[500px] w-full rounded-3xl border border-white/10 glass flex items-center justify-center text-8xl font-black text-white/5 transition-all duration-1000 ${i === activeIndex ? 'scale-100 opacity-100 neon-glow border-primary/50' : 'scale-90 opacity-20'}`}>
               0{i + 1}
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2 pointer-events-none" />
    </section>
  );
}
