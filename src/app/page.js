/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react'
import {useEffect} from 'react'
import Navbar from '@/components/Navbar'
import Hero from '../pages/Hero'
import Marquee from '../pages/Marquee'
import About from '../pages/About'
import Eyes from '../pages/Eyes'
import Featured from '../pages/Featured'
import Feature from '../pages/Feature'
import Cta from '../pages/Cta'
import Footer from '../pages/Footer'

import LocomotiveScroll from 'locomotive-scroll';



function page() {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
    // Optional: cleanup on unmount
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Feature/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default page