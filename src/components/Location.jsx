import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Location = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const address = 'Hofmannsthaigesse 2, 1030 Wien, Austria'
  const mapUrl = `https://www.google.com/maps?q=Hofmannsthaigesse+2,+1030+Wien,+Austria&output=embed`
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [contentRef, contentRevealed] = useScrollReveal({ threshold: 0.2 })

  return (
    <section
      id="location"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 section-gradient"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 
            ref={titleRef}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 sm:mb-10 text-gradient-shimmer leading-tight scroll-reveal ${titleRevealed ? 'revealed' : ''}`}
          >
            {t.location.title}
          </h2>
          <div className={`w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-10 sm:mb-12 rounded-full scroll-reveal ${titleRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}></div>
          <p className={`text-lg sm:text-xl text-marble-200/90 max-w-3xl mx-auto scroll-reveal ${titleRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.3s' }}>
            {t.location.description}
          </p>
        </div>

        <div ref={contentRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 scroll-reveal ${contentRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <div className="elegant-box p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-gold-400 mb-6 sm:mb-8 leading-tight">
              {t.location.addressTitle}
            </h3>
            <p className="text-marble-100/95 text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
              {address}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-gold-400 mt-1 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-marble-200/80 text-base sm:text-lg">
                  {t.location.addressInfo}
                </p>
              </div>
            </div>
          </div>

          <div className="elegant-box overflow-hidden">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ minHeight: '300px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
