

import styles from './Logo.module.css'

const Logo = ({ currentLanguageData }) => {

  const logoIcon = `${import.meta.env.BASE_URL}images/icons/logo-icon.png`

  return (
    <div className={styles.container}>
        <img src={logoIcon} alt="logo" />
        <div className={styles.title}>
          <p>Harmonious Heights</p>
          <p>{currentLanguageData.homeHeading}</p>
        </div>
    </div>
  )
}

export default Logo