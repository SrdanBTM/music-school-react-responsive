
import styles from './MobileMenuButton.module.css'

const MobileMenuButton = ({ isMobileMenuOpened, setIsMobileMenuOpened }) => {

  const handleClick = () => {
    setIsMobileMenuOpened(prev => !prev)
  }

  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={`
        ${styles.image} 
        ${isMobileMenuOpened ? styles.opacity0 : styles.opacity1}
        ${isMobileMenuOpened ? styles.delayOff : styles.delayOn}
        ${isMobileMenuOpened ? styles.pointerEventsOff : styles.pointerEventsOn}
        `}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/icons/open-menu-icon.png`}
          alt='close menu icon'
        />
      </div>

      <div className={`
        ${styles.image} 
        ${isMobileMenuOpened ? styles.opacity1 : styles.opacity0}
        ${isMobileMenuOpened ? styles.delayOn : styles.delayOff}
        ${isMobileMenuOpened ? styles.pointerEventsOn : styles.pointerEventsOff}
        `}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/icons/close-menu-icon.png`}
          alt='open menu icon'
        />
      </div>

    </div>
  )
}

export default MobileMenuButton