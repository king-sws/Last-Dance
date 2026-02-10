"use client";

import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; 
import {
  ExternalLink,
  Github,
  X,
  Terminal,
  ArrowRight,
  Activity,
  Cpu,
  Layers,
  Star
} from "lucide-react";

// --- Types ---
export interface Project {
  imgSrc: string;
  title: string;
  description: string;
  tags: string[];
  primaryTech: string[];
  projectLink: string;
  githubLink?: string;
  isFeatured?: boolean;
  detailPageUrl?: string;
  metrics?: {
    completion?: string;
    complexity?: string;
    quality?: string;
  };
  category: "Frontend" | "Fullstack" | "Backend" | "Mobile";
  industry: string;
}

interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// --- Optimized Dialog Image Component ---
const DialogImage = memo(({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
          <div className="flex flex-col items-center gap-2">
            <div className="h-[1px] w-12 bg-zinc-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#ffe1c1] animate-[loading_1.5s_infinite_linear]" />
            </div>
            <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Loading_Asset</span>
          </div>
        </div>
      )}

      {hasError ? (
        <div className="flex h-full items-center justify-center text-zinc-500 bg-zinc-950">
          <span className="text-[10px] font-mono uppercase tracking-widest">[Asset_Error]</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-all duration-700  ${
            isLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
          onLoadingComplete={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
    </div>
  );
});

DialogImage.displayName = "DialogImage";

// --- Main Dialog Component ---
const ProjectDialog: React.FC<ProjectDialogProps> = ({ project, isOpen, onClose }) => {
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-zinc-950/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative w-full max-w-6xl max-h-full md:max-h-[85vh] overflow-hidden bg-zinc-950 border border-zinc-900 flex flex-col md:flex-row shadow-2xl"
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Trigger */}
            <button
              onClick={onClose}
              className="absolute top-0 right-0 z-50 p-4 bg-zinc-900 border-l border-b border-zinc-900 hover:bg-[#ffe1c1] hover:text-black transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Visual Pane */}
            <div className="w-full md:w-3/5 border-r border-zinc-900 flex flex-col">
              <div className="relative flex-grow overflow-hidden">
                <DialogImage src={project.imgSrc} alt={project.title} />
                
                {/* Meta Labels */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                   {project.isFeatured && (
                    <span className="bg-[#ffe1c1] text-black px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                      <Star className="w-3 h-3 fill-current" /> Priority_Build
                    </span>
                   )}
                  <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 text-[10px] font-mono uppercase text-zinc-400">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* External Links Bar */}
              <div className="p-px bg-zinc-900 grid grid-cols-2 gap-px border-t border-zinc-900">
                <Link
                  href={project.projectLink}
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-zinc-950 hover:bg-[#ffe1c1] hover:text-black transition-all py-5 text-[10px] font-mono uppercase tracking-[0.2em]"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Launch_Deploy
                </Link>
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center justify-center gap-3 bg-zinc-950 hover:bg-white hover:text-black transition-all py-5 text-[10px] font-mono uppercase tracking-[0.2em]"
                  >
                    <Github className="w-3.5 h-3.5" /> Source_Index
                  </Link>
                )}
              </div>
            </div>

            {/* Documentation Pane */}
            <div className="w-full md:w-2/5 flex flex-col overflow-y-auto bg-zinc-950 [scrollbar-width:thin] [scrollbar-color:rgb(39_39_42)_transparent]">
              <div className="p-8 md:p-10 space-y-10">
                
                {/* Identification */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Module_Specification</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white tracking-tighter uppercase mb-4 leading-none">
                    {project.title}
                  </h2>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light italic border-l border-zinc-800 pl-4">
                    "{project.description}"
                  </p>
                </div>

                {/* Technical Ledger */}
                <div className="space-y-px bg-zinc-900 border border-zinc-900">
                  <MetricRow icon={<Activity className="w-3 h-3"/>} label="System_Efficiency" value={project.metrics?.completion} />
                  <MetricRow icon={<Cpu className="w-3 h-3"/>} label="Architecture_Load" value={project.metrics?.complexity} />
                  <MetricRow icon={<Layers className="w-3 h-3"/>} label="Code_Integrity" value={project.metrics?.quality} />
                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> System_Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.primaryTech.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono border border-zinc-800 px-2 py-1 text-zinc-400 hover:text-[#ffe1c1] hover:border-[#ffe1c1]/30 transition-colors">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Action (Featured) */}
                {project.isFeatured && project.detailPageUrl && (
                  <Link
                    href={project.detailPageUrl}
                    onClick={onClose}
                    className="group flex items-center justify-between p-5 border border-[#ffe1c1]/30 bg-[#ffe1c1]/5 hover:bg-[#ffe1c1] hover:text-black transition-all duration-500"
                  >
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono uppercase opacity-70 tracking-tighter">Read_Full_Documentation</span>
                      <span className="text-xs font-black uppercase tracking-widest">Case Study Breakdown</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>

              {/* Footer Registry Info */}
              <div className="mt-auto p-6 bg-zinc-900/20 border-t border-zinc-900">
                <div className="flex justify-between items-center text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                  <div className="flex gap-4">
                    <span>ID: {project.industry}</span>
                    <span>VER: 2026.02</span>
                  </div>
                  <span className="text-emerald-900 font-bold animate-pulse">● System_Online</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Pure Helper for the Registry Grid ---
const MetricRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value?: string }) => (
  <div className="flex items-center justify-between p-4 bg-zinc-950 hover:bg-zinc-900 transition-colors">
    <div className="flex items-center gap-3">
      <span className="text-zinc-700">{icon}</span>
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">{label}</span>
    </div>
    <span className="text-[11px] font-mono text-[#ffe1c1] font-bold">{value || "N/A"}</span>
  </div>
);

export default memo(ProjectDialog);