"use client"
import { motion, useInView, Variants } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiZap, FiUser } from 'react-icons/fi';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const revealUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const About = () => {
  const [stats, setStats] = useState({ yearsExp: 0, seo: 0, perf: 0, projects: 0 });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: false, amount: 0.6 });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!statsInView) {
      hasAnimatedRef.current = false;
      setStats({ yearsExp: 0, seo: 0, perf: 0, projects: 0 });
      return;
    }
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const duration = 1600;
    const startTime = performance.now();
    const targets = { yearsExp: 4, seo: 52, perf: 40, projects: 20 };

    const update = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setStats({
        yearsExp: Math.ceil(eased * targets.yearsExp),
        seo: Math.ceil(eased * targets.seo),
        perf: Math.ceil(eased * targets.perf),
        projects: Math.ceil(eased * targets.projects),
      });
      if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [statsInView]);

  return (
    <section id="about" className="relative py-16 md:py-26 px-4 sm:px-10 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20"
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #3f3f46 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ffe1c1]/5 blur-[120px] rounded-full pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-0 relative z-10">

        {/* Header — label, then headline, then bio each arrive a beat apart */}
        <div className="flex flex-col mb-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.8 }}
            variants={revealUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-[#ffe1c1]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#ffe1c1]">Professional_Manifesto</span>
          </motion.div>

          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.6 }}
            variants={revealUp} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-none mb-8"
          >
            Full-Stack <br />
            <span className="text-zinc-700">Developer</span><span className="text-[#ffe1c1]">.</span>
          </motion.h2>

          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.6 }}
            variants={revealUp} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-zinc-400 text-lg md:text-xl leading-relaxed font-light"
          >
            Full-Stack Developer with <span className="text-white font-medium">4+ years of experience</span> solving complex problems with code. I specialize in <span className="text-[#ffe1c1]">React/Next.js and Node.js</span>, focusing on building software that is as stable as it is fast. My goal is to turn business requirements into <span className="text-white underline decoration-[#ffe1c1]/30 underline-offset-4">scalable production systems</span>.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-1">

          {/* Left: Bio card slides in from the left */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-6 md:p-12 bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-md rounded-tl-3xl lg:rounded-bl-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8px] tracking-[0.4em] text-white pointer-events-none">
              ARCH_REF_04
            </div>

            <h3 className="text-xl font-bold mb-8 text-[#ffe1c1] flex items-center gap-3">
              <FiUser className="text-lg" />
              <span className="tracking-tight">Development_Journey</span>
            </h3>

            <div className="space-y-6 text-zinc-400 leading-relaxed font-light">
              <p>
                I build <strong className="text-white">robust web applications</strong> where clean code and fast load times aren&apos;t optional. My approach is simple: write scalable code that solves business problems without creating technical debt.
              </p>
              <p>
                Over the past 4+ years, I&apos;ve worked on complex projects including <span className="text-[#ffe1c1]">fintech payment integrations</span> and real-time <span className="text-[#ffe1c1]">healthtech dashboards</span>. I specialize in making sure data moves securely and quickly across the entire stack.
              </p>
              <p className="pb-8 border-b border-zinc-800/50">
                Currently, I&apos;m focused on <span className="text-white">Full-Stack Optimization</span>. I don&apos;t just build features; I ensure they perform, consistently hitting 95+ Lighthouse scores and optimizing server-side logic for maximum efficiency.
              </p>

              {/* Achievement grid — staggers in as a group when scrolled to */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }}
                variants={staggerContainer}
                className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {[
                  { label: "Deployment Speed", val: "Sprint-Ready", color: "text-blue-500" },
                  { label: "Code Integrity", val: "100% Type-Safe", color: "text-[#ffe1c1]" },
                  { label: "Optimization", val: "3.5s Saved", color: "text-emerald-500" },
                  { label: "AI-Augmented Velocity", val: "2x Standard", color: "text-purple-500" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ x: 4, borderColor: "#3f3f46" }}
                    className="flex items-center gap-3 bg-zinc-900/40 p-4 rounded-lg border border-zinc-900"
                  >
                    <div className={`w-1 h-1 rounded-full ${item.color} shadow-[0_0_8px_currentColor]`} />
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]">{item.label}</span>
                    <span className={`ml-auto font-bold text-[11px] font-mono ${item.color}`}>{item.val}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Spec cards slide in from the right, staggered */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="lg:col-span-5 grid grid-cols-1 gap-1"
          >
            {expertiseData.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: 30, filter: "blur(4px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ backgroundColor: "rgba(255, 225, 193, 0.03)", x: -4 }}
                className={`p-6 md:p-8 bg-zinc-900/20 border border-zinc-800/50 flex flex-col justify-center transition-colors
                  ${idx === 1 ? 'lg:rounded-tr-3xl' : ''}
                  ${idx === 3 ? 'lg:rounded-br-3xl' : ''}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="p-2 bg-zinc-950 rounded-lg text-[#ffe1c1] border border-zinc-800"
                  >
                    {skill.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-bold tracking-tight">{skill.name}</h4>
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Spec_0{idx + 1}</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer: stats reset + recount every time they enter view */}
        <div
          ref={statsRef}
          className="mt-10 md:mt-24 flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-12 border-y border-zinc-900 py-8 md:py-12"
        >
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.6 }}
            variants={staggerContainer}
            className="flex flex-wrap md:flex-nowrap gap-px bg-zinc-900 w-full md:w-auto border border-zinc-900"
          >
            <StatBlock label="Experience" value={`${stats.yearsExp}Yrs`} color="text-[#ffe1c1]" />
            <StatBlock label="Projects" value={`${stats.projects}+`} color="text-white" />
            <StatBlock label="SEO_Growth" value={`${stats.seo}%`} color="text-emerald-500" />
            <StatBlock label="Perf_Gain" value={`${stats.perf}%`} color="text-blue-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center px-6"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], borderColor: ["#18181b", "#27272a", "#18181b"] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="relative w-16 h-16 flex items-center justify-center border border-zinc-800 bg-zinc-950 shadow-2xl"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
            >
              <Image src='/logo.svg' alt="Logo" width={32} height={32} className="opacity-80" />
              <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[6px] font-mono text-emerald-500 uppercase tracking-tighter">Live</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatBlock = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <div className="bg-zinc-950 px-5 md:px-8 py-6 min-w-[120px] flex-1">
    <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-2">{label}</span>
    <span className={`text-3xl font-bold tracking-tighter ${color}`}>{value}</span>
  </div>
);

const expertiseData = [
  { name: 'React & Next.js Mastery', icon: <FiCode />, description: 'Expert in building production-ready applications with SSR/SSG and 96+ Lighthouse scores.' },
  { name: 'Node.js & Backend APIs', icon: <FiServer />, description: 'Robust RESTful APIs with JWT authentication and real-time WebSocket features.' },
  { name: 'Database Architecture', icon: <FiDatabase />, description: 'Optimized MongoDB/PostgreSQL schemas, reducing data retrieval times by 35%.' },
  { name: 'Performance Engineering', icon: <FiZap />, description: 'Specialized in Core Web Vitals, delivering 3.5s faster load times.' }
];

export default About;