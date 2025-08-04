
import styles from './Header.module.css'
import Logo from '../logo/Logo.jsx'
import MobileMenuButton from '../mobile-menu-button/MobileMenuButton.jsx'
import { useLocation } from 'react-router-dom'

const Header = ({ currentLanguageData, isMobileMenuOpened, setIsMobileMenuOpened }) => {

  const locationPathname = useLocation().pathname

  return (
    <div
      className={`${styles.container} ${locationPathname !== '/' && styles.cover}`}
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