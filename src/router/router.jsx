
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/HomePage.jsx'

const router = createBrowserRouter([
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
        element: 'SECTIONS LAYOUT',
        shildren: [
          {
            path: '',
            element: 'CHOOSE SECTION PAGE'
          },
          {
            path: 'one-section',
            element: 'ONE SECTION PAGE'
          }
        ]
      },
      {
        path: 'about-us',
        element: 'ABOUT US LAYOUT',
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
],
{
  basename: '/music-school-react-responsive'
}
)

export default router