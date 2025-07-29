

import Wraper from '../wraper/Wraper.jsx'
import styles from './FindUs.module.css'
import { useOutletContext } from 'react-router-dom'

const FindUs = () => {
  const { currentLanguageData } = useOutletContext()
  const d = currentLanguageData

  return (
    <Wraper title={d.titles.findUsHere} paddingLeftRight0={true}>
      <div className={styles.container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.81627997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e76c256e1ef7!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1673498827925!5m2!1sen!2sau"
        ></iframe>
      </div>
    </Wraper>
  )
}

export default FindUs