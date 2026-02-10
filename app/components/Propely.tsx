'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ExternalLink, Github, Home, Key, DollarSign, FileText, Users, Calendar,
  Bell, Globe, TrendingUp, Clock, Shield, CheckCircle2, ArrowRight,
  Smartphone, Laptop, Zap, Database, Code,
  ChevronRight,
  CreditCard,
  Wrench,
  BarChart3,
  Terminal,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  LucideIcon
} from 'lucide-react';

const PropertyManagementProjectPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <Home className="w-5 h-5" />,
      title: "Property Listings",
      description: "Comprehensive property portfolio with detailed listings, photos, and amenities."
    },
    {
      icon: <Key className="w-5 h-5" />,
      title: "Tenant Management",
      description: "Complete tenant profiles, lease tracking, and automated communication."
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Payment Processing",
      description: "Automated rent collection, payment tracking, and financial reporting."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Maintenance Requests",
      description: "Streamlined maintenance workflow with ticket tracking and vendor management."
    }
  ];

  const metrics = [
    { value: "40%", label: "Reduced Admin Time", icon: <Clock /> },
    { value: "98%", label: "On-Time Payments", icon: <DollarSign /> },
    { value: "60%", label: "Faster Response", icon: <Zap /> },
    { value: "100+", label: "Active Properties", icon: <Home /> }
  ];

  const techStack = [
    { category: "Frontend", items: ["Next.js 16", "TypeScript", "TailwindCSS", "shadcn/ui", "React Query"] },
    { category: "Backend", items: ["Node.js", "Prisma ORM", "PostgreSQL", "NextAuth.js", "tRPC"] },
    { category: "Features", items: ["Stripe Integration", "Email Notifications", "Document Upload", "Calendar System"] },
    { category: "Infrastructure", items: ["Vercel", "AWS S3", "Redis Cache", "CI/CD Pipeline"] }
  ];

  const challenges = [
    {
      problem: "Manual rent collection taking hours each month",
      solution: "Automated payment system with Stripe integration and scheduled reminders",
      impact: "Saved 15+ hours monthly for property managers"
    },
    {
      problem: "Scattered maintenance requests via calls, emails, texts",
      solution: "Centralized ticketing system with priority routing and vendor assignment",
      impact: "60% faster maintenance response time"
    },
    {
      problem: "Document chaos across multiple folders and emails",
      solution: "Secure cloud storage with intelligent categorization and search",
      impact: "Instant access to any lease or document"
    }
  ];

  const featureShowcase = [
    {
      title: "Property Dashboard",
      image: "/pro1.png",
      description: "Real-time overview of all properties, occupancy rates, and financial health"
    },
    {
      title: "Tenant Portal",
      image: "/proo2.png",
      description: "Self-service platform for rent payments, maintenance requests, and lease documents"
    },
    {
      title: "Financial Analytics",
      image: "/pro3png.png",
      description: "Comprehensive revenue tracking, expense reports, and ROI calculations"
    }
  ];

  return (
    <section id="propely" className="bg-zinc-950 py-24 px-6 sm:px-10 text-white">
      <div className="container mx-auto max-w-6xl">

        {/* Breadcrumb Navigation - Minimalist Path */}
        <nav className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-16">
          <Link href="/#work" className="hover:text-[#ffe1c1] transition-colors">Archive</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-zinc-400">Case_Study_01</span>
          <span className="text-[#ffe1c1]">/</span>
          <span className="text-[#ffe1c1]">Propely</span>
        </nav>

        {/* Header Section - The Grand Entry */}
        <div className="relative mb-32">
          <div className="grid lg:grid-cols-[1fr_auto] items-start gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-[#ffe1c1]/30" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#ffe1c1]">
                  Property_Management_OS
                </span>
              </div>

              <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-white mb-10 leading-[0.85]">
                Propely<span className="text-[#ffe1c1]">.</span>
              </h1>

              <p className="text-zinc-400 text-xl md:text-3xl leading-relaxed font-light max-w-3xl">
                The <span className="text-white">definitive platform</span> for modern real estate operations.
                Transforming property chaos into a <span className="italic text-[#ffe1c1]">streamlined digital asset</span>.
              </p>
            </div>

            {/* Project Metadata - The "Blueprint" Box */}
            <div className="hidden lg:block w-64 p-8 border border-zinc-800 bg-zinc-900/10 backdrop-blur-md rounded-lg mt-4">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-600 uppercase mb-2 tracking-widest">Client_Type</h4>
                  <p className="text-sm text-zinc-300 font-medium">Enterprise Landlords</p>
                </div>
                <div className="h-px bg-zinc-800" />
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-600 uppercase mb-2 tracking-widest">Dev_Cycle</h4>
                  <p className="text-sm text-zinc-300 font-medium">6 Months Production</p>
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffe1c1]" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Main_Portfolio_Item</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Preview: The Enterprise Console */}
        <div className="relative group mb-32">
          {/* Ambient "Blueprint" Glow - Using the Sand Tone */}
          <div className="absolute -inset-4 bg-[#ffe1c1]/[0.03] rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">

            {/* 1. Technical Header Bar */}
            <div className="flex items-center justify-between px-8 py-4 bg-zinc-900/40 border-b border-zinc-800/50 backdrop-blur-md">
              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700" />
                </div>
                <div className="h-4 w-px bg-zinc-800" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
                  Core_System_View / v4.0.1
                </span>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe1c1] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffe1c1]"></span>
                </span>
                <span className="text-[10px] font-mono text-[#ffe1c1] uppercase tracking-[0.2em]">Live_Environment</span>
              </div>
            </div>

            {/* 2. The High-Fidelity Preview */}
            <div className="relative bg-zinc-900">
              <Image
                src="/pro.png"
                alt="Propely Enterprise Dashboard"
                width={1400}
                height={900}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-all duration-[1.5s] ease-out"
                priority
              />
              {/* Precision Overlay Grid - Only visible on hover */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none" />
            </div>

            {/* 3. The Action Control Bar */}
            <div className="px-8 py-8 bg-zinc-950 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-1">
                <h4 className="text-white text-sm font-bold uppercase tracking-wider">Propely Infrastructure</h4>
                <p className="text-zinc-500 text-xs font-light max-w-sm">
                  Full-stack real estate engine with automated rent collection and tenant management.
                </p>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <Link
                  href="https://propely.site"
                  target="_blank"
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all duration-300 shadow-xl"
                  style={{ backgroundColor: '#ffe1c1', color: '#000' }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Launch Platform
                </Link>

                <Link
                  href="https://github.com/king-sws/property-management-platform"
                  target="_blank"
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest border border-zinc-800 text-zinc-400 hover:text-[#ffe1c1] hover:border-[#ffe1c1]/40 transition-all duration-300 bg-zinc-900/30"
                >
                  <Github className="w-4 h-4" />
                  Source_Repo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Propely Exclusive: The System Transformation */}
        <div className="mb-40 space-y-20">

          {/* Part 1: The Fragmentation (Problem) */}
          <div className="relative pl-8 md:pl-16 border-l border-zinc-800">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-red-500 rounded-full" />

            <div className="max-w-3xl">
              <div className="text-red-500 font-mono text-[10px] tracking-[0.3em] uppercase mb-4">
                Status: Fragmented_Operations
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
                Managers were drowning in <span className="text-zinc-600">analogue noise.</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "15+ Hours lost in manual reconciliation",
                  "Maintenance lost in email archives",
                  "Disconnected payment channels",
                  "Zero real-time performance data"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/20 border border-zinc-800/30 rounded-xl">
                    <div className="w-1.5 h-1.5 bg-red-900 rounded-full" />
                    <span className="text-zinc-500 text-xs font-mono">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Part 2: The Bridge (Visual Connector) */}
          <div className="flex justify-center py-4">
            <div className="h-20 w-px bg-gradient-to-b from-zinc-800 via-[#ffe1c1]/50 to-[#ffe1c1]" />
          </div>

          {/* Part 3: The Integration (Solution) */}
          <div className="relative p-8 md:p-16 bg-zinc-950 border border-zinc-900 rounded-[2rem] overflow-hidden">

            {/* 1. Industrial Background Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            {/* 2. Top Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#ffe1c1] to-transparent" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Specialized Badge */}
              <div className="flex items-center gap-3 px-4 py-1.5 border border-zinc-800 bg-zinc-900/50 text-[#ffe1c1] text-[9px] font-mono tracking-[0.3em] uppercase mb-10">
                <span className="w-1 h-1 bg-[#ffe1c1] rounded-full animate-pulse" />
                System_Solution_Deployed
              </div>

              <h3 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                Unified <span className="text-[#ffe1c1] italic">Architecture</span>.
              </h3>

              <p className="text-zinc-500 text-lg max-w-2xl font-light leading-relaxed mb-16">
                Replacing fragmentation with a modular engine. I centralized the tenant lifecycle into a
                <span className="text-white"> high-performance dashboard</span> engineered for zero-friction management.
              </p>

              {/* 3. Feature Matrix: Grid with 1px borders (Blutto Style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full border border-zinc-900 bg-zinc-900 gap-px">
                {[
                  { label: "Automated Rent", icon: <CreditCard />, code: "FIN_v1" },
                  { label: "Centralized Tickets", icon: <Wrench />, code: "SUP_v1" },
                  { label: "Live ROI Tracking", icon: <BarChart3 />, code: "ANL_v1" },
                  { label: "Document Vault", icon: <Shield />, code: "SEC_v1" }
                ].map((feature, i) => (
                  <div key={i} className="group relative p-10 bg-zinc-950 transition-all duration-500 hover:bg-zinc-900/50">
                    {/* Internal Module ID */}
                    <span className="absolute top-4 left-6 text-[8px] font-mono text-zinc-700 tracking-widest uppercase">
                      {feature.code}
                    </span>

                    <div className="text-zinc-500 group-hover:text-[#ffe1c1] group-hover:scale-110 transition-all duration-500 mb-6 flex justify-center">
                      {React.cloneElement(feature.icon as React.ReactElement<React.ComponentPropsWithoutRef<'svg'>>, { width: 24, height: 24, strokeWidth: 1 })}
                    </div>

                    <p className="text-[11px] font-bold text-zinc-400 group-hover:text-white uppercase tracking-widest transition-colors">
                      {feature.label}
                    </p>

                    {/* Hover Status Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffe1c1] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Propely Engineering: The System Layer Debrief */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
            <div className="max-w-xl">
              <div className="text-[#ffe1c1] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 flex items-center gap-3">
                <Terminal className="w-4 h-4" />
                Technical_Validation // Challenges
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                Engineering <span className="italic font-serif font-light text-[#ffe1c1]">Constraints</span>.
              </h2>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs font-light leading-relaxed border-l border-zinc-800 pl-6">
              Scaling a multi-tenant platform required solving complex data isolation and real-time synchronization hurdles.
            </p>
          </div>

          <div className="space-y-6">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="group relative bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden hover:border-[#ffe1c1]/30 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row">

                  {/* 1. Problem Definition (The Indicator) */}
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

                  {/* 2. Resolution Path (The Technical Content) */}
                  <div className="lg:w-2/3 p-8 lg:p-10 relative">
                    {/* Architectural Grid Background (Subtle) */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-8">
                        <span className="text-[#ffe1c1] font-mono text-[10px] uppercase tracking-[0.2em] block mb-3">
                          Implementation_Strategy
                        </span>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                          {challenge.solution}
                        </p>
                      </div>

                      {/* Impact Footer */}
                      <div className="mt-auto pt-6 border-t border-zinc-900/50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-[#ffe1c1]/5 border border-[#ffe1c1]/10 text-[#ffe1c1]">
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
              </div>
            ))}
          </div>
        </div>

        {/* Propely Showcase: The Command Center Walkthrough */}
        <div className="mb-40">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="text-[#ffe1c1] font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
              Interface_Module // 03
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              User <span className="italic font-serif font-light text-[#ffe1c1]">Workflows</span>.
            </h2>
            <div className="h-px w-24 bg-zinc-800" />
          </div>

          <div className="relative space-y-32">
            {/* The Vertical Connection Line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-[#ffe1c1]/20 to-zinc-800 hidden lg:block" />

            {featureShowcase.map((feature, idx) => (
              <div key={idx} className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* 1. Feature Narrative */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 group cursor-default">
                    <span className="text-4xl font-bold text-zinc-800 group-hover:text-[#ffe1c1]/20 transition-colors duration-500">
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
                    {['Enterprise_Ready', 'High_Performance'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-950 border border-zinc-900 rounded-md text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. System Browser UI */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-[0_0_50px_-12px_rgba(255,225,193,0.1)] group">

                    {/* Top Browser Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                      </div>
                      <div className="px-3 py-1 rounded bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-500 tracking-tighter">
                        propely.app/system/view_{idx + 1}
                      </div>
                    </div>

                    {/* The Image Wrapper */}
                    <div className="aspect-video bg-zinc-900 flex items-center justify-center">

                      <div className="text-center space-y-3 p-8">

                        <Image src={feature.image} alt={feature.title} width={500} height={500} />

                      </div>

                    </div>

                    {/* Feature Action Button Overlay */}
                    <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-2xl">
                        Live_Preview <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* The Connection Dot (Center of line) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2.5 h-2.5 rounded-full border-2 border-zinc-900 bg-[#ffe1c1] shadow-[0_0_15px_#ffe1c1] hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Propely: The Functional Schema */}
        <div className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-grow bg-zinc-900" />
            <h3 className="text-2xl font-bold text-white tracking-widest uppercase text-center px-6">
              Core <span className="text-[#ffe1c1]">Modules</span>
            </h3>
            <div className="h-px flex-grow bg-zinc-900" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-10 bg-zinc-950 hover:bg-zinc-900/50 transition-all duration-500 overflow-hidden"
              >
                {/* Module Number - Technical Detail */}
                <div className="absolute top-6 right-8 text-[10px] font-mono text-zinc-800 group-hover:text-[#ffe1c1]/40 transition-colors">
                  MOD_0{index + 1}
                </div>

                {/* Icon with "Active" Pulse */}
                <div className="relative mb-10">
                  <div className="text-[#ffe1c1] relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(feature.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 28, strokeWidth: 1.2 })}
                  </div>
                  {/* Subtle Square Backdrop */}
                  <div className="absolute -inset-3 bg-zinc-900 rounded-lg group-hover:bg-[#ffe1c1]/5 transition-colors" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-bold text-lg tracking-tight group-hover:text-[#ffe1c1] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Connection Points (The "Blueprint" look) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-[#ffe1c1]/20 transition-all" />

                {/* Hover "Scanning" Line Effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#ffe1c1] opacity-0 -translate-y-10 group-hover:translate-y-40 group-hover:opacity-10 transition-all duration-[1.5s] ease-in-out" />
              </div>
            ))}
          </div>

          {/* System Status Bar */}
          <div className="mt-8 flex justify-center">
            <div className="px-6 py-2 rounded-full border border-zinc-900 bg-zinc-950 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#ffe1c1] shadow-[0_0_8px_#ffe1c1]" />
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Interconnected_Modules</span>
              </div>
              <div className="w-px h-3 bg-zinc-800" />
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Data_Isolation: Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Propely Infrastructure: The Core Engine */}
        <div className="mb-40">
          <div className="relative p-1 bg-zinc-800 rounded-[3rem] overflow-hidden">
            <div className="bg-zinc-950 rounded-[2.9rem] p-8 md:p-16 relative">

              {/* Background Tech Watermark */}
              <div className="absolute top-10 right-10 font-mono text-[120px] text-white/[0.02] select-none pointer-events-none leading-none">
                01
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 text-[#ffe1c1] font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
                      <Cpu className="w-4 h-4" />
                      Infrastructure_Core
                    </div>
                    <h3 className="text-4xl font-bold text-white tracking-tighter">
                      Technical <span className="text-[#ffe1c1] italic font-serif font-light">Ecosystem</span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 md:justify-end">
                    {['Next.js', 'PostgreSQL', 'Stripe', 'Redis'].map((core) => (
                      <span key={core} className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
                        {core}
                      </span>
                    ))}
                  </div>
                </div>

                {/* The Technical Ledger: Categories as Rows */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 mb-20">
                  {techStack.map((stack, index) => (
                    <div key={index} className="group border-b border-zinc-900 pb-8 hover:border-[#ffe1c1]/30 transition-colors">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-3">
                          <div className="w-1 h-1 bg-[#ffe1c1] rounded-full" />
                          {stack.category}
                        </h4>
                        <span className="text-[10px] font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors">
                          Layer_0{index + 1}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {stack.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="text-sm text-zinc-500 hover:text-white transition-colors cursor-default"
                          >
                            {item}{itemIndex !== stack.items.length - 1 ? " // " : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enterprise Highlights: The Spec Row */}
                <div className="grid md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden mt-12">
                  {[
                    { icon: <ShieldCheck />, title: "Enterprise_Trust", desc: "Role-based access control with vaulted document encryption." },
                    { icon: <Zap />, title: "Latency_Control", desc: "Optimized database indexing and edge-cached property queries." },
                    { icon: <Database />, title: "Data_Resilience", desc: "Distributed serverless architecture designed for high availability and reliability." }
                  ].map((item, i) => (
                    <div key={i} className="bg-zinc-950 p-8 group hover:bg-zinc-900/40 transition-all">
                      <div className="text-[#ffe1c1] mb-6 transform group-hover:-translate-y-1 transition-transform">
                        {React.cloneElement(item.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 20, strokeWidth: 1.5 })}
                      </div>
                      <h5 className="text-white font-bold text-[11px] uppercase tracking-widest mb-3">
                        {item.title}
                      </h5>
                      <p className="text-zinc-500 text-xs leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Propely: Advanced Systems & Device Integration */}
        <div className="mb-40 grid lg:grid-cols-12 gap-12">

          {/* Left: Advanced Capabilities (The Logic) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="p-10 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] relative overflow-hidden">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-2 h-2 bg-[#ffe1c1] rotate-45" />
                <h3 className="text-[10px] font-mono text-[#ffe1c1] uppercase tracking-[0.4em]">Integrated_Intelligence</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { icon: <Calendar />, title: "Smart Scheduling", desc: "Intelligent priority routing for maintenance and automated lease lifecycle." },
                  { icon: <FileText />, title: "Document Hub", desc: "OCR-enabled search with secure versioning and e-signature workflows." },
                  { icon: <Users />, title: "Tenant Portal", desc: "Full-scale self-service ecosystem for ledger access and requests." }
                ].map((item, i) => (
                  <div key={i} className="space-y-4 group">
                    <div className="text-zinc-700 group-hover:text-[#ffe1c1] transition-colors duration-500">
                      {React.cloneElement(item.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 24, strokeWidth: 1.5 })}
                    </div>
                    <h4 className="text-white font-bold text-sm tracking-tight">{item.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Responsive Benchmarks (The Hardware) */}
          <div className="lg:col-span-4">
            <div className="h-full p-10 bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] flex flex-col">
              <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-widest">Cross_Platform</h3>
              <p className="text-zinc-500 text-[11px] mb-12 font-mono uppercase tracking-tighter">Optimization: 100/100</p>

              <div className="mt-auto space-y-8">
                <div className="flex items-end gap-6 justify-center">
                  <div className="text-center group">
                    <Laptop className="w-10 h-10 text-zinc-800 group-hover:text-[#ffe1c1] transition-all mb-2" />
                    <span className="text-[9px] font-mono text-zinc-600">DESKTOP_OS</span>
                  </div>
                  <div className="text-center group">
                    <Smartphone className="w-7 h-7 text-zinc-800 group-hover:text-[#ffe1c1] transition-all mb-2" />
                    <span className="text-[9px] font-mono text-zinc-600">MOBILE_APP</span>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs text-center font-light italic">
                  "Engineered for sub-second mobility."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Propely: The Final Handover */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffe1c1]/[0.02] to-transparent pointer-events-none" />

          <div className="relative border-y border-zinc-800 py-24 flex flex-col items-center text-center">
            <div className="mb-12">
              <div className="text-[#ffe1c1] font-mono text-[10px] tracking-[0.5em] uppercase mb-6">
                Ready_For_Deployment
              </div>
              <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
                Streamline your <br />
                <span className="italic font-serif font-light text-[#ffe1c1]">operations today.</span>
              </h3>
              <p className="text-zinc-500 text-lg max-w-xl mx-auto font-light leading-relaxed">
                Experience the architectural difference of Propely. Audit the code or launch the production environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
              <Link
                href="https://propely.site"
                target="_blank"
                className="flex-1 inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#ffe1c1] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all active:scale-95 shadow-[0_20px_40px_-15px_rgba(255,225,193,0.3)]"
              >
                <Globe className="w-4 h-4" />
                Explore Platform
              </Link>

              <Link
                href="https://github.com/king-sws/property-management-platform"
                target="_blank"
                className="flex-1 inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border border-zinc-800 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-zinc-900 transition-all active:scale-95"
              >
                <Github className="w-4 h-4" />
                Source_Code
              </Link>
            </div>

            {/* Technical Footer Detail */}
            <div className="mt-20 flex items-center gap-8 opacity-20 filter grayscale">
              <span className="text-[10px] font-mono text-white tracking-widest">STABLE_BUILD</span>
              <div className="w-1 h-1 bg-white rounded-full" />
              <span className="text-[10px] font-mono text-white tracking-widest">v4.0.0_PROD</span>
              <div className="w-1 h-1 bg-white rounded-full" />
              <span className="text-[10px] font-mono text-white tracking-widest">TS_ENGINE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyManagementProjectPage;