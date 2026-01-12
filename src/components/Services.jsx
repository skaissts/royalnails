import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ServiceCategory = ({ category, categoryIndex, servicesCount, t }) => {
  const [categoryRef, categoryRevealed] = useScrollReveal({ threshold: 0.15 })
  
  return (
    <div ref={categoryRef} className={`scroll-reveal ${categoryRevealed ? 'revealed' : ''}`} style={{ transitionDelay: `${categoryIndex * 0.1}s` }}>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-gold-400 mb-6 text-center leading-tight">
        {t.services.category[category.categoryKey]}
      </h3>
      <div className={`flex flex-col gap-2 sm:gap-3`}>
        {category.services.map((service, serviceIndex) => {
          return (
            <React.Fragment key={serviceIndex}>
              <div
                className={`w-full elegant-box p-3 sm:p-4 scroll-reveal ${categoryRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${(categoryIndex * 0.1) + (serviceIndex * 0.05)}s` }}
              >
                <div className="flex justify-between items-center gap-4">
                  <h4 className="text-base sm:text-lg font-medium text-marble-100 flex-1">
                    {t.services.items[service.key]}
                  </h4>
                  <span className="text-gold-400 font-semibold text-lg sm:text-xl whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
              </div>
              {serviceIndex < category.services.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-gold-500/8 to-transparent"></div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

const Services = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })

  const serviceCategories = [
    {
      categoryKey: 'maintenance',
      services: [
        { key: 'maintenance13', price: '€75' },
        { key: 'maintenance45', price: '€80' },
      ],
    },
    {
      categoryKey: 'construction',
      services: [
        { key: 'construction13', price: '€90' },
        { key: 'construction34', price: '€95' },
      ],
    },
    {
      categoryKey: 'services',
      services: [
        { key: 'slim', price: '€110' },
        { key: 'semiApex', price: '€55' },
        { key: 'semiApex12', price: '€60' },
        { key: 'modeling', price: '+€10' },
        { key: 'pedicure', price: '€60' },
      ],
    },
    {
      categoryKey: 'extras',
      services: [
        { key: 'french', price: '+€10' },
        { key: 'babyboomer', price: '+€10' },
        { key: 'model', price: '€4-10' },
        { key: 'repair', price: '+€5' },
        { key: 'removal', price: '€35' },
      ],
    },
  ]

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 section-gradient"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 
            ref={titleRef}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 sm:mb-10 text-gradient-shimmer leading-tight scroll-reveal ${titleRevealed ? 'revealed' : ''}`}
          >
            {t.services.title}
          </h2>
          <div className={`w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full scroll-reveal ${titleRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}></div>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {serviceCategories.map((category, categoryIndex) => {
            const servicesCount = category.services.length
            
            return (
              <ServiceCategory
                key={categoryIndex}
                category={category}
                categoryIndex={categoryIndex}
                servicesCount={servicesCount}
                t={t}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
