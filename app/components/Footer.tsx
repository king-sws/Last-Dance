'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleRight, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCodepen } from "react-icons/fa";

// Define types for our navigation items
interface NavItem {
  label: string;
  href: string;
}

interface SocialItem extends NavItem {
  icon: React.ReactNode;
}

const Footer: React.FC = () => {
  // Memoize static data
  const sitemap: NavItem[] = React.useMemo(() => [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact me', href: '#contact' }
  ], []);
 
  const socials: SocialItem[] = React.useMemo(() => [
    {
      label: 'GitHub',
      href: 'https://www.github.com/king-sws',
      icon: <FaGithub className="text-lg" />
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/oussama-boufi',
      icon: <FaLinkedin className="text-lg" />
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/codewithsadee_',
      icon: <FaTwitter className="text-lg" />
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/oussama-boufi',
      icon: <FaInstagram className="text-lg" />
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/oussama-boufi',
      icon: <FaCodepen className="text-lg" />
    }
  ], []);
  
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);
  
  return (
    <footer className="bg-zinc-900 pt-16 pb-6 mt-20 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="lg:grid lg:grid-cols-2 gap-10">
          {/* CTA Section */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-2xl font-bold headline-2 mb-6 lg:max-w-xs">Let&apos;s work together today!</h2>
            <p className="text-zinc-400 mb-8 max-w-md">Have a project in mind? Let&apos;s collaborate and bring your ideas to life with creative solutions.</p>
            <Link 
              href="mailto:oboufi88@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 btn-secondary border border-cyan-500 font-medium rounded-lg transition-transform duration-300 hover:translate-y-1"
            >
              Start project <FaAngleRight />
            </Link>
          </div>
          
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-10">
            {/* Sitemap */}
            <nav aria-label="Footer navigation">
              <p className="text-white font-medium mb-4 uppercase text-sm tracking-wider">Sitemap</p>
              <ul className="space-y-2">
                {sitemap.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href} 
                      className="text-zinc-400 hover:text-cyan-500 transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">&#9656;</span> {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Social Links */}
            <div>
              <p className="text-white font-medium mb-4 uppercase text-sm tracking-wider">Socials</p>
              <ul className="space-y-2">
                {socials.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-zinc-400 hover:text-cyan-500 transition-colors duration-300 flex items-center gap-2"
                    >
                      {item.icon} <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-zinc-800 my-7"></div>
        
        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="mb-4 sm:mb-0" aria-label="Go to homepage">
            <Image 
              src="/logo.svg" 
              alt="Oussama Logo" 
              width={40} 
              height={40} 
              className="hover:opacity-80 transition-opacity"
              priority={false}
            />
          </Link>
          
          {/* Copyright */}
          <p className="text-sm text-zinc-500">
            &copy; {currentYear} <span className="text-zinc-300">Oussama Boufi</span> • All Rights Reserved
          </p>
          
          {/* Back to top */}
          <Link 
            href="#top" 
            className="hidden sm:flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm mt-4 sm:mt-0"
            aria-label="Back to top"
          >
            Back to top <span className="text-xl">↑</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;