'use client'

import { motion } from 'framer-motion';
import { ExternalLink, Terminal, ShieldCheck, Cpu } from 'lucide-react';
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

const Experience = () => {
const experiences: ExperienceItem[] = useMemo(() => [
  {
    company: "Propely",
    role: "Lead Full-Stack Developer",
    period: "Aug 2025 - Present",
    location: "Safi, Morocco",
    type: "Full-time",
    description: "Architecting the technical ecosystem of a property management SaaS. Implementing AI-native development workflows to accelerate feature deployment while maintaining production-grade stability.",
    achievements: [
      "Optimized SaaS infrastructure achieving sub-200ms response times[cite: 35, 36].",
      "Engineered real-time collaboration engines and integrated tiered Stripe billing models[cite: 37].",
      "3x faster development velocity by integrating AI-assisted refactoring and automated unit testing.",
      "Mentoring the team on advanced Next.js patterns and strict TypeScript architecture[cite: 24, 26]."
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
  description:
    "Worked within a small startup team to build and refine a scalable multi-vendor e-commerce platform, contributing to both frontend and backend features aligned with product goals.",
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
      "Directed jQuery to React/TypeScript migration, reducing production bugs by 22%[cite: 42].",
      "Saved 3.5s in load time by optimizing the critical rendering path and CDN caching[cite: 40].",
      "Generated 24% organic traffic growth via strategic SSR/SSG implementation[cite: 41].",
      "Architected secure transaction dashboards with real-time data visualization[cite: 43]."
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
    description: "Built HIPAA-compliant infrastructure for patient data management and clinician-facing analytics tools[cite: 47].",
    achievements: [
      "Increased SEO efficiency by 52% using Next.js ISR/SSG strategies[cite: 46].",
      "Deployed secure clinician portals using NextAuth.js for healthcare compliance[cite: 47].",
      "Crafted responsive patient management UI components under senior technical guidance[cite: 48].",
      "Ensured data privacy integrity through strict adherence to healthcare encryption standards[cite: 49]."
    ],
    technologies: ["Next.js", "NextAuth.js", "TypeScript", "MongoDB"],
    highlight: false
  }
], []);

  return (
    <section id="experience" className="py-20 bg-zinc-950 px-6 sm:px-10 text-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header - Blueprint Style */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#ffe1c1]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#ffe1c1]">Log_03</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Career_Deployments<span className="text-[#ffe1c1]">.</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            A technical record of <span className="text-white">infrastructure development</span> and 
            engineering leadership across diverse digital sectors.
          </p>
        </div>

        {/* Experience List - Vertical Architectural Stack */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid lg:grid-cols-[1fr_2fr] gap-8 p-8 border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/30 transition-all duration-500 rounded-2xl md:rounded-3xl"
            >
              {/* Left Column: Metadata */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Period_Range</span>
                  <p className="text-sm font-medium text-zinc-300">{exp.period}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Location_Status</span>
                  <p className="text-sm font-medium text-zinc-300">{exp.location} / {exp.type}</p>
                </div>
                {exp.highlight && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    <span className="text-[9px] font-mono text-emerald-500 uppercase">Current_Active_Role</span>
                  </div>
                )}
              </div>

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
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                          <div className="w-1 h-[1px] bg-[#ffe1c1] mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <Cpu className="w-3 h-3" /> Technology_Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-[9px] font-mono text-zinc-500 border border-zinc-800 rounded-full group-hover:border-zinc-700 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
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