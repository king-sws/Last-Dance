import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import StatusFooter from "./components/StatusFooter";
import ImageBlueprint from "./components/ImageBlueprint";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oussama | Fullstack Developer",
  description: "Portfolio showcasing projects and skills of Oussama, a fullstack developer",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-[#ffe1c1] selection:text-black">
        {/* The cursor sits at the top level */}
        <ScrollProgress />
        {/* <CustomCursor />  */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}