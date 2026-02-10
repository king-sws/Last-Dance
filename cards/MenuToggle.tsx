// components/cards/MenuToggle.tsx
"use client"
import { memo } from "react";
import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";

interface MenuToggleProps {
  navOpen: boolean;
  setNavOpen: (value: boolean) => void;
}

const MenuToggle = memo(({ navOpen, setNavOpen }: MenuToggleProps) => (
  <div className="flex items-center gap-4">
    <Link
      href="#contact"
      className="btn btn-secondary max-md:hidden"
      scroll={false}
    >
      Contact Me
    </Link>
    {/* Technical Toggle: Minimalist approach */}
    <button
      className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[4px] focus:outline-none"
      onClick={() => setNavOpen(!navOpen)}
    >
      <span className={`h-[1px] bg-[#ffe1c1] transition-all duration-300 ${navOpen ? "w-5 rotate-45 translate-y-[5px]" : "w-6"}`} />
      <span className={`h-[1px] bg-[#ffe1c1] transition-all duration-300 ${navOpen ? "opacity-0" : "w-4 self-end"}`} />
      <span className={`h-[1px] bg-[#ffe1c1] transition-all duration-300 ${navOpen ? "w-5 -rotate-45 -translate-y-[5px]" : "w-6"}`} />
    </button>
  </div>
));

MenuToggle.displayName = "MenuToggle";
export default MenuToggle;