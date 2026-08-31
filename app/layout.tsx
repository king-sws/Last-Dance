import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import StatusFooter from "./components/StatusFooter";
import ImageBlueprint from "./components/ImageBlueprint";
import { siteConfig } from "@/config/site";

const inter = localFont({
  variable: "--font-inter",
  src: [
    { path: "../public/fonts/inter-latin-400.woff2", weight: "400", style: "normal" },
  ],
});

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    { path: "../public/fonts/poppins-latin-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/poppins-latin-700.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
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