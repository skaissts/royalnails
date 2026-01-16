import React, { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Hero.css'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="hero">
      {/* Background Decor */}
      <div className="hero__bg"></div>

      {/* Central Column Container - Logo centered */}
      <div className={`hero__container ${isLoaded ? 'hero__container--loaded' : ''}`}>
        <img
          src="/logo.png"
          alt="Royal Nails by Cristina"
          className="hero__logo"
        />
      </div>

      {/* Bottom Content Block */}
      <div className={`hero__bottom ${isLoaded ? 'hero__container--loaded' : ''}`}>
        <p className="hero__subtitle">
          Premium Nagelstudio in Wien
        </p>

        <div className="hero__buttons">
          <a href="#booking" className="hero__btn hero__btn--outline">
            {t.hero.bookButton}
          </a>
          <a href="#services" className="hero__btn hero__btn--solid">
            {t.hero.servicesButton}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
