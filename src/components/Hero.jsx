import React, { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Main container that includes logo area and content - image fills this entire area */}
      <div 
        className="relative w-full flex flex-col items-center"
        style={{
          paddingTop: '20px',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '40px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {/* Background image that fills the entire marked area with margins */}
        <img
          src="/20260112_2221_Image Generation_remix_01ket19x3dffps0athhpyggdhj-2.png"
          alt="Royal Nails by Cristina Logo"
          className={`absolute object-contain transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            top: '5px',
            left: '40px',
            right: '40px',
            bottom: '90px',
            width: 'calc(100% - 80px)',
            height: 'calc(100% - 95px)',
            objectPosition: 'center center',
            zIndex: 0,
          }}
        />

        {/* Logo Container - positioned above with spacing */}
        <div 
          className="relative z-10 w-full flex items-center justify-center"
          style={{
            height: '50vh',
            maxHeight: '600px',
            minHeight: '300px',
          }}
        >
          {/* Logo space - transparent, image shows through */}
        </div>

        {/* Content below logo - with proper spacing */}
        <div className={`relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 sm:mt-8 md:mt-10 scroll-reveal ${isLoaded ? 'revealed' : ''}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 text-gradient-shimmer leading-tight pb-2 opacity-0 pointer-events-none">
            {t.hero.subtitle}
          </h2>
          <p className={`text-lg sm:text-xl md:text-2xl text-marble-200/90 font-light mb-8 tracking-wide text-reveal ${isLoaded ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
            {t.hero.description}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center text-reveal ${isLoaded ? 'revealed' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <a
              href="#booking"
              className="btn-elegant px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gold-500/30 uppercase tracking-wider text-sm"
            >
              {t.hero.bookButton}
            </a>
            <a
              href="#services"
              className="btn-elegant px-8 py-4 border-2 border-gold-500/50 text-gold-400 hover:bg-gold-500/10 hover:border-gold-400 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/20 uppercase tracking-wider text-sm backdrop-blur-sm"
            >
              {t.hero.servicesButton}
            </a>
          </div>
        </div>
      </div>
      {/* Smooth transition gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none"></div>
    </section>
  )
}

export default Hero
