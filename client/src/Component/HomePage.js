import React from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import Ask from './Ask'
import { Footer } from './Footer'
import { Testimonials } from './Testimonials'
export const HomePage = () => {
  return (
    <div><div className="w-[1728px] relative bg-sky-500 items-center">

      <Navbar />
      <div data-aos="fade-up-right">
        <Hero />
      </div>
      <div className='className="animate-bounce w-6 h-6'>

      </div>
      <Ask />
      <div data-aos="fade-right"><Testimonials /></div>
      <footer>
        <Footer />
      </footer></div></div>
  )
}
