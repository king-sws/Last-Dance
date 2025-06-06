/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState } from 'react';
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

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project, isOpen, onClose }) => {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  if (!project) return null;

  const handleImageLoad = () => setImageStatus('loaded');
  const handleImageError = () => setImageStatus('error');

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const dialogVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-2xl border border-zinc-700/50 shadow-2xl"
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 transition-colors border border-zinc-600/50"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5 text-zinc-300" />
            </button>

            {/* Header Image */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden bg-zinc-800 rounded-t-2xl">
              {imageStatus === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/70 animate-pulse">
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
                  src={project.imgSrc}
                  alt={`Screenshot of ${project.title} project`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  className={`h-full w-full object-cover transition-opacity duration-500 ${
                    imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-zinc-900/20" />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="inline-flex items-center rounded-full bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-400/30 backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="inline-flex items-center rounded-full bg-zinc-700/60 px-4 py-2 text-sm font-semibold text-zinc-300 ring-1 ring-zinc-600/40 backdrop-blur-sm">
                  {project.industry}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Title */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-2">
                      {project.title}
                    </h2>
                  </div>

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
                      {project.primaryTech.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-400 ring-1 ring-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-md bg-purple-400/10 px-3 py-1.5 text-sm font-medium text-purple-300 ring-1 ring-purple-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-zinc-900 font-semibold rounded-lg hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                    >
                      <ExternalLink className="h-5 w-5" />
                      View Live Demo
                    </a>

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-zinc-600 bg-zinc-800/50 text-zinc-200 font-semibold rounded-lg hover:bg-zinc-700 hover:border-zinc-500 transition-all duration-300"
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
                  {project.metrics && (
                    <div className="rounded-lg border border-zinc-700/30 bg-gradient-to-br from-zinc-800/40 to-zinc-800/20 p-6">
                      <h3 className="text-lg font-semibold text-zinc-200 mb-4">Project Metrics</h3>
                      <div className="space-y-4">
                        {project.metrics.completion && (
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-emerald-400" />
                            <div>
                              <div className="text-sm font-medium text-zinc-300">Completion</div>
                              <div className="text-lg font-semibold text-emerald-400">
                                {project.metrics.completion}
                              </div>
                            </div>
                          </div>
                        )}
                        {project.metrics.complexity && (
                          <div className="flex items-center gap-3">
                            <Code className="h-5 w-5 text-blue-400" />
                            <div>
                              <div className="text-sm font-medium text-zinc-300">Complexity</div>
                              <div className="text-lg font-semibold text-blue-400">
                                {project.metrics.complexity}
                              </div>
                            </div>
                          </div>
                        )}
                        {project.metrics.quality && (
                          <div className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-yellow-400" />
                            <div>
                              <div className="text-sm font-medium text-zinc-300">Quality Score</div>
                              <div className="text-lg font-semibold text-yellow-400">
                                {project.metrics.quality}
                              </div>
                            </div>
                          </div>
                        )}
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

export default ProjectDialog;