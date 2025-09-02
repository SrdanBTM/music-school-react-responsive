
import styles from './Header.module.css'
import Logo from '../logo/Logo.jsx'
import MobileMenuButton from '../mobile-menu-button/MobileMenuButton.jsx'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react' 

const Header = ({ currentLanguageData, isMobileMenuOpened, setIsMobileMenuOpened }) => {

  const [ isScrolled, setIsScrolled ] = useState(false)
  const locationPathname = useLocation().pathname

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)

    return ()=> window.removeEventListener('scroll', handleScroll)
  },[])
  
  function handleScroll () {
   (scrollY === 0 ? setIsScrolled(false) : setIsScrolled(true))
  }

  return (
    <div
      className={`${styles.container} ${locationPathname !== '/' && styles.cover} ${isScrolled ? styles.coverBlack : styles.coverTransparent}`}
      style={{backgroundImage: locationPathname !== '/'  ? `url(${import.meta.env.BASE_URL}images/background/bg1.jpg)` : ''}}>
      <Logo
        currentLanguageData={currentLanguageData} />

      <MobileMenuButton
        isMobileMenuOpened={isMobileMenuOpened}
        setIsMobileMenuOpened={setIsMobileMenuOpened}
      />
    </div>
  )
}

export default Header