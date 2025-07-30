
import { createHashRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/HomePage.jsx'
import SectionsLayout from '../layouts/SectionsLayout.jsx'
import ChooseSection from '../components/choose-section/ChooseSection.jsx'
import OneSection from '../components/one-section/OneSection.jsx'
import AboutUsLayout from '../layouts/AboutUsLayout.jsx'
import AboutSchool from '../components/about-school/AboutSchool.jsx'
import OurTeam from '../components/our-team/OurTeam.jsx'
import ContactLayout from '../layouts/ContactLayout.jsx'
import ContactUs from '../components/contact-us/ContactUs.jsx'
import SendMessage from '../components/send-message/SendMessage.jsx'
import FindUs from '../components/find-us/FindUs.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'sections',
        element: <SectionsLayout />,
        children: [
          {
            path: '',
            element: <ChooseSection />
          },
          {
            path: ':id',
            element: <OneSection />
          }
        ]
      },
      {
        path: 'about-us',
        element: <AboutUsLayout />,
        children: [
          {
            path: '',
            element: (
              <>
                <AboutSchool />
                <OurTeam />
              </>
            )

          },
          {
            path: 'about-school',
            element: <AboutSchool />
          },
          {
            path: 'our-team',
            element: <OurTeam />
          }
        ]
      },
      {
        path: 'contact',
        element: <ContactLayout />,
        children: [
          {
            path: '',
            element: (
              <>
                <ContactUs />
                <SendMessage />
                <FindUs />
              </>
            )
          },
          {
            path: 'contact-us',
            element: <ContactUs />
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
      }
    ]
  }
]
)

export default router