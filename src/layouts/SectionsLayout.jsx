
import { Outlet } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SectionsLayout = () => {
  const { setIsHomePage, currentLanguageData } = useOutletContext()

  const [section, setSection] = useState(null)

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