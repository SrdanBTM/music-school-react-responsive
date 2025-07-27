
import styles from './OneSection.module.css'
import Wraper from '../wraper/Wraper.jsx'
import { useOutletContext } from 'react-router-dom'

const OneSection = () => {

  const { currentLanguageData, section, setSection } = useOutletContext()
  const d = currentLanguageData

  return (
    <Wraper title='Section'>
      <div className={styles.container}>
        <div>All sections</div>
        <div>{section}</div>
      </div>
    </Wraper>
  )
}

export default OneSection