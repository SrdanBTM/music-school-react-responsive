
import Wraper from '../wraper/Wraper'
import styles from './AboutSchool.module.css'
import { useOutletContext } from 'react-router-dom'

const AboutSchool = () => {

  const { currentLanguageData } = useOutletContext()
  const d = currentLanguageData


  return (
    <Wraper title={d.titles.aboutTheSchool}>
      <div className={styles.container}>
        {d.aboutTheSchool.map((paragraf, index) => {
          return (
            <p key={index}>{paragraf}</p>
          )
        })}
        <img src={`${import.meta.env.BASE_URL}images/background/bg7.jpeg`} alt="school photo" />
      </div>
    </Wraper>
  )
}

export default AboutSchool