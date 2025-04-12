// components/cards/Logo.tsx
"use client"
import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = memo(() => (
  <Link href="/" className="z-50" aria-label="Home">
    <Image
      src="/logo.svg"
      alt="Oussama's Logo"
      className="w-10 h-10 hover:rotate-12 transition-transform"
      width={40}
      height={40}
      priority
    />
  </Link>
));

Logo.displayName = "Logo";
export default Logo;