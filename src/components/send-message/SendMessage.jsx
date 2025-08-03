

import Wraper from '../wraper/Wraper.jsx'
import styles from './SendMessage.module.css'
import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import emailjs from '@emailjs/browser'


const SendMessage = () => {

  // env data
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID


  // current language data
  const { currentLanguageData } = useOutletContext()
  const d = currentLanguageData


  // buttonTitle & buttonColor state
  const [buttonTitle, setButtonTitle] = useState(d.button.sendMessage)
  const [buttonColor, setButtonColor] = useState('button-gold')


  // initFormData & formData state
  const initFormData = {
    name: '',
    email: '',
    message: ''
  }
  const [formData, setFormData] = useState(initFormData)


  // validityMessages data
  const validityMessages = {
    valueMissing: d.button.errorValueMissing,
    typeMismatch: d.button.errorTypeMismatch,
    tooShort: d.button.errorTooShort,
    badInput: d.button.errorBadInput,

    customError: d.button.errorAnother,
    patternMismatch: d.button.errorAnother,
    rangeOverflow: d.button.errorAnother,
    rangeUnderflow: d.button.errorAnother,
    stepMismatch: d.button.errorAnother,
    tooLong: d.button.errorAnother,
    valid: d.button.errorAnother,
  }

  const validityMessagesKeys = Object.keys(validityMessages)


  // submit function
  const handleSubmit = (e) => {
    e.preventDefault()

    setButtonTitle(d.button.loading)
    setButtonColor('button-loading')

    emailjs.send(
      serviceId,
      templateId,
      formData,
      publicKey
    )
      .then(() => {
        setButtonTitle(d.button.success)
        setButtonColor('button-success')
        setFormData(initFormData)
      })
      .then(() => {
        setTimeout(() => {
          setButtonTitle(d.button.sendMessage)
          setButtonColor('button-gold')
        }, 3000)
      })
      .catch(() => {
          setButtonTitle(d.button.notSent)
          setButtonColor('button-error')
      })
  }


  // invalid function
  const handleInvalid = (e) => {
    e.preventDefault()

    const validityObject = e.target.validity
    const validityError = validityMessagesKeys.find(key => validityObject[key] === true)

    setButtonTitle(validityMessages[validityError])
    setButtonColor('button-error')
  }


  // change function
  const handleChange = (e) => {
    setButtonTitle(d.button.sendMessage)
    setButtonColor('button-gold')

    const elementName = e.target.name
    const elementValue = e.target.value

    setFormData(prev => {
      return ({
        ...prev,
        [elementName]: elementValue
      })
    })
  }


  return (
    <Wraper title={d.titles.sendUsMessage}>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input
          required
          type="text"
          onInvalid={handleInvalid}

          value={formData.name}
          onChange={handleChange}

          name='name'
          placeholder={d.sendUsMessage.placeholder.nameInput}
        />

        <input
          required
          type="email"
          onInvalid={handleInvalid}

          value={formData.email}
          onChange={handleChange}

          name='email'
          placeholder={d.sendUsMessage.placeholder.emailInput}
        />

        <textarea
          required
          minLength={10}
          onInvalid={handleInvalid}

          value={formData.message}
          onChange={handleChange}

          name='message'
          rows='10'
          placeholder={d.sendUsMessage.placeholder.textarea}
        ></textarea>

        <button className={`button ${buttonColor}`}>{buttonTitle}</button>
      </form>
    </Wraper>
  )
}

export default SendMessage