import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const phoneNumber = '+43 681 843 906 46'
  const whatsappNumber = '4368184390646'
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [cardsRef, cardsRevealed] = useScrollReveal({ threshold: 0.2 })

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 section-gradient-light"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 
            ref={titleRef}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 sm:mb-10 text-gradient-shimmer leading-tight scroll-reveal ${titleRevealed ? 'revealed' : ''}`}
          >
            {t.contact.title}
          </h2>
          <div className={`w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full scroll-reveal ${titleRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}></div>
        </div>

        <div ref={cardsRef} className={`flex flex-wrap gap-6 sm:gap-8 justify-center scroll-reveal ${cardsRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.3s' }}>
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[calc(33.333%-1rem)] max-w-md elegant-box p-8 sm:p-10 text-center group"
          >
            <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gold-500/30 transition-colors">
              <svg
                className="w-6 h-6 text-gold-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-marble-100 mb-2">{t.contact.whatsapp}</h3>
            <p className="text-marble-200/70 text-xs sm:text-sm">{t.contact.whatsappDesc}</p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="w-full sm:w-[calc(33.333%-1rem)] max-w-md elegant-box p-8 sm:p-10 text-center group"
          >
            <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gold-500/30 transition-colors">
              <svg
                className="w-6 h-6 text-gold-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-marble-100 mb-2">{t.contact.phone}</h3>
            <p className="text-marble-200/70 text-xs sm:text-sm">{phoneNumber}</p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/Royal.Nails.Wien"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[calc(33.333%-1rem)] max-w-md elegant-box p-8 sm:p-10 text-center group"
          >
            <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gold-500/30 transition-colors">
              <svg
                className="w-6 h-6 text-gold-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-marble-100 mb-2">{t.contact.facebook}</h3>
            <p className="text-marble-200/70 text-xs sm:text-sm">Royal Nails Wien</p>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 sm:mt-24 pt-12 sm:pt-16 border-t border-gold-500/10 text-center">
        <p className="text-marble-300/70 text-sm sm:text-base mb-4 sm:mb-5">
          {t.contact.footer}
        </p>
        <p className="text-marble-300/60 text-xs sm:text-sm">
          {t.contact.footerSub}
        </p>
      </footer>
    </section>
  )
}

export default Contact
