

import Wraper from '../wraper/Wraper.jsx'
import styles from './OurTeam.module.css'
import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'

const OurTeam = () => {

  const { currentLanguageData } = useOutletContext()
  const d = currentLanguageData

  const instructorKeys = Object.keys(d.ourTeam)

  const instructorKeysArray = instructorKeys.map(key => [key, false])
  const instructorKeysObject = Object.fromEntries(instructorKeysArray)
  const [showInfoState, setShowInfoState] = useState(instructorKeysObject)

  const handleClick = (key)=> {
    setShowInfoState(prev => {
      return {
        ...prev,
        [key]: !prev[key]
      }
    })
  }


  return (
    <Wraper title={d.titles.ourTeam}>
      <div className={styles.container}>
        {instructorKeys.map(key => {
          return (
            <div onClick={()=>handleClick(key)} key={key} className={styles.instructor}>
              <div className={styles.imageAndTitle}>
                <img className={showInfoState[key] ? styles.bigImage : styles.smallImage}
                  src={`${import.meta.env.BASE_URL}${d.ourTeam[key].img}`}
                  alt={`${d.ourTeam[key].name} photo`} />

                <div className={styles.title}>
                  <h4>{d.ourTeam[key].name}</h4>
                  <h4>{d.ourTeam[key].section}</h4>
                </div>
              </div>

              <div className={`${styles.info} ${showInfoState[key] ? styles.showInfo : styles.hideInfo}`}>
                <h4>{d.ourTeam[key].basicInfo}</h4>
                <p>{d.ourTeam[key].about}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Wraper>
  )
}

export default OurTeam