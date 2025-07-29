

import Wraper from '../wraper/Wraper.jsx'
import styles from './SendMessage.module.css'
import { useOutletContext } from 'react-router-dom'

const SendMessage = () => {
  const { currentLanguageData } = useOutletContext()
  const d = currentLanguageData

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Wraper title={d.titles.sendUsMessage}>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input
          type="text"
          placeholder={d.sendUsMessage.placeholder.nameInput}
        />
        <input
          type="email"
          placeholder={d.sendUsMessage.placeholder.emailInput}
        />
        <textarea
          name=""
          id=""
          rows='10'
          placeholder={d.sendUsMessage.placeholder.textarea}
        ></textarea>
        <button className='button button-gold'>{d.button.sendMessage}</button>
      </form>
    </Wraper>
  )
}

export default SendMessage