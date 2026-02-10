"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* 1. Background Grid (The Blueprint) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      {/* 2. Technical Metadata */}
      <div className="absolute top-10 left-10 hidden md:block">
        <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.5em]">Error_Log: 0x404_Null_Pointer</span>
      </div>

      <div className="relative z-10 text-center">
        {/* The Error Code */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12rem] md:text-[18rem] font-black text-zinc-900 leading-none tracking-tighter"
        >
          404
        </motion.h1>

        {/* The Human Message */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tighter uppercase mb-4">
            System <span className="text-[#ffe1c1]">Link_Broken</span>
          </h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest max-w-xs mx-auto">
            The requested record does not exist in the current registry.
          </p>
        </div>
      </div>

      {/* 3. The Recovery Action */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 z-10"
      >
        <Link 
          href="/" 
          className="group relative px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-[#ffe1c1] transition-colors duration-500 flex items-center gap-4"
        >
          <div className="w-2 h-2 bg-[#ffe1c1] rounded-full animate-pulse" />
          <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">
            Run_System_Recovery (Home)
          </span>
        </Link>
      </motion.div>

      {/* 4. Bottom Coordinate Labels */}
      <div className="absolute bottom-10 right-10">
        <span className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">Loc: Internal_Server_Route</span>
      </div>
    </div>
  );
}