
import styles from './OneSection.module.css'
import Wraper from '../wraper/Wraper.jsx'
import { useOutletContext } from 'react-router-dom'

const OneSection = () => {

  const { currentLanguageData, section, setSection } = useOutletContext()
  const d = currentLanguageData


  return (
    <>
      {section && (
        <div>
          <Wraper title={d.sections[section].title}>
            <div className={styles.oneSectionContainer}>
              <h4>{d.sectionsTitles.description}</h4>
              <p>{d.sections[section].description}</p>

              <h4>{d.sectionsTitles.startDate}</h4>
              <p>{d.sections[section].startDate}</p>

              <h4>{d.sectionsTitles.instructor}</h4>
              <p>{d.sections[section].instructorName}{d.sections[section].instructorDescription}</p>

              <img
                src={`${import.meta.env.BASE_URL}${d.sections[section].image}`}
                alt={d.sections[section].alt} />
                
            </div>
          </Wraper>

          <Wraper title={d.titles.chooseYourSection}>
            <div className={styles.allSectionsContainer}>
              <div>All sections</div>
            </div>
          </Wraper>
        </div>
      )}
    </>

  )
}

export default OneSection