
import { useOutletContext, Outlet } from 'react-router-dom'


const SectionsLayout = () => {
  const { currentLanguageData } = useOutletContext()

  return (
    <div>
      <Outlet context={{ currentLanguageData }} />
    </div>
  )
}

export default SectionsLayout