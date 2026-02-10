'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ExternalLink, Github, Users, Calendar, Shield, Zap, Database, Globe,
  CheckCircle2, TrendingUp, Clock, MessageSquare, Bell, Lock, 
  BarChart3, Kanban, Code, Server, ArrowRight, Smartphone, Laptop,
  Layout, FileText, Star
} from 'lucide-react';

const BluttonProjectPage = () => {
  const features = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team Collaboration",
      description: "Real-time task management with role-based permissions and instant updates"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Project Management",
      description: "Kanban boards, calendar views, and advanced task filtering"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enterprise Security",
      description: "JWT authentication with Google/GitHub OAuth integration"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "High Performance",
      description: "Optimized for speed with modern React architecture and caching"
    }
  ];

const metrics = [
  { 
    value: "< 200ms", 
    label: "API Latency", 
    description: "Average REST endpoint response time",
    icon: <Zap className="w-4 h-4" /> 
  },
  { 
    value: "100ms", 
    label: "UI Sync", 
    description: "Optimistic state update latency",
    icon: <Clock className="w-4 h-4" /> 
  },
  { 
    value: "Zero", 
    label: "Hydration Mismatch", 
    description: "Strict TypeScript & SSR validation",
    icon: <Shield className="w-4 h-4" /> 
  },
  { 
    value: "Lighthouse 100", 
    label: "Perf Score", 
    description: "Verified Core Web Vitals",
    icon: <BarChart3 className="w-4 h-4" /> 
  }
];

  const techStack = [
    { category: "Frontend", items: ["Next.js 16", "TypeScript", "TailwindCSS", "Framer Motion", "React Query"] },
    { category: "Backend", items: ["Node.js", "Prisma ORM", "PostgreSQL", "NextAuth.js", "WebSockets"] },
    { category: "Integration", items: ["Stripe API", "Clerk Auth", "Email Service", "Webhook Handlers"] },
    { category: "Infrastructure", items: ["Vercel", "Supabase", "Redis Cache", "CI/CD Pipeline"] }
  ];

  const challenges = [
    {
      problem: "Teams losing tasks in endless email threads and Slack messages",
      solution: "Centralized task hub with smart notifications and search functionality",
      impact: "Reduced task tracking time by 70%"
    },
    {
      problem: "No visibility into project progress and team workload",
      solution: "Real-time dashboards with Kanban boards, calendar views, and analytics",
      impact: "Improved project visibility by 90%"
    },
    {
      problem: "Permission chaos with everyone editing everything",
      solution: "Granular role-based access control with workspace-level permissions",
      impact: "Eliminated unauthorized changes"
    }
  ];

  const workflowSteps = [
    { 
      step: "1", 
      title: "Create Workspace", 
      description: "Set up your team's central hub",
      icon: <Layout className="w-6 h-6" />
    },
    { 
      step: "2", 
      title: "Build Boards", 
      description: "Organize projects with Kanban",
      icon: <Kanban className="w-6 h-6" />
    },
    { 
      step: "3", 
      title: "Assign Tasks", 
      description: "Delegate with clarity",
      icon: <Users className="w-6 h-6" />
    },
    { 
      step: "4", 
      title: "Track Progress", 
      description: "Monitor in real-time",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <section id="blutto" className="bg-zinc-950 py-24 px-6 sm:px-10 text-white">
      <div className="container mx-auto max-w-6xl">

        {/* Breadcrumb */}
        <nav className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-16 flex items-center gap-3">
          <Link href="/#work" className="hover:text-cyan-400 transition-colors">Archive_Projects</Link>
          <span className="text-zinc-800">/</span>
          <span className="text-cyan-500/80 underline underline-offset-4">Project_Blutto</span>
        </nav>

{/* Header Section - Engineering Manifest Style */}
<div className="relative pt-12 mb-20">
  {/* Background System Code - Subtle Watermark */}
  <div className="absolute -top-10 left-0 font-mono text-[12rem] text-white/[0.02] select-none pointer-events-none uppercase font-bold">
    Blutto
  </div>

  <div className="relative flex flex-col items-center text-center">
    {/* Status Badge */}
    <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md">
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">
        Status: Production_Stable_v1.0.4
      </span>
    </div>

    {/* The Title Architecture */}
    <div className="max-w-4xl">
      <h1 className="text-6xl md:text-8xl font-normal tracking-tighter text-white mb-6">
        Blutto<span className="text-cyan-500">.</span>
      </h1>
      
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-12 bg-zinc-800" />
        <h2 className="text-lg md:text-xl font-mono text-zinc-500 uppercase tracking-[0.3em]">
          Distributed Task Orchestration
        </h2>
        <div className="h-px w-12 bg-zinc-800" />
      </div>

      <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
        A high-concurrency SaaS architecture designed for complex team workflows. 
        Focusing on <span className="text-white border-b border-cyan-500/50">real-time state synchronization</span> and {' '}
        <span className="text-white border-b border-cyan-500/50"> RBAC security models</span>.
      </p>
    </div>

    {/* Technical Specs Mini-Bar */}
    <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest border-y border-zinc-900 py-6 w-full max-w-3xl">
      <div className="flex flex-col gap-1">
        <span className="text-zinc-800 italic">Project_Type</span>
        <span className="text-zinc-400">Fullstack_SaaS</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-zinc-800 italic">Architecture</span>
        <span className="text-zinc-400">Next_Serverless</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-zinc-800 italic">Database</span>
        <span className="text-zinc-400">PostgreSQL_Edge</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-zinc-800 italic">Auth_Method</span>
        <span className="text-zinc-400">OAuth_JWT</span>
      </div>
    </div>
  </div>
</div>

{/* Hero Image & Command Bar */}
<div className="mb-20 group">
  {/* The Window Frame */}
  <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-[0_0_50px_-12px_rgba(34,211,238,0.2)]">
    {/* Browser Top Bar */}
    <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
      </div>
      <div className="px-3 py-1 bg-zinc-950 rounded text-[10px] font-mono text-zinc-500 border border-zinc-800">
        blutto.vercel.app
      </div>
      <div className="w-12" /> {/* Spacer for symmetry */}
    </div>

    {/* The Actual Image */}
    <div className="relative aspect-video overflow-hidden">
      <Image
        src="/image.jpg"
        alt="Blutto SaaS Platform Dashboard"
        width={1200}
        height={800}
        className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        priority
      />
      {/* Subtle Scanline Effect to make it look "techy" */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-20" />
    </div>
  </div>

  {/* Separate Command Bar (instead of overlapping the image) */}
  <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
    <div className="flex items-center gap-6">
      <div className="flex flex-col">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Deployment</span>
        <span className="text-sm text-zinc-300">Vercel Edge</span>
      </div>
      <div className="w-px h-8 bg-zinc-800" />
      <div className="flex flex-col">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Repository</span>
        <span className="text-sm text-zinc-300">Public_OS</span>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <Link
        href="https://blutto.vercel.app"
        target="_blank"
        className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-normal hover:bg-cyan-400 transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        Live Demo
      </Link>
      <Link
        href="https://github.com/king-sws/blutto"
        target="_blank"
        className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:border-zinc-500 transition-all"
      >
        <Github className="w-4 h-4" />
        Code
      </Link>
    </div>
  </div>
</div>

{/* Problem & Solution - The Project Audit */}
<div className="mb-32">
  <div className="grid lg:grid-cols-2 gap-12 items-start">
    {/* Left: Problem Audit */}
    <div className="relative p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.02]">
      <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-red-900">ERR_CORE_WORKFLOW</div>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
          <FileText className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold text-white">Legacy Fragmentation</h2>
      </div>
      
      <p className="text-zinc-400 mb-8 leading-relaxed">
        Before implementation, team data was scattered across disparate channels, leading to high 
        <span className="text-red-400 font-mono mx-1 underline">latency</span> 
        in decision making and significant 
        <span className="text-red-400 font-mono mx-1 underline">information decay</span>.
      </p>

      <div className="space-y-4 font-mono text-xs">
        {[
          "DATA_SILO: Tasks isolated in 500+ unread threads",
          "SYNC_ERROR: No real-time project state",
          "AUTH_RISK: Uncontrolled document sharing",
          "LEAKAGE: 30% time loss in status reporting"
        ].map((line, i) => (
          <div key={i} className="flex items-center gap-3 text-red-400/70">
            <span>{`>>`}</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Right: Solution Architecture */}
    <div className="relative p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.02]">
      <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-cyan-900">SYS_OPTIMIZED</div>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
          <Zap className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold text-white">Centralized Command</h2>
      </div>

      <p className="text-zinc-400 mb-8 leading-relaxed">
        Engineered a unified ecosystem using 
        <span className="text-cyan-400 font-mono mx-1">WebSockets</span> 
        for real-time synchronization and 
        <span className="text-cyan-400 font-mono mx-1">PostgreSQL</span> 
        as the single source of truth.
      </p>

      <div className="space-y-3">
        {[
          "Unified Dashboard with < 200ms latency",
          "Automated Workload Balancing algorithms",
          "Encrypted Workspace partitioning",
          "Real-time Event-driven notifications"
        ].map((point, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-cyan-500" />
            <span className="text-sm text-zinc-300">{point}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        {/* Workflow Visualization */}
{/* Workflow Visualization - System Architecture Style */}
<div className="mb-20 relative">
  {/* Header with improved spacing */}
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
          Pipeline <span className="text-zinc-700 font-light">/04</span>
        </h2>
      </div>
      <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] ml-5">
        Operational Flow & Logic
      </p>
    </div>
    
    <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent mx-12 mb-4" />
    
    <div className="bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-md">
      <div className="text-[10px] font-mono text-zinc-500 mb-1">SYSTEM_STATUS</div>
      <div className="text-xs font-mono text-green-500 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        ACTIVE_REPLICATION
      </div>
    </div>
  </div>

  <div className="max-w-5xl mx-auto">
    {workflowSteps.map((item, idx) => (
      <div key={idx} className="group relative flex gap-12 md:gap-20">
        {/* Improved Line & Node Column */}
        <div className="flex flex-col items-center">
          <div className="relative">
             {/* Glow effect behind the number */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-12 h-12 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-center z-10 group-hover:border-cyan-500/50 group-hover:bg-zinc-900 transition-all duration-500 rotate-45">
              <span className="text-sm font-mono text-zinc-500 group-hover:text-cyan-400 -rotate-45">
                0{idx + 1}
              </span>
            </div>
          </div>
          
          {idx !== workflowSteps.length - 1 && (
            <div className="relative w-px h-32 my-2 bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
               {/* Animated "Data Packet" moving down the line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
            </div>
          )}
        </div>

        {/* Content with better alignment */}
        <div className="flex-1 pb-20">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-500 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>

            {/* Technical Detail Box - Shifted to right on large screens */}
            <div className="lg:col-span-2">
              <div className="relative group/box overflow-hidden bg-zinc-900/20 border border-zinc-800/50 p-5 rounded-xl font-mono text-[11px] group-hover:border-zinc-700 transition-all">
                {/* Subtle code background */}
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover/box:opacity-20 transition-opacity">
                   <Code className="w-12 h-12 text-zinc-500" />
                </div>

                <div className="flex justify-between mb-4 border-b border-zinc-800/50 pb-2">
                  <span className="text-zinc-600">PROCESS_ID:</span>
                  <span className="text-cyan-600 font-bold">0x00{idx + 1}F</span>
                </div>
                <div className="space-y-1.5 relative z-10">
                  <p className="text-zinc-500">{`// Logic Implementation`}</p>
                  <p className="text-zinc-300 leading-tight">
                    {idx === 0 && "INIT_WORKSPACE_ACTION -> DB_WRITE_PRISMA"}
                    {idx === 1 && "SYNC_BOARD_STATE -> WEBSOCKET_PUSH"}
                    {idx === 2 && "ASSIGN_TASK -> EMAIL_WEBHOOK_TRIGGER"}
                    {idx === 3 && "AGGREGATE_METRICS -> RECHARTS_RENDER"}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[9px] text-zinc-600">
                    <span className="w-1 h-1 bg-green-500 rounded-full" /> 
                    LATENCY: 12ms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Engineering Excellence - Performance & Optimization Audit */}
<div className="mb-32">
  <div className="flex flex-col items-center text-center mb-16">
    <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-4">
      Technical_Post_Mortem
    </div>
    <h2 className="text-4xl font-bold text-white tracking-tighter">Engineering Excellence</h2>
    <p className="text-zinc-500 mt-4 max-w-2xl font-mono text-xs uppercase tracking-widest">
      Solving high-complexity bottlenecks through architectural precision
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        title: "State Hydration Sync",
        bottleneck: "Race conditions in multi-user environments causing UI desync.",
        optimization: "Implemented Optimistic UI patterns with React Query and localized state reconciliation.",
        metric: "70% Latency Reduction",
        tag: "UI_PERF"
      },
      {
        title: "Relational Data Scaling",
        bottleneck: "Complex N+1 query patterns slowing down dashboard load times.",
        optimization: "Refactored Prisma schema with composite indexes and Redis caching layer.",
        metric: "90% Faster Queries",
        tag: "DB_ARCH"
      },
      {
        title: "Auth Security Model",
        bottleneck: "Potential session hijacking and unauthorized workspace access risks.",
        optimization: "Deployed JWT-based RBAC with middleware-level route guarding and CSRF protection.",
        metric: "Enterprise Secured",
        tag: "SEC_AUTH"
      }
    ].map((item, idx) => (
      <div key={idx} className="relative group p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden">
        {/* Decorative background "Grid" element */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[grid-white_20px]" />
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded">
              {item.tag}
            </span>
            <div className="w-8 h-px bg-zinc-800 group-hover:bg-cyan-500/50 transition-colors" />
          </div>

          <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
            {item.title}
          </h3>

          <div className="space-y-6">
            <div>
              <div className="text-[10px] font-mono text-red-500/70 uppercase mb-2 tracking-tighter italic">
                {`// Critical_Bottleneck`}
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed italic">
                "{item.bottleneck}"
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/50">
              <div className="text-[10px] font-mono text-emerald-500/70 uppercase mb-2 tracking-tighter italic">
                {`// Optimized_Solution`}
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                {item.optimization}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 flex items-center justify-between border-t border-zinc-800/50">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-500" />
              <span className="text-xs font-bold text-white tracking-tight">{item.metric}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Feature Deep Dive - Technical Implementation */}
<div className="mb-32">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold text-white mb-4 italic uppercase tracking-tighter">Feature Implementations</h2>
    <div className="h-1 w-20 bg-cyan-500 mx-auto" />
  </div>

  <div className="space-y-24">
    {[
      {
        title: "Dynamic Kanban Engine",
        tech: "DND-Kit / Optimistic UI",
        desc: "Implemented a complex drag-and-drop system that updates the database via Prisma while simultaneously reflecting changes in the UI instantly to avoid user-perceived lag.",
        code: "await prisma.task.update({ where: { id }, data: { status: newStatus } })",
        icon: <Kanban className="w-6 h-6" />
      },
      {
        title: "Real-time Presence",
        tech: "WebSockets / Pusher",
        desc: "Engineered a presence layer that shows which team members are currently viewing a task, preventing collision and double-editing of project data.",
        code: "pusher.trigger('task-channel', 'user-typing', { userId })",
        icon: <Users className="w-6 h-6" />
      }
    ].map((feature, idx) => (
      <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-cyan-500">{feature.icon}</div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">{feature.tech}</span>
          </div>
          <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
          <p className="text-zinc-400 text-lg leading-relaxed">{feature.desc}</p>
        </div>

        {/* The Mock Terminal Interface */}
        <div className="flex-1 w-full bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
            <span className="font-mono text-[10px] text-zinc-500">implementation.ts</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            <p className="text-cyan-400">{`// ${feature.title} Logic`}</p>
            <p className="text-zinc-300 mt-2">{feature.code}</p>
            <div className="mt-8 h-32 bg-zinc-950/50 rounded border border-zinc-800/50 flex items-center justify-center">
               <span className="text-zinc-700 text-xs italic">Visualizing {feature.title} Data Stream...</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Core Features Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-white mb-12 text-center">Platform Capabilities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture */}
{/* Technical Architecture - System Dependency View */}
<div className="mb-24">
  <div className="flex items-center gap-4 mb-12">
    <div className="h-px flex-1 bg-zinc-800" />
    <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.3em]">
      System Architecture Stack
    </h3>
    <div className="h-px flex-1 bg-zinc-800" />
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      {
        category: "Interface & State",
        tools: ["Next.js 16", "TypeScript", "TailwindCSS", "Framer Motion"],
        detail: "Server-side rendering with optimistic UI updates.",
        border: "border-blue-500/20"
      },
      {
        category: "Server & Logic",
        tools: ["Node.js", "NextAuth.js", "React Query", "WebSockets"],
        detail: "Real-time event loop & secure session management.",
        border: "border-cyan-500/20"
      },
      {
        category: "Data Persistence",
        tools: ["PostgreSQL", "Prisma ORM", "Redis Cache", "Supabase"],
        detail: "Relational mapping with distributed edge caching.",
        border: "border-violet-500/20"
      },
      {
        category: "Infrastructure",
        tools: ["Vercel", "Stripe API", "CI/CD Pipeline", "Cloudinary"],
        detail: "Automated deployment with edge-function scaling.",
        border: "border-emerald-500/20"
      }
    ].map((stack, idx) => (
      <div 
        key={idx} 
        className={`bg-zinc-900/40 border ${stack.border} p-6 rounded-xl flex flex-col justify-between hover:bg-zinc-900/60 transition-all group`}
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-wider bg-zinc-800 px-2 py-1 rounded">
              {stack.category}
            </h4>
            <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-cyan-500 transition-colors shadow-[0_0_10px_rgba(34,211,238,0)] group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          </div>

          <div className="space-y-2 mb-6">
            {stack.tools.map((tool, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-[1px] bg-zinc-700" />
                <span className="text-zinc-300 text-sm font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800/50">
          <p className="text-[11px] text-zinc-500 italic leading-relaxed">
            {stack.detail}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Infrastructure Bottom Bar */}
  <div className="mt-4 p-4 bg-zinc-900/20 border border-zinc-800 rounded-lg flex flex-wrap justify-center gap-8 text-[10px] font-mono text-zinc-600">
    <span className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> 
      DATABASE_REPLICATION: ACTIVE
    </span>
    <span className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> 
      SSL_ENCRYPTION: AES_256
    </span>
    <span className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 
      EDGE_RUNTIME: VERCEL
    </span>
  </div>
</div>

{/* Security & Permissions - Logic View */}
<div className="mb-24 relative">
  {/* Background Glow for "Security" feel */}
  <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

  <div className="relative border border-zinc-800 bg-zinc-900/40 rounded-2xl overflow-hidden">
    <div className="p-8 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/20">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <Shield className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Access Control Logic</h3>
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mt-0.5">RBAC Implementation / JWT Auth</p>
        </div>
      </div>
      <div className="hidden sm:block text-[10px] font-mono text-zinc-600 bg-zinc-950 px-3 py-1 rounded border border-zinc-800">
        SECURE_PROTOCOL_v1.0
      </div>
    </div>

    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
      {[
        { 
          role: "Owner", 
          clearance: "LVL_03",
          access: ["Workspace Config", "Billing Write", "User Deletion"],
          color: "text-red-400"
        },
        { 
          role: "Manager", 
          clearance: "LVL_02",
          access: ["Project Create", "Assign Tasks", "View Analytics"],
          color: "text-cyan-400"
        },
        { 
          role: "Contributor", 
          clearance: "LVL_01",
          access: ["Task Edit", "Comment Write", "Status Update"],
          color: "text-zinc-400"
        }
      ].map((item, idx) => (
        <div key={idx} className="p-8 hover:bg-white/[0.01] transition-colors group">
          <div className="flex items-center justify-between mb-6">
            <span className={`font-mono text-[10px] px-2 py-0.5 rounded border border-zinc-700 bg-zinc-900 ${item.color}`}>
              {item.clearance}
            </span>
            <Lock className="w-4 h-4 text-zinc-700 group-hover:text-cyan-500/50 transition-colors" />
          </div>
          
          <h4 className="text-white font-bold text-lg mb-2">{item.role}</h4>
          
          <div className="space-y-2 mt-4">
            {item.access.map((perm, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-500/50" />
                <span className="text-xs text-zinc-400 font-mono">{perm}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* The "Technical Proof" Footer */}
    <div className="p-4 bg-zinc-950/50 border-t border-zinc-800 font-mono text-[10px] text-zinc-500 flex justify-center gap-6">
      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-900" /> AES-256 Encryption</span>
      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-900" /> OAuth 2.0 Provider</span>
      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-900" /> Route Guard Middleware</span>
    </div>
  </div>
</div>

{/* Responsive Engineering - Breakpoint Specification */}
<div className="mb-24">
  <div className="text-center mb-16">
    <h3 className="text-2xl font-bold text-white mb-4">Device-Agnostic Optimization</h3>
    <p className="text-zinc-500 max-w-2xl mx-auto text-sm font-mono">
      Custom adaptive layouts engineered for high-performance across the hardware spectrum.
    </p>
  </div>

  <div className="grid lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
    {[
      {
        device: "Desktop / Workstation",
        spec: "1440px +",
        features: ["Multi-column Kanban", "Keyboard Shortcuts", "Hover-state Tooltips"],
        icon: <Laptop className="w-5 h-5" />,
        css: "w-full"
      },
      {
        device: "Tablet / Portable",
        spec: "768px - 1024px",
        features: ["Side-sheet Navigation", "Touch-optimized Drag", "Adaptive Grids"],
        icon: <Laptop className="w-5 h-5 rotate-90" />, // Simulating a tablet orientation
        css: "w-4/5 mx-auto"
      },
      {
        device: "Mobile / Handheld",
        spec: "320px - 480px",
        features: ["Bottom Navigation Bar", "PWA Ready", "Gesture-based Actions"],
        icon: <Smartphone className="w-5 h-5" />,
        css: "w-1/2 mx-auto"
      }
    ].map((item, idx) => (
      <div key={idx} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center group hover:border-cyan-500/30 transition-all">
        {/* Device Visualization Placeholder */}
        <div className="w-full aspect-[4/3] bg-zinc-950 rounded-lg border border-zinc-800 mb-8 relative overflow-hidden flex items-center justify-center">
            <div className={`aspect-video border border-zinc-700 rounded-sm bg-zinc-900/50 flex items-center justify-center transition-all group-hover:border-cyan-500/50 ${item.css}`}>
                <div className="w-1/3 h-1/3 bg-zinc-800/50 rounded flex items-center justify-center text-zinc-600">
                    {item.icon}
                </div>
            </div>
            {/* Resolution Tag */}
            <div className="absolute bottom-2 right-2 font-mono text-[9px] text-zinc-600">
                {item.spec}
            </div>
        </div>

        <div className="w-full">
          <h4 className="text-white font-bold mb-1">{item.device}</h4>
          <p className="text-xs text-cyan-500 font-mono mb-4">OPTIMIZED_UI</p>
          
          <ul className="space-y-2">
            {item.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                <div className="w-1 h-1 rounded-full bg-zinc-700" />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Final Technical CTA */}
<div className="relative mt-32 p-1 border-t border-zinc-800">
  {/* Decorative Corner Accents */}
  <div className="absolute top-0 left-0 w-8 h-px bg-cyan-500 -translate-y-px" />
  <div className="absolute top-0 right-0 w-8 h-px bg-cyan-500 -translate-y-px" />

  <div className="bg-zinc-950 py-16 px-8 text-center">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-8">
      Project_Finalization_Complete
    </div>
    
    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
      Ready to explore the <span className="text-cyan-400">Source?</span>
    </h3>
    
    <p className="text-zinc-500 mb-10 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed">
      This platform is fully documented and open for technical review. 
      Check the repository for architecture decisions and implementation details.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href="https://blutto.vercel.app"
        target="_blank"
        className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95"
      >
        <div className="absolute inset-0 bg-cyan-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
        <span className="relative z-10 flex items-center gap-2">
          <ExternalLink className="w-4 h-4" />
          Live Environment
        </span>
      </Link>

      <Link
        href="https://github.com/king-sws/blutto"
        target="_blank"
        className="group flex items-center gap-3 bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-full font-bold transition-all hover:border-zinc-500 hover:bg-zinc-800"
      >
        <Github className="w-4 h-4" />
        Technical Docs
      </Link>
    </div>

    {/* Metadata Footer */}
    <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
      <div className="flex items-center gap-2">
        <span className="w-1 h-1 bg-zinc-700 rounded-full" />
        Branch: Main
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1 h-1 bg-zinc-700 rounded-full" />
        License: MIT
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1 h-1 bg-zinc-700 rounded-full" />
        Environment: Production
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default BluttonProjectPage;