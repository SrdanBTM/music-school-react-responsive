
import styles from './MobileMenu.module.css'
import { NavLink } from 'react-router-dom'

const MobileMenu = ({ currentLanguageData, optionalLanguageData, setLanguages, isMobileMenuOpened, setIsMobileMenuOpened }) => {

  const home = currentLanguageData.nav.main.home
  const sections = currentLanguageData.nav.main.sections
  const aboutUs = currentLanguageData.nav.main.aboutUs
  const contact = currentLanguageData.nav.main.contact

  const en = { language1: 'en', language2: 'de' }
  const de = { language1: 'de', language2: 'en' }

  
  const handleButtonClick = () => {
    setLanguages(prev => prev.language1 === 'en' ? de : en)
    setIsMobileMenuOpened(false)
  }

  const handleNavLinkClick = ()=> {
    setIsMobileMenuOpened(false)
  }


  return (
    <div className={`${styles.container} ${isMobileMenuOpened ? styles.show : styles.hide}`}>
      <nav>
        <ul>
          <li>
            <NavLink onClick={handleNavLinkClick} to='/'>{home}</NavLink>
          </li>

          <li>
            <NavLink onClick={handleNavLinkClick} to='/sections'>{sections}</NavLink>
          </li>

          <li>
            <NavLink onClick={handleNavLinkClick} to='/about-us'>{aboutUs}</NavLink>
          </li>

          <li>
            <NavLink onClick={handleNavLinkClick} to='/contact'>{contact}</NavLink>
          </li>
        </ul>
      </nav>

      <button onClick={handleButtonClick}>{optionalLanguageData.nav.main.language}</button>
    </div>
  )
}

export default MobileMenu

