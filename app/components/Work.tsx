/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GitHubShowcaseCard from "@/cards/GitHubShowcaseCard";
import ProjectDialog from "./ProjectDialog";
import { FlipWords } from "./ui/flip-words";
import {
  ExternalLink,
  Github,
  Filter,
  ChevronDown,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// --- Type Definitions ---
interface Project {
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
  industry:
    | "SaaS"
    | "Healthcare"
    | "E-commerce"
    | "Fintech"
    | "Social"
    | "EdTech/Career"
    | "Productivity"
    | "Hospitality"
    | "Education";
}

interface WorkCardProps extends Project {
  index: number;
  onProjectClick: (project: Project) => void;
}

const ProjectImage = memo(
  ({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        {/* Technical Loader: Minimalist and Sharp */}
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
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`h-full w-full object-contain transition-all duration-1000 ease-out 
              ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"} 
               group-hover:scale-105`}
          />
        )}
        
        {/* Subtle Scanline Overlay */}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
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
          
          {/* Status Overlay (Shown on Hover) */}
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

          {/* Metrics Ledger */}
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

          {/* Tech Index */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
              {primaryTech.map((tech) => (
                <span key={tech} className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter hover:text-[#ffe1c1] transition-colors cursor-default">
                  #{tech}
                </span>
              ))}
            </div>

            {/* Actions: Direct and Sharp */}
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
    <div className="mb-16 border-b border-zinc-900">
      <div className="flex flex-wrap items-center gap-0">
        {mainFilters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`relative px-8 py-4 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                isActive 
                  ? "text-[#ffe1c1] bg-zinc-900/50" 
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30"
              }`}
            >
              {/* Active Indicator Line */}
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
            </button>
          );
        })}

        {/* Decorative System Info (Hidden on Mobile) */}
        <div className="ml-auto hidden lg:flex items-center px-8 text-[8px] font-mono text-zinc-700 tracking-widest uppercase">
          <span className="animate-pulse mr-2">●</span> Filter_Ready // Query_Active
        </div>
      </div>
    </div>
  );
};

