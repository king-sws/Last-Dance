"use client"
import React from 'react';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollProgress = () => {
  // 1. Get the raw scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();
  
  // 2. Create a smooth spring for the background fill
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 3. Map the 0-1 progress to a 0% to 100% position for the marker
  const markerTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 h-64 w-[2px] hidden lg:flex flex-col items-center z-[100]">
      
      {/* Static Top Label */}
      <span className="text-[8px] font-mono text-zinc-700 mb-4 rotate-90 tracking-[0.3em] whitespace-nowrap">
        START_REF
      </span>
      
      {/* The Rail Container */}
      <div className="relative flex-1 w-[1px] bg-zinc-900/50">
        
        {/* The Progress Fill (The line that grows) */}
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-zinc-800 origin-top"
          style={{ scaleY }}
        />

        {/* THE MOVING MARKER (The small horizontal indicator) */}
        <motion.div 
          className="absolute -left-[3px] w-[7px] h-[1px] bg-[#ffe1c1] shadow-[0_0_8px_#ffe1c1] z-10"
          style={{ top: markerTop }}
        />
      </div>

      {/* Static Bottom Label */}
      <span className="text-[8px] font-mono text-zinc-700 mt-4 rotate-90 tracking-[0.3em] whitespace-nowrap">
        END_ARCH
      </span>
    </div>
  );
};

export default ScrollProgress;