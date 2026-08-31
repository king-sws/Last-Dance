'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ExternalLink, Github, BookOpen, Rss, Database, Zap, ShieldCheck, Film,
  Images, Server, TrendingUp, CheckCircle2, Code2, AlertCircle, ArrowUpRight,
  Clock, Layers, PlayCircle, Languages, ChevronRight, Globe, Gauge,
  ArrowLeftRight, Cpu
} from 'lucide-react';
import { Reveal } from "@/app/components/Reveal";

const MangaProjectPage = () => {
  const [showModal, setShowModal] = useState(false);
  const features = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Zero-Latency Reader",
      description: "Panel-by-panel prefetching and canvas-optimized rendering for instant page turns."
    },
    {
      icon: <Images className="w-5 h-5" />,
      title: "Media Gallery Engine",
      description: "Interactive artwork and cover archive with lazy-loaded, source-normalized assets."
    },
    {
      icon: <Film className="w-5 h-5" />,
      title: "Adaptive Streaming",
      description: "HLS.js-powered anime playback with quality-ladder switching for unstable networks."
    },
    {
      icon: <Languages className="w-5 h-5" />,
      title: "Native RTL Reading",
      description: "Direction-aware layout primitives, not mirrored CSS — built for real Arabic readers."
    }
  ];

  const metrics = [
    { value: "113", label: "API Endpoints", description: "Production routes shipped solo", icon: <Server className="w-4 h-4" /> },
    { value: "15+", label: "Source Engines", description: "External feeds normalized into one schema", icon: <Rss className="w-4 h-4" /> },
    { value: "<80ms", label: "Cache Hit Time", description: "Edge reads via Upstash Redis", icon: <Zap className="w-4 h-4" /> },
    { value: "2", label: "Reading Directions", description: "Full LTR / RTL layout parity", icon: <ArrowLeftRight className="w-4 h-4" /> }
  ];

  const techStack = [
    { category: "Frontend", items: ["Next.js 15", "TypeScript", "TailwindCSS (RTL)", "Framer Motion", "HLS.js"] },
    { category: "Ingestion", items: ["Puppeteer", "Cheerio", "Scheduled Workers", "Source Adapters"] },
    { category: "Data Layer", items: ["Upstash Redis", "Edge Caching", "Normalization Pipeline"] },
    { category: "Localization", items: ["Noto Kufi Arabic", "Tajawal", "Direction-aware Primitives"] }
  ];

  const challenges = [
    {
      problem: "15+ source sites, each with inconsistent markup, breaking the reader",
      solution: "Built per-source adapters with Puppeteer and Cheerio that map every feed into one canonical schema before it ever reaches the UI.",
      impact: "Zero broken chapters across 113 endpoints"
    },
    {
      problem: "Arabic-speaking readers stuck with interfaces that were only visually mirrored",
      solution: "Rebuilt layout primitives so panel order, pagination, and gestures flip logically under a real RTL context — not just flipped CSS.",
      impact: "Native reading order, not a mirror trick"
    },
    {
      problem: "Anime streams stalling under unstable mobile connections",
      solution: "Shipped an adaptive HLS.js engine with quality-ladder switching and Redis-cached manifests to keep playback smooth.",
      impact: "Stable playback down to weak 3G"
    }
  ];

  const engineShowcase = [
    {
      title: "Reader Engine",
      image: "/image/Max_a_A_dark-themed_manga_.png",
      description: "A panel-first reading surface with predictive prefetching, so the next page is already warm before the reader taps."
    },
    {
      title: "Gallery Engine",
      image: "/image/manga-gallery.png",
      description: "A normalized artwork and cover archive pulled from 15+ sources, deduplicated and served through one consistent viewer."
    },
    {
      title: "Streaming Engine",
      image: "/image/Max_a_A_dark-themed_video_.png",
      description: "HLS.js adaptive playback for anime episodes, switching quality in real time as bandwidth shifts."
    }
  ];

  return (
    <section id="manga" className="bg-zinc-950 py-16 md:py-26 px-4 sm:px-10 text-white overflow-hidden">
      <div className="container mx-auto px-0">

        {/* Breadcrumb Navigation */}
        <Reveal>
        <nav className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-16">
          <Link href="/#work" className="hover:text-emerald-400 transition-colors">Archive</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-zinc-400">Case_Study_04</span>
          <span className="text-emerald-500">/</span>
          <span className="text-emerald-500">MangaTek</span>
        </nav>
        </Reveal>

        {/* Header Section */}
        <Reveal>
        <div className="relative mb-24">
          <div className="grid lg:grid-cols-[1fr_auto] items-start gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-6 lg:w-12 bg-emerald-500/30" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.4em] text-emerald-500">
                  Content_Aggregation_Platform
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white mb-6 sm:mb-10 leading-[0.85] break-words">
                MangaTek<span className="text-emerald-500">.</span>
              </h1>

              <p className="text-zinc-400 text-base sm:text-xl md:text-3xl leading-relaxed font-light max-w-3xl">
                A <span className="text-white">high-throughput reading engine</span> built for readers,
                not just markup. Fifteen sources, one canonical feed, and a
                <span className="italic text-emerald-400"> native right-to-left</span> experience.
              </p>
            </div>

            {/* Project Metadata */}
            <div className="hidden lg:block w-64 p-8 border border-zinc-800 bg-zinc-900/10 backdrop-blur-md rounded-lg mt-4">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-600 uppercase mb-2 tracking-widest">Client_Type</h4>
                  <p className="text-sm text-zinc-300 font-medium">Private Content Platform</p>
                </div>
                <div className="h-px bg-zinc-800" />
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-600 uppercase mb-2 tracking-widest">Dev_Cycle</h4>
                  <p className="text-sm text-zinc-300 font-medium">4 Months, Solo Contract</p>
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">System_Architect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Metrics Strip */}
        <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900 rounded-3xl overflow-hidden mb-24 shadow-2xl">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-10 bg-zinc-950 hover:bg-zinc-900/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-all duration-700">
                {React.cloneElement(metric.icon as React.ReactElement<{ size?: number }>, { size: 80 })}
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8 text-emerald-500">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    {metric.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                    Spec_0{idx + 1}
                  </span>
                </div>
                <div className="mt-auto">
                  <div className="text-4xl font-bold text-white tracking-tighter mb-2 group-hover:text-emerald-400 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    {metric.label}
                  </div>
                  <p className="text-[10px] leading-relaxed text-zinc-600 font-medium group-hover:text-zinc-400 transition-colors">
                    {metric.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
        </Reveal>

        {/* Main Preview Console */}
        <Reveal>
        <div className="relative group mb-16 sm:mb-24 lg:mb-32">
          <div className="absolute -inset-4 bg-emerald-500/[0.03] rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 bg-zinc-900/40 border-b border-zinc-800/50 backdrop-blur-md">
              <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                <div className="flex gap-1.5 sm:gap-2 shrink-0">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-800 border border-zinc-700" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-800 border border-zinc-700" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-800 border border-zinc-700" />
                </div>
                <div className="h-4 w-px bg-zinc-800 shrink-0 hidden sm:block" />
                <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-[0.15em] sm:tracking-[0.3em] truncate">
                  <span className="sm:hidden">Reader_Core</span>
                  <span className="hidden sm:inline">Reader_Core_View / v2.1.0</span>
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="hidden sm:inline text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em]">
                  Live_Environment
                </span>
              </div>
            </div>

            <div className="relative bg-zinc-900">
              <Image
                src="/image/Max_a_A_split_composition_.png"
                alt="MangaTek Reader and Streaming Dashboard"
                width={1400}
                height={900}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-all duration-[1.5s] ease-out"
                priority
              />
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none" />
            </div>

            <div className="px-5 sm:px-8 py-6 sm:py-8 bg-zinc-950 border-t border-zinc-900 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-8">
              <div className="flex flex-col gap-1 text-center md:text-left">
                <h4 className="text-white text-sm font-bold uppercase tracking-wider">
                  MangaTek Infrastructure
                </h4>
                <p className="text-zinc-500 text-xs font-light max-w-sm mx-auto md:mx-0">
                  Aggregation, reading, and streaming, unified into one direction-aware engine.
                </p>
              </div>

              <div className="flex flex-col xs:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full xs:flex-1 md:flex-none inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all duration-300 shadow-xl bg-emerald-500 text-black hover:bg-emerald-400"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  Launch Platform
                </button>

                <button
                  onClick={() => setShowModal(true)}
                  className="w-full xs:flex-1 md:flex-none inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 bg-zinc-900/30"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  Source_Repo
                </button>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Fragmentation -> Unified Engine */}
        <Reveal>
        <div className="mb-40 space-y-20">
          <div className="relative pl-8 md:pl-16 border-l border-zinc-800">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-red-500 rounded-full" />
            <div className="max-w-3xl">
              <div className="text-red-500 font-mono text-[10px] tracking-[0.3em] uppercase mb-4">
                Status: Fragmented_Sources
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
                Fifteen sources, <span className="text-zinc-600">zero agreement.</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Every source shipped different, brittle markup",
                  "No shared schema for chapters or episodes",
                  "RTL readers served a mirrored, broken UI",
                  "Streams buffered hard on mobile networks"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/20 border border-zinc-800/30 rounded-xl">
                    <div className="w-1.5 h-1.5 bg-red-900 rounded-full" />
                    <span className="text-zinc-500 text-xs font-mono">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center py-4">
            <div className="h-20 w-px bg-gradient-to-b from-zinc-800 via-emerald-500/50 to-emerald-500" />
          </div>

          <div className="relative p-8 md:p-16 bg-zinc-950 border border-zinc-900 rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-emerald-500 to-transparent" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex items-center gap-3 px-4 py-1.5 border border-zinc-800 bg-zinc-900/50 text-emerald-500 text-[9px] font-mono tracking-[0.3em] uppercase mb-10">
                <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                One_Canonical_Feed
              </div>

              <h3 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                Unified <span className="text-emerald-400 italic">Engine</span>.
              </h3>

              <p className="text-zinc-500 text-lg max-w-2xl font-light leading-relaxed mb-16">
                Every feed is normalized into one schema before it reaches the reader. The result
                is a <span className="text-white">single, direction-aware experience</span> regardless
                of where the content originated.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full border border-zinc-900 bg-zinc-900 gap-px">
                {[
                  { label: "Source Adapters", icon: <Rss />, code: "ING_v1" },
                  { label: "Redis Cache Layer", icon: <Database />, code: "CACHE_v1" },
                  { label: "Adaptive Streaming", icon: <Film />, code: "STREAM_v1" },
                  { label: "RTL Primitives", icon: <Languages />, code: "I18N_v1" }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative p-10 bg-zinc-950 transition-all duration-500 hover:bg-zinc-900/50"
                  >
                    <span className="absolute top-4 left-6 text-[8px] font-mono text-zinc-700 tracking-widest uppercase">
                      {feature.code}
                    </span>
                    <div className="text-zinc-500 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-500 mb-6 flex justify-center">
                      {React.cloneElement(feature.icon as React.ReactElement<React.ComponentPropsWithoutRef<'svg'>>, { width: 24, height: 24, strokeWidth: 1 })}
                    </div>
                    <p className="text-[11px] font-bold text-zinc-400 group-hover:text-white uppercase tracking-widest transition-colors">
                      {feature.label}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Signature: Reading Direction Demo */}
        <Reveal>
        <div className="mb-40">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 flex items-center gap-3">
              <ArrowLeftRight className="w-4 h-4" />
              Interface_Module // Direction
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Reading order, <span className="italic font-serif font-light text-emerald-400">not mirrored CSS.</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl font-light leading-relaxed">
              A `transform: scaleX(-1)` flip is not localization. Panel sequence, pagination, and
              gesture direction are computed logically per locale, so an Arabic reader gets the
              same intent as an English one — just walked in the other direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl">
            {/* LTR demo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-950 p-10 md:p-12"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Locale: EN</span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">dir=&quot;ltr&quot;</span>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((n) => (
                  <React.Fragment key={n}>
                    <div className="flex-1 aspect-[3/4] rounded-lg border border-zinc-800 bg-zinc-900/40 flex items-center justify-center text-zinc-500 font-mono text-sm">
                      {n}
                    </div>
                    {n < 3 && <ArrowUpRight className="w-4 h-4 text-zinc-700 rotate-0 shrink-0" />}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-zinc-600 text-[11px] font-mono mt-6 uppercase tracking-widest text-center">
                Page flow: Left → Right
              </p>
            </motion.div>

            {/* RTL demo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-zinc-950 p-10 md:p-12 relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/5 blur-[80px] -z-10" />
              <div className="flex items-center justify-between mb-10" dir="rtl">
                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Locale: AR</span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">dir=&quot;rtl&quot;</span>
              </div>
              <div className="flex items-center gap-2 flex-row-reverse">
                {[1, 2, 3].map((n) => (
                  <React.Fragment key={n}>
                    <div className="flex-1 aspect-[3/4] rounded-lg border border-emerald-500/30 bg-emerald-500/[0.03] flex items-center justify-center text-emerald-400 font-mono text-sm">
                      {n}
                    </div>
                    {n < 3 && <ArrowUpRight className="w-4 h-4 text-emerald-700 rotate-180 shrink-0" />}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-emerald-500/70 text-[11px] font-mono mt-6 uppercase tracking-widest text-center">
                Page flow: Right → Left
              </p>
            </motion.div>
          </div>
        </div>
        </Reveal>

        {/* Engineering Log: Challenges */}
        <Reveal>
        <div className="mb-40">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
            <div className="max-w-xl">
              <div className="text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 flex items-center gap-3">
                <Code2 className="w-4 h-4" />
                Technical_Validation // Challenges
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                Engineering <span className="italic font-serif font-light text-emerald-400">Constraints</span>.
              </h2>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs font-light leading-relaxed border-l border-zinc-800 pl-6">
              Aggregating fifteen independent sources into one reliable reading surface required
              solving ingestion, caching, and localization at once.
            </p>
          </div>

          <div className="space-y-6">
            {challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 p-8 lg:p-10 bg-zinc-900/20 border-b lg:border-b-0 lg:border-r border-zinc-900">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] font-mono text-zinc-600">0{idx + 1}</span>
                      <div className="h-px w-8 bg-zinc-800" />
                      <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest">Constraint_Detected</span>
                    </div>
                    <h4 className="text-white font-semibold text-lg leading-snug">
                      {challenge.problem}
                    </h4>
                  </div>

                  <div className="lg:w-2/3 p-8 lg:p-10 relative">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-8">
                        <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.2em] block mb-3">
                          Implementation_Strategy
                        </span>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                          {challenge.solution}
                        </p>
                      </div>

                      <div className="mt-auto pt-6 border-t border-zinc-900/50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-500">
                            <TrendingUp className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[11px] font-medium text-zinc-300 uppercase tracking-wide">
                            {challenge.impact}
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
                          Status: Resolved
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </Reveal>

        {/* Engine Showcase */}
        <Reveal>
        <div className="mb-24">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
              Interface_Module // 03
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Three <span className="italic font-serif font-light text-emerald-400">Rendering Engines</span>.
            </h2>
            <div className="h-px w-24 bg-zinc-800" />
          </div>

          <div className="relative space-y-32">
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-emerald-500/20 to-zinc-800 hidden lg:block" />

            {engineShowcase.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 group cursor-default">
                    <span className="text-4xl font-bold text-zinc-800 group-hover:text-emerald-500/20 transition-colors duration-500">
                      0{idx + 1}
                    </span>
                    <div className="h-px flex-grow bg-zinc-900" />
                  </div>

                  <h3 className="text-3xl font-bold text-white tracking-tight leading-none">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-500 leading-relaxed text-lg font-light">
                    {feature.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {['Direction_Aware', 'Edge_Cached'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-950 border border-zinc-900 rounded-md text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-[0_0_50px_-12px_rgba(16,185,129,0.1)] group">
                    <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                      </div>
                      <div className="px-3 py-1 rounded bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-500 tracking-tighter">
                        mangatek.app/engine/view_{idx + 1}
                      </div>
                    </div>

                    <div className="aspect-video bg-zinc-900 flex items-center justify-center">
                      <div className="text-center space-y-3 p-8">
                        <Image src={feature.image} alt={feature.title} width={500} height={500} />
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-2xl">
                        Live_Preview <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2.5 h-2.5 rounded-full border-2 border-zinc-900 bg-emerald-500 shadow-[0_0_15px_#10b981] hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
        </Reveal>

        {/* Core Modules */}
        <Reveal>
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-grow bg-zinc-900" />
            <h3 className="text-2xl font-bold text-white tracking-widest uppercase text-center px-6">
              Core <span className="text-emerald-500">Modules</span>
            </h3>
            <div className="h-px flex-grow bg-zinc-900" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-10 bg-zinc-950 hover:bg-zinc-900/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-6 right-8 text-[10px] font-mono text-zinc-800 group-hover:text-emerald-500/40 transition-colors">
                  MOD_0{index + 1}
                </div>
                <div className="relative mb-10">
                  <div className="text-emerald-500 relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(feature.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 28, strokeWidth: 1.2 })}
                  </div>
                  <div className="absolute -inset-3 bg-zinc-900 rounded-lg group-hover:bg-emerald-500/5 transition-colors" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-emerald-500/20 transition-all" />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="px-6 py-2 rounded-full border border-zinc-900 bg-zinc-950 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Sources_Normalized: 15+</span>
              </div>
              <div className="w-px h-3 bg-zinc-800" />
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Cache_Layer: Edge_Redis</span>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Technical Ecosystem */}
        <Reveal>
        <div className="mb-40">
          <div className="relative p-1 bg-zinc-800 rounded-[3rem] overflow-hidden">
            <div className="bg-zinc-950 rounded-[2.9rem] p-8 md:p-16 relative">
              <div className="absolute top-10 right-10 font-mono text-[120px] text-white/[0.02] select-none pointer-events-none leading-none">
                04
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
                      <Cpu className="w-4 h-4" />
                      Infrastructure_Core
                    </div>
                    <h3 className="text-4xl font-bold text-white tracking-tighter">
                      Technical <span className="text-emerald-400 italic font-serif font-light">Ecosystem</span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 md:justify-end">
                    {['Next.js', 'Puppeteer', 'Redis', 'HLS.js'].map((core) => (
                      <span key={core} className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
                        {core}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 mb-20">
                  {techStack.map((stack, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="group border-b border-zinc-900 pb-8 hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-3">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                          {stack.category}
                        </h4>
                        <span className="text-[10px] font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors">
                          Layer_0{index + 1}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stack.items.map((item, itemIndex) => (
                          <span key={itemIndex} className="text-sm text-zinc-500 hover:text-white transition-colors cursor-default">
                            {item}{itemIndex !== stack.items.length - 1 ? " // " : ""}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden mt-12">
                  {[
                    { icon: <ShieldCheck />, title: "Source_Resilience", desc: "Per-source adapters isolate failures so one broken feed never takes down the reader." },
                    { icon: <Gauge />, title: "Latency_Control", desc: "Edge-cached manifests and normalized payloads keep page loads and stream starts fast." },
                    { icon: <PlayCircle />, title: "Playback_Adaptive", desc: "HLS.js quality-ladder switching keeps anime episodes playing through weak connections." }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-zinc-950 p-8 group hover:bg-zinc-900/40 transition-all"
                    >
                      <div className="text-emerald-500 mb-6 transform group-hover:-translate-y-1 transition-transform">
                        {React.cloneElement(item.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 20, strokeWidth: 1.5 })}
                      </div>
                      <h5 className="text-white font-bold text-[11px] uppercase tracking-widest mb-3">
                        {item.title}
                      </h5>
                      <p className="text-zinc-500 text-xs leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Final CTA */}
        <Reveal>
        <div className="mb-10 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent pointer-events-none" />

          <div className="relative border-y border-zinc-800 py-24 flex flex-col items-center text-center">
            <div className="mb-12">
              <div className="text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-6">
                Ready_For_Deployment
              </div>
              <h3 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
                Read it any way <br />
                <span className="italic font-serif font-light text-emerald-400">it was meant to flow.</span>
              </h3>
              <p className="text-zinc-500 text-lg max-w-xl mx-auto font-light leading-relaxed">
                Explore the live reader, or audit the source normalization pipeline behind it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
              <button
                onClick={() => setShowModal(true)}
                className="flex-1 inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald-500 text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all active:scale-95 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)]"
              >
                <Globe className="w-4 h-4" />
                Explore Platform
              </button>

              <button
                onClick={() => setShowModal(true)}
                className="flex-1 inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border border-zinc-800 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-zinc-900 transition-all active:scale-95"
              >
                <Github className="w-4 h-4" />
                Source_Code
              </button>
            </div>

            <div className="mt-20 flex items-center gap-8 opacity-20 filter grayscale">
              <span className="text-[10px] font-mono text-white tracking-widest">STABLE_BUILD</span>
              <div className="w-1 h-1 bg-white rounded-full" />
              <span className="text-[10px] font-mono text-white tracking-widest">v2.1.0_PROD</span>
              <div className="w-1 h-1 bg-white rounded-full" />
              <span className="text-[10px] font-mono text-white tracking-widest">TS_ENGINE</span>
            </div>
          </div>
        </div>
        </Reveal>

      </div>

      {/* Maintenance Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 sm:p-10 max-w-md w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
            </div>
            <h4 className="text-white text-lg font-bold mb-3">Client Project — Private</h4>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              This is a freelance project currently under active development. The live demo and source code will be available after deployment.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-8 py-3 bg-emerald-500 text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default MangaProjectPage;