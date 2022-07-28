import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import NotFoundSection from '../../components/NotFoundSection'

const NotFound = () => {

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <Navbar />
        <NotFoundSection />
        <Footer />
    </>
  )
}

export default NotFound
