
"use client";

import React, { useState, useEffect } from 'react';
import { Smartphone, CheckCircle, Wifi, Battery } from 'lucide-react';

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
          <h2 className="font-headline text-5xl md:text-6xl font-bold mb-8 leading-tight">
            INSTANT <br />
            <span className="text-primary">VERIFICATION</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            Our proprietary QR technology ensures secure, zero-friction entry for every guest. Experience the future of gate management.
          </p>
          <ul className="space-y-4">
            {['Ultra-fast encryption', 'Offline verification', 'Dynamic fraud prevention'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-200">
                <div className="h-2 w-2 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-72 h-[580px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 w-full px-8 py-3 flex justify-between items-center text-[10px] text-white z-20">
              <span>9:41</span>
              <div className="flex gap-1">
                <Wifi size={10} />
                <Battery size={10} />
              </div>
            </div>

            {/* App UI */}
            <div className="h-full w-full bg-[#1A1C20] flex flex-col items-center pt-16 px-6">
              <div className="w-full text-center mb-10">
                <p className="text-primary text-[10px] font-bold tracking-widest mb-1">BLACK TICKER PASS</p>
                <h4 className="text-white font-headline text-xl font-bold">VIP: NEON VELOCITY</h4>
              </div>

              {/* QR Container */}
              <div className="relative w-full aspect-square bg-white rounded-xl p-6 mb-8 group overflow-hidden">
                <div className="w-full h-full border-4 border-black border-dashed flex items-center justify-center opacity-80">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-black rounded-sm" />
                    ))}
                  </div>
                </div>

                {/* Laser Effect */}
                {status === 'scanning' && (
                  <div className="absolute left-0 w-full h-1 bg-primary neon-glow animate-scan z-10" />
                )}

                {/* Success Overlay */}
                <div className={`absolute inset-0 bg-primary flex items-center justify-center transition-all duration-500 ${status === 'verified' ? 'opacity-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
                   <CheckCircle size={80} className="text-white animate-bounce" />
                </div>
              </div>

              <div className="w-full space-y-4">
                 <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-[10px] text-gray-400">GUEST</p>
                    <p className="text-sm font-medium">ALEXANDER REED</p>
                 </div>
                 <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-[10px] text-gray-400">ZONE</p>
                    <p className="text-sm font-medium">FRONT STAGE A1</p>
                 </div>
              </div>
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
