
import { createHashRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout.jsx'
import ChooseSection from '../components/choose-section/ChooseSection.jsx'
import OneSection from '../components/one-section/OneSection.jsx'
import AboutSchool from '../components/about-school/AboutSchool.jsx'
import OurTeam from '../components/our-team/OurTeam.jsx'
import ContactDetails from '../components/contact-details/ContactDetails.jsx'
import SendMessage from '../components/send-message/SendMessage.jsx'
import FindUs from '../components/find-us/FindUs.jsx'
import FirstPage from '../components/first-page/FirstPage.jsx'
import RotatingSentences from '../components/rotating-sentences/RotatingSentences.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element:
          <>
            <FirstPage />
            <ChooseSection />
            <RotatingSentences />
          </>
      },
      {
        path: 'sections',
        element: <ChooseSection />
      },
      {
        path: 'sections/:id',
        element: <OneSection />
      },
      {
        path: 'about-us',
        element:
          <>
            <AboutSchool />
            <OurTeam />
          </>
      },
      {
        path: 'about-school',
        element: <AboutSchool />
      },
      {
        path: 'our-team',
        element: <OurTeam />
      },
      {
        path: 'contact',
        element:
          <>
            <ContactDetails />
            <SendMessage />
            <FindUs />
          </>
      },
      {
        path: 'contact-details',
        element: <ContactDetails />
      },
      {
        path: 'send-message',
        element: <SendMessage />
      },
      {
        path: 'find-us',
        element: <FindUs />
      }
    ]
  }])



export default router


// DODATNO:
// mozda izbaciti sve layoute osim MainLayout, da svi elementi budu schildren od MainLayout
// takodje mozda obrisati HomePage



