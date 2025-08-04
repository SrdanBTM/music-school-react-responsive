
import AnyQuestion from '../any-question/AnyQuestion.jsx'
import FollowUs from '../follow-us/FollowUs.jsx'
import styles from './Footer.module.css'
import { useLocation } from 'react-router-dom'

const Footer = ({ currentLanguageData }) => {
  const d = currentLanguageData

  const locationPathname = useLocation().pathname

  const BASE_URL = import.meta.env.BASE_URL

  const contactKeys = Object.keys(d.footer.contact)
  const operatingKeys = Object.keys(d.footer.operatingHours)

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${BASE_URL}images/background/bg2.jpg)`,
        ...(locationPathname === '/' && { paddingTop: `12rem` })
      }}>

      {locationPathname === '/' && <AnyQuestion currentLanguageData={currentLanguageData} />}

      <div className={styles.top}>
        <div className={styles.contact}>
          <h4>{d.titles.contact}</h4>
          <div>
            {contactKeys.map(key => {
              return (
                <span key={key}>
                  <img src={`${BASE_URL}${d.footer.contact[key].image}`} alt="contact icon" />
                  <p>{d.footer.contact[key].text}</p>
                </span>
              )
            })}
          </div>
        </div>

        <div className={styles.operating}>
          <h4>{d.titles.operatingHours}</h4>
          <div>
            {operatingKeys.map(key => {
              return (
                <span key={key}>
                  <img src={`${BASE_URL}${d.footer.operatingHours[key].image}`} alt="contact icon" />
                  <p>{d.footer.operatingHours[key].text}</p>
                </span>
              )
            })}
          </div>
        </div>

        <div className={styles.follow}>
          <h4>{d.titles.followUs}</h4>
          <FollowUs />
        </div>
      </div>

      <div className={styles.bottom}>
        <p>{d.footer.footerText}</p>
      </div>

    </div>
  )
}

export default Footer