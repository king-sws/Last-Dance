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
import { ExternalLink, Github, Users, Zap, TrendingUp, ImageOff, Clock, Star, Code } from 'lucide-react';

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
  onProjectClick: (project: Project) => void; // Add this prop
}

// --- EnhancedWorkCard Component ---
const BASE_DELAY = 0.08;

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
  onProjectClick // Add this prop
}: WorkCardProps) => {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  const handleImageLoad = useCallback(() => {
    setImageStatus('loaded');
  }, []);

  const handleImageError = useCallback(() => {
    setImageStatus('error');
  }, []);

  // Create project object for dialog
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
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * BASE_DELAY,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (delayOffset: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * BASE_DELAY + delayOffset,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-zinc-800/50 shadow-xl border border-zinc-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/30 cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onClick={() => onProjectClick(projectData)} // Add click handler for dialog
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
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

        {/* Category Badge */}
        <motion.div
          className="absolute left-4 top-4"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <span className="inline-flex items-center rounded-full bg-cyan-400/20 px-3 py-1.5 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-400/30 backdrop-blur-sm">
            {category}
          </span>
        </motion.div>

        {/* Industry Badge */}
        <motion.div
          className="absolute right-4 top-4"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          custom={0.15}
        >
          <span className="inline-flex items-center rounded-full bg-zinc-700/60 px-3 py-1.5 text-xs font-semibold text-zinc-300 ring-1 ring-zinc-600/40 backdrop-blur-sm">
            {industry}
          </span>
        </motion.div>

        {/* Click indicator overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Subtle "click to view" indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-zinc-900/80 backdrop-blur-sm rounded-full p-2">
            <ExternalLink className="h-4 w-4 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <motion.div
          className="mb-3"
          variants={contentVariants}
          custom={0.2}
        >
          <h3 className="text-xl font-bold leading-tight text-zinc-100 group-hover:text-cyan-300 transition-colors duration-300">
            {title}
          </h3>
        </motion.div>

        {/* Description */}
        <motion.div
          className="mb-4"
          variants={contentVariants}
          custom={0.25}
        >
          <p className="text-sm leading-relaxed text-zinc-400 line-clamp-3">
            {description}
          </p>
        </motion.div>

        {/* Tags Section */}
        <motion.div
          className="mb-4"
          variants={contentVariants}
          custom={0.28}
        >
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="inline-flex items-center rounded-md bg-purple-400/10 px-2.5 py-1 text-xs font-medium text-purple-300 ring-1 ring-purple-400/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * BASE_DELAY + 0.28 + tagIndex * 0.03,
                  duration: 0.3
                }}
              >
                {tag}
              </motion.span>
            ))}
            {tags.length > 3 && (
              <span className="inline-flex items-center rounded-md bg-zinc-700/50 px-2.5 py-1 text-xs font-medium text-zinc-400 ring-1 ring-zinc-600/40">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </motion.div>

        {/* Primary Tech Stack */}
        <motion.div
          className="mb-5"
          variants={contentVariants}
          custom={0.3}
        >
          <div className="flex flex-wrap gap-2">
            {primaryTech.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="inline-flex items-center rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-400 ring-1 ring-cyan-400/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * BASE_DELAY + 0.3 + techIndex * 0.05,
                  duration: 0.3
                }}
              >
                {tech}
              </motion.span>
            ))}
            {primaryTech.length > 4 && (
              <span className="inline-flex items-center rounded-full bg-zinc-700/50 px-3 py-1.5 text-xs font-medium text-zinc-400 ring-1 ring-zinc-600/40">
                +{primaryTech.length - 4}
              </span>
            )}
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Professional Metrics */}
        {metrics && (Object.values(metrics).some(Boolean)) && (
          <motion.div
            className="mb-5 rounded-lg border border-zinc-700/30 bg-gradient-to-r from-zinc-800/20 to-zinc-800/40 p-4"
            variants={contentVariants}
            custom={0.4}
          >
            <div className="flex items-center justify-between gap-4">
              {metrics.completion && (
                <div className="flex items-center gap-2 text-center flex-1">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <div>
                    <div className="text-sm font-semibold text-emerald-400">{metrics.completion}</div>
                    <div className="text-xs text-zinc-500">Complete</div>
                  </div>
                </div>
              )}
              {metrics.complexity && (
                <div className="flex items-center gap-2 text-center flex-1">
                  <Code className="h-4 w-4 text-blue-400" />
                  <div>
                    <div className="text-sm font-semibold text-blue-400">{metrics.complexity}</div>
                    <div className="text-xs text-zinc-500">Complexity</div>
                  </div>
                </div>
              )}
              {metrics.quality && (
                <div className="flex items-center gap-2 text-center flex-1">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <div>
                    <div className="text-sm font-semibold text-yellow-400">{metrics.quality}</div>
                    <div className="text-xs text-zinc-500">Quality</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          className="flex gap-3 mt-auto"
          variants={contentVariants}
          custom={0.45}
        >
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevent card click when clicking button
            className="group flex-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:from-cyan-400 hover:to-cyan-300 hover:shadow-cyan-500/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            aria-label={`View live demo of ${title}`}
          >
            <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Live Demo</span>
          </a>

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent card click when clicking button
              className="group flex items-center justify-center gap-2 rounded-lg border border-zinc-600 bg-zinc-700/50 px-4 py-3 text-sm font-semibold text-zinc-200 shadow-sm transition-all duration-300 hover:bg-zinc-600 hover:border-zinc-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              title="View Source Code"
              aria-label={`View source code for ${title}`}
            >
              <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Code</span>
            </a>
          )}
        </motion.div>
      </div>

      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 via-transparent to-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
});

