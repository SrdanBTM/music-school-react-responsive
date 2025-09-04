
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

  const navlinkData = [
    { to: '/', title: d.nav.main.home },
    { to: '/sections', title: d.nav.main.sections },
    { to: '/about-school', title: d.nav.aboutUs.aboutTheSchool.title },
    { to: '/our-team', title: d.nav.aboutUs.ourTeam.title },
    { to: '/contact-us', title: d.nav.contact.contactDetails.title },
    { to: '/send-message', title: d.nav.contact.sendMessage.title },
    { to: '/find-us', title: d.nav.contact.findUs.title }
  ]

  return (
    <div className={`${styles.container} ${isMobileMenuOpened ? styles.show : styles.hide}`}>
      <nav>
        <ul>
          {navlinkData.map(el => {
            return (
              <li key={el.to}>
                <NavLink
                  onClick={handleNavLinkClick}
                  to={el.to}>{el.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      <button onClick={handleButtonClick}>{optionalLanguageData.nav.main.language}</button>
    </div>
  )
}

export default MobileMenu

