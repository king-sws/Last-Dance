"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    
    // Check if hovering over interactive elements
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-[#ffe1c1] rounded-full pointer-events-none z-[999] hidden md:flex items-center justify-center"
      animate={{ 
        x: mousePos.x - 16, 
        y: mousePos.y - 16,
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? "rgba(255, 225, 193, 0.1)" : "transparent"
      }}
      transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
    >
      <div className="w-1 h-1 bg-[#ffe1c1]" />
    </motion.div>
  );
}