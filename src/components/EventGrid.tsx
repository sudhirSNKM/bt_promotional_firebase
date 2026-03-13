
"use client";

import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const events = [
  { id: 1, title: 'NEON VELOCITY', date: 'AUG 12, 2024', location: 'NEO-TOKYO', img: PlaceHolderImages[0]?.imageUrl },
  { id: 2, title: 'SYNTH WAVE', date: 'SEP 05, 2024', location: 'BERLIN', img: PlaceHolderImages[1]?.imageUrl },
  { id: 3, title: 'ARCHITECTS SUMMIT', date: 'OCT 20, 2024', location: 'LONDON', img: PlaceHolderImages[2]?.imageUrl },
  { id: 4, title: 'JAZZ NOIR', date: 'NOV 15, 2024', location: 'NEW YORK', img: PlaceHolderImages[3]?.imageUrl },
];

function EventCard({ event }: { event: typeof events[0] }) {
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="interactive group relative h-[500px] w-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative h-full w-full rounded-2xl transition-all duration-200 ease-out border border-white/10 overflow-hidden glass"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Image
          src={event.img || "https://picsum.photos/seed/400/800/600"}
          alt={event.title}
          fill
          className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="absolute bottom-0 p-6 w-full">
          <div className="mb-4">
            <span className="px-2 py-1 bg-primary text-white text-[10px] font-bold rounded">LIMITED</span>
          </div>
          <h3 className="font-headline text-3xl font-bold mb-2 tracking-tight">{event.title}</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-400 mb-6">
            <div className="flex items-center gap-2"><Calendar size={14} /> {event.date}</div>
            <div className="flex items-center gap-2"><MapPin size={14} /> {event.location}</div>
          </div>
          <button className="flex items-center justify-between w-full py-3 px-4 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all">
            <span>GET TICKET</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EventGrid() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="font-headline text-5xl font-bold mb-4">UPCOMING <span className="text-primary">EVENTS</span></h2>
          <p className="text-gray-400">Discover handpicked events that push the boundaries of entertainment, art, and technology.</p>
        </div>
        <button className="text-primary font-medium hover:underline flex items-center gap-2">
          VIEW ALL EVENTS <ArrowRight size={16} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
