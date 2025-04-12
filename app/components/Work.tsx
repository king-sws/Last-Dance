"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WorkCard } from "@/cards/WorkCard";
import GitHubShowcaseCard from "@/cards/GitHubShowcaseCard";
import { FlipWords } from "./ui/flip-words";

interface Project {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  index?: number;
}

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  // More generous threshold and rootMargin to ensure header is visible
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-10px 0px -10px 0px",
  });
  
  const mainFilters = ['All', 'Next.js', 'React', 'Fullstack'];

  // Animation variants
  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Apply smooth scrolling only on initial load
  useEffect(() => {
    // Apply smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Remove smooth scrolling after initial load to improve performance
    const timer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = "auto";
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const works: Project[] = [
    {
      imgSrc: '/image/project-1.jpg',
      title: 'Dark SaaS Landing Page',
      tags: ['React', 'UI/UX Design', 'Responsive Layout', 'Animation'],
      projectLink: 'https://dark-landing-page-rho.vercel.app/'
    },
    {
      imgSrc: '/image/project-2.jpg',
      title: 'Cloud Service Marketing Platform',
      tags: ['Next.js', 'SSR', 'SEO Optimization', 'Conversion Focused'],
      projectLink: 'https://saas-page-gamma.vercel.app/'
    },
    {
      imgSrc: '/image/project-3.jpg',
      title: 'Modern Architecture Portfolio',
      tags: ['React', 'Parallax Effects', 'Image Optimization', 'CMS Integration'],
      projectLink: 'https://modern-web-design-one.vercel.app/'
    },
    {
      imgSrc: '/image/Robot.png',
      title: 'Payment Gateway Integration',
      tags: ['Next.js', 'Stripe API', 'Secure Transactions', 'E-commerce'],
      projectLink: 'https://modern-web-ten.vercel.app'
    },
    {
      imgSrc: '/image/moo.jpeg',
      title: 'Startup Landing Page',
      tags: ['Next.js', 'Performance Optimization', 'Lazy Loading', 'PWA'],
      projectLink: "https://www.github.com/king-sws"
    },
    {
      imgSrc: '/image/health.png',
      title: 'MedBook: Health Appointment Scheduler',
      tags: [
        'React', 
        'TypeScript', 
        'Fullstack', 
        'Prisma', 
        'PostgreSQL', 
        'Tailwind CSS', 
        'NextAuth', 
        'Calendar API'
      ],
      projectLink: 'https://github.com/king-sws',
    },
    {
      imgSrc: '/image/ly.jpg',
      title: 'Bookify: Online Book Library',
      tags: ['Next.js', 'TypeScript', 'Fullstack', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'NextAuth'],
      projectLink: 'https://bookify-gamma.vercel.app/',
    },
    {
      imgSrc: '/image/Interveiws.png',
      title: 'AI-Powered Interview ',
      tags: ['Next.js', 'AI Integration', 'Fullstack', 'Real-time Analytics'],
      projectLink: 'https://ai-interview-boot.vercel.app/',
    },
    {
      imgSrc: '/image/chat.jpg',
      title: 'Real-Time Chat Application ',
      tags: ['React', 'TypeScript', 'Socket.io', 'Fullstack', 'Authentication'],
      projectLink: 'https://s-chat-84b6.onrender.com/',
    },
    {
      imgSrc: '/image/ho.jpeg',
      title: 'Healthcare Management Dashboard',
      tags: ["Next.js", 'Data Visualization', 'Role-based Access', 'CRUD Operations'],
      projectLink: 'https://medical-six-teal.vercel.app/'
    },
    {
      imgSrc: '/image/jj.jpeg',
      title: 'Hotel Booking System',
      tags: ['React', 'Booking API', 'Calendar Integration', 'Payment Processing'],
      projectLink: 'https://houses-eight-blond.vercel.app'
    },
    {
      imgSrc: '/image/first1.png',
      title: 'CRM Dashboard Interface',
      tags: ['UI/UX Design', 'Data Tables', 'User Management', 'Analytics'],
      projectLink: 'https://crm-app-phi.vercel.app'
    },
    {
      imgSrc: '/image/Hotql.png',
      title: 'Vacation Rental Platform',
      tags: ['React', 'Map Integration', 'Search Filters', 'Booking System'],
      projectLink: 'https://github.com/king-sws'
    },
  ];

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  const filteredWorks = activeFilter === 'All' 
    ? works 
    : works.filter(work => work.tags.includes(activeFilter));

  // Optimized CSS for performance
  const scrollCss = `
    /* Card consistency */
    .grid-card-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .card-grid {
      grid-auto-rows: 1fr;
    }
    
    /* Optimize animations with GPU acceleration */
    .scroll-reveal {
      will-change: opacity, transform;
    }
  `;

  return (
    <section id="work" className="sec py-24 bg-zinc-900/50 relative overflow-hidden">
      <style jsx global>{scrollCss}</style>
      <div className="container">
        {/* Use a lower initial opacity for header to ensure it's noticeable when it appears */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <FlipWords
              words={["Full-Stack", "Cloud-Native", "Modern", "Production-Grade"]}
              className="text-cyan-400"
              duration={3000}
            />Project Showcase
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Professional projects demonstrating technical expertise and design excellence
          </p>
        </motion.div>

        {/* Filter Bar with staggered animation */}
        <motion.div 
          className="flex flex-wrap gap-4 mb-12 justify-center"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {mainFilters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              variants={filterVariants}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all 
                ${
                  activeFilter === filter 
                  ? 'bg-cyan-400/20 text-cyan-300 ring-1 ring-cyan-400/30' 
                  : 'bg-zinc-800/30 text-zinc-400 hover:bg-zinc-700/20 ring-1 ring-zinc-700'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with optimized animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 card-grid"
          >
            {filteredWorks.map((project, i) => (
              <div className="grid-card-wrapper" key={`${project.title}-${i}`}>
                <ScrollRevealCard delay={i * 0.05}>
                  <WorkCard
                    {...project}
                    index={i}
                  />
                </ScrollRevealCard>
              </div>
            ))}
            {/* Add GitHub Showcase Card */}
            <div className="grid-card-wrapper">
              <ScrollRevealCard delay={filteredWorks.length * 0.05}>
                <GitHubShowcaseCard index={filteredWorks.length} />
              </ScrollRevealCard>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Improved ScrollRevealCard with better performance
const ScrollRevealCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-20px 0px'
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut",
        delay: delay
      }}
      className="h-full scroll-reveal"
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {children}
    </motion.div>
  );
};

export default Work;