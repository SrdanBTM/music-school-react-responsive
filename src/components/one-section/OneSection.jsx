
import styles from './OneSection.module.css'
import Wraper from '../wraper/Wraper.jsx'
import { useOutletContext, useParams } from 'react-router-dom'
import ChooseSectionLink from '../choose-section-link/ChooseSectionLink.jsx'

const OneSection = () => {

  const { id } = useParams()

  const { currentLanguageData } = useOutletContext()
  const d = currentLanguageData

  const allSectionKeys = Object.keys(d.chooseYourSection)
  const allAnotherSectionsKeys = allSectionKeys.filter(key => key != id)


  return (
    <>
      <Wraper title={d.sections[id].title}>
        <div className={styles.oneSectionContainer}>
          <h4>{d.sectionsTitles.description}</h4>
          <p>{d.sections[id].description}</p>

          <h4>{d.sectionsTitles.startDate}</h4>
          <p>{d.sections[id].startDate}</p>

          <h4>{d.sectionsTitles.instructor}</h4>
          <p>{d.sections[id].instructorName}{d.sections[id].instructorDescription}</p>

          <img
            src={`${import.meta.env.BASE_URL}${d.sections[id].image}`}
            alt={d.sections[id].alt} />

        </div>
      </Wraper>

      <Wraper title={d.titles.chooseAnotherSection}>
        <div className={styles.allAnotherSectionsContainer}>
          {allAnotherSectionsKeys.map(key => {
            return (
              <ChooseSectionLink
                key={key}
                id={id}
                className={styles.section}
                sectionKey={key}
                currentLanguageData={currentLanguageData} />
            )
          })}
        </div>
      </Wraper>
    </>

  )
}

export default OneSection