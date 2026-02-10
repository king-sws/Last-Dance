"use client"
import { memo, forwardRef, useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/constant";

const Navbar = memo(({ navOpen, onLinkClick, scrolled }: any) => {
  const [activeLink, setActiveLink] = useState('#home');
  const activeBoxRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const updateActiveBox = useCallback((target: HTMLElement | null) => {
    if (!activeBoxRef.current || !target || window.innerWidth < 768) return;
    const { offsetLeft, offsetWidth } = target;
    
    // Desktop: Sleek 2px bottom bar instead of a box shadow
    activeBoxRef.current.style.opacity = "1";
    activeBoxRef.current.style.transform = `translateX(${offsetLeft}px)`;
    activeBoxRef.current.style.width = `${offsetWidth}px`;
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent, link: string) => {
    onLinkClick();
    setActiveLink(link);
    const element = document.querySelector(link);
    if (element) {
      const offset = 100;
      window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - offset, behavior: "smooth" });
    }
  }, [onLinkClick]);

  useEffect(() => {
    const activeElement = navRef.current?.querySelector(`[href="${activeLink}"]`) as HTMLElement;
    if (activeElement) updateActiveBox(activeElement);
  }, [activeLink, updateActiveBox, scrolled]);

  return (
    <nav 
      ref={navRef}
      className={`
        fixed top-24 left-4 right-4 p-4 bg-zinc-950/95 border border-zinc-900 rounded-xl transition-all duration-500
        md:relative md:top-0 md:left-0 md:right-0 md:p-0 md:bg-transparent md:border-0 md:flex md:opacity-100 md:pointer-events-auto
        ${navOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none md:translate-y-0'}
      `}
    >
      <div className="flex flex-col md:flex-row gap-1 relative">
        {NAV_ITEMS.map((item, index) => (
          <NavItem 
            key={item.link} 
            {...item} 
            index={index}
            isActive={activeLink === item.link} 
            onClick={handleNavClick} 
          />
        ))}
        <ActiveIndicator ref={activeBoxRef} />
      </div>
    </nav>
  );
});

const NavItem = memo(({ label, link, index, isActive, onClick }: any) => (
  <Link 
    href={link} 
    onClick={(e) => onClick(e, link)} 
    className={`
      relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 z-10 flex items-center gap-3
      ${isActive ? 'text-[#ffe1c1]' : 'text-zinc-500 hover:text-zinc-200'}
    `}
  >
    <span className="font-mono text-[8px] text-[#ffe1c1] md:hidden">[{index + 1}]</span>
    {label}
  </Link>
));

const ActiveIndicator = memo(forwardRef<HTMLDivElement>((_, ref) => (
  <div 
    ref={ref} 
    className="absolute hidden md:block bottom-[-4px] h-[1px] bg-[#ffe1c1] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" 
  />
)));

Navbar.displayName = "Navbar";
export default Navbar;