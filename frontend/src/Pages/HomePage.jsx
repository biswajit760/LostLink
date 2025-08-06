import React from 'react'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import BottomBanner from '../Components/BottomBanner'
import Footer from '../Components/Footer'
import HowWeWork from '../Components/HowWeWork'

const HomePage = () => {
  return (
    <div >
        <NavBar />
        <HeroSection />
        <HowWeWork />
        <BottomBanner />
        <Footer />
    </div>
  )
}

export default HomePage