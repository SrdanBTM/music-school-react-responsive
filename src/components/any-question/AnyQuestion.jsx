

import styles from './AnyQuestion.module.css'

const AnyQuestion = ({ currentLanguageData }) => {
  const d = currentLanguageData

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>{d.anyQuestionText}</p>
        <button className='button button-gray'>{d.button.contact}</button>
      </div>
    </div>
  )
}

export default AnyQuestion