
import { Link } from 'react-router-dom'
import styles from './AnyQuestion.module.css'

const AnyQuestion = ({ currentLanguageData }) => {
  const d = currentLanguageData

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>{d.anyQuestionText}</p>
        <Link to='/send-message' className='button button-gray'>{d.button.contact}</Link>
      </div>
    </div>
  )
}

export default AnyQuestion