"use client";
import SkillsCard from "@/cards/SkillsCard";
import { motion } from "framer-motion";
import { FiLayers, FiCode, FiDatabase, FiGrid } from "react-icons/fi";

const Skills = () => {
  const skillCategories = [
    {
      name: "Design & Core Web",
      icon: <FiLayers />,
      id: "MODULE_01",
      items: [
        { imgSrc: '/figma.svg', label: 'Figma', desc: 'UI/UX Design & Prototyping' },
        { imgSrc: '/icons8-adobe-xd.svg', label: 'Adobe XD', desc: 'Design & Prototyping' },
        { imgSrc: 'html-5.svg', label: 'HTML', desc: 'Semantic Web Structure' },
        { imgSrc: 'css3.svg', label: 'CSS', desc: 'Modern Layouts & Animations' },
        { imgSrc: '/icons8-sass.svg', label: 'Sass', desc: 'CSS Preprocessing' },
        { imgSrc: '/icons8-material-ui.svg', label: 'Material-UI', desc: 'Component Library' },
        { imgSrc: '/icons8-framer-logo-96.png', label: 'Framer', desc: 'Motion Architecture' },
      ]
    },
    {
      name: "Frontend Development",
      icon: <FiCode />,
      id: "MODULE_02",
      items: [
        { imgSrc: 'js.svg', label: 'JavaScript', desc: 'ES6+ & Modern Patterns' },
        { imgSrc: 'typescript.svg', label: 'TypeScript', desc: 'Type-Safe Applications' },
        { imgSrc: 'react.svg', label: 'React', desc: 'Component Architecture' },
        { imgSrc: 'nextjs-icon.svg', label: 'Next.js', desc: 'Full-Stack React Framework' },
        { imgSrc: 'tw.svg', label: 'Tailwind CSS', desc: 'Utility-First Styling' },
        { imgSrc: 'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg', label: 'Zustand', desc: 'State Management' },
        { imgSrc: '/React-Query-Icon--Streamline-Svg-Logos.svg', label: 'React Query', desc: 'Server State' },
        { imgSrc: 'https://ui.shadcn.com/apple-touch-icon.png', label: 'Shadcn UI', desc: 'UI Components' }
      ]
    },
    {
      name: "Backend & Databases",
      icon: <FiDatabase />,
      id: "MODULE_03",
      items: [
        { imgSrc: 'nodejs.svg', label: 'Node.js', desc: 'Server-Side Environment' },
        { imgSrc: 'expressjs.svg', label: 'Express.js', desc: 'API Development' },
        { imgSrc: 'prisma1.svg', label: 'Prisma', desc: 'Type-Safe ORM' },
        { imgSrc: '/Drizzle--Streamline-Simple-Icons.svg', label: 'Drizzle ORM', desc: 'TypeScript ORM' },
        { imgSrc: 'icons8-redis.svg', label: 'Redis', desc: 'In-Memory Cache' },
        { imgSrc: 'mongodb.svg', label: 'MongoDB', desc: 'NoSQL Design' },
        { imgSrc: '/icons8-postgresql.svg', label: 'PostgreSQL', desc: 'Relational Database' },
        { imgSrc: '/icons8-supabase.svg', label: 'Supabase', desc: 'Backend Infrastructure' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-26 bg-zinc-950 px-6 sm:px-10 relative overflow-hidden">
      {/* Background Accent: Subtle Sand Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ffe1c1]/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        
        {/* Section Header: Optimized to break repetition */}
<div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-l border-zinc-900 pl-8 relative">
  {/* Absolute Accent Line */}
  <div className="absolute left-0 top-0 w-1 h-12 bg-[#ffe1c1]" />
  
  <div className="max-w-2xl">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-600">
        System_Capabilities / <span className="text-[#ffe1c1]">Inventory.v2</span>
      </span>
    </div>
    
    <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
      The Arsenal<span className="text-[#ffe1c1] opacity-50">_</span>
    </h2>
  </div>

  <div className="max-w-xs">
    <p className="text-zinc-500 text-sm font-light leading-relaxed border-t border-zinc-900 pt-4">
      A curated stack of <span className="text-zinc-300">industry-standard tools</span> engineered for 
      high-performance infrastructure and modular scalability.
    </p>
    {/* Visual Status Indicator */}
    <div className="flex items-center gap-2 mt-4">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-[9px] font-mono text-emerald-500/80 uppercase tracking-widest">Modules_Verified</span>
    </div>
  </div>
</div>

        {/* Skill Modules */}
        <div className="space-y-24">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="relative">
              {/* Category Header with ID */}
              <div className="flex items-center justify-between mb-12 pb-4 border-b border-zinc-900">
                <div className="flex items-center gap-4">
                  <div className="text-[#ffe1c1] p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white uppercase italic">
                    {category.name}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">
                  {category.id}
                </span>
              </div>

              {/* Grid of Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((item, i) => (
                  <SkillsCard 
                    key={i} 
                    item={item} 
                    // Note: Ensure your SkillsCard uses a minimal, dark style to match
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Footer */}
        <div className="mt-24 pt-8 border-t border-zinc-900 flex justify-between items-center text-[9px] font-mono text-zinc-800 uppercase tracking-[0.5em]">
          <span>Inventory_Ready</span>
          <div className="flex gap-4">
            <FiGrid />
            <span>Architecture_Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;