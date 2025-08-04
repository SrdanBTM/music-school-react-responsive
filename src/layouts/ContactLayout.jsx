
import { Outlet, useOutletContext } from 'react-router-dom'


const ContactLayout = () => {
  const { currentLanguageData } = useOutletContext()

  return (
    <div>
      <Outlet context={{ currentLanguageData }} />
    </div>
  )
}

export default ContactLayout