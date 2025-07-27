

import styles from './RotatingSentences.module.css'
import { useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'

const RotatingSentences = () => {
  const { currentLanguageData, isHomePage } = useOutletContext()

  const allSentences = currentLanguageData.rotatingSentences

  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [classPosition, setClassPosition] = useState('startPosition')


  useEffect(() => {
    setClassPosition('middlePosition')

    const endPosition = setTimeout(() => {
      setClassPosition('endPosition')
    }, 2900)

    const startPosition = setTimeout(() => {
      setClassPosition('startPosition')
    }, 4500)

    const setSentence = setTimeout(() => {
      setSentenceIndex(prev => prev < allSentences.length - 1 ? prev + 1 : prev = 0)
    }, 4600)

    return () => {
      clearTimeout(endPosition)
      clearTimeout(startPosition)
      clearTimeout(setSentence)
    }

  }, [sentenceIndex])




  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/background/bg8.jpg)`,
        ...(isHomePage && { marginBottom: '12rem' })
      }}>
      <div className={styles.content}>
        <p className={styles[classPosition]}>{allSentences[sentenceIndex]}</p>
      </div>
    </div>
  )
}

export default RotatingSentences