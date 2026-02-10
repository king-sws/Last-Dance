"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Github, Terminal, ArrowUpRight } from "lucide-react";

interface GitHubShowcaseCardProps {
  index: number;
}

const GitHubShowcaseCard = memo(({ index }: GitHubShowcaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full min-h-[400px] bg-zinc-950 flex flex-col border-r border-b border-zinc-900 overflow-hidden"
    >
      {/* Technical Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-900 bg-zinc-900/10">
        <div className="flex items-center gap-2">
          <Terminal className="w-3 h-3 text-zinc-500" />
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            External_Repository // Public_Access
          </span>
        </div>
      </div>

      <div className="relative flex flex-col p-8 h-full justify-between">
        {/* Large Faded Icon Background */}
        <Github className="absolute -right-8 -bottom-8 w-64 h-64 text-zinc-900 opacity-20 pointer-events-none group-hover:scale-110 group-hover:text-[#ffe1c1]/5 transition-all duration-700" />

        <div className="relative z-10">
          <h3 className="text-4xl font-bold tracking-tighter uppercase leading-[0.9] text-white mb-6">
            Explore the <br />
            <span className="text-[#ffe1c1]">Source_Index</span>
          </h3>
          
          <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-[240px] italic">
            "Direct access to experimental modules, legacy builds, and system architecture logs."
          </p>
        </div>

        <div className="relative z-10 mt-12 space-y-8">
          {/* Mock Console Text */}
          <div className="font-mono text-[9px] text-zinc-700 space-y-1">
            <p className="">{`> connecting to api.github.com...`}</p>
            <p className="text-[#ffe1c1]/40">{`> [STATUS]: 200 OK`}</p>
            <p className="">{`> FETCHING_ALL_REPOSITORIES`}</p>
          </div>

          <a
            href="https://github.com/king-sws"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 group/btn"
          >
            <div className="flex flex-col">
              <span className="text-[11px] font-mono font-black uppercase tracking-[0.2em] text-[#ffe1c1]">
                Launch_GitHub_Profile
              </span>
              <div className="h-[1px] w-full bg-zinc-800 mt-1 overflow-hidden">
                <div className="h-full bg-[#ffe1c1] w-0 group-hover/btn:w-full transition-all duration-500" />
              </div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center border border-zinc-800 group-hover/btn:border-[#ffe1c1] transition-colors">
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover/btn:text-[#ffe1c1]" />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
});

GitHubShowcaseCard.displayName = 'GitHubShowcaseCard';
export default GitHubShowcaseCard;