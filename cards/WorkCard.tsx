"use client";

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define props interface
interface WorkCardProps {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  index: number;
}

export const WorkCard = memo(({ imgSrc, title, tags, projectLink, index }: WorkCardProps) => {
  return (
    <motion.div
      className="group relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 ring-1 ring-inset ring-zinc-700 transition-colors h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {/* Fixed aspect ratio container for image */}
      <div className="relative w-full aspect-[1.25] rounded-xl mb-4 overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          priority={index < 3} // Prioritize loading for first visible items
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-300 will-change-transform"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />
      </div>
     
      {/* Content that will grow to fill available space */}
      <div className="flex items-start justify-between gap-4 flex-grow">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-zinc-400 bg-zinc-800/80 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-zinc-400 bg-zinc-800/80 px-2 py-1 rounded-full">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
        <div className="w-11 h-11 rounded-lg bg-cyan-400 grid place-items-center text-zinc-950 shrink-0 transition-transform group-hover:rotate-45">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
          </svg>
        </div>
      </div>
     
      <Link
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`View ${title} project`}
      />
     
      <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(200px_at_50%_120%,rgba(8,145,178,0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
});

WorkCard.displayName = 'WorkCard';