EnhancedWorkCard.displayName = 'EnhancedWorkCard';

// --- Work Component ---
const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Dialog state - moved to the main component
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-10px 0px -10px 0px",
  });

  const mainFilters = ['All', 'React','Next.js', 'Fullstack' ];

  // Dialog handlers
  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  }, []);

  // Professional project data
const works: Project[] = [
    {
    imgSrc: '/image/project-1.jpg',
    title: 'Modern SaaS Landing Page with Productivity Focus',
    description: 'Built a conversion-focused SaaS landing page with modern animations and responsive design. Implemented smooth user interactions with Framer Motion, optimized for mobile-first experience, and structured for high conversion rates. Features compelling copywriting and clean UI/UX principles.',
    tags: ['Conversion Optimization', 'Modern UI/UX', 'Mobile-First'],
    primaryTech: ['Next.js', 'TypeScript', 'Framer Motion'],
    projectLink: 'https://saas-page-gamma.vercel.app/',
    githubLink: 'https://github.com/yourusername/saas-landing-page',
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
  githubLink: 'https://github.com/yourusername/enterprise-productivity-landing',
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
    githubLink: 'https://github.com/yourusername/design-tool-landing',
    category: 'Frontend',
    industry: 'SaaS',
    metrics: {
      completion: '100%',
      complexity: 'High',
      quality: 'A+',
    },
  },
  {
    imgSrc: '/image/Robot.png',
    title: 'HooBank - Modern FinTech Landing Page',
    description: 'Developed a sophisticated fintech landing page showcasing next-generation banking services with modern UI/UX principles. Built with React 18 and Tailwind CSS, featuring responsive design, smooth animations, and conversion-optimized user journeys. Implements contemporary financial service presentation with clean architecture and performance optimization.',
    tags: ['FinTech', 'Modern UI', 'Banking'],
    primaryTech: ['React 18', 'Tailwind CSS', 'Next.js'],
    projectLink: 'https://modern-web-ten.vercel.app/',
    githubLink: 'https://github.com/yourusername/hoobank-fintech',
    category: 'Frontend',
    industry: 'Fintech',
    metrics: {
      completion: '100%',
      complexity: 'High',
      quality: 'A+',
    }
  },
  {
    imgSrc: '/image/moo.jpeg',
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
    imgSrc: '/image/health.png',
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
    githubLink: 'https://github.com/yourusername/bookify-digital-library',
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
    githubLink: 'https://github.com/yourusername/prepwise-interview',
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
    githubLink: 'https://github.com/yourusername/team-chat',
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
    githubLink: 'https://github.com/yourusername/healthcare-dashboard',
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
    githubLink: 'https://github.com/yourusername/hotel-booking',
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
    githubLink: 'https://github.com/yourusername/crm-dashboard',
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

  // Memoized filtering
  const filteredWorks = useMemo(() => {
    let filtered = works;

    if (activeFilter !== 'All') {
      filtered = filtered.filter(work =>
        work.category === activeFilter || 
        work.primaryTech.includes(activeFilter) || 
        work.tags.includes(activeFilter)
      );
    }
    return filtered;
  }, [activeFilter, works]);

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  // Animation variants
  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
        {/* Professional Header */}
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

          {/* Professional Portfolio Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-zinc-800/40 to-zinc-800/20 border border-zinc-700/30">
              <div className="text-2xl font-bold text-cyan-400 mb-1">13+</div>
              <div className="text-zinc-400 text-sm">Projects</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-zinc-800/40 to-zinc-800/20 border border-zinc-700/30">
              <div className="text-2xl font-bold text-emerald-400 mb-1">95%</div>
              <div className="text-zinc-400 text-sm">Avg Quality</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-zinc-800/40 to-zinc-800/20 border border-zinc-700/30">
              <div className="text-2xl font-bold text-blue-400 mb-1">5</div>
              <div className="text-zinc-400 text-sm">Tech Stacks</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-zinc-800/40 to-zinc-800/20 border border-zinc-700/30">
              <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
              <div className="text-zinc-400 text-sm">Responsive</div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Filter System */}
        <motion.div
          className="mb-12 flex flex-col items-center"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Main Category Filters */}
          <div className="flex flex-wrap gap-3 mb-4 justify-center">
            {mainFilters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                variants={filterVariants}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all backdrop-blur-sm shadow-lg border
                  ${activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-400/20 to-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-cyan-400/20'
                    : 'bg-zinc-800/40 text-zinc-400 hover:bg-zinc-700/40 border-zinc-600/30 hover:border-zinc-500/50 hover:text-zinc-300'
                  }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-pressed={activeFilter === filter}
              >
                {filter}
                {filter !== 'All' && (
                  <span className="ml-2 text-xs opacity-60">
                    ({works.filter(work => 
                      work.category === filter || 
                      work.primaryTech.includes(filter) || 
                      work.tags.includes(filter)
                    ).length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>          
        </motion.div>

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
                  onProjectClick={handleProjectClick} // Pass the actual function
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
              className="text-center text-zinc-500 py-16"
            >
              <p className="text-xl font-semibold mb-4">No projects found for "{activeFilter}"</p>
              <p className="mb-6">Try adjusting your filters or view all projects.</p>
              <button
                onClick={() => handleFilterChange('All')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-cyan-500/20 text-cyan-300 border border-cyan-400/50 hover:from-cyan-400/30 hover:to-cyan-500/30 transition-all duration-300"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Add the ProjectDialog component here */}
      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />

    </section>
  );
};

export default Work;