"use client";

import { memo, useState, useCallback, useMemo } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ExternalLink, Github, Users, Zap, TrendingUp, ImageOff, Star, GitBranch } from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface ProjectMetrics {
  users?: string;
  performance?: string;
  impact?: string;
  stars?: number;
  commits?: number;
}

interface WorkCardProps {
  imgSrc: string;
  title: string;
  description: string;
  tags: string[];
  primaryTech: string[];
  projectLink: string;
  githubLink?: string;
  metrics?: ProjectMetrics;
  category: 'Frontend' | 'Fullstack' | 'Backend' | 'Mobile' | 'DevOps';
  industry: 'SaaS' | 'Healthcare' | 'E-commerce' | 'Fintech' | 'Social' | 'Productivity' | 'AI/ML';
  index: number;
  featured?: boolean;
  status?: 'live' | 'development' | 'archived';
}

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================

const ANIMATION_CONFIG = {
  BASE_DELAY: 0.06,
  STAGGER_DELAY: 0.03,
  HOVER_TRANSITION: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
  CONTENT_TRANSITION: { duration: 0.4, ease: "easeOut" }
} as const;

const THEME_CONFIG = {
  GRADIENT_OVERLAYS: {
    light: "from-white/5 via-transparent to-white/10",
    featured: "from-blue-500/10 via-transparent to-purple-500/10"
  },
  STATUS_COLORS: {
    live: "bg-green-100 text-green-800 border-green-200",
    development: "bg-yellow-100 text-yellow-800 border-yellow-200",
    archived: "bg-gray-100 text-gray-600 border-gray-200"
  }
} as const;

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
    rotateX: 8
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: index * ANIMATION_CONFIG.BASE_DELAY,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (delayOffset: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delayOffset,
      ...ANIMATION_CONFIG.CONTENT_TRANSITION
    }
  })
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hoverVariants: Variants = {
  hover: {
    y: -8,
    rotateX: -2,
    rotateY: 2,
    scale: 1.02,
    transition: ANIMATION_CONFIG.HOVER_TRANSITION
  }
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const formatMetricValue = (value: string | number | undefined): string => {
  if (!value) return '';
  
  if (typeof value === 'number') {
    if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
    return value.toString();
  }
  
  return value;
};

const getCategoryColor = (category: WorkCardProps['category']) => {
  const colors = {
    Frontend: 'bg-blue-50 text-blue-700 border-blue-200',
    Fullstack: 'bg-purple-50 text-purple-700 border-purple-200',
    Backend: 'bg-green-50 text-green-700 border-green-200',
    Mobile: 'bg-orange-50 text-orange-700 border-orange-200',
    DevOps: 'bg-red-50 text-red-700 border-red-200'
  };
  return colors[category] || colors.Frontend;
};

const getIndustryColor = (industry: WorkCardProps['industry']) => {
  const colors = {
    SaaS: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Healthcare: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'E-commerce': 'bg-pink-50 text-pink-700 border-pink-200',
    Fintech: 'bg-amber-50 text-amber-700 border-amber-200',
    Social: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    Productivity: 'bg-slate-50 text-slate-700 border-slate-200',
    'AI/ML': 'bg-violet-50 text-violet-700 border-violet-200'
  };
  return colors[industry] || colors.SaaS;
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const WorkCard = memo<WorkCardProps>(({
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
  featured = false,
  status = 'live'
}) => {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [isHovered, setIsHovered] = useState(false);

  // ============================================================================
  // MEMOIZED VALUES
  // ============================================================================
  
  const baseDelay = useMemo(() => index * ANIMATION_CONFIG.BASE_DELAY, [index]);
  
  const displayedTags = useMemo(() => tags.slice(0, 4), [tags]);
  const remainingTagsCount = useMemo(() => Math.max(0, tags.length - 4), [tags.length]);
  
  const displayedTech = useMemo(() => primaryTech.slice(0, 5), [primaryTech]);
  const remainingTechCount = useMemo(() => Math.max(0, primaryTech.length - 5), [primaryTech.length]);

  const hasMetrics = useMemo(() => 
    metrics && Object.values(metrics).some(value => value !== undefined && value !== null),
    [metrics]
  );

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================
  
  const handleImageLoad = useCallback(() => {
    setImageStatus('loaded');
  }, []);

  const handleImageError = useCallback(() => {
    setImageStatus('error');
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // ============================================================================
  // RENDER HELPERS
  // ============================================================================
  
  const renderImage = () => (
    <div className="relative h-52 w-full overflow-hidden bg-gray-50 rounded-t-xl">
      {/* Loading State */}
      {imageStatus === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
        </div>
      )}

      {/* Error State */}
      {imageStatus === 'error' ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400">
          <div className="text-center">
            <ImageOff className="mx-auto h-10 w-10 mb-3" />
            <div className="text-sm font-medium">Preview unavailable</div>
            <div className="text-xs text-gray-400 mt-1">Image could not be loaded</div>
          </div>
        </div>
      ) : (
        <>
          {/* Main Image */}
          <img
            src={imgSrc}
            alt={`${title} project preview`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`h-full w-full object-cover transition-all duration-700 ${
              imageStatus === 'loaded' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${isHovered ? 'scale-110' : 'scale-100'}`}
            loading={index < 3 ? 'eager' : 'lazy'}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${
            featured ? THEME_CONFIG.GRADIENT_OVERLAYS.featured : THEME_CONFIG.GRADIENT_OVERLAYS.light
          } from-black/30 via-transparent to-black/20 transition-opacity duration-500 ${
            isHovered ? 'opacity-60' : 'opacity-40'
          }`} />
        </>
      )}

      {/* Status Badge */}
      <motion.div
        className="absolute left-4 top-4"
        variants={contentVariants}
        custom={baseDelay + 0.1}
      >
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border backdrop-blur-sm ${THEME_CONFIG.STATUS_COLORS[status]} shadow-sm`}>
          <div className={`w-2 h-2 rounded-full mr-2 ${
            status === 'live' ? 'bg-green-500 animate-pulse' : 
            status === 'development' ? 'bg-yellow-500' : 'bg-gray-400'
          }`} />
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </motion.div>

      {/* Featured Badge */}
      {featured && (
        <motion.div
          className="absolute right-4 top-4"
          variants={contentVariants}
          custom={baseDelay + 0.15}
        >
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
            <Star className="w-3 h-3 mr-1.5 fill-current" />
            Featured
          </span>
        </motion.div>
      )}

      {/* Category & Industry Pills */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <motion.span
          className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium border backdrop-blur-md shadow-sm ${getCategoryColor(category)}`}
          variants={contentVariants}
          custom={baseDelay + 0.2}
        >
          {category}
        </motion.span>
        
        <motion.span
          className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium border backdrop-blur-md shadow-sm ${getIndustryColor(industry)}`}
          variants={contentVariants}
          custom={baseDelay + 0.25}
        >
          {industry}
        </motion.span>
      </div>
    </div>
  );

  const renderMetrics = () => {
    if (!hasMetrics) return null;

    const metricItems = [
      { key: 'users', value: metrics?.users, icon: Users, color: 'text-blue-600', label: 'Users' },
      { key: 'performance', value: metrics?.performance, icon: Zap, color: 'text-green-600', label: 'Score' },
      { key: 'impact', value: metrics?.impact, icon: TrendingUp, color: 'text-purple-600', label: 'Impact' },
      { key: 'stars', value: metrics?.stars ? formatMetricValue(metrics.stars) : undefined, icon: Star, color: 'text-yellow-600', label: 'Stars' },
      { key: 'commits', value: metrics?.commits ? formatMetricValue(metrics.commits) : undefined, icon: GitBranch, color: 'text-gray-600', label: 'Commits' }
    ].filter(item => item.value);

    return (
      <motion.div
        className="mb-6 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 shadow-sm"
        variants={contentVariants}
        custom={baseDelay + 0.4}
      >
        <div className={`grid gap-4 ${metricItems.length <= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
          {metricItems.map(({ key, value, icon: Icon, color, label }) => (
            <div key={key} className="text-center">
              <div className="mb-2 flex items-center justify-center gap-1.5">
                <Icon className={`h-4 w-4 ${color}`} />
                <div className="text-sm font-bold text-gray-900">{value}</div>
              </div>
              <div className="text-xs text-gray-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  // ============================================================================
  // MAIN RENDER
  // ============================================================================
  
  return (
    <motion.article
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md border transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/10 ${
        featured 
          ? 'border-blue-200 shadow-blue-100/50 hover:border-blue-300' 
          : 'border-gray-200 hover:border-gray-300'
      }`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover="hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
      role="article"
      aria-labelledby={`project-title-${index}`}
    >
      {/* Image Section */}
      {renderImage()}

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6 bg-white">
        {/* Title */}
        <motion.header
          className="mb-3"
          variants={contentVariants}
          custom={baseDelay + 0.3}
        >
          <h3 
            id={`project-title-${index}`}
            className="text-xl font-bold leading-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
          >
            {title}
          </h3>
        </motion.header>

        {/* Description */}
        <motion.div
          className="mb-4"
          variants={contentVariants}
          custom={baseDelay + 0.35}
        >
          <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
            {description}
          </p>
        </motion.div>

        {/* Primary Tech Stack */}
        <motion.div
          className="mb-4"
          variants={contentVariants}
          custom={baseDelay + 0.38}
        >
          <div className="flex flex-wrap gap-2">
            {displayedTech.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: baseDelay + 0.38 + techIndex * ANIMATION_CONFIG.STAGGER_DELAY,
                  duration: 0.3
                }}
              >
                {tech}
              </motion.span>
            ))}
            {remainingTechCount > 0 && (
              <span className="inline-flex items-center rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500 border border-gray-200">
                +{remainingTechCount}
              </span>
            )}
          </div>
        </motion.div>

        {/* Tags */}
        {displayedTags.length > 0 && (
          <motion.div
            className="mb-4"
            variants={contentVariants}
            custom={baseDelay + 0.42}
          >
            <div className="flex flex-wrap gap-1.5">
              {displayedTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md px-2.5 py-1 text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 border border-gray-200"
                >
                  {tag}
                </span>
              ))}
              {remainingTagsCount > 0 && (
                <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs text-gray-400 bg-gray-50 border border-gray-200">
                  +{remainingTagsCount}
                </span>
              )}
            </div>
          </motion.div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Metrics */}
        {renderMetrics()}

        {/* Action Buttons */}
        <motion.footer
          className="flex gap-3"
          variants={contentVariants}
          custom={baseDelay + 0.5}
        >
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
            aria-label={`View live demo of ${title}`}
          >
            <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:scale-110 group-hover/btn:rotate-12" />
            <span>View Live</span>
          </a>

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
              title="View Source Code"
              aria-label={`View source code for ${title}`}
            >
              <Github className="h-4 w-4 transition-transform group-hover/btn:scale-110 group-hover/btn:rotate-12" />
            </a>
          )}
        </motion.footer>
      </div>

      {/* Subtle Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
    </motion.article>
  );
});

WorkCard.displayName = 'WorkCard';