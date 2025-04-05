// components/Header.tsx
"use client"
import { useState, useEffect, useCallback } from "react";
import { throttle } from "../helpers";
import { BREAKPOINTS, SCROLL_CONFIG, TRANSITION_CLASSES } from "@/constant";


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

  const handleResize = useCallback(() => {
    if (window.innerWidth >= BREAKPOINTS.DESKTOP && navOpen) closeMenu();
  }, [navOpen, closeMenu]);

  useEffect(() => {
    window.addEventListener('resize', throttle(handleResize, 100));
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${TRANSITION_CLASSES} ${
      scrolled ? "bg-zinc-900/95 backdrop-blur-md shadow-xl" : "bg-transparent"
    }`}>
      <div className="container flex justify-between items-center h-20">
        <Logo />
        <Navbar navOpen={navOpen} onLinkClick={closeMenu} />
        <MenuToggle navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </header>
  );
};

export default Header;