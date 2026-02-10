"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ImageBlueprint = ({ src, alt, tech }: { src: string, alt: string, tech: string }) => {
  return (
    <div className="group relative overflow-hidden border border-zinc-900 bg-zinc-950">
      
      {/* 1. The Actual Project Image */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out opacity-60 group-hover:opacity-100" 
      />

      {/* 2. The Blueprint Overlay (Hidden by default, fades in on hover) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ backgroundImage: `linear-gradient(#ffe1c1 1px, transparent 1px), linear-gradient(90deg, #ffe1c1 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

        {/* Corner Measuring Brackets */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ffe1c1]" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#ffe1c1]" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ffe1c1]" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#ffe1c1]" />

        {/* Moving Scan Line */}
        <motion.div 
          initial={{ top: "-10%" }}
          whileHover={{ top: "110%" }}
          transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
          className="absolute left-0 right-0 h-[1px] bg-[#ffe1c1]/50 shadow-[0_0_15px_#ffe1c1] z-10"
        />

        {/* Metadata Label */}
        <div className="absolute bottom-6 right-6 bg-[#ffe1c1] px-3 py-1">
          <span className="text-[9px] font-black text-black uppercase tracking-tighter">
            REF_IMG // {tech} // 1920x1080
          </span>
        </div>

        {/* System Status Label */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 border border-[#ffe1c1]/30 bg-black/80 px-4 py-1 backdrop-blur-sm">
          <span className="text-[8px] font-mono text-[#ffe1c1] uppercase tracking-[0.4em]">
            Analyzing_Architecture...
          </span>
        </div>
      </div>

    </div>
  );
};

export default ImageBlueprint;