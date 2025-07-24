
import styles from './FollowUs.module.css'

const FollowUs = () => {

  const followData = {
    youtube: {
      href: 'https://www.youtube.com',
      src: `images/icons/youtube-icon.png`,
      alt: 'youtube icon'
    },
    twitter: {
      href: 'https://www.twitter.com',
      src: `images/icons/twitter-icon.png`,
      alt: 'twitter icon'
    },
    facebook: {
      href: 'https://www.facebook.com',
      src: `images/icons/facebook-icon.png`,
      alt: 'facebook icon'
    }
  }


  return (
    <div className={styles.container}>
      {Object.keys(followData).map(key => {
        return (
          <a href={followData[key].href} key={key}>
            <img src={followData[key].src} alt={followData[key].alt} />
          </a>
        )
      })}
    </div>
  )
}

export default FollowUs