
"use client";

import React, { useState, useEffect } from 'react';
import { Smartphone, CheckCircle, Wifi, Battery, ShieldCheck } from 'lucide-react';

export default function QRScanner() {
  const [status, setStatus] = useState<'scanning' | 'verified'>('scanning');

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(prev => (prev === 'scanning' ? 'verified' : 'scanning'));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-[#15171A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] tracking-[0.3em] uppercase mb-6">
            <ShieldCheck size={16} /> Secure Access
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
            INSTANT <br />
            <span className="text-primary">VERIFICATION</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            Our proprietary QR technology ensures secure, zero-friction entry for every guest. Experience the future of gate management with end-to-end encryption.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'ENC-256 Security', desc: 'Military grade encryption' },
              { title: 'Offline-Ready', desc: 'No internet required' },
              { title: 'Anti-Fraud', desc: 'Dynamic salt generation' },
              { title: 'Fast-Track', desc: 'Sub-second latency' }
            ].map((item, i) => (
              <div key={i} className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                <h4 className="text-primary font-bold text-xs mb-1 tracking-widest uppercase">{item.title}</h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-80 h-[640px] bg-black rounded-[3.5rem] border-[12px] border-gray-900 shadow-2xl overflow-hidden perspective-1000 group">
            {/* Status Bar */}
            <div className="absolute top-0 w-full px-10 py-4 flex justify-between items-center text-[10px] text-white/50 z-20">
              <span className="font-bold">9:41</span>
              <div className="flex gap-1.5">
                <Wifi size={12} />
                <Battery size={12} />
              </div>
            </div>

            {/* App UI */}
            <div className="h-full w-full bg-[#15171A] flex flex-col items-center pt-20 px-8">
              <div className="w-full text-center mb-12">
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] mb-2 uppercase">Verified Pass</p>
                <h4 className="text-white font-headline text-2xl font-bold tracking-tight">VIP: NEON VELOCITY</h4>
              </div>

              {/* QR Container */}
              <div className="relative w-full aspect-square bg-white rounded-2xl p-8 mb-10 overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.1)] group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full border-4 border-black/5 border-dashed flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-10 h-10 bg-black rounded-md" />
                    ))}
                  </div>
                </div>

                {/* Laser Effect */}
                {status === 'scanning' && (
                  <>
                    <div className="absolute left-0 w-full h-1.5 bg-primary neon-glow animate-scan z-10" />
                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                  </>
                )}

                {/* Success Overlay */}
                <div className={`absolute inset-0 bg-primary flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${status === 'verified' ? 'opacity-100' : 'opacity-0 scale-125 pointer-events-none'}`}>
                   <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4 shadow-xl">
                    <CheckCircle size={56} className="text-primary" />
                   </div>
                   <p className="text-white font-black text-xl tracking-[0.2em] uppercase">Verified</p>
                </div>
              </div>

              <div className="w-full space-y-4">
                 <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-[10px] text-primary font-bold tracking-widest mb-1 uppercase">Guest Identity</p>
                    <p className="text-sm font-medium text-white">ALEXANDER REED</p>
                 </div>
                 <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-[10px] text-primary font-bold tracking-widest mb-1 uppercase">Reserved Zone</p>
                    <p className="text-sm font-medium text-white uppercase">Front Stage • Section A1</p>
                 </div>
              </div>
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-36 h-1 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
