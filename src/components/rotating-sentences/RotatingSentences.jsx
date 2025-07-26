

import styles from './RotatingSentences.module.css'
import { useOutletContext } from 'react-router-dom'

const RotatingSentences = () => {
  const { currentLanguageData, isHomePage } = useOutletContext()


  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/background/bg8.jpg)`,
        ...(isHomePage && { marginBottom: '12rem' })
      }}>
      <div className={styles.content}>
        
      </div>
    </div>
  )
}

export default RotatingSentences