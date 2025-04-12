import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='bg-neutral-900' >
      <Header />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Review />
      <Contact />
      <Footer />
    </div>
  )
}

export default page