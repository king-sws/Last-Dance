"use client"
import { useState, useEffect, useCallback } from "react";
import { BREAKPOINTS, SCROLL_CONFIG, throttle } from "@/constant";
import Logo from "@/cards/Logo";
import MenuToggle from "@/cards/MenuToggle";
import Navbar from "@/cards/NavBar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_CONFIG.THRESHOLD);
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, SCROLL_CONFIG.THROTTLE_TIME);
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  const closeMenu = useCallback(() => setNavOpen(false), []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= BREAKPOINTS.DESKTOP && navOpen) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navOpen, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-8 ${scrolled ? "pt-4" : "pt-0"}`}>
      <div className={`container mx-auto flex justify-between items-center transition-all duration-500 ${
        scrolled 
          ? "h-16 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/50 rounded-full px-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
          : "h-24 bg-transparent border-b border-transparent px-4"
      }`}>
        <div className={`transition-transform duration-500 ${scrolled ? "scale-90" : "scale-100"}`}>
          <Logo />
        </div>

        <div className="flex items-center gap-8">
          <Navbar navOpen={navOpen} onLinkClick={closeMenu} />
          
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Available_For_Hire</span>
          </div>

          <MenuToggle navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>
      </div>

      <div 
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffe1c1] to-transparent transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none"
        style={{ 
          width: scrolled ? 'calc(100% - 3rem)' : '0%', 
          opacity: scrolled ? 0.5 : 0,
          left: '1.5rem',
          transformOrigin: 'left',
        }}
      />
    </header>
  );
};

export default Header;