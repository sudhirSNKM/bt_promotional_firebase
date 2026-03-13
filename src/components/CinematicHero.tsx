
"use client";

import React, { useEffect, useState } from 'react';
import { Ticket } from 'lucide-react';

interface FloatingTicket {
  top: string;
  left: string;
  scale: number;
  rotation: number;
  delay: string;
}

export default function CinematicHero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [floatingTickets, setFloatingTickets] = useState<FloatingTicket[]>([]);

  useEffect(() => {
    const tickets = [...Array(12)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      scale: 0.5 + Math.random() * 1.2,
      rotation: Math.random() * 360,
      delay: `${i * 0.4}s`,
    }));
    setFloatingTickets(tickets);
    setMounted(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background perspective-2000">
      {/* 3D Ticket Universe */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          transform: `translateZ(${scrollY * -0.8}px)`,
          opacity: Math.max(0, 1 - scrollY / 1000)
        }}
      >
        {mounted && floatingTickets.map((ticket, i) => (
          <div
            key={i}
            className="absolute animate-float text-primary transition-all duration-1000 ease-out"
            style={{
              top: ticket.top,
              left: ticket.left,
              animationDelay: ticket.delay,
              transform: `scale(${ticket.scale}) rotate(${ticket.rotation + (scrollY * 0.05)}deg) translateZ(${i * 50}px)`,
              filter: `drop-shadow(0 0 15px rgba(255, 0, 0, ${0.2 + (i * 0.05)}))`,
              opacity: 0.1 + (i * 0.05)
            }}
          >
            <Ticket size={200} strokeWidth={0.2} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <div 
          className="transition-all duration-1000 ease-out"
          style={{ 
            opacity: mounted ? 1 : 0, 
            transform: mounted ? `translateY(${scrollY * 0.1}px)` : 'translateY(40px)' 
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] mb-8 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Infinite Ticketing Universe
          </div>
          <h1 className="font-headline text-7xl md:text-[12rem] font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-800 bg-clip-text text-transparent leading-none drop-shadow-[0_0_30px_rgba(255,0,0,0.2)]">
            BLACK <br className="md:hidden" /> TICKER
          </h1>
          <p className="font-body text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 tracking-wide">
            Enter a new dimension of event access. <br className="hidden md:block" />
            Designed for the extraordinary elite.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="interactive group relative px-12 py-6 bg-primary text-white rounded-xl overflow-hidden transition-all hover:neon-glow active:scale-95">
              <span className="relative z-10 font-bold tracking-[0.2em] text-xs">EXPLORE UNIVERSE</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="interactive px-12 py-6 border border-white/10 hover:bg-white/5 rounded-xl transition-colors font-bold tracking-[0.2em] text-xs text-gray-300">
              JOIN ECOSYSTEM
            </button>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-at-c from-primary/5 to-transparent pointer-events-none z-0" />
    </section>
  );
}
