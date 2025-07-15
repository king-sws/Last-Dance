/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useCallback, useEffect, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GitHubShowcaseCard from "@/cards/GitHubShowcaseCard";
import ProjectDialog from "./ProjectDialog"; 
import { FlipWords } from "./ui/flip-words";
import { ExternalLink, Github, Users, Zap, TrendingUp, ImageOff, Clock, Star, Code, Filter } from 'lucide-react';

// shadcn/ui imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  metrics?: {
    completion?: string;
    complexity?: string;
    quality?: string;
  };
  category: 'Frontend' | 'Fullstack' | 'Backend' | 'Mobile';
  industry: 'SaaS' | 'Healthcare' | 'E-commerce' | 'Fintech' | 'Social' | 'EdTech/Career' | 'Productivity' | 'Hospitality' | 'Education';
}

interface WorkCardProps extends Project {
  index: number;
  onProjectClick: (project: Project) => void;
}

// --- Enhanced Project Metrics Component ---
const ProjectMetrics = ({ metrics }: { metrics: Project['metrics'] }) => {
  if (!metrics || !Object.values(metrics).some(Boolean)) return null;

  const getCompletionValue = (completion: string): number => {
    const value = parseInt(completion.replace('%', '')) || 0;
    return Math.min(Math.max(value, 0), 100);
  };

  const getComplexityConfig = (complexity: string) => {
    const configs = {
      low: {
        color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        dot: 'bg-emerald-400'
      },
      medium: {
        color: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
        dot: 'bg-amber-400'
      },
      high: {
        color: 'bg-red-500/20 text-red-400 border-red-500/30',
        dot: 'bg-red-400'
      }
    };
    return configs[complexity?.toLowerCase() as keyof typeof configs] || configs.medium;
  };

  const getQualityConfig = (quality: string) => {
    if (quality.includes('A+')) return { color: 'text-emerald-400', stars: 5 };
    if (quality.includes('A')) return { color: 'text-blue-400', stars: 4 };
    if (quality.includes('B')) return { color: 'text-amber-400', stars: 3 };
    if (quality.includes('C')) return { color: 'text-orange-400', stars: 2 };
    return { color: 'text-zinc-400', stars: 1 };
  };

  const MetricItem = ({ label, children, className = "" }: { 
    label: string; 
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={`flex items-center justify-between py-2 border-b border-zinc-700/30 last:border-b-0 ${className}`}>
      <span className="text-sm text-zinc-400 font-medium">{label}</span>
      <div className="flex items-center gap-2">
        {children}
      </div>
    </div>
  );

  const completionValue = metrics.completion ? getCompletionValue(metrics.completion) : 0;
  const complexityConfig = metrics.complexity ? getComplexityConfig(metrics.complexity) : null;
  const qualityConfig = metrics.quality ? getQualityConfig(metrics.quality) : null;

  return (
    <Card className="bg-zinc-800/50 gap-4 border-zinc-700/50 backdrop-blur-sm transition-all duration-200 hover:bg-zinc-800/70 hover:border-zinc-600/50">
      <CardHeader className="">
        <CardTitle className="text-sm pt-4 font-semibold text-zinc-200 flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          Project Metrics
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-1">
        {metrics.completion && (
          <MetricItem label="Completion">
            <div className="flex items-center gap-3 min-w-0 flex-1 max-w-32">
              <div className="flex-1 bg-zinc-700/50 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${completionValue}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-emerald-400 tabular-nums min-w-fit">
                {metrics.completion}
              </span>
            </div>
          </MetricItem>
        )}

        {metrics.complexity && complexityConfig && (
          <MetricItem label="Complexity">
            <Badge 
              variant="outline" 
              className={`${complexityConfig.color} border text-xs font-medium px-2 py-1 flex items-center gap-1.5`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${complexityConfig.dot}`} />
              {metrics.complexity}
            </Badge>
          </MetricItem>
        )}

        {metrics.quality && qualityConfig && (
          <MetricItem label="Quality Score">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < qualityConfig.stars 
                        ? `${qualityConfig.color} fill-current` 
                        : 'text-zinc-600'
                    }`} 
                  />
                ))}
              </div>
              <span className={`text-sm font-semibold ${qualityConfig.color} tabular-nums`}>
                {metrics.quality}
              </span>
            </div>
          </MetricItem>
        )}
      </CardContent>
    </Card>
  );
};

