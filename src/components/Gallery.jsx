import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Gallery = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedImage, setSelectedImage] = useState(null)
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })

  // Gallery images - using actual image files
  const galleryImages = [
    {
      id: 1,
      url: '/gallery/598051790_1205914111510805_9076525390770941372_n 2.jpg',
      alt: 'Nail art design',
    },
    {
      id: 2,
      url: '/gallery/598295032_1208033604632189_2476799414193012052_n 2.jpg',
      alt: 'Nail art design',
    },
    {
      id: 3,
      url: '/gallery/598326117_1208033607965522_7209665534595208086_n 2.JPG',
      alt: 'Nail art design',
    },
    {
      id: 4,
      url: '/gallery/599946564_1208034211298795_8350265286787186597_n 2.jpg',
      alt: 'Nail art design',
    },
    {
      id: 5,
      url: '/gallery/600391347_1207016758067207_3417497543707363989_n 2.jpg',
      alt: 'Nail art design',
    },
    {
      id: 6,
      url: '/gallery/600537667_1207258948042988_8821653922582293307_n 2.jpg',
      alt: 'Nail art design',
    },
    {
      id: 7,
      url: '/gallery/601938966_1210031831099033_3460842675162583265_n 2.jpg',
      alt: 'Nail art design',
    },
    {
      id: 8,
      url: '/gallery/602953746_1209554474480102_7463360168299855010_n 2.jpg',
      alt: 'Nail art design',
    },
    {
      id: 9,
      url: '/gallery/603867210_1208034197965463_8464451941140470390_n 2.jpg',
      alt: 'Nail art design',
    },
  ]

  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section
        id="gallery"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 section-gradient-light"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 
              ref={titleRef}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 sm:mb-10 text-gradient-shimmer leading-tight scroll-reveal ${titleRevealed ? 'revealed' : ''}`}
            >
              {t.gallery.title}
            </h2>
            <div className={`w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full scroll-reveal ${titleRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}></div>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => openModal(image)}
                className={`w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.67rem)] aspect-square overflow-hidden elegant-box group cursor-pointer relative max-w-md scroll-reveal ${titleRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${(image.id - 1) * 0.05}s` }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const placeholder = e.target.parentElement.querySelector('.placeholder')
                    if (placeholder) placeholder.style.display = 'flex'
                  }}
                />
                <div className="placeholder hidden absolute inset-0 bg-gradient-to-br from-gold-900/20 via-black to-gold-900/20 items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gold-500/30 group-hover:text-gold-400/50 transition-colors"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <a
              href="https://www.facebook.com/Royal.Nails.Wien"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              {t.gallery.facebook}
            </a>
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors z-10"
            aria-label="Close"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default Gallery
