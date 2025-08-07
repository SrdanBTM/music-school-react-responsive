
import styles from './MobileMenu.module.css'
import { NavLink } from 'react-router-dom'

const MobileMenu = ({ currentLanguageData, optionalLanguageData, setLanguages, isMobileMenuOpened, setIsMobileMenuOpened }) => {

  const d = currentLanguageData

  const en = { language1: 'en', language2: 'de' }
  const de = { language1: 'de', language2: 'en' }

  const handleButtonClick = () => {
    setLanguages(prev => prev.language1 === 'en' ? de : en)
    setIsMobileMenuOpened(false)
  }

  const handleNavLinkClick = () => {
    setIsMobileMenuOpened(false)
  }

  return (
    <div className={`${styles.container} ${isMobileMenuOpened ? styles.show : styles.hide}`}>
      <nav>
        <ul>
          <li>
            <NavLink
              onClick={handleNavLinkClick}
              to='/'>{d.nav.main.home}
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={handleNavLinkClick}
              to='/sections'>{d.nav.main.sections}
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={handleNavLinkClick}
              to='/about-school'>{d.nav.aboutUs.aboutTheSchool.title}
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={handleNavLinkClick}
              to='/our-team'>{d.nav.aboutUs.ourTeam.title}
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={handleNavLinkClick}
              to='/contact-us'>{d.nav.contact.contactDetails.title}
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={handleNavLinkClick}
              to='/send-message'>{d.nav.contact.sendMessage.title}
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={handleNavLinkClick}
              to='/find-us'>{d.nav.contact.findUs.title}
            </NavLink>
          </li>
        </ul>
      </nav>

      <button onClick={handleButtonClick}>{optionalLanguageData.nav.main.language}</button>
    </div>
  )
}

export default MobileMenu

