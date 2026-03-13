
"use client";

import React, { useEffect, useState } from 'react';
import { Sparkles, Ticket, CheckCircle2 } from 'lucide-react';

export default function ConfettiSuccess() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('success-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="success-section" className="py-48 bg-background relative overflow-hidden flex flex-col items-center justify-center">
      {/* Confetti Particles (CSS based) */}
      <div className={`absolute inset-0 pointer-events-none ${active ? 'opacity-100' : 'opacity-0'}`}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-bounce"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? '#ff0000' : '#ffffff',
              opacity: 0.3,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 text-center transition-all duration-1000 ease-out transform ${active ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          <div className="relative w-32 h-32 md:w-48 md:h-48 bg-primary rounded-3xl flex items-center justify-center mx-auto neon-glow rotate-12 animate-float">
            <Ticket size={80} className="text-white md:size-[100px]" strokeWidth={1} />
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-primary shadow-2xl">
              <CheckCircle2 size={32} />
            </div>
          </div>
        </div>

        <h2 className="font-headline text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
          SUCCESSFULLY <br /> <span className="text-primary">BOOKED</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          Your journey begins now. Your digital pass is ready in your profile and sent to your encrypted wallet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <button className="px-10 py-5 bg-white text-black font-black tracking-[0.2em] uppercase text-xs rounded-lg hover:bg-primary hover:text-white transition-all">
             VIEW MY PASS
           </button>
           <button className="px-10 py-5 border border-white/10 hover:bg-white/5 text-white font-black tracking-[0.2em] uppercase text-xs rounded-lg transition-all flex items-center gap-2">
             <Sparkles size={16} /> SHARE EXPERIENCE
           </button>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <span className="font-headline font-black text-[30vw] text-white">READY</span>
      </div>
    </section>
  );
}
