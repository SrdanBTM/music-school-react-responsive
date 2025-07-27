
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import MobileMenu from '../components/mobile-menu/MobileMenu.jsx'

import data from '../data/data.js'

const MainLayout = () => {

  const [languages, setLanguages] = useState({
    language1: 'en',
    language2: 'de'
  })

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false)

  const [isHomePage, setIsHomePage] = useState(true)


  let currentLanguageData = data[languages.language1]
  let optionalLanguageData = data[languages.language2]


  return (
    <div>
      <Header
        currentLanguageData={currentLanguageData}
        isMobileMenuOpened={isMobileMenuOpened}
        setIsMobileMenuOpened={setIsMobileMenuOpened}
      />

      <MobileMenu
        currentLanguageData={currentLanguageData}
        optionalLanguageData={optionalLanguageData}
        setLanguages={setLanguages}
        isMobileMenuOpened={isMobileMenuOpened}
      />

      <Outlet
        context={{currentLanguageData, isHomePage, setIsHomePage}}
      />

      <Footer
        currentLanguageData={currentLanguageData}
        isHomePage={isHomePage}
      />

    </div>
  )
}

export default MainLayout