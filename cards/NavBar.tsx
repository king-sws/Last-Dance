"use client"
import { memo, forwardRef, useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { NAV_ITEMS, throttle } from "@/constant";

interface NavbarProps {
  navOpen: boolean;
  onLinkClick: () => void;
}

const Navbar = memo(({ navOpen, onLinkClick }: NavbarProps) => {
  const [activeLink, setActiveLink] = useState('#home');
  const activeBoxRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const updateActiveBox = useCallback((target: HTMLElement | null) => {
    if (!activeBoxRef.current || !target) return;
    
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = target;
    activeBoxRef.current.style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
    activeBoxRef.current.style.width = `${offsetWidth}px`;
    activeBoxRef.current.style.height = `${offsetHeight}px`;
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent, link: string) => {
    e.preventDefault();
    onLinkClick();
    setActiveLink(link);
    updateActiveBox(e.currentTarget as HTMLElement);
    document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' });
  }, [onLinkClick, updateActiveBox]);

  useEffect(() => {
    const activeElement = navRef.current?.querySelector(`[href="${activeLink}"]`);
    const handleResize = () => updateActiveBox(activeElement as HTMLElement);
    
    const ro = new ResizeObserver(throttle(handleResize, 100));
    if (activeElement) ro.observe(activeElement);
    
    updateActiveBox(activeElement as HTMLElement);
    return () => ro.disconnect();
  }, [activeLink, updateActiveBox]);

  return (
    <nav 
      ref={navRef}
      className={`fixed md:static top-20 left-0 w-full md:w-auto bg-zinc-900 md:bg-transparent transition-transform duration-300 ${
        navOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
      aria-label="Main navigation"
    >
      <div className="container md:block py-4 md:py-0">
        <div className="relative flex flex-col text-sm md:flex-row gap-6 md:gap-8">
          {NAV_ITEMS.map((item) => (
            <NavItem 
              key={item.link}
              {...item}
              isActive={activeLink === item.link}
              onClick={handleNavClick}
            />
          ))}
          <ActiveIndicator ref={activeBoxRef} />
        </div>
      </div>
    </nav>
  );
});

interface NavItemProps {
  label: string;
  link: string;
  className?: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent, link: string) => void;
}

// eslint-disable-next-line react/display-name
const NavItem = memo(({ 
  label, 
  link, 
  className = '', 
  isActive, 
  onClick 
}: NavItemProps) => (
  <Link
    href={link}
    onClick={(e) => onClick(e, link)}
    className={`relative px-4 py-2 text-zinc-300 hover:text-cyan-400 transition-colors ${
      isActive ? 'text-cyan-400' : ''
    } ${className}`}
    scroll={false}
    aria-current={isActive ? 'page' : undefined}
  >
    {label}
  </Link>
));

const ActiveIndicator = memo(forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="absolute hidden md:block bg-cyan-400/10 rounded-lg transition-all duration-300 ease-out"
    aria-hidden="true"
  />
)));

Navbar.displayName = "Navbar";
export default Navbar;