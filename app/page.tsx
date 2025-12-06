import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BluttonProjectPage from './components/Blutto'
import SelloraProjectPage from './components/Sellora'

const page = () => {
  return (
    <div className='bg-neutral-900' >
      <Header />
      <Hero />
      <About />
      <Skills />
      <SelloraProjectPage />
      <div className="relative bg-zinc-950 ">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-zinc-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative px-8">
              {/* Glowing orb effect */}
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 opacity-30 animate-pulse"></div>
              {/* Lightning bolt container */}
              <div className="relative w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border-2 border-violet-500/50 shadow-lg shadow-violet-500/25">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 opacity-20 animate-ping"></div>
                <svg 
                  className="w-6 h-6 text-violet-400 relative z-10" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      <BluttonProjectPage />
      <Work />
      <Review />
      <Contact />
      <Footer />
    </div>
  )
}

export default page