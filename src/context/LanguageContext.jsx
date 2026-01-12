import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first, default to 'ro' (Romanian)
    const saved = localStorage.getItem('language')
    return saved || 'ro'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => {
      if (prev === 'ro') return 'de'
      if (prev === 'de') return 'en'
      return 'ro'
    })
  }

  const getLanguageLabel = () => {
    if (language === 'de') return 'DE'
    if (language === 'en') return 'EN'
    return 'RO'
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, getLanguageLabel }}>
      {children}
    </LanguageContext.Provider>
  )
}
