'use client';

import React from 'react';

interface ProjectDividerProps {
  color: string;
  icon: React.ReactNode;
}

const ProjectDivider: React.FC<ProjectDividerProps> = ({ color, icon }) => {
  return (
    <div className="relative h-24 bg-zinc-950 flex items-center justify-center overflow-hidden">
      {/* 1. The Main Structural Line */}
      <div className="absolute inset-x-0 h-px bg-zinc-900" />
      
      {/* 2. Side Accent Lines (The "Blueprint" look) */}
      <div className="absolute inset-x-0 flex justify-between px-10 pointer-events-none">
        <div className="flex gap-1">
          <div className="w-[1px] h-3 bg-zinc-800" />
          <div className="w-[1px] h-3 bg-zinc-800" />
        </div>
        <div className="flex gap-1">
          <div className="w-[1px] h-3 bg-zinc-800" />
          <div className="w-[1px] h-3 bg-zinc-800" />
        </div>
      </div>

      {/* 3. The Central Gateway */}
      <div className="relative group">
        {/* Subtle Square Frame instead of a glowing circle */}
        <div className="relative w-14 h-14 bg-zinc-950 border border-zinc-800 flex items-center justify-center transition-all duration-700 group-hover:rotate-45">
          
          {/* Internal Corner Brackets */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-700" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-700" />

          {/* The Icon */}
          <div 
            className="relative z-10 transition-transform duration-700 group-hover:-rotate-45" 
            style={{ color }}
          >
            {icon}
          </div>
        </div>

        {/* 4. Vertical "Data" Stream (Subtle line above and below) */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 -top-12 w-px h-12 bg-gradient-to-t from-zinc-800 to-transparent" 
          style={{ '--color-stop': color } as React.CSSProperties}
        />
        <div 
          className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-px h-12 bg-gradient-to-b from-zinc-800 to-transparent" 
        />
      </div>
      
      {/* 5. Minimal Label */}
      <div className="absolute right-20 text-[8px] font-mono text-zinc-700 uppercase tracking-[0.5em] hidden md:block">
        Project_Transition_Secure
      </div>
    </div>
  );
};

export default ProjectDivider;