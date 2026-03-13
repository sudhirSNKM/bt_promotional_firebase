
"use client";

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isHovering ? 2.5 : 1})`,
        }}
      >
        <div className="w-full h-full rounded-full bg-white opacity-80" />
      </div>
      <div
        className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-[9998] transition-opacity duration-300 opacity-20"
        style={{
          transform: `translate3d(${position.x - 192}px, ${position.y - 192}px, 0)`,
          background: 'radial-gradient(circle, rgba(255,0,0,0.3) 0%, rgba(21,23,26,0) 70%)',
        }}
      />
    </>
  );
}
