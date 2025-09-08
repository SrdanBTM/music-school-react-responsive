
import Wraper from '../wraper/Wraper.jsx'
import styles from './ContactDetails.module.css'
import { useOutletContext } from 'react-router-dom'

const ContactDetails = () => {

  const { currentLanguageData } = useOutletContext()
  const d = currentLanguageData

  const contactDetailsKeys = Object.keys(d.contactDetails)

  return (
    <Wraper title={d.titles.contactDetails}>
      <div className={styles.container}>
        {contactDetailsKeys.map(key => {
          return (
            <a 
            href={d.contactDetails[key].href} 
            target={d.contactDetails[key].target} 
            rel={d.contactDetails[key].rel} 
            key={key}>
              <img src={`${import.meta.env.BASE_URL}${d.contactDetails[key].image}`} alt="icon" />
              <p>{d.contactDetails[key].title}</p>
            </a>
          )
        })}
      </div>
    </Wraper>
  )
}

export default ContactDetails