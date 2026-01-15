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
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient px-4 sm:px-6 lg:px-8"
    >
      {/* Main Content Container - Centered Logo */}
      <div className={`w-full max-w-full mx-auto flex flex-col items-center justify-center z-10 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="w-full">
          <img
            src="/20260112_2221_Image Generation_remix_01ket19x3dffps0athhpyggdhj-2.png"
            alt="Royal Nails by Cristina"
            className="w-full h-auto object-contain drop-shadow-2xl max-h-[70vh] sm:max-h-[100vh]"
          />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#booking" className="animate-bounce p-2 cursor-pointer hover:text-gold-400 text-gold-500 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 sm:w-12 sm:h-12"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>

      {/* Smooth transition gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none z-0"></div>
    </section>
  )
}

export default Hero
