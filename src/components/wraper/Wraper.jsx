
import styles from './Wraper.module.css'

const Wraper = ({ title, children }) => {
  return (
    <div className={styles.container}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}

export default Wraper