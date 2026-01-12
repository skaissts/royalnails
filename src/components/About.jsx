import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import { useScrollReveal } from '../hooks/useScrollReveal'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [contentRef, contentRevealed] = useScrollReveal({ threshold: 0.2 })

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 section-gradient-light"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 
          ref={titleRef}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 sm:mb-10 text-gradient-shimmer leading-tight scroll-reveal ${titleRevealed ? 'revealed' : ''}`}
        >
          {t.about.title}
        </h2>
        <div className={`w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-12 sm:mb-16 rounded-full scroll-reveal ${titleRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}></div>
        <div 
          ref={contentRef}
          className={`elegant-box p-10 sm:p-12 md:p-16 scroll-reveal ${contentRevealed ? 'revealed' : ''}`}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-marble-100/95 leading-relaxed font-light max-w-4xl mx-auto">
            {t.about.text}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
