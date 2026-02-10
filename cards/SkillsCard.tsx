"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface SkillItem {
  imgSrc: string;
  label: string;
  desc: string;
  customLabel?: boolean;
}

interface SkillsCardProps {
  item: SkillItem;
  delay: number;
}

const SkillsCard = ({ item, delay }: SkillsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ 
        type: 'tween',
        duration: 0.4,
        delay: delay
      }}
      className="group relative bg-zinc-900/20 p-5 rounded-2xl border border-zinc-900 hover:border-[#ffe1c1]/30 transition-all duration-500 overflow-hidden"
    >
      {/* Corner Tech Label (Only visible on hover or mobile) */}
      <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Type_Verified</span>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        {/* Icon Container with "Blueprint" Border */}
        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-zinc-950 rounded-xl border border-zinc-800 group-hover:border-[#ffe1c1]/20 group-hover:bg-zinc-900 transition-all duration-500">
          <Image
            src={item.imgSrc}
            alt={item.label}
            width={28}
            height={28}
            className="w-7 h-7 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
            loading='lazy'
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-zinc-100 font-bold text-sm tracking-tight group-hover:text-[#ffe1c1] transition-colors truncate">
            {item.label}
          </h3>
          <p className="text-zinc-500 text-[11px] leading-tight mt-0.5 font-light line-clamp-1 group-hover:text-zinc-400">
            {item.desc}
          </p>
        </div>
      </div>
      
      {/* Subtle Bottom Bar Animation */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-[#ffe1c1] w-0 group-hover:w-full transition-all duration-700 ease-in-out opacity-30" />
      
      {/* Geometric Mesh Hover Effect (Replaces the Cyan Radial) */}
      <div className="absolute inset-0 -z-10 bg-[#ffe1c1]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default React.memo(SkillsCard);