
import { createHashRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/HomePage.jsx'
import SectionsLayout from '../layouts/SectionsLayout.jsx'
import ChooseSection from '../components/choose-section/ChooseSection.jsx'
import OneSection from '../components/one-section/OneSection.jsx'
import AboutUsLayout from '../layouts/AboutUsLayout.jsx'

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
            element: 'ABOUT SCHOOL PAGE & OUR TEAM PAGE'
          },
          {
            path: 'about-school',
            element: 'ABOUT SCHOOL PAGE'
          },
          {
            path: 'our-team',
            element: 'OUR TEAM PAGE'
          }
        ]
      },
      {
        path: 'contact',
        element: 'CONTACT LAYOUT',
        children: [
          {
            path: '',
            element: 'CONTACT US PAGE, SEND MESSAGE PAGE , FIND US PAGE'
          },
          {
            path: 'contact-us',
            element: 'CONTACT US PAGE'
          },
          {
            path: 'send-message',
            element: 'SEND MESSAGE PAGE'
          },
          {
            path: 'find-us',
            element: 'FIND US PAGE'
          }
        ]
      }
    ]
  }
]
)

export default router