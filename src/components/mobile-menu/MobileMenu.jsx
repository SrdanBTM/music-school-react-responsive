
import styles from './MobileMenu.module.css'
import { NavLink } from 'react-router-dom'

const MobileMenu = ({ currentLanguageData, optionalLanguageData, setLanguages, isMobileMenuOpened }) => {

  const home = currentLanguageData.nav.main.home
  const sections = currentLanguageData.nav.main.sections
  const aboutUs = currentLanguageData.nav.main.aboutUs
  const contact = currentLanguageData.nav.main.contact

  const en = { language1: 'en', language2: 'de' }
  const de = { language1: 'de', language2: 'en' }

  const handleClick = () => {
    setLanguages(prev => prev.language1 === 'en' ? de : en)
  }


  return (
    <div className={`${styles.container} ${isMobileMenuOpened ? styles.show : styles.hide}`}>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>{home}</NavLink>
          </li>

          <li>
            <NavLink to='/sections'>{sections}</NavLink>
          </li>

          <li>
            <NavLink to='/about-us'>{aboutUs}</NavLink>
          </li>

          <li>
            <NavLink to='/contact'>{contact}</NavLink>
          </li>
        </ul>
      </nav>

      <button onClick={handleClick}>{optionalLanguageData.nav.main.language}</button>
    </div>
  )
}

export default MobileMenu

