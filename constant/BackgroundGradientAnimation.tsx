// ui/background-gradient-animation.tsx

'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BackgroundGradientAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-neutral-950/30 backdrop-blur-[100px] z-10"></div>
      
      {/* Animated gradient blobs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-30"
          style={{
            width: `${400 + i * 200}px`,
            height: `${400 + i * 200}px`,
            borderRadius: '50%',
            background: i % 2 === 0 ? 
              'radial-gradient(circle, rgba(14, 165, 233, 0.7) 0%, rgba(14, 165, 233, 0) 70%)' : 
              'radial-gradient(circle, rgba(45, 212, 191, 0.7) 0%, rgba(45, 212, 191, 0) 70%)'
          }}
          animate={{
            x: [
              `${Math.random() * 100 - 50}%`, 
              `${Math.random() * 100 - 50}%`, 
              `${Math.random() * 100 - 50}%`
            ],
            y: [
              `${Math.random() * 100 - 50}%`, 
              `${Math.random() * 100 - 50}%`, 
              `${Math.random() * 100 - 50}%`
            ]
          }}
          transition={{
            duration: 30 + i * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 z-20 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};