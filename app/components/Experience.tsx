'use client'

import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Cpu } from 'lucide-react';
import { useMemo } from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Freelance' | 'Technical Consultancy';
  website?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  highlight?: boolean;
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

const Experience = () => {
  const experiences: ExperienceItem[] = useMemo(() => [
    {
      company: "MangaTek (Freelance)",
      role: "Full-Stack System Architect",
      period: "Mar 2026 - Jun 2026",
      location: "Remote",
      type: "Freelance",
      // website: "https://manga-v2.vercel.app",
      description: "Architected a high-throughput content aggregation and streaming platform for a private client, processing multi-source data feeds across 15+ external engines with native Arabic (RTL) localization.",
      achievements: [
        "Engineered 113 production API endpoints handling automated web scraping, indexing, distributed caching, and dynamic media streaming.",
        "Designed a multi-source data normalization pipeline using Puppeteer, Cheerio, and Upstash Redis for low-latency content retrieval.",
        "Built three specialized rendering engines: a zero-latency manga reader, an interactive media gallery, and an HLS.js adaptive anime streaming engine.",
        "Implemented full RTL layout architecture with dynamic font loading (Tajawal / Noto Kufi) and direction-aware Tailwind primitives."
      ],
      technologies: ["Next.js 15", "TypeScript", "Puppeteer", "Cheerio", "Upstash Redis", "HLS.js", "Tailwind CSS"],
      highlight: true
    },
    {
      company: "Propely",
      role: "Lead Full-Stack Developer",
      period: "Aug 2025 - Feb 2026",
      location: "Safi, Morocco",
      type: "Full-time",
      description: "Architecting the technical ecosystem of a property management SaaS. Implementing AI-native development workflows to accelerate feature deployment while maintaining production-grade stability.",
      achievements: [
        "Optimized SaaS infrastructure achieving sub-200ms response times.",
        "Engineered real-time collaboration engines and integrated tiered Stripe billing models.",
        "3x faster development velocity by integrating AI-assisted refactoring and automated unit testing.",
        "Mentoring the team on advanced Next.js patterns and strict TypeScript architecture."
      ],
      technologies: ["Next.js", "AI-Workflow", "Node.js", "Stripe", "PostgreSQL"],
      highlight: true
    },
    
    {
      company: "Early-Stage Startup (E-commerce Platform)",
      role: "Full-Stack Engineer",
      period: "Nov 2024 – Feb 2025",
      location: "Remote / Independent",
      type: "Technical Consultancy",
      description: "Worked within a small startup team to build and refine a scalable multi-vendor e-commerce platform, contributing to both frontend and backend features aligned with product goals.",
      achievements: [
        "Collaborated on a real-time multi-vendor inventory management system.",
        "Enhanced product discovery through advanced filtering and optimized search.",
        "Contributed to a secure checkout workflow with payment processing and automated invoices.",
        "Improved frontend performance through image optimization and lazy-loading."
      ],
      technologies: ["Next.js", "Redux Toolkit", "Node.js", "MongoDB", "Cloudinary"],
      highlight: false
    },
    {
      company: "Ibcove (Fintech)",
      role: "Frontend Developer",
      period: "Mar 2024 - Aug 2024",
      location: "Remote",
      type: "Contract",
      description: "Led the security-focused migration of financial interfaces, replacing legacy systems with modern, reactive architectures.",
      achievements: [
        "Directed jQuery to React/TypeScript migration, reducing production bugs by 22%.",
        "Saved 3.5s in load time by optimizing the critical rendering path and CDN caching.",
        "Generated 24% organic traffic growth via strategic SSR/SSG implementation.",
        "Architected secure transaction dashboards with real-time data visualization."
      ],
      technologies: ["React", "TypeScript", "D3.js", "Next.js", "Tailwind"],
      highlight: false
    },
    {
      company: "HealthTech Startup",
      role: "Frontend Developer",
      period: "Apr 2022 - Nov 2023",
      location: "Remote",
      type: "Full-time",
      description: "Built HIPAA-compliant infrastructure for patient data management and clinician-facing analytics tools.",
      achievements: [
        "Increased SEO efficiency by 52% using Next.js ISR/SSG strategies.",
        "Deployed secure clinician portals using NextAuth.js for healthcare compliance.",
        "Crafted responsive patient management UI components under senior technical guidance.",
        "Ensured data privacy integrity through strict adherence to healthcare encryption standards."
      ],
      technologies: ["Next.js", "NextAuth.js", "TypeScript", "MongoDB"],
      highlight: false
    }
  ], []);

  return (
    <section id="experience" className="py-14 md:py-20 bg-zinc-950 px-4 sm:px-10 text-zinc-100 overflow-hidden">
      <div className="container mx-auto px-0">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#ffe1c1]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#ffe1c1]">Log_03</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tighter">
            Career_Deployments<span className="text-[#ffe1c1]">.</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            A technical record of <span className="text-white">infrastructure development</span> and
            engineering leadership across diverse digital sectors.
          </p>
        </motion.div>

        {/* Experience List - Vertical Architectural Stack (original layout, no timeline) */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="group relative grid lg:grid-cols-[1fr_2fr] gap-8 p-6 md:p-8 border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/30 hover:border-zinc-800 transition-colors duration-500 rounded-2xl md:rounded-3xl"
            >
              {/* Left Column: Metadata */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.div variants={staggerItem} transition={{ duration: 0.5 }} className="space-y-1">
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Period_Range</span>
                  <p className="text-sm font-medium text-zinc-300">{exp.period}</p>
                </motion.div>
                <motion.div variants={staggerItem} transition={{ duration: 0.5 }} className="space-y-1">
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Location_Status</span>
                  <p className="text-sm font-medium text-zinc-300">{exp.location} / {exp.type}</p>
                </motion.div>
                {exp.highlight && (
                  <motion.div
                    variants={staggerItem}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    {/* <span className="text-[9px] font-mono text-emerald-500 uppercase">Current_Active_Role</span> */}
                  </motion.div>
                )}
              </motion.div>

              {/* Right Column: Content */}
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-[#ffe1c1] mt-1">
                      <span className="text-sm font-mono tracking-wider">{exp.company}</span>
                      {exp.website && (
                        <a href={exp.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 opacity-50 hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-zinc-400 font-light leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3" /> Core_Success_Metrics
                    </h4>
                    <motion.ul
                      initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
                      variants={staggerContainer}
                      className="space-y-3"
                    >
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          variants={staggerItem}
                          transition={{ duration: 0.4 }}
                          className="flex items-start gap-3 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors"
                        >
                          <div className="w-1 h-[1px] bg-[#ffe1c1] mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <Cpu className="w-3 h-3" /> Technology_Stack
                    </h4>
                    <motion.div
                      initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
                      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
                      className="flex flex-wrap gap-2"
                    >
                      {exp.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } }}
                          transition={{ duration: 0.3 }}
                          className="px-3 py-1 text-[9px] font-mono text-zinc-500 border border-zinc-800 rounded-full group-hover:border-zinc-700 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Decorative Number */}
              <span className="absolute top-8 right-8 text-[40px] font-bold text-zinc-900 group-hover:text-zinc-800 transition-colors leading-none select-none">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;