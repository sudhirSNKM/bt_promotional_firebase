"use client";

import React, { useEffect, useState } from 'react';
import { Sparkles, Ticket, CheckCircle2 } from 'lucide-react';

interface Particle {
  top: string;
  left: string;
  bgColor: string;
  delay: string;
  duration: string;
}

export default function ConfettiSuccess() {
  const [active, setActive] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const newParticles = [...Array(60)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      bgColor: i % 2 === 0 ? '#ff0000' : '#ffffff',
      delay: `${Math.random() * 2}s`,
      duration: `${3 + Math.random() * 4}s`
    }));
    setParticles(newParticles);
    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('success-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="success-section" className="py-64 bg-black relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      {/* Confetti Particles */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
        {mounted && particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-bounce"
            style={{
              top: p.top,
              left: p.left,
              backgroundColor: p.bgColor,
              opacity: 0.2,
              animationDelay: p.delay,
              animationDuration: p.duration
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 text-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${active ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-12'}`}>
        <div className="relative mb-20 perspective-1000">
          <div className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full animate-pulse" />
          
          {/* 3D Flipping Ticket */}
          <div className={`relative w-48 h-48 md:w-64 md:h-64 bg-primary rounded-[3rem] flex items-center justify-center mx-auto transition-transform duration-[2s] neon-glow ${active ? 'rotate-y-[720deg] rotate-12' : 'rotate-y-0'}`}>
            <Ticket size={100} className="text-white md:size-[140px]" strokeWidth={0.5} />
            <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 text-primary shadow-[0_0_40px_rgba(255,255,255,0.5)]">
              <CheckCircle2 size={48} />
            </div>
          </div>
        </div>

        <p className="text-primary font-bold text-[10px] tracking-[0.8em] mb-6 uppercase">Mission Accomplished</p>
        <h2 className="font-headline text-6xl md:text-9xl font-bold mb-10 tracking-tighter leading-tight">
          SUCCESSFULLY <br /> <span className="text-primary">BOOKED</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed">
          Your journey into the extraordinary begins now. <br /> Your digital pass has been synchronized with your encrypted vault.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
           <button className="px-14 py-7 bg-white text-black font-black tracking-[0.3em] uppercase text-xs rounded-2xl hover:bg-primary hover:text-white transition-all shadow-2xl">
             VIEW MY PASS
           </button>
           <button className="px-14 py-7 border border-white/10 hover:bg-white/5 text-white font-black tracking-[0.3em] uppercase text-xs rounded-2xl transition-all flex items-center gap-3">
             <Sparkles size={18} /> SHARE EXPERIENCE
           </button>
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.01]">
        <span className="font-headline font-black text-[40vw] text-white">READY</span>
      </div>
    </section>
  );
}