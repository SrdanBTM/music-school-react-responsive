
import { useOutletContext } from 'react-router-dom'
import styles from './ChooseSection.module.css'
import Wraper from '../wraper/Wraper.jsx'
import ChooseSectionLink from '../choose-section-link/ChooseSectionLink.jsx'

const ChooseSection = () => {
  const { currentLanguageData, setSection } = useOutletContext()
  const keys = Object.keys(currentLanguageData.chooseYourSection)
  const d = currentLanguageData

  return (
    <Wraper title={d.titles.chooseYourSection}>
      <div className={styles.container}>
        {keys.map(key => {
          return (
            <ChooseSectionLink
              key={key}
              className={styles.section}
              currentLanguageData={currentLanguageData}
              setSection={setSection}
              sectionKey={key}
            />
          )
        })}
      </div>
    </Wraper>
  )
}

export default ChooseSection