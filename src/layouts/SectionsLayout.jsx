
import { Outlet } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'

const SectionsLayout = () => {
  const { setIsHomePage, currentLanguageData } = useOutletContext()

  useEffect(() => {
    setIsHomePage(false)
  }, [])


  return (
    <div>
      <Outlet context={{currentLanguageData}} />
    </div>
  )
}

export default SectionsLayout