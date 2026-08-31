/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GitHubShowcaseCard from "@/cards/GitHubShowcaseCard";
import ProjectDialog from "./ProjectDialog";
import {
  ExternalLink,
  Github,
  Filter,
  ChevronDown,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { works, type Project } from "@/data/projects";

interface WorkCardProps extends Project {
  index: number;
  onProjectClick: (project: Project) => void;
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const ProjectImage = memo(
  ({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 z-10">
            <div className="flex flex-col items-center gap-2">
              <div className="h-[1px] w-12 bg-zinc-800 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="absolute inset-0 bg-[#ffe1c1]"
                />
              </div>
              <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
                Initializing_View
              </span>
            </div>
          </div>
        )}

        {hasError ? (
          <div className="flex h-full items-center justify-center text-zinc-800 bg-zinc-950 border border-zinc-900">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono uppercase tracking-tighter text-zinc-700 italic">
                [Image_Data_Missing]
              </span>
            </div>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`object-contain transition-all duration-1000 ease-out 
              ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"} 
               group-hover:scale-105`}
          />
        )}

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>
    );
  }
);

ProjectImage.displayName = "ProjectImage";

// --- Simple Work Card ---
const SimpleWorkCard = memo(
  ({
    imgSrc, title, description, tags, primaryTech, projectLink,
    githubLink, metrics, category, industry, index, isFeatured,
    detailPageUrl, onProjectClick,
  }: WorkCardProps) => {
    const projectData = { imgSrc, title, description, tags, primaryTech, projectLink, githubLink, metrics, category, industry, isFeatured, detailPageUrl };

    return (
      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
        className="group relative h-full bg-zinc-950 flex flex-col border-r border-b border-zinc-900"
      >
        {/* Top Header: System Category */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-900 bg-zinc-900/20">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            {category} // {industry}
          </span>
          {isFeatured && (
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe1c1] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffe1c1]"></span>
              </span>
              <span className="text-[10px] font-mono text-[#ffe1c1] uppercase tracking-tighter">Priority_Build</span>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="relative cursor-crosshair overflow-hidden border-b border-zinc-900" onClick={() => onProjectClick(projectData)}>
          <ProjectImage src={imgSrc} alt={title} priority={index < 3} />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
             <span className="text-[10px] font-mono text-white border border-white/20 px-4 py-2 uppercase tracking-[0.3em]">
               Open_Technical_Specs
             </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold text-white tracking-tighter uppercase mb-4 group-hover:text-[#ffe1c1] transition-colors leading-none">
            {title}
          </h3>

          <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 line-clamp-3 italic">
            "{description}"
          </p>

          {metrics && (
            <div className="grid grid-cols-2 gap-4 mb-8 py-4 border-y border-zinc-900/50 font-mono">
              <div className="flex flex-col">
                <span className="text-[8px] text-zinc-600 uppercase tracking-widest">Performance</span>
                <span className="text-xs text-zinc-300">{metrics.completion || "Optimized"}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-zinc-600 uppercase tracking-widest">Architecture</span>
                <span className="text-xs text-zinc-300">{metrics.complexity || "Standard"}</span>
              </div>
            </div>
          )}

          <div className="mt-auto">
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
              {primaryTech.map((tech) => (
                <span key={tech} className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter hover:text-[#ffe1c1] transition-colors cursor-default">
                  #{tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 border-t border-zinc-900 pt-6">
              <a
                href={isFeatured ? detailPageUrl : projectLink}
                target="_blank"
                className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#ffe1c1] hover:underline"
              >
                Launch_System →
              </a>
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-colors"
                >
                  Source_Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

SimpleWorkCard.displayName = "SimpleWorkCard";

const ProjectFilters = ({
  activeFilter,
  onFilterChange,
  works,
}: {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  works: Project[];
}) => {
  const mainFilters = ["All", "Featured", "Fullstack", "Frontend", "SaaS"];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.8 }}
      variants={staggerContainer}
      className="mb-16 border-b border-zinc-900"
    >
      <div className="flex flex-wrap items-center gap-0">
        {mainFilters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <motion.button
              key={filter}
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
              onClick={() => onFilterChange(filter)}
              className={`relative px-8 py-4 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                isActive 
                  ? "text-[#ffe1c1] bg-zinc-900/50" 
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30"
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ffe1c1]"
                />
              )}

              <span className="relative z-10">
                {filter}
                <span className="ml-2 opacity-30 text-[8px]">
                  ({works.filter(w => 
                    filter === "All" ? true : 
                    filter === "Featured" ? w.isFeatured : 
                    w.category === filter || w.industry === filter || w.primaryTech.includes(filter)
                  ).length})
                </span>
              </span>
            </motion.button>
          );
        })}

        <div className="ml-auto hidden lg:flex items-center px-8 text-[8px] font-mono text-zinc-700 tracking-widest uppercase">
          <span className="animate-pulse mr-2">●</span> Filter_Ready // Query_Active
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Work Component ---
const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  }, []);

  const filteredWorks = useMemo(() => {
    if (activeFilter === "All") return works;
    if (activeFilter === "Featured") return works.filter(w => w.isFeatured);
    return works.filter(
      (work) =>
        work.category === activeFilter ||
        work.primaryTech.includes(activeFilter) ||
        work.tags.includes(activeFilter) ||
        work.industry === activeFilter
    );
  }, [activeFilter, works]);

  const featuredProjects = filteredWorks.filter(w => w.isFeatured);
  const regularProjects = filteredWorks.filter(w => !w.isFeatured);

  return (
    <section id="work" className="relative bg-zinc-950 py-16 md:py-26 px-4 sm:px-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 pointer-events-none" />

      <div className="container mx-auto px-0 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-l border-zinc-900 pl-8 relative">
            <motion.div
              className="absolute left-0 top-0 w-1 bg-[#ffe1c1] origin-top"
              initial={{ height: 0 }}
              whileInView={{ height: 64 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-600">
                  Portfolio_v2.0 / <span className="text-[#ffe1c1]">Selected_Developments</span>
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.85] uppercase">
                The Registry<span className="text-[#ffe1c1] opacity-50">.</span>
              </h2>

              <p className="mt-8 text-zinc-500 text-lg font-light max-w-xl leading-relaxed">
                A documented index of <span className="text-white">production-grade</span> systems, 
                focusing on modular architecture and enterprise scalability.
              </p>
            </div>

            {/* Stats — stagger in as a group */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-px bg-zinc-900 border border-zinc-900 rounded-sm overflow-hidden"
            >
              {[
                { label: "Deployment_Count", value: `${works.length}+` },
                { label: "Featured_Assets", value: works.filter(w => w.isFeatured).length },
                { label: "Stack_Complexity", value: "High" },
                { label: "System_Uptime", value: "100%" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                  transition={{ duration: 0.4 }}
                  className="bg-zinc-950 p-4 group hover:bg-zinc-900 transition-colors"
                >
                  <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1 group-hover:text-[#ffe1c1] transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-xl font-bold text-white italic tracking-tighter">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Filters */}
        <ProjectFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          works={works}
        />

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredWorks.length > 0 ? (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 overflow-hidden"
            >
              {(activeFilter === "All" || activeFilter === "Featured" ? filteredWorks : regularProjects).map((project, i) => (
                <SimpleWorkCard
                  {...project}
                  key={project.title}
                  index={i}
                  onProjectClick={handleProjectClick}
                />
              ))}

              {activeFilter !== "Featured" && (
                <div className="bg-zinc-950">
                  <GitHubShowcaseCard index={filteredWorks.length} />
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 border border-dashed border-zinc-800 rounded-sm bg-zinc-950/50"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 mb-6 border border-zinc-800">
                   <span className="text-zinc-600 font-mono text-xs">!</span>
                </div>
                <h3 className="text-lg font-mono uppercase tracking-widest text-white mb-2">
                  Query_Null
                </h3>
                <p className="text-zinc-500 text-sm font-light mb-8 max-w-xs mx-auto italic">
                  No matching records found in the current registry view.
                </p>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#ffe1c1] border border-[#ffe1c1]/30 px-6 py-3 hover:bg-[#ffe1c1] hover:text-black transition-all duration-300"
                >
                  Reset_Database_View
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="border-t border-zinc-900 pt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-[1px] w-12 bg-zinc-800" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">
                Initiate_Collaboration
              </span>
              <div className="h-[1px] w-12 bg-zinc-800" />
            </div>

            <h3 className="mb-6 text-3xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-[0.85]">
              Request a <br />
              <span className="text-[#ffe1c1]">Technical_Proposal</span>
            </h3>

            <p className="mb-10 max-w-lg text-zinc-500 text-sm font-light leading-relaxed italic">
              "Currently accepting high-impact projects for Q2-Q3 2026. Specialized in 
              architecting scalable digital systems and full-stack integration."
            </p>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#contact"
                className="group relative flex items-center gap-6 bg-[#ffe1c1] text-black px-10 py-5 transition-all hover:pr-14"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em]">
                  Start_Consultation
                </span>
                <ArrowRight className="w-5 h-5 absolute right-6 opacity-0 group-hover:opacity-100 group-hover:right-8 transition-all" />

                <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-black/20" />
                <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-black/20" />
              </Link>
            </motion.div>

            <div className="mt-16 font-mono text-[9px] text-zinc-700 flex gap-8">
              <span>LAT: 34.0209° N</span>
              <span>LNG: 6.8416° W</span>
              <span className="text-zinc-800">// 2026_CORE_V1</span>
            </div>
          </div>
        </motion.div>
      </div>

      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </section>
  );
};

export default Work;