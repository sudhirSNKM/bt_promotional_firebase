
"use client";

import React, { useEffect, useState } from 'react';
import { Ticket } from 'lucide-react';

interface FloatingTicket {
  top: string;
  left: string;
  scale: number;
}

export default function CinematicHero() {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [floatingTickets, setFloatingTickets] = useState<FloatingTicket[]>([]);

  useEffect(() => {
    // Generate random positions only on the client after hydration
    const tickets = [...Array(6)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      scale: 0.5 + Math.random(),
    }));
    setFloatingTickets(tickets);
    setMounted(true);

    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Floating Elements Background */}
      <div className="absolute inset-0 z-0">
        {mounted && floatingTickets.map((ticket, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20 text-primary"
            style={{
              top: ticket.top,
              left: ticket.left,
              animationDelay: `${i * 0.5}s`,
              transform: `scale(${ticket.scale})`,
            }}
          >
            <Ticket size={120} strokeWidth={1} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <div 
          className={`transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            LIVE TICKETING REVOLUTION
          </div>
          <h1 className="font-headline text-6xl md:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            BLACK TICKER
          </h1>
          <p className="font-body text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            The world's most sophisticated event platform. <br className="hidden md:block" />
            Designed for the extraordinary.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="interactive group relative px-8 py-4 bg-primary text-white rounded-lg overflow-hidden transition-all hover:neon-glow active:scale-95">
              <span className="relative z-10 font-medium">EXPLORE EVENTS</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="interactive px-8 py-4 border border-white/10 hover:bg-white/5 rounded-lg transition-colors font-medium">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* Ticket Mask Reveal (Bottom) */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20`} />
    </section>
  );
}
