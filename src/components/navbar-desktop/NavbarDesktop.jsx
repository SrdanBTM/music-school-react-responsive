

import styles from './NavbarDesktop.module.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const NavbarDesktop = ({ currentLanguageData }) => {

  const [isMouseEnter, setIsMouseEnter] = useState(false)

  return (
    <div className={styles.container}>
      <ul className={styles.mainNav}>
        {currentLanguageData.desktopNavbar.map(element => {

          return (
            <div key={element.title}
              onMouseEnter={() => setIsMouseEnter(element.title)}
              onMouseLeave={() => setIsMouseEnter(false)}
            >
              <li className={styles.navlinkMain}
              >
                <NavLink to={element.toPath}>
                  {element.title}
                </NavLink>
              </li>

              <div className={`
                ${styles.navlinkSubContainer} 
                ${isMouseEnter === element.title ? styles.showSubmenu : styles.hideSubmenu}`}
              >
                {element.submenu.map((item, index) => {
                  return (
                    <li key={index} className={styles.navlinkSub}>
                      {item.title}
                    </li>
                  )
                })}
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default NavbarDesktop