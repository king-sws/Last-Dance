// components/Skills.tsx
"use client";
import SkillsCard from "@/cards/SkillsCard";
import { motion } from "framer-motion";

interface SkillItem {
  imgSrc: string;
  label: string;
  desc: string;
  customLabel?: boolean;
}

interface SkillCategory {
  name: string;
  items: SkillItem[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
        {
          name: "Design & Core Web",
          items: [
            { 
              imgSrc: '/figma.svg', 
              label: 'Figma', 
              desc: 'UI/UX Design & Prototyping' 
            },
            { 
        imgSrc: '/icons8-adobe-xd.svg', 
        label: 'Adobe XD', 
        desc: 'Design & Prototyping Tool' 
      },
            { 
              imgSrc: 'html-5.svg', 
              label: 'HTML', 
              desc: 'Semantic Web Structure' 
            },
            { 
              imgSrc: 'css3.svg', 
              label: 'CSS', 
              desc: 'Modern Layouts & Animations' 
            },
            { 
        imgSrc: '/icons8-sass.svg', 
        label: 'Sass', 
        desc: 'CSS Preprocessing' 
      },
            { 
        imgSrc: '/icons8-material-ui.svg', 
        label: 'Material-UI', 
        desc: 'React Component Library' 
      },
            { 
        imgSrc: '/icons8-framer-logo-96.png', 
        label: 'Framer',
        desc: 'React Component Library' 
      },
          ]
        },
        {
          name: "Frontend Development",
          items: [
            { 
              imgSrc: 'js.svg', 
              label: 'JavaScript', 
              desc: 'ES6+ & Modern Patterns' 
            },
            { 
              imgSrc: 'typescript.svg', 
              label: 'TypeScript', 
              desc: 'Type-Safe Applications' 
            },
            { 
              imgSrc: 'react.svg', 
              label: 'React', 
              desc: 'Component Architecture' 
            },
            { 
              imgSrc: 'nextjs-icon.svg', 
              label: 'Next.js', 
              desc: 'Full-Stack React Framework' 
            },
            { 
              imgSrc: 'tw.svg', 
              label: 'Tailwind CSS', 
              desc: 'Utility-First Styling' 
            },
            { 
        imgSrc: '/icons8-webpack.svg', 
        label: 'Webpack', 
        desc: 'Module Bundler' 
      },
            { 
              imgSrc: 'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg', 
              label: 'Zustand', 
              desc: 'Lightweight State Management' 
            },
             { 
        imgSrc: '/Redux--Streamline-Svg-Logos.svg', 
        label: 'Redux', 
        desc: 'Predictable State Container' 
      },
            { 
        imgSrc: '/React-Query-Icon--Streamline-Svg-Logos.svg', 
        label: 'React Query', 
        desc: 'Server State Management' 
      },
      { 
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', 
        label: 'Jest', 
        desc: 'Delightful JavaScript Testing' 
      },
            { 
        imgSrc: 'https://ui.shadcn.com/apple-touch-icon.png', 
        label: 'Shadcn UI', 
        desc: 'Beautifully Designed Components' 
      }
          ]
        },
        {
          name: "Backend & Databases",
          items: [
            { 
              imgSrc: 'nodejs.svg', 
              label: 'Node.js', 
              desc: 'Server-Side JavaScript' 
            },
            { 
              imgSrc: 'expressjs.svg', 
              label: 'Express.js', 
              desc: 'API Development' 
            },
            { 
              imgSrc: 'data:image/png;base64,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', 
              label: 'REST API', 
              desc: 'Resource-Oriented Design' 
            },
            { 
              imgSrc: 'https://camo.githubusercontent.com/f4758620c60f931a2b9bfe132176a2e6dee2cbbb80c713639d4a969ab6100b8e/68747470733a2f2f70726576696577732e6a756d7073686172652e636f6d2f7468756d622f38313562633031623739366464366631373333633935376335616631393439333334623665626631613431636237383263383138663362633833383430343965323531646361366532336330633437373638636137393739366539393036376132343934633961336461393961353036326534353030343134306264363334613037363935343432643631633366663961323139656531323435613230656533', 
              label: 'Auth0/NextAuth', 
              desc: 'Enterprise Auth Solutions' 
            },
            { 
              imgSrc: 'prisma1.svg', 
              label: 'Prisma', 
              desc: 'Type-Safe Database Client' 
            },
            { 
        imgSrc: '/Drizzle--Streamline-Simple-Icons.svg', 
        label: 'Drizzle ORM', 
        desc: 'TypeScript ORM' 
      },
            { 
              imgSrc: 'icons8-redis.svg', 
              label: 'Redis', 
              desc: 'In-Memory Data Store'  
            },
            { 
              imgSrc: 'mongodb.svg', 
              label: 'MongoDB', 
              desc: 'NoSQL Database Design' 
            },
            { 
              imgSrc: 'mysql-3.svg', 
              label: 'MySQL', 
              desc: 'Rslational database' 
            },
            { 
        imgSrc: '/icons8-postgresql.svg', 
        label: 'PostgreSQL', 
        desc: 'Advanced Relational Database' 
      },
      { 
        imgSrc: '/icons8-firebase.svg', 
        label: 'Firebase', 
        desc: 'Backend-as-a-Service Platform' 
      },
      { 
        imgSrc: '/icons8-supabase.svg', 
        label: 'Supabase', 
        desc: 'Open Source Firebase Alternative' 
      },
          ]
        }
      ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="sec py-24 relative overflow-hidden">
      {/* Optimized background animation */}
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: 'mirror',
          ease: 'easeInOut'
        }}
        className="absolute -z-10 w-96 h-96 bg-cyan-900 rounded-full blur-3xl -bottom-40 -right-48"
      />
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 rounded-full border border-cyan-500/30 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm text-cyan-400 font-medium">Technical Arsenal</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Core Competencies
            </span> That Deliver Impact
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-300 mt-3 mb-8 max-w-[60ch] md:text-lg leading-relaxed"
          >
            Expertly wielding modern tools to craft performant, scalable solutions. 
            My technology stack evolves with industry trends while maintaining robustness.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="mb-16 last:mb-0"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-cyan-300 text-lg font-semibold mb-6 px-4 py-2 bg-zinc-800/50 rounded-lg inline-flex items-center border-l-4 border-cyan-400/80"
              >
                {category.name}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {category.items.map((item, i) => (
                  <SkillsCard
                    key={i}
                    item={item}
                    delay={i * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;