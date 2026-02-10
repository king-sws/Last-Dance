'use client';
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { FaDownload, FaChevronDown } from "react-icons/fa";
import { FiCode, FiServer, FiArrowUpRight } from "react-icons/fi";
import { useState, useEffect, useRef, useCallback } from "react";

import Image from "next/image";
import Link from "next/link";
import { TypeWriter } from "@/cards/TypeWriter";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const dataText = [
  "Hi, I'm Oussama.",
  "Full-Stack Developer.",
  "SaaS Builder.",
  "Performance Optimizer.",
] as const;

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Typing effect logic
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTyping = useCallback(() => {
    const targetText = dataText[currentTextIndex];
    if (isDeleting) {
      setCurrentText(prev => prev.slice(0, -1));
    } else {
      setCurrentText(targetText.slice(0, currentText.length + 1));
    }

    if (!isDeleting && currentText === targetText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % dataText.length);
    }
  }, [currentText, currentTextIndex, isDeleting]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isDeleting ? 40 : 100);
    return () => clearTimeout(timeout);
  }, [handleTyping, isDeleting]);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsResumeDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden px-6 sm:px-10 pt-20 lg:pt-0 flex items-center bg-zinc-950"
    >
      <BackgroundBeams className="opacity-60" />
      
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto grid lg:grid-cols-12 gap-8 items-center px-6 relative z-10">
        
        {/* Left Content - 7 Cols */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <Image
                src="/avatar-1.jpg"
                alt="Oussama"
                className="w-10 h-10 rounded-full grayscale border border-zinc-800"
                width={40}
                height={40}
                priority
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-zinc-950 rounded-full" />
            </div>
            <div className="text-[9px] font-mono tracking-[0.2em] text-zinc-500 uppercase py-1 px-2.5 border border-zinc-800 rounded-full bg-zinc-900/50">
              Status: <span className="text-emerald-500">Available</span>
            </div>
          </motion.div>

          <div className="space-y-4">
            {/* Reduced from text-7xl to text-5xl/6xl for laptop screens */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
              {currentText}
              <span className="inline-block w-[2px] h-[0.7em] bg-[#ffe1c1] ml-2 animate-pulse" />
              <br />
              <span className="text-xl lg:text-3xl font-light text-zinc-500 mt-2 block italic font-serif">
                Building <span className="text-white font-sans not-italic font-medium"> Performant </span> Digital {' '}Systems
              </span>
            </h1>
            
            <p className="text-sm lg:text-base text-zinc-400 max-w-lg leading-relaxed font-light">
              Specialized in building <span className="text-zinc-200">enterprise-grade</span> web applications. 
              Architectural rigour with pixel-perfect execution, ensuring 
              <span className="text-[#ffe1c1]"> scalability</span> and <span className="text-[#ffe1c1]">user-centric</span> design.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 lg:gap-6 items-center">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}
                className="group px-6 py-3 bg-[#ffe1c1] text-black rounded-full flex items-center gap-2.5 transition-all hover:brightness-110 font-bold text-[10px] uppercase tracking-widest"
              >
                <FaDownload className="text-xs" /> Get_Resume
                <FaChevronDown className={`text-[10px] transition-transform duration-300 ${isResumeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isResumeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute left-0 mt-3 w-56 rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl z-50 overflow-hidden"
                  >
                    {[
                      { name: "Full Stack PDF", path: "/Full-stack BF.pdf" },
                      { name: "Frontend Focus PDF", path: "/Frontend BF.pdf" }
                    ].map((option, i) => (
                      <a
                        key={i}
                        href={option.path}
                        download
                        className="flex flex-col px-5 py-3.5 hover:bg-zinc-800 transition-colors border-b border-zinc-800 last:border-none"
                      >
                        <span className="text-[10px] font-bold text-white uppercase tracking-tight">{option.name}</span>
                        <span className="text-[9px] text-zinc-500 mt-0.5 font-mono">Download_Source</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#work"
              className="text-zinc-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group"
            >
              View_Projects <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

{/* RIGHT SIDE: THE MANIFEST UI */}
        <motion.div
          style={{ y }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative p-8 border border-zinc-900 bg-zinc-950/40 backdrop-blur-sm">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ffe1c1]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-800" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-800" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#ffe1c1]" />

            <div className="space-y-6 font-mono">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Metadata_Registry</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-500">v.2.0.26</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] text-zinc-600 uppercase">Primary_Stack:</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Next.js', 'TS', 'Node', 'Postgres'].map(tag => (
                      <span key={tag} className="text-[10px] text-[#ffe1c1] px-2 py-1 border border-[#ffe1c1]/20 bg-[#ffe1c1]/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <FiCode className="text-[#ffe1c1]" />
                    <span className="text-[11px] uppercase tracking-tighter">Scalable_UI_Logic</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <FiServer className="text-[#ffe1c1]" />
                    <span className="text-[11px] uppercase tracking-tighter">Distributed_Systems</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-900">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[9px] text-zinc-700 uppercase">Location</p>
                    <p className="text-[11px] text-zinc-400">Safi // MOR</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-zinc-700 uppercase">Availability</p>
                    <p className="text-[11px] text-emerald-500 font-bold">READY_FOR_DEVISE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator - Moved slightly up */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em]">Explore</span>
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-8 bg-gradient-to-b from-[#ffe1c1] to-transparent" 
        />
      </div>
    </section>
  );
};

export default Hero;