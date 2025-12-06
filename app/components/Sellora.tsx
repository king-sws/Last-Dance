'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ShoppingCart, CreditCard, BarChart, ShieldCheck, Server, Globe } from 'lucide-react';

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
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "User Accounts & Roles",
      description: "Role-based admin access, secure authentication, and profile management."
    }
  ];

  const techStack = [
    { category: "Frontend", items: ["Next.js 14", "TypeScript", "TailwindCSS", "shadcn/ui", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Prisma ORM", "PostgreSQL", "REST API / TRPC", "NextAuth.js"] },
    { category: "E-commerce", items: ["Stripe Payments", "Order Management", "Product Variants", "Inventory System"] },
    { category: "Deployment", items: ["Vercel", "Cloud Storage", "CI/CD Pipeline"] }
  ];

  return (
    <section id="sellora" className="bg-zinc-950 py-24 px-6 sm:px-10 text-white">
      <div className="container mx-auto max-w-6xl">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-900/20 text-violet-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Professional Project
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sellora
            <span className="text-violet-400 ml-2">E-commerce Platform</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A complete, scalable e-commerce platform designed for performance, security, 
            and seamless shopping experiences. Built with modern web technologies.
          </p>
        </div>

        {/* Main Preview */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-800 mb-16 group">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Image
            src="/Cover.png"
            alt="Sellora E-commerce Platform"
            width={1200}
            height={800}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Key Features</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-violet-500/50 transition-colors duration-300">
                <div className="text-violet-400 mb-3">
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
              <Server className="w-5 h-5 text-violet-400" />
              Project Overview
            </h3>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Sellora is a high-performance e-commerce platform tailored for real business needs.
                It supports a complete product management system, secure checkout flow, customer accounts,
                and an advanced analytics dashboard.
              </p>
              <p>
                The platform is optimized for conversion, performance, and SEO to deliver a smooth shopping
                experience across all devices. Built using modern, scalable architecture.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-violet-900/30 text-violet-400 rounded-full text-xs">E-commerce</span>
                <span className="px-3 py-1 bg-violet-900/30 text-violet-400 rounded-full text-xs">Professional</span>
                <span className="px-3 py-1 bg-violet-900/30 text-violet-400 rounded-full text-xs">Secure</span>
                <span className="px-3 py-1 bg-violet-900/30 text-violet-400 rounded-full text-xs">Scalable</span>
              </div>
            </div>
          </div>

          {/* Technical Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-violet-400" />
              Technical Implementation
            </h3>
            <div className="space-y-6">
              {techStack.map((stack, index) => (
                <div key={index}>
                  <h4 className="text-violet-400 font-semibold mb-3">{stack.category}</h4>
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

        {/* Animated Lightning Divider */}
        

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 p-8">
            <Link
              href="https://sellora-store.vercel.app"
              target="_blank"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition-colors duration-200 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:shadow-violet-500/25"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
            <Link
              href="https://github.com/king-sws/sellora"
              target="_blank"
              className="inline-flex items-center gap-2 border border-violet-600 hover:bg-violet-600 hover:text-white transition-colors duration-200 text-violet-400 px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:shadow-violet-500/25"
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

export default SelloraProjectPage;