// --- Enhanced Work Card with shadcn/ui ---
const EnhancedWorkCard = memo(({
  imgSrc,
  title,
  description,
  tags,
  primaryTech,
  projectLink,
  githubLink,
  metrics,
  category,
  industry,
  index,
  onProjectClick
}: WorkCardProps) => {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  const handleImageLoad = useCallback(() => {
    setImageStatus('loaded');
  }, []);

  const handleImageError = useCallback(() => {
    setImageStatus('error');
  }, []);

  const projectData: Project = {
    imgSrc,
    title,
    description,
    tags,
    primaryTech,
    projectLink,
    githubLink,
    metrics,
    category,
    industry
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden bg-zinc-800/50 border-zinc-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer">
        {/* Image Container */}
        <div 
          className="relative h-48 w-full overflow-hidden bg-zinc-900"
          onClick={() => onProjectClick(projectData)}
        >
          {imageStatus === 'loading' && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/70 animate-pulse">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
            </div>
          )}

          {imageStatus === 'error' ? (
            <div className="flex h-full w-full items-center justify-center bg-zinc-900/70 text-zinc-500">
              <div className="text-center">
                <ImageOff className="mx-auto h-8 w-8 mb-2" />
                <div className="text-sm font-medium">Image not available</div>
              </div>
            </div>
          ) : (
            <img
              src={imgSrc}
              alt={`Screenshot of ${title} project`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
                imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'
              }`}
              loading={index < 3 ? 'eager' : 'lazy'}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-zinc-900/20" />

          {/* Category & Industry Badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between">
            <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-300 border-cyan-400/30 backdrop-blur-sm">
              {category}
            </Badge>
            <Badge variant="outline" className="bg-zinc-700/60 text-zinc-300 border-zinc-600/40 backdrop-blur-sm">
              {industry}
            </Badge>
          </div>

          {/* Click indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-full p-2">
              <ExternalLink className="h-4 w-4 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Card Content */}
        <CardContent className="p-6  flex flex-col flex-1">
          {/* Title */}
          <CardTitle className="text-xl font-bold leading-tight text-zinc-100 group-hover:text-cyan-300 transition-colors duration-300 mb-3">
            {title}
          </CardTitle>

          {/* Description */}
          <p className="text-sm leading-relaxed text-zinc-400 line-clamp-3 mb-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-purple-400/10 text-purple-300 border-purple-400/20">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="bg-zinc-700/50 text-zinc-400 border-zinc-600/40">
                +{tags.length - 3}
              </Badge>
            )}
          </div>

          {/* Primary Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {primaryTech.slice(0, 4).map((tech) => (
              <Badge key={tech} className="bg-cyan-400/10 text-cyan-400 border-cyan-400/20">
                {tech}
              </Badge>
            ))}
            {primaryTech.length > 4 && (
              <Badge variant="outline" className="bg-zinc-700/50 text-zinc-400 border-zinc-600/40">
                +{primaryTech.length - 4}
              </Badge>
            )}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Project Metrics */}
          <div className="mb-5">
            <ProjectMetrics metrics={metrics} />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <Button 
              asChild 
              className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-zinc-900 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              <a 
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View live demo of ${title}`}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>

            {githubLink && (
              <Button 
                variant="outline" 
                size="default"
                asChild
                className="border-zinc-600 bg-zinc-700/50 hover:bg-zinc-600 text-zinc-200 hover:text-white"
              >
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="View Source Code"
                  aria-label={`View source code for ${title}`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});

EnhancedWorkCard.displayName = 'EnhancedWorkCard';

// --- Enhanced Filter Component ---
const ProjectFilters = ({
  activeFilter,
  onFilterChange,
  works
}: {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  works: Project[];
}) => {
  const mainFilters = ['All', 'React', 'Next.js', 'Fullstack'];
  const categories = ['Frontend', 'Fullstack', 'Backend', 'Mobile'];
  const industries = ['SaaS', 'Healthcare', 'Fintech', 'Social', 'EdTech/Career', 'Productivity', 'Hospitality'];

  const getFilterCount = (filter: string) => {
    if (filter === 'All') return works.length;
    return works.filter(work =>
      work.category === filter ||
      work.primaryTech.includes(filter) ||
      work.tags.includes(filter) ||
      work.industry === filter
    ).length;
  };

  return (
    <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6 px-4 sm:px-0">
      {/* Main Filters */}
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {mainFilters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            onClick={() => onFilterChange(filter)}
            className={`transition-all text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2 ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-cyan-400/20 to-cyan-500/20 text-cyan-300 border-cyan-400/50 hover:from-cyan-400/30 hover:to-cyan-500/30'
                : 'bg-zinc-800/40 text-zinc-400 border-zinc-600/30 hover:bg-zinc-700/40 hover:border-zinc-500/50 hover:text-zinc-300'
            }`}
          >
            <span className="hidden sm:inline">{filter}</span>
            <span className="sm:hidden">
              {filter === 'Next.js' ? 'Next' : filter}
            </span>
            <Badge variant="secondary" className="ml-1 sm:ml-2 text-xs bg-zinc-700/50 text-zinc-400 px-1 sm:px-2">
              {getFilterCount(filter)}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Advanced Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center">
        <Select value={activeFilter} onValueChange={onFilterChange}>
          <SelectTrigger className="w-full sm:w-48 bg-zinc-800/40 border-zinc-600/30 text-zinc-300 text-sm sm:text-base">
            <Filter className="h-4 w-4 mr-2 flex-shrink-0" />
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-800 border-zinc-600">
            <SelectItem value="All">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category} ({getFilterCount(category)})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={activeFilter} onValueChange={onFilterChange}>
          <SelectTrigger className="w-full sm:w-48 bg-zinc-800/40 border-zinc-600/30 text-zinc-300 text-sm sm:text-base">
            <Zap className="h-4 w-4 mr-2 flex-shrink-0" />
            <SelectValue placeholder="Filter by industry" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-800 border-zinc-600">
            <SelectItem value="All">All Industries</SelectItem>
            {industries.map(industry => (
              <SelectItem key={industry} value={industry}>
                {industry} ({getFilterCount(industry)})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

// --- Main Work Component ---
const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-10px 0px -10px 0px",
  });

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  }, []);

  // Professional project data (keeping your existing data)
const works: Project[] = [
    {
    imgSrc: '/image/project-1.jpg',
    title: 'Modern SaaS Landing Page with Productivity Focus',
    description: 'Built a conversion-focused SaaS landing page with modern animations and responsive design. Implemented smooth user interactions with Framer Motion, optimized for mobile-first experience, and structured for high conversion rates. Features compelling copywriting and clean UI/UX principles.',
    tags: ['Conversion Optimization', 'Modern UI/UX', 'Mobile-First'],
    primaryTech: ['Next.js', 'TypeScript', 'Framer Motion'],
    projectLink: 'https://saas-page-gamma.vercel.app/',
    githubLink: 'https://github.com/king-sws/Saas-page',
    category: 'Frontend',
    industry: 'Productivity',
    metrics: {
      completion: '100%',
      complexity: 'High',
      quality: 'A+'
    }
  },
  {
  imgSrc: '/image/project-2.jpg',
  title: 'Enterprise-Grade Productivity Landing Page',
  description: 'Developed a sophisticated dark-themed landing page showcasing advanced frontend architecture and user-centric design. Built with Next.js SSR for optimal performance, featuring semantic HTML structure, accessibility compliance, and conversion-optimized copy. Implemented modern CSS techniques for responsive layouts and enhanced user engagement through strategic content hierarchy.',
  tags: ['Enterprise UI', 'Conversion Optimization', 'Accessibility'],
  primaryTech: ['Next.js', 'TypeScript', 'Advanced CSS'],
  projectLink: 'https://dark-landing-page-rho.vercel.app/',
  githubLink: 'https://github.com/king-sws/Dark-Landing-Page',
  category: 'Frontend',
  industry: 'Productivity',
  metrics: {
    completion: '100%',
    complexity: 'High',
    quality: 'A+'
  }
  },
  {
    imgSrc: '/image/project-3.jpg',
    title: 'Modern Design Tool Landing Page with Advanced UI',
    description: 'Developed a sophisticated marketing website for a design collaboration platform featuring complex animations and modern interface design. Implemented seamless scrolling experiences, dynamic content sections, and integration showcases with popular design tools. Built with performance optimization and conversion-focused architecture to demonstrate enterprise-level frontend capabilities.',
    tags: ['Design Systems', 'Animation', 'Marketing Site', "Modern UI/UX"],
    primaryTech: ['React', 'Next.js', 'TypeScript', 'Framer Motion'],
    projectLink: 'https://modern-web-design-one.vercel.app/',
    githubLink: 'https://github.com/king-sws/Modern-Web',
    category: 'Frontend',
    industry: 'SaaS',
    metrics: {
      completion: '100%',
      complexity: 'High',
      quality: 'A+',
    },
  },
  {
    imgSrc: '/image/Cover.png',
    title: 'HooBank - Modern FinTech Landing Page',
    description: 'Developed a sophisticated fintech landing page showcasing next-generation banking services with modern UI/UX principles. Built with React 18 and Tailwind CSS, featuring responsive design, smooth animations, and conversion-optimized user journeys. Implements contemporary financial service presentation with clean architecture and performance optimization.',
    tags: ['FinTech', 'Modern UI', 'Banking'],
    primaryTech: ['React 18', 'Tailwind CSS', 'Next.js'],
    projectLink: 'https://modern-web-ten.vercel.app/',
    githubLink: 'https://github.com/king-sws/Robot',
    category: 'Frontend',
    industry: 'Fintech',
    metrics: {
      completion: '100%',
      complexity: 'High',
      quality: 'A+',
    }
  },
  {
    imgSrc: '/image/Covers.png',
    title: 'Next.js Prototype Development Framework',
    description: 'Built a scalable Next.js development foundation with modern React architecture and TypeScript integration. Established project structure with optimized build configuration, Google Fonts integration, and deployment pipeline. Serves as a robust starting point for rapid prototype development and production-ready applications.',
    tags: ['Next.js Framework', 'TypeScript', 'Development Setup'],
    primaryTech: ['Next.js', 'TypeScript', 'React'],
    projectLink: 'https://github.com/king-sws/My-Proto',
    githubLink: 'https://github.com/king-sws/My-Proto',
    category: 'Frontend',
    industry: 'SaaS',
    metrics: {
      completion: '85%',
      complexity: 'Medium',
      quality: 'A',
    }
  },
  {
    imgSrc: '/image/healthcare.png',
    title: 'Healthcare Application Development Setup',
    description: 'Established foundation for a healthcare management system using Next.js with App Router architecture. Configured development environment with modern React patterns, TypeScript integration, and Geist font optimization. Project setup includes healthcare-focused folder structure and component architecture planning for medical data handling and appointment systems.',
    tags: ['Healthcare Setup', 'Next.js App Router', 'Medical Tech'],
    primaryTech: ['Next.js', 'TypeScript', 'App Router'],
    projectLink: 'https://github.com/king-sws/health',
    githubLink: 'https://github.com/king-sws/health',
    category: 'Fullstack',
    industry: 'Healthcare',
    metrics: {
      completion: '95%',
      complexity: 'High Potential',
      quality: 'Foundation',
    },
  },
  {
    imgSrc: '/image/ly.jpg',
    title: 'Bookify - Digital Reading Platform',
    description: 'Developed a comprehensive digital library platform featuring intelligent book search, reading progress tracking, and personalized recommendations. Built with Next.js and modern React patterns, implementing efficient data management and user experience optimization. Features include book categorization, user reviews, and search functionality for enhanced book discovery.',
    tags: ['Digital Library', 'Search Optimization', 'User Experience'],
    primaryTech: ['Next.js', 'React', 'JavaScript'],
    projectLink: 'https://bookify-gamma.vercel.app/',
    githubLink: 'https://github.com/king-sws/Bookify',
    category: 'Fullstack',
    industry: 'SaaS',
    metrics: {
      completion: '90%',
      complexity: 'High',
      quality: 'A',
    },
  },
  {
    imgSrc: '/image/Interveiws.png',
    title: 'PrepWise - AI-Powered Interview Practice Platform',
    description: 'Built a comprehensive interview preparation platform featuring AI-driven question generation and personalized feedback systems. Implemented secure user authentication, real-time AI integration for interview simulation, and performance analytics. Designed to help job seekers practice and improve their interview skills through intelligent coaching and assessment.',
    tags: ['AI Integration', 'Authentication', 'Career Development'],
    primaryTech: ['Next.js', 'AI/ML APIs', 'Authentication'],
    projectLink: 'https://ai-interview-boot.vercel.app/',
    githubLink: 'https://github.com/king-sws/prepwise-interview',
    category: 'Fullstack',
    industry: 'EdTech/Career',
    metrics: {
      completion: '100%',
      complexity: 'High',
      quality: 'A+',
    },
  },
  {
    imgSrc: '/image/chat.jpg',
    title: 'Real-time Chat Application',
    description: 'Built a messaging platform with Socket.io for real-time communication, file upload functionality, and message history. Implemented user authentication, typing indicators, and message encryption for security.',
    tags: ['Real-time', 'WebSockets', 'File Upload',],
    primaryTech: ['React', 'Socket.io', 'Node.js'],
    projectLink: 'https://s-chat-84b6.onrender.com/',
    githubLink: 'https://github.com/king-sws/S-Chat',
    category: 'Fullstack',
    industry: 'Social',
    metrics: {
      completion: '100%',
      complexity: 'High',
      quality: 'A'
    }
  },
  {
    imgSrc: '/image/ho.jpeg',
    title: 'MedCare - Healthcare Analytics Dashboard',
    description: 'Build a comprehensive healthcare management platform featuring real-time patient monitoring, appointment scheduling automation, and advanced medical data analytics. Built with Chart.js and D3.js for dynamic visualizations, PostgreSQL optimization, and HIPAA-compliant role-based access control for secure patient data management.',
    tags: ['Next.js', 'Healthcare Analytics', 'Real-time Monitoring', 'HIPAA Compliance', 'Data Visualization'],
    primaryTech: ['React', 'Tailwind', 'Javascript'],
    projectLink: 'https://medical-six-teal.vercel.app/',
    githubLink: 'https://github.com/king-sws/Medical',
    category: 'Frontend',
    industry: 'Healthcare',
    metrics: {
      completion: '100%',
      complexity: 'High',
      quality: 'A'
    }
  },
  {
    imgSrc: '/image/jj.jpeg',
    title: 'HomeLand - Premium Property Booking Platform',
    description: 'Developed a comprehensive vacation rental marketplace with intelligent search algorithms, real-time availability tracking, and seamless booking workflows. Features automated pricing optimization, secure payment processing, property verification system, and comprehensive analytics dashboard for property owners.',
    tags: ['React', 'Property Management', 'Real-time Booking', 'Payment Integration', 'Analytics Dashboard'],
    primaryTech: ['React', 'Tailwindcss', 'Shadcn'],
    projectLink: 'https://houses-eight-blond.vercel.app',
    githubLink: 'https://github.com/king-sws/Houses',
    category: 'Frontend',
    industry: 'Productivity',
    metrics: {
      completion: '100%',
      complexity: 'High',
      quality: 'A+'
    }
  },
  {
    imgSrc: '/image/first1.png',
    title: 'Ocean CRM - Enterprise Sales Automation Platform',
    description: 'Built an intelligent CRM solution for B2B sales teams featuring automated lead scoring, sales pipeline visualization, and comprehensive customer analytics. Includes task management, team collaboration tools, reporting dashboard, and multi-tier pricing system with subscription management capabilities.',
    tags: ['CRM Software', 'Sales Analytics', 'Task Management', 'Team Collaboration', 'Subscription Management'],
    primaryTech: ['React', 'TypeScript', 'TailwindCss'],
    projectLink: 'https://crm-app-phi.vercel.app',
    githubLink: 'https://github.com/king-sws/crm-dashboard',
    category: 'Frontend',
    industry: 'SaaS',
    metrics: {
      completion: '100%',
      complexity: 'Medium',
      quality: 'A'
    }
  },
  {
    imgSrc: '/image/Hotql.png',
    title: 'AirStay - Modern Vacation Rental Marketplace',
    description: 'Created a sophisticated Airbnb-inspired platform using React and Vite with lightning-fast performance. Features advanced property search with map integration, dynamic pricing engine, comprehensive booking system, host dashboard, guest reviews, and mobile-responsive design optimized for modern travel experiences.',
    tags: ['React', 'Vite', 'Map Integration', 'Dynamic Pricing', 'Mobile Responsive', 'Travel Platform'],
    primaryTech: ['React', 'Vite', 'Maps API', 'ESLint'],
    projectLink: 'https://github.com/king-sws',
    githubLink: 'https://github.com/king-sws/Airbnb/',
    category: 'Fullstack',
    industry: 'Hospitality',
    metrics: {
      completion: '100%',
      complexity: 'High',
      quality: 'A'
    }
  }

];

  const filteredWorks = useMemo(() => {
    let filtered = works;

    if (activeFilter !== 'All') {
      filtered = filtered.filter(work =>
        work.category === activeFilter || 
        work.primaryTech.includes(activeFilter) || 
        work.tags.includes(activeFilter) ||
        work.industry === activeFilter
      );
    }
    return filtered;
  }, [activeFilter, works]);

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const timer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = "auto";
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <section id="work" className="sec py-24 bg-zinc-900/50 relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Enhanced Header with shadcn/ui */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-100">
            <FlipWords
              words={["Full-Stack", "Production-Ready", "Scalable", "Enterprise-Grade"]}
              className="text-cyan-400"
              duration={3000}
            />
            Project Portfolio
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-8">
            A collection of production applications showcasing modern development practices, 
            scalable architectures, and clean code principles.
          </p>

          {/* Portfolio Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="p-4 gap-2 bg-zinc-800/40 border-zinc-700/30">
              <div className="text-2xl font-bold text-cyan-400 mb-1">13+</div>
              <div className="text-zinc-400 text-sm">Projects</div>
            </Card>
            <Card className="p-4 gap-2 bg-zinc-800/40 border-zinc-700/30">
              <div className="text-2xl font-bold text-emerald-400 mb-1">95%</div>
              <div className="text-zinc-400 text-sm">Avg Quality</div>
            </Card>
            <Card className="p-4 gap-2 bg-zinc-800/40 border-zinc-700/30">
              <div className="text-2xl font-bold text-blue-400 mb-1">5</div>
              <div className="text-zinc-400 text-sm">Tech Stacks</div>
            </Card>
            <Card className="p-4 gap-2 bg-zinc-800/40 border-zinc-700/30">
              <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
              <div className="text-zinc-400 text-sm">Responsive</div>
            </Card>
          </div>
        </motion.div>

        {/* Enhanced Filter System */}
        <ProjectFilters 
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          works={works}
        />

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredWorks.length > 0 ? (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredWorks.map((project, i) => (
                <EnhancedWorkCard 
                  {...project} 
                  key={project.title} 
                  index={i}
                  onProjectClick={handleProjectClick}
                />
              ))}

              {/* GitHub Showcase Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: filteredWorks.length * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <GitHubShowcaseCard index={filteredWorks.length} />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="no-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <Card className="max-w-md mx-auto bg-zinc-800/40 border-zinc-700/30">
                <CardContent className="p-8">
                  <p className="text-xl font-semibold mb-4 text-zinc-300">
                    No projects found for "{activeFilter}"
                  </p>
                  <p className="mb-6 text-zinc-500">
                    Try adjusting your filters or view all projects.
                  </p>
                  <Button
                    onClick={() => handleFilterChange('All')}
                    className="bg-gradient-to-r from-cyan-400/20 to-cyan-500/20 text-cyan-300 border-cyan-400/50 hover:from-cyan-400/30 hover:to-cyan-500/30"
                  >
                    View All Projects
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <Separator className="my-16 bg-zinc-700/50" />

        {/* Additional Professional Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-zinc-100 mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            Let's collaborate on your next project. I specialize in creating scalable, 
            user-focused applications using modern technologies.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-zinc-900 shadow-lg shadow-cyan-500/25"
          >
            <Link href={"#contact"} className="flex items-center gap-2">
            <Users className="h-5 w-5 mr-2" />
            Let's Work Together
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Project Dialog */}
      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </section>
  );
};

export default Work;