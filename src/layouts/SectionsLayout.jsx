
import { Outlet } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'

const SectionsLayout = () => {
  const { setIsHomePage, currentLanguageData, section, setSection } = useOutletContext()

  useEffect(() => {
    setIsHomePage(false)
  }, [])


  return (
    <div>
      <Outlet context={{currentLanguageData, section, setSection}} />
    </div>
  )
}

export default SectionsLayout