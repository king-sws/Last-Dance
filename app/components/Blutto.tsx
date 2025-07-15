'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Users, Calendar, Shield, Zap, Database, Globe } from 'lucide-react';

const BluttonProjectPage = () => {
  const features = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team Collaboration",
      description: "Real-time task management with role-based permissions"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Project Management",
      description: "Kanban boards, calendar views, and task filtering"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enterprise Security",
      description: "JWT authentication with Google/GitHub integration"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "High Performance",
      description: "Optimized for speed with modern React architecture"
    }
  ];

  const techStack = [
    { category: "Frontend", items: ["Next.js 14", "TypeScript", "TailwindCSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Prisma ORM", "PostgreSQL", "NextAuth.js"] },
    { category: "Integration", items: ["Stripe API", "Clerk Auth", "Vercel", "shadcn/ui"] }
  ];



  return (
    <section id="blutto" className="bg-zinc-950 py-24 px-6 sm:px-10 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-900/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Featured Project
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blutto
            <span className="text-cyan-400 ml-2">SaaS Platform</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            An enterprise-grade management platform built for speed, collaboration, and scalability.
            Designed with security and modern SaaS UI/UX principles in mind.
          </p>
        </div>

        {/* Main Preview */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-800 mb-16 group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Image
            src="/image.jpg"
            alt="Blutto SaaS Platform Dashboard Interface"
            width={1200}
            height={800}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute  bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>



        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Key Features</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-cyan-500/50 transition-colors duration-300">
                <div className="text-cyan-400 mb-3">
                  {feature.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Database className="w-5 h-5 text-cyan-400" />
              Project Overview
            </h3>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Blutto is a comprehensive SaaS web application featuring role-based permissions, 
                real-time task collaboration, and board-style project management. Built with 
                enterprise-grade security and modern UI/UX principles.
              </p>
              <p>
                The platform includes workspace creation, Kanban board management, calendar views, 
                advanced task filtering, team chat functionality, and integrated Stripe billing 
                for subscription management.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-xs">SaaS</span>
                <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-xs">Enterprise</span>
                <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-xs">Real-time</span>
                <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-xs">Secure</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              Technical Implementation
            </h3>
            <div className="space-y-6">
              {techStack.map((stack, index) => (
                <div key={index}>
                  <h4 className="text-cyan-400 font-semibold mb-3">{stack.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex} 
                        className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm border border-zinc-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 p-8 ">
            <Link
              href="https://blutto.vercel.app"
              target="_blank"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 transition-colors duration-200 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:shadow-cyan-500/25"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
            <Link
              href="https://github.com/king-sws/blutto"
              target="_blank"
              className="inline-flex items-center gap-2 border border-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors duration-200 text-cyan-400 px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:shadow-cyan-500/25"
            >
              <Github className="w-4 h-4" />
              View Source
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BluttonProjectPage;