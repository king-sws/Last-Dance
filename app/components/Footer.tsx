'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCodepen } from "react-icons/fa";
import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";

interface NavItem {
  label: string;
  href: string;
}

interface SocialItem extends NavItem {
  icon: React.ReactNode;
}

const Footer: React.FC = () => {
  const sitemap: NavItem[] = React.useMemo(() => [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' }
  ], []);
 
  const socials: SocialItem[] = React.useMemo(() => [
    { label: 'GitHub', href: 'https://www.github.com/king-sws', icon: <FaGithub /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oussama-boufi', icon: <FaLinkedin /> },
    { label: 'Instagram', href: 'https://www.instagram.com/oussama-boufi', icon: <FaInstagram /> },
    { label: 'CodePen', href: 'https://codepen.io/oussama-boufi', icon: <FaCodepen /> }
  ], []);
  
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);
  
  return (
    <footer className="bg-zinc-950 pt-24 px-6 sm:px-10 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand & CTA - 5 Cols */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="inline-block grayscale brightness-200">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            </Link>
            
            <h2 className="text-4xl font-bold text-white tracking-tighter leading-tight">
              Ready to deploy your <br />
              <span className="italic font-serif font-light text-[#ffe1c1]">next big idea?</span>
            </h2>

            <Link 
              href="mailto:oboufi88@gmail.com"
              className="group inline-flex items-center gap-4 bg-[#ffe1c1] text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105"
            >
              Start_Project <FiArrowUpRight className="text-lg group-hover:rotate-45 transition-transform" />
            </Link>
          </div>

          {/* Spacer - 1 Col */}
          <div className="hidden md:block md:col-span-1" />

          {/* Sitemap - 3 Cols */}
          <div className="md:col-span-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-8">Navigation_System</p>
            <ul className="space-y-4">
              {sitemap.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-0 h-[1px] bg-[#ffe1c1] group-hover:w-4 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials - 3 Cols */}
          <div className="md:col-span-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-8">External_Nodes</p>
            <ul className="space-y-4">
              {socials.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    target="_blank"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-3 text-sm group"
                  >
                    <span className="text-zinc-600 group-hover:text-[#ffe1c1] transition-colors">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
            <span>&copy; {currentYear} Oussama_Boufi</span>
            <span className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full" />
            <span className="hidden md:block text-zinc-800">Status: Fully_Functional</span>
          </div>
          
          <Link 
            href="#home" 
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-[10px] font-mono uppercase tracking-widest"
          >
            Back_To_Top 
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-white transition-colors">
              <FiArrowUp />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;