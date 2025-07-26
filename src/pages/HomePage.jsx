
import ChooseSection from '../components/choose-section/ChooseSection.jsx'
import FirstPage from '../components/first-page/FirstPage.jsx'
import RotatingSentences from '../components/rotating-sentences/RotatingSentences.jsx'

const HomePage = () => {
  return (
    <div>
      <FirstPage />
      <ChooseSection />
      <RotatingSentences />
    </div>
  )
}

export default HomePage