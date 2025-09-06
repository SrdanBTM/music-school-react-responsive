

import styles from './LanguageButtonDesktop.module.css'

const LanguageButtonDesktop = ({ currentLanguageData, optionalLanguageData, setLanguages }) => {

  const en = { language1: 'en', language2: 'de' }
  const de = { language1: 'de', language2: 'en' }

  function handleButtonClick() {
    setLanguages(prev => prev.language1 === 'en' ? de : en)
  }

  return (
    <div className={styles.container}>
      <button className={styles.buttonCurrent}>
        {currentLanguageData.languageButtonTitle}
      </button>
      <button onClick={handleButtonClick} className={styles.buttonOptional}>
        {optionalLanguageData.languageButtonTitle}
      </button>
    </div>
  )
}

export default LanguageButtonDesktop