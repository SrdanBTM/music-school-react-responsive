
import styles from './Wraper.module.css'

const Wraper = ({ title, children, paddingLeftRight0 }) => {

  return (
    <div className={`${styles.container} ${paddingLeftRight0 ? styles.paddingLeftRight0 : ''}`}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}

export default Wraper