import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import OurService from '../../components/OurServiceSection'
import WhyUsSection from '../../components/WhyUsSection'
import TestimonialSection from '../../components/TestimonialSection'
import CtaBanner from '../../components/CtaBanner'
import FAQSection from '../../components/FAQSection'
import Footer from '../../components/Footer'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <Navbar />
        <HeroSection />
        <OurService />
        <WhyUsSection />
        <TestimonialSection />
        <CtaBanner />
        <FAQSection />
        <Footer />
    </>
  )
}

export default Home
