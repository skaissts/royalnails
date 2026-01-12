import React from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Booking from './components/Booking'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
        <Navigation />
        <Hero />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <Services />
        <div className="section-divider"></div>
        <Booking />
        <div className="section-divider"></div>
        <Gallery />
        <div className="section-divider"></div>
        <Reviews />
        <div className="section-divider"></div>
        <Location />
        <div className="section-divider"></div>
        <Contact />
      </div>
    </LanguageProvider>
  )
}

export default App
