"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SystemLoader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);
  const [status, setStatus] = useState("INITIALIZING_CORE");

  const logs = [
    "LOADING_ASSETS...",
    "FETCHING_REGISTRY_V2.0",
    "ESTABLISHING_SECURE_CONNECTION",
    "DECRYPTING_PROJECT_DATA",
    "SYSTEM_READY"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small delay for "Ready" state
          return 100;
        }
        
        // Update status text based on percentage
        const logIndex = Math.floor((prev / 100) * logs.length);
        setStatus(logs[logIndex]);
        
        return prev + 2; 
      });
    }, 40); // Total load time approx 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-[200] bg-zinc-950 flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-xs space-y-6">
        {/* Technical Header */}
        <div className="flex justify-between items-end border-b border-zinc-900 pb-2">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              Auth_Session
            </span>
            <span className="text-xs font-mono text-[#ffe1c1]">
              KING-SWS_PROTOCAL
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-500">{percent}%</span>
        </div>

        {/* The Progress Bar (Propely Style) */}
        <div className="h-[2px] w-full bg-zinc-900 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#ffe1c1]"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
          />
        </div>

        {/* Terminal Logs */}
        <div className="h-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={status}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]"
            >
              {`> ${status}`}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background Decorative ID */}
      <div className="absolute bottom-10 left-10 opacity-20">
        <span className="text-[8px] font-mono text-zinc-700 vertical-text tracking-[1em] uppercase">
          Build_2026_Architecture
        </span>
      </div>
    </motion.div>
  );
}