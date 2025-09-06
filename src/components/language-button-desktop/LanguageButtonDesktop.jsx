

import styles from './LanguageButtonDesktop.module.css'
import { useState } from 'react'

const LanguageButtonDesktop = ({ currentLanguageData, optionalLanguageData, setLanguages }) => {

  const en = { language1: 'en', language2: 'de' }
  const de = { language1: 'de', language2: 'en' }

  const [isHover, setIsHover] = useState(false)

  function handleButtonClick() {
    setLanguages(prev => prev.language1 === 'en' ? de : en)
  }

  return (
    <div className={styles.container}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <button className={styles.buttonCurrent}>
        {currentLanguageData.languageButtonTitle}
      </button>
      <button
        onClick={handleButtonClick}
        className={`${styles.buttonOptional} ${isHover ? styles.showOptionalLanguage : styles.hideOptionalLanguage}`}
      >
        {optionalLanguageData.languageButtonTitle}
      </button>
    </div>
  )
}

export default LanguageButtonDesktop