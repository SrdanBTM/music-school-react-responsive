
import styles from './Header.module.css'
import Logo from '../logo/Logo.jsx'
import MobileMenuButton from '../mobile-menu-button/MobileMenuButton.jsx'

const Header = ({ currentLanguageData, isMobileMenuOpened, setIsMobileMenuOpened, isHomePage }) => {

  return (
    <div
      className={styles.container}
      style={{backgroundImage: !isHomePage ? `url(${import.meta.env.BASE_URL}images/background/bg1.jpg)` : ''}}>
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