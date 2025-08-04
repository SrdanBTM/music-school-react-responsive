
import { Outlet, useOutletContext } from 'react-router-dom'


const AboutUsLayout = () => {
  const { currentLanguageData } = useOutletContext()

  return (
    <div>
      <Outlet context={{ currentLanguageData }} />
    </div>
  )
}

export default AboutUsLayout