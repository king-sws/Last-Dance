/* eslint-disable react/no-unescaped-entities */
'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, useTransform, useScroll } from 'framer-motion';
import { FiCode, FiServer, FiTool, FiUser, FiZap, FiDatabase, FiTrendingUp, FiLayers, FiGlobe } from 'react-icons/fi';
import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

// Define types for our data
interface Skill {
  name: string;
  icon: React.ReactElement;
  description: string;
}

interface StatsType {
  yearsExp: number;
  companies: number;
  seoImprovement: number;
  performanceGain: number;
}

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [stats, setStats] = useState<StatsType>({ 
    yearsExp: 0, 
    companies: 0, 
    seoImprovement: 0,
    performanceGain: 0
  });

  // Real skills based on actual resume data
  const coreSkills: Skill[] = useMemo(() => [
    { 
      name: 'React & Next.js Mastery', 
      icon: <FiCode className="text-cyan-400" />,
      description: 'Expert in building production-ready applications with SSR/SSG, achieving 96+ Lighthouse scores and implementing secure role-based dashboards'
    },
    { 
      name: 'Node.js & Backend APIs', 
      icon: <FiServer className="text-emerald-400" />,
      description: 'Built robust RESTful APIs with Express.js, JWT authentication, and real-time WebSocket features for fintech and healthtech platforms'
    },
    { 
      name: 'Database Architecture', 
      icon: <FiDatabase className="text-blue-400" />,
      description: 'Designed optimized MongoDB/PostgreSQL schemas, reducing data retrieval times by 35% for high-traffic e-commerce applications'
    },
    { 
      name: 'Performance Engineering', 
      icon: <FiZap className="text-yellow-400" />,
      description: 'Specialized in Core Web Vitals optimization through code splitting, CDN caching, delivering 3.5s faster load times'
    },
    { 
      name: 'Full-Stack Development', 
      icon: <FiLayers className="text-purple-400" />,
      description: 'Built scalable web applications using React and Node.js with focus on performance optimization and clean architecture'
    },  
    { 
      name: 'SEO & Conversion Growth', 
      icon: <FiTrendingUp className="text-pink-400" />,
      description: 'Improved SEO efficiency by 52% using Next.js SSG/ISR, resulting in 47% organic traffic increase and 25% conversion boost'
    }
  ], []);

  // Animation variants
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

  // Real stats animation based on actual resume data
  useEffect(() => {
    const animateStats = () => {
      const duration = 1800;
      const startTime = performance.now();
      const targets = {
        yearsExp: 4,
        companies: 3,
        seoImprovement: 52,
        performanceGain: 40
      };
      
      const updateStats = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - (1 - progress) * (1 - progress);
        
        setStats({
          yearsExp: Math.ceil(eased * targets.yearsExp),
          companies: Math.ceil(eased * targets.companies),
          seoImprovement: Math.ceil(eased * targets.seoImprovement),
          performanceGain: Math.ceil(eased * targets.performanceGain)
        });
        
        if (progress < 1) {
          requestAnimationFrame(updateStats);
        }
      };
      
      requestAnimationFrame(updateStats);
    };
    
    animateStats();
  }, []);

  // Enhanced skill item component with original design
  const SkillItem = ({ skill }: { skill: Skill }) => (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-5 rounded-xl bg-zinc-800/50 border border-cyan-500/20 backdrop-blur-sm group hover:border-cyan-400/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-xl group-hover:scale-110 transition-transform">
          {skill.icon}
        </div>
        <h3 className="font-semibold text-zinc-100">{skill.name}</h3>
      </div>
      <div className="h-px bg-gradient-to-r from-cyan-500/30 via-cyan-400/20 to-transparent mb-3" />
      <p className="text-sm text-zinc-300 leading-relaxed">
        {skill.description}
      </p>
    </motion.div>
  );

  return (
    <section 
      id="about" 
      className="relative py-20 overflow-hidden"
      style={{ background: 'hsl(240 6% 10%)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-zinc-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-cyan-500/20"
        >
          <div className="p-8 md:p-10">
            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-800 rounded-full border border-cyan-500/30 mb-6"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm text-cyan-400 font-medium">ABOUT ME</span>
              </motion.div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-500 bg-clip-text text-transparent mb-4"
              >
                Full-Stack Developer
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-3xl"
              >
                Passionate Full-Stack Developer with 4+ years of experience building high-performance web applications 
                for fintech, healthtech, and e-commerce platforms. Specialized in React/Next.js and Node.js with a 
                proven track record of delivering measurable business results.
              </motion.p>
            </motion.div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-10 mb-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-300 flex items-center gap-2">
                  <FiUser className="text-cyan-400" />
                  My Development Journey
                </h3>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    I specialize in building <strong className="text-cyan-300">modern web applications</strong> with 
                    <strong className="text-emerald-300"> React/Next.js on the frontend</strong> and 
                    <strong className="text-blue-300"> Node.js/Express on the backend</strong>. My focus is on 
                    creating scalable, performant solutions that drive real business impact.
                  </p>
                  <p>
                    Over the past 4+ years, I've worked on diverse projects including secure payment platforms 
                    for fintech companies, role-based healthcare dashboards with real-time inventory tracking, 
                    and high-traffic e-commerce systems managing hundreds of thousands of products.
                  </p>
                  <p>
                    I'm passionate about performance optimization, having consistently achieved 96+ Lighthouse scores 
                    and significant improvements in Core Web Vitals. Currently available for new opportunities 
                    while continuing to expand my expertise in modern web technologies.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Key Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Built enterprise-grade platforms handling <strong className="text-cyan-300">thousands of concurrent users</strong> with 89.9% uptime</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Reduced critical rendering path by <strong className="text-emerald-300">30%</strong> through advanced optimization</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Achieved <strong className="text-blue-300">52% SEO improvement</strong> resulting in 47% organic traffic boost</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Implemented secure authentication with <strong className="text-purple-300">zero security incidents</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Maintained <strong className="text-yellow-300">96+ Lighthouse scores</strong> across all projects</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Achieved <strong className="text-pink-300">90%+ test coverage</strong> reducing bugs by 25%</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Grid - Original Design */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-cyan-300">Technical Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SkillItem skill={skill} />
                  </motion.div>
                ))}
              </div>
            </div>            

            {/* Enhanced Stats Section */}
            <div className="border-t border-cyan-500/20 pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-1">
                    {stats.yearsExp}+
                  </div>
                  <div className="text-zinc-400 text-sm">Years Experience</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent mb-1">
                    10+
                  </div>
                  <div className="text-zinc-400 text-sm">Projects Delivered</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-1">
                    {stats.seoImprovement}%
                  </div>
                  <div className="text-zinc-400 text-sm">SEO Improvement</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-1">
                    {stats.performanceGain}%
                  </div>
                  <div className="text-zinc-400 text-sm">Performance Gain</div>
                </div>
              </div>

              {/* Professional Logo Section */}
              <div className="flex justify-center">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ type: 'spring', duration: 0.8 }}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Image src='/logo.svg' alt="Oussama Logo" width={50} height={50} className='w-auto h-auto' />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;