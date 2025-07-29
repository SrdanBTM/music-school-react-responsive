
import { Outlet, useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'

const ContactLayout = () => {
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

export default ContactLayout