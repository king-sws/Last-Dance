'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { FiCode, FiServer, FiTool, FiUser, FiZap, FiDatabase } from 'react-icons/fi';
import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

// Define types for our data
interface Skill {
  name: string;
  icon: JSX.Element;
  description: string;
}

interface StatsType {
  yearsExp: number;
  projectsDone: number;
}

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [stats, setStats] = useState<StatsType>({ yearsExp: 0, projectsDone: 0 });

  // Memoize core skills data to prevent re-renders
  const coreSkills: Skill[] = useMemo(() => [
    { 
      name: 'Problem Solving', 
      icon: <FiTool className="text-cyan-400" />,
      description: 'Advanced debugging methodologies for complex system challenges'
    },
    { 
      name: 'API Architecture', 
      icon: <FiServer className="text-cyan-400" />,
      description: 'REST & GraphQL APIs with JWT auth and rate limiting'
    },
    { 
      name: 'UI Engineering', 
      icon: <FiCode className="text-cyan-400" />,
      description: 'Pixel-perfect implementations with WCAG 2.1 compliance'
    },
    { 
      name: 'Performance', 
      icon: <FiZap className="text-cyan-400" />,
      description: 'Lighthouse optimizations & critical render path improvements'
    },
    { 
      name: 'DevOps', 
      icon: <FiDatabase className="text-cyan-400" />,
      description: 'CI/CD pipelines with Docker & Kubernetes orchestration'
    },
    { 
      name: 'Code Quality', 
      icon: <FiCode className="text-cyan-400" />,
      description: 'TypeScript integration & comprehensive test coverage'
    }
  ], []);

  // Animation variants - memoized to prevent recreation
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.3 }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }), []);

  // Optimized number animation with requestAnimationFrame
  useEffect(() => {
    // Use a single animation frame for both values to reduce repaints
    const animateStats = () => {
      const duration = 1500; // animation duration in ms
      const startTime = performance.now();
      const targetYearsExp = 4;
      const targetProjectsDone = 54;
      
      const updateStats = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easeOutQuad for smoother animation
        const eased = 1 - (1 - progress) * (1 - progress);
        
        setStats({
          yearsExp: Math.ceil(eased * targetYearsExp),
          projectsDone: Math.ceil(eased * targetProjectsDone)
        });
        
        if (progress < 1) {
          requestAnimationFrame(updateStats);
        }
      };
      
      requestAnimationFrame(updateStats);
    };
    
    animateStats();
  }, []);

  // Skill item component to reduce JSX complexity
  const SkillItem = ({ skill }: { skill: Skill }) => (
    <div
      className="p-4 rounded-xl bg-zinc-800/50 border border-cyan-500/20 transition-transform duration-300 hover:translate-y-[-4px]"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-cyan-400">{skill.icon}</div>
        <h3 className="font-medium text-zinc-100">{skill.name}</h3>
      </div>
      <div className="h-px bg-gradient-to-r from-cyan-500/20 to-transparent mb-3" />
      <p className="text-sm text-zinc-300 leading-relaxed">
        {skill.description}
      </p>
    </div>
  );

  return (
    <section 
      id="about" 
      className="relative py-24 overflow-hidden"
      style={{ background: 'hsl(240 6% 10%)' }}
    >
      {/* Simplified background for better performance */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/10 to-zinc-900" />

      <div className="container px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-cyan-500/20"
        >
          <div className="p-8 md:p-12">
            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-full border border-cyan-500/30 mb-6"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm text-cyan-400 font-medium">Technical Expertise</span>
              </motion.div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-8"
              >
                Engineering Scalable Solutions
              </motion.h2>
            </motion.div>

            {/* Bio Content */}
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300 flex items-center gap-2">
                  <FiUser className="text-cyan-400" />
                  Full-Stack Specialist
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  I architect <strong className="text-cyan-300">performant web applications</strong> that balance 
                  <strong className="text-cyan-300"> user experience</strong> with <strong className="text-cyan-300">technical excellence</strong>.
                </p>
              </div>

              <ul className="list-disc pl-6 space-y-2 marker:text-cyan-400/80 text-zinc-300">
                <li>React/Next.js interfaces with <strong className="text-cyan-300">90+ Lighthouse scores</strong></li>
                <li>Node.js microservices handling <strong className="text-cyan-300">10k+ RPM</strong></li>
                <li>PostgreSQL optimizations for <strong className="text-cyan-300">sub-100ms queries</strong></li>
              </ul>
            </div>

            {/* Skills Grid - Optimized with memo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {coreSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 items-center border-t border-cyan-500/20 pt-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  {stats.projectsDone}+
                </span>
                <span className="text-zinc-400 text-sm mt-1">Projects Delivered</span>
              </div>

              <div className="flex flex-col">
                <span className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  {stats.yearsExp}+
                </span>
                <span className="text-zinc-400 text-sm mt-1">Years Experience</span>
              </div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ rotate: 60 }}
                transition={{ type: 'spring' }}
                className="ml-auto opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/logo.svg"
                  alt="Professional Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                  loading="lazy"
                  priority={false}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;