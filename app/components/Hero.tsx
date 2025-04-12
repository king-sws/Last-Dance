/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { FaArrowDown, FaDownload, FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { FiCode, FiServer, FiTool } from "react-icons/fi";
import { useState, useEffect, useRef, useCallback } from "react";

import Image from "next/image";
import Link from "next/link";
import { TypeWriter } from "@/cards/TypeWriter";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const dataText = [
  "Hi there! I'm Oussama",
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
] as const;

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Typing effect with proper types
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Optimized typing effect with useCallback
  const handleTyping = useCallback(() => {
    const targetText = dataText[currentTextIndex];
    
    if (isDeleting) {
      setCurrentText(prev => prev.slice(0, -1));
    } else {
      setCurrentText(targetText.slice(0, currentText.length + 1));
    }

    if (!isDeleting && currentText === targetText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % dataText.length);
    }
  }, [currentText, currentTextIndex, isDeleting]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timeout);
  }, [handleTyping, isDeleting]);

  // Click outside handler with proper event typing
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsResumeDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  // Memoized floating dots
  const FloatingDots = () => {
    const [isMounted, setIsMounted] = useState(false);
  
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) return null;
  
    return (
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden pt-24 lg:pt-32"
      style={{ background: 'hsl(240 6% 10%)' }}
    >
      <BackgroundBeams />
      <FloatingDots />

      <div className="container grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)] px-4 sm:px-6 relative z-10">
        {/* Left Content */}
        <div className="z-10 space-y-8">
          <div className="flex items-center gap-4">
          <div className="relative group">
  <Image
    src="/avatar-1.jpg"
    alt="Oussama - Full-Stack Engineer"
    className="w-10 h-10 rounded-full object-cover border-4 border-white/10"
    width={40}
    height={40}
    priority={true}
    quality={85}
  />
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-pulse" />
            </div>
            <div className="px-3 py-1 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <span className="text-xs font-medium text-cyan-400">
                Available for opportunities
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {currentText}
                <span className="animate-blink ml-1 inline-block w-2 h-6 bg-cyan-400" />
              </span>
              <br />
              <span className="font-medium text-2xl headline-1 lg:text-3xl mt-2 block">
                Architecting Scalable Solutions
              </span>
            </h1>
            <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
              Specializing in modern web application development with focus on
              <strong className="text-cyan-400"> performance</strong>,
              <strong className="text-cyan-400"> accessibility</strong>, and
              <strong className="text-cyan-400"> clean architecture</strong>.
              Proven track record delivering enterprise-grade solutions over 4+ years.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}
                className="px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg flex items-center gap-2 transition-all font-medium"
                aria-expanded={isResumeDropdownOpen}
              >
                <FaDownload />
                Download CV
                <FaChevronDown className={`transition-transform ${isResumeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isResumeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-60 rounded-lg bg-zinc-800/90 backdrop-blur-lg border border-white/10"
                  >
                    <div className="py-1">
                      {[
                        { 
                          name: "Full Stack CV", 
                          desc: "Complete work history and skills", 
                          path: "/Resume-BF.pdf" 
                        },
                        { 
                          name: "Front End CV", 
                          desc: "Developer-focused experience", 
                          path: "/OFontEnd.pdf" 
                        }
                      ].map((option, index) => (
                        <a
                          key={index}
                          href={option.path}
                          download
                          className="flex flex-col px-4 py-3 text-left hover:text-cyan-400 transition-colors cursor-pointer"
                          onClick={() => setIsResumeDropdownOpen(false)}
                        >
                          <span className="font-medium text-sm flex items-center">
                            <FaDownload className="mr-2 text-xs" />
                            {option.name}
                          </span>
                          <span className="text-xs text-zinc-400 mt-1">{option.desc}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#work"
              className="px-6 py-3 border border-white/20 hover:border-cyan-400 text-zinc-300 hover:text-cyan-400 rounded-lg flex items-center gap-2 transition-all font-medium backdrop-blur-sm"
              aria-label="Learn more"
            >
              <FaArrowDown className="animate-bounce" />
              Explore Work
            </Link>
          </div>

          <div className="flex gap-4 mt-6 pb-6">
            <a
              href="https://github.com/king-sws"
              className="text-zinc-400 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="GitHub profile"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/oussama-boufi"
              className="text-zinc-400 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="LinkedIn profile"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Code Preview */}
        <motion.div
          style={{ y }}
          className="hidden lg:block relative z-10"
        >
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm">
              <div className="p-4 bg-white/5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  {['#ef4444', '#eab308', '#22c55e'].map((color, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="text-sm text-cyan-400 font-mono font-medium">
                  portfolio.tsx
                </span>
              </div>

              <div className="p-6 font-mono text-sm space-y-4 bg-gradient-to-br from-white/5 to-transparent relative pl-8">
                <div className="absolute left-2 top-6 text-white/20 text-xs space-y-4">
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <div key={num}>{num}</div>
                  ))}
                </div>

                <div className="text-cyan-400 pl-6">// Technical Expertise</div>
                <div className="text-zinc-300 pl-6">{`const stack = {`}</div>

                <div className="pl-10 flex items-center gap-2">
                  <FiCode className="text-teal-400" />
                  <TypeWriter
                    text="frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind'],"
                    className="text-teal-400"
                    speed={30}
                  />
                </div>

                <div className="pl-10 flex items-center gap-2">
                  <FiServer className="text-cyan-400" />
                  <TypeWriter
                    text="backend: ['Node.js', 'RestFull API', 'PostgreSQL'],"
                    className="text-cyan-400"
                    speed={30}
                    delay={1.6}
                  />
                </div>

                <div className="pl-10 flex items-center gap-2">
                  <FiTool className="text-sky-400" />
                  <TypeWriter
                    text="devTools: ['Git', 'VS Code', 'Webpack', 'Vite', 'ESLint', 'Postman']"
                    className="text-sky-400"
                    speed={30}
                    delay={3.2}
                  />
                </div>

                <div className="text-zinc-300 pl-6">{`};`}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-cyan-400/80">
          <FaArrowDown className="text-xl animate-bounce" />
          <div className="w-px h-6 bg-gradient-to-b from-cyan-400/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;