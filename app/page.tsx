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
import SelloraProjectPage from './components/Sellora'
import PropertyManagementProjectPage from './components/Propely'
import ProjectDivider from './components/ProjectDivider'
import { Home, ShoppingCart } from 'lucide-react'

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-zinc-950 min-h-screen">
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
              color="#ffe1c1" 
              icon={<Home className="w-6 h-6" />} 
            />
            
            <SelloraProjectPage />
            <ProjectDivider 
              color="#a78bfa" 
              icon={<ShoppingCart className="w-6 h-6" />} 
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