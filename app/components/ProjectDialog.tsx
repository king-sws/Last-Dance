/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState, useCallback, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Code, Star, Clock, Users, Zap, TrendingUp, ImageOff } from 'lucide-react';

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

interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Memoized sub-components for better performance
const ProjectImage = memo(({ imgSrc, title }: { imgSrc: string; title: string }) => {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  const handleImageLoad = useCallback(() => setImageStatus('loaded'), []);
  const handleImageError = useCallback(() => setImageStatus('error'), []);

  return (
    <div className="relative h-64 md:h-80 w-full overflow-hidden bg-zinc-800 rounded-t-2xl">
      {imageStatus === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/70">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
        </div>
      )}

      {imageStatus === 'error' ? (
        <div className="flex h-full w-full items-center justify-center bg-zinc-900/70 text-zinc-500">
          <div className="text-center">
            <ImageOff className="mx-auto h-12 w-12 mb-4" />
            <div className="text-lg font-medium">Image not available</div>
          </div>
        </div>
      ) : (
        <img
          src={imgSrc}
          alt={`Screenshot of ${title} project`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-zinc-900/20" />
    </div>
  );
});

const TechBadge = memo(({ tech }: { tech: string }) => (
  <span className="inline-flex items-center rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-400 ring-1 ring-cyan-400/20">
    {tech}
  </span>
));

const FeatureBadge = memo(({ tag }: { tag: string }) => (
  <span className="inline-flex items-center rounded-md bg-purple-400/10 px-3 py-1.5 text-sm font-medium text-purple-300 ring-1 ring-purple-400/20">
    {tag}
  </span>
));

const MetricItem = memo(({ icon: Icon, label, value, color }: { 
  icon: React.ElementType; 
  label: string; 
  value: string; 
  color: string; 
}) => (
  <div className="flex items-center gap-3">
    <Icon className={`h-5 w-5 ${color}`} />
    <div>
      <div className="text-sm font-medium text-zinc-300">{label}</div>
      <div className={`text-lg font-semibold ${color}`}>{value}</div>
    </div>
  </div>
));

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project, isOpen, onClose }) => {
  // Memoize expensive computations
  const techBadges = useMemo(() => 
    project?.primaryTech.map((tech, index) => (
      <TechBadge key={`${tech}-${index}`} tech={tech} />
    )) || [], 
    [project?.primaryTech]
  );

  const featureBadges = useMemo(() => 
    project?.tags.map((tag, index) => (
      <FeatureBadge key={`${tag}-${index}`} tag={tag} />
    )) || [], 
    [project?.tags]
  );

  const metrics = useMemo(() => {
    if (!project?.metrics) return null;
    
    const items = [];
    if (project.metrics.completion) {
      items.push(
        <MetricItem 
          key="completion"
          icon={Clock} 
          label="Completion" 
          value={project.metrics.completion} 
          color="text-emerald-400" 
        />
      );
    }
    if (project.metrics.complexity) {
      items.push(
        <MetricItem 
          key="complexity"
          icon={Code} 
          label="Complexity" 
          value={project.metrics.complexity} 
          color="text-blue-400" 
        />
      );
    }
    if (project.metrics.quality) {
      items.push(
        <MetricItem 
          key="quality"
          icon={Star} 
          label="Quality Score" 
          value={project.metrics.quality} 
          color="text-yellow-400" 
        />
      );
    }
    return items;
  }, [project?.metrics]);

  // Memoize animation variants to prevent recreation
  const backdropVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }), []);

  const dialogVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 400,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  }), []);

  // Memoize event handlers
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handleContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-2xl border border-zinc-700/50 shadow-2xl [scrollbar-width:thin] [scrollbar-color:rgb(63_63_70)_transparent]"
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleContentClick}
            style={{ 
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgb(63 63 70) transparent'
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-800/90 hover:bg-zinc-700 transition-colors border border-zinc-600/50"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5 text-zinc-300" />
            </button>

            {/* Header Image */}
            <ProjectImage imgSrc={project.imgSrc} title={project.title} />

            {/* Floating Badges */}
            <div className="absolute top-5 left-4 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-400/30 backdrop-blur-sm">
                {project.category}
              </span>
              <span className="inline-flex items-center rounded-full bg-zinc-700/60 px-4 py-2 text-sm font-semibold text-zinc-300 ring-1 ring-zinc-600/40 backdrop-blur-sm">
                {project.industry}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-2">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Project Overview</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {techBadges}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {featureBadges}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-zinc-900 font-semibold rounded-lg hover:from-cyan-400 hover:to-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                    >
                      <ExternalLink className="h-5 w-5" />
                      View Live Demo
                    </a>

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-zinc-600 bg-zinc-800/50 text-zinc-200 font-semibold rounded-lg hover:bg-zinc-700 hover:border-zinc-500 transition-all duration-200"
                      >
                        <Github className="h-5 w-5" />
                        View Source
                      </a>
                    )}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Project Metrics */}
                  {metrics && metrics.length > 0 && (
                    <div className="rounded-lg border border-zinc-700/30 bg-gradient-to-br from-zinc-800/40 to-zinc-800/20 p-6">
                      <h3 className="text-lg font-semibold text-zinc-200 mb-4">Project Metrics</h3>
                      <div className="space-y-4">
                        {metrics}
                      </div>
                    </div>
                  )}

                  {/* Project Details */}
                  <div className="rounded-lg border border-zinc-700/30 bg-gradient-to-br from-zinc-800/40 to-zinc-800/20 p-6">
                    <h3 className="text-lg font-semibold text-zinc-200 mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Category</span>
                        <span className="text-zinc-200 font-medium">{project.category}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Industry</span>
                        <span className="text-zinc-200 font-medium">{project.industry}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Technologies</span>
                        <span className="text-zinc-200 font-medium">{project.primaryTech.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Features</span>
                        <span className="text-zinc-200 font-medium">{project.tags.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(ProjectDialog);