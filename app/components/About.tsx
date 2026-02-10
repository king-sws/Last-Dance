'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiZap, FiLayers, FiTrendingUp, FiUser, FiActivity } from 'react-icons/fi';
import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

const About = () => {
  const [stats, setStats] = useState({ yearsExp: 0, seo: 0, perf: 0, projects: 0 });

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const startTime = performance.now();
      const targets = { yearsExp: 4, seo: 52, perf: 40, projects: 20 };
      
      const update = (now: number) => {
        const p = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // Cubic ease out
        setStats({
          yearsExp: Math.ceil(eased * targets.yearsExp),
          seo: Math.ceil(eased * targets.seo),
          perf: Math.ceil(eased * targets.perf),
          projects: Math.ceil(eased * targets.projects)
        });
        if (p < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };
    animateStats();
  }, []);

  return (
    <section id="about" className="relative py-26 px-6 sm:px-10 bg-zinc-950 overflow-hidden">
      {/* Background: Blueprint Grid & Radial Glow */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #3f3f46 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ffe1c1]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
{/* Header: Grand Entry Style */}
<div className="flex flex-col mb-20">
  <div className="flex items-center gap-4 mb-6">
    <div className="h-px w-12 bg-[#ffe1c1]" />
    <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#ffe1c1]">Professional_Manifesto</span>
  </div>
  
  {/* The Revised Title */}
  <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-8">
    Full-Stack <br />
    <span className="text-zinc-700">Developer</span><span className="text-[#ffe1c1]">.</span>
  </h2>

  {/* The Anti-AI Bio (Human & Direct) */}
  <p className="max-w-3xl text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
    Full-Stack Developer with <span className="text-white font-medium">4+ years of experience</span> solving complex problems with code. I specialize in <span className="text-[#ffe1c1]">React/Next.js and Node.js</span>, focusing on building software that is as stable as it is fast. My goal is to turn business requirements into <span className="text-white underline decoration-[#ffe1c1]/30 underline-offset-4">scalable production systems</span>.
  </p>
</div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-1">
          
          {/* Left: Detailed Biography (The "Context") */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-md rounded-tl-3xl lg:rounded-bl-3xl relative overflow-hidden">
  {/* Decorative Corner ID */}
  <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8px] tracking-[0.4em] text-white pointer-events-none">
    ARCH_REF_04
  </div>

  <h3 className="text-xl font-bold mb-8 text-[#ffe1c1] flex items-center gap-3">
    <FiUser className="text-lg" /> 
    <span className="tracking-tight">Development_Journey</span>
  </h3>

  <div className="space-y-6 text-zinc-400 leading-relaxed font-light">
  <p>
    I build <strong className="text-white">robust web applications</strong> where clean code and fast load times aren't optional. My approach is simple: write scalable code that solves business problems without creating technical debt.
  </p>
  
  <p>
    Over the past 4+ years, I’ve worked on complex projects including <span className="text-[#ffe1c1]">fintech payment integrations</span> and real-time <span className="text-[#ffe1c1]">healthtech dashboards</span>. I specialize in making sure data moves securely and quickly across the entire stack.
  </p>
  
  <p className="pb-8 border-b border-zinc-800/50">
    Currently, I’m focused on <span className="text-white">Full-Stack Optimization</span>. I don't just build features; I ensure they perform, consistently hitting 95+ Lighthouse scores and optimizing server-side logic for maximum efficiency.
  </p>
  
  {/* Key Achievements Grid - Keeping the "Registry" look */}
  <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
{[
  { label: "Deployment Speed", val: "Sprint-Ready", color: "text-blue-500", bg: "bg-zinc-900/40" },
  { label: "Code Integrity", val: "100% Type-Safe", color: "text-[#ffe1c1]", bg: "bg-zinc-900/40" },
  { label: "Optimization", val: "3.5s Saved", color: "text-emerald-500", bg: "bg-zinc-900/40" }, // Based on your Ibcove record [cite: 40]
  { label: "AI-Augmented Velocity", val: "2x Standard", color: "text-purple-500", bg: "bg-zinc-900/40" },
].map((item, i) => (
      <div 
        key={i} 
        className={`flex items-center gap-3 ${item.bg} p-4 rounded-lg border border-zinc-900 transition-all hover:border-zinc-800`}
      >
        <div className={`w-1 h-1 rounded-full ${item.color} shadow-[0_0_8px_currentColor]`} />
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
          {item.label}
        </span>
        <span className={`ml-auto font-bold text-[11px] font-mono ${item.color}`}>
          {item.val}
        </span>
      </div>
    ))}
  </div>
</div>
</div>

          {/* Right: Technical Specifications Grid (The 4 Cards) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-1">
            {expertiseData.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ backgroundColor: "rgba(255, 225, 193, 0.03)" }}
                className={`p-8 bg-zinc-900/20 border border-zinc-800/50 flex flex-col justify-center transition-colors
                  ${idx === 1 ? 'lg:rounded-tr-3xl' : ''} 
                  ${idx === 3 ? 'lg:rounded-br-3xl' : ''}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-zinc-950 rounded-lg text-[#ffe1c1] border border-zinc-800 group-hover:border-[#ffe1c1]/50 transition-colors">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-tight">{skill.name}</h4>
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Spec_0{idx + 1}</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer: Live Metrics & Logo */}
<div className="mt-24 flex flex-col md:flex-row items-stretch justify-between gap-12 border-y border-zinc-900 py-12">
  
  {/* The Technical Stat Grid */}
  <div className="flex flex-wrap md:flex-nowrap gap-px bg-zinc-900 w-full md:w-auto border border-zinc-900">
    <StatBlock label="Experience" value={`${stats.yearsExp}Yrs`} color="text-[#ffe1c1]" />
    <StatBlock label="Projects" value={`${stats.projects}+`} color="text-white" />
    <StatBlock label="SEO_Growth" value={`${stats.seo}%`} color="text-emerald-500" />
    <StatBlock label="Perf_Gain" value={`${stats.perf}%`} color="text-blue-500" />
  </div>

  {/* Signature Logo Box */}
  <div className="flex items-center justify-center px-6">
    <motion.div 
      animate={{ 
        rotate: [0, 5, -5, 0],
        borderColor: ["#18181b", "#27272a", "#18181b"] 
      }}
      transition={{ repeat: Infinity, duration: 6 }}
      className="relative w-16 h-16 flex items-center justify-center border border-zinc-800 bg-zinc-950 shadow-2xl"
      style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
    >
      <Image src='/logo.svg' alt="Logo" width={32} height={32} className="opacity-80" />
      {/* Status Node */}
      <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-[6px] font-mono text-emerald-500 uppercase tracking-tighter">Live</span>
      </div>
    </motion.div>
  </div>
</div>
      </div>
    </section>
  );
};

const StatBlock = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <div className="bg-zinc-950 px-8 py-6 min-w-[140px] flex-1">
    <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-2">
      {label}
    </span>
    <span className={`text-3xl font-bold tracking-tighter ${color}`}>
      {value}
    </span>
  </div>
);

const expertiseData = [
  { name: 'React & Next.js Mastery', icon: <FiCode />, description: 'Expert in building production-ready applications with SSR/SSG and 96+ Lighthouse scores.' },
  { name: 'Node.js & Backend APIs', icon: <FiServer />, description: 'Robust RESTful APIs with JWT authentication and real-time WebSocket features.' },
  { name: 'Database Architecture', icon: <FiDatabase />, description: 'Optimized MongoDB/PostgreSQL schemas, reducing data retrieval times by 35%.' },
  { name: 'Performance Engineering', icon: <FiZap />, description: 'Specialized in Core Web Vitals, delivering 3.5s faster load times.' }
];

export default About;