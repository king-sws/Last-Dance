/* eslint-disable react/display-name */
"use client"
import { memo, forwardRef, useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { NAV_ITEMS, BREAKPOINTS } from "@/constant";
import { ChevronDown } from "lucide-react";

const Navbar = memo(({ navOpen, onLinkClick, scrolled }: any) => {
  const [activeLink, setActiveLink] = useState('#home');
  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const activeBoxRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const updateActiveBox = useCallback((target: HTMLElement | null) => {
    if (!activeBoxRef.current || !target || window.innerWidth < BREAKPOINTS.DESKTOP) return;
    const { offsetLeft, offsetWidth } = target;
    activeBoxRef.current.style.opacity = "1";
    activeBoxRef.current.style.transform = `translateX(${offsetLeft}px)`;
    activeBoxRef.current.style.width = `${offsetWidth}px`;
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent, link: string) => {
    onLinkClick();
    setActiveLink(link);
    setExpandedMobile(null);
    setHoveredDropdown(null);
    const element = document.querySelector(link);
    if (element) {
      const offset = 100;
      window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - offset, behavior: "smooth" });
    }
  }, [onLinkClick]);

  const handleDropdownEnter = useCallback((index: number) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setHoveredDropdown(index);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setHoveredDropdown(null), 150);
  }, []);

  const handleMobileToggle = useCallback((index: number) => {
    setExpandedMobile(prev => prev === index ? null : index);
  }, []);

  useEffect(() => {
    const activeElement = navRef.current?.querySelector(`[href="${activeLink}"]`) as HTMLElement;
    if (activeElement) updateActiveBox(activeElement);
  }, [activeLink, updateActiveBox, scrolled]);

  return (
    <nav
      ref={navRef}
      className={`
        fixed top-24 left-4 right-4 p-4 bg-zinc-950/95 border border-zinc-900 rounded-xl transition-all duration-500 z-50
        lg:relative lg:top-0 lg:left-0 lg:right-0 lg:p-0 lg:bg-transparent lg:border-0 lg:flex lg:opacity-100 lg:pointer-events-auto
        ${navOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none lg:translate-y-0'}
      `}
    >
      <div className="flex flex-col lg:flex-row gap-1 relative">
        {NAV_ITEMS.map((item, index) => (
          item.dropdown ? (
            <DropdownItem
              key={item.label}
              item={item}
              index={index}
              activeLink={activeLink}
              isActive={activeLink === item.link || item.dropdown.some((d: any) => activeLink === d.link)}
              isHovered={hoveredDropdown === index}
              isExpandedMobile={expandedMobile === index}
              onClick={handleNavClick}
              onHoverEnter={() => handleDropdownEnter(index)}
              onHoverLeave={handleDropdownLeave}
              onMobileToggle={() => handleMobileToggle(index)}
            />
          ) : (
            <NavItem
              key={item.link}
              {...item}
              index={index}
              isActive={activeLink === item.link}
              onClick={handleNavClick}
            />
          )
        ))}
        <ActiveIndicator ref={activeBoxRef} />
      </div>
    </nav>
  );
});

const NavItem = memo(({ label, link, index, isActive, onClick, className }: any) => (
  <Link
    href={link}
    onClick={(e) => onClick(e, link)}
    className={`
      relative px-4 py-3 lg:py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 z-10 flex items-center gap-3
      ${className ?? ''}
      ${isActive ? 'text-[#ffe1c1]' : 'text-zinc-500 hover:text-zinc-200'}
    `}
  >
    <span className="font-mono text-[8px] text-[#ffe1c1] lg:hidden">[{index + 1}]</span>
    {label}
  </Link>
));

const DropdownItem = memo(({
  item, index, activeLink, isActive, isHovered, isExpandedMobile,
  onClick, onHoverEnter, onHoverLeave, onMobileToggle
}: any) => (
  <div
    className="relative"
    onMouseEnter={onHoverEnter}
    onMouseLeave={onHoverLeave}
  >
    {/* Desktop trigger */}
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e, item.link);
      }}
      className={`
        relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 z-10 hidden lg:flex items-center gap-2
        ${isActive ? 'text-[#ffe1c1]' : 'text-zinc-500 hover:text-zinc-200'}
      `}
    >
      {item.label}
      <ChevronDown
        className={`w-3 h-3 transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`}
      />
    </button>

    {/* Mobile trigger */}
    <button
      onClick={() => onMobileToggle()}
      className={`
        relative px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 z-10 flex lg:hidden items-center gap-3 w-full
        ${isActive ? 'text-[#ffe1c1]' : 'text-zinc-500 hover:text-zinc-200'}
      `}
    >
      <span className="font-mono text-[8px] text-[#ffe1c1]">[{index + 1}]</span>
      {item.label}
      <ChevronDown
        className={`w-3 h-3 transition-transform duration-200 ml-auto ${isExpandedMobile ? 'rotate-180' : ''}`}
      />
    </button>

    {/* Desktop dropdown */}
    {isHovered && (
      <div className="hidden lg:block absolute top-full left-0 pt-2 z-50">
        <div
          className="bg-zinc-950/95 border border-zinc-900 rounded-xl p-2 min-w-[180px] backdrop-blur-md shadow-xl"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
        >
          {item.dropdown.map((sub: any) => (
            <Link
              key={sub.link}
              href={sub.link}
              onClick={(e) => onClick(e, sub.link)}
              className={`
                block px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] rounded-lg transition-all duration-200
                ${activeLink === sub.link ? 'text-[#ffe1c1] bg-[#ffe1c1]/5' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'}
              `}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    )}

    {/* Mobile dropdown */}
    {isExpandedMobile && (
      <div className="lg:hidden pl-8 pb-2">
        {item.dropdown.map((sub: any) => (
          <Link
            key={sub.link}
            href={sub.link}
            onClick={(e) => onClick(e, sub.link)}
            className={`
              block px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-200
              ${activeLink === sub.link ? 'text-[#ffe1c1]' : 'text-zinc-500 hover:text-zinc-200'}
            `}
          >
            {sub.label}
          </Link>
        ))}
      </div>
    )}
  </div>
));

const ActiveIndicator = memo(forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="absolute hidden lg:block bottom-[-4px] h-[1px] bg-[#ffe1c1] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
  />
)));

Navbar.displayName = "Navbar";
export default Navbar;
