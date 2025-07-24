
import styles from './FirstPage.module.css'
import { useOutletContext } from 'react-router-dom'

const FirstPage = () => {
  const { currentLanguageData } = useOutletContext()
  const d = currentLanguageData

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/background/bg1.jpg)` }}>
      <div className={styles.content}>

        <div>
          <h1>{d.homeHeading}</h1>
          <h1>Harmonious Heights</h1>
        </div>

        <p>{d.homeText}</p>

        <button className='button goldButton'>{d.button.findOutMore}</button>
      </div>

    </div>
  )
}

export default FirstPage