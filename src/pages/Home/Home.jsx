import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import OurService from '../../components/OurServiceSection/OurService'
import WhyUsSection from '../../components/WhyUsSection/WhyUsSection'
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection'
import CtaBanner from '../../components/CtaBanner/CtaBanner'
import FAQSection from '../../components/FAQSection/FAQSection'
import Footer from '../../components/Footer/Footer'


const Home = () => {
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
