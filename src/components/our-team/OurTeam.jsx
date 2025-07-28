

import Wraper from '../wraper/Wraper.jsx'
import styles from './OurTeam.module.css'
import { useOutletContext } from 'react-router-dom'

const OurTeam = () => {

  const { currentLanguageData } = useOutletContext()
  const d = currentLanguageData

  return (
    <Wraper title={d.titles.ourTeam}>
      <div className={styles.container}>
        OurTeam
      </div>
    </Wraper>
  )
}

export default OurTeam