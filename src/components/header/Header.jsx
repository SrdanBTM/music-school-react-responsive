
import styles from './Header.module.css'
import Logo from '../logo/Logo.jsx'
import MobileMenuButton from '../mobile-menu-button/MobileMenuButton.jsx'

const Header = ({ currentLanguageData, isMobileMenuOpened, setIsMobileMenuOpened }) => {

  return (
    <div className={styles.container}>
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