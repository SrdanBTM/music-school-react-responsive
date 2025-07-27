
import { useOutletContext, Link } from 'react-router-dom'
import styles from './ChooseSection.module.css'
import Wraper from '../wraper/Wraper.jsx'

const ChooseSection = () => {
  const { currentLanguageData, setSection } = useOutletContext()
  const d = currentLanguageData
  const keys = Object.keys(d.chooseYourSection)


  return (
    <Wraper title={d.titles.chooseYourSection}>
      <div className={styles.container}>
        {keys.map(key => {
          return (
            <Link onClick={() => setSection(key)} to='/sections/one-section' key={key} className={styles.section}>
              <img
                src={`${import.meta.env.BASE_URL}${d.chooseYourSection[key].image}`}
                alt={d.chooseYourSection[key].alt} />
              <h4>{d.chooseYourSection[key].title}</h4>
            </Link>
          )
        })}
      </div>
    </Wraper>
  )
}

export default ChooseSection