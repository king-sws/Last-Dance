// components/SkillsCard.tsx
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
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ 
            type: 'tween',
            duration: 0.3,
            delay: delay
        }}
      className="group relative bg-zinc-800/40 p-6 rounded-xl backdrop-blur-lg border border-zinc-700/50 hover:border-cyan-400/30 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-zinc-900/80 rounded-lg p-2 border border-zinc-700/50 group-hover:border-cyan-400/30 transition-colors">
                <Image
                src={item.imgSrc}
                alt={item.label}
                width={48}
                height={48}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                loading='lazy' // Lazy load below-fold images
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhQJ/q8MZ7wAAAABJRU5ErkJggg=="
                />
        </div>
        
        <div className="flex-1">
          <h3 className="text-cyan-200 font-medium group-hover:text-cyan-300 transition-colors">
            {item.customLabel || item.label}
          </h3>
          <p className="text-zinc-400 text-sm mt-1 group-hover:text-zinc-300 transition-colors">
            {item.desc}
          </p>
        </div>
      </div>
      
      {/* Hover effect background */}
      <div className="absolute inset-0 -z-10 rounded-xl bg-[radial-gradient(200px_at_0%_0%,rgba(8,145,178,0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default React.memo(SkillsCard);