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
    <button
      className="md:hidden p-2 text-zinc-300 hover:text-cyan-400 transition-colors relative focus:outline-none"
      onClick={() => setNavOpen(!navOpen)}
      aria-label={`${navOpen ? "Close" : "Open"} navigation menu`}
      aria-expanded={navOpen}
    >
      <span className="material-symbols-outlined text-3xl">
        {navOpen ? <BiX /> : <BiMenu /> }
      </span>
    </button>
  </div>
));

MenuToggle.displayName = "MenuToggle";
export default MenuToggle;