

import { Link } from 'react-router-dom'

const ChooseSectionLink = ({ sectionKey, currentLanguageData, className }) => {

  const d = currentLanguageData

  return (
    <Link to={`/sections/${sectionKey}`} className={className}>
      <img
        src={`${import.meta.env.BASE_URL}${d.chooseYourSection[sectionKey].image}`}
        alt={d.chooseYourSection[sectionKey].alt} />
      <h4>{d.chooseYourSection[sectionKey].title}</h4>
    </Link>
  )
}

export default ChooseSectionLink