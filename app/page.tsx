"use client"; // Important: This must be a client component for the loader state

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SystemLoader from './components/SystemLoader' // Create this file with the code I gave you
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Work from './components/Work'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BluttonProjectPage from './components/Blutto'
import MangaProjectPage from './components/Manga'
import SelloraProjectPage from './components/Sellora'
import PropertyManagementProjectPage from './components/Propely'
import ProjectDivider from './components/ProjectDivider'
import { Home, ShoppingCart, BookOpen } from 'lucide-react'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Oussama Boufi',
      jobTitle: 'Full-Stack Developer',
      url: 'https://last-dance.site',
      email: 'mailto:oboufi88@gmail.com',
      telephone: '+212611852414',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Safi',
        addressCountry: 'MA',
      },
      sameAs: [
        'https://www.github.com/king-sws',
        'https://www.linkedin.com/in/oussama-boufi',
        'https://www.instagram.com/oussama-boufi',
        'https://codepen.io/oussama-boufi',
      ],
      knowsAbout: [
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'PostgreSQL',
        'Full-Stack Development',
      ],
    },
    {
      '@type': 'WebSite',
      url: 'https://last-dance.site',
      name: 'Oussama | Fullstack Developer',
      description:
        'Full-Stack Developer specializing in React/Next.js and Node.js. Building stable, fast, and scalable production systems.',
    },
  ],
}

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-zinc-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SystemLoader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='bg-zinc-950' 
          >
            <Header />
            <Hero />
            <About />
            <Experience />
            <Skills />
            
            <PropertyManagementProjectPage />
            <ProjectDivider 
              color="#10b981" 
              icon={<BookOpen className="w-6 h-6" />} 
            />
            
            <MangaProjectPage />
            <ProjectDivider 
              color="#a78bfa" 
              icon={<ShoppingCart className="w-6 h-6" />} 
            />
            
            <SelloraProjectPage />
            <ProjectDivider 
              color="#ffe1c1" 
              icon={<Home className="w-6 h-6" />} 
            />
            
            <BluttonProjectPage />
            
            <Work />
            <Review />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Page