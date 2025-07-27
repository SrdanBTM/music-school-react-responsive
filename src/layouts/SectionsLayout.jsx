
import { Outlet } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'

const SectionsLayout = () => {
  const { setIsHomePage } = useOutletContext()

  useEffect(() => {
    setIsHomePage(false)
  }, [])


  return (
    <div>
      <Outlet />
    </div>
  )
}

export default SectionsLayout