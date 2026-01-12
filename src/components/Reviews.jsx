import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Reviews = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })

  const reviews = [
    {
      name: t.reviews.review1.name,
      text: t.reviews.review1.text,
      rating: 5,
    },
    {
      name: t.reviews.review2.name,
      text: t.reviews.review2.text,
      rating: 5,
    },
    {
      name: t.reviews.review3.name,
      text: t.reviews.review3.text,
      rating: 5,
    },
  ]

  return (
    <section
      id="reviews"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 section-gradient"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 
            ref={titleRef}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 sm:mb-10 text-gradient-shimmer leading-normal pb-2 scroll-reveal ${titleRevealed ? 'revealed' : ''}`}
            style={{ lineHeight: '1.2', paddingBottom: '0.5rem' }}
          >
            {t.reviews.title}
          </h2>
          <div className={`w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full scroll-reveal ${titleRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}></div>
        </div>

        <div className="flex flex-wrap gap-6 sm:gap-8 justify-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-lg elegant-box p-8 sm:p-10 scroll-reveal ${titleRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${0.3 + (index * 0.1)}s` }}
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-marble-100/95 leading-relaxed mb-6 italic text-base sm:text-lg">
                "{review.text}"
              </p>
              <p className="text-gold-400 font-semibold text-base sm:text-lg">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
