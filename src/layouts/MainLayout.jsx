
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './MainLayout.module.css'

import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import MobileMenu from '../components/mobile-menu/MobileMenu.jsx'

import data from '../data/data1.js'

const MainLayout = () => {

  const [languages, setLanguages] = useState({
    language1: 'en',
    language2: 'de'
  })


  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false)


  const locationPathname = useLocation().pathname
  const { id } = useParams()
  

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: id ? 'smooth' : 'auto'
    })
  },[locationPathname])


  let currentLanguageData = data[languages.language1]
  let optionalLanguageData = data[languages.language2]


  return (
    <div>
      <Header
        currentLanguageData={currentLanguageData}
        optionalLanguageData={optionalLanguageData}
        isMobileMenuOpened={isMobileMenuOpened}
        setIsMobileMenuOpened={setIsMobileMenuOpened}
        setLanguages={setLanguages}
      />

      <MobileMenu
        currentLanguageData={currentLanguageData}
        optionalLanguageData={optionalLanguageData}
        setLanguages={setLanguages}
        isMobileMenuOpened={isMobileMenuOpened}
        setIsMobileMenuOpened={setIsMobileMenuOpened}
      />

      <div className={locationPathname !== '/' ? styles.outletContainer : ''}>
        <Outlet
          context={{ currentLanguageData }}
        />
      </div>

      <Footer
        currentLanguageData={currentLanguageData}
      />

    </div>
  )
}

export default MainLayout