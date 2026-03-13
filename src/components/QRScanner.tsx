
"use client";

import React, { useState, useEffect } from 'react';
import { Smartphone, CheckCircle, Wifi, Battery, ShieldCheck } from 'lucide-react';

export default function QRScanner() {
  const [status, setStatus] = useState<'idle' | 'scanning' | 'verified'>('idle');

  useEffect(() => {
    const sequence = async () => {
      // Repeat cycle every 6 seconds
      while(true) {
        setStatus('idle');
        await new Promise(r => setTimeout(r, 1000));
        setStatus('scanning');
        await new Promise(r => setTimeout(r, 3000));
        setStatus('verified');
        await new Promise(r => setTimeout(r, 2000));
      }
    };
    sequence();
  }, []);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] tracking-[0.3em] uppercase mb-8">
            <ShieldCheck size={18} /> Protocol Verified
          </div>
          <h2 className="font-headline text-6xl md:text-8xl font-bold mb-8 leading-none tracking-tighter">
            ZERO FRICTION <br />
            <span className="text-primary">ACCESS</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Our proprietary scanning logic delivers sub-second verification. Digital passes slide into view, laser-scan for authenticity, and verify instantly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: 'ENC-512 Security', desc: 'Quantum resistant encryption' },
              { title: 'Offline Validation', desc: 'True local verification' },
              { title: 'Ghost Mode', desc: 'Anonymous entry protocols' },
              { title: 'Biometric Link', desc: 'Identity matched passes' }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                <h4 className="text-primary font-bold text-[10px] mb-2 tracking-[0.2em] uppercase">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center perspective-2000">
          <div className="relative w-80 h-[640px] bg-black rounded-[4rem] border-[14px] border-[#1A1C20] shadow-2xl overflow-hidden group rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-1000">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-30" />
            
            {/* Status Bar */}
            <div className="absolute top-0 w-full px-12 py-4 flex justify-between items-center text-[10px] text-white/40 z-20">
              <span className="font-bold">9:41</span>
              <div className="flex gap-2">
                <Wifi size={14} />
                <Battery size={14} />
              </div>
            </div>

            {/* App UI */}
            <div className="h-full w-full bg-[#0D0E10] flex flex-col items-center pt-24 px-8">
              <div className="w-full text-center mb-16">
                <p className="text-primary text-[10px] font-bold tracking-[0.5em] mb-3 uppercase">Scanning Pass</p>
                <h4 className="text-white font-headline text-3xl font-bold tracking-tight">VIP ENTRY</h4>
              </div>

              {/* Digital Ticket Container */}
              <div className={`relative w-full aspect-[3/4] rounded-[2rem] p-1 transition-all duration-700 ${status !== 'idle' ? 'scale-100 translate-y-0' : 'scale-90 translate-y-12 opacity-0'}`}>
                <div className="w-full h-full bg-white rounded-[1.8rem] flex flex-col items-center justify-center relative overflow-hidden">
                  {/* QR Pattern */}
                  <div className="p-8">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-black rounded-sm" />
                      ))}
                    </div>
                  </div>

                  {/* Laser Scan Line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-primary neon-glow z-10 transition-all duration-[2s] ease-in-out ${status === 'scanning' ? 'translate-y-[400px]' : 'translate-y-0 opacity-0'}`} />
                  
                  {/* Verified Overlay */}
                  <div className={`absolute inset-0 bg-primary flex flex-col items-center justify-center transition-all duration-700 ${status === 'verified' ? 'opacity-100 scale-100' : 'opacity-0 scale-150 pointer-events-none'}`}>
                     <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(255,255,255,0.4)] animate-bounce">
                      <CheckCircle size={60} className="text-primary" />
                     </div>
                     <p className="text-white font-black text-2xl tracking-[0.3em] uppercase">VERIFIED</p>
                  </div>
                </div>
                
                {/* Glow behind ticket */}
                <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full animate-pulse" />
              </div>

              <div className="w-full mt-12 space-y-4">
                 <div className="h-2 w-full bg-white/5 rounded-full" />
                 <div className="h-2 w-2/3 bg-white/5 rounded-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