// --- Main Work Component ---
const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  }, []);

  const works: Project[] = [
    // FEATURED PROJECTS
    {
      imgSrc: "/image/pro.png",
      title: "Propely - Property Management Platform",
      description:
        "A comprehensive property management solution that automates workflows, streamlines operations, and enhances tenant relationships. Features automated rent collection, maintenance tracking, tenant portals, and financial analytics.",
      tags: ["Property Management", "Automation", "Tenant Portal", "Analytics"],
      primaryTech: ["Next.js 16", "PostgreSQL", "Prisma", "Stripe"],
      projectLink: "https://propely.site",
      githubLink: "https://github.com/king-sws/property-management-platform",
      category: "Fullstack",
      industry: "SaaS",
      isFeatured: true,
      detailPageUrl: "#propely",
      metrics: {
        completion: "100%",
        complexity: "Very High",
        quality: "A+",
      },
    },
    {
      imgSrc: "/image/selo.png",
      title: "Sellora - E-commerce Platform",
      description:
        "A production-ready e-commerce platform engineered for conversion, security, and exceptional shopping experiences. Features advanced product management, secure checkout with Stripe, analytics dashboard, and inventory management.",
      tags: ["E-Commerce", "Stripe Payments", "Product Management", "Analytics"],
      primaryTech: ["Next.js 15", "PostgreSQL", "tRPC", "Stripe"],
      projectLink: "https://sellora-store.vercel.app",
      githubLink: "https://github.com/king-sws/sellora",
      category: "Fullstack",
      industry: "E-commerce",
      isFeatured: true,
      detailPageUrl: "#sellora",
      metrics: {
        completion: "100%",
        complexity: "Very High",
        quality: "A+",
      },
    },
    {
      imgSrc: "/image.jpg",
      title: "Blutto - SaaS Task Management Platform",
      description:
        "An enterprise-grade task management platform built for modern teams. Features real-time collaboration, Kanban boards, calendar views, role-based permissions, and integrated team chat with Stripe billing.",
      tags: ["Task Management", "Team Collaboration", "Real-time", "SaaS"],
      primaryTech: ["Next.js 16", "PostgreSQL", "Prisma", "WebSockets"],
      projectLink: "https://blutto.vercel.app",
      githubLink: "https://github.com/king-sws/blutto",
      category: "Fullstack",
      industry: "SaaS",
      isFeatured: true,
      detailPageUrl: "#blutto",
      metrics: {
        completion: "100%",
        complexity: "Very High",
        quality: "A+",
      },
    },

    // REGULAR PROJECTS
    {
      imgSrc: "/image/Cover-up.png",
      title: "Uply - AI-Powered Resume Builder Platform",
      description:
        "Developed an intelligent resume building platform that leverages AI to help job seekers create professional, ATS-optimized resumes. Features real-time AI suggestions, multiple template options, and smart content optimization to maximize interview chances.",
      tags: ["AI Integration", "Career Tech", "ATS Optimization"],
      primaryTech: ["Next.js", "TypeScript", "OpenAI API"],
      projectLink: "https://uply-resume.vercel.app/",
      githubLink: "https://github.com/king-sws/uply",
      category: "Fullstack",
      industry: "EdTech/Career",
      metrics: {
        completion: "100%",
        complexity: "High",
        quality: "A+",
      },
    },
    {
      imgSrc: "/image/project-1.jpg",
      title: "Modern SaaS Landing Page with Productivity Focus",
      description:
        "Built a conversion-focused SaaS landing page with modern animations and responsive design. Implemented smooth user interactions with Framer Motion, optimized for mobile-first experience, and structured for high conversion rates.",
      tags: ["Conversion Optimization", "Modern UI/UX", "Mobile-First"],
      primaryTech: ["Next.js", "TypeScript", "Framer Motion"],
      projectLink: "https://saas-page-gamma.vercel.app/",
      githubLink: "https://github.com/king-sws/Saas-page",
      category: "Frontend",
      industry: "Productivity",
      metrics: {
        completion: "100%",
        complexity: "High",
        quality: "A+",
      },
    },
    {
      imgSrc: "/image/project-2.jpg",
      title: "Enterprise-Grade Productivity Landing Page",
      description:
        "Developed a sophisticated dark-themed landing page showcasing advanced frontend architecture and user-centric design. Built with Next.js SSR for optimal performance.",
      tags: ["Enterprise UI", "Conversion Optimization", "Accessibility"],
      primaryTech: ["Next.js", "TypeScript", "Advanced CSS"],
      projectLink: "https://dark-landing-page-rho.vercel.app/",
      githubLink: "https://github.com/king-sws/Dark-Landing-Page",
      category: "Frontend",
      industry: "Productivity",
      metrics: {
        completion: "100%",
        complexity: "High",
        quality: "A+",
      },
    },
    {
      imgSrc: "/image/project-3.jpg",
      title: "Modern Design Tool Landing Page with Advanced UI",
      description:
        "Developed a sophisticated marketing website for a design collaboration platform featuring complex animations and modern interface design.",
      tags: ["Design Systems", "Animation", "Marketing Site", "Modern UI/UX"],
      primaryTech: ["React", "Next.js", "TypeScript", "Framer Motion"],
      projectLink: "https://modern-web-design-one.vercel.app/",
      githubLink: "https://github.com/king-sws/Modern-Web",
      category: "Frontend",
      industry: "SaaS",
      metrics: {
        completion: "100%",
        complexity: "High",
        quality: "A+",
      },
    },
    {
      imgSrc: "/image/Cover.png",
      title: "HooBank - Modern FinTech Landing Page",
      description:
        "Developed a sophisticated fintech landing page showcasing next-generation banking services with modern UI/UX principles.",
      tags: ["FinTech", "Modern UI", "Banking"],
      primaryTech: ["React 18", "Tailwind CSS", "Next.js"],
      projectLink: "https://modern-web-ten.vercel.app/",
      githubLink: "https://github.com/king-sws/Robot",
      category: "Frontend",
      industry: "Fintech",
      metrics: {
        completion: "100%",
        complexity: "High",
        quality: "A+",
      },
    },
    {
      imgSrc: "/image/Covers.png",
      title: "Next.js Prototype Development Framework",
      description:
        "Built a scalable Next.js development foundation with modern React architecture and TypeScript integration.",
      tags: ["Next.js Framework", "TypeScript", "Development Setup"],
      primaryTech: ["Next.js", "TypeScript", "React"],
      projectLink: "https://github.com/king-sws/My-Proto",
      githubLink: "https://github.com/king-sws/My-Proto",
      category: "Frontend",
      industry: "SaaS",
      metrics: {
        completion: "85%",
        complexity: "Medium",
        quality: "A",
      },
    },
    {
      imgSrc: "/image/healthcare.png",
      title: "Healthcare Application Development Setup",
      description:
        "Established foundation for a healthcare management system using Next.js with App Router architecture.",
      tags: ["Healthcare Setup", "Next.js App Router", "Medical Tech"],
      primaryTech: ["Next.js", "TypeScript", "App Router"],
      projectLink: "https://github.com/king-sws/health",
      githubLink: "https://github.com/king-sws/health",
      category: "Fullstack",
      industry: "Healthcare",
      metrics: {
        completion: "95%",
        complexity: "High",
        quality: "A",
      },
    },
    {
      imgSrc: "/image/ly.jpg",
      title: "Bookify - Digital Reading Platform",
      description:
        "Developed a comprehensive digital library platform featuring intelligent book search, reading progress tracking, and personalized recommendations.",
      tags: ["Digital Library", "Search Optimization", "User Experience"],
      primaryTech: ["Next.js", "React", "JavaScript"],
      projectLink: "https://bookify-gamma.vercel.app/",
      githubLink: "https://github.com/king-sws/Bookify",
      category: "Fullstack",
      industry: "SaaS",
      metrics: {
        completion: "90%",
        complexity: "High",
        quality: "A",
      },
    },
    {
      imgSrc: "/image/prep.png",
      title: "PrepWise - AI-Powered Interview Practice Platform",
      description:
        "Built a comprehensive interview preparation platform featuring AI-driven question generation and personalized feedback systems.",
      tags: ["AI Integration", "Authentication", "Career Development"],
      primaryTech: ["Next.js", "AI/ML APIs", "Authentication"],
      projectLink: "https://ai-interview-boot.vercel.app/",
      githubLink: "https://github.com/king-sws/prepwise-interview",
      category: "Fullstack",
      industry: "EdTech/Career",
      metrics: {
        completion: "100%",
        complexity: "High",
        quality: "A+",
      },
    },
    {
      imgSrc: "/image/s.png",
      title: "Real-time Chat Application",
      description:
        "Built a messaging platform with Socket.io for real-time communication, file upload functionality, and message history.",
      tags: ["Real-time", "WebSockets", "File Upload"],
      primaryTech: ["React", "Socket.io", "Node.js"],
      projectLink: "https://s-chat-84b6.onrender.com/",
      githubLink: "https://github.com/king-sws/S-Chat",
      category: "Fullstack",
      industry: "Social",
      metrics: {
        completion: "100%",
        complexity: "High",
        quality: "A",
      },
    },
    {
      imgSrc: "/image/med.png",
      title: "MedCare - Healthcare Analytics Dashboard",
      description:
        "Built a comprehensive healthcare management platform featuring real-time patient monitoring and advanced medical data analytics.",
      tags: ["Healthcare Analytics", "Real-time Monitoring", "HIPAA Compliance"],
      primaryTech: ["React", "Tailwind", "Javascript"],
      projectLink: "https://medical-six-teal.vercel.app/",
      githubLink: "https://github.com/king-sws/Medical",
      category: "Frontend",
      industry: "Healthcare",
      metrics: {
        completion: "100%",
        complexity: "High",
        quality: "A",
      },
    },
    {
      imgSrc: "/image/jjj.png",
      title: "HomeLand - Premium Property Booking Platform",
      description:
        "Developed a comprehensive vacation rental marketplace with intelligent search algorithms and real-time availability tracking.",
      tags: ["Property Management", "Real-time Booking", "Payment Integration"],
      primaryTech: ["React", "Tailwindcss", "Shadcn"],
      projectLink: "https://houses-eight-blond.vercel.app",
      githubLink: "https://github.com/king-sws/Houses",
      category: "Frontend",
      industry: "Productivity",
      metrics: {
        completion: "100%",
        complexity: "High",
        quality: "A+",
      },
    },
    {
      imgSrc: "/image/pag.png",
      title: "Ocean CRM - Enterprise Sales Automation Platform",
      description:
        "Built an intelligent CRM solution for B2B sales teams featuring automated lead scoring and sales pipeline visualization.",
      tags: ["CRM Software", "Sales Analytics", "Task Management"],
      primaryTech: ["React", "TypeScript", "TailwindCss"],
      projectLink: "https://crm-app-phi.vercel.app",
      githubLink: "https://github.com/king-sws/crm-dashboard",
      category: "Frontend",
      industry: "SaaS",
      metrics: {
        completion: "100%",
        complexity: "Medium",
        quality: "A",
      },
    },
    {
      imgSrc: "/image/homm.png",
      title: "AirStay - Modern Vacation Rental Marketplace",
      description:
        "Created a sophisticated Airbnb-inspired platform using React and Vite with lightning-fast performance.",
      tags: ["Vite", "Map Integration", "Dynamic Pricing", "Mobile Responsive"],
      primaryTech: ["React", "Vite", "Maps API", "ESLint"],
      projectLink: "https://github.com/king-sws",
      githubLink: "https://github.com/king-sws/Airbnb/",
      category: "Fullstack",
      industry: "Hospitality",
      metrics: {
        completion: "100%",
        complexity: "High",
        quality: "A",
      },
    },
  ];

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

  // Separate featured and regular projects for display
  const featuredProjects = filteredWorks.filter(w => w.isFeatured);
  const regularProjects = filteredWorks.filter(w => !w.isFeatured);

  return (
<section id="work" className="relative bg-zinc-950 py-26 px-6 sm:px-10 overflow-hidden">
  {/* The Architectural Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
       style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
  
  <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 pointer-events-none" />

  <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header: Engineered for Propely/Blutto style */}
<motion.div
  ref={headerRef}
  className="mb-20" // Removed text-center
  initial={{ opacity: 0, x: -20 }}
  animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
  transition={{ duration: 0.8, ease: "circOut" }}
>
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-l border-zinc-900 pl-8 relative">
    {/* Decorative Sand Accent */}
    <div className="absolute left-0 top-0 w-1 h-16 bg-[#ffe1c1]" />

    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-600">
          Portfolio_v2.0 / <span className="text-[#ffe1c1]">Selected_Developments</span>
        </span>
      </div>
      
      <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85] uppercase">
        The Registry<span className="text-[#ffe1c1] opacity-50">.</span>
      </h2>
      
      <p className="mt-8 text-zinc-500 text-lg font-light max-w-xl leading-relaxed">
        A documented index of <span className="text-white">production-grade</span> systems, 
        focusing on modular architecture and enterprise scalability.
      </p>
    </div>

    {/* Stats: Refactored to look like a Technical Spec Card */}
    <div className="grid grid-cols-2 gap-px bg-zinc-900 border border-zinc-900 rounded-sm overflow-hidden min-w-[300px]">
      {[
        { label: "Deployment_Count", value: `${works.length}+` },
        { label: "Featured_Assets", value: works.filter(w => w.isFeatured).length },
        { label: "Stack_Complexity", value: "High" },
        { label: "System_Uptime", value: "100%" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="bg-zinc-950 p-4 group hover:bg-zinc-900 transition-colors"
        >
          <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1 group-hover:text-[#ffe1c1] transition-colors">
            {stat.label}
          </div>
          <div className="text-xl font-bold text-white italic tracking-tighter">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  </div>
</motion.div>

        {/* Filters */}
        <ProjectFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          works={works}
        />

        {/* Featured Projects Section */}
        {/* {featuredProjects.length > 0 && activeFilter !== "Featured" && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
              </div>
              <button
                onClick={() => setActiveFilter("Featured")}
                className="text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2"
              >
                View All Featured
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {featuredProjects.slice(0, 3).map((project, i) => (
                <SimpleWorkCard
                  {...project}
                  key={project.title}
                  index={i}
                  onProjectClick={handleProjectClick}
                />
              ))}
            </div>
            <div className="border-t border-zinc-800 pt-12">
              <h3 className="text-xl font-semibold text-white mb-6">All Projects</h3>
            </div>
          </div>
        )} */}

{/* Projects Grid: Refactored for Architectural Precision */}
<AnimatePresence mode="wait">
  {filteredWorks.length > 0 ? (
    <motion.div
      key={activeFilter}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      // gap-px creates the thin "technical drawing" lines between cards
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

      {/* GitHub Card - Integrated into the grid flow */}
      {activeFilter !== "Featured" && (
        <div className="bg-zinc-950">
          <GitHubShowcaseCard index={filteredWorks.length} />
        </div>
      )}
    </motion.div>
  ) : (
    /* Empty State: Styled like a System Error/Log */
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
          className=" border-t border-zinc-900 pt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Identification Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="h-[1px] w-12 bg-zinc-800" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">
                Initiate_Collaboration
              </span>
              <div className="h-[1px] w-12 bg-zinc-800" />
            </div>

            <h3 className="mb-6 text-5xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-[0.85]">
              Request a <br />
              <span className="text-[#ffe1c1]">Technical_Proposal</span>
            </h3>

            <p className="mb-10 max-w-lg text-zinc-500 text-sm font-light leading-relaxed italic">
              "Currently accepting high-impact projects for Q2-Q3 2026. Specialized in 
              architecting scalable digital systems and full-stack integration."
            </p>

            <Link
              href="#contact"
              className="group relative flex items-center gap-6 bg-[#ffe1c1] text-black px-10 py-5 transition-all hover:pr-14"
            >
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                Start_Consultation
              </span>
              <ArrowRight className="w-5 h-5 absolute right-6 opacity-0 group-hover:opacity-100 group-hover:right-8 transition-all" />
              
              {/* Decorative Corner Accents */}
              <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-black/20" />
              <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-black/20" />
            </Link>

            {/* System Footer Signature */}
            <div className="mt-16 font-mono text-[9px] text-zinc-700 flex gap-8">
              <span>LAT: 34.0209° N</span>
              <span>LNG: 6.8416° W</span>
              <span className="text-zinc-800">// 2026_CORE_V1</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dialog */}
      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </section>
  );
};

export default Work;