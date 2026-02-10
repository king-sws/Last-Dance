"use client"
import React, { useState, useEffect } from 'react';

const StatusFooter = () => {
  const [time, setTime] = useState("");

  // Live clock for Safi, Morocco (UTC+1)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 w-full z-[100] px-6 py-3 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md hidden md:block">
      <div className="flex justify-between items-center max-w-[1800px] mx-auto">
        
        {/* Left: System ID */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              System_Status: <span className="text-white">Operational</span>
            </span>
          </div>
          <span className="text-[10px] font-mono text-zinc-700">|</span>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">
            Port: <span className="text-zinc-300">8080</span>
          </span>
          </div>
        </div>

        {/* Center: Live Clock */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
          <span className="text-[9px] font-mono text-zinc-600 uppercase">Local_Time [MAR]</span>
          <span className="text-[11px] font-mono text-[#ffe1c1] font-bold tabular-nums">
            {time}
          </span>
        </div>

        {/* Right: Technical Metadata */}
        <div className="flex items-center gap-6 text-[10px] font-mono">
          <div className="flex flex-col items-end leading-none">
            <span className="text-zinc-700 text-[8px] uppercase mb-1">Architecture</span>
            <span className="text-zinc-400 uppercase tracking-tighter">Full_Stack_Node.v15</span>
          </div>
          <div className="h-6 w-px bg-zinc-900" />
          <div className="flex flex-col items-end leading-none">
            <span className="text-zinc-700 text-[8px] uppercase mb-1">Availability</span>
            <span className="text-emerald-500 font-bold tracking-widest">READY</span>
          </div>
        </div>

    </footer>
  );
};

export default StatusFooter;