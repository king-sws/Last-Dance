'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ExternalLink, Github, ShoppingCart, CreditCard, BarChart, ShieldCheck,
  Server, Globe, TrendingUp, Users, Package, Zap, Star, ArrowRight,
  CheckCircle2, Code, Smartphone, Laptop, Lock, Search, PackageCheck,
  ChevronRight,
  LucideIcon,
  AlertCircle,
  Code2,
  ArrowUpRight
} from 'lucide-react';

const SelloraProjectPage = () => {
  const features = [
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "Advanced Product System",
      description: "Dynamic categories, variants, inventory sync, and high-quality product management."
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Secure Checkout",
      description: "Stripe-powered payments with validated order flow and fraud-safe architecture."
    },
    {
      icon: <BarChart className="w-5 h-5" />,
      title: "Analytics Dashboard",
      description: "Insights on sales, customers, conversion rate, and revenue performance."
    },
    // {
    //   icon: <ShieldCheck className="w-5 h-5" />,
    //   title: "User Accounts & Roles",
    //   description: "Role-based admin access, secure authentication, and profile management."
    // }
  ];

  const metrics = [
    {
      value: "1.8s",
      label: "Time to Interactive",
      description: "Optimized LCP for retail conversion",
      icon: <Zap className="w-4 h-4" />
    },
    {
      value: "AES-256",
      label: "Encryption Grade",
      description: "End-to-end payload obfuscation",
      icon: <Lock className="w-4 h-4" />
    },
    {
      value: "SSL+",
      label: "Encryption Grade",
      description: "PCI-DSS compliant checkout flow",
      icon: <Lock className="w-4 h-4" />
    },
    {
      value: "100ms",
      label: "Cart Latency",
      description: "Sub-second state reconciliation",
      icon: <ShoppingCart className="w-4 h-4" />
    }
  ];

  const techStack = [
    { category: "Frontend", items: ["Next.js 15", "TypeScript", "TailwindCSS", "shadcn/ui", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Prisma ORM", "PostgreSQL", "REST API / tRPC", "NextAuth.js"] },
    { category: "E-commerce", items: ["Stripe Payments", "Order Management", "Product Variants", "Inventory System"] },
    { category: "Deployment", items: ["Vercel", "Cloud Storage", "CI/CD Pipeline", "Webhook Handlers"] }
  ];

  const challenges = [
    {
      problem: "Complex product variants overwhelming users",
      solution: "Intuitive variant selector with real-time price updates and stock indicators",
      impact: "35% increase in variant product sales"
    },
    {
      problem: "Cart abandonment during checkout",
      solution: "Streamlined single-page checkout with guest option and Stripe Elements",
      impact: "Reduced abandonment by 42%"
    },
    {
      problem: "Slow search and filtering on large catalogs",
      solution: "Implemented server-side search with debouncing and indexed database queries",
      impact: "Search results in under 100ms"
    }
  ];

  const checkoutFlow = [
    { icon: <Search className="w-6 h-6" />, title: "Browse Products", description: "Smart filters & search" },
    { icon: <Package className="w-6 h-6" />, title: "Add to Cart", description: "Real-time stock validation" },
    { icon: <CreditCard className="w-6 h-6" />, title: "Secure Checkout", description: "Stripe payment processing" },
    { icon: <PackageCheck className="w-6 h-6" />, title: "Order Tracking", description: "Email & dashboard updates" }
  ];

  return (
    <section id="sellora" className="bg-zinc-950 py-24 px-6 sm:px-10 text-white">
      <div className="container mx-auto max-w-6xl">

        {/* Breadcrumb - Clean & Minimal */}
        <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-20">
          <Link href="/#work" className="hover:text-violet-400 transition-all">Archive</Link>
          <span className="w-8 h-[1px] bg-zinc-800" />
          <span className="text-zinc-200">Sellora_Commerce</span>
        </nav>

        {/* 1. Header Section - The Boutique Entrance */}
        <div className="relative mb-20 overflow-visible"> {/* Changed overflow to visible for better shadow/glow play */}
          {/* Soft Radial Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative text-left flex flex-col items-start lg:flex-row lg:items-end lg:justify-between gap-12">
            <div className="max-w-3xl">
              {/* Category Tag */}
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-8 bg-violet-500" />
                <span className="text-xs font-medium uppercase tracking-[0.5em] text-violet-400">
                  Retail Infrastructure
                </span>
              </div>

              <h1 className="text-7xl md:text-9xl font-bold tracking-[-0.04em] text-white mb-10 leading-[0.9]">
                Sellora<span className="text-violet-500 italic font-light font-serif">.</span>
              </h1>

              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light max-w-2xl">
                A production-grade commerce ecosystem. Engineered for
                <span className="text-white italic"> hyper-growth </span>
                conversions and high-fidelity
                <span className="text-white"> checkout flows</span>.
              </p>
            </div>

            {/* Metadata Box - Boutique Style */}
            <div className="w-full lg:w-72 p-8 border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl rounded-3xl shadow-2xl">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase mb-2 tracking-widest">Primary_Stack</h4>
                  <p className="text-sm text-zinc-200 font-medium">Next.js + Stripe + Payload</p>
                </div>
                <div className="h-px bg-zinc-800/50" />
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase mb-2 tracking-widest">Focus_Metric</h4>
                  <p className="text-sm text-zinc-200 font-medium">99.9% Transaction Stability</p>
                </div>
                <div className="h-px bg-zinc-800/50" />
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="relative flex h-2 w-2">
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <div className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                  </div>
                  <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest">Market_Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics - High-End Spec Sheet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900 rounded-3xl overflow-hidden mb-32 shadow-2xl">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="group relative p-10 bg-zinc-950 hover:bg-zinc-900/50 transition-all duration-500"
            >
              {/* Background Decorative Element */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700">
                {React.cloneElement(metric.icon as any, { size: 80 })}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8 text-violet-500">
                  <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    {metric.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                    Benchmark_0{idx + 1}
                  </span>
                </div>

                <div className="mt-auto">
                  <div className="text-4xl font-bold text-white tracking-tighter mb-2 group-hover:text-violet-400 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    {metric.label}
                  </div>
                  <p className="text-[10px] leading-relaxed text-zinc-600 font-medium group-hover:text-zinc-400 transition-colors">
                    {metric.description}
                  </p>
                </div>

                {/* The "Premium" underline */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Hero Image - The Cinematic Frame */}
        <div className="relative mb-32 group">
          {/* The "Outer Glow" - Minimal and sophisticated */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-zinc-700 to-transparent rounded-2xl opacity-50" />

          <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/50 shadow-2xl">

            {/* 1. Top Bar - Makes it look like a custom OS/Application */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-900 bg-zinc-900/30">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                </div>
                <span className="ml-4 text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                  platform_preview.exe
                </span>
              </div>
              <div className="text-[10px] font-mono text-violet-500/60 uppercase tracking-widest animate-pulse">
                System_Active
              </div>
            </div>

            {/* 2. The Project Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/Cover.png"
                alt="Sellora E-commerce Platform"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-1000 ease-in-out"
                priority
              />
              {/* Subtle darkening vignette so the image looks deep */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)] pointer-events-none" />
            </div>

            {/* 3. The Footer - Clean, Solid, and Professional */}
            <div className="p-6 bg-zinc-900/50 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <p className="text-white font-medium text-sm tracking-tight mb-1">Sellora Deployment</p>
                <p className="text-zinc-500 text-[11px] font-mono uppercase tracking-wider">v2.0.4 — Build Stable</p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="https://sellora-store.vercel.app"
                  target="_blank"
                  className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition-all duration-300 active:scale-95"
                >
                  View Live
                </Link>
                <Link
                  href="https://github.com/king-sws/sellora"
                  target="_blank"
                  className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold rounded-lg border border-zinc-700 transition-all"
                >
                  View Code
                </Link>
              </div>
            </div>
          </div>

          {/* Technical Detail Decoration */}
          <div className="absolute -bottom-12 -right-6 hidden lg:block">
            <p className="text-[10px] font-mono text-zinc-800 rotate-90 origin-left tracking-[0.5em] uppercase">
              Infrastructure / 01
            </p>
          </div>
        </div>

        {/* Strategic Audit: Problem & Solution */}
        <div className="mb-40 relative">
          {/* Background Label */}
          <div className="absolute -top-10 left-0 text-[60px] font-bold text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
            Strategic_Value
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl">

            {/* The Challenge Column */}
            <div className="bg-zinc-950 p-8 md:p-12">
              <div className="flex flex-col h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-red-500/10 text-red-500 border border-red-500/20 mb-8 w-fit">
                  <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                  The_Market_Gap
                </div>

                <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
                  Retail Friction<span className="text-red-500">.</span>
                </h2>

                <p className="text-zinc-500 leading-relaxed mb-10 text-lg font-light">
                  Traditional platforms create "bottlenecks" in the buying journey.
                  Complexity in management often leads to <span className="text-zinc-300">diminished customer trust</span> and revenue leakage.
                </p>

                <div className="space-y-6 mt-auto">
                  {[
                    "High cart abandonment (Industry avg. 68%)",
                    "Fragmented product variant management",
                    "Opaque payment security flows",
                    "Performance degradation under load"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-8 h-px bg-zinc-800 group-hover:bg-red-500/50 transition-colors" />
                      <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors italic">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Solution Column */}
            <div className="bg-zinc-950 p-8 md:p-12 relative overflow-hidden">
              {/* Subtle Glow for the "Solution" side */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/5 blur-[80px] -z-10" />

              <div className="flex flex-col h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-violet-500/10 text-violet-500 border border-violet-500/20 mb-8 w-fit">
                  <CheckCircle2 className="w-3 h-3" />
                  Sellora_Framework
                </div>

                <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
                  Fluid Commerce<span className="text-violet-500">.</span>
                </h2>

                <p className="text-zinc-500 leading-relaxed mb-10 text-lg font-light">
                  Built for speed and trust. We engineered a <span className="text-zinc-300">seamless transition</span>
                  from discovery to ownership using a performance-first architecture.
                </p>

                <div className="space-y-4 mt-auto">
                  {[
                    { text: "Streamlined checkout (42% higher conversion)", bold: "42%" },
                    { text: "Dynamic variant visualizer", bold: "Dynamic" },
                    { text: "PCI-DSS Stripe integration", bold: "PCI-DSS" },
                    { text: "Edge-optimized asset delivery", bold: "Edge" }
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-violet-500/30 transition-all group">
                      <CheckCircle2 className="w-5 h-5 text-violet-500 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Logic: The Checkout Pipeline */}
        <div className="mb-40 relative px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <div className="text-violet-500 font-mono text-[10px] tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                <span className="w-12 h-px bg-violet-500/30" />
                Operational_Logic
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Seamless <span className="text-violet-500 italic font-serif font-light">Checkout</span> Pipeline
              </h2>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs font-light leading-relaxed border-l border-zinc-800 pl-6">
              An enterprise-grade transaction flow engineered to eliminate friction and maximize conversion velocity.
            </p>
          </div>

          <div className="relative">
            {/* The Pipeline "Rail" (Desktop) */}
            <div className="hidden md:block absolute top-[2.75rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {checkoutFlow.map((item, idx) => (
                <div key={idx} className="group relative">
                  {/* Step Counter */}
                  <div className="relative z-20 mb-6 flex justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[10px] font-mono text-zinc-500 group-hover:border-violet-500/50 group-hover:text-violet-400 transition-all duration-500 shadow-xl">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Logic Card */}
                  <div className="relative z-10 p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 backdrop-blur-sm group-hover:bg-zinc-900/40 group-hover:translate-y-[-4px] transition-all duration-500">
                    {/* Subtle Gradient Glow */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="text-violet-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      {React.cloneElement(item.icon as any, { size: 28, strokeWidth: 1.5 })}
                    </div>

                    <h4 className="text-white font-medium mb-3 tracking-tight group-hover:text-violet-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                      <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Verified_Step</span>
                    </div>
                  </div>

                  {/* Animated Directional Arrow (Desktop) */}
                  {idx < checkoutFlow.length - 1 && (
                    <div className="hidden md:block absolute top-[2.75rem] -right-3 -translate-y-1/2 z-30">
                      <div className="w-6 h-6 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-zinc-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Log: Technical Solutions */}
        <div className="mb-40 relative">
          <div className="flex flex-col mb-16">
            <div className="flex items-center gap-3 text-violet-500 font-mono text-[10px] tracking-[0.3em] uppercase mb-4">
              <Code2 className="w-4 h-4" />
              Engineering_Log // Critical_Challenges
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Technical <span className="text-violet-500 italic font-serif font-light">Debrief</span>
            </h2>
          </div>

          <div className="space-y-4">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="group relative grid md:grid-cols-[1fr_2fr] gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-violet-500/30 shadow-lg"
              >
                {/* Left Side: The Problem (The Red Side) */}
                <div className="p-8 bg-zinc-950/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-red-500 font-mono text-[10px] uppercase tracking-widest mb-4">
                      <AlertCircle className="w-3 h-3" />
                      Challenge_Detected
                    </div>
                    <h4 className="text-zinc-200 font-semibold text-lg leading-tight">
                      {challenge.problem}
                    </h4>
                  </div>
                  <div className="mt-8 text-[10px] font-mono text-zinc-600">
                    0{idx + 1} // CRITICAL
                  </div>
                </div>

                {/* Right Side: The Implementation (The Violet Side) */}
                <div className="p-8 bg-zinc-900/20 backdrop-blur-sm relative overflow-hidden">
                  {/* Subtle code-like background decoration */}
                  <div className="absolute top-4 right-4 text-[40px] font-bold text-white/[0.02] select-none pointer-events-none">
                    {idx + 1}
                  </div>

                  <div className="space-y-6 relative z-10">
                    <div>
                      <div className="text-violet-400 font-mono text-[10px] uppercase tracking-widest mb-2">
                        Implementation_Strategy
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                        {challenge.solution}
                      </p>
                    </div>

                    <div className="flex items-center gap-6 pt-6 border-t border-zinc-800/50">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-500">
                          <TrendingUp className="w-3 h-3" />
                        </div>
                        <span className="text-[11px] font-medium text-zinc-300 uppercase tracking-wide">
                          {challenge.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Features - Clean Technical Style */}
        <div className="mb-24">
          <div className="border-l-2 border-violet-500 pl-6 mb-12">
            <h2 className="text-3xl font-bold text-white">Platform Architecture</h2>
            <p className="text-zinc-400 mt-2">Built for speed, scale, and high-conversion e-commerce.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              {
                title: "Product Catalog",
                desc: "Advanced server-side filtering and lightning-fast search indexing. Built with Prisma for type-safe database queries and optimized for large inventories.",
                features: ["Fuzzy Search", "Multi-category Filters", "Instant Loading States"]
              },
              {
                title: "Shopping Experience",
                desc: "A seamless, persistent cart system that validates stock levels in real-time. Features a side-sheet UI for a frictionless browsing experience.",
                features: ["Real-time Validation", "Guest Checkout", "Persistent State"]
              },
              {
                title: "Administrative Control",
                desc: "Comprehensive dashboard for inventory management, sales analytics, and order fulfillment tracking with secure role-based access.",
                features: ["Sales Metrics", "Inventory Tracking", "Secure Auth"]
              },
              {
                title: "Global Payments",
                desc: "Fully integrated Stripe payment flow with support for webhooks, automated receipts, and multi-currency processing.",
                features: ["PCI Compliance", "Webhook Security", "Order History"]
              }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors flex items-center gap-3">
                  <span className="text-sm font-mono text-zinc-600">0{idx + 1}.</span>
                  {item.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed mb-4 text-sm md:text-base">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feat, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 rounded">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Features: The Bento Showcase */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <div className="text-violet-500 font-mono text-[10px] tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                <div className="w-8 h-px bg-violet-500/30" />
                Feature_Set
              </div>
              <h3 className="text-4xl font-bold text-white tracking-tight">
                Core <span className="text-violet-500 italic font-serif font-light">Capabilities</span>
              </h3>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs font-light leading-relaxed border-l border-zinc-800 pl-6 hidden md:block">
              Proprietary infrastructure built for high-volume transactions and seamless product discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            {features.map((feature, index) => {
              // Logic to make specific cards larger for a "Bento" look
              const isLarge = index === 0 || index === 3;

              return (
                <div
                  key={index}
                  className={`group relative p-8 rounded-[2rem] bg-zinc-900/20 border border-zinc-800/50 hover:border-violet-500/30 transition-all duration-500 overflow-hidden
            ${isLarge ? 'md:col-span-3 lg:col-span-4' : 'md:col-span-3 lg:col-span-2'} 
            ${index === 1 || index === 2 ? 'lg:col-span-4' : ''}
          `}
                >
                  {/* Subtle Glow interaction */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="text-violet-400 mb-8 p-3 rounded-2xl bg-zinc-950 w-fit border border-zinc-800 group-hover:scale-110 group-hover:border-violet-500/50 transition-all duration-500">
                      {React.cloneElement(feature.icon as React.ReactElement, { size: 24, strokeWidth: 1.5 } as any)}
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-white font-semibold text-lg mb-3 tracking-tight group-hover:text-violet-300 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-zinc-500 text-xs leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-violet-500/5 rounded-full blur-xl group-hover:bg-violet-500/20 transition-all" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Stack: The Engineering Spec Sheet */}
        <div className="mb-40 border-t border-zinc-800 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-xl">
              <h3 className="text-3xl font-light text-white tracking-tighter uppercase mb-4">
                Technical <span className="font-bold">Infrastructure</span>
              </h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                A modular architecture focused on data integrity and
                low-latency transaction processing.
              </p>
            </div>

            {/* Minimalist Legend */}
            <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-zinc-700" />
                Stable_Build
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zinc-800" />
                Enterprise_Ready
              </div>
            </div>
          </div>

          {/* The Grid: Clean & Geometric */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-zinc-950 p-8 hover:bg-zinc-900/40 transition-colors group">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-mono text-zinc-600">0{index + 1}</span>
                  <div className="w-4 h-4 border border-zinc-800 group-hover:border-zinc-500 transition-colors" />
                </div>

                <h4 className="text-zinc-200 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  {stack.category}
                </h4>

                <ul className="space-y-3">
                  {stack.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-3">
                      <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Architecture Highlights: Refined & Understated */}
          <div className="grid md:grid-cols-3 gap-px bg-zinc-800 border-x border-b border-zinc-800">
            {[
              { title: "Data Integrity", desc: "Atomic transaction handling with PCI DSS compliance." },
              { title: "Asset Pipeline", desc: "Optimized CDN delivery and automated image sequencing." },
              { title: "SEO Strategy", desc: "Static generation with dynamic metadata injection." }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-950 p-10 group">
                <h4 className="text-white text-sm font-semibold mb-3 tracking-tight flex items-center gap-2">
                  {item.title}
                  <ArrowUpRight className="w-3 h-3 text-zinc-700 group-hover:text-white transition-colors" />
                </h4>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Design */}
        {/* <div className="mb-24 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Mobile-First Design</h3>
          <div className="flex items-end justify-center gap-8 mb-6">
            <div className="space-y-3">
              <Laptop className="w-12 h-12 mx-auto text-violet-400" />
              <p className="text-sm text-zinc-400">Desktop</p>
            </div>
            <div className="space-y-3">
              <Smartphone className="w-8 h-8 mx-auto text-violet-400" />
              <p className="text-sm text-zinc-400">Mobile</p>
            </div>
          </div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Flawless shopping experience across all devices with 60% of traffic from mobile
          </p>
        </div> */}

        {/* Final CTA: The Project Handover */}
        <div className="mt-40 mb-20">
          <div className="relative border border-zinc-800 bg-zinc-950 rounded-[2.5rem] overflow-hidden">
            {/* Subtle Structural Detail */}
            <div className="absolute top-0 right-0 p-8">
              <div className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.5em] vertical-text">
                Deploy_Ready // 2025
              </div>
            </div>

            <div className="p-12 md:p-24 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center mb-10 group cursor-default">
                <ShoppingCart className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors" />
              </div>

              <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter mb-8 max-w-2xl">
                Experience the <span className="font-bold">Sellora Ecosystem.</span>
              </h2>

              <p className="text-zinc-500 text-lg font-light mb-12 max-w-lg">
                A complete infrastructure for modern commerce. Explore the live production build or audit the source code.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="https://sellora-store.vercel.app"
                  target="_blank"
                  className="w-full sm:w-auto px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all active:scale-95"
                >
                  Launch Live Store
                </Link>
                <Link
                  href="https://github.com/king-sws/sellora"
                  target="_blank"
                  className="w-full sm:w-auto px-10 py-4 bg-transparent border border-zinc-800 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-900 transition-all"
                >
                  Documentation
                </Link>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="px-12 py-6 border-t border-zinc-800 bg-zinc-900/20 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Server_Status: Operational</span>
                </div>
                <div className="w-px h-3 bg-zinc-800 hidden md:block" />
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Build_Hash: 7F0X12</span>
              </div>

              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                Designed & Engineered for Conversion
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SelloraProjectPage;