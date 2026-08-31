export interface Project {
  imgSrc: string;
  title: string;
  description: string;
  tags: string[];
  primaryTech: string[];
  projectLink: string;
  githubLink?: string;
  isFeatured?: boolean;
  detailPageUrl?: string;
  metrics?: {
    completion?: string;
    complexity?: string;
    quality?: string;
  };
  category: "Frontend" | "Fullstack" | "Backend" | "Mobile";
  industry:
    | "SaaS"
    | "Healthcare"
    | "E-commerce"
    | "Fintech"
    | "Social"
    | "EdTech/Career"
    | "Productivity"
    | "Hospitality"
    | "Education"
    | "Entertainment";
}

export const works: Project[] = [
  // FEATURED PROJECTS
  {
    imgSrc: "/image/pro.png",
    title: "Propely - Property Management Platform",
    description:
      "A comprehensive property management solution that automates workflows, streamlines operations, and enhances tenant relationships. Features automated rent collection, maintenance tracking, tenant portals, and financial analytics.",
    tags: ["Property Management", "Automation", "Tenant Portal", "Analytics"],
    primaryTech: ["Next.js 16", "PostgreSQL", "Prisma", "Stripe"],
    projectLink: "https://propely.site",
    githubLink: "https://github.com/king-sws/property-management-platform",
    category: "Fullstack",
    industry: "SaaS",
    isFeatured: true,
    detailPageUrl: "#propely",
    metrics: {
      completion: "100%",
      complexity: "Very High",
      quality: "A+",
    },
  },
    {
    imgSrc: "/image/Max_a_A_split_composition_.png",
    title: "MangaTek - Arabic Anime/Manhwa Aggregation Platform",
    description:
      "A full-stack content aggregation platform that scrapes, normalizes, and serves content from 15+ sources. Features three rendering engines (manga reader, gallery viewer, video player), full Arabic RTL support, Redis caching, and enterprise-grade multi-source architecture.",
    tags: ["Web Scraping", "Multi-Source", "RTL/Arabic", "PWA"],
    primaryTech: ["Next.js 16", "Puppeteer", "Cheerio", "HLS.js", "Upstash Redis"],
    projectLink: "https://manga-v2.vercel.app",
    githubLink: "https://github.com/king-sws/manga-v2",
    category: "Fullstack",
    industry: "Entertainment",
    isFeatured: true,
    detailPageUrl: "#manga",
    metrics: {
      completion: "95%",
      complexity: "Very High",
      quality: "A+",
    },
  },
  {
    imgSrc: "/image/selo.png",
    title: "Sellora - E-commerce Platform",
    description:
      "A production-ready e-commerce platform engineered for conversion, security, and exceptional shopping experiences. Features advanced product management, secure checkout with Stripe, analytics dashboard, and inventory management.",
    tags: ["E-Commerce", "Stripe Payments", "Product Management", "Analytics"],
    primaryTech: ["Next.js 15", "PostgreSQL", "tRPC", "Stripe"],
    projectLink: "https://sellora-store.vercel.app",
    githubLink: "https://github.com/king-sws/sellora",
    category: "Fullstack",
    industry: "E-commerce",
    isFeatured: true,
    detailPageUrl: "#sellora",
    metrics: {
      completion: "100%",
      complexity: "Very High",
      quality: "A+",
    },
  },
  {
    imgSrc: "/image.jpg",
    title: "Blutto - SaaS Task Management Platform",
    description:
      "An enterprise-grade task management platform built for modern teams. Features real-time collaboration, Kanban boards, calendar views, role-based permissions, and integrated team chat with Stripe billing.",
    tags: ["Task Management", "Team Collaboration", "Real-time", "SaaS"],
    primaryTech: ["Next.js 16", "PostgreSQL", "Prisma", "WebSockets"],
    projectLink: "https://blutto.vercel.app",
    githubLink: "https://github.com/king-sws/blutto",
    category: "Fullstack",
    industry: "SaaS",
    isFeatured: true,
    detailPageUrl: "#blutto",
    metrics: {
      completion: "100%",
      complexity: "Very High",
      quality: "A+",
    },
  },


  // REGULAR PROJECTS
  {
    imgSrc: "/image/Cover-up.png",
    title: "Uply - AI-Powered Resume Builder Platform",
    description:
      "Developed an intelligent resume building platform that leverages AI to help job seekers create professional, ATS-optimized resumes. Features real-time AI suggestions, multiple template options, and smart content optimization to maximize interview chances.",
    tags: ["AI Integration", "Career Tech", "ATS Optimization"],
    primaryTech: ["Next.js", "TypeScript", "OpenAI API"],
    projectLink: "https://uply-resume.vercel.app/",
    githubLink: "https://github.com/king-sws/uply",
    category: "Fullstack",
    industry: "EdTech/Career",
    metrics: {
      completion: "100%",
      complexity: "High",
      quality: "A+",
    },
  },
  {
    imgSrc: "/image/project-1.jpg",
    title: "Modern SaaS Landing Page with Productivity Focus",
    description:
      "Built a conversion-focused SaaS landing page with modern animations and responsive design. Implemented smooth user interactions with Framer Motion, optimized for mobile-first experience, and structured for high conversion rates.",
    tags: ["Conversion Optimization", "Modern UI/UX", "Mobile-First"],
    primaryTech: ["Next.js", "TypeScript", "Framer Motion"],
    projectLink: "https://saas-page-gamma.vercel.app/",
    githubLink: "https://github.com/king-sws/Saas-page",
    category: "Frontend",
    industry: "Productivity",
    metrics: {
      completion: "100%",
      complexity: "High",
      quality: "A+",
    },
  },
  {
    imgSrc: "/image/project-2.jpg",
    title: "Enterprise-Grade Productivity Landing Page",
    description:
      "Developed a sophisticated dark-themed landing page showcasing advanced frontend architecture and user-centric design. Built with Next.js SSR for optimal performance.",
    tags: ["Enterprise UI", "Conversion Optimization", "Accessibility"],
    primaryTech: ["Next.js", "TypeScript", "Advanced CSS"],
    projectLink: "https://dark-landing-page-rho.vercel.app/",
    githubLink: "https://github.com/king-sws/Dark-Landing-Page",
    category: "Frontend",
    industry: "Productivity",
    metrics: {
      completion: "100%",
      complexity: "High",
      quality: "A+",
    },
  },
  {
    imgSrc: "/image/project-3.jpg",
    title: "Modern Design Tool Landing Page with Advanced UI",
    description:
      "Developed a sophisticated marketing website for a design collaboration platform featuring complex animations and modern interface design.",
    tags: ["Design Systems", "Animation", "Marketing Site", "Modern UI/UX"],
    primaryTech: ["React", "Next.js", "TypeScript", "Framer Motion"],
    projectLink: "https://modern-web-design-one.vercel.app/",
    githubLink: "https://github.com/king-sws/Modern-Web",
    category: "Frontend",
    industry: "SaaS",
    metrics: {
      completion: "100%",
      complexity: "High",
      quality: "A+",
    },
  },
  {
    imgSrc: "/image/Cover.png",
    title: "HooBank - Modern FinTech Landing Page",
    description:
      "Developed a sophisticated fintech landing page showcasing next-generation banking services with modern UI/UX principles.",
    tags: ["FinTech", "Modern UI", "Banking"],
    primaryTech: ["React 18", "Tailwind CSS", "Next.js"],
    projectLink: "https://modern-web-ten.vercel.app/",
    githubLink: "https://github.com/king-sws/Robot",
    category: "Frontend",
    industry: "Fintech",
    metrics: {
      completion: "100%",
      complexity: "High",
      quality: "A+",
    },
  },
  {
    imgSrc: "/image/Covers.png",
    title: "Next.js Prototype Development Framework",
    description:
      "Built a scalable Next.js development foundation with modern React architecture and TypeScript integration.",
    tags: ["Next.js Framework", "TypeScript", "Development Setup"],
    primaryTech: ["Next.js", "TypeScript", "React"],
    projectLink: "https://github.com/king-sws/My-Proto",
    githubLink: "https://github.com/king-sws/My-Proto",
    category: "Frontend",
    industry: "SaaS",
    metrics: {
      completion: "85%",
      complexity: "Medium",
      quality: "A",
    },
  },
  {
    imgSrc: "/image/healthcare.png",
    title: "Healthcare Application Development Setup",
    description:
      "Established foundation for a healthcare management system using Next.js with App Router architecture.",
    tags: ["Healthcare Setup", "Next.js App Router", "Medical Tech"],
    primaryTech: ["Next.js", "TypeScript", "App Router"],
    projectLink: "https://github.com/king-sws/health",
    githubLink: "https://github.com/king-sws/health",
    category: "Fullstack",
    industry: "Healthcare",
    metrics: {
      completion: "95%",
      complexity: "High",
      quality: "A",
    },
  },
  {
    imgSrc: "/image/ly.jpg",
    title: "Bookify - Digital Reading Platform",
    description:
      "Developed a comprehensive digital library platform featuring intelligent book search, reading progress tracking, and personalized recommendations.",
    tags: ["Digital Library", "Search Optimization", "User Experience"],
    primaryTech: ["Next.js", "React", "JavaScript"],
    projectLink: "https://bookify-gamma.vercel.app/",
    githubLink: "https://github.com/king-sws/Bookify",
    category: "Fullstack",
    industry: "SaaS",
    metrics: {
      completion: "90%",
      complexity: "High",
      quality: "A",
    },
  },
  {
    imgSrc: "/image/prep.png",
    title: "PrepWise - AI-Powered Interview Practice Platform",
    description:
      "Built a comprehensive interview preparation platform featuring AI-driven question generation and personalized feedback systems.",
    tags: ["AI Integration", "Authentication", "Career Development"],
    primaryTech: ["Next.js", "AI/ML APIs", "Authentication"],
    projectLink: "https://ai-interview-boot.vercel.app/",
    githubLink: "https://github.com/king-sws/prepwise-interview",
    category: "Fullstack",
    industry: "EdTech/Career",
    metrics: {
      completion: "100%",
      complexity: "High",
      quality: "A+",
    },
  },
  {
    imgSrc: "/image/s.png",
    title: "Real-time Chat Application",
    description:
      "Built a messaging platform with Socket.io for real-time communication, file upload functionality, and message history.",
    tags: ["Real-time", "WebSockets", "File Upload"],
    primaryTech: ["React", "Socket.io", "Node.js"],
    projectLink: "https://s-chat-84b6.onrender.com/",
    githubLink: "https://github.com/king-sws/S-Chat",
    category: "Fullstack",
    industry: "Social",
    metrics: {
      completion: "100%",
      complexity: "High",
      quality: "A",
    },
  },
  {
    imgSrc: "/image/med.png",
    title: "MedCare - Healthcare Analytics Dashboard",
    description:
      "Built a comprehensive healthcare management platform featuring real-time patient monitoring and advanced medical data analytics.",
    tags: ["Healthcare Analytics", "Real-time Monitoring", "HIPAA Compliance"],
    primaryTech: ["React", "Tailwind", "Javascript"],
    projectLink: "https://medical-six-teal.vercel.app/",
    githubLink: "https://github.com/king-sws/Medical",
    category: "Frontend",
    industry: "Healthcare",
    metrics: {
      completion: "100%",
      complexity: "High",
      quality: "A",
    },
  },
  {
    imgSrc: "/image/jjj.png",
    title: "HomeLand - Premium Property Booking Platform",
    description:
      "Developed a comprehensive vacation rental marketplace with intelligent search algorithms and real-time availability tracking.",
    tags: ["Property Management", "Real-time Booking", "Payment Integration"],
    primaryTech: ["React", "Tailwindcss", "Shadcn"],
    projectLink: "https://houses-eight-blond.vercel.app",
    githubLink: "https://github.com/king-sws/Houses",
    category: "Frontend",
    industry: "Productivity",
    metrics: {
      completion: "100%",
      complexity: "High",
      quality: "A+",
    },
  },
  {
    imgSrc: "/image/pag.png",
    title: "Ocean CRM - Enterprise Sales Automation Platform",
    description:
      "Built an intelligent CRM solution for B2B sales teams featuring automated lead scoring and sales pipeline visualization.",
    tags: ["CRM Software", "Sales Analytics", "Task Management"],
    primaryTech: ["React", "TypeScript", "TailwindCss"],
    projectLink: "https://crm-app-phi.vercel.app",
    githubLink: "https://github.com/king-sws/crm-dashboard",
    category: "Frontend",
    industry: "SaaS",
    metrics: {
      completion: "100%",
      complexity: "Medium",
      quality: "A",
    },
  },
  {
    imgSrc: "/image/homm.png",
    title: "AirStay - Modern Vacation Rental Marketplace",
    description:
      "Created a sophisticated Airbnb-inspired platform using React and Vite with lightning-fast performance.",
    tags: ["Vite", "Map Integration", "Dynamic Pricing", "Mobile Responsive"],
    primaryTech: ["React", "Vite", "Maps API", "ESLint"],
    projectLink: "https://github.com/king-sws",
    githubLink: "https://github.com/king-sws/Airbnb/",
    category: "Fullstack",
    industry: "Hospitality",
    metrics: {
      completion: "100%",
      complexity: "High",
      quality: "A",
    },
  },
];
