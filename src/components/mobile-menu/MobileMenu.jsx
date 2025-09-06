
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
          {d.mobileMenu.map(el => {
            return (
              <li key={el.title}>
                <NavLink
                  onClick={handleNavLinkClick}
                  to={el.toPath}
                >
                  {el.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      <button onClick={handleButtonClick}>{optionalLanguageData.languageButtonTitle}</button>
    </div>
  )
}

export default MobileMenu

