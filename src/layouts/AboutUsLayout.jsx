
import { Outlet, useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'

const AboutUsLayout = () => {
  const { currentLanguageData, setIsHomePage } = useOutletContext()

  useEffect(() => {
    setIsHomePage(false)
  }, [])


  return (
    <div>
      <Outlet context={{ currentLanguageData }} />
    </div>
  )
}

export default AboutUsLayout