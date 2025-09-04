
import styles from './Header.module.css'
import Logo from '../logo/Logo.jsx'
import MobileMenuButton from '../mobile-menu-button/MobileMenuButton.jsx'
import Navbar from '../navbar/Navbar.jsx'
import FollowUs from '../follow-us/FollowUs.jsx'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const Header = ({ currentLanguageData, isMobileMenuOpened, setIsMobileMenuOpened }) => {

  const isMobile = useMediaQuery({ maxWidth: 1024 })
  const isSmallDesktop = useMediaQuery({ minWidth: 1025, maxWidth: 1280 })


  const [isScrolled, setIsScrolled] = useState(false)

  const locationPathname = useLocation().pathname

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll() {
    (scrollY === 0 ? setIsScrolled(false) : setIsScrolled(true))
  }

  return (
    <div
      className={`
      ${styles.container} 
      ${locationPathname !== '/' && styles.cover} 
      ${isScrolled ? styles.coverBlack : styles.coverTransparent}`}>

      {isMobile &&
        <div className={styles.containerMobile}>
          <Logo
            currentLanguageData={currentLanguageData} />
          <MobileMenuButton
            isMobileMenuOpened={isMobileMenuOpened}
            setIsMobileMenuOpened={setIsMobileMenuOpened}
          />
        </div>
      }

      {isSmallDesktop &&
        <div className={styles.containerSmallDesktop}>
          <div className={styles.logoAndSocialAndLanguage}>
            <Logo
              currentLanguageData={currentLanguageData} />
            <div className={styles.socialAndLanguage}>
              <FollowUs />
              <div>language button</div>
            </div>
          </div>
          
          <Navbar />
        </div>
      }

    </div>
  )
}

export default Header